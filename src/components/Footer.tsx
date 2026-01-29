// import Link from "next/link";
// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           <div>
//             <h3 className="footer-title">About</h3>
//             <ul>
//               <li>
//                 <Link href="/business">Company</Link>
//               </li>
//               <li>
//                 <Link href="/business/govenance/#board">Governance</Link>
//               </li>
//               <li>
//                 <Link href="/investments">Investments</Link>
//               </li>
//               <li>
//                 <Link href="/sustainability">Sustainability</Link>
//               </li>
//               <li>
//                 <Link href="/connect/press-office">Media Centre</Link>
//               </li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="footer-title">Legal</h3>
//             <ul>
//               <li>
//                 <Link href="/legal/paia_popi">PAIA</Link>
//               </li>
//               <li>
//                 <Link href="/legal/iso-9000">ISO 9001</Link>
//               </li>
//               <li>
//                 <Link href="/legal/email-disclaimer">Email Disclaimer</Link>
//               </li>
//               <li>
//                 <Link href="/legal/terms-of-use">Terms of Use</Link>
//               </li>
//               <li>
//                 <Link href="/legal/quality-policy">Quality Policy</Link>
//               </li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="footer-title">Connect</h3>
//             <ul>
//               <li>
//                 <Link href="/connect/contact-information">Contact Us</Link>
//               </li>
//               <li>
//                 <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdrK_IDBwxMAIaD8ymtdUpPrWKKZtcVlWxnbkMKPeEhg8zlUw/viewform">
//                   Customer Survey
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/connect/press-office">Press Office</Link>
//               </li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="footer-title">Contact centre</h3>
//             <p className="mb-2">
//               Contact us: +27 79 264 4869 <br />
//               Email:{" "}
//               <a href="mailto:buxinoconsulting@gmail.com">buxinoconsulting@gmail.com</a>
//             </p>
//             <p className="mb-6">
//               6159 Matlaisane Street,
//               <br />
//               Pretoria, Gauteng,
//               <br />
//               South Africa
//             </p>
//             <div className="mb-4">
//               <p className="mb-2">Follow us on:</p>
//               <div className="flex space-x-4">
//                 <a href="https://www.facebook.com/SakhumnothoGroup/" target="_blank" rel="noopener noreferrer">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="white"
//                   >
//                     <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
//                   </svg>
//                 </a>
//                 <a href="https://www.instagram.com/buxinoconsulting/" target="_blank" rel="noopener noreferrer">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="white"
//                   >
//                     <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
//                   </svg>
//                 </a>
//                 <a href="https://twitter.com/Sakhumnotho_" target="_blank" rel="noopener noreferrer">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="white"
//                   >
//                     <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
//                   </svg>
//                 </a>
//                 <a href="https://www.linkedin.com/company/sakhumnothogroupholdings/" target="_blank" rel="noopener noreferrer">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="white"
//                   >
//                     <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
//                   </svg>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="pt-8 mt-8 border-t border-gray-700 text-center md:text-left">
//           <p>2021 - 2025 Buxino Consulting (Pty) Ltd I All Rights Reserved</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-navy-blue text-white py-12 border-t border-gold/20">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="font-bold text-gold mb-4 uppercase tracking-wider text-sm">Buxino Consulting</h3>
          <p className="text-sm opacity-80 leading-relaxed">
            6159 Matlaisane Street,<br /> 
            Ga-Rankuwa, Pretoria,<br />
            Gauteng, 0208
          </p>
        </div>

        {/* Legal Links - All pointing to the consolidated Hub */}
        <div>
          <h3 className="font-bold text-gold mb-4 uppercase tracking-wider text-sm">Legal & Governance</h3>
          <ul className="text-sm space-y-3">
            <li>
              <Link href="/legal" className="opacity-80 hover:opacity-100 hover:text-gold transition-all">
                Governance & Regulatory Hub
              </Link>
            </li>
            <li>
              <Link href="/legal" className="opacity-80 hover:opacity-100 hover:text-gold transition-all">
                Terms of Use
              </Link>
            </li>
            <li>
              <Link href="/legal" className="opacity-80 hover:opacity-100 hover:text-gold transition-all">
                Privacy Policy (POPIA)
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-bold text-gold mb-4 uppercase tracking-wider text-sm">Connect</h3>
          <div className="space-y-2">
            <p className="text-sm">
              <span className="opacity-60">Email:</span> <a href="mailto:consulting@buxino.co.za" className="hover:text-gold transition-colors">consulting@buxino.co.za</a>
            </p>
            <p className="text-sm">
              <span className="opacity-60">Phone:</span> <a href="tel:+27792644869" className="hover:text-gold transition-colors">+27 79 264 4869</a>
            </p>
          </div>
        </div>
      </div>

      <div className="text-center mt-12 pt-8 border-t border-white/10 opacity-60">
        <p className="text-xs tracking-widest uppercase">
          © 2026 Buxino Consulting (Pty) Ltd | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;