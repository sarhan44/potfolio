
import { useState } from 'react';
import { MapPin, Edit2, Plus, ExternalLink, Moon, Sun, ChevronDown, Calendar, Github, Globe, Linkedin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Portfolio = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);
    // const [expandedSection, setExpandedSection] = useState(null);
    // const [showMore, setShowMore] = useState({});
    
    // const toggleShowMore = (id) => {
    // setShowMore(prev => ({ ...prev, [id]: !prev[id] }));
    // };

const skills = [
  { name: 'Node.js', level: 90 },
  { name: 'FastAPI', level: 85 },
  { name: 'Next.js', level: 88 },
  { name: 'MySQL', level: 92 },
  { name: 'MongoDB', level: 87 },
  { name: 'Redis', level: 83 },
  { name: 'Solr', level: 80 },
  { name: 'Docker', level: 85 },
  { name: 'RabbitMQ', level: 82 }
];
const certifications = [
    {
      title: "Problem Solving (Basic)",
      issuer: "HackerRank",
      date: "Sep 2022",
      credentialId: "0d84ba80ad77",
      logo: "https://media.licdn.com/dms/image/v2/D560BAQE8MivsmbT7Ig/company-logo_100_100/company-logo_100_100/0/1705561459405/hackerrank_logo?e=1740614400&v=beta&t=fRK-PLUQToh0mSskYusfT_aepYqO_4Q66k7OjqC_U8c"
    },
    {
      title: "JavaScript Basic",
      issuer: "HackerRank",
      date: "Jul 2022",
      credentialId: "15e9da960d39",
      logo: "https://media.licdn.com/dms/image/v2/D560BAQE8MivsmbT7Ig/company-logo_100_100/company-logo_100_100/0/1705561459405/hackerrank_logo?e=1740614400&v=beta&t=fRK-PLUQToh0mSskYusfT_aepYqO_4Q66k7OjqC_U8c"
    }
  ];

  const projects = [
    {
      title: "GitHub Profile Finder",
      date: "Sep 2022",
      description: "It finds your GitHub profile by username, and shows how many Repositories and Gists you have created and when you joined GitHub.",
      link: "https://github.com/sarhan44/github-finder"
    },
    {
      title: "E-Commerce Web Application",
      date: "Jul 2022 - Aug 2022",
      description: "The primary goal of an e-commerce site is to sell goods online. This project deals with developing an e-commerce website for Online Product Sales. It provides the user with a catalog of different product available for purchase in the store.",
      link: "https://github.com/sarhan44/shopping-cart"
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'
    }`}>
      {/* Cover Banner */}
      <div className="relative h-64 md:h-80 w-full overflow-hidden">
        <img 
          src="/cover.jpg" 
          alt="Cover"
          className="w-full h-full object-cover"
        />
        <div className={`absolute inset-0 ${
          isDarkMode ? 'bg-gradient-to-b from-transparent to-gray-900/90' : 'bg-gradient-to-b from-transparent to-gray-100/90'
        }`} />
        
        {/* Dark Mode Toggle */}
        <div className="absolute top-4 right-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`p-2 rounded-full ${
              isDarkMode ? 'bg-gray-800 text-yellow-400' : 'bg-white text-gray-800'
            }`}
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 relative">
        {/* Profile Image */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="absolute -top-20"
        >
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white bg-white overflow-hidden shadow-lg">
            <img 
              src="/Sarhan.jpeg" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="pt-24 pb-12">
          {/* Profile Header */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col md:flex-row justify-between items-start mb-8 gap-4"
          >
            <div>
              <h1 className="text-2xl md:text-3xl font-semibold">Sarhan Khan</h1>
              <p className={`text-lg mt-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Software Developer <a className='decoration text-blue-500 hover:underline' href="http://pushpak.ai" target="_blank" rel="noopener noreferrer">@pushpak.ai</a>
              </p>
              <div className={`flex items-center gap-2 mt-2 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <MapPin size={16} />
                <span>Hyderabad, Telangana, India</span>
              </div>
              <div className="flex items-center gap-4 mt-2">
                <div className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>+91 82995-09192</div>
                <div
                    className={`text-sm underline cursor-pointer  ${isDarkMode ? 'text-blue-500' : 'text-blue-500'}`}
                    onClick={() => (window.location.href = 'mailto:sarhank44@gmail.com')}
                  >
                    sarhank44@gmail.com
                </div>
              </div>
            </div>
            <div className="flex gap-2 flex-wrap">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                className={`px-4 py-1 border rounded-full ${
                  isDarkMode 
                    ? 'border-blue-500 text-blue-500 hover:bg-blue-900/30' 
                    : 'border-blue-600 text-blue-600 hover:bg-blue-50'
                }`}
              >
                <a href="https://github.com/sarhan44/" target="_blank" rel="noopener noreferrer"><Github className='w-16'></Github></a>
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                className={`px-4 py-1 rounded-full ${
                  isDarkMode 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                <a href="https://www.linkedin.com/in/sarhank44/" target="_blank" rel="noopener noreferrer"><Linkedin className='w-16'/></a>
              </motion.button>
            </div>
          </motion.div>

          {/* About Section */}
          <motion.section 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className={`rounded-lg shadow p-6 ${
              isDarkMode ? 'bg-gray-800' : 'bg-white'
            }`}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">About</h2>
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`p-2 rounded-full ${
                  isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                }`}
              >
                <Edit2 size={20} />
              </motion.button>
            </div>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Passionate software developer with expertise in Node.js, FastAPI, and Next.js. 
              Experienced in building scalable web applications and implementing efficient database solutions. 
              Strong background in both frontend and backend development, with a focus on creating 
              high-performance, user-friendly applications.
            </p>
          </motion.section>
          {/* Experience Section */}
        <motion.section 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={`rounded-lg shadow mt-6 p-6 ${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
          }`}
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Experience</h2>
            <div className="flex gap-2">
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`p-2 rounded-full ${
                  isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                }`}
              >
                <Plus size={20} />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`p-2 rounded-full ${
                  isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                }`}
              >
                <Edit2 size={20} />
              </motion.button>
            </div>
          </div>

          <AnimatePresence>
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              className="space-y-6"
            >
              <div className="flex gap-4 flex-col md:flex-row">
                <div className="w-12 h-12 flex-shrink-0">
                  <img 
                    src="https://media.licdn.com/dms/image/v2/C560BAQG3pKuIGf00Tw/company-logo_100_100/company-logo_100_100/0/1663755928275/pushpak_ai_logo?e=1740614400&v=beta&t=FdqouBbeRiqGEvenXZtQEKbWwq3sXPORDLnisfm5rjY" 
                    alt="Pushpak.ai"
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">Software Developer</h3>
                  <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Pushpak.ai · Full-time</p>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    Nov 2022 - Present · 2 yrs 1 mo
                  </p>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    Hyderabad, Telangana, India · On-site
                  </p>
                  <div className="mt-4 space-y-2">
                    <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                      Leveraging strong backend development skills to build and maintain robust web applications for Pushpak.ai.
                    </p>
                    <ul className={`list-disc ml-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      <li>Developed and optimized server-side logic for core functionalities, leading to a 15% reduction in page load times.</li>
                      <li>Designed and implemented secure RESTful APIs that streamlined data exchange between front-end and back-end systems.</li>
                      <li>Managed and optimized high-volume MySQL database, ensuring data integrity and efficient querying.</li>
                      <li>Collaborated with cross-functional teams to define system architecture best practices.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.section>

                {/* Projects Section */}
          <motion.section 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className={`rounded-lg shadow mt-6 p-6 ${
              isDarkMode ? 'bg-gray-800' : 'bg-white'
            }`}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Projects</h2>
              <div className="flex gap-2">
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-2 rounded-full ${
                    isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                  }`}
                >
                  <Plus size={20} />
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-2 rounded-full ${
                    isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                  }`}
                >
                  <Edit2 size={20} />
                </motion.button>
              </div>
            </div>

            <div className="space-y-6">
              {projects.map((project, _index) => (
                <motion.div
                  key={project.title}
                  whileHover={{ scale: 1.01 }}
                  className={`p-4 rounded-lg ${
                    isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold">{project.title}</h3>
                    <div className="flex gap-2">
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-2 rounded-full ${
                          isDarkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-200'
                        }`}
                      >
                        <Github size={20} />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-2 rounded-full ${
                          isDarkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-200'
                        }`}
                      >
                        <Globe size={20} />
                      </motion.a>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <Calendar size={14} className={isDarkMode ? 'text-gray-400' : 'text-gray-500'} />
                    <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {project.date}
                    </span>
                  </div>
                  <p className={`mt-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {project.description}
                  </p>
                </motion.div>
              ))}
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className={`mt-4 text-sm flex items-center gap-1 ${
                isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
              }`}
            >
              Show all 6 projects <ChevronDown size={14} />
            </motion.button>
          </motion.section>

        {/* Skills Section */}
        <motion.section 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={`rounded-lg shadow mt-6 p-6 ${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
          }`}
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Skills</h2>
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`p-2 rounded-full ${
                isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
              }`}
            >
              <Edit2 size={20} />
            </motion.button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                whileHover={{ scale: 1.02 }}
                className={`p-4 rounded-lg ${
                  isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
                }`}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className={isDarkMode ? 'text-gray-200' : 'text-gray-800'}>
                    {skill.name}
                  </span>
                  <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {skill.level}%
                  </span>
                </div>
                <div className={`h-2 rounded-full ${isDarkMode ? 'bg-gray-600' : 'bg-gray-200'}`}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full rounded-full bg-blue-600"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

          {/* Certifications Section */}
          <motion.section 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className={`rounded-lg shadow mt-6 p-6 ${
              isDarkMode ? 'bg-gray-800' : 'bg-white'
            }`}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Licenses & Certifications</h2>
              <div className="flex gap-2">
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-2 rounded-full ${
                    isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                  }`}
                >
                  <Plus size={20} />
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-2 rounded-full ${
                    isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                  }`}
                >
                  <Edit2 size={20} />
                </motion.button>
              </div>
            </div>

            <div className="space-y-6">
              {certifications.map((cert, _index) => (
                <motion.div
                  key={cert.credentialId}
                  whileHover={{ scale: 1.01 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 flex-shrink-0">
                    <img 
                      src={cert.logo}
                      alt={cert.issuer}
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{cert.title}</h3>
                    <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>{cert.issuer}</p>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      Issued {cert.date}
                    </p>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      Credential ID {cert.credentialId}
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className={`mt-2 text-sm flex items-center gap-1 ${
                        isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
                      }`}
                    >
                      Show credential <ExternalLink size={14} />
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.footer className={`absolute left-0 right-0 bottom-0 text-center ${
              isDarkMode ? 'text-gray-600' : 'text-gray-400'
            }`}>
            <p>© 2024 Sarhan Khan. All rights reserved.</p>
          </motion.footer>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;