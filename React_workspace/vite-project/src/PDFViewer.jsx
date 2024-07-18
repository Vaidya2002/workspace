import React, { useEffect, useRef } from 'react';
import { getDocument, GlobalWorkerOptions } from 'pdfjs-dist/build/pdf';
import 'tailwindcss/tailwind.css';

const PDFViewer = () => {
    const pdfContainerRef = useRef(null);

    const loadPDF = () => {
        const url = '/Day 1.pdf'; // Path to the PDF in the public folder

        const loadingTask = getDocument(url);
        loadingTask.promise.then((pdf) => {
            const pdfContainer = pdfContainerRef.current;
            pdfContainer.innerHTML = ''; // Clear previous content

            // Determine scale factor based on screen width
            const scale = window.innerWidth <= 768 ? 0.9 : 1.0;

            // Render each page with the determined scale
            for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
                renderPage(pdf, pageNum, pdfContainer, scale);
            }
        }).catch((error) => {
            console.error('Error loading PDF:', error);
        });
    };

    const renderPage = (pdf, pageNum, container, scale = 1.0) => {
        pdf.getPage(pageNum).then((page) => {
            const viewport = page.getViewport({ scale });

            const canvas = document.createElement('canvas');
            canvas.className = 'pdf-page';
            const context = canvas.getContext('2d');
            canvas.height = viewport.height;
            canvas.width = viewport.width;

            const renderContext = {
                canvasContext: context,
                viewport,
            };

            const renderTask = page.render(renderContext);
            renderTask.promise.then(() => {
                container.appendChild(canvas);
                console.log('Page rendered');
            }).catch((error) => {
                console.error(`Error rendering page ${pageNum}:`, error);
            });
        }).catch((error) => {
            console.error(`Error getting page ${pageNum}:`, error);
        });
    };

    useEffect(() => {
        import('pdfjs-dist').then(pdfjs => {
            GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
            loadPDF();
        }).catch(error => {
            console.error('Error initializing pdfjs-dist:', error);
        });

        const handleResize = () => {
            loadPDF(); // Reload PDF with updated scale on resize
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-xl font-semibold mb-4">PDF Viewer</h2>
            <div
                id="pdf-container"
                ref={pdfContainerRef}
                className="w-full h-full overflow-auto"
                style={{ width: '100%', height: '600px' }}
            ></div>
        </div>
    );
};

export default PDFViewer;
