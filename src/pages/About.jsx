import React from 'react'
import { motion } from 'framer-motion'
import { Flame, Users, Trophy, Target, Heart, Star, Clock } from 'lucide-react'

export default function About() {
  const AboutPageContent = () => (
    <div className="pt-32 pb-16">
      <div className="section-padding">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="heading-medium text-gradient mb-6">Nossa História</h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Nascemos na rua, com paixão pelo fogo e pela carne de verdade. 
              A Brasa Urbana é mais que uma hamburgueria - é uma experiência 
              gastronômica que une tradição, técnica e inovação.
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
                <Flame className="h-8 w-8 animate-pulse" />
                <span className="text-lg font-bold tracking-wider uppercase">Paixão pelo Fogo</span>
              </div>

              <h2 className="text-4xl font-bold text-white mb-6">
                A origem do sabor autêntico
              </h2>

              <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                <p>
                  Tudo começou com uma ideia simples: criar hambúrgueres que desafiam o comum. 
                  Nas ruas movimentadas de São Paulo, armamos nossa primeira chapa de ferro 
                  com o sonho de levar o verdadeiro sabor da brasa para quem entende de comida de verdade.
                </p>

                <p>
                  Nossa paixão pela perfeição nos levou a desenvolver uma técnica única: 
                  o smash burger tradicional, prensado na chapa em alta temperatura, 
                  ganha vida quando finalizado na brasa real. É essa combinação que cria 
                  aquele sabor defumado inconfundível.
                </p>

                <p>
                  Cada hambúrguer conta uma história. Uma história de dedicação, 
                  técnica apurada e amor pela arte de grelhar. Não fazemos apenas comida, 
                  criamos experiências que aquecem o coração e despertam os sentidos.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="bg-dark-800 border border-primary-500 rounded-xl p-4 text-center">
                  <div className="text-2xl font-black text-primary-400 mb-2">2020</div>
                  <div className="text-sm text-gray-300">Fundação</div>
                </div>
                <div className="bg-dark-800 border border-secondary-500 rounded-xl p-4 text-center">
                  <div className="text-2xl font-black text-secondary-400 mb-2">1000+</div>
                  <div className="text-sm text-gray-300">Clientes Satisfeitos</div>
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
                  src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/963c07ff-56bc-4a19-956d-c9f2a6a78190/1762990547122_9lptt8sen8_Inferno_Burger.webp"
                  alt="Inferno Burger - Nossa especialidade"
                  className="relative w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
              
              <motion.div
                className="absolute -bottom-6 -right-6 bg-dark-800 border border-primary-500 rounded-xl p-4 shadow-2xl"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <div className="flex items-center space-x-3">
                  <Flame className="h-8 w-8 text-primary-400" />
                  <div>
                    <div className="text-lg font-bold text-white">Receita Secreta</div>
                    <div className="text-sm text-gray-400">Temperos exclusivos</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            <div className="card-dark text-center group">
              <div className="bg-gradient-fire w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Nossa Missão</h3>
              <p className="text-gray-300 leading-relaxed">
                Revolucionar a experiência do hambúrguer artesanal em São Paulo, 
                combinando técnicas tradicionais com o sabor único da brasa, 
                criando momentos únicos para nossos clientes.
              </p>
            </div>

            <div className="card-dark text-center group">
              <div className="bg-gradient-to-r from-secondary-500 to-secondary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Trophy className="h-8 w-8 text-dark-900" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Nossa Visão</h3>
              <p className="text-gray-300 leading-relaxed">
                Ser reconhecida como a principal referência em hambúrgueres artesanais 
                defumados no Brasil, expandindo nossa paixão pelo sabor autêntico 
                para todo o país.
              </p>
            </div>

            <div className="card-dark text-center group">
              <div className="bg-gradient-to-r from-accent-500 to-accent-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Nossos Valores</h3>
              <p className="text-gray-300 leading-relaxed">
                Autenticidade, qualidade superior e paixão em cada hambúrguer. 
                Respeitamos as tradições culinárias enquanto inovamos constantemente 
                para surpreender nossos clientes.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-fire rounded-2xl p-8 md:p-12 text-center mb-16"
          >
            <Flame className="h-16 w-16 text-white mx-auto mb-6 animate-pulse" />
            <h3 className="text-3xl font-bold text-white mb-6">
              O Diferencial da Brasa Urbana
            </h3>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h4 className="text-xl font-bold text-white mb-4">Nossa Técnica</h4>
                <p className="text-white/90 leading-relaxed">
                  Cada smash burger é prensado na chapa de ferro em alta temperatura, 
                  criando aquela crosta dourada e crocante que todo mundo ama. 
                  Depois, vai direto para a brasa, onde ganha aquele toque defumado 
                  que faz toda a diferença.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-4">Ingredientes Premium</h4>
                <p className="text-white/90 leading-relaxed">
                  Selecionamos apenas carnes premium, vegetais frescos e desenvolvemos 
                  molhos artesanais exclusivos. Cada ingrediente é escolhido a dedo 
                  para garantir a qualidade que nossos clientes merecem.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-4 gap-8 text-center"
          >
            <div className="space-y-4">
              <div className="text-4xl font-black text-primary-400">100%</div>
              <div className="text-lg font-semibold text-white">Artesanal</div>
              <div className="text-gray-400">Cada hambúrguer feito à mão com carinho</div>
            </div>
            
            <div className="space-y-4">
              <div className="text-4xl font-black text-secondary-400">15min</div>
              <div className="text-lg font-semibold text-white">Preparo</div>
              <div className="text-gray-400">Sempre fresco e no ponto perfeito</div>
            </div>
            
            <div className="space-y-4">
              <div className="text-4xl font-black text-primary-400">5★</div>
              <div className="text-lg font-semibold text-white">Avaliação</div>
              <div className="text-gray-400">Satisfação garantida dos clientes</div>
            </div>

            <div className="space-y-4">
              <div className="text-4xl font-black text-secondary-400">24h</div>
              <div className="text-lg font-semibold text-white">Delivery</div>
              <div className="text-gray-400">Disponível quando você quiser</div>
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
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-secondary-500 rounded-full filter blur-3xl opacity-5"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      <AboutPageContent />
    </section>
  )
}