import { motion } from 'framer-motion';

export function LegalNoticePage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-noir-profond via-noir-profond to-gris-anthracite">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-sans font-semibold text-5xl md:text-6xl text-blanc-pur mb-6"
          >
            Mentions Légales
          </motion.h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-blanc-pur">
        <div className="max-w-4xl mx-auto px-6 prose prose-lg prose-slate">
          <div className="space-y-12 text-gris-anthracite/80 leading-relaxed">
            <div>
              <h2 className="text-3xl font-semibold text-noir-profond mb-4">1. Présentation du site</h2>
              <p>
                En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est précisé aux utilisateurs du site l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi :
              </p>
              <p className="mt-4">
                <strong>Propriétaire :</strong> The Pertinent Group (TPG)<br />
                <strong>Responsable publication :</strong> Mykem Bello – contact@thepertinentgroup.com<br />
                <strong>Webmaster :</strong> The Pertinent Group<br />
                <strong>Hébergeur :</strong> PlanetHoster – 4416 Louis-B.-Mayer, Laval, Québec, Canada H7P 0G1
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-semibold text-noir-profond mb-4">2. Conditions générales d’utilisation du site et des services proposés</h2>
              <p>
                L’utilisation du site implique l’acceptation pleine et entière des conditions générales d’utilisation ci-après décrites. Ces conditions d’utilisation sont susceptibles d’être modifiées ou complétées à tout moment, les utilisateurs du site sont donc invités à les consulter de manière régulière.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-semibold text-noir-profond mb-4">3. Description des services fournis</h2>
              <p>
                Le site a pour objet de fournir une information concernant l’ensemble des activités de la société. The Pertinent Group s’efforce de fournir sur le site des informations aussi précises que possible. Toutefois, il ne pourra être tenue responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu’elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-semibold text-noir-profond mb-4">4. Propriété intellectuelle et contrefaçons</h2>
              <p>
                The Pertinent Group est propriétaire des droits de propriété intellectuelle ou détient les droits d’usage sur tous les éléments accessibles sur le site, notamment les textes, images, graphismes, logo, icônes, sons, logiciels.
              </p>
              <p className="mt-2">
                Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de : The Pertinent Group.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-semibold text-noir-profond mb-4">5. Limitations de responsabilité</h2>
              <p>
                The Pertinent Group ne pourra être tenue responsable des dommages directs et indirects causés au matériel de l’utilisateur, lors de l’accès au site, et résultant soit de l’utilisation d’un matériel ne répondant pas aux spécifications indiquées au point 4, soit de l’apparition d’un bug ou d’une incompatibilité.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
