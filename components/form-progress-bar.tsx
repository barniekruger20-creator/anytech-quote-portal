
"use client";

import { motion } from 'framer-motion';
import { CheckCircle, Circle, User, List, FileText, Send } from 'lucide-react';

interface FormProgressBarProps {
  currentStep: number;
}

const steps = [
  { id: 1, name: 'Client Info', icon: User },
  { id: 2, name: 'Select Application', icon: List },
  { id: 3, name: 'Application Details', icon: FileText },
  { id: 4, name: 'Submit & Confirm', icon: Send },
];

export function FormProgressBar({ currentStep }: FormProgressBarProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-center">
        {steps.map((step, index) => {
          const isCompleted = currentStep > step.id;
          const isCurrent = currentStep === step.id;
          const IconComponent = step.icon;

          return (
            <div key={step.id} className="flex items-center">
              {/* Step Circle */}
              <div className="flex flex-col items-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0.5 }}
                  animate={{
                    scale: isCurrent ? 1.1 : 1,
                    opacity: isCompleted || isCurrent ? 1 : 0.5,
                  }}
                  className={`
                    relative flex items-center justify-center w-12 h-12 rounded-full border-2 
                    ${
                      isCompleted
                        ? 'bg-green-500 border-green-500 text-white'
                        : isCurrent
                        ? 'bg-blue-500 border-blue-500 text-white'
                        : 'bg-slate-800/50 border-slate-600 text-slate-400'
                    }
                  `}
                >
                  {isCompleted ? (
                    <CheckCircle className="w-6 h-6" />
                  ) : (
                    <IconComponent className="w-5 h-5" />
                  )}
                </motion.div>
                <span
                  className={`
                    mt-2 text-sm font-medium text-center
                    ${
                      isCompleted
                        ? 'text-green-400'
                        : isCurrent
                        ? 'text-blue-400'
                        : 'text-slate-500'
                    }
                  `}
                >
                  {step.name}
                </span>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div
                  className={`
                    w-16 h-1 mx-4 mt-[-24px]
                    ${
                      isCompleted
                        ? 'bg-green-500'
                        : 'bg-slate-600'
                    }
                  `}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
