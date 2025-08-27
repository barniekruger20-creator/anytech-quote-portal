
"use client";

import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { FormData, applications } from '@/lib/applications-data';

interface PDFGeneratorProps {
  formData: FormData;
}

export function PDFGenerator({ formData }: PDFGeneratorProps) {
  const selectedApp = applications.find(app => app.id === formData.selectedApplication);

  const generatePDF = () => {
    // Create HTML content for PDF
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <title>Quote Request - ${selectedApp?.name || 'Industrial Automation'}</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 800px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              text-align: center;
              border-bottom: 2px solid #2563eb;
              padding-bottom: 20px;
              margin-bottom: 30px;
            }
            .header h1 {
              color: #2563eb;
              margin: 0;
              font-size: 28px;
            }
            .header p {
              margin: 5px 0;
              color: #666;
            }
            .section {
              margin-bottom: 30px;
              padding: 20px;
              border: 1px solid #e5e7eb;
              border-radius: 8px;
              background-color: #f9fafb;
            }
            .section h2 {
              color: #2563eb;
              border-bottom: 1px solid #2563eb;
              padding-bottom: 10px;
              margin-top: 0;
            }
            .client-info {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 15px;
            }
            .info-item {
              margin-bottom: 10px;
            }
            .info-label {
              font-weight: bold;
              color: #374151;
            }
            .info-value {
              margin-left: 10px;
              color: #111827;
            }
            .question-item {
              margin-bottom: 20px;
              padding: 15px;
              background-color: white;
              border-radius: 6px;
              border-left: 4px solid #2563eb;
            }
            .question-label {
              font-weight: bold;
              color: #374151;
              margin-bottom: 5px;
            }
            .question-answer {
              color: #111827;
              background-color: #f3f4f6;
              padding: 10px;
              border-radius: 4px;
            }
            .footer {
              text-align: center;
              margin-top: 40px;
              padding-top: 20px;
              border-top: 1px solid #e5e7eb;
              color: #666;
            }
            @media print {
              body { margin: 0; }
              .no-print { display: none; }
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>Professional Quote Request</h1>
            <p><strong>Application:</strong> ${selectedApp?.name || 'Industrial Automation'}</p>
            <p><strong>Generated:</strong> ${new Date().toLocaleDateString()}</p>
            <p><strong>For:</strong> AnyTech Industrial Solutions</p>
          </div>

          <div class="section">
            <h2>Client Information</h2>
            <div class="client-info">
              <div class="info-item">
                <span class="info-label">Client Name:</span>
                <span class="info-value">${formData.clientInfo.clientName}</span>
              </div>
              <div class="info-item">
                <span class="info-label">Company:</span>
                <span class="info-value">${formData.clientInfo.company}</span>
              </div>
              <div class="info-item">
                <span class="info-label">Email:</span>
                <span class="info-value">${formData.clientInfo.email}</span>
              </div>
              <div class="info-item">
                <span class="info-label">Phone:</span>
                <span class="info-value">${formData.clientInfo.phone}</span>
              </div>
              ${formData.clientInfo.industry ? `
              <div class="info-item">
                <span class="info-label">Industry:</span>
                <span class="info-value">${formData.clientInfo.industry}</span>
              </div>
              ` : ''}
            </div>
          </div>

          <div class="section">
            <h2>Application Details: ${selectedApp?.name}</h2>
            <p><strong>Description:</strong> ${selectedApp?.description}</p>
            <p><strong>Total Questions Answered:</strong> ${Object.keys(formData.applicationAnswers).length}</p>
          </div>

          <div class="section">
            <h2>Detailed Requirements</h2>
            ${selectedApp?.questions.map(question => {
              const answer = formData.applicationAnswers[question.id];
              if (!answer) return '';
              
              return `
                <div class="question-item">
                  <div class="question-label">${question.label}${question.required ? ' *' : ''}</div>
                  <div class="question-answer">${answer}</div>
                </div>
              `;
            }).join('')}
          </div>

          <div class="footer">
            <p>This quote request was generated using the AnyTech Quote Portal</p>
            <p>Contact: barnie.kruger@anytech.co.za</p>
            <p>Generated on ${new Date().toLocaleString()}</p>
          </div>
        </body>
      </html>
    `;

    // Create a new window with the PDF content
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(htmlContent);
      printWindow.document.close();
      
      // Wait for content to load then trigger print dialog
      setTimeout(() => {
        printWindow.print();
      }, 500);
    }
  };

  return (
    <Button
      onClick={generatePDF}
      variant="outline"
      className="px-6 py-2"
    >
      <Download className="mr-2 w-4 h-4" />
      Download PDF
    </Button>
  );
}
