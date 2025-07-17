"use client"

import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronDown, Users, TrendingUp, Play, Globe, Bell } from "lucide-react"
import { useState } from "react"
import SuccessShorts from "./SuccessShorts"

// Import StandardHeader component
import { StandardHeader } from "@/components/ui/header"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Using standardized header component */}
      <StandardHeader activeTab="Success Shorts" />

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
