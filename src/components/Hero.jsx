import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Flame, Star, Clock, Phone } from 'lucide-react'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const HeroContent = () => (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-primary-900/20" />
      
      <motion.div 
        className="container-custom relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-center space-x-3 text-primary-400">
                <Flame className="h-8 w-8 animate-pulse" />
                <span className="text-lg font-bold tracking-wider uppercase">Autêntico Sabor</span>
              </div>
              
              <h1 className="heading-large text-gradient leading-tight">
                O sabor que vem do fogo
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 font-medium max-w-2xl">
                Hambúrguer artesanal feito na chapa quente e finalizado na brasa, 
                com bordas crocantes, suculência no ponto certo e sabor defumado único.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center space-x-6 text-secondary-400">
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 fill-current" />
                <span className="font-semibold">Artesanal</span>
              </div>
              <div className="flex items-center space-x-2">
                <Flame className="h-5 w-5" />
                <span className="font-semibold">Na Brasa</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span className="font-semibold">Fresco</span>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <Link to="/pedidos" className="btn-primary group">
                <Phone className="h-5 w-5 mr-2 group-hover:animate-pulse" />
                Pedir Agora
              </Link>
              <Link to="/cardapio" className="btn-secondary">
                Ver Cardápio
              </Link>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-black text-primary-400">100%</div>
                <div className="text-sm text-gray-400">Artesanal</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-secondary-400">24h</div>
                <div className="text-sm text-gray-400">Delivery</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-primary-400">5★</div>
                <div className="text-sm text-gray-400">Avaliação</div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            variants={itemVariants}
            className="relative"
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-gradient-fire rounded-full filter blur-3xl opacity-20"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.3, 0.2]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <motion.img
                src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/963c07ff-56bc-4a19-956d-c9f2a6a78190/1762990545155_nibkug0s7fk_Brasa_Smash.webp"
                alt="Brasa Smash - Hambúrguer Artesanal"
                className="relative w-full h-auto max-w-lg mx-auto rounded-2xl shadow-2xl"
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5
                }}
                transition={{ 
                  duration: 0.3,
                  ease: "easeOut"
                }}
              />
              
              <div className="absolute -top-4 -right-4 bg-gradient-fire text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg">
                <Flame className="h-5 w-5 inline mr-2" />
                Novo!
              </div>
            </div>

            <motion.div
              className="absolute -bottom-8 -left-8 bg-dark-800 border border-primary-500 rounded-xl p-4 shadow-2xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold">Preparando agora...</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )

  return (
    <section className="relative overflow-hidden bg-gradient-dark">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-dark-900 via-transparent to-primary-900/10" />
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
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-secondary-500 rounded-full filter blur-3xl opacity-5"
          animate={{
            x: [0, -30, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      <HeroContent />
    </section>
  )
}