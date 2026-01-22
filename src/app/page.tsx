'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Code, Home as HomeIcon, Mail, Palette, User, Zap, Briefcase, ExternalLink, X, Linkedin, Github } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<any>(null)

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedProject(null)
      }
    }

    if (selectedProject) {
      document.addEventListener('keydown', handleEscKey)
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey)
      document.body.style.overflow = 'unset'
    }
  }, [selectedProject])

  const projects = [
    {
      id: 'learnlogicify',
      title: 'Learnlogicify Landing Page',
      slug: 'learnlogicify-landing-page',
      shortDescription: 'Modern educational platform with clean design and intuitive user experience',
      fullDescription: 'A comprehensive educational platform built with modern web technologies. Features include interactive course modules, student progress tracking, responsive design, and seamless user experience. The platform integrates with various learning management systems and provides real-time analytics for educators. Built with performance and accessibility in mind, it supports multiple languages and provides a smooth learning experience across all devices.',
      image: 'https://picsum.photos/seed/learnlogicify/600/400.jpg',
      images: [
        'https://picsum.photos/seed/learnlogicify/800/600.jpg',
        'https://picsum.photos/seed/learnlogicify2/800/600.jpg',
        'https://picsum.photos/seed/learnlogicify3/800/600.jpg'
      ],
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Node.js', 'MongoDB', 'Vercel'],
      liveUrl: 'https://learnlogicify-demo.vercel.app',
      githubUrl: 'https://github.com/karigar/learnlogicify',
      features: [
        'Responsive design for all devices',
        'Interactive course modules with video support',
        'Real-time progress tracking system',
        'Advanced analytics dashboard',
        'Multi-language support (5+ languages)',
        'Dark/Light theme toggle',
        'Offline course download capability',
        'Social learning features'
      ]
    },
    {
      id: 'winzee',
      title: 'Winzee Web Chat Application',
      slug: 'winzee-web-chat-application',
      shortDescription: 'Real-time chat application with advanced features and beautiful UI',
      fullDescription: 'A sophisticated real-time chat application built with modern web technologies. Features include instant messaging, file sharing, group chats, emoji reactions, and voice/video calling capabilities. The application supports multiple chat rooms, provides end-to-end encryption for secure communication, and includes advanced features like message threading, custom themes, and bot integrations.',
      image: 'https://picsum.photos/seed/winzee/600/400.jpg',
      images: [
        'https://picsum.photos/seed/winzee/800/600.jpg',
        'https://picsum.photos/seed/winzee2/800/600.jpg',
        'https://picsum.photos/seed/winzee3/800/600.jpg'
      ],
      technologies: ['Node.js', 'Socket.io', 'Express', 'MongoDB', 'React', 'Redis', 'WebRTC', 'JWT'],
      liveUrl: 'https://winzee-chat-demo.herokuapp.com',
      githubUrl: 'https://github.com/karigar/winzee-chat',
      features: [
        'Real-time messaging with typing indicators',
        'File sharing with drag & drop support',
        'Group chat functionality with admin controls',
        'Voice and video calls using WebRTC',
        'End-to-end encryption for security',
        'Message threading and replies',
        'Custom emoji reactions',
        'Bot integrations and commands'
      ]
    },
    {
      id: 'chatgpt-clone',
      title: 'ChatGPT Clone',
      slug: 'chatgpt-clone',
      shortDescription: 'AI-powered conversational interface with advanced features',
      fullDescription: 'A sophisticated AI chatbot interface that replicates ChatGPT functionality with enhanced features. Built with modern React and integrates with OpenAI API to provide intelligent responses. Features include conversation history, multiple chat sessions, customizable themes, export functionality, and advanced prompt engineering capabilities. The interface is optimized for both casual users and power users.',
      image: 'https://picsum.photos/seed/chatgpt/600/400.jpg',
      images: [
        'https://picsum.photos/seed/chatgpt/800/600.jpg',
        'https://picsum.photos/seed/chatgpt2/800/600.jpg',
        'https://picsum.photos/seed/chatgpt3/800/600.jpg'
      ],
      technologies: ['OpenAI API', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel', 'Prisma', 'PostgreSQL'],
      liveUrl: 'https://chatgpt-clone-karigar.vercel.app',
      githubUrl: 'https://github.com/karigar/chatgpt-clone',
      features: [
        'AI-powered conversations with GPT-4',
        'Multiple chat sessions management',
        'Conversation history with search',
        'Export conversations to PDF/Markdown',
        'Customizable themes and layouts',
        'Code syntax highlighting',
        'Image generation capabilities',
        'Custom prompt templates'
      ]
    },
    {
      id: 'gemini-clone',
      title: 'Gemini Clone',
      slug: 'gemini-clone',
      shortDescription: 'Google AI assistant interface with modern design and features',
      fullDescription: 'A modern recreation of Google Gemini AI interface with enhanced features and capabilities. Provides intelligent responses, image analysis capabilities, and multi-modal interactions. Built with cutting-edge web technologies and optimized for performance and user experience. Includes advanced features like document analysis, code generation, and creative writing assistance.',
      image: 'https://picsum.photos/seed/gemini/600/400.jpg',
      images: [
        'https://picsum.photos/seed/gemini/800/600.jpg',
        'https://picsum.photos/seed/gemini2/800/600.jpg',
        'https://picsum.photos/seed/gemini3/800/600.jpg'
      ],
      technologies: ['Google AI', 'React', 'Tailwind CSS', 'Vite', 'Firebase', 'Cloud Functions', 'TypeScript'],
      liveUrl: 'https://gemini-clone-karigar.web.app',
      githubUrl: 'https://github.com/karigar/gemini-clone',
      features: [
        'Multi-modal AI interactions (text, image, voice)',
        'Advanced image analysis and description',
        'Voice input with speech recognition',
        'Document analysis and summarization',
        'Code generation and explanation',
        'Creative writing assistance',
        'Real-time collaboration features',
        'Mobile-optimized responsive design'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-black">
      {/* Floating Dock - Always visible */}
      <nav className="fixed bottom-0 left-1/2 transform -translate-x-1/2 z-50 animate-fadeInUp" style={{ position: 'fixed', bottom: '20px', left: '50%', transform: 'translateX(-50%)', zIndex: 9999, height: '100px', paddingTop: '20px' }} aria-label="Main navigation">
        <div className="dock" style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="dock-inner" style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', padding: '0.85rem 1rem', borderRadius: '999px', background: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(255, 255, 255, 0.12)', backdropFilter: 'blur(18px)', transition: 'all 0.3s ease' }}>
            <button
              type="button"
              className="dock-item"
              onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
              aria-label="Go to Home section"
              title="Home"
            >
              <HomeIcon size={18} />
            </button>

            <button
              type="button"
              className="dock-item"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              aria-label="Go to About section"
              title="About"
            >
              <User size={18} />
            </button>

            <button
              type="button"
              className="dock-item"
              onClick={() => window.location.href = '/work'}
              aria-label="Go to Work page"
              title="Work"
            >
              <Briefcase size={18} />
            </button>

            <button
              type="button"
              className="dock-item dock-center"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              aria-label="Go to Projects section"
              title="Projects"
            >
              <span className="dock-avatar">K</span>
            </button>

            <button
              type="button"
              className="dock-item"
              onClick={() => document.getElementById('bottom')?.scrollIntoView({ behavior: 'smooth' })}
              aria-label="Go to Contact section"
              title="Contact"
            >
              <Mail size={18} />
            </button>

            <a
              href="https://www.linkedin.com/in/ritik-rana-28101982r"
              target="_blank"
              rel="noopener noreferrer"
              className="dock-item"
              aria-label="LinkedIn Profile"
              title="LinkedIn"
            >
              <Linkedin size={18} />
            </a>

            <a
              href="https://github.com/RitikRana-hue"
              target="_blank"
              rel="noopener noreferrer"
              className="dock-item"
              aria-label="GitHub Profile"
              title="GitHub"
            >
              <Github size={18} />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="home" className="hero-section">
        <div className="hero-content">
          <div className="hero-left">
            <div className="hero-header">
              <div className="hero-logo">
                <img
                  src="/klogo.png"
                  alt="Karigar Logo - Ritik Rana Creative Developer"
                  width={120}
                  height={36}
                  style={{
                    objectFit: 'contain',
                    filter: 'brightness(0) invert(1)'
                  }}
                />
              </div>
              <p className="hero-description">
                Passionate Creative Designer and Developer, dedicated to crafting innovative solutions and exceptional digital experiences through modern technologies
              </p>
            </div>
            <div className="hero-main-content">
              <h1 className="hero-title">
                <span>Creative</span><br />
                <span>Developer</span> & <span>Designer</span>
              </h1>
              <p className="hero-subtitle">
                Transforming ideas into stunning digital experiences
              </p>
            </div>
          </div>
          <div className="hero-right">
            <div className="hero-image-container">
              <Image
                src="/heroimage.jpg"
                alt="Ritik Rana - Creative Developer and Designer workspace"
                className="hero-image"
                width={800}
                height={800}
                priority
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="bg-black">
        {/* About Section */}
        <section id="about" className="about-section">
          <div className="about-container">
            <div className="about-content animate-fadeInLeft">
              <div className="about-label">About Me</div>
              <h2 className="about-title">Crafting Digital Excellence</h2>
              <p className="about-description">
                I&apos;m a passionate creative designer and developer who believes in the power of simplicity.
                My approach combines clean aesthetics with functional design to create digital experiences
                that not only look beautiful but also solve real problems.
              </p>
              <div className="about-features">
                <div className="about-feature">
                  <div className="about-feature-icon">
                    <Code size={20} />
                  </div>
                  <div className="about-feature-content">
                    <h3 className="about-feature-title">Clean Code</h3>
                    <p className="about-feature-description">
                      Writing maintainable, scalable code with best practices and modern technologies
                    </p>
                  </div>
                </div>
                <div className="about-feature">
                  <div className="about-feature-icon">
                    <Palette size={20} />
                  </div>
                  <div className="about-feature-content">
                    <h3 className="about-feature-title">Design First</h3>
                    <p className="about-feature-description">
                      User-centered design approach with focus on aesthetics and functionality
                    </p>
                  </div>
                </div>
                <div className="about-feature">
                  <div className="about-feature-icon">
                    <Zap size={20} />
                  </div>
                  <div className="about-feature-content">
                    <h3 className="about-feature-title">Performance</h3>
                    <p className="about-feature-description">
                      Optimized solutions that deliver exceptional speed and user experience
                    </p>
                  </div>
                </div>
              </div>
              <button className="about-cta" onClick={() => window.location.href = '/work'}>
                View My Projects
                <ArrowUpRight size={20} />
              </button>
            </div>
            <div className="about-visual animate-fadeInRight">
              <div className="about-image-container">
                <Image
                  src="/ritik.png"
                  alt="Ritik Rana - Professional headshot"
                  className="about-image"
                  width={800}
                  height={800}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
                <div className="about-image-overlay"></div>
              </div>
              <div className="about-stats">
                <div className="about-stat">
                  <div className="about-stat-number">5+</div>
                  <div className="about-stat-label">Years Experience</div>
                </div>
                <div className="about-stat">
                  <div className="about-stat-number">50+</div>
                  <div className="about-stat-label">Happy Clients</div>
                </div>
                <div className="about-stat">
                  <div className="about-stat-number">100%</div>
                  <div className="about-stat-label">Dedication</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="projects-section">
          <div className="projects-header">
            <h2 className="projects-title">Impressive Works</h2>
            <p className="projects-subtitle">A curated selection of projects that showcase technical expertise and creative problem-solving</p>
          </div>
          <div className="projects-grid">
            {projects.slice(0, 4).map((project, index) => (
              <article
                key={project.id}
                className="project-card animate-slide-up"
                style={{ animationDelay: `${(index + 1) * 0.1}s` }}
                onClick={() => {
                  window.location.href = `/work/${project.id}`;
                }}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.title} - Project screenshot`}
                    className="project-image"
                    width={600}
                    height={400}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                  <div className="project-overlay">
                    <div className="project-overlay-text">View Project Details</div>
                  </div>
                  <button
                    className="project-link"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.location.href = `/work/${project.id}`;
                    }}
                    aria-label={`View ${project.title} project details`}
                  >
                    <ArrowUpRight size={20} />
                  </button>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.shortDescription}</p>
                  <div className="project-tech">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Project Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 bg-black/80 modal-backdrop-refined z-50 flex items-center justify-center p-4 project-modal-refined"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setSelectedProject(null)
              }
            }}
          >
            <div className="project-modal-content-refined max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              {/* Modal Header */}
              <div className="modal-header-refined">
                <h2 className="modal-title-refined">{selectedProject.title}</h2>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="modal-close-button-refined"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="modal-body-refined">
                {/* Project Images - Refined Sizing */}
                <div className="modal-images-container">
                  <div className="modal-images-grid">
                    {selectedProject.images.map((image: string, index: number) => (
                      <div key={index} className="modal-image-refined">
                        <Image
                          src={image}
                          alt={`${selectedProject.title} - Image ${index + 1}`}
                          width={400}
                          height={180}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Content Container - Constrained Width */}
                <div className="modal-content-container">
                  {/* Project Description - Improved Readability */}
                  <div className="modal-description-section">
                    <h3 className="modal-section-title">About This Project</h3>
                    <div className="modal-description-text">
                      <div className="modal-description-paragraph">
                        {selectedProject.fullDescription.split('. ').slice(0, 2).join('. ')}.
                      </div>
                      <div className="modal-description-paragraph">
                        {selectedProject.fullDescription.split('. ').slice(2).join('. ')}
                      </div>
                    </div>
                  </div>

                  {/* Features - Bullet Points */}
                  <div className="modal-features-section">
                    <h3 className="modal-section-title">Key Features</h3>
                    <div className="modal-features-list">
                      {selectedProject.features.map((feature: string, index: number) => (
                        <div key={index} className="modal-feature-item">
                          <div className="modal-feature-dot"></div>
                          <span className="modal-feature-text">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="modal-tech-section">
                    <h3 className="modal-section-title">Technologies Used</h3>
                    <div className="modal-tech-grid">
                      {selectedProject.technologies.map((tech: string) => (
                        <span
                          key={tech}
                          className="modal-tech-tag-refined"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons - Outlined Style */}
                  <div className="modal-buttons-container">
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="modal-button-outlined"
                    >
                      <ExternalLink size={18} />
                      <span>View Live Website</span>
                    </a>
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="modal-button-outlined modal-button-secondary"
                    >
                      <Code size={18} />
                      <span>View Source Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Closing Section */}
        <section className="closing-section">
          <div className="closing-container">
            <div className="closing-content">
              <h2 className="closing-title">
                Let&apos;s Build<br />
                Something Amazing
              </h2>
              <p className="closing-subtitle">
                Ready to bring your ideas to life with creative solutions and exceptional design
              </p>
              <button className="closing-cta" onClick={() => window.open('mailto:ritikranar1982@gmail.com', '_blank')}>
                Start Your Project
                <ArrowUpRight size={20} />
              </button>
            </div>
            <div className="closing-visual">
              <div className="closing-graphic">
                <div className="closing-circle">
                  <div className="closing-circle-inner"></div>
                </div>
                <div className="closing-dots">
                  <div className="dot dot-1"></div>
                  <div className="dot dot-2"></div>
                  <div className="dot dot-3"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Banner Section */}
        <section id="bottom" className="banner-section">
          <div className="banner-container">
            <div className="banner-content">
              <div className="banner-text-left">
                Profection choose
                <br />
                <div className="banner-logo">
                  <img
                    src="/klogo.png"
                    alt="Karigar"
                    width={200}
                    height={60}
                    style={{
                      objectFit: 'contain',
                      filter: 'brightness(0) invert(1)'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}