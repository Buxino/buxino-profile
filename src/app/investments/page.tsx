import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
// This is the line that "pulls" from your components folder
import InvestmentsComponent from '@/components/InvestmentsPage';

export default function Page() {
  return (
    <main>
      <Navbar />
      
      {/* We are just calling the component here */}
      <InvestmentsComponent />
      
      <Footer />
    </main>
  );
}