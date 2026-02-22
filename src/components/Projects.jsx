import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-black text-white px-6 py-40 border-t border-gray-900"
    >
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-light tracking-tight mb-20"
        >
          Crafting the Future
        </motion.h2>

        <div className="space-y-32">

          {/* COMPANY PROJECT */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            <div>
              <img
                src="/company-project.jpg"
                alt="Microservices Platform"
                className="rounded-xl border border-gray-800 shadow-lg"
              />
            </div>

            <div>
              <h3 className="text-2xl text-blue-400 font-medium">
                High-Load Microservices Platform
              </h3>

              <p className="mt-6 text-gray-300 leading-relaxed">
                Production backend system supporting high concurrent traffic.
                Designed within a microservice architecture using asynchronous Python.
              </p>

              <div className="mt-8 space-y-3 text-sm text-gray-400">
                <p><span className="text-white">Stack:</span> Python, FastAPI, PostgreSQL, Redis, RabbitMQ, Docker</p>
                <p><span className="text-white">Focus:</span> Service boundary redesign, query optimization, caching strategy</p>
                <p><span className="text-white">Responsibility:</span> Backend development & production incident handling</p>
              </div>

              <p className="mt-8 text-gray-600 text-sm">
                * Source code is proprietary and cannot be shared.
              </p>
            </div>
          </motion.div>

          {/* PERSONAL PROJECT */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            <div className="order-2 md:order-1">
              <h3 className="text-2xl text-blue-400 font-medium">
                Distributed Task Processing System
              </h3>

              <p className="mt-6 text-gray-300 leading-relaxed">
                Personal backend project simulating distributed task execution
                with message queues and asynchronous workers.
              </p>

              <div className="mt-8 space-y-3 text-sm text-gray-400">
                <p><span className="text-white">Stack:</span> Python, FastAPI, PostgreSQL, Redis, RabbitMQ</p>
                <p><span className="text-white">Focus:</span> Async processing, queue-based task distribution</p>
              </div>

              <div className="mt-10 flex gap-6">
                <a
                  href="https://github.com/ellen0825/senior-fastapi-template.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-blue-500 text-black rounded-md font-medium hover:bg-blue-400 transition"
                >
                  GitHub
                </a>

                <a
                  href="https://your-live-demo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-gray-700 text-gray-300 rounded-md hover:border-blue-400 hover:text-blue-400 transition"
                >
                  Live Demo
                </a>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <img
                src="/personal-project.jpg"
                alt="Task Processing System"
                className="rounded-xl border border-gray-800 shadow-lg"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}