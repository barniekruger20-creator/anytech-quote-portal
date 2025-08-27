
"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { User, Building, Mail, Phone, ArrowRight } from 'lucide-react';
import { ClientInfo } from '@/lib/applications-data';

interface ClientInfoFormProps {
  onSubmit: (clientInfo: ClientInfo) => void;
  initialData: ClientInfo;
}

export function ClientInfoForm({ onSubmit, initialData }: ClientInfoFormProps) {
  const [formData, setFormData] = useState<ClientInfo>(initialData);
  const [errors, setErrors] = useState<Partial<ClientInfo>>({});

  const handleInputChange = (field: keyof ClientInfo, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const validateForm = () => {
    const newErrors: Partial<ClientInfo> = {};
    
    if (!formData.clientName?.trim()) {
      newErrors.clientName = 'Client name is required';
    }
    if (!formData.email?.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone?.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    if (!formData.company?.trim()) {
      newErrors.company = 'Company name is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="max-w-2xl mx-auto shadow-xl bg-slate-900/90 border-slate-700">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 p-3 bg-blue-600/20 rounded-full w-fit">
            <User className="w-8 h-8 text-blue-400" />
          </div>
          <CardTitle className="text-2xl font-bold text-white">
            Client Information
          </CardTitle>
          <CardDescription className="text-slate-300">
            Please provide your contact details so we can follow up with your quote request.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="clientName" className="flex items-center text-slate-200">
                <User className="w-4 h-4 mr-2 text-slate-400" />
                Client Name *
              </Label>
              <Input
                id="clientName"
                type="text"
                value={formData.clientName}
                onChange={(e) => handleInputChange('clientName', e.target.value)}
                placeholder="Full name"
                className={`pl-10 bg-slate-800/50 border-slate-600 text-white placeholder-slate-400 focus:border-blue-500 focus:ring-blue-500/20 ${errors.clientName ? 'border-red-400' : ''}`}
              />
              {errors.clientName && (
                <p className="text-sm text-red-400">{errors.clientName}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="company" className="flex items-center text-slate-200">
                <Building className="w-4 h-4 mr-2 text-slate-400" />
                Company Name *
              </Label>
              <Input
                id="company"
                type="text"
                value={formData.company}
                onChange={(e) => handleInputChange('company', e.target.value)}
                placeholder="Company or organization name"
                className={`pl-10 bg-slate-800/50 border-slate-600 text-white placeholder-slate-400 focus:border-blue-500 focus:ring-blue-500/20 ${errors.company ? 'border-red-400' : ''}`}
              />
              {errors.company && (
                <p className="text-sm text-red-400">{errors.company}</p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center text-slate-200">
                  <Mail className="w-4 h-4 mr-2 text-slate-400" />
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="email@company.com"
                  className={`pl-10 bg-slate-800/50 border-slate-600 text-white placeholder-slate-400 focus:border-blue-500 focus:ring-blue-500/20 ${errors.email ? 'border-red-400' : ''}`}
                />
                {errors.email && (
                  <p className="text-sm text-red-400">{errors.email}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="flex items-center text-slate-200">
                  <Phone className="w-4 h-4 mr-2 text-slate-400" />
                  Phone Number *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="+1 (555) 123-4567"
                  className={`pl-10 bg-slate-800/50 border-slate-600 text-white placeholder-slate-400 focus:border-blue-500 focus:ring-blue-500/20 ${errors.phone ? 'border-red-400' : ''}`}
                />
                {errors.phone && (
                  <p className="text-sm text-red-400">{errors.phone}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="industry" className="flex items-center text-slate-200">
                <Building className="w-4 h-4 mr-2 text-slate-400" />
                Industry (Optional)
              </Label>
              <Input
                id="industry"
                type="text"
                value={formData.industry}
                onChange={(e) => handleInputChange('industry', e.target.value)}
                placeholder="e.g., Manufacturing, Automotive, Food & Beverage"
                className="pl-10 bg-slate-800/50 border-slate-600 text-white placeholder-slate-400 focus:border-blue-500 focus:ring-blue-500/20"
              />
            </div>

            <div className="flex justify-end pt-4">
              <Button 
                type="submit" 
                size="lg" 
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold"
              >
                Continue to Applications
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
}
