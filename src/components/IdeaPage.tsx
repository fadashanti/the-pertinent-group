import { motion } from 'framer-motion';
import { Search, Palette, Zap, Anchor } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';



export function IdeaPage() {
  const phases = [
    {
      icon: Search,
      title: 'Identification',
      keyword: 'Clarté',
      description: 'Diagnostic précis de vos enjeux et opportunités',
      details: [
        'Analyse approfondie de votre situation actuelle',
        'Identification des points de blocage et opportunités',
        'Cartographie des parties prenantes',
        'Définition d\'objectifs clairs et mesurables',
      ],
      color: '#D4AF37',
      number: '01',
    },
    {
      icon: Palette,
      title: 'Design',
      keyword: 'Créativité',
      description: 'Élaboration de stratégies innovantes et sur mesure',
      details: [
        'Co-création de solutions adaptées à votre contexte',
        'Exploration de scénarios multiples',
        'Design de la feuille de route stratégique',
        'Validation avec les parties prenantes clés',
      ],
      color: '#0A2342',
      number: '02',
    },
    {
      icon: Zap,
      title: 'Exécution',
      keyword: 'Précision',
      description: 'Mise en œuvre rigoureuse et accompagnement terrain',
      details: [
        'Déploiement structuré des initiatives',
        'Accompagnement opérationnel de vos équipes',
        'Suivi des indicateurs de performance',
        'Ajustements agiles selon les résultats',
      ],
      color: '#D4AF37',
      number: '03',
    },
    {
      icon: Anchor,
      title: 'Ancrage',
      keyword: 'Durabilité',
      description: 'Pérennisation des résultats et autonomisation',
      details: [
        'Transfert de compétences aux équipes internes',
        'Mise en place de mécanismes de suivi',
        'Documentation des meilleures pratiques',
        'Accompagnement à l\'autonomie complète',
      ],
      color: '#0A2342',
      number: '04',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-noir-profond to-gris-anthracite relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0Q0QzY4QSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-sans font-semibold text-5xl md:text-6xl text-blanc-pur mb-6">
              La Méthode IDEA®
            </h1>
            <p className="font-sans text-xl text-blanc-pur/80 max-w-3xl mx-auto mb-8">
              Notre approche propriétaire en 4 étapes pour transformer vos ambitions en résultats
              concrets et durables
            </p>
            <div className="flex items-center justify-center gap-4 text-or-doux">
              <span className="font-sans font-semibold text-3xl">I</span>
              <span className="text-blanc-pur/40">+</span>
              <span className="font-sans font-semibold text-3xl">D</span>
              <span className="text-blanc-pur/40">+</span>
              <span className="font-sans font-semibold text-3xl">E</span>
              <span className="text-blanc-pur/40">+</span>
              <span className="font-sans font-semibold text-3xl">A</span>
              <span className="text-blanc-pur/40">=</span>
              <span className="font-sans font-semibold text-3xl text-blanc-pur">Impact</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-sans font-semibold text-4xl text-noir-profond mb-6">
              Une méthodologie éprouvée
            </h2>
            <p className="text-gris-anthracite/80 text-lg leading-relaxed mb-6">
              La méthode IDEA® est le fruit de plus de 15 ans d'expérience en conseil stratégique.
              Elle combine rigueur analytique, créativité stratégique et excellence opérationnelle
              pour garantir des transformations réussies et durables.
            </p>
            <p className="text-gris-anthracite/80 text-lg leading-relaxed">
              Chaque phase s'appuie sur des outils éprouvés, une approche collaborative et un
              engagement profond envers vos résultats.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Interactive Phases Section */}
      <section className="py-20 bg-blanc-pur">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-24">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="relative">
                    <div
                      className="absolute -top-6 -left-6 text-9xl opacity-10 font-sans font-semibold"
                      style={{ color: phase.color === '#D4AF37' ? '#D4C68A' : '#000000' }}
                    >
                      {phase.number}
                    </div>
                    <div className="relative z-10">
                      <div
                        className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
                        style={{ backgroundColor: phase.color === '#D4AF37' ? '#D4C68A' : '#000000' }}
                      >
                        <phase.icon
                          className={phase.color === '#D4AF37' ? 'text-noir-profond' : 'text-or-doux'}
                          size={36}
                        />
                      </div>
                      <h3 className="font-sans font-semibold text-4xl text-noir-profond mb-3">
                        {phase.title}
                      </h3>
                      <p className="font-sans text-2xl italic text-or-doux mb-6">{phase.keyword}</p>
                      <p className="text-gris-anthracite/80 text-lg mb-8 leading-relaxed">
                        {phase.description}
                      </p>
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <div
                    className="p-8 rounded-lg"
                    style={{
                      backgroundColor: phase.color === '#D4AF37' ? '#D4C68A' : '#000000',
                    }}
                  >
                    <h4
                      className="font-sans font-semibold text-2xl mb-6"
                      style={{ color: phase.color === '#D4AF37' ? '#000000' : '#FFFFFF' }}
                    >
                      Points clés
                    </h4>
                    <ul className="space-y-4">
                      {phase.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                                                      <div
                                                        className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                                                        style={{
                                                          backgroundColor: phase.color === '#D4AF37' ? '#000000' : '#D4C68A',
                                                        }}
                                                      >                            <span
                              className="text-xs"
                              style={{ color: phase.color === '#D4AF37' ? '#D4C68A' : '#000000' }}
                            >
                              ✓
                            </span>
                          </div>
                          <span
                            style={{ color: phase.color === '#D4AF37' ? '#000000' : '#FFFFFF' }}
                          >
                            {detail}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Circular Infographic */}
      <section className="py-20 bg-noir-profond relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0Q0QzY4QSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L2Noc2I+')] opacity-20"></div>
        </div>

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-sans font-semibold text-4xl md:text-5xl text-blanc-pur mb-6">
              Un cycle vertueux
            </h2>
            <p className="text-blanc-pur/80 text-lg max-w-2xl mx-auto">
              IDEA® n'est pas linéaire, c'est un cycle d'amélioration continue qui s'adapte à
              l'évolution de vos besoins
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full max-w-2xl mx-auto aspect-square"
          >
            {/* Central Circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-or-doux rounded-full flex items-center justify-center">
              <div className="text-center">
                <p className="font-sans font-semibold text-4xl text-noir-profond mb-2">IDEA®</p>
                <p className="text-sm text-noir-profond">Impact Durable</p>
              </div>
            </div>

            {/* Outer Circles */}
            {[
              { title: 'I', top: '0%', left: '50%', transform: '-translate-x-1/2' },
              { title: 'D', top: '50%', left: '100%', transform: '-translate-x-1/2 -translate-y-1/2' },
              { title: 'E', top: '100%', left: '50%', transform: '-translate-x-1/2 -translate-y-full' },
              { title: 'A', top: '50%', left: '0%', transform: '-translate-y-1/2' },
            ].map((pos, idx) => (
              <div
                key={idx}
                className="absolute w-32 h-32 bg-blanc-pur rounded-full flex items-center justify-center"
                style={{
                  top: pos.top,
                  left: pos.left,
                  transform: pos.transform,
                }}
              >
                <span className="font-sans font-semibold text-5xl text-noir-profond">
                  {pos.title}
                </span>
              </div>
            ))}

            {/* Connecting Lines */}
            <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
              <circle
                cx="50%"
                cy="50%"
                r="35%"
                fill="none"
                stroke="or-doux"
                strokeWidth="2"
                strokeDasharray="5,5"
                opacity="0.3"
              />
            </svg>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blanc-pur">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-sans font-semibold text-4xl md:text-5xl text-noir-profond mb-6">
              Découvrez comment IDEA® s'applique à votre projet
            </h2>
            <p className="text-gris-anthracite/70 text-lg mb-8">
              Chaque organisation est unique. Planifions un échange pour explorer comment notre
              méthode peut catalyser votre transformation.
            </p>
                          <Button asChild>
                            <Link to="/contact" className="bg-noir-profond text-blanc-pur hover:bg-noir-profond/90 px-8 py-6 text-lg">
                              Planifier un échange stratégique
                            </Link>
                          </Button>          </motion.div>
        </div>
      </section>
    </div>
  );
}
