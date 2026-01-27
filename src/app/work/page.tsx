'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, ExternalLink, Code, Briefcase, Home as HomeIcon, User, Mail, Star, Calendar, Eye, Linkedin, Github } from 'lucide-react'
import { useState } from 'react'

// This would be better as a server component with metadata export, but keeping as client component for interactivity
// Consider moving filter logic to URL params for better SEO

export default function WorkPage() {
    const [hoveredProject, setHoveredProject] = useState<string | null>(null)
    const [filter, setFilter] = useState('all')

    const projects = [
        {
            id: 'smart-city-solution',
            title: 'NodesIO',
            description: 'NodesIO is a smart city infrastructure platform that helps governments monitor real-world data to keep cities cleaner.',
            image: '/app/images/nodesiohome.jpeg',
            technologies: ['Next.js', 'React', 'Tailwind CSS', 'Node.js', 'MongoDB'],
            category: 'iot',
            status: 'Live',
            year: '2025',
            rating: 4.9,
            views: '2.3k',
            liveUrl: 'https://www.nodesio.in/',
            githubUrl: ''
        },
        {
            id: 'instasell',
            title: 'Instasell',
            description: 'Instasell is a bidding-based platform that allows users to sell items quickly within a short time period.',
            image: '/app/images/instasellhome.jpeg',
            technologies: ['Next.js', 'Tailwind CSS', 'Database', 'Node.js'],
            category: 'web',
            status: 'In Progress',
            year: '2026',
            rating: 4.5,
            views: '1.2k',
            liveUrl: '#',
            githubUrl: '#'
        }
    ]

    const categories = [
        { id: 'all', name: 'All Projects', count: projects.length },
        { id: 'web', name: 'Web Apps', count: projects.filter(p => p.category === 'web').length },
        { id: 'app', name: 'Applications', count: projects.filter(p => p.category === 'app').length },
        { id: 'ai', name: 'AI Projects', count: projects.filter(p => p.category === 'ai').length }
    ]

    const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter)

    return (
        <div className="min-h-screen bg-black">
            {/* Projects Grid */}
            <section className="projects-section">
                <div className="projects-header">
                    <h2 className="projects-title">Impressive Works</h2>
                    <p className="projects-subtitle">A curated selection of projects that showcase technical expertise and creative problem-solving</p>
                </div>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <Link
                            key={project.id}
                            href={`/work/${project.id}`}
                            className="project-card animate-slide-up block"
                            style={{ animationDelay: `${(index + 1) * 0.1}s` }}
                        >
                            <div className="relative overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    className="project-image"
                                    width={600}
                                    height={400}
                                    placeholder="blur"
                                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                                />
                                <div className="project-overlay" style={{ pointerEvents: 'none' }}>
                                    <div className="project-overlay-text">View Project Details</div>
                                </div>
                                <div className="project-link" style={{ pointerEvents: 'none' }}>
                                    <ArrowUpRight size={20} />
                                </div>
                            </div>
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <div className="project-tech">
                                    {project.technologies.slice(0, 3).map((tech) => (
                                        <span key={tech} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Floating Dock - Always visible */}
            <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 z-50 animate-fadeInUp" style={{ position: 'fixed', bottom: '20px', left: '50%', transform: 'translateX(-50%)', zIndex: 9999, height: '100px', paddingTop: '20px' }}>
                <nav className="dock" aria-label="Section navigation" style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div className="dock-inner" style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', padding: '0.85rem 1rem', borderRadius: '999px', background: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(255, 255, 255, 0.12)', backdropFilter: 'blur(18px)', transition: 'all 0.3s ease' }}>
                        <button
                            type="button"
                            className="dock-item"
                            onClick={() => window.location.href = '/'}
                            aria-label="Go to Home"
                            title="Home"
                        >
                            <HomeIcon size={18} />
                        </button>

                        <button
                            type="button"
                            className="dock-item"
                            onClick={() => window.location.href = '/#about'}
                            aria-label="Go to About"
                            title="About"
                        >
                            <User size={18} />
                        </button>

                        <button
                            type="button"
                            className="dock-item"
                            onClick={() => window.location.href = '/work'}
                            aria-label="Go to Work"
                            title="Work"
                        >
                            <Briefcase size={18} />
                        </button>

                        <button
                            type="button"
                            className="dock-item dock-center"
                            onClick={() => window.location.href = '/#projects'}
                            aria-label="Go to Projects"
                            title="Projects"
                        >
                            <span className="dock-avatar">K</span>
                        </button>

                        <button
                            type="button"
                            className="dock-item"
                            onClick={() => window.location.href = 'mailto:ritikranar1982@gmail.com'}
                            aria-label="Contact"
                            title="Contact"
                        >
                            <Mail size={18} />
                        </button>

                        <button
                            type="button"
                            className="dock-item"
                            onClick={() => window.open('https://www.linkedin.com/in/ritik-rana-28101982r', '_blank')}
                            aria-label="LinkedIn Profile"
                            title="LinkedIn"
                        >
                            <Linkedin size={18} />
                        </button>

                        <button
                            type="button"
                            className="dock-item"
                            onClick={() => window.open('https://github.com/RitikRana-hue', '_blank')}
                            aria-label="GitHub Profile"
                            title="GitHub"
                        >
                            <Github size={18} />
                        </button>
                    </div>
                </nav>
            </div>

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
        </div>
    )
}