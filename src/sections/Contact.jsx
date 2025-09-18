import { useRef, useState, useEffect } from "react";
import { LinearGradient } from "react-text-gradients";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useTheme } from "../components/ThemeContext";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const TO_NAME = import.meta.env.VITE_EMAILJS_TO_NAME;
const TO_EMAIL = import.meta.env.VITE_EMAILJS_TO_EMAIL;

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { theme } = useTheme();
  const sectionBgClass = theme === "light" ? "bg-white" : "bg-[#1e1e1e]";
  const textColorClass = theme === "light" ? "text-black" : "text-white";

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: TO_NAME,
          from_email: form.email,
          to_email: TO_EMAIL,
          message: form.message,
        },
        PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log("Errro is : ", error);
          alert("Something went wrong!");
        }
      );
  };

  return (
    <section className="w-full flex justify-center mb-20 px-4" id="contact">
      <motion.div
        className="flex flex-col w-full max-w-7xl items-center justify-start"
        style={{ backgroundColor: sectionBgClass }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="w-full text-left">
          <motion.h2
            className="mb-10 xl:text-5xl md:text-4xl sm:text-3xl text-2xl font-black !leading-normal"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <LinearGradient gradient={["to left", "#374151 ,#f59e0b"]}>
              Get In Touch
            </LinearGradient>
          </motion.h2>
        </div>

        <div
          className={`flex w-full max-w-lg sm:p-8 p-6 rounded-xl ${
            theme === "light" ? "text-black" : "text-white"
          }`}
          style={theme === "light" ? { backgroundColor: "rgb(208, 201, 201)" } : { backgroundColor: "#32303a" }}
        >
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 w-full"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-2">Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className={`py-3 px-4 ${textColorClass} rounded-lg`}
                placeholder="ex. Sneha Bharti"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-2">Email address</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className={`py-3 px-4 ${textColorClass} rounded-lg`}
                placeholder="ex. sneha@gmail.com"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-2">Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className={`py-3 px-4 ${textColorClass} rounded-lg  resize-none`}
                placeholder="Share your thoughts..."
              />
            </label>

            <motion.button
              type="submit"
              style={{ backgroundColor: "#374151", color: "#fff" }}
              className={`text-white px-4 py-2 text-sm font-medium rounded-md hover:bg-[#e6891f] rounded-lg font-bold self-center sm:self-start cursor-pointer ${
                theme === "light" ? "bg-yellow-400 text-black" : "bg-[#374151] text-white"
              }`}              
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              {loading ? "Sending..." : "Send"}
            </motion.button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
