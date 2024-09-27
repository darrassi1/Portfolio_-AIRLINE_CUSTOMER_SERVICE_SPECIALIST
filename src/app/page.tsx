"use client";

import React, { useState, useEffect } from 'react';
import { Sun, Moon, Phone, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const PortfolioWebsite = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      setDarkMode(JSON.parse(savedMode));
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const pulse = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse"
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        <motion.header
          className="p-6 flex justify-between items-center"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <motion.h1
            className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ZAKARYAE BEN TALEB
          </motion.h1>
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <Sun className="h-5 w-5 text-yellow-500" />
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={darkMode}
                onChange={toggleDarkMode}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
            <Moon className="h-5 w-5 text-blue-500" />
          </motion.div>
        </motion.header>

        <main className="container mx-auto px-6 py-8">
          <motion.section
            className="mb-12 flex flex-col md:flex-row items-center gap-8"
            initial={fadeInUp.initial}
            animate={fadeInUp.animate}
            transition={fadeInUp.transition}
          >
            <motion.div
              className="w-48 h-48 rounded-full overflow-hidden shadow-lg"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <img
                src="/assets/photo1.png"
                alt="ZAKARYAE BEN TALEB"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl font-semibold mb-4">Profil</h2>
              <p className="text-gray-700 dark:text-gray-300">
                Professionnel dynamique dans l&apos;industrie du service client et de l&apos;aviation. Compétent en assistance aux passagers, gestion de cabine et procédures de sécurité. Maîtrise des langues étrangères et des outils informatiques spécifiques au secteur. Formé aux premiers secours et à la gestion des situations d&apos;urgence à bord. Polyvalent, adaptable, excellent travail d&apos;équipe et sens aigu du service client.
              </p>
            </motion.div>
          </motion.section>

          <motion.section
            className="mb-12"
            initial={fadeInUp.initial}
            animate={fadeInUp.animate}
            transition={fadeInUp.transition}
          >
            <h2 className="text-2xl font-semibold mb-4">Contact</h2>
            <motion.div className="space-y-2" variants={staggerChildren}>
              {[
                { icon: Phone, text: "+2126-6380-8719" },
                { icon: Mail, text: "zakariyabentaleb60@gmail.com" },
                { icon: MapPin, text: "N 92 LOTS HIBA TGHAT FES" }
              ].map(({ icon: Icon, text }) => (
                <motion.p
                  key={text}
                  className="flex items-center"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05, x: 10 }}
                >
                  <Icon className="mr-2 h-5 w-5" /> {text}
                </motion.p>
              ))}
            </motion.div>
          </motion.section>

          <motion.section
            className="mb-12"
            initial={fadeInUp.initial}
            animate={fadeInUp.animate}
            transition={fadeInUp.transition}
          >
            <h2 className="text-2xl font-semibold mb-4">Compétences</h2>
            <motion.ul
              className="grid grid-cols-2 md:grid-cols-3 gap-4"
              variants={staggerChildren}
            >
              {['Service client', 'Flexibilité', 'Travail d&apos;équipe', 'Sécurité aérienne', 'Gestion de cabine'].map((skill) => (
                <motion.li
                  key={skill}
                  className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg text-center shadow-md"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {skill}
                </motion.li>
              ))}
            </motion.ul>
          </motion.section>

          <motion.section
            className="mb-12"
            initial={fadeInUp.initial}
            animate={fadeInUp.animate}
            transition={fadeInUp.transition}
          >
            <h2 className="text-2xl font-semibold mb-4">Expérience Professionnelle</h2>
            <motion.div
              className="space-y-6"
              variants={staggerChildren}
            >
              {[
                                {
                  title: "Catering and Reception - Across Hotel FES",
                  date: "2022",
                  description: "Accueil des clients et gestion des services de restauration."
                },
                {
                  title: "Ground Staff Agent - RAM HANDLING / FES SAISS AIRPORT",
                  date: "2021",
                  description: "Gestion des réclamations de bagages et assistance aux passagers."
                }

              ].map((job) => (
                <motion.div
                  key={job.title}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <h3 className="text-xl font-medium">{job.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{job.date}</p>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">{job.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          <motion.section
            className="mb-12"
            initial={fadeInUp.initial}
            animate={fadeInUp.animate}
            transition={fadeInUp.transition}
          >
            <h2 className="text-2xl font-semibold mb-4">Education</h2>
            <motion.div
              className="space-y-4"
              variants={staggerChildren}
            >
              {[
                {
                  school: "ISAT-Fes",
                  date: "2021-2023",
                  description: "Mastering service in all air cabins, first aid, security and safety, and firefighting procedures (PRACTICAL AND THEORY)"
                },
                {
                  school: "KHAWARIZMI HIGH SCHOOL",
                  date: "2020-2021",
                  description: "Baccalaureate level in science of life and earth"
                }
              ].map((edu) => (
                <motion.div
                  key={edu.school}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <h3 className="text-xl font-medium">{edu.school}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{edu.date}</p>
                  <p className="text-gray-700 dark:text-gray-300">{edu.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          <motion.section
            className="mb-12"
            initial={fadeInUp.initial}
            animate={fadeInUp.animate}
            transition={fadeInUp.transition}
          >
            <h2 className="text-2xl font-semibold mb-4">Langues</h2>
            <motion.ul
              className="flex flex-wrap gap-4"
              variants={staggerChildren}
            >
              {['Arab', 'French', 'English'].map((language) => (
                <motion.li
                  key={language}
                  className="bg-blue-100 dark:bg-blue-900 px-4 py-2 rounded-full text-blue-800 dark:text-blue-100"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {language}
                </motion.li>
              ))}
            </motion.ul>
          </motion.section>

          <motion.section
            initial={fadeInUp.initial}
            animate={fadeInUp.animate}
            transition={fadeInUp.transition}
          >
            <h2 className="text-2xl font-semibold mb-4">Hobbies</h2>
            <motion.ul
              className="flex flex-wrap gap-4"
              variants={staggerChildren}
            >
              {['Basket Ball', 'Travel', 'Music'].map((hobby) => (
                <motion.li
                  key={hobby}
                  className="bg-purple-100 dark:bg-purple-900 px-4 py-2 rounded-full text-purple-800 dark:text-purple-100"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {hobby}
                </motion.li>
              ))}
            </motion.ul>
          </motion.section>
        </main>

        <motion.footer
          className="bg-gray-100 dark:bg-gray-800 p-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <p>&copy; 2024 ZAKARYAE BEN TALEB. All rights reserved.</p>
          <motion.div
            className="mt-4 flex justify-center space-x-4"
            variants={staggerChildren}
          >
            <motion.a
              href="mailto:zakariyabentaleb60@gmail.com"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full transition duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              animate={pulse}
            >
              Email Me
            </motion.a>
            <motion.a
              href="tel:+212663808719"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full transition duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              animate={pulse}
            >
              Call Me
            </motion.a>
          </motion.div>
        </motion.footer>
      </div>
    </div>
  );
};

export default PortfolioWebsite;