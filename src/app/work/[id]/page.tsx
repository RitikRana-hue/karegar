'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Home as HomeIcon, Briefcase, User, Mail, Linkedin, Github } from 'lucide-react'
import { useParams } from 'next/navigation'

// This needs to be a server component for generateStaticParams
// But we need client features, so we'll handle this differently

export default function ProjectPage() {
    const params = useParams()
    const projectId = params.id as string

    const projects = [
        {
            id: 'smart-city-solution',
            title: 'NodesIO',
            description: 'NodesIO is a smart city infrastructure platform that helps governments monitor real-world data to keep cities cleaner.',
            fullDescription: 'NodesIO is a smart city infrastructure solution designed to collect real-world data from the city and reflect it on a centralized dashboard connected with government authorities. The platform enables live monitoring, better decision-making, and operational efficiency, helping reduce waste by up to 70% and making cities more sustainable.',
            image: '/images/nodesiohome.jpeg',
            images: [
                '/images/nodesiohome.jpeg',
                '/images/nodesio1.jpeg',
                '/images/nodesio2.jpeg'
            ],
            liveUrl: 'https://www.nodesio.in/',
            githubUrl: '',
            technologies: ['Next.js', 'React', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Firebase'],
            features: [
                'Real-world data monitoring',
                'Government-connected admin dashboard',
                'Mobile-friendly responsive UI',
                'Web-based smart city application',
                'Live operational insights'
            ],
            category: 'iot',
            status: 'Live',
            year: '2025',
            rating: 4.9,
            views: '2.3k'
        },
        {
            id: 'instasell',
            title: 'Instasell',
            description: 'Instasell is a bidding-based platform that allows users to sell items quickly within a short time period.',
            fullDescription: 'Instasell is a bidding-based web platform designed to help users sell their items in a short time frame using a competitive bid system. Sellers can list products, and buyers place bids within a limited time window, ensuring fast and fair pricing. The platform is currently under development and focuses on building a smooth bidding experience, scalable backend architecture, and a responsive user interface for future growth.',
            image: '/app/images/instasellhome.jpeg',
            images: [
                '/app/images/instasellhome.jpeg',
                '/app/images/instasell1.jpeg',
                '/app/images/instasell2.jpeg'
            ],
            liveUrl: '#',
            githubUrl: '#',
            technologies: ['Next.js', 'Tailwind CSS', 'Database', 'Node.js'],
            features: [
                'Time-based bidding system for quick selling',
                'Simple and fast item listing process',
                'Competitive bidding mechanism',
                'Responsive web interface',
                'Scalable architecture (under development)'
            ],
            category: 'web',
            status: 'In Progress',
            year: '2026',
            rating: 4.5,
            views: '1.2k'
        }
    ]

    const project = projects.find(p => p.id === projectId)

    if (!project) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
                    <p className="text-gray-400 mb-8">The project you're looking for doesn't exist.</p>
                    <Link href="/work" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                        <ArrowLeft size={20} />
                        Back to Work
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-black">
            {/* Hero Section */}
            <section className="project-detail-hero">
                <div className="project-hero-container">
                    <div className="project-hero-content">
                        <div className="project-breadcrumb">
                            <Link href="/work" className="breadcrumb-link">
                                ← Back to Projects
                            </Link>
                        </div>

                        <div className="project-hero-main">
                            <h1 className="project-hero-title">{project.title}</h1>
                            <p className="project-hero-description">{project.description}</p>

                            <div className="project-hero-meta">
                                <span className="project-status">{project.status}</span>
                                <span className="project-year">{project.year}</span>
                                <span className="project-category">{project.category}</span>
                            </div>

                            <div className="project-hero-actions">
                                <div className="mb-20">
                                    <div className="flex flex-col sm:flex-row gap-8 justify-center">
                                        <div className="flex items-center justify-center gap-4 px-12 py-6 bg-yellow-600/20 text-yellow-100 rounded-2xl border border-yellow-500/30 text-lg md:text-xl font-semibold">
                                            <span className="relative z-10">🚧 Under Progress</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="project-hero-image">
                        <Image
                            src={project.image}
                            alt={project.title}
                            width={600}
                            height={400}
                            className="hero-project-img"
                            priority
                            placeholder="blur"
                            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                        />
                    </div>
                </div>
            </section>

            {/* Project Details */}
            <section className="project-details-section">
                <div className="project-details-container">
                    {/* Project Images */}
                    <div className="project-images">
                        <h2 className="section-title">Project Gallery</h2>
                        <div className="images-grid">
                            {project.images.map((image: string, index: number) => (
                                <div key={index} className="project-image-card">
                                    <Image
                                        src={image}
                                        alt={`${project.title} - Image ${index + 1}`}
                                        width={400}
                                        height={300}
                                        className="project-img"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Project Info Grid */}
                    <div className="project-info-grid">
                        {/* About */}
                        <div className="project-info-card">
                            <h3 className="info-card-title">About</h3>
                            <p className="info-card-text">{project.fullDescription}</p>
                        </div>

                        {/* Technologies */}
                        <div className="project-info-card">
                            <h3 className="info-card-title">Technologies</h3>
                            <div className="tech-tags">
                                {project.technologies.map((tech: string) => (
                                    <span key={tech} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                        </div>

                        {/* Features */}
                        <div className="project-info-card">
                            <h3 className="info-card-title">Key Features</h3>
                            <ul className="features-list">
                                {project.features.slice(0, 6).map((feature: string, index: number) => (
                                    <li key={index} className="feature-item">{feature}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Project Status Section */}
            {project.id === 'instasell' && (
                <section className="projects-section">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-center mb-20">
                            <div className="flex items-center justify-center gap-4 px-12 py-6 bg-yellow-600/20 text-yellow-100 rounded-2xl border border-yellow-500/30 text-lg md:text-xl font-semibold">
                                <span className="relative z-10">🚧 Under Progress</span>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Floating Dock */}
            <nav className="fixed bottom-0 left-1/2 transform -translate-x-1/2 z-50 animate-fadeInUp" style={{ position: 'fixed', bottom: '20px', left: '50%', transform: 'translateX(-50%)', zIndex: 9999, height: '100px', paddingTop: '20px' }} aria-label="Main navigation">
                <div className="dock" style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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
        </div>
    )
}
