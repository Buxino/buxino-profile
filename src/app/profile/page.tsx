import React from 'react';
import Footer from '@/components/Footer';
import CompanyProfile from '@/components/CompanyProfile';

export default function ProfilePage() {
  return (
    <main className="bg-[#fafafa] min-h-screen">
      {/* Standardizing the layout with a top padding to clear the fixed Navbar,
          and a bottom padding for the Footer.
      */}
      <div className="pt-32 pb-20"> 
        <CompanyProfile />
      </div>
      <Footer />
    </main>
  );
}