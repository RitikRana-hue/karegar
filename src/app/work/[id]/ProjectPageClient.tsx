'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Github, Home as HomeIcon, Briefcase, User, Mail, Linkedin } from 'lucide-react'

interface ProjectPageClientProps {
    projectId: string
}

export default function ProjectPageClient({ projectId }: ProjectPageClientProps) {
    const projects = [
        {
            id: 'learnlogicify',
            title: 'Learnlogicify Landing Page',
            description: 'Modern educational platform with clean design and intuitive user experience',
            fullDescription: 'A comprehensive educational platform built with modern web technologies. Features include interactive course modules, student progress tracking, responsive design, and seamless user experience. The platform integrates with various learning management systems and provides real-time analytics for educators. Built with performance and accessibility in mind, it supports multiple languages and provides a smooth learning experience across all devices.',
            image: 'https://picsum.photos/seed/learnlogicify/600/400.jpg',
            images: [
                'https://picsum.photos/seed/learnlogicify/800/600.jpg',
                'https://picsum.photos/seed/learnlogicify2/800/600.jpg',
                'https://picsum.photos/seed/learnlogicify3/800/600.jpg'
            ],
            liveUrl: 'https://learnlogicify.com',
            githubUrl: 'https://github.com/username/learnlogicify',
            technologies: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Node.js', 'MongoDB', 'Vercel'],
            features: [
                'Responsive design for all devices',
                'Interactive course modules with video support',
                'Real-time progress tracking system',
                'Advanced analytics dashboard',
                'Multi-language support (5+ languages)',
                'Dark/Light theme toggle',
                'Offline course download capability',
                'Social learning features'
            ],
            category: 'web',
            status: 'Live',
            year: '2024',
            rating: 4.9,
            views: '2.3k'
        },
        {
            id: 'winzee',
            title: 'Winzee Web Chat Application',
            description: 'Real-time chat application with advanced features and beautiful UI',
            fullDescription: 'A sophisticated real-time chat application built with modern web technologies. Features include instant messaging, file sharing, group chats, emoji reactions, and voice/video calling capabilities. The application supports multiple chat rooms, provides end-to-end encryption for secure communication, and includes advanced features like message threading, custom themes, and bot integrations.',
            image: 'https://picsum.photos/seed/winzee/600/400.jpg',
            images: [
                'https://picsum.photos/seed/winzee/800/600.jpg',
                'https://picsum.photos/seed/winzee2/800/600.jpg',
                'https://picsum.photos/seed/winzee3/800/600.jpg'
            ],
            liveUrl: 'https://winzee-chat.com',
            githubUrl: 'https://github.com/username/winzee-chat',
            technologies: ['Node.js', 'Socket.io', 'Express', 'MongoDB', 'React', 'Redis', 'WebRTC', 'JWT'],
            features: [
                'Real-time messaging with typing indicators',
                'File sharing with drag & drop support',
                'Group chat functionality with admin controls',
                'Voice and video calls using WebRTC',
                'End-to-end encryption for security',
                'Message threading and replies',
                'Custom emoji reactions',
                'Bot integrations and commands'
            ],
            category: 'app',
            status: 'Live',
            year: '2024',
            rating: 4.8,
            views: '1.8k'
        },
        {
            id: 'chatgpt-clone',
            title: 'ChatGPT Clone',
            description: 'AI-powered conversational interface with advanced features',
            fullDescription: 'A sophisticated AI chatbot interface that replicates ChatGPT functionality with enhanced features. Built with modern React and integrates with OpenAI API to provide intelligent responses. Features include conversation history, multiple chat sessions, customizable themes, export functionality, and advanced prompt engineering capabilities. The interface is optimized for both casual users and power users.',
            image: 'https://picsum.photos/seed/chatgpt/600/400.jpg',
            images: [
                'https://picsum.photos/seed/chatgpt/800/600.jpg',
                'https://picsum.photos/seed/chatgpt2/800/600.jpg',
                'https://picsum.photos/seed/chatgpt3/800/600.jpg'
            ],
            liveUrl: 'https://chatgpt-clone-demo.com',
            githubUrl: 'https://github.com/username/chatgpt-clone',
            technologies: ['OpenAI API', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel', 'Prisma', 'PostgreSQL'],
            features: [
                'AI-powered conversations with GPT-4',
                'Multiple chat sessions management',
                'Conversation history with search',
                'Export conversations to PDF/Markdown',
                'Customizable themes and layouts',
                'Code syntax highlighting',
                'Image generation capabilities',
                'Custom prompt templates'
            ],
            category: 'ai',
            status: 'Live',
            year: '2024',
            rating: 4.7,
            views: '3.1k'
        },
        {
            id: 'gemini-clone',
            title: 'Gemini Clone',
            description: 'Google AI assistant interface with modern design and features',
            fullDescription: 'A modern recreation of Google Gemini AI interface with enhanced features and capabilities. Provides intelligent responses, image analysis capabilities, and multi-modal interactions. Built with cutting-edge web technologies and optimized for performance and user experience. Includes advanced features like document analysis, code generation, and creative writing assistance.',
            image: 'https://picsum.photos/seed/gemini/600/400.jpg',
            images: [
                'https://picsum.photos/seed/gemini/800/600.jpg',
                'https://picsum.photos/seed/gemini2/800/600.jpg',
                'https://picsum.photos/seed/gemini3/800/600.jpg'
            ],
            liveUrl: 'https://gemini-clone-demo.com',
            githubUrl: 'https://github.com/username/gemini-clone',
            technologies: ['Google AI', 'React', 'Tailwind CSS', 'Vite', 'Firebase', 'Cloud Functions', 'TypeScript'],
            features: [
                'Multi-modal AI interactions (text, image, voice)',
                'Advanced image analysis and description',
                'Voice input with speech recognition',
                'Document analysis and summarization',
                'Code generation and explanation',
                'Creative writing assistance',
                'Real-time collaboration features',
                'Mobile-optimized responsive design'
            ],
            category: 'ai',
            status: 'Live',
            year: '2024',
            rating: 4.6,
            views: '2.7k'
        },
        {
            id: 'ecommerce-platform',
            title: 'E-commerce Platform',
            description: 'Full-stack e-commerce solution with React and Node.js',
            fullDescription: 'A comprehensive e-commerce platform with advanced features for online shopping. Includes product catalog, shopping cart, payment integration, order tracking, and admin dashboard. Built with scalability and security in mind, featuring real-time inventory management, advanced search capabilities, and seamless checkout experience.',
            image: 'https://picsum.photos/seed/ecommerce/600/400.jpg',
            images: [
                'https://picsum.photos/seed/ecommerce/800/600.jpg',
                'https://picsum.photos/seed/ecommerce2/800/600.jpg',
                'https://picsum.photos/seed/ecommerce3/800/600.jpg'
            ],
            liveUrl: 'https://ecommerce-demo.com',
            githubUrl: 'https://github.com/username/ecommerce',
            technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API', 'Redux', 'Express', 'JWT'],
            features: [
                'Product catalog management',
                'Secure payment processing with Stripe',
                'Real-time inventory tracking',
                'Advanced search and filtering',
                'Order management system',
                'Admin dashboard with analytics',
                'Mobile responsive design',
                'Email notifications and receipts'
            ],
            category: 'web',
            status: 'Live',
            year: '2023',
            rating: 4.8,
            views: '4.2k'
        },
        {
            id: 'task-management-app',
            title: 'Task Management App',
            description: 'Collaborative task management tool with real-time updates',
            fullDescription: 'A powerful task management application designed for team collaboration. Features include real-time updates, task assignment, progress tracking, file attachments, and team communication tools. Built to enhance productivity and workflow efficiency with intuitive drag-and-drop interfaces and comprehensive project management capabilities.',
            image: 'https://picsum.photos/seed/taskapp/600/400.jpg',
            images: [
                'https://picsum.photos/seed/taskapp/800/600.jpg',
                'https://picsum.photos/seed/taskapp2/800/600.jpg',
                'https://picsum.photos/seed/taskapp3/800/600.jpg'
            ],
            liveUrl: 'https://taskmanager-demo.com',
            githubUrl: 'https://github.com/username/taskapp',
            technologies: ['Next.js', 'TypeScript', 'WebSocket', 'PostgreSQL', 'Prisma', 'Tailwind CSS'],
            features: [
                'Real-time collaboration with WebSocket',
                'Drag-and-drop task management',
                'Team assignment and notifications',
                'Progress tracking with analytics',
                'File attachments and comments',
                'Calendar integration',
                'Time tracking capabilities',
                'Custom workflow automation'
            ],
            category: 'app',
            status: 'Live',
            year: '2023',
            rating: 4.5,
            views: '1.9k'
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
                                <button
                                    className="project-btn-primary"
                                    onClick={() => window.open(project.liveUrl, '_blank')}
                                >
                                    <ExternalLink size={18} />
                                    View Live Project
                                </button>
                                <button
                                    className="project-btn-secondary"
                                    onClick={() => window.open(project.githubUrl, '_blank')}
                                >
                                    <Github size={18} />
                                    Source Code
                                </button>
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

            {/* Floating Dock */}
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
        </div>
    )
}