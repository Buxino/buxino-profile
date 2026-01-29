import Governance from '@/components/Governance';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function GovernancePage() {
  return (
    <main>
      <Navbar />
      {/* Padding-top ensures the fixed navbar doesn't cover your heading */}
      <div className="pt-24"> 
        <Governance />
      </div>
      <Footer />
    </main>
  );
}