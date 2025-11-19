import { motion } from 'framer-motion';
import { Building2, Globe, Users, Target } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Link } from 'react-router-dom';

export function HomePage() {
  const domains = [
    {
      icon: Building2,
      title: 'Gouvernance',
      description: 'Alignement stratégique et performance organisationnelle',
    },
    {
      icon: Globe,
      title: 'Expansion',
      description: 'Accompagnement Afrique & international',
    },
    {
      icon: Users,
      title: 'Leadership',
      description: 'Programmes de formation sur mesure',
    },
    {
      icon: Target,
      title: 'Coaching',
      description: 'Accompagnement individuel & collectif',
    },
  ];

  const testimonials = [
    {
      quote: "TPG a transformé notre approche stratégique. Leur méthode IDEA® nous a permis d'atteindre nos objectifs avec clarté et précision.",
      author: 'Marie Kouadio',
      role: 'CEO, InnovateTech',
    },
    {
      quote: "Un accompagnement exceptionnel qui a catalysé notre expansion internationale. Une expertise rare et précieuse.",
      author: 'Jean-Marc Dubois',
      role: 'Directeur Général, GlobalCorp',
    },
  ];

  const partners = ['ACME', 'TechCorp', 'GlobalSolutions', 'InnovateNow', 'FutureGroup'];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-noir-profond via-noir-profond to-gris-anthracite overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0Q0QUYzNyIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h1
              className="font-sans font-semibold text-5xl md:text-7xl text-blanc-pur mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Quand la perspicacité alimente l'influence
            </motion.h1>
            <motion.p
              className="font-sans text-xl md:text-2xl text-blanc-pur/80 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Transformez vos ambitions en résultats concrets avec une approche stratégique
              pertinente et éprouvée
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Button asChild>
                <Link to="/contact" className="bg-or-doux text-noir-profond hover:bg-or-doux/90 px-8 py-6 text-lg">
                  Planifier un échange stratégique
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 border-2 border-or-doux rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-or-doux rounded-full"></div>
          </div>
        </motion.div>
      </section>

      {/* Presentation Section */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-sans font-semibold text-4xl md:text-5xl text-noir-profond mb-6">
                The Pertinent Group (TPG)
              </h2>
              <h4 className="font-sans font-semibold text-xl md:text-xl text-noir-profond mb-6">
                Cabinet-boutique d’intermédiation stratégique
              </h4>
              <p className="text-gris-anthracite/80 leading-relaxed">
                Nous accompagnons investisseurs,
                institutions et dirigeants dans leur
                implantation, leur expansion et la
                création de partenariats à travers
                l’Afrique.
              </p>
              <p className="text-gris-anthracite/80 leading-relaxed">
                Spécialistes de la finance, des
                infrastructures et des PPP, nous
                connectons projets ambitieux et
                réseaux clés, avec une approche sur- mesure, interculturelle et orientée
                impact.
              </p>
              <p className="text-gris-anthracite/80 leading-relaxed">
                Discrets, agiles et connectés, nous
                faisons émerger des opportunités
                concrètes et soutenons ceux qui les
                portent.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758518729685-f88df7890776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwbWVldGluZyUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzYzNDY4OTAwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Équipe TPG en collaboration"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute top-4 right-4 w-24 h-24 bg-or-doux rounded-full flex items-center justify-center">
                  <span className="text-noir-profond font-bold text-2xl">
                    TPG
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Domains Section */}
      <section className="py-20 bg-blanc-pur">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-sans font-semibold text-4xl md:text-5xl text-noir-profond mb-4">
              Nos domaines d'intervention
            </h2>
            <p className="text-gris-anthracite/70 text-lg max-w-2xl mx-auto">
              Une expertise complète pour répondre à tous vos enjeux stratégiques
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {domains.map((domain, index) => (
              <motion.div
                key={domain.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-[#F5F5F5] p-8 rounded-lg text-center cursor-pointer group"
              >
                <div className="w-16 h-16 bg-noir-profond rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-or-doux transition-colors">
                  <domain.icon className="text-blanc-pur group-hover:text-noir-profond" size={28} />
                </div>
                <h3 className="font-sans font-semibold text-xl text-noir-profond mb-3">
                  {domain.title}
                </h3>
                <p className="text-gris-anthracite/70">{domain.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* IDEA Method Section */}
      <section className="py-20 bg-noir-profond relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0Q0QzY4QSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-sans font-semibold text-4xl md:text-5xl text-blanc-pur mb-4">
              La méthode IDEA®
            </h2>
            <p className="text-blanc-pur/80 text-lg max-w-2xl mx-auto">
              Notre approche propriétaire en 4 étapes pour des transformations durables
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Identification',
                keyword: 'Clarté',
                description: 'Diagnostic précis de vos enjeux et opportunités',
                color: '#D4AF37',
              },
              {
                title: 'Design',
                keyword: 'Créativité',
                description: 'Élaboration de stratégies innovantes et sur mesure',
                color: '#F7EDE2',
              },
              {
                title: 'Exécution',
                keyword: 'Précision',
                description: 'Mise en œuvre rigoureuse et accompagnement terrain',
                color: '#D4AF37',
              },
              {
                title: 'Ancrage',
                keyword: 'Durabilité',
                description: 'Pérennisation des résultats et autonomisation',
                color: '#F7EDE2',
              },
            ].map((phase, index) => (
              <motion.div
                key={phase.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div
                  className="p-8 rounded-lg h-full"
                  style={{
                    backgroundColor: phase.color === '#D4AF37' ? '#D4C68A' : '#FFFFFF',
                  }}
                >
                  <div className="text-6xl font-sans mb-4 opacity-20"
                    style={{ color: phase.color === '#D4AF37' ? '#000000' : '#000000' }}
                  >
                    {index + 1}
                  </div>
                  <h3
                    className="font-sans text-2xl mb-2"
                    style={{ color: phase.color === '#D4AF37' ? '#000000' : '#000000' }}
                  >
                    {phase.title}
                  </h3>
                  <p
                    className="italic mb-4"
                    style={{ color: phase.color === '#D4AF37' ? '#000000' : '#000000' }}
                  >
                    {phase.keyword}
                  </p>
                  <p
                    className="text-sm"
                    style={{ color: phase.color === '#D4AF37' ? '#000000' : '#1A1A1A' }}
                  >
                    {phase.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Button asChild>
              <Link to="/idea" className="bg-or-doux text-noir-profond hover:bg-or-doux/90">
                Découvrir la méthode IDEA®
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-sans font-semibold text-4xl md:text-5xl text-noir-profond mb-4">
              Ils nous font confiance
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-blanc-pur p-8 rounded-lg shadow-lg"
              >
                <p className="text-gris-anthracite italic mb-6 text-lg leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-noir-profond/10 pt-4">
                  <p className="text-noir-profond font-medium">{testimonial.author}</p>
                  <p className="text-gris-anthracite/60 text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Partner Logos */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="border-t border-noir-profond/10 pt-12"
          >
            <p className="text-center text-gris-anthracite/60 mb-8">Nos partenaires</p>
            <div className="flex flex-wrap justify-center items-center gap-12">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="text-noir-profond/40 font-sans text-2xl hover:text-or-doux transition-colors cursor-pointer"
                >
                  {partner}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-blanc-pur">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-sans font-semibold text-4xl md:text-5xl text-noir-profond mb-6">
              Et si on parlait de votre projet ?
            </h2>
            <p className="text-gris-anthracite/70 text-lg mb-8">
              Chaque grande transformation commence par une conversation. Planifions la vôtre.
            </p>
            <Button asChild>
              <Link to="/contact" className="bg-noir-profond text-blanc-pur hover:bg-noir-profond/90 px-8 py-6 text-lg">
                Prendre contact
              </Link>
            </Button>          </motion.div>
        </div>
      </section>
    </div>
  );
}
