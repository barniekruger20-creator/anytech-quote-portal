
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// Applications data for reference
const applications = [
  { id: 'conveyors', name: 'Conveyors', description: 'Belt, roller, chain, gravity, and modular conveyor systems' },
  { id: 'assembly_lines', name: 'Assembly Lines', description: 'Automated and semi-automated assembly line solutions' },
  { id: 'vertical_storage', name: 'Vertical Storage', description: 'Automated vertical storage and retrieval systems' },
  { id: 'agv', name: 'AGV (Automated Guided Vehicle)', description: 'Automated material transport vehicles' },
  { id: 'amr', name: 'AMR (Autonomous Mobile Robot)', description: 'Autonomous mobile robots with advanced navigation' },
  { id: 'jigs_fixtures', name: 'Jigs & Fixtures', description: 'Custom tooling and fixture solutions' },
  { id: 'purpose_built', name: 'Purpose-Built Machines', description: 'Custom machinery and specialized equipment' },
  { id: 'robotics', name: 'Robotics', description: 'Industrial robotic systems and automation' },
  { id: 'control_panels', name: 'Control Panels', description: 'Electrical control systems and panels' },
  { id: 'packaging_lines', name: 'Packaging Lines', description: 'Automated packaging and labeling systems' },
];

export async function POST(request: NextRequest) {
  console.log('=== API ROUTE CALLED ===');
  
  try {
    console.log('Parsing request body...');
    const formData = await request.json();
    console.log('Received form data:', JSON.stringify(formData, null, 2));
    
    const { clientInfo, selectedApplication, applicationAnswers } = formData;
    
    // Find the selected application details
    const selectedApp = applications.find(app => app.id === selectedApplication);
    
    // Create email body with all the form data
    const emailBody = `
NEW QUOTE REQUEST - ${selectedApp?.name || 'Industrial Automation'}

=====================================
CLIENT INFORMATION
=====================================
Name: ${clientInfo?.clientName || 'N/A'}
Company: ${clientInfo?.company || 'N/A'}
Email: ${clientInfo?.email || 'N/A'}
Phone: ${clientInfo?.phone || 'N/A'}
Industry: ${clientInfo?.industry || 'Not specified'}

=====================================
APPLICATION DETAILS
=====================================
Application Type: ${selectedApp?.name || selectedApplication}
Description: ${selectedApp?.description || 'N/A'}

=====================================
REQUIREMENTS & ANSWERS
=====================================
${Object.entries(applicationAnswers || {}).map(([key, value]) => {
  const readableKey = key.replace(/_/g, ' ').replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
  return `${readableKey}: ${value || 'Not provided'}`;
}).join('\n')}

=====================================
SUBMISSION DETAILS
=====================================
Date: ${new Date().toLocaleString()}
Portal: AnyTech Quote Portal

This quote request was automatically generated and sent from the online quote portal.
Please follow up with the client within 24-48 hours.
    `;
    
    const emailSubject = `New Quote Request - ${selectedApp?.name || 'Industrial Automation'} - from ${clientInfo?.company || 'Unknown Company'}`;
    
    console.log('=== EMAIL CONTENT FOR: barnie.kruger@anytech.co.za ===');
    console.log('Subject:', emailSubject);
    console.log('Body:', emailBody);
    console.log('=== END EMAIL ===');
    
    // Try to send actual email using Resend
    let emailSent = false;
    let emailError = null;
    
    if (process.env.RESEND_API_KEY && process.env.RESEND_API_KEY !== 'your_resend_api_key_here') {
      try {
        console.log('Attempting to send email via Resend...');
        
        const { data, error } = await resend.emails.send({
          from: 'AnyTech Quote Portal <onboarding@resend.dev>',
          to: ['barniekruger20@gmail.com'], // Using your verified email address for free tier
          subject: emailSubject,
          text: emailBody,
          html: `<pre style="font-family: monospace; white-space: pre-wrap;">${emailBody.replace(/\n/g, '<br>')}</pre>`,
        });

        if (error) {
          console.error('Resend error:', error);
          emailError = JSON.stringify(error);
        } else {
          console.log('✅ Email sent successfully via Resend:', data);
          emailSent = true;
        }
      } catch (error) {
        console.error('Error sending email:', error);
        emailError = error instanceof Error ? error.message : JSON.stringify(error);
      }
    } else {
      console.log('📧 RESEND_API_KEY not configured - email content logged above');
    }
    
    return NextResponse.json({ 
      success: true, 
      message: emailSent 
        ? 'Quote request submitted and email sent successfully. You will be contacted within 24-48 hours.'
        : 'Quote request submitted successfully. Email content has been logged for manual processing.',
      emailSent
    });
  } catch (error) {
    console.error('Error processing quote request:', error);
    return NextResponse.json(
      { success: false, message: 'Error processing quote request. Please try again.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ message: 'Quote submission API is working!' });
}
