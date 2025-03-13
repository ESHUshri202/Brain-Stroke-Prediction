// src/components/Result.js
import React from 'react';
import { jsPDF } from 'jspdf';
import {autoTable} from 'jspdf-autotable';

const Result = ({ result }) => {
    const downloadPDF = () => {
        const doc = new jsPDF();
        doc.setFontSize(20);
        const title = 'Brain Stroke Prediction Result';

        const pageWidth = doc.internal.pageSize.getWidth();
        const titleWidth = doc.getStringUnitWidth(title) * doc.internal.getFontSize() / doc.internal.scaleFactor;
        const x = (pageWidth - titleWidth) / 2;
        doc.text(title, x, 10);
        // doc.text('Brain Stroke Prediction Result', 10, 40);
        
        // Add form data
        autoTable(doc,{
            head: [['Data', 'Value']],
            body: Object.entries(result.formData).map(([key, value]) => [key, value]),
            startY: 40,
            theme: 'grid',
            styles: { halign: 'center' },
            bodyStyles:{
                textColor: result.prediction === 'Likely' ? 255 : 0, // Red text for "Likely"
                fillColor: result.prediction === 'Likely' ? [255, 0, 0] : [0, 255, 0], // Red for "Likely", Green for others
                fontStyle: 'bold'
            }
        });
        
        // Add prediction result
        doc.setFontSize(16);
        const res = `Prediction Result: ${result.prediction}`;
        doc.text(res, x, 30);
        
        // doc.setFontSize(14);
        // doc.text('Form Data:', 10, 50);
        
        // let y = 60; // Starting Y position for form data
        // for (const [key, value] of Object.entries(result.formData)) {
        //     doc.text(`${key}: ${value}`, 10, y);
        //     y += 10; // Increment Y position for each line
        // }

        doc.save('result.pdf');
    };

    return (
        <div className='text-center text-3xl font-medium font-serif p-12'>
            <h2>Prediction Result: <span className={result.prediction === 'Likely'? 'text-red-900 shadow-lg p-2 rounded-lg bg-slate-400' : 'text-green-700 shadow rounded-lg bg-slate-200 p-2'}>{result.prediction}</span></h2>
            {/* <h3>Form Data:</h3> */}
            {/* <pre>{JSON.stringify(result.formData, null, 2)}</pre> */}
            <button 
                onClick={downloadPDF} 
                className='bg-[#060125] hover:bg-blue-950 hover:ease-in-out hover:duration-300 text-white font-semibold py-2 px-4 rounded mt-4'
            >
                Download PDF
            </button>
        </div>
    );
};

export default Result;