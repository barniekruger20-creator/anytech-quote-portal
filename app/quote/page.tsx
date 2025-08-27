
'use client';

import { useState } from 'react';
import { ApplicationSelector } from '@/components/application-selector';
import { ApplicationForm } from '@/components/application-form';
import { ClientInfoForm } from '@/components/client-info-form';
import { ConfirmationPage } from '@/components/confirmation-page';
import { FormProgressBar } from '@/components/form-progress-bar';
import { Header } from '@/components/header';
import { ClientInfo, FormData } from '@/lib/applications-data';

export default function QuotePage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedApplication, setSelectedApplication] = useState<string>('');
  const [applicationAnswers, setApplicationAnswers] = useState<Record<string, string>>({});
  const [clientInfo, setClientInfo] = useState<ClientInfo>({
    clientName: '',
    company: '',
    email: '',
    phone: '',
    industry: ''
  });

  const handleApplicationSelect = (applicationId: string) => {
    setSelectedApplication(applicationId);
    setCurrentStep(2);
  };

  const handleApplicationFormSubmit = (answers: Record<string, string>) => {
    setApplicationAnswers(answers);
    setCurrentStep(3);
  };

  const handleClientInfoSubmit = (info: ClientInfo) => {
    setClientInfo(info);
    setCurrentStep(4);
  };

  const handleStartOver = () => {
    setCurrentStep(1);
    setSelectedApplication('');
    setApplicationAnswers({});
    setClientInfo({
      clientName: '',
      company: '',
      email: '',
      phone: '',
      industry: ''
    });
  };

  const formData: FormData = {
    clientInfo,
    selectedApplication,
    applicationAnswers
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <ClientInfoForm 
            onSubmit={handleClientInfoSubmit}
            initialData={clientInfo}
          />
        );
      case 2:
        return (
          <ApplicationSelector 
            onSelect={handleApplicationSelect}
            onBack={() => setCurrentStep(1)}
          />
        );
      case 3:
        return (
          <ApplicationForm
            applicationId={selectedApplication}
            onSubmit={handleApplicationFormSubmit}
            onBack={() => setCurrentStep(2)}
            initialAnswers={applicationAnswers}
          />
        );
      case 4:
        return (
          <ConfirmationPage
            formData={formData}
            onStartOver={handleStartOver}
          />
        );
      default:
        return (
          <ClientInfoForm 
            onSubmit={handleClientInfoSubmit}
            initialData={clientInfo}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <FormProgressBar currentStep={currentStep} />
          <div className="mt-8">
            {renderCurrentStep()}
          </div>
        </div>
      </div>
    </div>
  );
}
