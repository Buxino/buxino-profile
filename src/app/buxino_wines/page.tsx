import BuxinoWinesPage from '@/components/BuxinoWines';
import Footer from '@/components/Footer';

export default function BuxinoWinesMainPage() {
  return (
    <main>
      {/* Padding-top ensures the fixed navbar doesn't cover your heading */}
      <div className="pt-24"> 
        <BuxinoWinesPage />
      </div>
      <Footer />
    </main>
  );
}