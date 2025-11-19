import { motion } from 'framer-motion';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { TrendingUp, Users2, Lightbulb, Award, Heart, Globe2 } from 'lucide-react';

export function AboutPage() {
  const values = [
    { letter: 'I', word: 'Intégrité', description: 'Faire ce qui est juste, même lorsque c’est difficile' },
    { letter: 'N', word: 'Nerf', description: 'Avoir le courage d’agir là où d’autres hésitent' },
    { letter: 'S', word: 'Service', description: 'Se mettre au service de causes plus grandes que soi' },
    { letter: 'I', word: 'Intelligence', description: 'Penser de manière critique, stratégique et lucide' },
    { letter: 'G', word: 'Gratitude', description: 'Honorer chaque opportunité avec respect et reconnaissance' },
    { letter: 'H', word: 'Humilité', description: 'Écouter plus qu’on ne parle, et continuer à apprendre' },
    { letter: 'T', word: 'Travail en équipe', description: 'Gagner ensemble, ou ne pas gagner du tout' },
  ];

  const team = [
    {
      name: 'Mykem Bello',
      role: 'Directrice Gérérale',
      image: 'https://images.unsplash.com/photo-1543132220-7bc04a0e790a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGV4ZWN1dGl2ZSUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzQ0NTUwOHww&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Experte en stratégie d\'entreprise avec plus de 15 ans d\'expérience en conseil et leadership international.',
    },
    {
      name: 'Prénom Nom',
      role: 'Occupation',
      image: 'https://images.unsplash.com/photo-1621959614020-e12047c380ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYnVzaW5lc3MlMjBwcm9mZXNzaW9uYWxzfGVufDF8fHx8MTc2MzQ2ODkwMHww&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Spécialiste de l\'expansion internationale et de la gouvernance d\'entreprise en Afrique.',
    },
    {
      name: 'Prénom Nom',
      role: 'Occupation',
      image: 'https://images.unsplash.com/photo-1551836022-4c4c79ecde51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBjb2FjaGluZ3xlbnwxfHx8fDE3NjM0MzYwODB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Coach certifié ICF avec une expertise en développement du leadership et transformation organisationnelle.',
    },
  ];

  const stats = [
    { number: '15+', label: 'Années d\'expertise' },
    { number: '200+', label: 'Clients accompagnés' },
    { number: '30+', label: 'Pays' },
    { number: '95%', label: 'Taux de satisfaction' },
  ];

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
              À propos de TPG
            </h1>
            <p className="font-sans text-xl text-blanc-pur/80 max-w-3xl mx-auto">
              Un cabinet né de la conviction que la pertinence stratégique est le catalyseur de
              toute transformation réussie
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-blanc-pur p-10 rounded-lg shadow-lg"
            >
              <div className="w-16 h-16 bg-or-doux rounded-full flex items-center justify-center mb-6">
                <Lightbulb className="text-noir-profond" size={32} />
              </div>
              <h2 className="font-sans font-semibold text-3xl text-noir-profond mb-4">
                Notre Vision
              </h2>
              <p className="text-gris-anthracite/80 leading-relaxed">
                Être un cabinet de référence
                reconnu pour l’excellence de ses
                solutions et l’intégrité de ses
                équipes.
                Une signature mondiale de la
                stratégie pertinente et de
                l’exécution éclairée
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-noir-profond p-10 rounded-lg shadow-lg text-blanc-pur"
            >              <div className="w-16 h-16 bg-or-doux rounded-full flex items-center justify-center mb-6">
                <Target className="text-noir-profond" size={32} />
              </div>
              <h2 className="font-sans font-semibold text-3xl mb-4">Notre Mission</h2>
              <p className="text-blanc-pur/80 leading-relaxed">
                Accompagner les
                décideurs, investisseurs et
                institutions dans la
                concrétisation de projets
                stratégiques à forte valeur
                ajoutée, en leur apportant
                des solutions sur mesure,
                conçues pour durer
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values INSIGHT */}
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
              Nos Valeurs INSIGHT
            </h2>
            <p className="text-gris-anthracite/70 text-lg max-w-2xl mx-auto">
              Chez THE PERTINENT GROUP, INSIGHT n’est pas qu’un mot : c’est notre socle
            </p>
          </motion.div>

          <div className="space-y-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#F5F5F5] p-6 rounded-lg flex items-center gap-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-noir-profond rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-sans font-semibold text-3xl text-or-doux">
                    {value.letter}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="font-sans font-semibold text-2xl text-noir-profond mb-2">
                    {value.word}
                  </h3>
                  <p className="text-gris-anthracite/70">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Notre Équipe Dirigeante
            </h2>
            <p className="text-gris-anthracite/70 text-lg max-w-2xl mx-auto">
              Des experts passionnés au service de votre réussite
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-blanc-pur rounded-lg overflow-hidden shadow-lg group"
              >
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-noir-profond/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-6">
                  <h3 className="font-sans font-semibold text-center text-2xl text-noir-profond mb-2">
                    {member.name}
                  </h3>
                  <p className="text-or-doux mb-4 text-center">{member.role}</p>
                  <p className="text-gris-anthracite/70 text-center text-sm leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-20 bg-[#0A2342]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-sans font-semibold text-4xl md:text-5xl text-blanc-pur mb-4">
              Nos Chiffres Clés
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="font-sans font-semibold text-5xl md:text-6xl text-or-doux mb-2">
                  {stat.number}
                </div>
                <p className="text-[#F7EDE2]/80">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Timeline Section */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-sans font-semibold text-4xl md:text-5xl text-noir-profond mb-4">
              Notre Histoire
            </h2>
          </motion.div>

          <div className="space-y-12">
            {[
              {
                year: '2010',
                title: 'La Genèse',
                description:
                  'Création de TPG avec la vision de révolutionner le conseil stratégique en Afrique.',
              },
              {
                year: '2015',
                title: 'Expansion Internationale',
                description:
                  'Ouverture de bureaux dans 5 pays africains et développement de partenariats globaux.',
              },
              {
                year: '2018',
                title: 'Lancement IDEA®',
                description:
                  'Introduction de notre méthode propriétaire IDEA® qui devient notre signature distinctive.',
              },
              {
                year: '2023',
                title: 'Leadership Africain',
                description:
                  'Reconnaissance comme l\'un des cabinets de conseil stratégique les plus influents en Afrique.',
              },
            ].map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-[#D4AF37] rounded-full flex items-center justify-center">
                    <span className="font-sans font-semibold text-noir-profond">
                      {milestone.year}
                    </span>
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="font-sans font-semibold text-2xl text-noir-profond mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-[#111111]/70 leading-relaxed">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
}

function Target(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}
