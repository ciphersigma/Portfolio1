import React, { useState, useEffect } from 'react';
import { Terminal, Code, Shield, Book, Award, Users, Menu, X } from 'lucide-react';

const MobileNav = ({ activeSection, setActiveSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="p-2 text-emerald-400"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-zinc-900/95 border-b border-zinc-800 backdrop-blur-lg">
          <div className="flex flex-col p-4 space-y-3">
            {['About', 'Experience', 'Skills', 'Projects', 'Education'].map(section => (
              <button
                key={section}
                onClick={() => {
                  setActiveSection(section.toLowerCase());
                  setIsOpen(false);
                }}
                className={`p-3 rounded-lg transition-all ${
                  activeSection === section.toLowerCase()
                    ? 'bg-emerald-500/10 text-emerald-400'
                    : 'text-zinc-400 hover:text-zinc-100'
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const Portfolio = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 to-zinc-900 text-zinc-100">
      {isLoading ? (
        <LoadingSequence onComplete={() => setIsLoading(false)} />
      ) : (
        <>
          {/* Hero Section */}
          <div className="relative min-h-[90vh] flex items-center justify-center px-4">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent" />
            <div className="z-10 text-center">
              <div className="w-32 h-32 md:w-48 md:h-48 mx-auto mb-6 md:mb-8 rounded-full overflow-hidden border-4 border-emerald-500/20">
                <img 
                  src="/api/placeholder/400/400" 
                  alt="Prashant Chettiyar" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-emerald-500/10 text-emerald-400 mb-6">
                <Shield className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                <span className="text-sm md:text-base">Cybersecurity Professional</span>
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-200 to-emerald-400">
                PRASHANT CHETTIYAR
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-zinc-400 px-4">
                Ethical Hacker | Digital Forensics Specialist
              </p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="sticky top-0 backdrop-blur-lg border-b border-zinc-800 z-50">
            <div className="max-w-6xl mx-auto px-4">
              <div className="flex justify-between items-center py-4">
                <div className="lg:hidden">
                  <MobileNav activeSection={activeSection} setActiveSection={setActiveSection} />
                </div>
                <div className="hidden lg:flex justify-center space-x-8 w-full">
                  {['About', 'Experience', 'Skills', 'Projects', 'Education'].map(section => (
                    <button
                      key={section}
                      onClick={() => setActiveSection(section.toLowerCase())}
                      className={`px-4 py-2 rounded-lg transition-all ${
                        activeSection === section.toLowerCase()
                          ? 'bg-emerald-500/10 text-emerald-400'
                          : 'text-zinc-400 hover:text-zinc-100'
                      }`}
                    >
                      {section}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* Main Content */}
          <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
            {/* About Section */}
            <section className="mb-16 md:mb-20">
              <div className="flex items-center mb-6 md:mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-emerald-400">About Me</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="bg-zinc-900/50 p-6 md:p-8 rounded-2xl border border-zinc-800 hover:border-emerald-500/50 transition-colors">
                  <p className="text-base md:text-lg text-zinc-300 leading-relaxed">
                    Dedicated and passionate cybersecurity professional with hands-on experience in ethical hacking and
                    cybersecurity education. Currently serving as Vice Chairperson of IEEE SOU CS SBC and founder of
                    ExploitXplorers, a cybersecurity-based community.
                  </p>
                </div>
                <div className="bg-zinc-900/50 p-6 md:p-8 rounded-2xl border border-zinc-800 hover:border-emerald-500/50 transition-colors">
                  <h3 className="text-lg md:text-xl font-semibold text-emerald-400 mb-4">Key Focus Areas</h3>
                  <ul className="space-y-3 text-zinc-300">
                    <li className="flex items-center"><Shield className="w-4 h-4 mr-2 text-emerald-500" />Penetration Testing</li>
                    <li className="flex items-center"><Terminal className="w-4 h-4 mr-2 text-emerald-500" />Malware Analysis</li>
                    <li className="flex items-center"><Code className="w-4 h-4 mr-2 text-emerald-500" />Security Research</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Experience Section */}
            <section className="mb-16 md:mb-20">
              <div className="flex items-center mb-6 md:mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-emerald-400">Experience</h2>
              </div>
              <div className="space-y-6">
                <div className="bg-zinc-900/50 p-6 md:p-8 rounded-2xl border border-zinc-800 hover:border-emerald-500/50 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold text-zinc-100">State Cyber Crime Cell under CID</h3>
                      <p className="text-emerald-400">Security Analyst</p>
                    </div>
                    <span className="text-zinc-500 mt-2 md:mt-0">2024</span>
                  </div>
                  <ul className="space-y-2 text-zinc-300 text-sm md:text-base">
                    <li>• Cybersecurity investigations and malware analysis</li>
                    <li>• Vulnerability assessments and penetration testing</li>
                    <li>• Documentation of cybercrime cases</li>
                  </ul>
                </div>

                <div className="bg-zinc-900/50 p-6 md:p-8 rounded-2xl border border-zinc-800 hover:border-emerald-500/50 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold text-zinc-100">ExploitXplorers</h3>
                      <p className="text-emerald-400">Founder</p>
                    </div>
                    <span className="text-zinc-500 mt-2 md:mt-0">2023 - Present</span>
                  </div>
                  <p className="text-zinc-300 text-sm md:text-base">Leading community initiatives in cybersecurity education and collaboration</p>
                </div>
              </div>
            </section>

            {/* Skills Section */}
            <section className="mb-16 md:mb-20">
              <div className="flex items-center mb-6 md:mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-emerald-400">Technical Skills</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  'Ethical Hacking',
                  'Digital Forensics',
                  'VAPT',
                  'Network Security',
                  'Cybercrime Investigation',
                  'Malware Analysis'
                ].map(skill => (
                  <div
                    key={skill}
                    className="bg-zinc-900/50 p-4 md:p-6 rounded-xl border border-zinc-800 hover:border-emerald-500/50 transition-colors text-center"
                  >
                    <span className="text-zinc-300 text-sm md:text-base">{skill}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Projects Section */}
            <section className="mb-16 md:mb-20">
              <div className="flex items-center mb-6 md:mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-emerald-400">Projects & Achievements</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-zinc-900/50 p-6 md:p-8 rounded-2xl border border-zinc-800 hover:border-emerald-500/50 transition-colors">
                  <h3 className="text-lg md:text-xl font-semibold text-zinc-100 mb-4">Key Projects</h3>
                  <ul className="space-y-3 text-zinc-300 text-sm md:text-base">
                    <li className="flex items-start">
                      <Code className="w-5 h-5 mr-2 mt-1 text-emerald-500 flex-shrink-0" />
                      <span>Rubber Ducky Development</span>
                    </li>
                    <li className="flex items-start">
                      <Terminal className="w-5 h-5 mr-2 mt-1 text-emerald-500 flex-shrink-0" />
                      <span>Pwnagotchi Implementation</span>
                    </li>
                    <li className="flex items-start">
                      <Shield className="w-5 h-5 mr-2 mt-1 text-emerald-500 flex-shrink-0" />
                      <span>WiFi Security Research</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-zinc-900/50 p-6 md:p-8 rounded-2xl border border-zinc-800 hover:border-emerald-500/50 transition-colors">
                  <h3 className="text-lg md:text-xl font-semibold text-zinc-100 mb-4">Achievements</h3>
                  <ul className="space-y-3 text-zinc-300 text-sm md:text-base">
                    <li className="flex items-start">
                      <Award className="w-5 h-5 mr-2 mt-1 text-emerald-500 flex-shrink-0" />
                      <span>Winner, Rajasthan Police Hackathon RACCAM 2024</span>
                    </li>
                    <li className="flex items-start">
                      <Award className="w-5 h-5 mr-2 mt-1 text-emerald-500 flex-shrink-0" />
                      <span>Winner, Poster Presentation at Sampark 2024</span>
                    </li>
                    <li className="flex items-start">
                      <Award className="w-5 h-5 mr-2 mt-1 text-emerald-500 flex-shrink-0" />
                      <span>EC Council Ethical Hacking Essentials Certification</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Footer */}
          <footer className="border-t border-zinc-800 py-8 md:py-12">
            <div className="max-w-6xl mx-auto px-4 text-center">
              <p className="text-zinc-400 mb-4 text-sm md:text-base">Connect with me</p>
              <div className="flex justify-center space-x-6">
                <a href="mailto:prashantchettiyar@ieee.org" className="text-zinc-400 hover:text-emerald-400 transition-colors text-sm md:text-base">
                  Email
                </a>
                <a href="https://linkedin.com/in/prashantchettiyar" className="text-zinc-400 hover:text-emerald-400 transition-colors text-sm md:text-base">
                  LinkedIn
                </a>
              </div>
            </div>
          </footer>
        </>
      )}
    </div>
  );
};

export default Portfolio;