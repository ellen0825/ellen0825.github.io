import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-black px-6 py-32 flex items-center"
    >
      <div className="max-w-6xl mx-auto w-full">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight">
            Contact
          </h2>

          <div className="mt-6 h-[1px] w-24 bg-blue-500" />
        </motion.div>

        {/* CONTENT GRID */}
        <div className="grid md:grid-cols-2 gap-20">

          {/* LEFT — Availability */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl text-white font-medium mb-6 tracking-wide">
              Availability
            </h3>

            <p className="text-gray-400 leading-relaxed max-w-xl">
              I am currently looking for **remote** backend engineering roles where I can leverage my skills in **building scalable, performant, and resilient systems**. With my expertise in **distributed architectures** and **performance optimization**, I am eager to contribute to teams working on high-impact projects.
            </p>

            <p className="mt-6 text-gray-500 text-sm leading-relaxed">
              If you're seeking someone to work on **high-load systems**, **performance optimization**, or **complex production issues**, I’d be excited to discuss how I can help make a difference in your team.
            </p>
          </motion.div>

          {/* RIGHT — Direct Contact */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl text-white font-medium mb-6 tracking-wide">
              Direct Communication
            </h3>

            <div className="space-y-5 text-gray-400">

              <div>
                <p className="text-gray-500 text-sm">Email</p>
                <a
                  href="mailto:ellenmartinelli0825@outlook.com"
                  className="text-blue-400 hover:text-blue-300 transition duration-300"
                >
                  ellenmartinelli0825@outlook.com
                </a>
              </div>

              <div>
                <p className="text-gray-500 text-sm">Location</p>
                <p>St. Petersburg, Russia</p>
              </div>

              <div>
                <p className="text-gray-500 text-sm">Work Format</p>
                <p>Remote / Hybrid</p>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}