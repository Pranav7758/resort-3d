"use client";


export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-deep-dark text-stark-white pt-24 pb-8 relative overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-turquoise-500/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <a href="#" className="flex flex-col items-start mb-6">
              <span className="font-serif text-2xl tracking-ultra-wide font-semibold leading-tight">
                AZURE HAVEN
              </span>
              <span className="text-[9px] tracking-[0.4em] uppercase text-turquoise-400">
                Resort & Spa
              </span>
            </a>
            <p className="font-sans text-xs text-sand-200/50 leading-relaxed max-w-xs">
              Where the horizon meets luxury. An exclusive sanctuary crafted for the world&apos;s most discerning travelers.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="font-sans text-[10px] tracking-[0.2em] uppercase text-turquoise-600 mb-6 font-bold">
              Explore
            </h4>
            <ul className="space-y-4 font-sans text-sm text-sand-200/70">
              {['Villas & Suites', 'Dining Experiences', 'Holistic Spa', 'Adventures', 'Offers'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-turquoise-400 transition-colors relative group inline-block">
                    {link}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-turquoise-400 transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h4 className="font-sans text-[10px] tracking-[0.2em] uppercase text-turquoise-600 mb-6 font-bold">
              Contact
            </h4>
            <ul className="space-y-4 font-sans text-sm text-sand-200/70">
              <li>
                <p className="text-stark-white mb-1">Reservations</p>
                <a href="tel:+1234567890" className="hover:text-turquoise-400 transition-colors">
                  +1 (800) 123-4567
                </a>
              </li>
              <li>
                <p className="text-stark-white mb-1">Concierge</p>
                <a href="mailto:concierge@azurehaven.com" className="hover:text-turquoise-400 transition-colors">
                  concierge@azurehaven.com
                </a>
              </li>
              <li className="pt-2">
                <p>1 Azure Way, Paradise Island</p>
                <p>Maldives, 00000</p>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div className="col-span-1">
            <h4 className="font-sans text-[10px] tracking-[0.2em] uppercase text-turquoise-600 mb-6 font-bold">
              Follow Us
            </h4>
            <div className="flex flex-col space-y-4 font-sans text-[11px] tracking-[0.2em] uppercase text-sand-200/70">
              {['Instagram', 'Facebook', 'Twitter', 'Pinterest'].map((social) => (
                <a 
                  key={social} 
                  href="#" 
                  className="hover:text-turquoise-400 transition-colors relative group inline-block w-fit"
                >
                  {social}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-turquoise-400 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-[10px] tracking-[0.1em] text-sand-200/40 uppercase">
            &copy; {currentYear} Azure Haven Resort. All rights reserved.
          </p>
          <div className="flex gap-6 font-sans text-[10px] tracking-[0.1em] text-sand-200/40 uppercase">
            <a href="#" className="hover:text-stark-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-stark-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
