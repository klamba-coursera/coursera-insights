"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Calendar,
  Clock,
  Users,
  Star,
  BookOpen,
  TrendingUp,
  Award,
  Search,
  Globe,
  Bell,
  Menu,
  ChevronDown,
  ArrowUp,
} from "lucide-react"


const events = [
  {
    id: 1,
    title: "From Bootcamp to Big Tech: My Journey to Google",
    speaker: {
      name: "Sarah Chen",
      designation: "Senior Software Engineer at Google",
      image: "/placeholder.svg?height=80&width=80",
      rating: 4.9,
    },
    date: "July 14, 2025",
    time: "7:00 PM EST",
    duration: "3 hours",
    registered: 1247,
    capacity: 2000,
    category: "Career Transformation",
    level: "All Levels",
    relatedCourse: "Google IT Support Professional Certificate",
    description:
      "Join Sarah as she shares her incredible journey from a coding bootcamp graduate to landing her dream job at Google. Learn about the specific Coursera courses that helped her succeed.",
    tags: ["Tech Career", "Success Story", "Interview Tips"],
    isLive: false,
    isFeatured: true,
  },
  {
    id: 2,
    title: "Data Science Roadmap: From Zero to Hero in 2025",
    speaker: {
      name: "Dr. Michael Rodriguez",
      designation: "Staff Data Scientist at Coursera",
      image: "/placeholder.svg?height=80&width=80",
      rating: 4.8,
    },
    date: "July 16, 2025",
    time: "6:30 PM EST",
    duration: "2.5 hours",
    registered: 892,
    capacity: 1500,
    category: "Industry Roadmap",
    level: "Beginner",
    relatedCourse: "IBM Data Science Professional Certificate",
    description:
      "Get insider insights on the data science landscape and a clear roadmap to break into this high-demand field. Dr. Rodriguez will share the exact learning path he recommends.",
    tags: ["Data Science", "Career Path", "Industry Insights"],
    isLive: false,
    isFeatured: false,
  },
  {
    id: 3,
    title: "Building a $1M Business with Digital Marketing Skills",
    speaker: {
      name: "Emma Thompson",
      designation: "Founder & CEO at GrowthLab",
      image: "/placeholder.svg?height=80&width=80",
      rating: 4.9,
    },
    date: "July 18, 2025",
    time: "8:00 PM EST",
    duration: "2 hours",
    registered: 2156,
    capacity: 3000,
    category: "Entrepreneurship",
    level: "Intermediate",
    relatedCourse: "Google Digital Marketing & E-commerce Certificate",
    description:
      "Emma built her marketing agency from zero to $1M revenue using skills learned on Coursera. Discover her strategies, tools, and the exact courses that transformed her career.",
    tags: ["Entrepreneurship", "Digital Marketing", "Business Growth"],
    isLive: true,
    isFeatured: true,
  },
  {
    id: 4,
    title: "Breaking into UX Design: A Career Changer's Guide",
    speaker: {
      name: "James Park",
      designation: "Senior UX Designer at Airbnb",
      image: "/placeholder.svg?height=80&width=80",
      rating: 4.7,
    },
    date: "July 20, 2025",
    time: "7:30 PM EST",
    duration: "2.5 hours",
    registered: 1543,
    capacity: 2500,
    category: "Career Transformation",
    level: "Beginner",
    relatedCourse: "Google UX Design Professional Certificate",
    description:
      "James transitioned from finance to UX design at 35. Learn how he leveraged Coursera courses to make this dramatic career change and land a role at Airbnb.",
    tags: ["UX Design", "Career Change", "Portfolio Building"],
    isLive: false,
    isFeatured: false,
  },
  {
    id: 5,
    title: "AI & Machine Learning: The Future is Now",
    speaker: {
      name: "Dr. Priya Sharma",
      designation: "AI Research Lead at Microsoft",
      image: "/placeholder.svg?height=80&width=80",
      rating: 4.9,
    },
    date: "July 22, 2025",
    time: "6:00 PM EST",
    duration: "3 hours",
    registered: 3247,
    capacity: 5000,
    category: "Industry Roadmap",
    level: "Advanced",
    relatedCourse: "Machine Learning Specialization",
    description:
      "Explore the cutting-edge world of AI and ML with Dr. Sharma. Get insights into industry trends, career opportunities, and the skills you need to succeed in this rapidly evolving field.",
    tags: ["AI/ML", "Future Tech", "Research Insights"],
    isLive: false,
    isFeatured: true,
  },
  {
    id: 6,
    title: "From Nurse to Cybersecurity Expert: My Transformation",
    speaker: {
      name: "Lisa Johnson",
      designation: "Cybersecurity Analyst at IBM",
      image: "/placeholder.svg?height=80&width=80",
      rating: 4.8,
    },
    date: "July 24, 2025",
    time: "7:00 PM EST",
    duration: "2 hours",
    registered: 967,
    capacity: 1800,
    category: "Career Transformation",
    level: "All Levels",
    relatedCourse: "IBM Cybersecurity Analyst Professional Certificate",
    description:
      "Lisa's inspiring journey from healthcare to cybersecurity shows that it's never too late to change careers. Discover how she used Coursera to make this successful transition.",
    tags: ["Cybersecurity", "Healthcare to Tech", "Career Pivot"],
    isLive: false,
    isFeatured: false,
  },
]

const courses = [
  {
    id: 1,
    title: "Building Your Leadership Skills",
    institution: "HEC Paris",
    institutionLogo: "/placeholder.svg?height=24&width=24",
    image: "/placeholder.svg?height=200&width=300",
    type: "Course",
    hasFreeTrial: false,
    backgroundColor: "bg-blue-600",
  },
  {
    id: 2,
    title: "Distributed Query Optimization and Security",
    institution: "Johns Hopkins University",
    institutionLogo: "/placeholder.svg?height=24&width=24",
    image: "/placeholder.svg?height=200&width=300",
    type: "Course",
    hasFreeTrial: true,
    backgroundColor: "bg-white",
  },
  {
    id: 3,
    title: "La telesalud y telemedicina enfocadas a la atención en salud",
    institution: "Tecnológico de Monterrey",
    institutionLogo: "/placeholder.svg?height=24&width=24",
    image: "/placeholder.svg?height=200&width=300",
    type: "Specialization",
    hasFreeTrial: true,
    backgroundColor: "bg-teal-400",
  },
  {
    id: 4,
    title: "Deep Learning",
    institution: "DeepLearning.AI",
    institutionLogo: "/placeholder.svg?height=24&width=24",
    image: "/placeholder.svg?height=200&width=300",
    type: "Specialization",
    hasFreeTrial: true,
    backgroundColor: "bg-gradient-to-r from-pink-400 to-blue-600",
    buildTowardDegree: true,
  },
]

export default function CourseraHomepage() {
  const [isInsightsDropdownOpen, setIsInsightsDropdownOpen] = useState(false)
  const [selectedTab, setSelectedTab] = useState("Events")

  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left side - Logo and Navigation */}
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <Menu className="w-6 h-6 text-blue-600" />
                <div className="text-2xl font-bold text-blue-600">coursera</div>
              </div>

              {/* Navigation */}
              <nav className="hidden md:flex space-x-6">
                <a href="#" className="text-blue-600 font-medium border-b-2 border-blue-600 pb-4">
                  Home
                </a>
                <a href="#" className="text-gray-700 hover:text-blue-600 font-medium pb-4">
                  My Learning
                </a>
                <a href="#" className="text-gray-700 hover:text-blue-600 font-medium pb-4">
                  Online Degrees
                </a>
                <a href="#" className="text-gray-700 hover:text-blue-600 font-medium pb-4">
                  Careers
                </a>
                <div className="relative">
                  <button
                    onClick={() => setIsInsightsDropdownOpen(!isInsightsDropdownOpen)}
                    className="text-gray-700 hover:text-blue-600 font-medium pb-4 flex items-center space-x-1"
                  >
                    <span>Insights</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
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
                            setSelectedTab("Success Stories")
                            setIsInsightsDropdownOpen(false)
                          }}
                          className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${
                            selectedTab === "Success Stories" ? "bg-blue-50 text-blue-600" : "text-gray-700"
                          }`}
                        >
                          Success Stories
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </nav>
            </div>

            {/* Center - Search */}
            <div className="flex-1 max-w-lg mx-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="What do you want to learn?"
                  className="w-full pl-4 pr-12 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700">
                  <Search className="w-4 h-4" />
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
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-16">
        {/* Goal Setting Banner */}
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mx-4 mt-6 rounded">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
              <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="flex-1">
              <p className="text-gray-800">
                Need help? Tell me a little about yourself so I can make the best recommendations.
              </p>
            </div>
            <Button variant="link" className="text-blue-600 font-medium">
              Set your goal
            </Button>
          </div>
        </div>

        {/* Recently Viewed Products */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recently Viewed Products</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course) => (
              <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <div className={`h-40 ${course.backgroundColor} flex items-center justify-center relative`}>
                    {course.id === 1 && (
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                        <div className="text-white text-center">
                          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                            <div className="w-8 h-8 bg-white rounded-full"></div>
                          </div>
                          <div className="text-sm font-medium">Leadership</div>
                        </div>
                      </div>
                    )}
                    {course.id === 2 && (
                      <div className="absolute inset-0 bg-white flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-20 h-16 bg-blue-100 rounded mx-auto mb-2 flex items-center justify-center">
                            <div className="text-blue-600 font-bold text-lg">10</div>
                          </div>
                          <div className="flex space-x-1 justify-center">
                            <div className="w-2 h-8 bg-red-400 rounded"></div>
                            <div className="w-2 h-6 bg-blue-400 rounded"></div>
                            <div className="w-2 h-10 bg-green-400 rounded"></div>
                            <div className="w-2 h-4 bg-yellow-400 rounded"></div>
                          </div>
                        </div>
                      </div>
                    )}
                    {course.id === 3 && (
                      <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center">
                        <div className="text-white text-center">
                          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                            <div className="w-8 h-8 bg-white/40 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    )}
                    {course.id === 4 && (
                      <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-blue-600 flex items-center justify-center">
                        <div className="text-white text-center">
                          <div className="text-2xl font-bold">Deep</div>
                          <div className="text-2xl font-bold">Learning</div>
                          <div className="text-2xl font-bold">Specialization</div>
                        </div>
                      </div>
                    )}

                    {course.hasFreeTrial && (
                      <Badge className="absolute top-2 right-2 bg-white text-gray-800 hover:bg-white">Free Trial</Badge>
                    )}
                  </div>
                </div>

                <CardContent className="p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-6 h-6 bg-gray-200 rounded flex items-center justify-center">
                      <div className="w-4 h-4 bg-gray-400 rounded"></div>
                    </div>
                    <span className="text-sm text-gray-600">{course.institution}</span>
                  </div>

                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{course.title}</h3>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">{course.type}</span>
                    {course.buildTowardDegree && (
                      <div className="flex items-center space-x-1 text-blue-600 text-sm">
                        <div className="w-4 h-4 bg-blue-600 rounded flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded"></div>
                        </div>
                        <span className="text-xs">Build toward a degree</span>
                      </div>
                    )}
                  </div>

                  {course.type === "Specialization" && <div className="text-sm text-gray-600 mt-1">Specialization</div>}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-6">
            <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50 bg-transparent">
              Show 4 more
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}
