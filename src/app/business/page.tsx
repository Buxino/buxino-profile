import OurBusinessPage from '@/components/BusinessModelSection';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function MilestonesPage() {
  return (
    <main>
      <Navbar />
      {/* Padding-top ensures the fixed navbar doesn't cover your heading */}
      <div className="pt-24"> 
        <OurBusinessPage />
      </div>
      <Footer />
    </main>
  );
}