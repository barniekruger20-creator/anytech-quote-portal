
"use client";

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Truck, 
  Factory, 
  Warehouse, 
  Bot, 
  Wrench, 
  Cog, 
  Settings, 
  Package,
  ArrowRightLeft,
  MessageSquare
} from 'lucide-react';
import { applications } from '@/lib/applications-data';

const iconMap = {
  'conveyor-belt': ArrowRightLeft,
  'factory': Factory,
  'warehouse': Warehouse,
  'truck': Truck,
  'robot': Bot,
  'wrench': Wrench,
  'cog': Cog,
  'bot': Bot,
  'settings': Settings,
  'package': Package,
};

export function ApplicationsOverview() {
  return (
    <section id="applications" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Available Applications
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our comprehensive range of industrial automation solutions. Each application has a tailored questionnaire to capture your specific requirements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {applications.map((app, index) => {
            const IconComponent = iconMap[app.icon as keyof typeof iconMap] || MessageSquare;
            
            return (
              <motion.div
                key={app.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-blue-500">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <IconComponent className="w-6 h-6 text-blue-600" />
                      </div>
                      <CardTitle className="text-lg font-semibold text-gray-900">
                        {app.name}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {app.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{app.questions.length} questions</span>
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">
                        Available
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
