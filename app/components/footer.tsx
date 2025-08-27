
"use client";

import Link from 'next/link';
import { Mail, Phone, MapPin, Zap } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center mb-4">
                <Zap className="w-8 h-8 text-blue-400 mr-2" />
                <h3 className="text-2xl font-bold">AnyTech</h3>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Professional industrial automation solutions including conveyors, assembly lines, robotics, and specialized machinery.
              </p>
            </div>

            {/* Contact Information */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
              <div className="space-y-3">
                <a 
                  href="mailto:barnie.kruger@anytech.co.za"
                  className="flex items-center text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  <Mail className="w-4 h-4 mr-3" />
                  barnie.kruger@anytech.co.za
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Access</h4>
              <div className="space-y-3">
                <Link 
                  href="/quote"
                  className="block text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  Start Quote Process
                </Link>
                <Link 
                  href="#applications"
                  className="block text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  View Applications
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} AnyTech Industrial Solutions. Professional Quote Portal.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
