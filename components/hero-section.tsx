
"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, FileText, Clock, Shield, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative container mx-auto px-4 py-20 min-h-screen flex items-center">
        <div className="w-full max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Company Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 text-white/90 text-sm font-medium mb-8"
            >
              <Zap className="w-4 h-4 mr-2 text-yellow-400" />
              AnyTech Industrial Solutions
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Professional Quote Portal
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Get customized quotes for industrial automation solutions including conveyors, assembly lines, robotics, and specialized machinery.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            >
              <Link href="/quote">
                <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300">
                  Start Quote Process
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold backdrop-blur-sm"
                onClick={() => {
                  const applicationsSection = document.getElementById('applications');
                  applicationsSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <FileText className="mr-2 w-5 h-5" />
                View Applications
              </Button>
            </motion.div>

            {/* Feature highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            >
              <div className="glass-effect rounded-xl p-6 text-center">
                <Clock className="w-8 h-8 text-blue-300 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Fast Process</h3>
                <p className="text-blue-100 text-sm">Complete your quote request in under 10 minutes</p>
              </div>
              <div className="glass-effect rounded-xl p-6 text-center">
                <Shield className="w-8 h-8 text-green-300 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Professional Service</h3>
                <p className="text-blue-100 text-sm">Expert consultation and tailored solutions</p>
              </div>
              <div className="glass-effect rounded-xl p-6 text-center">
                <Zap className="w-8 h-8 text-yellow-300 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Quick Response</h3>
                <p className="text-blue-100 text-sm">Get your detailed quote within 24-48 hours</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
