import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Méthode non autorisée' });
  }

  const { nom, email, tel, sujet, message } = req.body;
  if (!nom || !email || !sujet || !message) {
    return res.status(400).json({ message: 'Champs manquants' });
  }

  // Configure le transporteur SMTP Gmail
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'lorisducroux@gmail.com',
      pass: process.env.GMAIL_APP_PASSWORD, // Stocke le mot de passe d'application dans un .env.local !
    },
  });

  try {
    await transporter.sendMail({
      from: `ED2S Contact <lorisducroux@gmail.com>`,
      to: 'lorisducroux@gmail.com',
      subject: `Contact ED2S - ${sujet}`,
      replyTo: email,
      text: `Nom: ${nom}\nEmail: ${email}\nTéléphone: ${tel}\nSujet: ${sujet}\nMessage:\n${message}`,
      html: `<p><b>Nom:</b> ${nom}</p><p><b>Email:</b> ${email}</p><p><b>Téléphone:</b> ${tel}</p><p><b>Sujet:</b> ${sujet}</p><p><b>Message:</b><br/>${message.replace(/\n/g, '<br/>')}</p>`
    });
    return res.status(200).json({ message: 'Message envoyé' });
  } catch (error) {
    return res.status(500).json({ message: "Erreur lors de l'envoi", error });
  }
}
