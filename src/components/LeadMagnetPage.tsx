import { motion } from 'framer-motion';
import { Download, CheckCircle, BookOpen, XCircle } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';
import { Link } from 'react-router-dom';



export function LeadMagnetPage() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setIsSubmitted(true);
  };

  const benefits = [
    'Comprendre les 4 leviers essentiels de la stratégie pertinente',
    'Découvrir des outils pratiques pour aligner votre organisation',
    'Apprendre à transformer vos ambitions en plans d\'action concrets',
    'Accéder à des études de cas inspirantes',
    'Bénéficier d\'un framework éprouvé par plus de 200 organisations',
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-noir-profond via-noir-profond to-gris-anthracite">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-block bg-or-doux text-noir-profond px-6 py-2 rounded-full mb-6">
              <span className="uppercase tracking-wide">Ressource Gratuite</span>
            </div>
            <h1 className="font-sans font-semibold text-5xl md:text-6xl text-blanc-pur mb-6">
              Les 4 leviers de la stratégie pertinente
            </h1>
            <p className="font-sans text-xl text-blanc-pur/80 max-w-3xl mx-auto">
              Téléchargez notre guide gratuit et découvrez comment transformer vos ambitions en
              résultats concrets
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-blanc-pur">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Book Mockup */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative">
                {/* Book Mockup */}
                <div className="relative mx-auto max-w-md">
                  <div
                    className="aspect-[3/4] bg-gradient-to-br from-noir-profond to-gris-anthracite rounded-lg shadow-2xl p-8 flex flex-col justify-between"
                    style={{
                      transform: 'perspective(1000px) rotateY(-15deg)',
                    }}
                  >
                    <div>
                      <div className="w-16 h-16 bg-or-doux rounded-full flex items-center justify-center mb-6">
                        <BookOpen className="text-noir-profond" size={32} />
                      </div>
                      <h3 className="font-sans font-semibold text-3xl text-blanc-pur mb-4">
                        Les 4 leviers de la stratégie pertinente
                      </h3>
                      <p className="text-blanc-pur/80 mb-6">
                        Un guide pratique par The Pertinent Group
                      </p>
                    </div>
                    <div className="space-y-2 text-blanc-pur/60 text-sm">
                      <p>✓ 45 pages d'expertise</p>
                      <p>✓ Outils pratiques inclus</p>
                      <p>✓ Études de cas réels</p>
                    </div>
                  </div>
                  {/* Shadow effect */}
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-noir-profond/20 blur-xl rounded-full"></div>
                </div>

                {/* Floating elements */}
                <motion.div
                  className="absolute -top-8 -right-8 w-24 h-24 bg-or-doux/20 rounded-full blur-2xl"
                  animate={{ y: [0, 20, 0] }}
                  transition={{ repeat: Infinity, duration: 4 }}
                />
                <motion.div
                  className="absolute -bottom-8 -left-8 w-32 h-32 bg-noir-profond/10 rounded-full blur-2xl"
                  animate={{ y: [0, -20, 0] }}
                  transition={{ repeat: Infinity, duration: 5 }}
                />
              </div>
            </motion.div>

            {/* Right Column - Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {!isSubmitted ? (
                <div>
                  <h2 className="font-sans font-semibold text-4xl text-noir-profond mb-6">
                    Découvrez comment transformer vos ambitions en résultats concrets
                  </h2>

                  <div className="mb-8">
                    <h3 className="text-xl text-noir-profond mb-4">Ce que vous allez apprendre :</h3>
                    <ul className="space-y-3">
                      {benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="text-or-doux flex-shrink-0 mt-1" size={20} />
                          <span className="text-gris-anthracite/80">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-blanc-pur p-8 rounded-lg">
                    <h3 className="font-sans font-semibold text-2xl text-noir-profond mb-6">
                      Téléchargez maintenant
                    </h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="email" className="block text-noir-profond mb-2">
                          Entrez votre email
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-blanc-pur border border-noir-profond/20 focus:outline-none focus:ring-2 focus:ring-or-doux text-noir-profond"
                          placeholder="votre@email.com"
                        />
                      </div>
                                              <Button
                                                type="submit"
                                                className="w-full bg-noir-profond text-blanc-pur hover:bg-noir-profond/90 py-4 flex items-center justify-center gap-2"
                                              >
                                                <Download size={20} />
                                                Télécharger le guide gratuitement
                                              </Button>                      <p className="text-sm text-gris-anthracite/60 text-center">
                        En téléchargeant, vous acceptez de recevoir nos insights mensuels. Vous
                        pouvez vous désabonner à tout moment.
                      </p>
                    </form>
                  </div>

                  <div className="mt-6 text-center">
                    <Link
                      to="/"
                      className="text-gris-anthracite/60 hover:text-or-doux transition-colors inline-flex items-center gap-2"
                    >
                      <XCircle size={16} />
                      Non merci, je préfère rêver sans plan 😉
                    </Link>
                  </div>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="bg-blanc-pur p-12 rounded-lg text-center"
                >
                  <div className="w-20 h-20 bg-or-doux rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="text-noir-profond" size={40} />
                  </div>
                  <h3 className="font-sans font-semibold text-3xl text-noir-profond mb-4">
                    Merci !
                  </h3>
                  <p className="text-gris-anthracite/80 mb-8">
                    Votre guide a été envoyé à <span className="font-medium">{email}</span>.
                    Vérifiez votre boîte de réception (et vos spams, au cas où).
                  </p>
                  <div className="space-y-4">
                    <Button asChild>
                      <Link to="/services" className="w-full bg-noir-profond text-blanc-pur hover:bg-noir-profond/90">
                        Découvrir nos services
                      </Link>
                    </Button>
                    <Button asChild>
                      <Link to="/contact" variant="outline" className="w-full border-noir-profond text-noir-profond hover:bg-noir-profond hover:text-blanc-pur">
                        Planifier un échange
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-noir-profond">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h3 className="font-sans font-semibold text-3xl text-blanc-pur mb-12">
              Déjà téléchargé par plus de 5 000 professionnels
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  quote:
                    "Ce guide m'a permis de clarifier ma stratégie en quelques heures. Indispensable !",
                  author: 'Claire Martin',
                  role: 'CEO, TechStart',
                },
                {
                  quote:
                    "Des outils pratiques et immédiatement applicables. Exactement ce dont j'avais besoin.",
                  author: 'Ahmed Diallo',
                  role: 'Directeur Stratégie',
                },
                {
                  quote:
                    "Une ressource précieuse qui devrait être entre les mains de tous les dirigeants.",
                  author: 'Sophie Leclerc',
                  role: 'Consultante indépendante',
                },
              ].map((testimonial, index) => (
                <div key={index} className="bg-blanc-pur p-6 rounded-lg">
                  <p className="text-gris-anthracite/80 italic mb-4">"{testimonial.quote}"</p>
                  <div className="border-t border-noir-profond/10 pt-4">
                    <p className="text-noir-profond">{testimonial.author}</p>
                    <p className="text-gris-anthracite/60 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      {!isSubmitted && (
        <section className="py-20 bg-or-doux">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="font-sans font-semibold text-4xl text-noir-profond mb-4">
                Prêt à passer à l'action ?
              </h3>
              <p className="text-noir-profond/80 text-lg mb-8">
                Ne laissez pas vos ambitions rester de simples rêves. Téléchargez le guide
                maintenant.
              </p>
              <Button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="bg-noir-profond text-blanc-pur hover:bg-noir-profond/90 px-8 py-6 text-lg"
              >
                Télécharger le guide
              </Button>
            </motion.div>
          </div>
        </section>
      )}
    </div>
  );
}
