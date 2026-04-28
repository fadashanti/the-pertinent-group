import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Send } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubjectChange = (value: string) => {
    setFormData({
      ...formData,
      subject: value,
    });
  };

  return (
    <div className="min-h-screen pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-noir-profond to-gris-anthracite">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-sans font-semibold text-3xl md:text-5xl lg:text-6xl text-blanc-pur mb-4 md:mb-6 leading-tight">
              Chaque partenariat commence par une conversation
            </h1>
            <p className="font-sans text-lg md:text-xl text-blanc-pur/80 max-w-3xl mx-auto px-2">
              Parlons de vos ambitions et découvrons ensemble comment transformer vos défis en
              opportunités
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-blanc-pur">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <h2 className="font-sans font-semibold text-3xl md:text-4xl text-noir-profond mb-6 md:mb-8">
                Envoyez-nous un message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-noir-profond mb-1.5 md:mb-2 text-sm md:text-base font-medium">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 md:py-3 rounded-lg bg-white border border-noir-profond/20 focus:outline-none focus:ring-2 focus:ring-or-doux text-noir-profond transition-all"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-noir-profond mb-1.5 md:mb-2 text-sm md:text-base font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 md:py-3 rounded-lg bg-white border border-noir-profond/20 focus:outline-none focus:ring-2 focus:ring-or-doux text-noir-profond transition-all"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-noir-profond mb-1.5 md:mb-2 text-sm md:text-base font-medium">
                    Sujet
                  </label>
                  <Select
                    value={formData.subject}
                    onValueChange={handleSubjectChange}
                  >
                    <SelectTrigger className="w-full px-4 py-5 md:py-6 rounded-lg bg-white border border-noir-profond/20 focus:outline-none focus:ring-2 focus:ring-or-doux text-noir-profond transition-all">
                      <SelectValue placeholder="Sélectionnez un sujet" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border-noir-profond/20 z-50">
                      <SelectItem value="Gouvernance Stratégique" className="focus:bg-or-doux focus:text-noir-profond text-noir-profond cursor-pointer">Gouvernance Stratégique</SelectItem>
                      <SelectItem value="Expansion Internationale" className="focus:bg-or-doux focus:text-noir-profond text-noir-profond cursor-pointer">Expansion Internationale</SelectItem>
                      <SelectItem value="Leadership & Formations" className="focus:bg-or-doux focus:text-noir-profond text-noir-profond cursor-pointer">Leadership & Formations</SelectItem>
                      <SelectItem value="Coaching Exécutif" className="focus:bg-or-doux focus:text-noir-profond text-noir-profond cursor-pointer">Coaching Exécutif</SelectItem>
                      <SelectItem value="Autre" className="focus:bg-or-doux focus:text-noir-profond text-noir-profond cursor-pointer">Autre</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-noir-profond mb-1.5 md:mb-2 text-sm md:text-base font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2.5 md:py-3 rounded-lg bg-white border border-noir-profond/20 focus:outline-none focus:ring-2 focus:ring-or-doux text-noir-profond resize-none transition-all"
                    placeholder="Parlez-nous de votre projet..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-noir-profond text-blanc-pur hover:bg-noir-profond/90 py-5 md:py-6 flex items-center justify-center gap-2 text-base md:text-lg font-semibold"
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
              className="space-y-6 md:space-y-8 order-1 lg:order-2"
            >
              <div className="bg-[#F5F5F5] p-6 md:p-8 rounded-lg shadow-sm">
                <h3 className="font-sans font-semibold text-2xl md:text-3xl text-noir-profond mb-6">
                  Informations de contact
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-or-doux rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="text-noir-profond w-4 h-4 md:w-5 md:h-5" />
                    </div>
                    <div>
                      <p className="text-noir-profond font-semibold mb-0.5 text-sm md:text-base">Email</p>
                      <a
                        href="mailto:solutions@thepertinentgroup.com"
                        className="text-gris-anthracite/70 hover:text-or-doux transition-colors break-all text-sm md:text-base"
                      >
                        solutions@thepertinentgroup.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-or-doux rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="text-noir-profond w-4 h-4 md:w-5 md:h-5" />
                    </div>
                    <div>
                      <p className="text-noir-profond font-semibold mb-0.5 text-sm md:text-base">Téléphone</p>
                      <div className="flex flex-col gap-1">
                        <a
                          href="tel:+2290197298070"
                          className="text-gris-anthracite/70 hover:text-or-doux transition-colors text-sm md:text-base"
                        >
                          +229 01 97 29 80 70
                        </a>
                        <a
                          href="tel:+2250759350860"
                          className="text-gris-anthracite/70 hover:text-or-doux transition-colors text-sm md:text-base"
                        >
                          +225 07 59 35 08 60
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-or-doux rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-noir-profond w-4 h-4 md:w-5 md:h-5" />
                    </div>
                    <div>
                      <p className="text-noir-profond font-semibold mb-0.5 text-sm md:text-base">Adresse</p>
                      <p className="text-gris-anthracite/70 text-sm md:text-base">
                        Basés en Afrique, connectés au monde
                        <br />
                        Cotonou, Bénin
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-noir-profond/10">
                  <p className="text-noir-profond font-semibold mb-4 text-sm md:text-base">Suivez-nous</p>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="w-10 h-10 bg-noir-profond rounded-full flex items-center justify-center text-or-doux hover:bg-or-doux hover:text-noir-profond transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-noir-profond rounded-full flex items-center justify-center text-or-doux hover:bg-or-doux hover:text-noir-profond transition-colors"
                      aria-label="Twitter"
                    >
                      <Twitter size={20} />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-noir-profond rounded-full flex items-center justify-center text-or-doux hover:bg-or-doux hover:text-noir-profond transition-colors"
                      aria-label="Facebook"
                    >
                      <Facebook size={20} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-[#F5F5F5] p-6 rounded-lg shadow-sm"
              >
                <h4 className="font-sans font-semibold text-xl text-noir-profond mb-4">
                  Horaires d'ouverture
                </h4>
                <div className="space-y-2 text-gris-anthracite/70 text-sm md:text-base">
                  <div className="flex justify-between">
                    <span>Lundi - Vendredi</span>
                    <span className="font-medium">9h00 - 18h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Samedi</span>
                    <span className="font-medium">Sur rendez-vous</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Dimanche</span>
                    <span className="font-medium">Fermé</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] md:h-[500px] bg-noir-profond relative overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126906.91890161494!2d2.3364245781250004!3d6.376885400000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10235509749f7e7f%3A0x67399f6498a4d46!2sCotonou%2C%20Benin!5e0!3m2!1sen!2s!4v1711032000000!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="TPG Cotonou Office Location"
          className="absolute inset-0 w-full h-full"
        ></iframe>
        {/* Overlays for depth without blurring/filtering the map content */}
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_60px_rgba(0,0,0,0.1)]"></div>
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-blanc-pur to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-blanc-pur to-transparent pointer-events-none"></div>
      </section>
    </div>
  );
}
