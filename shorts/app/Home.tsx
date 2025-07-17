"use client"

import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronDown, Users, TrendingUp, Play, Globe, Bell } from "lucide-react"
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
              <Globe className="w-6 h-6 text-gray-600 hover:text-blue-600 cursor-pointer" />
              <Bell className="w-6 h-6 text-gray-600 hover:text-blue-600 cursor-pointer" />
              <div className="relative">
                <Avatar className="w-8 h-8 cursor-pointer">
                  <AvatarImage src="/profile-image.jpeg" alt="User profile" />
                  <AvatarFallback className="bg-blue-600 text-white">P</AvatarFallback>
                </Avatar>
                <div className="absolute -bottom-1 -right-1 bg-green-500 text-white text-xs px-1 rounded">ONLINE</div>
              </div>
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
                <div className="flex items-center">
                  <a
                    href="http://localhost:3000"
                    className="py-4 px-1 border-b-2 border-blue-600 text-blue-600 font-medium"
                  >
                    <span>Insights</span>
                  </a>
                  <button
                    onClick={() => setIsInsightsDropdownOpen(!isInsightsDropdownOpen)}
                    className="ml-1 p-1 focus:outline-none"
                  >
                    <ChevronDown className="w-4 h-4 text-blue-600" />
                  </button>
                </div>
                {isInsightsDropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                    <div className="py-2">
                      <a
                        href="http://localhost:3001"
                        className={`block px-4 py-2 hover:bg-gray-100 ${
                          selectedTab === "Events" ? "bg-blue-50 text-blue-600" : "text-gray-700"
                        }`}
                        onClick={() => {
                          setSelectedTab("Events")
                          setIsInsightsDropdownOpen(false)
                        }}
                      >
                        Events
                      </a>
                      <a
                        href="http://localhost:3002"
                        className={`block px-4 py-2 hover:bg-gray-100 ${
                          selectedTab === "Community" ? "bg-blue-50 text-blue-600" : "text-gray-700"
                        }`}
                        onClick={() => {
                          setSelectedTab("Community")
                          setIsInsightsDropdownOpen(false)
                        }}
                      >
                        Community
                      </a>
                      <a
                        href="http://localhost:3003"
                        className={`block px-4 py-2 hover:bg-gray-100 ${
                          selectedTab === "Success Shorts" ? "bg-blue-50 text-blue-600" : "text-gray-700"
                        }`}
                        onClick={() => {
                          setSelectedTab("Success Shorts")
                          setIsInsightsDropdownOpen(false)
                        }}
                      >
                        Success Shorts
                      </a>
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
