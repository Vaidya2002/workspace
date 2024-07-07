import React, { useState, useEffect, useRef } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { getDocument, GlobalWorkerOptions } from 'pdfjs-dist/build/pdf';
import 'bootstrap/dist/css/bootstrap.min.css';

const PDFViewer = () => {
    const [show, setShow] = useState(false);
    const pdfContainerRef = useRef(null);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const loadPDF = () => {
        const url = 'src/Day 1.pdf'; // Replace with your PDF file URL

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
            });
        });
    };

    useEffect(() => {
        if (show) {
            import('pdfjs-dist').then(pdfjs => {
                GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
                loadPDF();
            }).catch(error => {
                console.error('Error initializing pdfjs-dist:', error);
            });
        }

        const handleResize = () => {
            if (show) {
                loadPDF(); // Reload PDF with updated scale on resize
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [show]);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                View PDF
            </Button>

            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>PDF Viewer</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ maxHeight: '750px', overflowY: 'auto' }}>
                    <div id="pdf-container" ref={pdfContainerRef} style={{ width: '100%', height: '600px', overflow: 'auto' }}></div>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default PDFViewer;
