"use client"
import { useState, FormEvent } from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default function UnsubscribePage() {
  const [email, setEmail] = useState('')
  const [reason, setReason] = useState('too-many')
  const [feedback, setFeedback] = useState('')
  const [isUnsubscribed, setIsUnsubscribed] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (FormEvent) => {
    e.preventDefault()
    setError('')

    if (!email) {
      setError('Email is required')
      return
    }

    try {
      // Here you would typically make an API call to handle the unsubscribe logic
      // For demonstration, we're just setting the state after a delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      setIsUnsubscribed(true)
    } catch (err) {
      setError('An error occurred. Please try again.')
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100">
      <Head>
        <title>Unsubscribe | Atmosoft&trade;</title>
        <meta name="description" content="Unsubscribe from our email list" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="py-6 px-4 sm:px-6 lg:px-8 bg-white shadow">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Atmosoft&trade;~WraX</h1>
          <Link href="/" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
            ← Back to Home
          </Link>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-8">
            <div className="flex justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
              {isUnsubscribed ? "You've Been Unsubscribed" : "Unsubscribe from Our Emails"}
            </h2>
            {!isUnsubscribed ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Reason for unsubscribing
                  </label>
                  <div className="mt-2 space-y-2">
                    {['too-many', 'not-relevant', 'other'].map((value) => (
                      <div key={value} className="flex items-center">
                        <input
                          id={value}
                          name="reason"
                          type="radio"
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                          checked={reason === value}
                          onChange={() => setReason(value)}
                        />
                        <label htmlFor={value} className="ml-3 block text-sm font-medium text-gray-700">
                          {value === 'too-many' ? 'Too many emails' :
                           value === 'not-relevant' ? 'Content not relevant' : 'Other'}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <label htmlFor="feedback" className="block text-sm font-medium text-gray-700">
                    Additional feedback (optional)
                  </label>
                  <textarea
                    id="feedback"
                    name="feedback"
                    rows={3}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Tell us how we can improve..."
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                  ></textarea>
                </div>
                {error && (
                  <p className="text-red-500 text-sm">{error}</p>
                )}
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Unsubscribe
                </button>
              </form>
            ) : (
              <div className="text-center">
                <p className="text-gray-600 mb-4">
                  We&apos;re sorry to see you go. You&apos;ve been successfully unsubscribed from our mailing list.
                </p>
                <Link href="/" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Return to Homepage
                </Link>
              </div>
            )}
          </div>
        </div>
      </main>

      <footer className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Atmosoft&trade;. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}