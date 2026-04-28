import { motion } from 'framer-motion';

export function TermsOfUsePage() {
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
            Conditions d'Utilisation
          </motion.h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-blanc-pur">
        <div className="max-w-4xl mx-auto px-6 prose prose-lg prose-slate">
          <div className="space-y-12 text-gris-anthracite/80 leading-relaxed">
            <div>
              <h2 className="text-3xl font-semibold text-noir-profond mb-4">1. Objet</h2>
              <p>
                Les présentes conditions générales d'utilisation (dites « CGU ») ont pour objet l'encadrement juridique des modalités de mise à disposition du site et des services par The Pertinent Group et de définir les conditions d’accès et d’utilisation des services par « l'Utilisateur ».
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-semibold text-noir-profond mb-4">2. Accès au site</h2>
              <p>
                Le site permet à l'Utilisateur un accès gratuit aux services suivants : information sur les services de conseil, téléchargement de ressources, prise de contact. Le site est accessible gratuitement en tout lieu à tout Utilisateur ayant un accès à Internet. Tous les frais supportés par l'Utilisateur pour accéder au service (matériel informatique, logiciels, connexion Internet, etc.) sont à sa charge.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-semibold text-noir-profond mb-4">3. Collecte des données</h2>
              <p>
                Le site assure à l'Utilisateur une collecte et un traitement d'informations personnelles dans le respect de la vie privée conformément à la loi n°78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés. En vertu de la loi Informatique et Libertés, en date du 6 janvier 1978, l'Utilisateur dispose d'un droit d'accès, de rectification, de suppression et d'opposition de ses données personnelles.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-semibold text-noir-profond mb-4">4. Propriété intellectuelle</h2>
              <p>
                Les marques, logos, signes ainsi que tous les contenus du site (textes, images, son…) font l'objet d'une protection par le Code de la propriété intellectuelle et plus particulièrement par le droit d'auteur. L'Utilisateur doit solliciter l'autorisation préalable du site pour toute reproduction, publication, copie des différents contenus.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-semibold text-noir-profond mb-4">5. Responsabilité</h2>
              <p>
                Les sources des informations diffusées sur le site sont réputées fiables mais le site ne garantit pas qu’il soit exempt de défauts, d’erreurs ou d’omissions. Les informations communiquées sont présentées à titre indicatif et général sans valeur contractuelle. Malgré des mises à jour régulières, le site ne peut être tenu responsable de la modification des dispositions administratives et juridiques survenant après la publication.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-semibold text-noir-profond mb-4">6. Liens hypertextes</h2>
              <p>
                De nombreux liens hypertextes sortants sont présents sur le site, cependant les pages web où mènent ces liens n'engagent point la responsabilité de The Pertinent Group qui n'a pas le contrôle de ces liens.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
