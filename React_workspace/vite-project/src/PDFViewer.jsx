import React, { useState } from 'react';
import { getDocument } from 'pdfjs-dist/build/pdf'; // Import specific function from PDF.js

import './styles.css'; // Import CSS styles for the component

const PDFViewer = () => {
  const [modalOpen, setModalOpen] = useState(false); // State hook for modal visibility
  const [pages, setPages] = useState([]); // State hook for storing rendered PDF pages

  // Function to open the modal and load PDF
  const openModal = () => {
    setModalOpen(true);
    loadPDF();
  };

  // Function to close the modal and clear pages
  const closeModal = () => {
    setModalOpen(false);
    setPages([]);
  };

  // Function to load the PDF using PDF.js
  const loadPDF = () => {
    const url = '/Day 1.pdf'; // Adjust the PDF URL as needed

    // Configure the worker source URL
    window.pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/pdf.worker.min.js';


    // Load the PDF document
    const loadingTask = getDocument(url);
    loadingTask.promise.then((pdf) => {
      const newPages = [];
      for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
        renderPage(pdf, pageNum, newPages);
      }
      setPages(newPages);
    }).catch((error) => {
      console.error('Error loading PDF:', error);
    });
  };

  // Function to render a page of the PDF
  const renderPage = (pdf, pageNum, pagesArray) => {
    pdf.getPage(pageNum).then((page) => {
      const scale = 1.0; // Adjust scale factor to make PDF smaller
      const viewport = page.getViewport({ scale });

      const canvas = document.createElement('canvas');
      canvas.className = 'pdf-page';
      const context = canvas.getContext('2d');
      canvas.height = viewport.height;
      canvas.width = viewport.width;

      const renderContext = {
        canvasContext: context,
        viewport: viewport
      };

      const renderTask = page.render(renderContext);
      renderTask.promise.then(() => {
        pagesArray.push(canvas); // Store canvas element in state
        setPages([...pagesArray]); // Update state with new pages
      }).catch((error) => {
        console.error('Error rendering page:', error);
      });
    }).catch((error) => {
      console.error('Error fetching page:', error);
    });
  };

  return (
    <div>
      {/* Button to open the modal */}
      <button className="view-btn" onClick={openModal}>View PDF</button>

      {/* The Modal */}
      {modalOpen &&
        <div id="myModal" className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <div id="pdf-container" className="pdf-container">
              {pages.map((canvas, index) => (
                <div key={index} className="pdf-page-container">
                  {canvas}
                </div>
              ))}
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default PDFViewer;
