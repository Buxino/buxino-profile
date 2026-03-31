"use client";

import React, { useEffect } from 'react';
import { Download } from 'lucide-react';

const CompanyProfile = () => {
  useEffect(() => {
    // Nav scroll effect
    const nav = document.getElementById('nav');
    const handleScroll = () => {
      if (nav) {
        nav.classList.toggle('scrolled', window.scrollY > 60);
      }
    };
    window.addEventListener('scroll', handleScroll);

    // Reveal on scroll
    const reveals = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), 80);
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    reveals.forEach((r) => io.observe(r));

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        :root {
          --ink:     #001224;
          --deep:    #001F3F;
          --mid:     #0a3055;
          --steel:   #1a4a6e;
          --slate:   #2e6090;
          --mist:    #5a85a8;
          --silver:  #a8c4d8;
          --frost:   #dce9f2;
          --fog:     #eef4f9;
          --white:   #f8fbfd;
          --gold:    #D4AF37;
          --gold-lt: #e8d07a;
        }

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        html { scroll-behavior: smooth; }

        body {
          font-family: 'Jost', sans-serif;
          background: var(--white);
          color: var(--deep);
          line-height: 1.7;
          overflow-x: hidden;
        }

        .serif { font-family: 'Cormorant Garamond', Georgia, serif; }
        h1, h2, h3, h4 { font-family: 'Cormorant Garamond', Georgia, serif; line-height: 1.15; }

        /* HERO */
        .hero {
          position: relative;
          height: 100vh;
          min-height: 680px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          overflow: hidden;
        }
        .hero-img {
          position: absolute; inset: 0;
          background: url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80') center/cover no-repeat;
        }
        .hero-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(160deg, var(--ink) 0%, rgba(0,18,36,0.92) 45%, rgba(0,31,63,0.70) 100%);
        }
        .hero-content {
          position: relative;
          z-index: 2;
          padding: 0 80px 80px;
          max-width: 860px;
        }
        .hero-eyebrow {
          font-family: 'Jost', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 24px;
        }
        .hero h1 {
          font-size: clamp(52px, 7vw, 96px);
          font-weight: 300;
          color: var(--white);
          margin-bottom: 8px;
          letter-spacing: -0.01em;
        }
        .hero h1 strong {
          font-weight: 700;
          font-style: italic;
          display: block;
        }
        .hero-tagline {
          font-size: 17px;
          font-weight: 300;
          color: var(--silver);
          max-width: 500px;
          margin: 24px 0 40px;
          line-height: 1.6;
        }
        .hero-badges {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
        .badge {
          border: 1px solid rgba(212,175,55,0.4);
          color: var(--gold-lt);
          font-family: 'Jost', sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          padding: 8px 18px;
        }
        .hero-reg {
          position: absolute;
          right: 80px;
          bottom: 80px;
          font-size: 10px;
          font-weight: 300;
          letter-spacing: 0.2em;
          color: rgba(168,196,216,0.5);
          text-transform: uppercase;
          z-index: 2;
          text-align: right;
          line-height: 1.9;
        }
        .hero-scroll {
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 3;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
        }
        .scroll-line {
          width: 1px;
          height: 48px;
          background: linear-gradient(to bottom, var(--gold), transparent);
          animation: scrollpulse 2s ease-in-out infinite;
        }
        @keyframes scrollpulse {
          0%,100% { opacity: 0.4; transform: scaleY(1); }
          50% { opacity: 1; transform: scaleY(1.1); }
        }

        /* NAV */
        nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          padding: 22px 80px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: background 0.4s, padding 0.4s;
        }
        nav.scrolled {
          background: rgba(0,18,36,0.96);
          backdrop-filter: blur(12px);
          padding: 14px 80px;
          border-bottom: 1px solid rgba(212,175,55,0.15);
        }
        .nav-logo {
          font-family: 'Cormorant Garamond', serif;
          font-size: 22px;
          font-weight: 700;
          color: var(--white);
          letter-spacing: 0.05em;
        }
        .nav-logo span { color: var(--gold); }
        .nav-links {
          display: flex;
          gap: 36px;
          list-style: none;
        }
        .nav-links a {
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--silver);
          text-decoration: none;
          transition: color 0.2s;
        }
        .nav-links a:hover { color: var(--gold); }

        /* SECTIONS */
        .section-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 80px;
        }

        /* ABOUT */
        .about {
          background: var(--deep);
          padding: 120px 0;
          overflow: hidden;
        }
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        .about-image-wrap {
          position: relative;
        }
        .about-image-wrap img {
          width: 100%;
          height: 560px;
          object-fit: cover;
          display: block;
          filter: grayscale(100%) contrast(1.05);
          mix-blend-mode: luminosity;
        }
        .about-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(0,31,63,0.3), transparent);
        }
        .img-accent {
          position: absolute;
          right: -20px;
          bottom: -20px;
          width: 180px;
          height: 180px;
          border: 1px solid rgba(212,175,55,0.3);
          z-index: -1;
        }
        .img-year {
          position: absolute;
          top: 24px;
          left: -20px;
          background: var(--gold);
          color: var(--ink);
          font-family: 'Cormorant Garamond', serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.1em;
          padding: 10px 20px;
          writing-mode: vertical-rl;
          text-orientation: mixed;
          transform: rotate(180deg);
        }
        .section-label {
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 20px;
        }
        .about h2 {
          font-size: clamp(36px, 4vw, 56px);
          font-weight: 300;
          color: var(--white);
          margin-bottom: 28px;
          line-height: 1.15;
        }
        .about h2 em {
          font-style: italic;
          font-weight: 600;
          color: var(--frost);
        }
        .about p {
          color: var(--silver);
          font-size: 15px;
          font-weight: 300;
          margin-bottom: 20px;
        }
        .pull-quote {
          border-left: 2px solid var(--gold);
          padding: 16px 0 16px 28px;
          margin: 36px 0;
        }
        .pull-quote p {
          font-family: 'Cormorant Garamond', serif;
          font-size: 22px;
          font-style: italic;
          font-weight: 400;
          color: var(--frost);
          line-height: 1.5;
          margin: 0;
        }
        .values-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          margin-top: 52px;
          background: rgba(212,175,55,0.15);
        }
        .value-item {
          background: var(--deep);
          padding: 28px 24px;
          text-align: center;
        }
        .value-item .v-icon {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.3em;
          color: var(--gold);
          text-transform: uppercase;
          margin-bottom: 8px;
        }
        .value-item h4 {
          font-size: 18px;
          font-weight: 600;
          color: var(--white);
          margin-bottom: 6px;
        }
        .value-item p {
          font-size: 12px;
          color: var(--mist);
          margin: 0;
          line-height: 1.6;
        }

        /* QUOTE BAND */
        .quote-band {
          background: var(--ink);
          padding: 80px 0;
          text-align: center;
          border-top: 1px solid rgba(212,175,55,0.15);
          border-bottom: 1px solid rgba(212,175,55,0.15);
        }
        .quote-band blockquote {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(26px, 3.5vw, 44px);
          font-weight: 300;
          font-style: italic;
          color: var(--white);
          max-width: 900px;
          margin: 0 auto;
          padding: 0 80px;
          line-height: 1.4;
        }
        .quote-band blockquote em {
          color: var(--gold);
          font-style: normal;
          font-weight: 600;
        }
        .quote-author {
          margin-top: 28px;
          font-size: 11px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--mist);
        }
        .quote-author strong { color: var(--silver); }

        /* SERVICES */
        .services {
          background: var(--fog);
          padding: 120px 0;
        }
        .services-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 64px;
        }
        .services h2 {
          font-size: clamp(36px, 4vw, 56px);
          font-weight: 300;
          color: var(--deep);
          line-height: 1.15;
        }
        .services h2 strong { font-weight: 700; display: block; }
        .services-sub {
          font-size: 14px;
          color: var(--mist);
          max-width: 320px;
          text-align: right;
          font-weight: 300;
          line-height: 1.6;
        }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: var(--frost);
        }
        .service-card {
          background: var(--white);
          padding: 44px 36px;
          transition: background 0.3s;
          position: relative;
          overflow: hidden;
        }
        .service-card::before {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 3px;
          background: transparent;
          transition: background 0.3s;
        }
        .service-card:hover { background: var(--deep); }
        .service-card:hover::before { background: var(--gold); }
        .service-card:hover .sc-num,
        .service-card:hover .sc-title,
        .service-card:hover .sc-deal { color: var(--white); }
        .service-card:hover .sc-desc { color: var(--silver); }
        .service-card:hover .sc-deal { color: var(--gold); }
        .sc-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 48px;
          font-weight: 300;
          color: var(--frost);
          line-height: 1;
          margin-bottom: 20px;
          transition: color 0.3s;
        }
        .sc-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 22px;
          font-weight: 600;
          color: var(--deep);
          margin-bottom: 10px;
          transition: color 0.3s;
        }
        .sc-deal {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--slate);
          margin-bottom: 16px;
          transition: color 0.3s;
        }
        .sc-desc {
          font-size: 13px;
          color: var(--mist);
          line-height: 1.7;
          font-weight: 300;
          transition: color 0.3s;
        }
        .service-card.academy {
          grid-column: 1 / -1;
          background: var(--deep);
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          gap: 0;
          padding: 0;
        }
        .academy-left {
          grid-column: 1 / 2;
          padding: 44px 36px;
          border-right: 1px solid rgba(255,255,255,0.08);
        }
        .academy-left .sc-num { color: rgba(212,175,55,0.2); }
        .academy-left .sc-title { color: var(--white); }
        .academy-left .sc-deal { color: var(--gold); }
        .academy-left .sc-desc { color: var(--silver); }
        .academy-tiers {
          grid-column: 2 / 5;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0;
        }
        .tier-item {
          padding: 44px 28px;
          border-right: 1px solid rgba(255,255,255,0.06);
        }
        .tier-item:last-child { border-right: none; }
        .tier-label {
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 10px;
        }
        .tier-price {
          font-family: 'Cormorant Garamond', serif;
          font-size: 26px;
          font-weight: 600;
          color: var(--white);
          margin-bottom: 8px;
        }
        .tier-name {
          font-size: 13px;
          font-weight: 500;
          color: var(--frost);
          margin-bottom: 10px;
        }
        .tier-desc {
          font-size: 12px;
          color: var(--mist);
          font-weight: 300;
          line-height: 1.6;
        }

        /* MARKET */
        .market {
          background: var(--deep);
          padding: 120px 0;
        }
        .market .section-label { color: var(--gold); }
        .market h2 {
          font-size: clamp(36px, 4vw, 56px);
          font-weight: 300;
          color: var(--white);
          margin-bottom: 60px;
          line-height: 1.15;
        }
        .stats-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border: 1px solid rgba(212,175,55,0.15);
        }
        .stat-item {
          padding: 44px 36px;
          border-right: 1px solid rgba(212,175,55,0.15);
          position: relative;
        }
        .stat-item:last-child { border-right: none; }
        .stat-val {
          font-family: 'Cormorant Garamond', serif;
          font-size: 58px;
          font-weight: 300;
          color: var(--white);
          line-height: 1;
          margin-bottom: 8px;
        }
        .stat-val span { font-size: 28px; color: var(--gold); }
        .stat-label {
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--mist);
          font-weight: 400;
          margin-bottom: 8px;
        }
        .stat-note {
          font-size: 12px;
          color: rgba(168,196,216,0.5);
          font-weight: 300;
        }
        .market-split {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          margin-top: 80px;
          align-items: center;
        }
        .market-text p {
          font-size: 15px;
          font-weight: 300;
          color: var(--silver);
          margin-bottom: 20px;
          line-height: 1.8;
        }
        .market-image img {
          width: 100%;
          height: 400px;
          object-fit: cover;
          filter: grayscale(100%) brightness(0.6) contrast(1.1);
        }
        .positioning-trio {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 1px;
          background: rgba(212,175,55,0.1);
          margin-top: 60px;
        }
        .pos-item {
          padding: 32px 28px;
          background: var(--deep);
          text-align: center;
        }
        .pos-item.highlight { background: var(--gold); }
        .pos-item .pos-label {
          font-size: 10px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--mist);
          margin-bottom: 10px;
        }
        .pos-item.highlight .pos-label { color: rgba(0,18,36,0.6); }
        .pos-item h4 {
          font-size: 18px;
          font-weight: 600;
          color: var(--white);
          margin-bottom: 8px;
        }
        .pos-item.highlight h4 { color: var(--ink); }
        .pos-item p {
          font-size: 12px;
          color: var(--mist);
          font-weight: 300;
        }
        .pos-item.highlight p { color: rgba(0,18,36,0.7); }

        /* INVESTMENT DIVISIONS */
        .divisions {
          background: var(--ink);
          padding: 120px 0;
          overflow: hidden;
        }
        .divisions h2 {
          font-size: clamp(36px, 4vw, 56px);
          font-weight: 300;
          color: var(--white);
          margin-bottom: 16px;
        }
        .div-intro {
          font-size: 15px;
          font-weight: 300;
          color: var(--silver);
          max-width: 640px;
          margin-bottom: 64px;
          line-height: 1.8;
        }
        .div-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: rgba(212,175,55,0.1);
        }
        .div-card {
          background: var(--ink);
          padding: 0;
          overflow: hidden;
        }
        .div-card-img {
          width: 100%;
          height: 220px;
          object-fit: cover;
          filter: grayscale(100%) brightness(0.5) contrast(1.1);
          display: block;
          transition: filter 0.5s;
        }
        .div-card:hover .div-card-img {
          filter: grayscale(100%) brightness(0.65) contrast(1.1);
        }
        .div-card-body {
          padding: 32px 28px 36px;
        }
        .div-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 28px;
          font-weight: 600;
          color: var(--white);
          margin-bottom: 6px;
        }
        .div-tag {
          font-size: 10px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 16px;
        }
        .div-rev {
          font-family: 'Cormorant Garamond', serif;
          font-size: 22px;
          font-weight: 300;
          color: var(--frost);
          margin-bottom: 4px;
        }
        .div-margin {
          font-size: 11px;
          letter-spacing: 0.15em;
          color: var(--mist);
          margin-bottom: 18px;
        }
        .div-desc {
          font-size: 13px;
          font-weight: 300;
          color: var(--mist);
          line-height: 1.7;
        }
        .div-footer {
          margin-top: 52px;
          padding: 28px 32px;
          border: 1px solid rgba(212,175,55,0.2);
          font-size: 13px;
          font-weight: 300;
          color: var(--silver);
          font-style: italic;
          line-height: 1.7;
        }
        .div-footer strong { color: var(--gold); font-style: normal; }

        /* COMPLIANCE */
        .compliance {
          background: var(--deep);
          padding: 120px 0;
        }
        .compliance h2 {
          font-size: clamp(36px, 4vw, 56px);
          font-weight: 300;
          color: var(--white);
          margin-bottom: 60px;
        }
        .comp-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1px;
          background: rgba(212,175,55,0.1);
        }
        .comp-item {
          background: var(--deep);
          padding: 40px 40px 44px;
          display: grid;
          grid-template-columns: 56px 1fr;
          gap: 24px;
          align-items: start;
        }
        .comp-icon {
          width: 56px;
          height: 56px;
          border: 1px solid rgba(212,175,55,0.35);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Cormorant Garamond', serif;
          font-size: 22px;
          font-weight: 700;
          color: var(--gold);
        }
        .comp-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 22px;
          font-weight: 600;
          color: var(--white);
          margin-bottom: 4px;
        }
        .comp-sub {
          font-size: 10px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 12px;
        }
        .comp-desc {
          font-size: 13px;
          font-weight: 300;
          color: var(--silver);
          line-height: 1.7;
        }

        /* LEADERSHIP */
        .leadership {
          background: var(--fog);
          padding: 120px 0;
        }
        .leadership h2 {
          font-size: clamp(36px, 4vw, 56px);
          font-weight: 300;
          color: var(--deep);
          margin-bottom: 64px;
          line-height: 1.15;
        }
        .leader-grid {
          display: grid;
          grid-template-columns: 380px 1fr;
          gap: 80px;
          align-items: center;
        }
        .leader-img-wrap {
          position: relative;
        }
        .leader-img-wrap img {
          width: 100%;
          height: 520px;
          object-fit: cover;
          object-position: top;
          filter: grayscale(100%) contrast(1.05);
        }
        .leader-gold-box {
          position: absolute;
          top: -16px;
          left: -16px;
          width: 90px;
          height: 90px;
          background: var(--gold);
          z-index: -1;
        }
        .leader-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 44px;
          font-weight: 300;
          color: var(--deep);
          margin-bottom: 4px;
        }
        .leader-title {
          font-size: 11px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 32px;
        }
        .leader-bio p {
          font-size: 15px;
          font-weight: 300;
          color: var(--steel);
          margin-bottom: 18px;
          line-height: 1.8;
        }
        .leader-credentials {
          display: flex;
          gap: 16px;
          margin-top: 36px;
          flex-wrap: wrap;
        }
        .cred-tag {
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--deep);
          border: 1px solid var(--deep);
          padding: 8px 16px;
          font-weight: 500;
        }

        /* CONTACT & FOOTER */
        .contact {
          background: var(--ink);
          padding: 120px 0 0;
        }
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          padding-bottom: 80px;
        }
        .contact h2 {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(40px, 5vw, 72px);
          font-weight: 300;
          color: var(--white);
          line-height: 1.1;
          margin-bottom: 40px;
        }
        .contact h2 em { font-style: italic; color: var(--gold); }
        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-top: 8px;
        }
        .contact-row {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .contact-row .c-label {
          font-size: 9px;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: var(--mist);
          font-weight: 500;
        }
        .contact-row .c-val {
          font-size: 15px;
          font-weight: 300;
          color: var(--silver);
        }
        .contact-row .c-val a {
          color: var(--silver);
          text-decoration: none;
          transition: color 0.2s;
        }
        .contact-row .c-val a:hover { color: var(--gold); }
        .contact-right img {
          width: 100%;
          height: 340px;
          object-fit: cover;
          filter: grayscale(100%) brightness(0.45);
        }
        .footer-bar {
          background: rgba(0,0,0,0.4);
          border-top: 1px solid rgba(212,175,55,0.15);
          padding: 28px 80px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .footer-logo {
          font-family: 'Cormorant Garamond', serif;
          font-size: 18px;
          font-weight: 700;
          color: var(--white);
        }
        .footer-logo span { color: var(--gold); }
        .footer-reg {
          font-size: 10px;
          letter-spacing: 0.2em;
          color: rgba(168,196,216,0.35);
          text-transform: uppercase;
          text-align: center;
        }
        .footer-bbee {
          font-size: 10px;
          letter-spacing: 0.2em;
          color: var(--gold);
          text-transform: uppercase;
          text-align: right;
          opacity: 0.7;
        }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .section-inner { padding: 0 32px; }
          nav { padding: 18px 32px; }
          nav.scrolled { padding: 12px 32px; }
          .about-grid, .market-split, .leader-grid, .contact-grid { grid-template-columns: 1fr; gap: 48px; }
          .nav-links { display: none; }
        }
      `}</style>

      {/* HERO */}
      <section className="hero">
        <div className="hero-img"></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <p className="hero-eyebrow">Company Profile · 2026</p>
          <h1 className="serif">
            Buxino<br />
            <strong>Consulting.</strong>
          </h1>
          <p className="hero-tagline">Architecting execution for macro enterprises. Strategy, gifting, consulting, events — and a knowledge flywheel that compounds.</p>
          <div className="hero-badges">
            <span className="badge">Level 1 B-BBEE</span>
            <span className="badge">100% Black Owned</span>
            <span className="badge">Pretoria, South Africa</span>
          </div>
        </div>
        <div className="hero-reg">
          Reg: 2021/965486/07<br />
          Founded 2021<br />
          www.buxino.co.za
        </div>
        <div className="hero-scroll">
          <div className="scroll-line"></div>
          <span>Scroll</span>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about" id="about">
        <div className="section-inner">
          <div className="about-grid">
            <div className="about-image-wrap reveal">
              <img src="/Buxino Consulting LinkedIn Logo.jpg" alt="Buxino Consulting Logo"/>
              <div className="about-image-overlay"></div>
              <div className="img-accent"></div>
              <div className="img-year">Est. 2021</div>
            </div>
            <div className="reveal">
              <p className="section-label">Who We Are</p>
              <h2>Where <em>strategy meets</em> flawless execution.</h2>
              <p>Buxino Consulting (Pty) Ltd is a Level 1 B-BBEE, 100% Black-owned strategic services firm born from Pretoria township roots with institutional ambitions. We specialize in corporate gifting, retainer-based consulting, strategic business plans, premium event logistics — and increasingly in knowledge monetization through <strong style={{color: 'var(--frost)'}}>Buxino Academy</strong>.</p>
              <p>Our hybrid model leverages SETA-funded learners for near-zero direct execution cost and converts transactional spend into recurring revenue via retainers and Academy subscriptions — turning every client relationship into a compounding flywheel.</p>
              <div className="pull-quote">
                <p>"We believe that marketing &amp; sales are the crucial elements in building a successful brand — and that transformation must be embedded in every initiative we undertake."</p>
              </div>
            </div>
          </div>
          <div className="values-row reveal">
            <div className="value-item">
              <div className="v-icon">01</div>
              <h4>Agility</h4>
              <p>Speed and adaptability without compromising precision.</p>
            </div>
            <div className="value-item">
              <div className="v-icon">02</div>
              <h4>Transformation</h4>
              <p>Uplifting communities and addressing youth unemployment.</p>
            </div>
            <div className="value-item">
              <div className="v-icon">03</div>
              <h4>Integrity</h4>
              <p>Transparency as baseline, governance-first mindset.</p>
            </div>
            <div className="value-item">
              <div className="v-icon">04</div>
              <h4>Innovation</h4>
              <p>Global technology solving uniquely African challenges.</p>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE BAND */}
      <div className="quote-band">
        <div className="section-inner">
          <blockquote>"We are not merely consulting; we are <em>Architecting Execution.</em>"</blockquote>
          <p className="quote-author"><strong>Bakang Matjila</strong> — Founder &amp; Managing Director</p>
        </div>
      </div>

      {/* SERVICES */}
      <section className="services" id="services">
        <div className="section-inner">
          <div className="services-header reveal">
            <div>
              <p className="section-label" style={{color: 'var(--slate)'}}>What We Do</p>
              <h2>Revenue streams<br/><strong>by design.</strong></h2>
            </div>
            <p className="services-sub">Every stream aligns with mandatory ESD spend (~R20–30B p.a.) and delivers 135% Level 1 B-BBEE recognition.</p>
          </div>
          <div className="services-grid reveal">
            <div className="service-card">
              <div className="sc-num">01</div>
              <div className="sc-title">Corporate Gifting &amp; Branding</div>
              <div className="sc-deal">R13,000 – R25,000 / order</div>
              <div className="sc-desc">Curated high-perceived-value executive kits and branded merchandise via the Amrod affiliate network. 7–14 day turnaround with full branding strategy included — not just product push.</div>
            </div>
            <div className="service-card">
              <div className="sc-num">02</div>
              <div className="sc-title">Business Consulting Retainers</div>
              <div className="sc-deal">R50,000 – R150,000 / quarter</div>
              <div className="sc-desc">Quarterly or annual retainers focused on sales optimization, branding architecture, ESD compliance navigation, and procurement infiltration. Founder-led execution — not junior consultants.</div>
            </div>
            <div className="service-card">
              <div className="sc-num">03</div>
              <div className="sc-title">Strategic Plans &amp; Registrations</div>
              <div className="sc-deal">R25,000 – R85,000 / engagement</div>
              <div className="sc-desc">Custom 5-year business plans, CIPC registrations, B-BBEE verifications, ESD readiness packages. Frequently bundled with retainers for seamless strategy-to-compliance execution.</div>
            </div>
            <div className="service-card">
              <div className="sc-num">04</div>
              <div className="sc-title">Event Planning &amp; Logistics</div>
              <div className="sc-deal">R25,000 – R150,000 / event</div>
              <div className="sc-desc">White-glove corporate activations, product launches, CSI events, dealer conferences and end-to-end logistics. Scalable from executive dinners to 200-pax activations with Level 1 recognition on full event spend.</div>
            </div>
            <div className="service-card academy">
              <div className="academy-left">
                <div className="sc-num">05</div>
                <div className="sc-title">Buxino Academy</div>
                <div className="sc-deal">Knowledge Monetization Flywheel</div>
                <div className="sc-desc">Packaging our battle-tested execution methodology into digital and high-touch learning products for black-owned SMEs and corporates — turning founder IP into a high-margin, recurring asset.</div>
              </div>
              <div className="academy-tiers">
                <div className="tier-item">
                  <div className="tier-label">Tier 1</div>
                  <div className="tier-price">R10,000</div>
                  <div className="tier-name">Self-Serve Toolkit</div>
                  <div className="tier-desc">Browser-based playbook, 100-pt scorecard, proposal generator &amp; Level 1 JV strategy module.</div>
                </div>
                <div className="tier-item">
                  <div className="tier-label">Tier 2</div>
                  <div className="tier-price">R35,000</div>
                  <div className="tier-name">Done-With-You Mentorship</div>
                  <div className="tier-desc">3 × 60-min sessions with Bakang Matjila + personalised 90-day roadmap and audits.</div>
                </div>
                <div className="tier-item">
                  <div className="tier-label">Tier 3 &amp; 4</div>
                  <div className="tier-price">R75,000+</div>
                  <div className="tier-name">White-Label Licensing</div>
                  <div className="tier-desc">Corporates rebrand and resell the system. Plus community subscriptions with live Q&amp;A and updates.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARKET */}
      <section className="market" id="market">
        <div className="section-inner">
          <p className="section-label reveal">Market Position</p>
          <h2 className="reveal">The numbers behind<br/>the opportunity.</h2>
          <div className="stats-row reveal">
            <div className="stat-item">
              <div className="stat-val">R20<span>–30B</span></div>
              <div className="stat-label">ESD Annual Spend</div>
              <div className="stat-note">Mandatory 3% NPAT allocation by SA corporates</div>
            </div>
            <div className="stat-item">
              <div className="stat-val">135<span>%</span></div>
              <div className="stat-label">Procurement Recognition</div>
              <div className="stat-note">Level 1 B-BBEE advantage on every rand spent</div>
            </div>
            <div className="stat-item">
              <div className="stat-val">44<span>%</span></div>
              <div className="stat-label">Youth Unemployment</div>
              <div className="stat-note">Buxino addresses via SETA training model</div>
            </div>
            <div className="stat-item">
              <div className="stat-val">R4.16<span>M</span></div>
              <div className="stat-label">2029 Revenue Target</div>
              <div className="stat-note">Including R2.19M from Buxino Academy</div>
            </div>
          </div>
          <div className="market-split">
            <div className="market-text reveal">
              <p>The corporate gifting and consulting market splits into two extremes: mass resellers operating on volume and low price, and expensive agencies with high creative output but slow, costly execution.</p>
              <p><strong style={{color: 'var(--frost)'}}>Buxino owns the profitable middle ground</strong> — strategy combined with agile execution at premium quality, reinforced by an unmatched Level 1 B-BBEE compliance advantage.</p>
              <p>Targeting blue-chip ESD spend ensures stability, while Buxino Academy creates high-margin digital recurring revenue — teaching other black-owned businesses the same execution system that built Buxino.</p>
              <div className="positioning-trio">
                <div className="pos-item">
                  <div className="pos-label">Competitor</div>
                  <h4>Catalogue Pushers</h4>
                  <p>Volume / low price. No strategic value.</p>
                </div>
                <div className="pos-item highlight">
                  <div className="pos-label">Our Position</div>
                  <h4>Buxino</h4>
                  <p>Strategy + execution. Agile. Premium. Level 1.</p>
                </div>
                <div className="pos-item">
                  <div className="pos-label">Competitor</div>
                  <h4>Expensive Agencies</h4>
                  <p>High creative. Slow. Outsource execution.</p>
                </div>
              </div>
            </div>
            <div className="market-image reveal">
              <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80" alt="Business strategy"/>
            </div>
          </div>
        </div>
      </section>

      {/* INVESTMENT DIVISIONS */}
      <section className="divisions" id="divisions">
        <div className="section-inner">
          <p className="section-label reveal">Investment Divisions</p>
          <h2 className="reveal">Ring-fenced.<br/>High-margin. Strategic.</h2>
          <p className="div-intro reveal">Three independent divisions legally and financially separated from core operations — generating supplementary cash flow, diversifying risk, and creating strategic synergies.</p>
          <div className="div-grid reveal">
            <div className="div-card">
              <img className="div-card-img" src="/Buxino Wines Logo (rendered).png" alt="Buxino Wines"/>
              <div className="div-card-body">
                <div className="div-tag">Premium Wine Portfolio</div>
                <div className="div-name">Buxino Wines</div>
                <div className="div-rev">R145K → R500K / yr</div>
                <div className="div-margin">54–57% Gross Margin</div>
                <div className="div-desc">Premium SA wine portfolio focused on exclusive small-batch releases, private labelling, and corporate gifting allocations. Creates Trojan Horse access to senior decision-makers through private tastings and cellar events.</div>
              </div>
            </div>
            <div className="div-card">
              <img className="div-card-img" src="/BuxRamsey logo.jpg" alt="BuxRamsey Catering"/>
              <div className="div-card-body">
                <div className="div-tag">Institutional Catering</div>
                <div className="div-name">BuxRamsey</div>
                <div className="div-rev">R280K → R980K / yr</div>
                <div className="div-margin">58–65% Gross Margin</div>
                <div className="div-desc">Premium institutional catering specializing in authentic 7-colours platters, corporate galas, executive lunches, and heritage food experiences. 50% deposit model creates predictable monthly cash flow.</div>
              </div>
            </div>
            <div className="div-card">
              <img className="div-card-img" src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=700&q=80" alt="In The Mino Music"/>
              <div className="div-card-body">
                <div className="div-tag">Creative Talent Management</div>
                <div className="div-name">In The Mino</div>
                <div className="div-rev">R150K → R650K / yr</div>
                <div className="div-margin">72–82% Gross Margin</div>
                <div className="div-desc">Institutional management and advisory for artists and musicians. Sponsorship brokering, financial guardrails, brand alignment, and high-yield deal structuring for the creative economy.</div>
              </div>
            </div>
          </div>
          <div className="div-footer reveal">
            Collectively projected to contribute an additional <strong>R575,000 – R2,130,000</strong> in annual revenue and <strong>R475,000 – R950,000</strong> in net cash flow by 2029 — entirely outside the core operational model. They function as strategic cash-flow buffers, brand amplifiers, and risk mitigators while remaining financially and legally separated.
          </div>
        </div>
      </section>

      {/* COMPLIANCE */}
      <section className="compliance" id="compliance">
        <div className="section-inner">
          <p className="section-label reveal">Regulatory Standing</p>
          <h2 className="reveal">Compliance<br/>as competitive advantage.</h2>
          <div className="comp-grid reveal">
            <div className="comp-item">
              <div className="comp-icon">B</div>
              <div>
                <div className="comp-title">B-BBEE Level 1</div>
                <div className="comp-sub">135% Procurement Recognition</div>
                <div className="comp-desc">The highest possible B-BBEE transformation rating. Every rand spent with Buxino yields 135% scorecard credit — the most efficient ESD investment available in the South African market.</div>
              </div>
            </div>
            <div className="comp-item">
              <div className="comp-icon">T</div>
              <div>
                <div className="comp-title">SARS Compliant</div>
                <div className="comp-sub">Valid Tax Clearance Certificate</div>
                <div className="comp-desc">Full tax compliance with the South African Revenue Service. Current and valid Tax Clearance Certificate maintained — a mandatory prerequisite for blue-chip corporate tender processes.</div>
              </div>
            </div>
            <div className="comp-item">
              <div className="comp-icon">P</div>
              <div>
                <div className="comp-title">POPIA Registered</div>
                <div className="comp-sub">Information Regulator</div>
                <div className="comp-desc">Formally registered and compliant with the Protection of Personal Information Act. Data governance is embedded in our operations — not an afterthought.</div>
              </div>
            </div>
            <div className="comp-item">
              <div className="comp-icon">S</div>
              <div>
                <div className="comp-title">SETA-Aligned</div>
                <div className="comp-sub">Youth Skills Development</div>
                <div className="comp-desc">Formally aligned with SETA for youth training programmes — addressing South Africa's 44% youth unemployment rate while creating a near-zero-cost operational multiplier for the business.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="leadership" id="leadership">
        <div className="section-inner">
          <p className="section-label reveal" style={{color: 'var(--slate)'}}>Leadership</p>
          <h2 className="reveal">The architect<br/>behind the execution.</h2>
          <div className="leader-grid">
            <div className="leader-img-wrap reveal">
              <img src="/bakang.jpg" alt="Bakang Matjila"/>
              <div className="leader-gold-box"></div>
            </div>
            <div className="reveal">
              <div className="leader-name">Bakang Matjila</div>
              <div className="leader-title">Founder &amp; Managing Director</div>
              <div className="leader-bio">
                <p>A multi-disciplinary strategist with a BCom in Economic Management Sciences, synthesizing Marketing Management, Financial Accounting, and Business Management into a cohesive execution philosophy that has driven high-stakes business development across TMT, FMCG, and Media sectors.</p>
                <p>Emerging from Pretoria township roots, Bakang brings a lived understanding of the transformation mandate that underpins Buxino's identity. His approach bridges marketing psychology and financial precision — creating structural freedom for brands to grow without losing their soul.</p>
                <p>Bakang oversees all whale accounts, strategy, governance, and director-level review of every piece of client-facing output. His ambition: to build a company that teaches other black-owned businesses the same system that built Buxino.</p>
              </div>
              <div className="leader-credentials">
                <span className="cred-tag">BCom Economic Management</span>
                <span className="cred-tag">Marketing Management</span>
                <span className="cred-tag">Financial Accounting</span>
                <span className="cred-tag">TMT · FMCG · Media</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <div className="section-inner">
          <div className="contact-grid">
            <div className="reveal">
              <h2>Let's build<br/>something <em>lasting.</em></h2>
              <div className="contact-details">
                <div className="contact-row">
                  <span className="c-label">Phone</span>
                  <span className="c-val"><a href="tel:0792644869">079 264 4869</a></span>
                </div>
                <div className="contact-row">
                  <span className="c-label">Email</span>
                  <span className="c-val"><a href="mailto:consulting@buxino.co.za">consulting@buxino.co.za</a></span>
                </div>
                <div className="contact-row">
                  <span className="c-label">Website</span>
                  <span className="c-val"><a href="https://www.buxino.co.za" target="_blank">www.buxino.co.za</a></span>
                </div>
                <div className="contact-row">
                  <span className="c-label">Location</span>
                  <span className="c-val">Pretoria, Gauteng · South Africa<br/><span style={{fontSize: '12px', color: 'var(--mist)'}}>(Hatfield expansion target 2027)</span></span>
                </div>
                <div className="contact-row">
                  <span className="c-label">Registration</span>
                  <span className="c-val">2021/965486/07</span>
                </div>
                <div className="contact-row">
                  <span className="c-label">B-BBEE Status</span>
                  <span className="c-val" style={{color: 'var(--gold)'}}>Level 1 · 135% Procurement Recognition</span>
                </div>
              </div>
            </div>
            <div className="contact-right reveal">
              <img src="https://images.unsplash.com/photo-1577495508048-b635879837f1?w=800&q=80" alt="Pretoria skyline"/>
            </div>
          </div>
        </div>

        <div className="footer-bar">
          <div className="footer-logo">Buxino<span>.</span></div>
          <div className="footer-reg">
            Buxino Consulting (Pty) Ltd · Reg: 2021/965486/07 · Confidential &amp; Proprietary · 2026
          </div>
          <div className="footer-bbee">Level 1 B-BBEE<br/>100% Black Owned</div>
        </div>
      </section>

      {/* PDF Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button 
          onClick={() => window.print()}
          className="group flex items-center gap-4 bg-[#C5A059] text-[#020617] px-8 py-4 text-[10px] font-black tracking-[0.4em] uppercase hover:bg-white hover:scale-105 transition-all shadow-2xl active:scale-95"
        >
          Institutional Profile <Download size={14} className="group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
    </>
  );
};

export default CompanyProfile;