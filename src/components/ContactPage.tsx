import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Send } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Gouvernance Stratégique',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.');
    setFormData({ name: '', email: '', subject: 'Gouvernance Stratégique', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-noir-profond to-gris-anthracite">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-sans font-semibold text-5xl md:text-6xl text-blanc-pur mb-6">
              Chaque partenariat commence par une conversation
            </h1>
            <p className="font-sans text-xl text-blanc-pur/80 max-w-3xl mx-auto">
              Parlons de vos ambitions et découvrons ensemble comment transformer vos défis en
              opportunités
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-blanc-pur">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-sans font-semibold text-4xl text-noir-profond mb-8">
                Envoyez-nous un message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-noir-profond mb-2">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-blanc-pur border border-noir-profond/20 focus:outline-none focus:ring-2 focus:ring-or-doux text-noir-profond"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-noir-profond mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-blanc-pur border border-noir-profond/20 focus:outline-none focus:ring-2 focus:ring-or-doux text-noir-profond"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-noir-profond mb-2">
                    Sujet
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-blanc-pur border border-noir-profond/20 focus:outline-none focus:ring-2 focus:ring-or-doux text-noir-profond"
                  >
                    <option>Gouvernance Stratégique</option>
                    <option>Expansion Internationale</option>
                    <option>Leadership & Formations</option>
                    <option>Coaching Exécutif</option>
                    <option>Méthode IDEA®</option>
                    <option>Autre</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-noir-profond mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg bg-blanc-pur border border-noir-profond/20 focus:outline-none focus:ring-2 focus:ring-or-doux text-noir-profond resize-none"
                    placeholder="Parlez-nous de votre projet..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-noir-profond text-blanc-pur hover:bg-noir-profond/90 py-6 flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Envoyer le message
                </Button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="bg-[#F5F5F5] p-8 rounded-lg">
                <h3 className="font-sans font-semibold text-3xl text-noir-profond mb-6">
                  Informations de contact
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-or-doux rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="text-noir-profond" size={20} />
                    </div>
                    <div>
                      <p className="text-noir-profond mb-1">Email</p>
                      <a
                        href="mailto:contact@tpg-consulting.com"
                        className="text-gris-anthracite/70 hover:text-or-doux transition-colors"
                      >
                        solutions@thepertinentgroup.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-or-doux rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="text-noir-profond" size={20} />
                    </div>
                    <div>
                      <p className="text-noir-profond mb-1">Téléphone</p>
                      <a
                        href="#"
                        className="text-gris-anthracite/70 hover:text-or-doux transition-colors"
                      >
                        +229 01 97 29 80 70 - +225 07 59 35 08 60
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-or-doux rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-noir-profond" size={20} />
                    </div>
                    <div>
                      <p className="text-noir-profond mb-1">Adresse</p>
                      <p className="text-gris-anthracite/70">
                        Basés en Afrique, connectés au monde
                        <br />
                        Cotonou, Bénin
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-noir-profond/10">
                  <p className="text-noir-profond mb-4">Suivez-nous</p>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="w-10 h-10 bg-noir-profond rounded-full flex items-center justify-center text-or-doux hover:bg-or-doux hover:text-noir-profond transition-colors"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-noir-profond rounded-full flex items-center justify-center text-or-doux hover:bg-or-doux hover:text-noir-profond transition-colors"
                    >
                      <Twitter size={20} />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-noir-profond rounded-full flex items-center justify-center text-or-doux hover:bg-or-doux hover:text-noir-profond transition-colors"
                    >
                      <Facebook size={20} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Mykem Bello Section */}
              {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-[#0A2342] p-8 rounded-lg text-[#F7EDE2]"
              >
                <div className="flex items-center gap-6 mb-6">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1543132220-7bc04a0e790a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGV4ZWN1dGl2ZSUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzQ0NTUwOHww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Mykem Bello"
                    className="w-24 h-24 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-sans font-semibold text-2xl mb-1">Mykem Bello</h4>
                    <p className="text-[#D4AF37]">Fondateur & CEO</p>
                  </div>
                </div>
                <p className="text-[#F7EDE2]/80 italic mb-4">
                  "Je suis convaincu que chaque organisation possède un potentiel inexploré. Notre
                  mission est de le révéler et de le catalyser."
                </p>
                <div className="mt-6">
                  <svg
                    className="opacity-50"
                    width="120"
                    height="40"
                    viewBox="0 0 120 40"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 30 Q 15 20, 25 25 T 45 25 T 65 20 T 85 25 T 110 30"
                      fill="none"
                      stroke="#D4AF37"
                      strokeWidth="2"
                    />
                  </svg>
                  <p className="text-sm text-[#F7EDE2]/60 mt-2">Signature manuscrite</p>
                </div>
              </motion.div> */}

              {/* Office Hours */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-[#F5F5F5] p-6 rounded-lg"
              >
                <h4 className="font-sans font-semibold text-xl text-noir-profond mb-4">
                  Horaires d'ouverture
                </h4>
                <div className="space-y-2 text-gris-anthracite/70">
                  <div className="flex justify-between">
                    <span>Lundi - Vendredi</span>
                    <span>9h00 - 18h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Samedi</span>
                    <span>Sur rendez-vous</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Dimanche</span>
                    <span>Fermé</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="h-96 bg-[#EAEAEA]">
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-center">
            <MapPin className="mx-auto mb-4 text-noir-profond" size={48} />
            <p className="text-gris-anthracite/60">Carte interactive à venir</p>
          </div>
        </div>
      </section>
    </div>
  );
}
