import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Flame, Phone } from 'lucide-react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { name: 'Brasa Smash', slug: 'brasa-smash', description: 'Duplo smash na chapa de ferro' },
    { name: 'Fumaça BBQ', slug: 'fumaca-bbq', description: 'Cebola caramelizada, bacon e molho BBQ' },
    { name: 'Inferno Burger', slug: 'inferno-burger', description: 'Picante, com molho de pimenta defumada' }
  ]

  const navigation = [
    { name: 'Início', path: '/' },
    { name: 'Cardápio', path: '/cardapio', hasDropdown: true },
    { name: 'Nossa História', path: '/sobre' },
    { name: 'Galeria', path: '/galeria' },
    { name: 'Contato', path: '/contato' }
  ]

  const HeaderContent = () => (
    <div className="container-custom flex items-center justify-between h-20">
      <Link to="/" className="flex items-center space-x-3">
        <motion.img 
          src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/imagens.website.creation/963c07ff-56bc-4a19-956d-c9f2a6a78190/logo_1762990552928_0.png"
          alt="Brasa Urbana"
          className="h-12 w-auto"
          whileHover={{ scale: 1.05 }}
        />
        <div className="hidden md:block">
          <h1 className="text-2xl font-black text-gradient">Brasa Urbana</h1>
          <p className="text-xs text-primary-400 font-medium">O sabor que vem do fogo</p>
        </div>
      </Link>

      <nav className="hidden lg:flex items-center space-x-8">
        {navigation.map((item) => (
          <div key={item.name} className="relative">
            {item.hasDropdown ? (
              <div 
                className="relative"
                onMouseEnter={() => setIsMenuOpen(true)}
                onMouseLeave={() => setIsMenuOpen(false)}
              >
                <button className="flex items-center space-x-1 px-4 py-2 rounded-lg transition-all duration-300 hover:text-primary-400 hover:bg-dark-800">
                  <span className="font-semibold">{item.name}</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                
                <AnimatePresence>
                  {isMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-dark-800 border border-dark-700 rounded-xl shadow-2xl overflow-hidden z-50"
                    >
                      <div className="p-4">
                        <h3 className="text-primary-400 font-bold mb-4 flex items-center">
                          <Flame className="h-5 w-5 mr-2" />
                          Nossos Hambúrguers
                        </h3>
                        {menuItems.map((burger) => (
                          <Link
                            key={burger.slug}
                            to={`/produto/${burger.slug}`}
                            className="block p-3 rounded-lg hover:bg-dark-700 transition-all duration-300 group"
                          >
                            <div className="font-semibold text-white group-hover:text-primary-400 transition-colors">
                              {burger.name}
                            </div>
                            <div className="text-sm text-gray-400 mt-1">
                              {burger.description}
                            </div>
                          </Link>
                        ))}
                        <Link
                          to="/cardapio"
                          className="block mt-4 p-3 bg-gradient-fire text-white text-center font-bold rounded-lg hover:scale-105 transition-transform"
                        >
                          Ver Cardápio Completo
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                to={item.path}
                className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:text-primary-400 hover:bg-dark-800 ${
                  location.pathname === item.path ? 'text-primary-400 bg-dark-800' : 'text-white'
                }`}
              >
                {item.name}
              </Link>
            )}
          </div>
        ))}
      </nav>

      <div className="flex items-center space-x-4">
        <Link 
          to="/pedidos"
          className="hidden md:flex items-center space-x-2 btn-primary"
        >
          <Phone className="h-5 w-5" />
          <span>Pedir Agora</span>
        </Link>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg hover:bg-dark-800 transition-colors"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
    </div>
  )

  return (
    <>
      <motion.header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-dark-900/95 backdrop-blur-lg border-b border-dark-700' 
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <HeaderContent />
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-dark-900/90 backdrop-blur-sm" />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              className="absolute right-0 top-0 h-full w-80 max-w-sm bg-dark-800 border-l border-dark-700 p-6 overflow-y-auto"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-gradient">Menu</h2>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-lg hover:bg-dark-700 transition-colors"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                <nav className="space-y-4">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      <Link
                        to={item.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${
                          location.pathname === item.path 
                            ? 'text-primary-400 bg-dark-700' 
                            : 'text-white hover:text-primary-400 hover:bg-dark-700'
                        }`}
                      >
                        {item.name}
                      </Link>
                      
                      {item.hasDropdown && (
                        <div className="ml-4 mt-2 space-y-2">
                          {menuItems.map((burger) => (
                            <Link
                              key={burger.slug}
                              to={`/produto/${burger.slug}`}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block px-4 py-2 text-sm text-gray-300 hover:text-primary-400 hover:bg-dark-700 rounded-lg transition-all"
                            >
                              {burger.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>

                <Link
                  to="/pedidos"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-center btn-primary"
                >
                  Pedir Agora
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}