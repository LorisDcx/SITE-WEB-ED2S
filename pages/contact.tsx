import Head from 'next/head';
import { useState } from 'react';


export default function Contact() {
  const [form, setForm] = useState({ nom: '', email: '', tel: '', sujet: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ nom: '', email: '', tel: '', sujet: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };
// NB: Le mot de passe d'application Gmail doit être stocké dans un fichier .env.local (ex: GMAIL_APP_PASSWORD=xxxx) et JAMAIS en dur dans le code.

  return (
    <>
      {/* HEADER */}
      <header className="flex items-center justify-between px-6 py-2 bg-white shadow-md sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <img src="/logo-ed2s.png" alt="Logo ED2S" width={150} height={150} />
        </div>
        <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <span className="font-extrabold text-2xl md:text-3xl text-gray-800 font-sans tracking-tight bg-gradient-to-r from-orange-300 via-orange-450 to-orange-500 bg-clip-text text-transparent px-4 rounded">Étanchéité des 2 Savoie</span>
        </div>
        <nav className="hidden md:flex gap-8 text-gray font-semibold text-lg">
          <a href="/" className="hover:text-primary transition">Accueil</a>
          <a href="/#services" className="hover:text-primary transition">Services</a>
          <a href="/#about" className="hover:text-primary transition">À propos</a>
          <a href="/#gallery" className="hover:text-primary transition">Réalisations</a>
          <a href="/contact" className="hover:text-primary transition">Contact</a>
        </nav>
      </header>
      <Head>
        <title>Contact - ED2S</title>
      </Head>
      <main className="relative min-h-screen flex flex-col items-center justify-center py-12 px-2 overflow-hidden">
        {/* Background image + overlay */}
        <div className="absolute inset-0 -z-10">
          <img src="/locaux/IMG_20201120_155629.jpg" alt="Locaux ED2S" className="w-full h-full object-cover opacity-40" style={{filter:'blur(2px)'}} />
          <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-orange-50/70 to-white/90" />
        </div>
        <div className="w-full max-w-5xl bg-white rounded-2xl shadow-lg p-0 md:p-8 flex flex-col md:flex-row gap-8 animate-none">
          {/* Colonne infos */}
          <div className="flex-1 flex flex-col gap-6 justify-center items-center md:items-start bg-gradient-to-br from-orange-50 via-white to-white rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none p-6 md:p-8 border-b md:border-b-0 md:border-r border-orange-100">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl text-primary">📞</span>
              <h2 className="text-xl font-bold text-gray-900 font-sans">Nos coordonnées</h2>
            </div>
            <ul className="text-gray-700 text-base mb-2 space-y-1">
              <li><b>Adresse :</b> Rue de Longifan, 38530 Chapareillan, France</li>
              <li><b>Téléphone :</b> <a href="tel:0479726795" className="text-primary underline">04 79 72 67 95</a></li>
              <li><b>Email :</b> <a href="mailto:contact@etancheite2savoie.com" className="text-primary underline">contact@etancheite2savoie.com</a></li>
              <li><b>Horaires :</b> Lun–Ven 8h–18h</li>
            </ul>
            <div className="flex items-center gap-3 mt-4 mb-2">
              <span className="text-3xl text-primary">📍</span>
              <h2 className="text-xl font-bold text-gray-900 font-sans">Accès</h2>
            </div>
            <div className="w-full rounded-lg overflow-hidden border border-orange-100 shadow">
              <iframe
                title="Plan ED2S"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2785.9285240732626!2d5.9815!3d45.4298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478b8a4e9d8e3f2f%3A0x4e4c3b0e6b3f1c2!2sRue%20de%20Longifan%2C%2038530%20Chapareillan%2C%20France!5e0!3m2!1sfr!2sfr!4v1714910000000!5m2!1sfr!2sfr"
                width="100%"
                height="180"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          {/* Colonne formulaire */}
          <div className="flex-1 flex flex-col justify-center items-center p-6 md:p-0">
            <h1 className="text-3xl font-bold text-gray-900 mb-2 text-center font-sans">Contactez-nous</h1>
            <p className="text-gray-700 mb-6 text-center max-w-md">Nous sommes à votre écoute pour toute demande de devis, d’intervention ou de renseignement. Réponse rapide garantie.</p>
            <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>

            <input
              type="text"
              name="nom"
              placeholder="Votre nom"
              required
              className="px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary outline-none font-sans"
              value={form.nom}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Votre email"
              required
              className="px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary outline-none font-sans"
              value={form.email}
              onChange={handleChange}
            />
            <input
              type="tel"
              name="tel"
              placeholder="Votre téléphone (optionnel)"
              className="px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary outline-none font-sans"
              value={form.tel}
              onChange={handleChange}
            />
            <select
              name="sujet"
              required
              className="px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary outline-none font-sans"
              value={form.sujet}
              onChange={handleChange}
            >
              <option value="">Type de besoin</option>
              <option value="devis">Demande de devis</option>
              <option value="urgence">Urgence / Réparation</option>
              <option value="diagnostic">Diagnostic / Entretien</option>
              <option value="autre">Autre</option>
            </select>
            <textarea
              name="message"
              placeholder="Votre message"
              required
              rows={5}
              className="px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary outline-none font-sans resize-none"
              value={form.message}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="mt-2 px-8 py-3 rounded-full bg-primary text-white font-bold text-lg shadow-lg hover:bg-orange-600 transition duration-200"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Envoi en cours...' : 'Envoyer'}
            </button>
            {status === 'success' && <div className="text-green-600 font-semibold text-center mt-2">Votre message a bien été envoyé !</div>}
            {status === 'error' && <div className="text-red-600 font-semibold text-center mt-2">Une erreur est survenue. Veuillez réessayer.</div>}
          </form>
        </div>
      </div>
    </main>
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
