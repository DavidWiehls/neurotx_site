import { Link } from 'react-router-dom';
import { Brain, Github, Twitter, Linkedin, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="bg-indigo-600 p-1.5 rounded-lg">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <span className="text-white font-bold text-xl tracking-tight">NeuroTX</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Demystifying Neural Integration. Transitioning BCI from science fiction to a foundational life skill for the next generation.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Platform</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/product" className="hover:text-white transition-colors">Curriculum</Link></li>
              <li><Link to="/product" className="hover:text-white transition-colors">Hardware</Link></li>
              <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link to="/schools" className="hover:text-white transition-colors">For Schools</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/market" className="hover:text-white transition-colors">Market Data</Link></li>
              <li><Link to="/investors" className="hover:text-white transition-colors">Investors</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Mission & Ethics</Link></li>
              <li><Link to="/partners" className="hover:text-white transition-colors">Partners</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <Link to="/contact" title="WeChat" className="text-gray-400 hover:text-white transition-colors">
                <MessageCircle className="h-5 w-5" />
              </Link>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" title="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-4">
              <Link to="/contact" className="text-indigo-400 hover:text-indigo-300 text-sm font-medium">
                Contact Us &rarr;
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} NeuroTX Education. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-gray-500 text-xs">
            <Link to="/data-ethics" className="hover:text-gray-300">Data Ethics</Link>
            <span className="text-gray-600">Privacy Policy (Coming Soon)</span>
            <span className="text-gray-600">Terms of Service (Coming Soon)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
