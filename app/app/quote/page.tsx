
"use client";

import { useState } from 'react';
import { ClientInfoForm } from '@/components/client-info-form';
import { ApplicationSelector } from '@/components/application-selector';
import { ApplicationForm } from '@/components/application-form';
import { ConfirmationPage } from '@/components/confirmation-page';
import { FormProgressBar } from '@/components/form-progress-bar';
import { Header } from '@/components/header';
import { FormData, ClientInfo } from '@/lib/applications-data';

export default function QuotePage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    clientInfo: {
      clientName: '',
      email: '',
      phone: '',
      industry: '',
      company: ''
    },
    selectedApplication: '',
    applicationAnswers: {}
  });

  const handleClientInfoSubmit = (clientInfo: ClientInfo) => {
    setFormData(prev => ({ ...prev, clientInfo }));
    setCurrentStep(2);
  };

  const handleApplicationSelect = (applicationId: string) => {
    setFormData(prev => ({ ...prev, selectedApplication: applicationId, applicationAnswers: {} }));
    setCurrentStep(3);
  };

  const handleApplicationFormSubmit = (answers: Record<string, string>) => {
    setFormData(prev => ({ ...prev, applicationAnswers: answers }));
    setCurrentStep(4);
  };

  const handleStartOver = () => {
    setCurrentStep(1);
    setFormData({
      clientInfo: {
        clientName: '',
        email: '',
        phone: '',
        industry: '',
        company: ''
      },
      selectedApplication: '',
      applicationAnswers: {}
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 to-blue-900">
      <Header />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <FormProgressBar currentStep={currentStep} />
        
        {currentStep === 1 && (
          <ClientInfoForm 
            onSubmit={handleClientInfoSubmit}
            initialData={formData.clientInfo}
          />
        )}
        
        {currentStep === 2 && (
          <ApplicationSelector 
            onSelect={handleApplicationSelect}
            onBack={() => setCurrentStep(1)}
          />
        )}
        
        {currentStep === 3 && (
          <ApplicationForm
            applicationId={formData.selectedApplication}
            onSubmit={handleApplicationFormSubmit}
            onBack={() => setCurrentStep(2)}
            initialAnswers={formData.applicationAnswers}
          />
        )}
        
        {currentStep === 4 && (
          <ConfirmationPage
            formData={formData}
            onStartOver={handleStartOver}
          />
        )}
      </div>
    </div>
  );
}
