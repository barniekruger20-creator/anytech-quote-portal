
"use client";

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  CheckCircle, 
  Clock, 
  Mail, 
  FileText, 
  Shield, 
  Users,
  Smartphone,
  Globe
} from 'lucide-react';

const features = [
  {
    icon: CheckCircle,
    title: 'Comprehensive Forms',
    description: 'Detailed questionnaires for each application type ensure we capture all your requirements accurately.'
  },
  {
    icon: Clock,
    title: 'Quick Process',
    description: 'Complete the entire quote process in under 10 minutes with our streamlined multi-step form.'
  },
  {
    icon: Mail,
    title: 'Instant Delivery',
    description: 'Your completed application is automatically formatted and emailed as a professional PDF.'
  },
  {
    icon: FileText,
    title: 'Professional PDFs',
    description: 'Clean, organized PDF reports with all your information structured for easy review.'
  },
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description: 'Your information is handled securely with professional-grade data protection.'
  },
  {
    icon: Users,
    title: 'Expert Consultation',
    description: 'Our team of industrial automation experts will review your requirements personally.'
  },
  {
    icon: Smartphone,
    title: 'Mobile Friendly',
    description: 'Complete your quote request from any device - desktop, tablet, or mobile phone.'
  },
  {
    icon: Globe,
    title: 'Easy Integration',
    description: 'Portal can be easily linked to your existing website for seamless user experience.'
  }
];

export function FeatureHighlights() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our Quote Portal?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Designed for efficiency, accuracy, and professional service. Get the information you need to make informed decisions about your industrial automation projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-fit">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-900">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
