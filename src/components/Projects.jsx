import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-black text-white px-6 py-40 relative"
    >
      <div className="w-full">
        {/* Title */}
        <motion.h2
         initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16"
        >
           <h2 className="text-4xl font-light tracking-tight mb-10 ">
                Crafting the Future
          </h2>

         
        </motion.h2>

        {/* Project Cards */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          {/* PROJECT CARD 1 */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="bg-gray-800 p-6 rounded-xl shadow-lg w-full"
          >
            <h3 className="text-xl text-blue-400 font-medium">
              XL Release Kubernetes deployment
            </h3>
            <p className="mt-2 text-gray-300 text-sm">
              Helm chart for XL Release on Kubernetes to automate and manage release pipelines.
            </p>

            <div className="mt-4 text-sm text-gray-400">
              <p><span className="text-white">Stack:</span> Kubernetes, Helm, XL Release, Docker</p>
              <p><span className="text-white">Focus:</span> CI/CD, cloud-native deployments</p>
              <p><span className="text-white">Responsibility:</span> Helm chart & Kubernetes setup</p>
            </div>

            <div className="mt-6 flex justify-between gap-4">
              <a
                href="https://github.com/ellen0825/xl-release-kubernetes-deployment"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 bg-blue-500 text-black rounded-md font-medium hover:bg-blue-400 transition"
              >
                GitHub
              </a>

              <a
                href="https://your-live-demo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 border border-gray-700 text-gray-300 rounded-md hover:border-blue-400 hover:text-blue-400 transition"
              >
                Live Demo
              </a>
            </div>
          </motion.div>

          {/* PROJECT CARD 2 */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="bg-gray-800 p-6 rounded-xl shadow-lg w-full"
          >
            <h3 className="text-xl text-blue-400 font-medium">
              E-Commerce WebApp
            </h3>
            <p className="mt-2 text-gray-300 text-sm">
              E-commerce platform with user authentication, product management, and payment gateway integration.
            </p>

            <div className="mt-4 text-sm text-gray-400">
              <p><span className="text-white">Stack:</span> React, Node.js, Express, MongoDB, Stripe</p>
              <p><span className="text-white">Focus:</span> UI, Shopping cart, Payment gateway</p>
              <p><span className="text-white">Responsibility:</span> Full-stack dev & system security</p>
            </div>

            <div className="mt-6 flex justify-between gap-4">
              <a
                href="https://github.com/ellen0825/e-commerce-webapp"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 bg-blue-500 text-black rounded-md font-medium hover:bg-blue-400 transition"
              >
                GitHub
              </a>

              <a
                href="https://your-live-demo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 border border-gray-700 text-gray-300 rounded-md hover:border-blue-400 hover:text-blue-400 transition"
              >
                Live Demo
              </a>
            </div>
          </motion.div>

          {/* PROJECT CARD 3 */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="bg-gray-800 p-6 rounded-xl shadow-lg w-full"
          >
            <h3 className="text-xl text-blue-400 font-medium">
              Flask RESTful API
            </h3>
            <p className="mt-2 text-gray-300 text-sm">
              RESTful API built using Flask for handling CRUD operations with authentication and validation.
            </p>

            <div className="mt-4 text-sm text-gray-400">
              <p><span className="text-white">Stack:</span> Python, Flask, SQLAlchemy, JWT</p>
              <p><span className="text-white">Focus:</span> API design, Authentication, Data validation</p>
              <p><span className="text-white">Responsibility:</span> API design & JWT implementation</p>
            </div>

            <div className="mt-6 flex justify-between gap-4">
              <a
                href="https://github.com/ellen0825/flask-restful-api"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 bg-blue-500 text-black rounded-md font-medium hover:bg-blue-400 transition"
              >
                GitHub
              </a>

              <a
                href="https://your-live-demo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 border border-gray-700 text-gray-300 rounded-md hover:border-blue-400 hover:text-blue-400 transition"
              >
                Live Demo
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}