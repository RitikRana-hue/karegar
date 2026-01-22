'use client'

import Link from 'next/link'
import { ArrowLeft, Home } from 'lucide-react'

export default function NotFound() {
    const handleGoBack = () => {
        if (typeof window !== 'undefined') {
            window.history.back()
        }
    }

    return (
        <div className="min-h-screen bg-black flex items-center justify-center">
            <div className="text-center px-4">
                <div className="mb-8">
                    <h1 className="text-8xl font-bold text-white mb-4">404</h1>
                    <h2 className="text-2xl font-semibold text-gray-300 mb-4">Page Not Found</h2>
                    <p className="text-gray-400 max-w-md mx-auto mb-8">
                        The page you're looking for doesn't exist or has been moved to a different location.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                    >
                        <Home size={20} />
                        Go Home
                    </Link>

                    <button
                        onClick={handleGoBack}
                        className="inline-flex items-center gap-2 px-6 py-3 border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white rounded-lg transition-colors"
                    >
                        <ArrowLeft size={20} />
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    )
}