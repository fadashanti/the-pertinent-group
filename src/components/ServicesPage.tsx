import { motion } from 'framer-motion';
import { Building2, Globe, Users, Target, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';
import { Link } from 'react-router-dom';



export function ServicesPage() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services = [
    {
      id: 'governance',
      icon: Building2,
      title: 'Gouvernance Stratégique',
      subtitle: 'Alignement et performance',
      description: 'Transformez votre gouvernance en levier de performance durable',
      longDescription:
        'Nous accompagnons les leaders et les managers à renforcer leur performance et aligner leurs actions avec leur vision.',
      benefits: [
        'Amélioration de l\'expérience client',
        'Alignement stratégique',
        'Soutien à la vente et au marketing des produits/services',
        'Optimisation de l’efficacité opérationnelle',
      ],
      image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJhdGVnaWMlMjBwbGFubmluZ3xlbnwxfHx8fDE3NjM0MzUxNTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      color: '#D4AF37',
    },
    {
      id: 'expansion',
      icon: Globe,
      title: 'Expansion Internationale',
      subtitle: 'Accompagnement Afrique & global',
      description: 'Développez votre présence sur de nouveaux marchés avec confiance',
      longDescription:
        'Nous accompagnons nos clients dans leur implantation et leur développement en Afrique, en mobilisant intelligence interculturelle et réseaux opérationnels.',
      benefits: [
        'Accompagnement stratégique à l’implantation',
        'Représentation commerciale en Afrique de l’Ouest et à l’échelle continentale',
        'Traduction professionnelle & interprétation multilingue',
        'Cartographie des parties prenantes & stratégie de positionnement',
      ],
      image: 'https://images.unsplash.com/photo-1621959614020-e12047c380ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYnVzaW5lc3MlMjBwcm9mZXNzaW9uYWxzfGVufDF8fHx8MTc2MzQ2ODkwMHww&ixlib=rb-4.1.0&q=80&w=1080',
      color: '#0A2342',
    },
    {
      id: 'leadership',
      icon: Users,
      title: 'Leadership & Formations',
      subtitle: 'Programmes sur mesure',
      description: 'Développez le potentiel de vos leaders et de vos équipes',
      longDescription:
        'Selon les besoins identifiés, nous formons vos collaborateurs à relever tous leurs défis avec passion et enthousiasme !\n Que ce soit pour développer des compétences managériales, comportementales ou métiers, nous saurons vous proposer les meilleures formules',
      benefits: [
        'Formations leadership personnalisées',
        'Ateliers de team building stratégique',
        'Programmes de mentorat',
        'Certification en management d\'excellence',
      ],
      image: 'https://images.unsplash.com/photo-1758518729685-f88df7890776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwbWVldGluZyUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzYzNDY4OTAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      color: '#D4AF37',
    },
    {
      id: 'coaching',
      icon: Target,
      title: 'Coaching Exécutif',
      subtitle: 'Individuel & collectif',
      description: 'Révélez le meilleur de vous-même et de vos équipes',
      longDescription:
        ' Dans un TED Talk célèbre, Bill Gates affirmait : « Tout le monde a besoin d’un coach. ». De l’athlète au dirigeant, tous les ultra-performants ont un coach. \n Alors si vous êtes prêt à dépasser vos limites actuelles, nos coachs chevronnés seront heureux de vous accompagner vers la réussite que vous définissez vous-même',
      benefits: [
        'Stratégie de carrière',
        'Communication et Leadership',
        'Coaching de vie et état d\'esprit',
        'Coaching spirituel et foi',
      ],
      image: 'https://images.unsplash.com/photo-1551836022-4c4c79ecde51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBjb2FjaGluZ3xlbnwxfHx8fDE3NjM0MzYwODB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      color: '#0A2342',
    },
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
              Nos Services
            </h1>
            <p className="font-sans text-xl italic text-blanc-pur/80 max-w-3xl mx-auto mb-8">
              "La pertinence n'est pas un luxe, c'est une nécessité stratégique."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      {!selectedService ? (
        <section className="py-20 bg-[#F5F5F5]">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="font-sans font-semibold text-4xl text-noir-profond mb-4">
                Une expertise complète pour vos défis stratégiques
              </h2>
              <p className="text-gris-anthracite/70 text-lg max-w-2xl mx-auto">
                Cliquez sur un service pour en savoir plus
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  onClick={() => setSelectedService(service.id)}
                  className="bg-blanc-pur rounded-lg overflow-hidden shadow-lg cursor-pointer group"
                >
                  <div className="relative h-64 overflow-hidden">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-noir-profond to-transparent opacity-60"></div>
                    <div className="absolute top-6 left-6">
                      <div
                        className="w-16 h-16 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: service.color === '#D4AF37' ? '#D4C68A' : '#000000' }}
                      >
                        <service.icon
                          className={service.color === '#D4AF37' ? 'text-noir-profond' : 'text-or-doux'}
                          size={28}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="font-sans font-semibold text-3xl text-noir-profond mb-2">
                      {service.title}
                    </h3>
                    <p className="text-or-doux mb-4">{service.subtitle}</p>
                    <p className="text-gris-anthracite/70 mb-6">{service.description}</p>
                    <div className="flex items-center text-noir-profond group-hover:text-or-doux transition-colors">
                      <span className="mr-2">En savoir plus</span>
                      <ArrowRight size={20} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section className="py-20 bg-blanc-pur">
          <div className="max-w-7xl mx-auto px-6">
            <Button
              onClick={() => setSelectedService(null)}
              variant="ghost"
              className="mb-8 text-noir-profond hover:text-or-doux"
            >
              ← Retour aux services
            </Button>

            {services
              .filter((s) => s.id === selectedService)
              .map((service) => (
                <div key={service.id}>
                  <div className="grid md:grid-cols-2 gap-12 mb-16">
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                    >
                      <div className="mb-6">
                        <div
                          className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
                          style={{ backgroundColor: service.color === '#D4AF37' ? '#D4C68A' : '#000000' }}
                        >
                          <service.icon
                            className={
                              service.color === '#D4AF37' ? 'text-noir-profond' : 'text-or-doux'
                            }
                            size={36}
                          />
                        </div>
                      </div>
                      <h2 className="font-sans font-semibold text-4xl md:text-5xl text-noir-profond mb-4">
                        {service.title}
                      </h2>
                      <p className="text-or-doux text-xl mb-6">{service.subtitle}</p>
                      <p className="text-gris-anthracite/80 text-lg leading-relaxed mb-8">
                        {service.longDescription}
                      </p>
                      <Button asChild>
                        <Link to="/contact" className="bg-noir-profond text-blanc-pur hover:bg-noir-profond/90">
                          Discuter de ce service
                        </Link>
                      </Button>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                      className="relative"
                    >
                      <ImageWithFallback
                        src={service.image}
                        alt={service.title}
                        className="w-full h-[500px] object-cover rounded-lg shadow-2xl"
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-blanc-pur p-10 rounded-lg"
                  >
                    <h3 className="font-sans font-semibold text-3xl text-noir-profond mb-8">
                      Bénéfices clés
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {service.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start gap-4">
                          <div className="w-6 h-6 bg-or-doux rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <span className="text-noir-profond text-sm">✓</span>
                          </div>
                          <p className="text-gris-anthracite/80">{benefit}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-16 bg-noir-profond p-10 rounded-lg text-center"
                  >
                    <h3 className="font-sans font-semibold text-3xl text-blanc-pur mb-4">
                      Prêt à transformer votre organisation ?
                    </h3>
                    <p className="text-blanc-pur/80 mb-6 max-w-2xl mx-auto">
                      Discutons de votre projet et découvrez comment notre approche peut vous aider
                      à atteindre vos objectifs.
                    </p>
                    <Button asChild>
                      <Link to="/contact" className="bg-or-doux text-noir-profond hover:bg-or-doux/90">
                        Prendre rendez-vous
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              ))}
          </div>
        </section>
      )}
    </div>
  );
}
