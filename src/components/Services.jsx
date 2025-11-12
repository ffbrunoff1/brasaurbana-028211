import React from 'react'
import { motion } from 'framer-motion'
import { Flame, Clock, Utensils, Package, Users, Star } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Flame,
      title: "Grelhado na Brasa",
      description: "Cada hambúrguer é finalizado na brasa real, garantindo o sabor defumado único que é nossa marca registrada.",
      features: ["Brasa de carvão", "Sabor defumado", "Técnica exclusiva"]
    },
    {
      icon: Utensils,
      title: "Smash na Chapa",
      description: "Técnica de prensamento na chapa de ferro que cria bordas crocantes e mantém a suculência perfeita da carne.",
      features: ["Chapa de ferro", "Bordas crocantes", "Suculência preservada"]
    },
    {
      icon: Package,
      title: "Delivery Express",
      description: "Entregamos seu hambúrguer fresquinho e quentinho, mantendo toda a qualidade e sabor até sua mesa.",
      features: ["Embalagem térmica", "Entrega rápida", "Qualidade preservada"]
    },
    {
      icon: Users,
      title: "Experiência Premium",
      description: "Atendimento personalizado e ambiente que respira a paixão pela arte de fazer hambúrgueres artesanais.",
      features: ["Atendimento VIP", "Ambiente único", "Experiência completa"]
    }
  ]

  const processSteps = [
    {
      step: "01",
      title: "Seleção da Carne",
      description: "Escolhemos apenas carnes premium, frescas e com a gordura ideal para o sabor perfeito."
    },
    {
      step: "02", 
      title: "Smash na Chapa",
      description: "Prensamos a carne na chapa de ferro em alta temperatura, criando a crosta crocante característica."
    },
    {
      step: "03",
      title: "Finalização na Brasa", 
      description: "Levamos direto para a brasa, onde o hambúrguer ganha o toque defumado que faz toda a diferença."
    },
    {
      step: "04",
      title: "Montagem Artesanal",
      description: "Cada ingrediente é cuidadosamente selecionado e posicionado para a experiência gastronômica perfeita."
    }
  ]

  const ServicesContent = () => (
    <div className="section-padding">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading-medium text-gradient mb-6">Nossa Especialidade</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cada hambúrguer é uma obra de arte culinária, criado com técnicas exclusivas 
            e ingredientes premium para uma experiência gastronômica inesquecível.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="card-dark text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="bg-gradient-fire w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-secondary-400">
                      <Star className="h-4 w-4 mr-2 fill-current" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-dark-800 border border-primary-500 rounded-2xl p-8 md:p-12 mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="heading-small text-gradient mb-4">Nosso Processo Artesanal</h3>
            <p className="text-lg text-gray-300">
              Cada hambúrguer passa por um processo cuidadoso que garante qualidade e sabor únicos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center relative"
              >
                <div className="bg-gradient-fire text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  {step.step}
                </div>
                
                <h4 className="text-lg font-bold text-white mb-3">{step.title}</h4>
                <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
                
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-full w-full h-px bg-gradient-to-r from-primary-500 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-3 gap-8 text-center"
        >
          <div className="space-y-4">
            <div className="text-4xl font-black text-primary-400">100%</div>
            <div className="text-lg font-semibold text-white">Artesanal</div>
            <div className="text-gray-400">Cada hambúrguer feito à mão</div>
          </div>
          
          <div className="space-y-4">
            <div className="text-4xl font-black text-secondary-400">15min</div>
            <div className="text-lg font-semibold text-white">Preparo</div>
            <div className="text-gray-400">Fresco e no ponto certo</div>
          </div>
          
          <div className="space-y-4">
            <div className="text-4xl font-black text-primary-400">5★</div>
            <div className="text-lg font-semibold text-white">Avaliação</div>
            <div className="text-gray-400">Satisfação garantida</div>
          </div>
        </motion.div>
      </div>
    </div>
  )

  return (
    <section className="bg-gradient-dark relative overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 right-1/3 w-80 h-80 bg-secondary-500 rounded-full filter blur-3xl opacity-5"
          animate={{
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      <ServicesContent />
    </section>
  )
}