
# 📧 Free Email Setup Instructions

Your quote portal is now configured with **Resend** for free email sending (3,000 emails/month)!

## 🚀 Quick Setup (5 minutes):

### Step 1: Create Free Resend Account
1. Go to https://resend.com
2. Click "Sign Up" (it's completely free!)
3. Verify your email address

### Step 2: Get Your API Key
1. Once logged in, go to "API Keys" in the dashboard
2. Click "Create API Key"
3. Name it "AnyTech Quote Portal"
4. Copy the API key (starts with `re_`)

### Step 3: Add API Key to Your Portal
1. Open your project's `.env.local` file
2. Replace `your_resend_api_key_here` with your actual API key:
   ```
   RESEND_API_KEY=re_your_actual_key_here
   ```
3. Save the file
4. Restart your development server

### Step 4: Verify Domain (Important!)
1. In Resend dashboard, go to "Domains"
2. Add your domain (e.g., `yourdomain.com`)
3. Follow the DNS verification steps
4. Once verified, update the "from" address in the code

## 🎯 Current Status:
- ✅ Resend is installed and configured
- ✅ Email sending code is ready
- ⏳ **Waiting for:** Your API key and domain verification

## 🔧 Alternative: Use "from" Address Workaround
If you don't have a domain to verify immediately, you can:
1. Use Resend's default sending address (has limitations)
2. Or update the code to use `onboarding@resend.dev` temporarily

## 📋 What Happens After Setup:
1. Quote submissions will automatically send emails to `barnie.kruger@anytech.co.za`
2. Emails include all client details, requirements, and submission info
3. Professional formatting with all the data you need
4. Backup: Content still logged to console if email fails

## 💡 Need Help?
- Resend Documentation: https://resend.com/docs
- Free tier: 3,000 emails/month, 100/day
- No credit card required for free tier

Once you complete these steps, you'll receive actual emails in your inbox! 🎉
