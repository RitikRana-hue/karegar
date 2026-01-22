'use client'

import { useEffect } from 'react'
import { RefreshCw, Home } from 'lucide-react'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error('Application error:', error)
    }, [error])

    return (
        <div className="min-h-screen bg-black flex items-center justify-center">
            <div className="text-center px-4">
                <div className="mb-8">
                    <h1 className="text-6xl font-bold text-red-500 mb-4">Oops!</h1>
                    <h2 className="text-2xl font-semibold text-gray-300 mb-4">Something went wrong</h2>
                    <p className="text-gray-400 max-w-md mx-auto mb-8">
                        We encountered an unexpected error. Please try refreshing the page or go back to the homepage.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={reset}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                    >
                        <RefreshCw size={20} />
                        Try Again
                    </button>

                    <button
                        onClick={() => window.location.href = '/'}
                        className="inline-flex items-center gap-2 px-6 py-3 border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white rounded-lg transition-colors"
                    >
                        <Home size={20} />
                        Go Home
                    </button>
                </div>
            </div>
        </div>
    )
}