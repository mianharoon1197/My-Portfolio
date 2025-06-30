"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/meoknjdn", {
        method: "POST",
        headers: {
          Accept: "application/json"
        },
        body: new FormData(e.target)
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="relative max-w-xl mx-auto bg-white shadow-xl rounded-2xl p-8 grid gap-6"
    >
      <AnimatePresence>
        {status === "success" && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            className="absolute top-0 left-0 right-0 rounded-t-2xl bg-green-500 text-white text-center py-2 font-medium"
          >
            🎉 Message sent successfully!
          </motion.div>
        )}
        {status === "error" && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            className="absolute top-0 left-0 right-0 rounded-t-2xl bg-red-500 text-white text-center py-2 font-medium"
          >
            ❌ Something went wrong. Please try again.
          </motion.div>
        )}
      </AnimatePresence>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
        />
      </div>
      <motion.button
        type="submit"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        disabled={status === "sending"}
        className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium py-3 rounded-lg hover:from-blue-700 hover:to-blue-600 transition"
      >
        {status === "sending" ? "Sending..." : (
          <>
            <EnvelopeIcon className="h-5 w-5" />
            Send Message
          </>
        )}
      </motion.button>
    </motion.form>
  );
}
