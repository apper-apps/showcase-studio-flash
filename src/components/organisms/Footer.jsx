import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'

const Footer = () => {
  const socialLinks = [
    { name: 'GitHub', icon: 'Github', url: 'https://github.com' },
    { name: 'LinkedIn', icon: 'Linkedin', url: 'https://linkedin.com' },
    { name: 'Twitter', icon: 'Twitter', url: 'https://twitter.com' },
    { name: 'Email', icon: 'Mail', url: 'mailto:hello@showcasestudio.com' }
  ]

  const quickLinks = [
    { name: 'All Projects', href: '/' },
    { name: 'Apps', href: '/category/apps' },
    { name: 'Games', href: '/category/games' },
    { name: 'E-Commerce', href: '/category/ecommerce' },
    { name: 'Websites', href: '/category/websites' }
  ]

  return (
<footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white py-12 sm:py-16 relative overflow-hidden">
      {/* AI Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-purple-500/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="sm:col-span-2 lg:col-span-2"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
                <ApperIcon name="Cpu" className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                AI Studio Portfolio
              </h3>
            </div>
            <p className="text-slate-300 leading-relaxed mb-6 max-w-md text-sm sm:text-base">
              Showcasing the future of intelligent software development with AI-powered innovations 
              and cutting-edge technology solutions.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 bg-white/10 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 rounded-lg flex items-center justify-center transition-all duration-300 backdrop-blur-sm border border-white/10"
                >
                  <ApperIcon name={link.icon} className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-display font-bold mb-4 sm:mb-6">Explore</h4>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-300 hover:text-white hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 hover:bg-clip-text hover:text-transparent transition-all duration-200 text-sm sm:text-base block py-1"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-display font-bold mb-4 sm:mb-6">Connect</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-slate-300 text-sm sm:text-base">
                <ApperIcon name="Mail" className="w-4 h-4 text-blue-400" />
                <span>ai@studioportfolio.com</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300 text-sm sm:text-base">
                <ApperIcon name="Globe" className="w-4 h-4 text-purple-400" />
                <span>Global Digital Network</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300 text-sm sm:text-base">
                <ApperIcon name="Zap" className="w-4 h-4 text-cyan-400" />
                <span>AI-Powered 24/7</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="border-t border-slate-700/50 mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <p className="text-slate-400 text-xs sm:text-sm text-center sm:text-left">
            © 2024 AI Studio Portfolio. Engineered with intelligence and innovation.
          </p>
          <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-400">
            <a href="/privacy" className="hover:text-white hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 hover:bg-clip-text hover:text-transparent transition-all duration-200">
              Privacy
            </a>
            <a href="/terms" className="hover:text-white hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 hover:bg-clip-text hover:text-transparent transition-all duration-200">
              Terms
            </a>
            <span className="flex items-center gap-1">
              <ApperIcon name="Heart" className="w-3 h-3 text-red-400" />
              AI-Made
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer