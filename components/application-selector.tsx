
"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, ArrowRight, 
  Truck, Factory, Warehouse, Bot, Wrench, Cog, Settings, Package, MessageSquare, ArrowRightLeft
} from 'lucide-react';
import { applications } from '@/lib/applications-data';

interface ApplicationSelectorProps {
  onSelect: (applicationId: string) => void;
  onBack: () => void;
}

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

export function ApplicationSelector({ onSelect, onBack }: ApplicationSelectorProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="max-w-6xl mx-auto shadow-xl bg-slate-900/90 border-slate-700">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-white">
            Select Your Application
          </CardTitle>
          <CardDescription className="text-slate-300">
            Choose the type of industrial automation solution you need a quote for. Each application has a tailored questionnaire to capture your specific requirements.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {applications.map((app, index) => {
              const IconComponent = iconMap[app.icon as keyof typeof iconMap] || MessageSquare;
              
              return (
                <motion.div
                  key={app.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Card 
                    className="h-full cursor-pointer hover:shadow-lg transition-all duration-300 border-2 border-slate-600 hover:border-blue-500 group bg-slate-800/50"
                    onClick={() => onSelect(app.id)}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-blue-600/20 rounded-lg group-hover:bg-blue-600/30 transition-colors">
                          <IconComponent className="w-6 h-6 text-blue-400" />
                        </div>
                        <CardTitle className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                          {app.name}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-slate-300 leading-relaxed mb-3">
                        {app.description}
                      </CardDescription>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-400">{app.questions.length} questions</span>
                        <div className="flex items-center text-blue-400 group-hover:text-blue-300 font-medium">
                          Select
                          <ArrowRight className="ml-1 w-4 h-4" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <div className="flex justify-between pt-4 border-t border-slate-700">
            <Button 
              variant="outline" 
              onClick={onBack}
              className="px-6 py-2 border-slate-600 text-slate-200 hover:bg-slate-800 hover:text-white"
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Client Info
            </Button>
            <div className="text-sm text-slate-400 flex items-center">
              Click on any application above to continue
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
