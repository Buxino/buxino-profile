import Link from "next/link";
import React from "react";

const SurveySection = () => {
  return (
    <div className="bg-gold p-10 text-center text-navy-blue">
      <h2 className="text-2xl font-bold mb-4">Partner with Excellence</h2>
      <p className="mb-6">Help us refine our strategic delivery by completing our client survey.</p>
      <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdrK_IDBwxMAIaD8ymtdUpPrWKKZtcVlWxnbkMKPeEhg8zlUw/viewform">
        <span className="bg-navy-blue text-white px-8 py-3 rounded hover:bg-black transition-all cursor-pointer">
          Complete Buxino Consulting Survey
        </span>
      </Link>
    </div>
  );
};

export default SurveySection;