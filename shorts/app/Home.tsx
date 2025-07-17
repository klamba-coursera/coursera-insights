"use client"

import { Badge } from "@/components/ui/badge"
import { ChevronDown, Users, TrendingUp, Play } from "lucide-react"
import { useState } from "react"
import SuccessShorts from "./SuccessShorts"

export default function HomePage() {
  const [selectedTab, setSelectedTab] = useState("Success Shorts")
  const [isInsightsDropdownOpen, setIsInsightsDropdownOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* New Coursera Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Left side - Menu, Logo, Explore */}
            <div className="flex items-center space-x-4">
              {/* Menu icon */}
              <button className="p-2 hover:bg-gray-100 rounded">
                <div className="grid grid-cols-3 gap-1 w-4 h-4">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="w-1 h-1 bg-gray-600 rounded-full"></div>
                  ))}
                </div>
              </button>

              {/* Coursera Logo */}
              <div className="flex items-center">
                <span className="text-2xl font-bold text-blue-600">coursera</span>
              </div>

              {/* Explore Button */}
              <button className="flex items-center space-x-1 px-4 py-2 border border-gray-300 rounded hover:bg-gray-50">
                <span className="text-blue-600 font-medium">Explore</span>
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            {/* Center - Search Bar */}
            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="What do you want to learn?"
                  className="w-full px-4 py-2 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Right side - Icons and Profile */}
            <div className="flex items-center space-x-4">
              {/* Globe icon */}
              <button className="p-2 hover:bg-gray-100 rounded">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9"
                  />
                </svg>
              </button>

              {/* Notification bell */}
              <button className="p-2 hover:bg-gray-100 rounded">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </button>

              {/* User avatar with ONLINE badge */}
              <div className="relative">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">👤</span>
                </div>
                <div className="absolute -bottom-1 -right-1 bg-green-500 text-white text-xs px-1 rounded">ONLINE</div>
              </div>

              {/* Profile icon */}
              <button className="w-8 h-8 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-700">
                <span className="text-sm font-medium">P</span>
              </button>
            </div>
          </div>

          {/* Navigation Bar */}
          <div className="border-t">
            <nav className="flex space-x-8">
              <a
                href="#"
                className="py-4 px-1 border-b-2 border-transparent text-gray-700 hover:text-blue-600 font-medium"
              >
                Home
              </a>
              <a
                href="#"
                className="py-4 px-1 border-b-2 border-transparent text-gray-700 hover:text-blue-600 font-medium"
              >
                My Learning
              </a>
              <a
                href="#"
                className="py-4 px-1 border-b-2 border-transparent text-gray-700 hover:text-blue-600 font-medium"
              >
                Online Degrees
              </a>
              <a
                href="#"
                className="py-4 px-1 border-b-2 border-transparent text-gray-700 hover:text-blue-600 font-medium"
              >
                Careers
              </a>
              <div className="relative">
                <button
                  onClick={() => setIsInsightsDropdownOpen(!isInsightsDropdownOpen)}
                  className="py-4 px-1 border-b-2 border-blue-600 text-blue-600 font-medium flex items-center space-x-1"
                >
                  <span>Insights</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {isInsightsDropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                    <div className="py-2">
                      <button
                        onClick={() => {
                          setSelectedTab("Events")
                          setIsInsightsDropdownOpen(false)
                        }}
                        className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${
                          selectedTab === "Events" ? "bg-blue-50 text-blue-600" : "text-gray-700"
                        }`}
                      >
                        Events
                      </button>
                      <button
                        onClick={() => {
                          setSelectedTab("Roadmaps")
                          setIsInsightsDropdownOpen(false)
                        }}
                        className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${
                          selectedTab === "Roadmaps" ? "bg-blue-50 text-blue-600" : "text-gray-700"
                        }`}
                      >
                        Roadmaps
                      </button>
                      <button
                        onClick={() => {
                          setSelectedTab("Community")
                          setIsInsightsDropdownOpen(false)
                        }}
                        className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${
                          selectedTab === "Community" ? "bg-blue-50 text-blue-600" : "text-gray-700"
                        }`}
                      >
                        Community
                      </button>
                      <button
                        onClick={() => {
                          setSelectedTab("Success Shorts")
                          setIsInsightsDropdownOpen(false)
                        }}
                        className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${
                          selectedTab === "Success Shorts" ? "bg-blue-50 text-blue-600" : "text-gray-700"
                        }`}
                      >
                        Success Shorts
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Play className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Success Shorts</h1>
            <Badge className="bg-red-500 text-white animate-pulse">
              <TrendingUp className="w-3 h-3 mr-1" />
              Trending
            </Badge>
          </div>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Watch real transformation stories in 60 seconds. From career pivots to salary jumps - get inspired by
            learners who made it happen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4" />
              <span>2.5M+ views this month</span>
            </div>
            <div className="flex items-center space-x-2">
              <Play className="w-4 h-4 text-blue-500" />
              <span>New shorts daily</span>
            </div>
          </div>
        </div>
      </section>

      {/* Success Shorts Component */}
      <SuccessShorts />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Play className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-lg">Success Shorts</span>
              </div>
              <p className="text-gray-400">Real stories, real transformations, real inspiration.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Explore</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Trending Shorts
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Career Changes
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Success Tips
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Community</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Share Your Story
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Creator Program
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Guidelines
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Coursera Success Shorts. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
