import { motion } from 'framer-motion@11.14.4';
import { Calendar, User, ArrowRight, Filter } from 'lucide-react@0.487.0';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';

export function InsightsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['Tout', 'Leadership', 'Afrique', 'Stratégie', 'Coaching'];

  const articles = [
    {
      id: 1,
      title: 'Les 5 piliers du leadership transformationnel en Afrique',
      excerpt:
        'Découvrez comment les leaders africains peuvent catalyser le changement en s\'appuyant sur les valeurs culturelles locales.',
      category: 'Leadership',
      author: 'Mykem Bello',
      date: '15 Nov 2025',
      image: 'https://images.unsplash.com/photo-1621959614020-e12047c380ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYnVzaW5lc3MlMjBwcm9mZXNzaW9uYWxzfGVufDF8fHx8MTc2MzQ2ODkwMHww&ixlib=rb-4.1.0&q=80&w=1080',
      readTime: '8 min',
    },
    {
      id: 2,
      title: 'Stratégie d\'expansion : réussir son entrée sur les marchés africains',
      excerpt:
        'Guide pratique pour les entreprises souhaitant développer leur présence sur le continent africain.',
      category: 'Afrique',
      author: 'Sarah Kouassi',
      date: '10 Nov 2025',
      image: 'https://images.unsplash.com/photo-1630283017802-785b7aff9aac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYzMzk2MjI0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      readTime: '10 min',
    },
    {
      id: 3,
      title: 'Comment la méthode IDEA® transforme les organisations',
      excerpt:
        'Retour d\'expérience sur l\'application de notre méthodologie propriétaire dans différents secteurs.',
      category: 'Stratégie',
      author: 'Mykem Bello',
      date: '5 Nov 2025',
      image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJhdGVnaWMlMjBwbGFubmluZ3xlbnwxfHx8fDE3NjM0MzUxNTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      readTime: '12 min',
    },
    {
      id: 4,
      title: 'L\'art du coaching exécutif : développer le potentiel des leaders',
      excerpt:
        'Les clés pour accompagner efficacement les dirigeants dans leur évolution professionnelle.',
      category: 'Coaching',
      author: 'Thomas Laurent',
      date: '1 Nov 2025',
      image: 'https://images.unsplash.com/photo-1551836022-4c4c79ecde51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBjb2FjaGluZ3xlbnwxfHx8fDE3NjM0MzYwODB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      readTime: '7 min',
    },
    {
      id: 5,
      title: 'Gouvernance d\'entreprise : les tendances 2025',
      excerpt:
        'Analyse des évolutions récentes en matière de gouvernance et leurs implications pour les organisations.',
      category: 'Stratégie',
      author: 'Sarah Kouassi',
      date: '28 Oct 2025',
      image: 'https://images.unsplash.com/photo-1758518729685-f88df7890776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwbWVldGluZyUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzYzNDY4OTAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      readTime: '9 min',
    },
    {
      id: 6,
      title: 'Leadership authentique : être soi-même pour mieux diriger',
      excerpt:
        'Pourquoi l\'authenticité est devenue un atout majeur pour les leaders modernes.',
      category: 'Leadership',
      author: 'Mykem Bello',
      date: '20 Oct 2025',
      image: 'https://images.unsplash.com/photo-1543132220-7bc04a0e790a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGV4ZWN1dGl2ZSUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzQ0NTUwOHww&ixlib=rb-4.1.0&q=80&w=1080',
      readTime: '6 min',
    },
  ];

  const filteredArticles =
    selectedCategory === 'all'
      ? articles
      : articles.filter((article) => article.category === selectedCategory);

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
              Insights
            </h1>
            <p className="font-sans text-xl text-blanc-pur/80 max-w-3xl mx-auto">
              Analyses, réflexions et perspectives sur le leadership, la stratégie et la
              transformation organisationnelle
            </p>
          </motion.div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-12 bg-or-doux">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="flex-1 text-center md:text-left">
              <h3 className="font-sans font-semibold text-3xl text-noir-profond mb-2">
                Recevez nos insights mensuels
              </h3>
              <p className="text-noir-profond/80">
                Restez informé des dernières tendances et bonnes pratiques
              </p>
            </div>
            <div className="flex gap-4 w-full md:w-auto">
              <input
                type="email"
                placeholder="Votre email"
                className="px-6 py-3 rounded-lg bg-blanc-pur text-noir-profond placeholder:text-noir-profond/50 outline-none focus:ring-2 focus:ring-noir-profond flex-1 md:w-80"
              />
              <Button className="bg-noir-profond text-blanc-pur hover:bg-noir-profond/90 whitespace-nowrap">
                S'abonner
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 bg-blanc-pur">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap items-center gap-4"
          >
            <div className="flex items-center gap-2 text-noir-profond">
              <Filter size={20} />
              <span>Filtrer par :</span>
            </div>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category === 'Tout' ? 'all' : category)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  (category === 'Tout' && selectedCategory === 'all') ||
                  selectedCategory === category
                    ? 'bg-noir-profond text-blanc-pur'
                    : 'bg-blanc-pur text-noir-profond hover:bg-noir-profond/10'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 bg-blanc-pur">
        <div className="max-w-7xl mx-auto px-6">
          {filteredArticles.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-blanc-pur rounded-lg overflow-hidden shadow-lg group cursor-pointer hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-56 overflow-hidden">
                    <ImageWithFallback
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                                          <span className="bg-or-doux text-noir-profond px-3 py-1 rounded-full text-sm">
                                            {article.category}
                                          </span>                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gris-anthracite/60 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} className="text-noir-profond" />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User size={16} className="text-noir-profond" />
                        <span>{article.author}</span>
                      </div>
                    </div>
                    <h3 className="font-sans font-semibold text-xl text-noir-profond mb-3 group-hover:text-or-doux transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gris-anthracite/70 mb-4 line-clamp-3">{article.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gris-anthracite/60">{article.readTime} de lecture</span>
                      <div className="flex items-center gap-2 text-noir-profond group-hover:text-or-doux transition-colors">
                        <span className="text-sm">Lire plus</span>
                        <ArrowRight size={16} />
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-gris-anthracite/60 text-lg">
                Aucun article trouvé dans cette catégorie.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-20 bg-noir-profond">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-sans font-semibold text-4xl text-blanc-pur mb-4">
              Contenus Multimédias
            </h2>
            <p className="text-blanc-pur/80 max-w-2xl mx-auto">
              Découvrez également nos vidéos et podcasts pour approfondir ces thématiques
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-blanc-pur p-8 rounded-lg"
            >
              <div className="w-16 h-16 bg-or-doux rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </div>
              <h3 className="font-sans font-semibold text-2xl text-noir-profond mb-4">
                Vidéos & Webinaires
              </h3>
              <p className="text-gris-anthracite/70 mb-6">
                Retrouvez nos masterclasses et interventions sur les grands enjeux stratégiques
              </p>
              <Button className="bg-noir-profond text-blanc-pur hover:bg-noir-profond/90">
                Voir les vidéos
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-or-doux p-8 rounded-lg"
            >
              <div className="w-16 h-16 bg-noir-profond rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#D4C68A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                  <line x1="12" x2="12" y1="19" y2="22"></line>
                </svg>
              </div>
              <h3 className="font-sans font-semibold text-2xl text-noir-profond mb-4">
                Podcast TPG
              </h3>
              <p className="text-noir-profond/80 mb-6">
                Écoutez nos conversations avec des leaders inspirants et des experts
              </p>
              <Button className="bg-noir-profond text-blanc-pur hover:bg-noir-profond/90">
                Écouter le podcast
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
