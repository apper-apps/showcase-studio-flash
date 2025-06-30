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
    <footer className="bg-gradient-to-br from-secondary via-slate-800 to-slate-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center">
                <ApperIcon name="Briefcase" className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold gradient-text">
                Showcase Studio
              </h3>
            </div>
            <p className="text-slate-300 leading-relaxed mb-6 max-w-md">
              A curated collection of digital projects showcasing modern design principles 
              and cutting-edge technology across multiple categories.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 bg-white/10 hover:bg-gradient-to-r hover:from-primary hover:to-accent rounded-lg flex items-center justify-center transition-all duration-300"
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
          >
            <h4 className="text-lg font-display font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-300 hover:text-white hover:gradient-text transition-all duration-200"
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
          >
            <h4 className="text-lg font-display font-bold mb-6">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-slate-300">
                <ApperIcon name="Mail" className="w-4 h-4" />
                <span>hello@showcasestudio.com</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <ApperIcon name="MapPin" className="w-4 h-4" />
                <span>Digital Studio, Global</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <ApperIcon name="Clock" className="w-4 h-4" />
                <span>Always Open</span>
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
          className="border-t border-slate-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-slate-400 text-sm">
            © 2024 Showcase Studio. Crafted with passion and modern technology.
          </p>
          <div className="flex items-center gap-6 text-sm text-slate-400">
            <a href="/privacy" className="hover:text-white transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-white transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer