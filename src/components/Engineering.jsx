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
            My approach to backend engineering is built on the belief that systems must be both efficient and resilient. I prioritize creating **scalable**, **maintainable**, and **performant** systems. Each decision I make is focused on long-term sustainability and clarity, ensuring that the systems I build can evolve and scale over time.
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
                I specialize in designing **microservices architectures** that prioritize scalability and maintainability. Focusing on **clear service boundaries**, **fault isolation**, and **backward compatibility**, I aim to ensure that each component of the system can evolve independently while minimizing dependencies.
              </p>
            </div>

            <div>
              <h3 className="text-white text-xl mb-4">Performance Engineering</h3>
              <p className="text-gray-400 leading-relaxed">
                Optimizing **PostgreSQL** performance is at the core of my work. I focus on **execution plan analysis**, **indexing strategies**, and **raw SQL optimization** to ensure systems can handle high loads. Additionally, **Redis caching** plays a crucial role in reducing database load and improving overall system performance.
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
                I have extensive experience with **event-driven systems**, utilizing tools like **RabbitMQ** and **Kafka**. These technologies enable me to build scalable, real-time data processing systems that can handle complex workflows and maintain reliability under high pressure.
              </p>
            </div>

            <div>
              <h3 className="text-white text-xl mb-4">Production Ownership</h3>
              <p className="text-gray-400 leading-relaxed">
                I take full **ownership of production systems**, focusing on **incident investigation**, **root-cause analysis**, and driving **reliability improvements**. This hands-on approach ensures that systems perform at their best over time, with a strong emphasis on stability and long-term success.
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}