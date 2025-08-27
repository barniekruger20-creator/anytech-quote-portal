
"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Mail, FileText, RefreshCw, Download, Send, User, Building } from 'lucide-react';
import { FormData, applications } from '@/lib/applications-data';
import { PDFGenerator } from './pdf-generator';

interface ConfirmationPageProps {
  formData: FormData;
  onStartOver: () => void;
}

export function ConfirmationPage({ formData, onStartOver }: ConfirmationPageProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const selectedApp = applications.find(app => app.id === formData.selectedApplication);

  const handleSubmitQuote = async () => {
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      console.log('Submitting form data:', formData);
      
      const response = await fetch('/api/submit-quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log('Response status:', response.status);
      console.log('Response ok:', response.ok);

      const responseData = await response.json();
      console.log('Response data:', responseData);

      if (!response.ok) {
        throw new Error(responseData.message || 'Failed to submit quote request');
      }

      setIsSubmitted(true);
      
    } catch (error) {
      console.error('Error submitting quote:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      setSubmitError(`Failed to submit quote request: ${errorMessage}. Please try again.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="max-w-4xl mx-auto shadow-xl bg-slate-900/90 border-slate-700">
        <CardHeader className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.6, delay: 0.2 }}
            className="mx-auto mb-4 p-3 bg-green-600/20 rounded-full w-fit"
          >
            <CheckCircle className="w-8 h-8 text-green-400" />
          </motion.div>
          <CardTitle className="text-2xl font-bold text-white">
            Quote Request Complete!
          </CardTitle>
          <CardDescription className="text-slate-300">
            Your quote request has been prepared. Review the details below and submit to receive your professional quote.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Summary Section */}
          <div className="space-y-6">
            {/* Client Information Summary */}
            <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
              <h3 className="font-semibold text-lg text-white mb-4 flex items-center">
                <User className="w-5 h-5 mr-2 text-blue-400" />
                Client Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium text-slate-400">Client Name:</span>
                  <p className="text-white">{formData.clientInfo.clientName}</p>
                </div>
                <div>
                  <span className="font-medium text-slate-400">Company:</span>
                  <p className="text-white">{formData.clientInfo.company}</p>
                </div>
                <div>
                  <span className="font-medium text-slate-400">Email:</span>
                  <p className="text-white">{formData.clientInfo.email}</p>
                </div>
                <div>
                  <span className="font-medium text-slate-400">Phone:</span>
                  <p className="text-white">{formData.clientInfo.phone}</p>
                </div>
                {formData.clientInfo.industry && (
                  <div className="col-span-full">
                    <span className="font-medium text-slate-400">Industry:</span>
                    <p className="text-white">{formData.clientInfo.industry}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Application Summary */}
            <div className="bg-blue-900/30 rounded-lg p-6 border border-blue-700/50">
              <h3 className="font-semibold text-lg text-white mb-4 flex items-center">
                <Building className="w-5 h-5 mr-2 text-blue-400" />
                Selected Application
              </h3>
              <div className="text-sm">
                <span className="font-medium text-slate-400">Application Type:</span>
                <p className="text-white text-lg">{selectedApp?.name}</p>
                <p className="text-slate-300 mt-1">{selectedApp?.description}</p>
                <p className="text-slate-400 mt-2">{Object.keys(formData.applicationAnswers).length} questions answered</p>
              </div>
            </div>

            {/* PDF Preview Section */}
            <div className="border border-slate-700 rounded-lg p-6 bg-slate-800/30">
              <h3 className="font-semibold text-lg text-white mb-4 flex items-center">
                <FileText className="w-5 h-5 mr-2 text-blue-400" />
                Quote Request Document
              </h3>
              
              {!isSubmitted ? (
                <div className="text-center py-8">
                  <p className="text-slate-300 mb-4">
                    Ready to submit your quote request directly to AnyTech.
                  </p>
                  {submitError && (
                    <div className="mb-4 p-3 bg-red-900/50 border border-red-700 rounded-lg">
                      <p className="text-red-300 text-sm">{submitError}</p>
                    </div>
                  )}
                  <Button
                    onClick={handleSubmitQuote}
                    disabled={isSubmitting}
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3"
                  >
                    {isSubmitting ? (
                      <>
                        <RefreshCw className="mr-2 w-5 h-5 animate-spin" />
                        Submitting Quote Request...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 w-5 h-5" />
                        Submit Quote Request
                      </>
                    )}
                  </Button>
                </div>
              ) : (
                <div className="text-center py-8 bg-green-900/30 border border-green-700/50 rounded-lg">
                  <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-green-300 mb-2">Quote Request Submitted!</h4>
                  <p className="text-green-200 mb-4">
                    Your quote request has been successfully submitted to AnyTech. 
                    We will contact you within 24-48 hours to discuss your requirements.
                  </p>
                  <div className="flex justify-center gap-4">
                    <PDFGenerator formData={formData} />
                    <Button
                      onClick={() => window.open('mailto:barnie.kruger@anytech.co.za')}
                      variant="outline"
                      className="border-slate-600 text-slate-200 hover:bg-slate-800 hover:text-white"
                    >
                      <Mail className="mr-2 w-4 h-4" />
                      Contact AnyTech
                    </Button>
                  </div>
                </div>
              )}
            </div>

            {/* Next Steps */}
            <div className="bg-yellow-900/20 border border-yellow-600/50 rounded-lg p-6">
              <h3 className="font-semibold text-lg text-white mb-3">What Happens Next?</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  Your quote request will be reviewed by our expert team
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  We'll contact you within 24-48 hours to discuss your requirements
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  A detailed quote with specifications will be provided
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                  Our team will schedule a consultation if needed
                </li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between pt-6 border-t border-slate-700">
              <Button 
                variant="outline" 
                onClick={onStartOver}
                className="px-6 py-2 border-slate-600 text-slate-200 hover:bg-slate-800 hover:text-white"
              >
                <RefreshCw className="mr-2 w-4 h-4" />
                Start New Quote Request
              </Button>
              
              <div className="flex gap-3">
                <PDFGenerator formData={formData} />
                <Button 
                  onClick={() => window.open('mailto:barnie.kruger@anytech.co.za')}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-2"
                >
                  <Mail className="mr-2 w-4 h-4" />
                  Contact AnyTech
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
