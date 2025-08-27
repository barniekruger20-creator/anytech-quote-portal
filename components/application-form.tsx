
"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, ArrowRight, FileText, AlertCircle } from 'lucide-react';
import { applications, ApplicationQuestion } from '@/lib/applications-data';

interface ApplicationFormProps {
  applicationId: string;
  onSubmit: (answers: Record<string, string>) => void;
  onBack: () => void;
  initialAnswers: Record<string, string>;
}

export function ApplicationForm({ applicationId, onSubmit, onBack, initialAnswers }: ApplicationFormProps) {
  const application = applications.find(app => app.id === applicationId);
  const [answers, setAnswers] = useState<Record<string, string>>(initialAnswers);
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!application) {
    return <div>Application not found</div>;
  }

  const handleInputChange = (questionId: string, value: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
    if (errors[questionId]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[questionId];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    application.questions.forEach(question => {
      if (question.required && (!answers[question.id] || !answers[question.id].trim())) {
        newErrors[question.id] = `${question.label} is required`;
      }
    });

    console.log('Validation errors:', newErrors);
    console.log('Current answers:', answers);
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted, validating...');
    if (validateForm()) {
      console.log('Validation passed, calling onSubmit');
      onSubmit(answers);
    } else {
      console.log('Validation failed, not submitting');
      // Scroll to first error
      const firstErrorElement = document.querySelector('.text-red-400');
      if (firstErrorElement) {
        firstErrorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  const renderQuestionInput = (question: ApplicationQuestion) => {
    const hasError = !!errors[question.id];
    const value = answers[question.id] || '';
    
    // Check if this is a quantity-related field
    const isQuantityField = question.label.toLowerCase().includes('quantity') || 
                           question.label.toLowerCase().includes('weight') ||
                           question.label.toLowerCase().includes('dimensions') ||
                           question.label.toLowerCase().includes('length') ||
                           question.label.toLowerCase().includes('speed') ||
                           question.label.toLowerCase().includes('throughput') ||
                           question.label.toLowerCase().includes('units') ||
                           question.label.toLowerCase().includes('trips') ||
                           question.label.toLowerCase().includes('components') ||
                           question.label.toLowerCase().includes('stations') ||
                           question.label.toLowerCase().includes('axes') ||
                           question.label.toLowerCase().includes('payload') ||
                           question.label.toLowerCase().includes('reach') ||
                           question.label.toLowerCase().includes('cycle time') ||
                           question.label.toLowerCase().includes('number');

    const baseInputClasses = `bg-slate-800/50 border-slate-600 text-white placeholder-slate-400 focus:border-blue-500 focus:ring-blue-500/20 ${
      hasError ? 'border-red-400' : ''
    } ${isQuantityField ? 'border-l-4 border-l-green-500' : ''}`;

    switch (question.type) {
      case 'textarea':
        return (
          <Textarea
            id={question.id}
            value={value}
            onChange={(e) => handleInputChange(question.id, e.target.value)}
            placeholder={question.placeholder || 'Enter details here...'}
            className={`min-h-[100px] ${baseInputClasses}`}
            rows={3}
          />
        );
      
      case 'select':
        return (
          <Select 
            value={value || ''} 
            onValueChange={(selectedValue) => {
              handleInputChange(question.id, selectedValue);
            }}
          >
            <SelectTrigger className={`${baseInputClasses}`}>
              <SelectValue placeholder={`Select ${question.label.toLowerCase()}`} />
            </SelectTrigger>
            <SelectContent className="bg-slate-800 border-slate-600">
              {question.options?.map(option => (
                <SelectItem key={option} value={option} className="text-white hover:bg-slate-700">
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );
      
      case 'number':
        return (
          <div className="relative">
            <Input
              id={question.id}
              type="number"
              step="any"
              value={value}
              onChange={(e) => handleInputChange(question.id, e.target.value)}
              placeholder={question.placeholder || 'Enter quantity...'}
              className={`${baseInputClasses} pr-12`}
            />
            {isQuantityField && (
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xs text-green-400 font-medium">
                QTY
              </div>
            )}
          </div>
        );
      
      case 'date':
        return (
          <Input
            id={question.id}
            type="date"
            value={value}
            onChange={(e) => handleInputChange(question.id, e.target.value)}
            className={baseInputClasses}
          />
        );
      
      case 'email':
        return (
          <Input
            id={question.id}
            type="email"
            value={value}
            onChange={(e) => handleInputChange(question.id, e.target.value)}
            placeholder={question.placeholder || 'Enter email address...'}
            className={baseInputClasses}
          />
        );
      
      case 'tel':
        return (
          <Input
            id={question.id}
            type="tel"
            value={value}
            onChange={(e) => handleInputChange(question.id, e.target.value)}
            placeholder={question.placeholder || 'Enter phone number...'}
            className={baseInputClasses}
          />
        );
      
      default:
        return (
          <div className="relative">
            <Input
              id={question.id}
              type="text"
              value={value}
              onChange={(e) => handleInputChange(question.id, e.target.value)}
              placeholder={question.placeholder || 'Enter value...'}
              className={`${baseInputClasses} ${isQuantityField ? 'pr-12' : ''}`}
            />
            {isQuantityField && (
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xs text-green-400 font-medium">
                QTY
              </div>
            )}
          </div>
        );
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
          <div className="mx-auto mb-4 p-3 bg-blue-600/20 rounded-full w-fit">
            <FileText className="w-8 h-8 text-blue-400" />
          </div>
          <CardTitle className="text-2xl font-bold text-white">
            {application.name} - Application Details
          </CardTitle>
          <CardDescription className="text-slate-300">
            {application.description}. Please fill out all required fields (*) to get an accurate quote.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {Object.keys(errors).length > 0 && (
              <div className="bg-red-900/50 border border-red-600 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <AlertCircle className="w-5 h-5 text-red-400" />
                  <h4 className="font-semibold text-red-300">Please fix the following errors:</h4>
                </div>
                <ul className="list-disc list-inside text-sm text-red-300 space-y-1">
                  {Object.entries(errors).map(([fieldId, error]) => (
                    <li key={fieldId}>{error}</li>
                  ))}
                </ul>
              </div>
            )}
            <div className="grid grid-cols-1 gap-6">
              {application.questions.map((question, index) => (
                <motion.div
                  key={question.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="space-y-2"
                >
                  <Label htmlFor={question.id} className="flex items-center text-sm font-medium text-slate-200">
                    {question.label}
                    {question.required && <span className="text-red-400 ml-1">*</span>}
                  </Label>
                  {renderQuestionInput(question)}
                  {errors[question.id] && (
                    <div className="flex items-center gap-1 text-sm text-red-400">
                      <AlertCircle className="w-4 h-4" />
                      {errors[question.id]}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="flex justify-between pt-6 border-t border-slate-700">
              <Button 
                type="button"
                variant="outline" 
                onClick={onBack}
                className="px-6 py-2 border-slate-600 text-slate-200 hover:bg-slate-800 hover:text-white"
              >
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to Applications
              </Button>
              
              <Button 
                type="submit" 
                size="lg" 
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold"
              >
                Review & Submit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
}
