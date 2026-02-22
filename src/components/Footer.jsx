import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-900 px-6 py-16">
      <div className="max-w-6xl mx-auto">

        {/* Top Line */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10"
        >
          {/* LEFT */}
          <div>
            <h3 className="text-white text-2xl font-light tracking-wide">
              Ellen Martinelli
            </h3>

            <p className="mt-3 text-gray-500 text-sm max-w-md leading-relaxed">
              Architecting backend systems with precision, scalability, and resilience in mind. Focused on long-term sustainability and performance.
            </p>
          </div>

          {/* RIGHT */}
          <div className="space-y-2 text-right">
            <p className="text-gray-500 text-sm">
              St. Petersburg, Russia
            </p>

            <a
              href="mailto:ellenmartinelli0825@outlook.com"
              className="text-blue-400 hover:text-blue-300 transition duration-300 text-sm"
            >
              ellenmartinelli0825@outlook.com
            </a>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="mt-14 h-[1px] bg-gray-900" />

        {/* Bottom Line */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-xs tracking-wide">
          <p>
            © {new Date().getFullYear()} Ellen Martinelli. All rights reserved.
          </p>

          <p className="mt-3 md:mt-0">
            Crafted with precision and long-term architectural intent.
          </p>
        </div>

      </div>
    </footer>
  );
}