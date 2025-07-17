"use client"

import { useState } from "react"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, ChevronDown, MessageCircle, ThumbsUp, Users, Globe, Bell } from "lucide-react"

const communityPosts = [
  {
    id: 1,
    title: "How I landed my dream job after the Google UX Design Certificate",
    author: {
      name: "Michelle T.",
      image: "/placeholder.svg?height=60&width=60",
      role: "UX Designer at Spotify",
    },
    content: "After completing the Google UX Design Certificate, I applied the portfolio techniques they taught us and landed interviews at 5 major tech companies. Here's what worked for me...",
    likes: 423,
    comments: 87,
    timestamp: "Posted 3 days ago",
    tags: ["UX Design", "Career Change", "Portfolio"]
  },
  {
    id: 2,
    title: "Study group for IBM Data Science Professional Certificate",
    author: {
      name: "David Wong",
      image: "/placeholder.svg?height=60&width=60",
      role: "Data Science Student",
    },
    content: "Looking for study partners for the IBM Data Science Professional Certificate. I'm currently on course 4 (Python for Data Science) and would love to connect with others to discuss assignments and projects.",
    likes: 156,
    comments: 42,
    timestamp: "Posted 5 days ago",
    tags: ["Data Science", "Study Group", "Python"]
  },
  {
    id: 3,
    title: "Tips for balancing full-time work and online learning?",
    author: {
      name: "Sarah Miller",
      image: "/placeholder.svg?height=60&width=60",
      role: "Marketing Manager",
    },
    content: "I'm finding it challenging to balance my full-time job with studying for the Google Project Management Certificate. Any tips from those who've successfully managed this balance?",
    likes: 318,
    comments: 64,
    timestamp: "Posted 1 week ago",
    tags: ["Work-Life Balance", "Study Tips", "Time Management"]
  },
  {
    id: 4,
    title: "Resources for preparing for the AWS Solutions Architect exam",
    author: {
      name: "James Rodriguez",
      image: "/placeholder.svg?height=60&width=60",
      role: "Cloud Engineer",
    },
    content: "I just passed the AWS Solutions Architect Associate exam and wanted to share the resources that helped me the most beyond the coursera materials. Here's my study plan and practice test recommendations...",
    likes: 501,
    comments: 93,
    timestamp: "Posted 2 days ago",
    tags: ["AWS", "Cloud Computing", "Certification"]
  },
  {
    id: 5,
    title: "Career transition from teaching to data analytics - my journey",
    author: {
      name: "Emma Thompson",
      image: "/placeholder.svg?height=60&width=60",
      role: "Data Analyst at Tableau",
    },
    content: "After 12 years as a high school math teacher, I decided to transition into data analytics. The Google Data Analytics Certificate was my starting point, and here's my full journey from classroom to corporate...",
    likes: 729,
    comments: 138,
    timestamp: "Posted 1 week ago",
    tags: ["Career Change", "Data Analytics", "Education"]
  }
]

const categories = [
  { name: "All Topics", count: 2436 },
  { name: "Study Groups", count: 487 },
  { name: "Success Stories", count: 321 },
  { name: "Career Advice", count: 843 },
  { name: "Technical Help", count: 652 },
  { name: "Course Discussion", count: 1104 }
]

// Import StandardHeader component
import { StandardHeader } from "@/components/ui/header"

export default function CommunityPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Topics")

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Using standardized header component */}
      <StandardHeader activeTab="Community" />

      {/* Community Banner */}
      <section className="bg-blue-900 py-8 px-4 flex items-center justify-center">
        <div className="max-w-7xl text-center">
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">Coursera Community</h2>
            <p className="text-xl md:text-2xl text-white font-medium">Learn Together, Grow Together</p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`w-full text-left px-3 py-2 rounded-md transition ${
                      selectedCategory === category.name
                        ? "bg-blue-50 text-blue-600 font-medium"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <div className="flex justify-between">
                      <span>{category.name}</span>
                      <span className="text-sm text-gray-500">{category.count}</span>
                    </div>
                  </button>
                ))}
              </div>

              <div className="mt-8">
                <Button className="w-full">Create New Post</Button>
              </div>

              <div className="mt-8 pt-6 border-t">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Community Stats</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Users className="w-5 h-5 text-blue-500" />
                      <span className="text-gray-700">Active Members</span>
                    </div>
                    <span className="font-medium">125,648</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <MessageCircle className="w-5 h-5 text-blue-500" />
                      <span className="text-gray-700">Total Posts</span>
                    </div>
                    <span className="font-medium">45,321</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <ThumbsUp className="w-5 h-5 text-blue-500" />
                      <span className="text-gray-700">Total Reactions</span>
                    </div>
                    <span className="font-medium">982,561</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            <div className="mb-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-900">
                  {selectedCategory} ({communityPosts.length})
                </h2>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-600">Sort by:</span>
                  <select className="border border-gray-300 rounded px-2 py-1 text-sm bg-white">
                    <option>Most Recent</option>
                    <option>Most Popular</option>
                    <option>Most Comments</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {communityPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={post.author.image} alt={post.author.name} />
                        <AvatarFallback className="bg-blue-100 text-blue-600">
                          {post.author.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 cursor-pointer">
                          {post.title}
                        </h3>
                        <div className="flex items-center space-x-2 text-sm text-gray-500 mt-1">
                          <span className="font-medium text-gray-700">{post.author.name}</span>
                          <span>•</span>
                          <span>{post.author.role}</span>
                          <span>•</span>
                          <span>{post.timestamp}</span>
                        </div>
                        <p className="mt-3 text-gray-700 line-clamp-3">{post.content}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {post.tags.map((tag) => (
                            <span
                              key={tag}
                              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-600"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="mt-4 flex items-center space-x-6 text-sm">
                          <div className="flex items-center space-x-1">
                            <ThumbsUp className="w-4 h-4 text-gray-500" />
                            <span className="text-gray-600">{post.likes} likes</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MessageCircle className="w-4 h-4 text-gray-500" />
                            <span className="text-gray-600">{post.comments} comments</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <Button variant="outline">Load More</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-lg">Coursera Community</span>
              </div>
              <p className="text-gray-400">Connect with learners, share experiences, and grow together.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Community</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Discussion Forums
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Study Groups
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Success Stories
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Learning Tips
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Career Resources
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Technical FAQs
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
                    Community Guidelines
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Coursera Community. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
