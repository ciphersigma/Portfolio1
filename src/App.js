import React, { useState, useEffect } from 'react';
import { Terminal, Code, Shield, Book, Award, Users } from 'lucide-react';

// Loading Sequence Component
const LoadingSequence = ({ onComplete }) => {
  const [terminalText, setTerminalText] = useState('');
  const [loadingStep, setLoadingStep] = useState(0);
  const steps = [
    '> Initializing secure connection...',
    '> Running security protocols...',
    '> Access granted...',
    '> Welcome to Prashant\'s Cybersecurity Hub'
  ];

  useEffect(() => {
    let currentStep = 0;
    let currentChar = 0;

    const timer = setInterval(() => {
      if (currentStep < steps.length) {
        if (currentChar < steps[currentStep].length) {
          setTerminalText(prev => prev + steps[currentStep][currentChar]);
          currentChar++;
        } else {
          setTerminalText(prev => prev + '\n');
          currentStep++;
          currentChar = 0;
          setLoadingStep(prev => prev + 1);
        }
      } else {
        clearInterval(timer);
        setTimeout(onComplete, 1000);
      }
    }, 50);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-950">
      <div className="max-w-2xl w-full p-8">
        <div className="bg-zinc-900/80 p-6 rounded-lg border border-emerald-500">
          <pre className="text-emerald-500 font-mono whitespace-pre-wrap">
            {terminalText}
          </pre>
          {loadingStep < steps.length && (
            <div className="h-4 w-4 bg-emerald-500 animate-pulse mt-2"></div>
          )}
        </div>
      </div>
    </div>
  );
};

// Main Portfolio Component
const Portfolio = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 to-zinc-900 text-zinc-100">
      {isLoading ? (
        <LoadingSequence onComplete={() => setIsLoading(false)} />
      ) : (
        <>
          {/* Hero Section with Profile Picture */}
          <div className="relative min-h-screen flex items-center justify-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent" />
            <div className="z-10 text-center p-8">
              <div className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden border-4 border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300">
                <img 
                  src="e:\Portfolio\Project 1\portfolio\public\photo.jpeg" 
                  alt="Prashant Chettiyar" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-400 mb-8">
                <Shield className="w-4 h-4 mr-2" />
                Cybersecurity Professional
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-200 to-emerald-400">
                PRASHANT CHETTIYAR
              </h1>
              <p className="text-xl md:text-2xl text-zinc-400">
                Ethical Hacker | Digital Forensics Specialist | Security Researcher
              </p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="sticky top-0 backdrop-blur-lg border-b border-zinc-800 z-50">
            <div className="max-w-6xl mx-auto px-4">
              <div className="flex justify-center space-x-8 py-4">
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
          </nav>

          {/* Main Content */}
          <div className="max-w-6xl mx-auto px-4 py-16">
            {/* About Section */}
            <section className="mb-20">
              <div className="flex items-center mb-8">
                <h2 className="text-3xl font-bold text-emerald-400">About Me</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 hover:border-emerald-500/50 transition-colors">
                  <p className="text-zinc-300 leading-relaxed">
                    Dedicated and passionate cybersecurity professional with hands-on experience in ethical hacking and
                    cybersecurity education. Currently serving as Vice Chairperson of IEEE SOU CS SBC and founder of
                    ExploitXplorers, a cybersecurity-based community.
                  </p>
                </div>
                <div className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 hover:border-emerald-500/50 transition-colors">
                  <h3 className="text-xl font-semibold text-emerald-400 mb-4">Key Focus Areas</h3>
                  <ul className="space-y-2 text-zinc-300">
                    <li className="flex items-center"><Shield className="w-4 h-4 mr-2 text-emerald-500" />Penetration Testing</li>
                    <li className="flex items-center"><Terminal className="w-4 h-4 mr-2 text-emerald-500" />Malware Analysis</li>
                    <li className="flex items-center"><Code className="w-4 h-4 mr-2 text-emerald-500" />Security Research</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Experience Section */}
            <section className="mb-20">
              <div className="flex items-center mb-8">
                <h2 className="text-3xl font-bold text-emerald-400">Experience</h2>
              </div>
              <div className="space-y-6">
                <div className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 hover:border-emerald-500/50 transition-colors">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-zinc-100">State Cyber Crime Cell under CID, Gandhinagar</h3>
                      <p className="text-emerald-400">Security Analyst</p>
                    </div>
                    <span className="text-zinc-500">2024</span>
                  </div>
                  <ul className="space-y-2 text-zinc-300">
                    <li>• Cybersecurity investigations and malware analysis</li>
                    <li>• Vulnerability assessments and penetration testing</li>
                    <li>• Documentation of cybercrime cases</li>
                  </ul>
                </div>

                <div className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 hover:border-emerald-500/50 transition-colors">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-zinc-100">ExploitXplorers</h3>
                      <p className="text-emerald-400">Founder</p>
                    </div>
                    <span className="text-zinc-500">2023 - Present</span>
                  </div>
                  <p className="text-zinc-300">Leading community initiatives in cybersecurity education and collaboration</p>
                </div>
              </div>
            </section>

            {/* Skills Section */}
            <section className="mb-20">
              <div className="flex items-center mb-8">
                <h2 className="text-3xl font-bold text-emerald-400">Technical Skills</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                    className="bg-zinc-900/50 p-6 rounded-xl border border-zinc-800 hover:border-emerald-500/50 transition-colors text-center"
                  >
                    <span className="text-zinc-300">{skill}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Projects Section */}
            <section className="mb-20">
              <div className="flex items-center mb-8">
                <h2 className="text-3xl font-bold text-emerald-400">Projects & Achievements</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 hover:border-emerald-500/50 transition-colors">
                  <h3 className="text-xl font-semibold text-zinc-100 mb-4">Key Projects</h3>
                  <ul className="space-y-3 text-zinc-300">
                    <li className="flex items-start">
                      <Code className="w-5 h-5 mr-2 mt-1 text-emerald-500" />
                      <span>Rubber Ducky Development</span>
                    </li>
                    <li className="flex items-start">
                      <Terminal className="w-5 h-5 mr-2 mt-1 text-emerald-500" />
                      <span>Pwnagotchi Implementation</span>
                    </li>
                    <li className="flex items-start">
                      <Shield className="w-5 h-5 mr-2 mt-1 text-emerald-500" />
                      <span>WiFi Security Research</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 hover:border-emerald-500/50 transition-colors">
                  <h3 className="text-xl font-semibold text-zinc-100 mb-4">Achievements</h3>
                  <ul className="space-y-3 text-zinc-300">
                    <li className="flex items-start">
                      <Award className="w-5 h-5 mr-2 mt-1 text-emerald-500" />
                      <span>Winner, Rajasthan Police Hackathon RACCAM 2024</span>
                    </li>
                    <li className="flex items-start">
                      <Award className="w-5 h-5 mr-2 mt-1 text-emerald-500" />
                      <span>Winner, Poster Presentation at Sampark 2024</span>
                    </li>
                    <li className="flex items-start">
                      <Award className="w-5 h-5 mr-2 mt-1 text-emerald-500" />
                      <span>EC Council Ethical Hacking Essentials Certification</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Footer */}
          <footer className="border-t border-zinc-800 py-12">
            <div className="max-w-6xl mx-auto px-4 text-center">
              <p className="text-zinc-400 mb-4">Connect with me</p>
              <div className="flex justify-center space-x-6">
                <a href="mailto:prashantchettiyar@ieee.org" className="text-zinc-400 hover:text-emerald-400 transition-colors">
                  Email
                </a>
                <a href="https://linkedin.com/in/prashantchettiyar" className="text-zinc-400 hover:text-emerald-400 transition-colors">
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