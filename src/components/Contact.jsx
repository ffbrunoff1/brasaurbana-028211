import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import ReCAPTCHA from 'react-google-recaptcha'
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Flame } from 'lucide-react'

export default function Contact() {
  const recaptchaRef = useRef(null)
  const [status, setStatus] = useState({ message: '', isError: false })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      const token = await recaptchaRef.current.executeAsync()
      
      const payload = {
        ...formData,
        recipientEmail: "",
        token: token
      }

      const response = await fetch('https://qotdwocbcoirjlqjkjhq.supabase.co/functions/v1/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      })

      if (response.ok) {
        setStatus({ 
          message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.', 
          isError: false 
        })
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      } else {
        setStatus({ 
          message: 'Erro ao enviar mensagem. Tente novamente.', 
          isError: true 
        })
      }

      recaptchaRef.current.reset()
    } catch (error) {
      setStatus({ 
        message: 'Erro ao enviar mensagem. Tente novamente.', 
        isError: true 
      })
    }
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      content: "(00) 00000-0000",
      description: "Ligue para fazer seu pedido"
    },
    {
      icon: MapPin,
      title: "Localização", 
      content: "São Paulo, SP",
      description: "Venha nos visitar"
    },
    {
      icon: Clock,
      title: "Funcionamento",
      content: "Seg - Dom: 18h às 02h",
      description: "Horário de atendimento"
    },
    {
      icon: Flame,
      title: "Especialidade",
      content: "Smash Burger na Brasa",
      description: "Nossa paixão"
    }
  ]

  const ContactContent = () => (
    <div className="section-padding">
      <div className="container-custom">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading-medium text-gradient mb-6">Entre em Contato</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Pronto para experimentar o verdadeiro sabor que vem do fogo? 
            Entre em contato conosco ou faça seu pedido agora mesmo.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Informações de Contato</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-gradient-fire w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white text-lg">{info.title}</h4>
                        <p className="text-primary-400 font-medium">{info.content}</p>
                        <p className="text-gray-400 text-sm">{info.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-dark-800 border border-primary-500 rounded-xl p-6">
              <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                <Flame className="h-6 w-6 mr-2 text-primary-400" />
                Siga-nos nas Redes
              </h4>
              <div className="flex space-x-4">
                <a href="#" className="bg-dark-700 hover:bg-primary-600 w-12 h-12 rounded-lg flex items-center justify-center transition-colors">
                  <Instagram className="h-6 w-6 text-white" />
                </a>
                <a href="#" className="bg-dark-700 hover:bg-primary-600 w-12 h-12 rounded-lg flex items-center justify-center transition-colors">
                  <Facebook className="h-6 w-6 text-white" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="card-dark"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Envie uma Mensagem</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Nome *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-400 focus:border-primary-500 focus:outline-none transition-colors"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-400 focus:border-primary-500 focus:outline-none transition-colors"
                    placeholder="(11) 99999-9999"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-400 focus:border-primary-500 focus:outline-none transition-colors"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Assunto
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white focus:border-primary-500 focus:outline-none transition-colors"
                >
                  <option value="">Selecione um assunto</option>
                  <option value="pedido">Fazer Pedido</option>
                  <option value="duvida">Dúvida sobre Produtos</option>
                  <option value="delivery">Delivery</option>
                  <option value="feedback">Feedback</option>
                  <option value="outros">Outros</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Mensagem *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-400 focus:border-primary-500 focus:outline-none transition-colors resize-none"
                  placeholder="Conte-nos como podemos ajudar..."
                ></textarea>
              </div>

              {status.message && (
                <div className={`p-4 rounded-lg ${status.isError ? 'bg-red-900/20 border border-red-500 text-red-400' : 'bg-green-900/20 border border-green-500 text-green-400'}`}>
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                className="w-full btn-primary"
              >
                Enviar Mensagem
              </button>

              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey="6Lc7xpsrAAAAAKh0I1boee2JN1oO8iF_yd0ihl79"
                size="invisible"
              />
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-fire rounded-2xl p-8 md:p-12 text-center"
        >
          <Flame className="h-16 w-16 text-white mx-auto mb-6 animate-pulse" />
          <h3 className="text-3xl font-bold text-white mb-4">
            Pronto para experimentar?
          </h3>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Faça seu pedido agora e experimente o verdadeiro sabor que vem do fogo. 
            Delivery rápido e hambúrgueres sempre fresquinhos!
          </p>
          <a 
            href="https://wa.me/5500000000000"
            className="bg-white text-primary-600 px-8 py-4 rounded-lg font-bold text-lg hover:scale-105 transition-transform inline-flex items-center space-x-2"
          >
            <Phone className="h-5 w-5" />
            <span>Pedir pelo WhatsApp</span>
          </a>
        </motion.div>
      </div>
    </div>
  )

  return (
    <section className="bg-gradient-dark relative overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500 rounded-full filter blur-3xl opacity-5"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      <ContactContent />
    </section>
  )
}