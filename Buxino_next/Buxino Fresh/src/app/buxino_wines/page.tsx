import BuxinoWinesPage from '@/components/BuxinoWines';


export default function BuxinoWinesMainPage() {
  return (
    <main>
      {/* Padding-top ensures the fixed navbar doesn't cover your heading */}
      <div className="pt-24"> 
        <BuxinoWinesPage />
      </div>
    </main>
  );
}