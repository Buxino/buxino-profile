import Navbar  from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import SurveySection from '@/components/SurveySection';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection 
        title="Buxino Consulting: Strategic Vision. Tangible Results." 
        backgroundImage="/BuxinoConsultingGemini.png" 
      />
      {/* Our Story & Business Model sections would follow here, updated to Buxino branding */}
      <SurveySection />
      <Footer />
    </main>
  );
}