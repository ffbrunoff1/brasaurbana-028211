import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Flame, Star, ChevronRight, Clock } from 'lucide-react'

export default function Menu() {
  const products = [
    {
      name: "Brasa Smash",
      slug: "brasa-smash",
      description: "Duplo smash na chapa de ferro",
      longDescription: "Hambúrguer duplo prensado na chapa de ferro em alta temperatura, finalizado na brasa para aquele sabor defumado único.",
      image: "https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/963c07ff-56bc-4a19-956d-c9f2a6a78190/1762990545155_nibkug0s7fk_Brasa_Smash.webp",
      price: "R$ 28,90",
      highlights: ["Duplo Smash", "Brasa Defumada", "Crocante"]
    },
    {
      name: "Fumaça BBQ", 
      slug: "fumaca-bbq",
      description: "Cebola caramelizada, bacon e molho BBQ artesanal",
      longDescription: "Combinação perfeita de sabores com cebola caramelizada, bacon crocante e nosso molho BBQ artesanal exclusivo.",
      image: "https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/963c07ff-56bc-4a19-956d-c9f2a6a78190/1762990546353_phsulrr7zg_Fuma_a_BBQ.webp",
      price: "R$ 32,90",
      highlights: ["BBQ Artesanal", "Bacon Premium", "Cebola Caramelizada"]
    },
    {
      name: "Inferno Burger",
      slug: "inferno-burger", 
      description: "Picante, com molho de pimenta defumada",
      longDescription: "Para os corajosos! Hambúrguer com molho de pimenta defumada artesanal que vai testar seus limites.",
      image: "https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/963c07ff-56bc-4a19-956d-c9f2a6a78190/1762990547122_9lptt8sen8_Inferno_Burger.webp",
      price: "R$ 29,90",
      highlights: ["Extra Picante", "Pimenta Defumada", "Desafio"]
    }
  ]

  const MenuPageContent = () => (
    <div className="pt-32 pb-16">
      <div className="section-padding">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="heading-medium text-gradient mb-6">Nosso Cardápio</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cada hambúrguer é uma obra de arte culinária, preparado com ingredientes premium 
              e finalizado na brasa para um sabor defumado único.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-dark-800 border border-primary-500 rounded-2xl p-6 md:p-8 mb-12 text-center"
          >
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Flame className="h-8 w-8 text-primary-400 animate-pulse" />
              <h2 className="text-2xl font-bold text-white">Cardápio Principal</h2>
              <Flame className="h-8 w-8 text-primary-400 animate-pulse" />
            </div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Hambúrgueres artesanais feitos na chapa quente e finalizados na brasa. 
              O sabor que vem do fogo em cada mordida.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-16">
            {products.map((product, index) => (
              <motion.div
                key={product.slug}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="card-dark group hover:scale-[1.02] transition-all duration-300"
              >
                <div className="relative mb-6 overflow-hidden rounded-xl">
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <div className="bg-gradient-fire text-white px-3 py-1 rounded-full text-sm font-bold">
                      Novo!
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="text-2xl font-black text-white">{product.price}</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-300 text-lg">{product.description}</p>
                    <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                      {product.longDescription}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.highlights.map((highlight, highlightIndex) => (
                      <span 
                        key={highlightIndex}
                        className="bg-dark-700 text-secondary-400 px-3 py-1 rounded-full text-xs font-semibold"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-secondary-400">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm font-medium">15-20 min</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-4 w-4 text-secondary-400 fill-current" />
                      ))}
                    </div>
                  </div>

                  <Link
                    to={`/produto/${product.slug}`}
                    className="w-full bg-gradient-fire text-white py-3 px-6 rounded-lg font-bold text-center hover:scale-105 transition-transform flex items-center justify-center space-x-2 group"
                  >
                    <span>Ver Detalhes</span>
                    <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-fire rounded-2xl p-8 md:p-12 text-center"
          >
            <Flame className="h-16 w-16 text-white mx-auto mb-6 animate-pulse" />
            <h3 className="text-3xl font-bold text-white mb-4">
              Pronto para experimentar o sabor do fogo?
            </h3>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Faça seu pedido agora e experimente hambúrgueres artesanais únicos, 
              feitos com paixão e finalizado na brasa.
            </p>
            <Link 
              to="/pedidos"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-bold text-lg hover:scale-105 transition-transform inline-block"
            >
              Fazer Pedido Agora
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )

  return (
    <section className="bg-gradient-dark relative overflow-hidden min-h-screen">
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary-500 rounded-full filter blur-3xl opacity-5"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      <MenuPageContent />
    </section>
  )
}