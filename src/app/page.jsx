"use client";
import Head from "next/head";
import Image from "next/image";
import Navbar from "./components/Navbar";
import { motion } from "framer-motion";
import ContactForm from "./components/ContactForm";
import {
  CodeBracketIcon,
  BriefcaseIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "ShifaHub",
    description:
      "Healthcare platform to search & book doctors/labs appointments.",
    details:
      "Built with Next.js, Tailwind CSS & MySQL. Features user-friendly appointment booking and search filters.",
    techStack: ["Next.js", "Tailwind CSS", "MySQL"],
    liveDemo: "https://shifahub.vercel.app",
    github: "https://github.com/yourgithub/shifahub",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-blue-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8c1.656 0 3-1.344 3-3S13.656 2 12 2s-3 1.344-3 3 1.344 3 3 3zM7 8v8a5 5 0 0010 0V8"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "SecureGen",
    description: "React app that generates customizable random passwords.",
    details:
      "Built with React & JavaScript. Includes length control, character selection, and a strength checker.",
    techStack: ["React", "JavaScript", "CSS"],
    liveDemo: "https://secure-gen-react-password-generator-tan.vercel.app/",
    github: "https://github.com/mianharoon1197/SecureGen-React-Password-Generator.git",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-green-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 11c.132 0 .26.023.38.066l4.243 1.697a1 1 0 010 1.874l-4.243 1.697A1.012 1.012 0 0112 16v-5z"
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: "BitGazer",
    description: "Crypto platform with live coin prices and buy/sell features.",
    details: "React-based app with CoinGecko API to fetch live crypto data.",
    techStack: ["Next.js", "CoinGecko API", "Tailwind CSS"],
    liveDemo: "https://bitgazer.vercel.app",
    github: "https://github.com/yourgithub/bitgazer",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-purple-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 7V3m8 18v-4M3 12h18"
        />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Haroon's Portfolio</title>
        <meta
          name="description"
          content="Professional Portfolio of Muhammad Haroon"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gray-50 text-gray-900 font-sans overflow-x-hidden">
        {/* Navbar */}
        <Navbar />


        {/* Hero */}
        <section id="hero">
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="min-h-screen flex flex-col justify-center items-center text-center px-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/profile.jpg"
                alt="Muhammad Haroon Profile"
                width={250}
                height={150}
                className="rounded-full mx-auto mb-4"
                priority
              />
            </motion.div>
            <motion.h1
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              Hey, I'm <span className="text-blue-600">Muhammad Haroon</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-lg md:text-xl max-w-2xl"
            >
              A passionate developer crafting modern web experiences with
              Next.js and Tailwind CSS.
            </motion.p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.1 }}
              className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
            >
              Contact Me
            </motion.a>
          </motion.section>
        </section>

        {/* About */}
        <section id="about" className="py-20 px-6 bg-gray-50">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
              Hi, I'm <span className="font-semibold">Muhammad Haroon</span>.
              I'm a Computer Science student and freelance web developer. I
              enjoy building modern and responsive websites that are
              user-friendly and clean.
              <br />
              <br />I mostly work with technologies like{" "}
              <span className="font-medium">Next.js</span>,{" "}
              <span className="font-medium">React</span>,{" "}
              <span className="font-medium">Tailwind CSS</span>, and{" "}
              <span className="font-medium">MySQL</span>. I'm always learning
              new things and trying to improve my skills every day.
              <br />
              <br />
              My goal is to create web experiences that look good and work
              great. Whether it’s a personal project or client work, I always
              give my best.
              <br />
              <br />
              If you want to collaborate or hire me for a project, feel free to
              reach out through the Contact page. I’d love to hear from you!
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex justify-center space-x-6 mt-8"
            >
              <a
                href="https://github.com/yourgithub"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-black text-2xl transition-colors"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/yourlinkedin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-700 text-2xl transition-colors"
              >
                <FaLinkedin />
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-20 px-6 bg-white">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-semibold text-center mb-10"
          >
            <CodeBracketIcon className="h-8 w-8 inline text-blue-600 mr-2" />
            My Skills
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
              hidden: { opacity: 0 },
            }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Next.js",
              "Tailwind CSS",
              "Node.js",
              "Git",
            ].map((skill) => (
              <motion.div
                key={skill}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{
                  scale: 1.05,
                }}
                className="relative overflow-hidden group cursor-pointer rounded-lg border border-gray-200 bg-gray-50 p-4 text-center font-medium transition"
              >
                <span
                  className="absolute inset-0 z-0 bg-gradient-to-r from-violet-500 to-blue-500 scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"
                  aria-hidden="true"
                />
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                  {skill}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-20 px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-semibold text-center mb-10"
          >
            <BriefcaseIcon className="h-8 w-8 inline text-blue-600 mr-2" />
            Projects
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.2 },
              },
            }}
            className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.95 },
                  visible: { opacity: 1, y: 0, scale: 1 },
                }}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  boxShadow: "0px 8px 24px rgba(0,0,0,0.15)",
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center transition"
              >
                <motion.div
                  initial={{ rotate: -10, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {project.icon}
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl font-bold mt-4"
                >
                  {project.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-gray-600 mb-2"
                >
                  {project.description}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-sm text-gray-500 mb-4"
                >
                  {project.details}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex gap-2 mb-4 flex-wrap justify-center"
                >
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex gap-4"
                >
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-sm"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:underline text-sm"
                  >
                    GitHub
                  </a>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20 px-6 bg-gray-50">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-semibold text-center mb-10"
          >
            <EnvelopeIcon className="h-8 w-8 inline text-blue-600 mr-2" />
            Contact Me
          </motion.h2>

          <ContactForm />
        </section>

        {/* Footer */}
        <footer className="text-center py-6 text-gray-500">
          &copy; {new Date().getFullYear()} Muhammad Haroon. All rights
          reserved.
        </footer>
      </main>
    </>
  );
}
