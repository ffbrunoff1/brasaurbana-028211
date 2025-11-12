import React from 'react'
import { motion } from 'framer-motion'
import { Flame, Image, Play } from 'lucide-react'

export default function Gallery() {
  const galleryImages = [
    {
      src: "https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/963c07ff-56bc-4a19-956d-c9f2a6a78190/1762990545155_nibkug0s7fk_Brasa_Smash.webp",
      title: "Brasa Smash",
      description: "Duplo smash na chapa de ferro"
    },
    {
      src: "https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/963c07ff-56bc-4a19-956d-c9f2a6a78190/1762990546353_phsulrr7zg_Fuma_a_BBQ.webp",
      title: "Fumaça BBQ",
      description: "Cebola caramelizada e molho BBQ artesanal"
    },
    {
      src: "https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/963c07ff-56bc-4a19-956d-c9f2a6a78190/1762990547122_9lptt8sen8_Inferno_Burger.webp",
      title: "Inferno Burger",
      description: "Picante com molho de pimenta defumada"
    },
    {
      src: "https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/imagens.website.creation/963c07ff-56bc-4a19-956d-c9f2a6a78190/logo_1762990552928_0.png",
      title: "Nossa Marca",
      description: "Identidade visual Brasa Urbana"
    }
  ]

  const GalleryPageContent = () => (
    <div className="pt-32 pb-16">
      <div className="section-padding">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="heading-medium text-gradient mb-6">Galeria</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Confira nossos hambúrgueres artesanais em ação. Cada imagem conta a história 
              do sabor que vem do fogo e da paixão pela arte de grelhar.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-dark-800 border border-primary-500 rounded-2xl p-6 md:p-8 mb-12 text-center"
          >
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Image className="h-8 w-8 text-primary-400" />
              <h2 className="text-2xl font-bold text-white">Nossos Hambúrgueres</h2>
              <Image className="h-8 w-8 text-primary-400" />
            </div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Cada foto captura a essência do nosso trabalho artesanal: 
              a crosta dourada, a suculência da carne e o sabor defumado único.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-dark-800 border border-dark-700 hover:border-primary-500 transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <motion.img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                    whileHover={{ scale: 1.05 }}
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-60" />
                  
                  <div className="absolute inset-0 bg-primary-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                      <Flame className="h-8 w-8 text-white" />
                    </div>
                  </motion.div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                    {image.title}
                  </h3>
                  <p className="text-gray-300">{image.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-dark-800 border border-dark-700 rounded-2xl p-8 md:p-12 mb-12 text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center justify-center">
              <Play className="h-6 w-6 mr-2 text-primary-400" />
              O Processo Artesanal
            </h3>
            <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Nosso processo começa com a seleção criteriosa da carne premium. 
              Cada hambúrguer é prensado na chapa de ferro em alta temperatura, 
              criando aquela crosta dourada irresistível. Em seguida, vai direto 
              para a brasa, onde ganha o toque defumado que é nossa marca registrada.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="