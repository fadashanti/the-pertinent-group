import { motion } from 'framer-motion';

export function PrivacyPolicyPage() {
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
            Politique de Confidentialité
          </motion.h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-blanc-pur">
        <div className="max-w-4xl mx-auto px-6 prose prose-lg prose-slate">
          <div className="space-y-12 text-gris-anthracite/80 leading-relaxed">
            <div>
              <h2 className="text-3xl font-semibold text-noir-profond mb-4">1. Collecte de l'information</h2>
              <p>
                Nous recueillons des informations lorsque vous remplissez un formulaire de contact ou que vous vous inscrivez pour télécharger une ressource (Lead Magnet) sur notre site. Les informations recueillies incluent votre nom, votre adresse e-mail et éventuellement votre numéro de téléphone.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-semibold text-noir-profond mb-4">2. Utilisation des informations</h2>
              <p>Toutes les informations que nous recueillons auprès de vous peuvent être utilisées pour :</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Personnaliser votre expérience et répondre à vos besoins individuels</li>
                <li>Améliorer notre site Web</li>
                <li>Améliorer le service client et vos besoins de prise en charge</li>
                <li>Vous contacter par e-mail</li>
                <li>Administrer un concours, une promotion, ou un enquête</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-semibold text-noir-profond mb-4">3. Confidentialité du commerce en ligne</h2>
              <p>
                Nous sommes les seuls propriétaires des informations recueillies sur ce site. Vos informations personnelles ne seront pas vendues, échangées, transférées, ou données à une autre société pour n'importe quelle raison, sans votre consentement.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-semibold text-noir-profond mb-4">4. Divulgation à des tiers</h2>
              <p>
                Nous ne vendons, n'échangeons et ne transférons pas vos informations personnelles identifiables à des tiers. Cela ne comprend pas les tierce parties de confiance qui nous aident à exploiter notre site Web ou à mener nos affaires, tant que ces parties conviennent de garder ces informations confidentielles.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-semibold text-noir-profond mb-4">5. Protection des informations</h2>
              <p>
                Nous mettons en œuvre une variété de mesures de sécurité pour préserver la sécurité de vos informations personnelles. Nous utilisons un cryptage à la pointe de la technologie pour protéger les informations sensibles transmises en ligne. Nous protégeons également vos informations hors ligne.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-semibold text-noir-profond mb-4">6. Consentement</h2>
              <p>
                En utilisant notre site, vous consentez à notre politique de confidentialité.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
