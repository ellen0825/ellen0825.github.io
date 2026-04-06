import { motion } from "framer-motion";

const projects = [
  {
    title: "E-Commerce Platform",
    role: "Full-Stack Developer",
    impact: "Improved product loading speed by 40% and built scalable API system",
    description:
      "A full-featured e-commerce platform with authentication, product management, and payment-ready architecture.",
    tech: ["React", "FastAPI", "PostgreSQL", "Docker"],
    github: "https://github.com/ellen0825/ecommerce-assignment.git",
    demo: "https://your-live-demo-link.com",
  },
  {
    title: "Corporate Portal",
    role: "Frontend Developer",
    impact: "Delivered responsive UI and improved UX for business clients",
    description:
      "Corporate portal built with custom WordPress themes and plugin integrations.",
    tech: ["PHP", "WordPress", "MySQL", "JavaScript"],
    github: "https://github.com/ellen0825/wordpress-corporate-portal.git",
    demo: "https://your-live-demo-link.com",
  },
  {
    title: "Real-Time Chat App",
    role: "Full-Stack Developer",
    impact: "Implemented real-time messaging with WebSockets",
    description:
      "A real-time chat application using React and FastAPI with WebSocket support.",
    tech: ["React", "FastAPI", "WebSockets", "PostgreSQL"],
    github: "https://github.com/ellen0825/fastapi-react-chat-app.git",
    demo: "https://your-live-demo-link.com",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-black text-white px-6 py-40 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-500">
            My Projects
          </h2>
          <div className="mt-6 h-[2px] w-24 bg-gradient-to-r from-blue-400 to-pink-500" />
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-16">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              whileHover={{ y: -12 }}
              className="group relative rounded-2xl overflow-hidden border border-gray-800 bg-gray-900/40 backdrop-blur-xl"
            >
              
              {/* IMAGE PLACEHOLDER */}
              <div className="h-52 bg-gradient-to-br from-blue-500/20 to-pink-500/20 flex items-center justify-center">
                <span className="text-gray-500 text-sm">
                  Project Preview
                </span>
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-xl text-blue-400 font-semibold">
                  {project.title}
                </h3>

                {/* ROLE + IMPACT */}
                <p className="text-xs text-pink-400 mt-1">
                  {project.role}
                </p>
                <p className="text-xs text-green-400">
                  {project.impact}
                </p>

                <p className="mt-3 text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* TECH STACK */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <motion.span
                      key={index}
                      whileHover={{ scale: 1.1 }}
                      className="text-xs bg-gray-800 px-3 py-1 rounded-full text-gray-300"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* BUTTONS */}
                <div className="mt-6 flex gap-3">
                  <motion.a
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-800 rounded-md text-sm hover:bg-gray-700"
                  >
                    GitHub
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-500 text-black rounded-md text-sm hover:bg-blue-400"
                  >
                    Live Demo
                  </motion.a>
                </div>
              </div>

              {/* HOVER GLOW */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-blue-500/10 to-pink-500/10 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}