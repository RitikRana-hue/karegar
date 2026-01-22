import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Github, Home as HomeIcon, Briefcase, User, Mail, Linkedin } from 'lucide-react'
import ProjectPageClient from './ProjectPageClient'

// Generate static params for all project IDs
export async function generateStaticParams() {
  const projectIds = [
    'learnlogicify',
    'winzee', 
    'chatgpt-clone',
    'gemini-clone',
    'ecommerce-platform',
    'task-management-app'
  ]
  
  return projectIds.map((id) => ({
    id: id,
  }))
}

export default function ProjectPage({ params }: { params: { id: string } }) {
    return <ProjectPageClient projectId={params.id} />
}
