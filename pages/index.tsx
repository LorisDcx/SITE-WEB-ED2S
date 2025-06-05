import Head from 'next/head';
import Image from 'next/image';
import CarouselRealisation from '../components/CarouselRealisation';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      <Head>
        <title>ED2S - Étanchéité Savoie</title>
        <meta name="description" content="Étanchéité de toitures, terrasses et bâtiments en Savoie. Demandez votre devis gratuit !" />
      </Head>
      {/* HEADER */}
      <header className="flex items-center justify-between px-6 py-2 bg-white shadow-md sticky top-0 z-20">
        <div className="flex items-center gap-4">
          <Image src="/logo-ed2s.png" alt="Logo ED2S" width={150} height={150} priority />
        </div>
        <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <span className="font-extrabold text-2xl md:text-3xl text-gray-800 font-sans tracking-tight bg-gradient-to-r from-orange-300 via-orange-450 to-orange-500 bg-clip-text text-transparent px-4 rounded">Étanchéité des 2 Savoie</span>
        </div>
        <nav className="hidden md:flex gap-8 text-gray font-semibold text-lg">
          <a href="#services" className="hover:text-primary transition">Services</a>
          <a href="#about" className="hover:text-primary transition">À propos</a>
          <a href="#gallery" className="hover:text-primary transition">Réalisations</a>
          <a href="/contact" className="hover:text-primary transition">Contact</a>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center h-screen min-h-[600px] bg-gray-100 overflow-hidden">
        {/* Background: locaux photo + overlay blanc pour lisibilité */}
        <div className="absolute inset-0">
          <img src="/locaux/IMG_20201120_155629.jpg" alt="Locaux ED2S" className="w-full h-full object-cover opacity-40" style={{filter:'blur(1px)'}} />
          <div className="absolute inset-0 bg-white/60" />
        </div>
        <div className="relative z-10 flex flex-col items-center">
          <div className="mb-4 flex justify-center items-center w-full">
            <Image src="/logo-ed2s.png" alt="Logo ED2S" width={220} height={220} className="mx-auto" style={{maxWidth:'220px', width:'100%', height:'auto'}} />
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 text-center mb-4 font-sans drop-shadow">
            Étanchéité, diagnostic et sécurité pour vos toitures et bâtiments
          </h1>
          <p className="text-lg md:text-2xl text-gray-700 text-center mb-8 font-sans">
            Experts en solutions durables pour professionnels et particuliers en Savoie, Haute-Savoie et Isère
          </p>
          <a href="/contact" className="px-8 py-4 rounded-full bg-primary text-white font-bold text-lg shadow-lg hover:bg-orange-600 transition">
            Demandez votre devis gratuit
          </a>
        </div>
      </section>
            {/* SECTION DIVIDER ORANGE */}
            <div className="w-full h-1 bg-gradient-to-r from-orange-200/70 via-orange-300/70 to-orange-400/70" />

      {/* SERVICES SECTION */}
      <section id="services" className="w-full bg-white py-16 px-4 border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 font-sans text-center">Nos Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '💧',
                title: 'Étanchéité toitures, terrasses & sous-sols',
                desc: 'Travaux d’étanchéité sur toitures plates, terrasses accessibles ou non, sous-sols et parkings. Pose de membranes bitumineuses, EPDM, PVC ou résines liquides. Finitions soignées et garanties durables.'
              },
              {
                icon: '🔎',
                title: 'Recherche de fuites & diagnostics',
                desc: 'Intervention rapide pour localiser précisément les fuites, même invisibles, grâce à des méthodes innovantes (tests fumigènes, sondes, caméra thermique…). Diagnostic complet et solutions adaptées.'
              },
              {
                icon: '🛠️',
                title: 'Entretien & maintenance',
                desc: 'Contrats d’entretien sur-mesure : inspection, nettoyage, petites réparations, suivi. Prévention des sinistres et prolongation de la durée de vie de vos toitures et terrasses.'
              },
              {
                icon: '🦺',
                title: 'Protections & sécurité',
                desc: 'Installation de dispositifs de protection collective (garde-corps, lignes de vie, ancrages) conformes aux normes, pour la sécurité de tous sur vos bâtiments.'
              },
              {
                icon: '🏆',
                title: 'Expertise & accompagnement',
                desc: 'Plus de 14 ans de terrain et 21 ans en gestion. Analyse du besoin, conseils techniques, solutions sur-mesure, suivi personnalisé du premier contact à la réception du chantier.'
              },
              {
                icon: '📐',
                title: "Bureau d'études",
                desc: '10 ans d’expertise en réalisation de plans de réservations, détails techniques, documents d’exécution et accompagnement technique pour vos projets de toiture et d’étanchéité.'
              }
            ].map((service, i) => (
              <motion.div
                key={service.title}
                className="bg-gray-50 rounded-xl shadow p-8 flex flex-col items-center hover:shadow-lg transition"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: i * 0.13 }}
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-700 text-center">{service.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <motion.span
              className="inline-block bg-primary text-white font-bold px-6 py-3 rounded-full shadow-lg text-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              ED2S, votre partenaire de confiance pour une étanchéité durable et sécurisée
            </motion.span>
          </div>
        </div>
      </section>

      {/* SECTION DIVIDER ORANGE */}
      <div className="w-full h-1 bg-gradient-to-r from-orange-200/70 via-orange-300/70 to-orange-400/70" />
      {/* ABOUT SECTION */}
      <section id="about" className="relative w-full py-20 px-0 overflow-hidden">
        {/* Fond locaux en transparence */}
        <div className="absolute inset-0 -z-10">
          <img src="/locaux/IMG_20201120_155531.jpg" alt="Locaux ED2S" className="w-full h-full object-cover opacity-30" style={{filter:'blur(1px)'}} />
          <div className="absolute inset-0 bg-white/70" />
        </div>
        <motion.div
          className="flex flex-col md:flex-row items-center md:items-start gap-10 w-full max-w-7xl mx-auto px-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-sans">ED2S, l’expertise étanchéité</h2>
            <p className="text-lg text-gray-700 mb-4 max-w-xl">
              <span className="font-semibold text-primary">ED2S</span> est une entreprise indépendante spécialisée dans l’étanchéité de toitures, terrasses et sous-sols.
              <br />
              <span className="block mt-2">Notre mission : garantir la sérénité de nos clients grâce à des solutions durables, innovantes et sur-mesure, partout en Savoie, Haute-Savoie et Isère.</span>
            </p>
            <ul className="mb-6 text-gray-700 space-y-2">
              <li><span className="font-bold text-primary">+14 ans</span> d’expérience terrain</li>
              <li><span className="font-bold text-primary">Réactivité & conseils personnalisés</span></li>
              <li><span className="font-bold text-primary">Qualité, sécurité & suivi</span> à chaque étape</li>
              <li><span className="font-bold text-primary">Interventions sur tous types de bâtiments</span></li>
            </ul>
            <div className="flex flex-col gap-2">
              <span className="font-semibold text-gray-900">Direction :</span>
              <span>Jean-Manuel OLIVEIRA – Président, Chargé d’affaires</span>
              <span>Cédric GAUTHIER – Gestion & Développement</span>
            </div>
          </div>
          <motion.div
            className="flex-1 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.93 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            <div className="rounded-2xl shadow-lg overflow-hidden w-full max-w-xs bg-white border border-gray-100">
              <img src="/logo-ed2s.png" alt="Logo ED2S" className="w-full h-auto object-contain p-6" />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* SECTION DIVIDER ORANGE */}
      <div className="w-full h-1 bg-gradient-to-r from-orange-200/70 via-orange-300/70 to-orange-400/70" />
      {/* GALLERY - CAROUSEL */}
      <motion.section
        id="gallery"
        className="max-w-5xl mx-auto py-16 px-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 font-sans"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          Réalisations
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          <CarouselRealisation large />
        </motion.div>
      </motion.section>


      {/* SECTION DIVIDER ORANGE */}
      <div className="w-full h-1 bg-gradient-to-r from-orange-200/70 via-orange-300/70 to-orange-400/70" />
      {/* FOOTER ORANGE */}
      <footer className="w-full bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 py-4 px-4 mt-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src="/ED2S-blanc.png" alt="Logo ED2S" className="w-20 h-20 object-contain" />
          </div>
          <div className="text-white text-center text-sm font-semibold">© 2025 ED2S – Étanchéité Savoie. Tous droits réservés.</div>
          <div>
            <a href="mailto:contact@etancheite2savoie.com" className="text-white underline font-semibold hover:text-orange-200 transition">contact@etancheite2savoie.com</a>
          </div>
        </div>
      </footer>
    </>
  );
}
