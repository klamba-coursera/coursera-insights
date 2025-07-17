"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Search,
  Users,
  MessageSquare,
  TrendingUp,
  Star,
  ThumbsUp,
  Reply,
  Bookmark,
  Award,
  Briefcase,
  GraduationCap,
  Filter,
  Plus,
  Eye,
  CheckCircle,
  Target,
  HelpCircle,
  Rocket,
} from "lucide-react"

interface Discussion {
  id: string
  title: string
  content: string
  author: {
    name: string
    avatar: string
    role: "Alumni" | "Student" | "Industry Expert" | "Mentor"
    company?: string
    courseCompleted?: string
    verified: boolean
    level: "Beginner" | "Intermediate" | "Expert"
  }
  category: string
  tags: string[]
  upvotes: number
  replies: number
  views: number
  timeAgo: string
  isPinned?: boolean
  isFeatured?: boolean
  hasAcceptedAnswer?: boolean
}

const discussions: Discussion[] = [
  {
    id: "1",
    title: "How I landed a Staff Engineer role at Google after completing the Machine Learning Specialization",
    content:
      "After 2 years of consistent learning and applying ML concepts from Andrew Ng's course, I finally made it to Google! Here's my complete journey, mistakes I made, and what I'd do differently...",
    author: {
      name: "Alex Chen",
      avatar: "/placeholder.svg?height=40&width=40",
      role: "Alumni",
      company: "Google",
      courseCompleted: "Machine Learning Specialization",
      verified: true,
      level: "Expert",
    },
    category: "Success Stories",
    tags: ["Machine Learning", "Career Growth", "Google", "Staff Engineer"],
    upvotes: 234,
    replies: 45,
    views: 1200,
    timeAgo: "2 hours ago",
    isPinned: true,
    isFeatured: true,
  },
  {
    id: "2",
    title: "Need advice: Should I take the Data Science or Software Development path?",
    content:
      "I'm currently working as a business analyst and want to transition to tech. I'm torn between data science and software development. What factors should I consider?",
    author: {
      name: "Sarah Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      role: "Student",
      verified: false,
      level: "Beginner",
    },
    category: "Career Advice",
    tags: ["Career Change", "Data Science", "Software Development", "Advice"],
    upvotes: 67,
    replies: 23,
    views: 456,
    timeAgo: "4 hours ago",
  },
  {
    id: "3",
    title: "Meta is hiring! Referrals available for ML Engineers",
    content:
      "Hey everyone! My team at Meta is looking for ML Engineers. I can provide referrals for qualified candidates. Here are the requirements and how to apply...",
    author: {
      name: "Michael Rodriguez",
      avatar: "/placeholder.svg?height=40&width=40",
      role: "Industry Expert",
      company: "Meta",
      verified: true,
      level: "Expert",
    },
    category: "Job Opportunities",
    tags: ["Meta", "ML Engineer", "Referral", "Hiring"],
    upvotes: 156,
    replies: 34,
    views: 890,
    timeAgo: "6 hours ago",
    isPinned: true,
  },
  {
    id: "4",
    title: "Study Group: Deep Learning Specialization - Week 3",
    content:
      "Looking for study partners for Week 3 of the Deep Learning Specialization. Let's solve the programming assignments together and discuss concepts!",
    author: {
      name: "Emma Wilson",
      avatar: "/placeholder.svg?height=40&width=40",
      role: "Student",
      courseCompleted: "Deep Learning Specialization (In Progress)",
      verified: false,
      level: "Intermediate",
    },
    category: "Study Groups",
    tags: ["Deep Learning", "Study Group", "Week 3", "Collaboration"],
    upvotes: 45,
    replies: 12,
    views: 234,
    timeAgo: "8 hours ago",
  },
  {
    id: "5",
    title: "Complete roadmap for becoming a Product Manager in 2025",
    content:
      "As a Senior PM at Spotify, here's my comprehensive roadmap for aspiring product managers, including must-take courses, skills to develop, and how to build your portfolio...",
    author: {
      name: "David Park",
      avatar: "/placeholder.svg?height=40&width=40",
      role: "Industry Expert",
      company: "Spotify",
      verified: true,
      level: "Expert",
    },
    category: "Roadmaps",
    tags: ["Product Management", "Roadmap", "Career Path", "Spotify"],
    upvotes: 189,
    replies: 28,
    views: 567,
    timeAgo: "1 day ago",
    isFeatured: true,
  },
]

const categories = [
  { name: "All", icon: MessageSquare, count: 1247 },
  { name: "Success Stories", icon: Award, count: 156 },
  { name: "Career Advice", icon: Briefcase, count: 234 },
  { name: "Course Reviews", icon: Star, count: 189 },
  { name: "Study Groups", icon: Users, count: 78 },
  { name: "Job Opportunities", icon: Target, count: 45 },
  { name: "Roadmaps", icon: Rocket, count: 67 },
  { name: "Technical Help", icon: HelpCircle, count: 123 },
  { name: "Mentorship", icon: GraduationCap, count: 89 },
]

export default function CommunityPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [showNewPost, setShowNewPost] = useState(false)

  const filteredDiscussions = discussions.filter((discussion) => {
    const matchesCategory = selectedCategory === "All" || discussion.category === selectedCategory
    const matchesSearch =
      discussion.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      discussion.content.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const getRoleColor = (role: string) => {
    switch (role) {
      case "Alumni":
        return "bg-green-100 text-green-800"
      case "Industry Expert":
        return "bg-purple-100 text-purple-800"
      case "Mentor":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert":
        return "text-purple-600"
      case "Intermediate":
        return "text-blue-600"
      default:
        return "text-gray-600"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Navigation */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center">
                <div className="grid grid-cols-3 gap-1 w-6 h-6 mr-3">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                </div>
                <span className="text-xl font-bold text-blue-600">coursera</span>
              </div>

              <nav className="hidden md:flex space-x-8">
                <a href="#" className="text-gray-700 hover:text-blue-600">
                  Home
                </a>
                <a href="#" className="text-gray-700 hover:text-blue-600">
                  My Learning
                </a>
                <a href="#" className="text-gray-700 hover:text-blue-600">
                  Online Degrees
                </a>
                <a href="#" className="text-gray-700 hover:text-blue-600">
                  Careers
                </a>
                <a href="#" className="text-blue-600 font-medium">
                  Insights
                </a>
              </nav>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <Input type="text" placeholder="What do you want to learn?" className="w-80 pl-4 pr-12" />
                <Button size="sm" className="absolute right-1 top-1 h-8 w-8 p-0">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-xs text-white font-medium">ONLINE</span>
                </div>
                <Avatar className="w-8 h-8">
                  <AvatarFallback className="bg-purple-600 text-white">KL</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">
              Community
              <span className="block text-blue-300">Connect • Learn • Grow</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Join thousands of learners, alumni, and industry experts sharing knowledge, success stories, and career
              guidance. Your next breakthrough starts with a conversation.
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm">
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                <span>25,000+ Active Members</span>
              </div>
              <div className="flex items-center">
                <MessageSquare className="w-5 h-5 mr-2" />
                <span>1,200+ Daily Discussions</span>
              </div>
              <div className="flex items-center">
                <TrendingUp className="w-5 h-5 mr-2" />
                <span>95% Success Rate</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* New Post Button */}
              <Button
                onClick={() => setShowNewPost(true)}
                className="w-full bg-blue-600 hover:bg-blue-700 flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                Start Discussion
              </Button>

              {/* Categories */}
              <Card>
                <CardHeader>
                  <h3 className="font-semibold">Categories</h3>
                </CardHeader>
                <CardContent className="space-y-2">
                  {categories.map((category) => {
                    const Icon = category.icon
                    return (
                      <button
                        key={category.name}
                        onClick={() => setSelectedCategory(category.name)}
                        className={`w-full flex items-center justify-between p-2 rounded-lg text-left hover:bg-gray-50 ${
                          selectedCategory === category.name ? "bg-blue-50 text-blue-600" : "text-gray-700"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <Icon className="w-4 h-4" />
                          <span className="text-sm">{category.name}</span>
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {category.count}
                        </Badge>
                      </button>
                    )
                  })}
                </CardContent>
              </Card>

              {/* Community Stats */}
              <Card>
                <CardHeader>
                  <h3 className="font-semibold">Community Impact</h3>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">2,500+</div>
                    <div className="text-xs text-gray-600">Success Stories</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">15,000+</div>
                    <div className="text-xs text-gray-600">Career Changes</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">500+</div>
                    <div className="text-xs text-gray-600">Industry Experts</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main Discussion Area */}
          <div className="lg:col-span-3">
            {/* Search and Filters */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Search discussions, topics, or people..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
                <Button variant="outline" size="sm">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Trending
                </Button>
              </div>
            </div>

            {/* Featured Discussions */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" />
                Featured Discussions
              </h2>
              <div className="grid gap-4">
                {discussions
                  .filter((d) => d.isFeatured)
                  .map((discussion) => (
                    <Card key={discussion.id} className="border-l-4 border-l-yellow-400">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <Avatar className="w-10 h-10">
                            <AvatarImage src={discussion.author.avatar || "/placeholder.svg"} />
                            <AvatarFallback>
                              {discussion.author.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="font-medium text-sm">{discussion.title}</h3>
                              {discussion.author.verified && <CheckCircle className="w-4 h-4 text-blue-500" />}
                            </div>
                            <div className="flex items-center gap-2 text-xs text-gray-600 mb-2">
                              <span>{discussion.author.name}</span>
                              <Badge className={`text-xs ${getRoleColor(discussion.author.role)}`}>
                                {discussion.author.role}
                              </Badge>
                              {discussion.author.company && <span>@ {discussion.author.company}</span>}
                            </div>
                            <p className="text-sm text-gray-600 mb-2 line-clamp-2">{discussion.content}</p>
                            <div className="flex items-center gap-4 text-xs text-gray-500">
                              <span className="flex items-center gap-1">
                                <ThumbsUp className="w-3 h-3" />
                                {discussion.upvotes}
                              </span>
                              <span className="flex items-center gap-1">
                                <Reply className="w-3 h-3" />
                                {discussion.replies}
                              </span>
                              <span className="flex items-center gap-1">
                                <Eye className="w-3 h-3" />
                                {discussion.views}
                              </span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>

            {/* All Discussions */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">All Discussions</h2>
                <div className="text-sm text-gray-600">{filteredDiscussions.length} discussions</div>
              </div>

              <div className="space-y-4">
                {filteredDiscussions.map((discussion) => (
                  <Card
                    key={discussion.id}
                    className={`hover:shadow-md transition-shadow ${discussion.isPinned ? "border-l-4 border-l-blue-500" : ""}`}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <Avatar className="w-10 h-10">
                          <AvatarImage src={discussion.author.avatar || "/placeholder.svg"} />
                          <AvatarFallback>
                            {discussion.author.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>

                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <h3 className="font-medium hover:text-blue-600 cursor-pointer">{discussion.title}</h3>
                                {discussion.isPinned && (
                                  <Badge variant="outline" className="text-xs">
                                    Pinned
                                  </Badge>
                                )}
                                {discussion.hasAcceptedAnswer && <CheckCircle className="w-4 h-4 text-green-500" />}
                              </div>

                              <div className="flex items-center gap-2 text-xs text-gray-600 mb-2">
                                <span className="font-medium">{discussion.author.name}</span>
                                <Badge className={`text-xs ${getRoleColor(discussion.author.role)}`}>
                                  {discussion.author.role}
                                </Badge>
                                <span className={getLevelColor(discussion.author.level)}>
                                  {discussion.author.level}
                                </span>
                                {discussion.author.company && <span>@ {discussion.author.company}</span>}
                                {discussion.author.verified && <CheckCircle className="w-3 h-3 text-blue-500" />}
                                <span>•</span>
                                <span>{discussion.timeAgo}</span>
                              </div>
                            </div>

                            <Button variant="ghost" size="sm">
                              <Bookmark className="w-4 h-4" />
                            </Button>
                          </div>

                          <p className="text-sm text-gray-700 mb-3 line-clamp-2">{discussion.content}</p>

                          <div className="flex items-center justify-between">
                            <div className="flex flex-wrap gap-1">
                              {discussion.tags.map((tag) => (
                                <Badge key={tag} variant="outline" className="text-xs">
                                  {tag}
                                </Badge>
                              ))}
                            </div>

                            <div className="flex items-center gap-4 text-xs text-gray-500">
                              <button className="flex items-center gap-1 hover:text-blue-600">
                                <ThumbsUp className="w-3 h-3" />
                                {discussion.upvotes}
                              </button>
                              <button className="flex items-center gap-1 hover:text-blue-600">
                                <Reply className="w-3 h-3" />
                                {discussion.replies}
                              </button>
                              <span className="flex items-center gap-1">
                                <Eye className="w-3 h-3" />
                                {discussion.views}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* New Post Modal Placeholder */}
      {showNewPost && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <Card className="w-full max-w-2xl mx-4">
            <CardHeader>
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Start a New Discussion</h2>
                <Button variant="ghost" size="sm" onClick={() => setShowNewPost(false)}>
                  ×
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input placeholder="Discussion title..." />
              <Textarea placeholder="Share your thoughts, ask questions, or start a conversation..." rows={6} />
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    Add Tags
                  </Button>
                  <Button variant="outline" size="sm">
                    Choose Category
                  </Button>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" onClick={() => setShowNewPost(false)}>
                    Cancel
                  </Button>
                  <Button className="bg-blue-600 hover:bg-blue-700">Post Discussion</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
