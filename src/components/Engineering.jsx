import { motion } from "framer-motion";

export default function Engineering() {
  return (
    <section
      id="engineering"
      className="min-h-screen bg-black px-6 py-32 flex items-center"
    >
      <div className="max-w-6xl mx-auto w-full">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight">
          Building Resilience Through Code
          </h2>

          <div className="mt-6 h-[1px] w-28 bg-blue-500" />

          <p className="mt-8 text-gray-400 max-w-2xl leading-relaxed">
            My approach to backend engineering is driven by the belief that systems should not only perform efficiently, but also be resilient, scalable, and maintainable over time. Every decision I make is guided by a deep commitment to clarity, quality, and long-term sustainability.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-20">

          {/* LEFT COLUMN */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="space-y-16"
          >
            <div>
              <h3 className="text-white text-xl mb-4">Architecture</h3>
              <p className="text-gray-400 leading-relaxed">
                My focus is on creating **microservices architectures** that are both clear and effective. I prioritize thoughtful service boundaries, ensuring backward compatibility and minimizing coupling, while always planning for fault isolation and graceful recovery.
              </p>
            </div>

            <div>
              <h3 className="text-white text-xl mb-4">Performance Engineering</h3>
              <p className="text-gray-400 leading-relaxed">
                I have a strong focus on **performance**. Optimizing **PostgreSQL** execution plans and redesigning indexing strategies to handle high-load environments has been a core part of my work. Additionally, **Redis caching** has been key in minimizing database pressure and improving overall system efficiency.
              </p>
            </div>
          </motion.div>

          {/* RIGHT COLUMN */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-16"
          >
            <div>
              <h3 className="text-white text-xl mb-4">Distributed Systems</h3>
              <p className="text-gray-400 leading-relaxed">
                I’ve designed and implemented **event-driven systems** using tools like **RabbitMQ** and **Kafka**. By structuring communication flows asynchronously, I ensure systems can scale efficiently, handle real-time data, and maintain high reliability under pressure.
              </p>
            </div>

            <div>
              <h3 className="text-white text-xl mb-4">Production Ownership</h3>
              <p className="text-gray-400 leading-relaxed">
                I believe engineering doesn’t stop after deployment. I take full **ownership of production systems**, investigating incidents, performing **root-cause analysis**, and driving **reliability improvements** that ensure systems perform with stability and efficiency over time.
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}