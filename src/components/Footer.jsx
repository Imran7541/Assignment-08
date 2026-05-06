import Link from "next/link";
import Image from "next/image";


const Footer = () => {
  return (
    <footer className="relative mt-10 bg-green-100">
  <div className="mt-6 h-px w-full  from-transparent via-gray-300 to-transparent dark:via-white/10" />

   
      <div className="absolute inset-0 -z-10 bg-white dark:bg-[#0a0a0b]" />

      
      <div
        className="absolute inset-0 -z-10 bg-linear-to-tr 
        from-purple-500/5 via-transparent to-blue-500/5 
        dark:from-purple-500/10 dark:to-blue-500/10 blur-3xl"
      />

      
      <div className="max-w-7xl mx-auto px-6 py-16">
      
        <div className="grid grid-cols-1 md:grid-cols-3 gap-auto">
         
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src="/logo(9).png"
                alt="livestock-booking-platfrom logo"
                width={60}
                height={60}
                className="dark:brightness-200"
              />
              <h2 className="text-xl font-semibold tracking-tight text-black dark:text-white">
                Livestock Booking Platform
              </h2>
            </div>

            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 max-w-xs">
              Trusted online marketplace for Qurbani animals. Healthy livestock,
              transparent pricing, and doorstep delivery.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-black dark:text-white mb-4">Explore    
            </h3>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <Link
                  href="/"
                  className="hover:text-black dark:hover:text-white transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/all-animals"
                  className="hover:text-black dark:hover:text-white transition"
                >
                  All Animals
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-black dark:hover:text-white transition"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
          {/* CTA Block */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-black dark:text-white">
             Contact
            </h3>

            <div className="tex-sm">
              <p><location/>Bangladesh</p>
              <p>+880 1234-567890</p>
              <p>support@qurbanihat.com</p>
            </div>

         
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 h-px w-full bg-linear-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />

        {/* Bottom */}
       
      </div>
    </footer>
  );
};

export default Footer;
