import React from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { TfiDownload } from "react-icons/tfi";

export default function DownloadButton(){
    document.body.style.backgroundColor = "rgb(197, 205, 203)";

    
    const downloadPdf = () => {
        const resumeElement = document.querySelector("#resume");
        const pdfBackground = resumeElement.style.backgroundColor;
        resumeElement.style.backgroundColor = "white";

        html2canvas(document.querySelector("#resume")).then(canvas => {
            var imgData = canvas.toDataURL('image/png');
            var pdfWidth = 210;
            var pdfHeight = pdfWidth * canvas.height / canvas.width;
            var doc = new jsPDF('p', 'mm', [pdfWidth, pdfHeight]);
            doc.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
            doc.save("resume.pdf");

            resumeElement.style.backgroundColor = pdfBackground;
            
        });
    };

    return (
        <button
            className="download-button"
            onClick={downloadPdf}
        >
            <TfiDownload />
        </button>
    );
};