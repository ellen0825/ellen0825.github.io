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
            I am a Senior Backend Engineer with **5+ years of commercial experience** in designing and building high-performance, scalable backend systems. With a focus on **Python** (FastAPI, asynchronous programming), **microservices architecture**, and **PostgreSQL performance optimization**, I specialize in crafting systems that power real-time, mission-critical applications.
          </p>

          <p className="mt-6 text-gray-400 leading-relaxed">
            Having spent most of my career in **Shanghai**, I’ve worked in fast-paced, high-load environments, mastering **event-driven systems** with **RabbitMQ** and **Kafka**, and optimizing databases for peak performance. From **service decomposition** to solving complex production issues, I am passionate about building robust, scalable solutions.
          </p>

          <p className="mt-6 text-gray-500 leading-relaxed">
            Recently relocated to **St. Petersburg**, I am now seeking new opportunities in **remote or hybrid backend roles**, where I can contribute my expertise and continue growing in a dynamic environment.
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