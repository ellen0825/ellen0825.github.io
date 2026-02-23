import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="bg-black text-white px-6 py-40 relative"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-24">

        {/* LEFT — PROFILE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-light tracking-tight mb-10">
            About Me
          </h2>

          <p className="text-gray-300 leading-relaxed">
            I’m a Full-Stack Developer with **5 years of experience** in both backend and frontend development. I specialize in building **reliable, scalable systems** using **FastAPI**, **Spring Boot**, and **React**. I’m focused on solving technical challenges and creating efficient, real-world solutions.
          </p>

          <p className="mt-6 text-gray-400 leading-relaxed">
            I value straightforward work, responsibility, and collaboration. Always looking for ways to improve my skills and deliver clean, performant code.
          </p>

          <p className="mt-6 text-gray-500 leading-relaxed">
            Recently relocated to **St. Petersburg**, I’m actively looking for **remote or hybrid backend roles**, where I can contribute to dynamic, impactful projects.
          </p>
        </motion.div>

        {/* RIGHT — STRUCTURED EXPERIENCE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="border-l border-gray-800 pl-8">
            <h3 className="text-blue-400 text-sm tracking-widest uppercase mb-3">
              Backend Focus
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              **High-load REST API development**, building **asynchronous Python systems**, and creating **microservice-based architectures**. Designing scalable systems that ensure high availability.
            </p>
          </div>

          <div className="border-l border-gray-800 pl-8">
            <h3 className="text-blue-400 text-sm tracking-widest uppercase mb-3">
              Data & Performance
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              **PostgreSQL optimization** through **execution plan analysis**, **indexing**, and **raw SQL optimization**. Using **Redis** for caching to handle load and improve performance.
            </p>
          </div>

          <div className="border-l border-gray-800 pl-8">
            <h3 className="text-blue-400 text-sm tracking-widest uppercase mb-3">
              Production Experience
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Managing **CI/CD pipelines**, ensuring **Docker deployments** are efficient, and leading **production incident investigations**. Focused on **reliability** and **long-term stability**.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}