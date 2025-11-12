import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Flame, Star, Clock, ChevronLeft, Phone } from 'lucide-react'

export default function ProductDetail() {
  const { slug } = useParams()

  const products = {
    'brasa-smash': {
      name: "Brasa Smash",
      description: "Duplo smash na chapa de ferro",
      fullDescription: "Brasa_Smash é a solução perfeita para quem busca uma experiência única na grelha. Desenvolvido para entusiastas de churrasco, nosso produto combina tecnologia inovadora e design inteligente, garantindo que suas carnes fiquem suculentas e cheias de sabor. Com Brasa_Smash, você terá a liberdade de preparar deliciosas refeições ao ar livre, aproveitando ao máximo cada momento com amigos e familiares.\n\nSeu funcionamento é simples e intuitivo, permitindo que tanto iniciantes quanto especialistas na arte de grelhar possam utilizá-lo com facilidade. Com um aquecimento uniforme e controle de temperatura preciso, sua carne será grelhada no ponto exato, realçando todos os sabores. Além disso, a estrutura resistente e os materiais de alta qualidade garantem durabilidade e segurança no uso.\n\nBrasa_Smash é ideal para qualquer ocasião, desde um simples jantar até grandes celebrações. Descubra um novo padrão de excelência em churrasco e transforme seus encontros em verdadeiras festas do sabor. Invista em Brasa_Smash e leve suas habilidades de grelha para o próximo nível.",
      image: "https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/963c07ff-56bc-4a19-956d-c9f2a6a78190/1762990545155_nibkug0s7fk_Brasa_Smash.webp",
      price: "R$ 28,90",
      ingredients: ["Carne bovina premium", "Pão brioche artesanal", "Queijo cheddar", "Alface americana", "Tomate", "Cebola roxa", "Molho especial"],
      prepTime: "15-20 min"
    },
    'fumaca-bbq': {
      name: "Fumaça BBQ",
      description: "Cebola caramelizada, bacon e molho BBQ artesanal",
      fullDescription: "Descubra a experiência única de Fumaça BBQ, onde o verdadeiro sabor da churrasqueira ganha vida. Nossa missão é proporcionar momentos inesquecíveis ao redor da mesa, com pratos que valorizam ingredientes de qualidade e técnicas de defumação artesanal.\n\nNo Fumaça BBQ, cada alimento é preparado com cuidado e paixão. Nossos cortes de carnes suculentos são temperados de maneira especial e defumados com madeiras selecionadas, garantindo um sabor inigualável que agrada aos paladares mais exigentes. Oferecemos opções para todos os gostos, desde clássicos como costela e peito de frango até alternativas vegetarianas que surpreendem.\n\nAlém das carnes, nossa carta de acompanhamentos inclui receitas tradicionais e inovadoras que complementam perfeitamente a refeição. Do pão de alho à farofa temperada, cada detalhe é pensado para elevar sua experiência gastronômica.\n\nVisite-nos e deixe-se envolver pelo ambiente acolhedor e informal, ideal para reunir amigos e familiares. No Fumaça BBQ, sua refeição é mais do que um simples prato; é uma celebração de sabores que aquecem o coração. Venha vivenciar essa paixão pelo BBQ!",
      image: "https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/963c07ff-56bc-4a19-956d-c9f2a6a78190/1762990546353_phsulrr7zg_Fuma_a_BBQ.webp",
      price: "R$ 32,90",
      ingredients: ["Carne bovina premium", "Pão brioche", "Bacon artesanal", "Cebola caramelizada", "Queijo cheddar", "Molho BBQ artesanal", "Alface", "Tomate"],
      prepTime: "18-22 min"
    },
    'inferno-burger': {
      name: "Inferno Burger",
      description: "Picante, com molho de pimenta defumada",
      fullDescription: "Conheça o Inferno Burger, a experiência gastronômica que vai desafiar seu paladar. Especialmente desenvolvido para os amantes de hambúrgueres, nosso cardápio apresenta uma explosão de sabores que combina carnes suculentas com molhos picantes de dar água na boca. Cada mordida é uma viagem intensa, com ingredientes selecionados e frescos, garantindo qualidade e frescor em cada lanche.\n\nO nosso hambúrguer é feito com uma mistura especial de carnes, que proporciona uma textura única e um sabor irresistível. Para os fãs de pimentas, oferecemos opções que vão do moderado ao extremo, proporcionando desafios emocionantes e saborosos. Além disso, nosso cardápio conta com acompanhamentos deliciosos, como batatas fritas crocantes e anéis de cebola perfeitamente fritos.\n\nO Inferno Burger não é apenas uma refeição, mas uma experiência interativa que une amigos e família em torno da mesa. Venha nos visitar e descubra o verdadeiro significado de um hambúrguer picante e saboroso. Prepare-se para uma explosão de sabor que vai aquecer seu paladar e deixar você querendo mais. Não perca a oportunidade de vivenciar essa aventura gastronômica!",
      image: "https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/963c07ff-56bc-4a19-956d-c9f2a6a78190/1762990547122_9lptt8sen8_Inferno_Burger.webp",
      price: "R$ 29,90",
      ingredients: ["Carne bovina premium", "Pão brioche", "Queijo pepper jack", "Molho de pimenta defumada", "Jalapeños", "Cebola roxa", "Alface", "Tomate"],
      prepTime: "15-20 min"
    }
  }

  const product = products[slug]

  if (!product) {
    return (
      <div className="pt-32 pb-16 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Produto não encontrado</h1>
        <Link to="/cardapio" className="btn-primary">Voltar ao Cardápio</Link>
      </div>
    )
  }

  const ProductDetailContent = () => (
    <div className="pt-32 pb-16">
      <div className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <Link 
              to="/cardapio"
              className="inline-flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
              <span>Voltar ao Cardápio</span>
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-fire rounded-2xl filter blur-2xl opacity-20"
                  animate={{
                    scale: [1, 1.05, 1],
                    rotate: [0, 2, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <img
                  src={product.image}
                  alt={product.name}
                  className="relative w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
              
              <div className="absolute -top-4 -right-4 bg-gradient-fire text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg">
                <Flame className="h-5 w-5 inline mr-2" />
                Especialidade
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div>
                <h1 className="heading-medium text-gradient mb-4">{product.name}</h1>
                <p className="text-xl text-gray-300 mb-6">{product.description}</p>
                
                <div className="flex items-center space-x-6 mb-6">
                  <div className="text-3xl font-black text-primary-400">{product.price}</div>
                  <div className="flex items-center space-x-2 text-secondary-400">
                    <Clock className="h-5 w-5" />
                    <span className="font-medium">{product.prepTime}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 text-secondary-400 fill-current" />
                    ))}
                  </div>
                </div>

                <div className="bg-dark-800 border border-primary-500 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                    <Flame className="h-5 w-5 mr-2 text-primary-400" />
                    Ingredientes Premium
                  </h3>
                  <ul className="grid grid-cols-2 gap-2">
                    {product.ingredients.map((ingredient, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <Star className="h-3 w-3 mr-2 text-secondary-400 fill-current" />
                        {ingredient}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link 
                  to="/pedidos"
                  className="w-full btn-primary group"
                >
                  <Phone className="h-5 w-5 mr-2 group-hover:animate-pulse" />
                  Pedir Agora
                </Link>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-dark-800 border border-dark-700 rounded-2xl p-8 md:p-12"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Sobre este hambúrguer</h2>
            <div className="text-gray-300 leading-relaxed space-y-4">
              {product.fullDescription.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-8">Outros do cardápio</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(products)
                .filter(([key]) => key !== slug)
                .slice(0, 2)
                .map(([key, otherProduct]) => (
                  <Link
                    key={key}
                    to={`/produto/${key}`}
                    className="card-dark group hover:scale-[1.02] transition-all duration-300"
                  >
                    <img
                      src={otherProduct.image}
                      alt={otherProduct.name}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <h4 className="text-lg font-bold text-white group-hover:text-primary-400 transition-colors">
                      {otherProduct.name}
                    </h4>
                    <p className="text-gray-300 text-sm">{otherProduct.description}</p>
                    <div className="text-primary-400 font-bold mt-2">{otherProduct.price}</div>
                  </Link>
                ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )

  return (
    <section className="bg-gradient-dark relative overflow-hidden min-h-screen">
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/3 right-1/4 w-80 h-80 bg-primary-500 rounded-full filter blur-3xl opacity-5"
          animate={{
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      <ProductDetailContent />
    </section>
  )
}