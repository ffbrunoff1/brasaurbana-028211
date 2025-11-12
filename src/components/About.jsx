import React from 'react'
import { motion } from 'framer-motion'
import { Flame, Users, Trophy, Target, Heart } from 'lucide-react'

export default function About() {
  const AboutContent = () => (
    <div className="section-padding">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading-medium text-gradient mb-6">Nossa História</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Nascemos na rua, com paixão pelo fogo e pela carne de verdade. 
            Cada hambúrguer conta uma história de sabor, técnica e tradição.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3 text-primary-400 mb-6">
              <Flame className="h-8 w-8" />
              <span className="text-lg font-bold tracking-wider uppercase">Paixão pelo Fogo</span>
            </div>

            <h3 className="text-4xl font-bold text-white mb-6">
              Onde tudo começou
            </h3>

            <p className="text-lg text-gray-300 leading-relaxed">
              A Brasa Urbana nasceu da paixão por criar hambúrgueres que desafiam o comum. 
              Começamos nas ruas de São Paulo, com uma chapa de ferro e o sonho de levar 
              o verdadeiro sabor da brasa para quem entende de comida de verdade.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              Nossa técnica única combina o melhor do smash burger - com aquela crosta 
              crocante irresistível - com o toque defumado que só a brasa pode dar. 
              É essa combinação que faz cada mordida ser uma experiência única.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center space-x-2 text-secondary-400">
                <Trophy className="h-5 w-5" />
                <span className="font-semibold">Receita Exclusiva</span>
              </div>
              <div className="flex items-center space-x-2 text-secondary-400">
                <Heart className="h-5 w-5" />
                <span className="font-semibold">Feito com Paixão</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
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
                src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/963c07ff-56bc-4a19-956d-c9f2a6a78190/1762990546353_phsulrr7zg_Fuma_a_BBQ.webp"
                alt="Fumaça BBQ"
                className="relative w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="card-dark text-center group"
          >
            <div className="bg-gradient-fire w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Nossa Missão</h3>
            <p className="text-gray-300">
              Revolucionar a experiência do hambúrguer artesanal, combinando 
              técnicas tradicionais com o sabor único da brasa.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="card-dark text-center group"
          >
            <div className="bg-gradient-to-r from-secondary-500 to-secondary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Trophy className="h-8 w-8 text-dark-900" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Nossa Visão</h3>
            <p className="text-gray-300">
              Ser reconhecida como a referência em hambúrgueres artesanais 
              defumados, levando autenticidade e sabor a cada cliente.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="card-dark text-center group"
          >
            <div className="bg-gradient-to-r from-accent-500 to-accent-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Nossos Valores</h3>
            <p className="text-gray-300">
              Autenticidade, qualidade e paixão em cada hambúrguer. 
              Respeitamos as tradições enquanto inovamos constantemente.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-dark-800 border border-primary-500 rounded-2xl p-8 md:p-12 text-center"
        >
          <Flame className="h-16 w-16 text-primary-400 mx-auto mb-6 animate-pulse" />
          <h3 className="text-3xl font-bold text-white mb-4">
            O Diferencial da Brasa
          </h3>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Não é só mais um hambúrguer. É o resultado de anos de experiência, 
            dedicação e amor pela arte de grelhar. Cada smash burger é prensado 
            na chapa de ferro em alta temperatura, criando aquela crosta dourada 
            e crocante que todo mundo ama. Depois, vai direto para a brasa, 
            onde ganha aquele toque defumado que faz toda a diferença.
          </p>
        </motion.div>
      </div>
    </div>
  )

  return (
    <section className="bg-gradient-dark relative overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/3 left-1/4 w-72 h-72 bg-primary-500 rounded-full filter blur-3xl opacity-5"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      <AboutContent />
    </section>
  )
}