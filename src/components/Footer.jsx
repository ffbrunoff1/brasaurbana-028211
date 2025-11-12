import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Flame, Phone, Mail, MapPin, Instagram, Facebook, Clock } from 'lucide-react'

export default function Footer() {
  const FooterContent = () => (
    <footer className="bg-dark-900 border-t border-dark-700 pb-20">
      <div className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-3">
                <img 
                  src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/imagens.website.creation/963c07ff-56bc-4a19-956d-c9f2a6a78190/logo_1762990552928_0.png"
                  alt="Brasa Urbana"
                  className="h-12 w-auto"
                />
                <div>
                  <h3 className="text-xl font-black text-gradient">Brasa Urbana</h3>
                  <p className="text-xs text-primary-400 font-medium">O sabor que vem do fogo</p>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed">
                Hambúrguer artesanal feito na chapa quente e finalizado na brasa, 
                com bordas crocantes e sabor defumado único.
              </p>
              
              <div className="flex items-center space-x-4">
                <a 
                  href="#"
                  className="bg-dark-800 hover:bg-primary-600 w-10 h-10 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Instagram className="h-5 w-5 text-white" />
                </a>
                <a 
                  href="#"
                  className="bg-dark-800 hover:bg-primary-600 w-10 h-10 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Facebook className="h-5 w-5 text-white" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="space-y-4"
            >
              <h4 className="text-lg font-bold text-white flex items-center">
                <Flame className="h-5 w-5 mr-2 text-primary-400" />
                Navegação
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-300 hover:text-primary-400 transition-colors">
                    Início
                  </Link>
                </li>
                <li>
                  <Link to="/cardapio" className="text-gray-300 hover:text-primary-400 transition-colors">
                    Cardápio
                  </Link>
                </li>
                <li>
                  <Link to="/sobre" className="text-gray-300 hover:text-primary-400 transition-colors">
                    Nossa História
                  </Link>
                </li>
                <li>
                  <Link to="/galeria" className="text-gray-300 hover:text-primary-400 transition-colors">
                    Galeria
                  </Link>
                </li>
                <li>
                  <Link to="/contato" className="text-gray-300 hover:text-primary-400 transition-colors">
                    Contato
                  </Link>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              <h4 className="text-lg font-bold text-white">Nossos Burgers</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/produto/brasa-smash" className="text-gray-300 hover:text-primary-400 transition-colors">
                    Brasa Smash
                  </Link>
                </li>
                <li>
                  <Link to="/produto/fumaca-bbq" className="text-gray-300 hover:text-primary-400 transition-colors">
                    Fumaça BBQ
                  </Link>
                </li>
                <li>
                  <Link to="/produto/inferno-burger" className="text-gray-300 hover:text-primary-400 transition-colors">
                    Inferno Burger
                  </Link>
                </li>
                <li>
                  <Link to="/pedidos" className="text-primary-400 hover:text-primary-300 transition-colors font-semibold">
                    Fazer Pedido
                  </Link>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-4"
            >
              <h4 className="text-lg font-bold text-white">Contato</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="h-5 w-5 text-primary-400" />
                  <span>(00) 00000-0000</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="h-5 w-5 text-primary-400" />
                  <span>São Paulo, SP</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Clock className="h-5 w-5 text-primary-400" />
                  <span>Seg - Dom: 18h às 02h</span>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="pt-8 border-t border-dark-700 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0"
          >
            <p className="text-gray-400 text-sm">
              © 2024 Brasa Urbana. Todos os direitos reservados.
            </p>
            <p className="text-gray-400 text-sm">
              Criado com <em><a href="https://papum.ai" className="text-primary-400 hover:text-primary-300 transition-colors">Papum</a></em>
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )

  return <FooterContent />
}