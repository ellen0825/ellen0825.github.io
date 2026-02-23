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
            I’m a Full-Stack Developer with 5 years of experience in both backend and frontend development. I specialize in building reliable, scalable systems with **FastAPI**, **Spring Boot**, and **React**. My focus is on solving technical problems and creating efficient solutions that work well in real-world applications.
          </p>

          <p className="mt-6 text-gray-400 leading-relaxed">
            I prefer straightforward work and value responsibility and collaboration. I’m always looking for ways to improve my skills and deliver clean, performant code.
          </p>

          <p className="mt-6 text-gray-500 leading-relaxed">
            Recently relocated to **St. Petersburg**, I’m now seeking opportunities in **remote or hybrid backend roles**, where I can continue growing and contributing to dynamic projects.
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
              **High-load REST API development**, building **asynchronous Python systems**, and **microservice-based architectures**. Designing systems that scale with traffic and ensure high availability.
            </p>
          </div>

          <div className="border-l border-gray-800 pl-8">
            <h3 className="text-blue-400 text-sm tracking-widest uppercase mb-3">
              Data & Performance
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              **PostgreSQL performance optimization** through **execution plan analysis**, **indexing strategies**, and **raw SQL optimization**. **Redis** caching to handle load and improve query performance.
            </p>
          </div>

          <div className="border-l border-gray-800 pl-8">
            <h3 className="text-blue-400 text-sm tracking-widest uppercase mb-3">
              Production Experience
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Building and managing **CI/CD pipelines**, ensuring **Docker deployments** are seamless and efficient, and leading **production incident investigations**. Focused on **reliability improvements** and long-term system stability.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}