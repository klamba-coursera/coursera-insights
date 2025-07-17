"use client"

import type React from "react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, Clock, Users, BookOpen, TrendingUp, Award, ArrowUp, ChevronDown, Globe, Bell } from "lucide-react"
import { useState } from "react"

const events = [
  {
    id: 1,
    title: "How Coursera Taught Me Python — And Helped Me Switch Careers",
    thumbnail: "/images/thumbnail-1.png",
    speaker: {
      name: "Priya Sharma",
      designation: "Software Developer at Tech Solutions",
      image: "/images/authors/user6.png",
    },
    date: "July 14, 2025",
    time: "7:00 PM EST",
    duration: "45 mins",
    registered: 1247,
    category: "Software Engineering",
    level: "All Levels",
    relatedCourse: "Python for Everybody Specialization",
    description:
      "Join Priya as she shares her incredible journey from a non-tech background to becoming a software developer using Python skills learned on Coursera.",
    tags: ["Python", "Career Change", "Success Story"],
    isLive: true,
    isFeatured: true,
    sortDate: new Date("2025-07-14T19:00:00"),
    eventUrl: "https://coursera.org/events/python-career-switch",
  },
  {
    id: 3,
    title: "Designing User-Centric Products: My Journey Through Coursera's HCI Track",
    thumbnail: "/images/thumbnail-3.png",
    speaker: {
      name: "James Park",
      designation: "Senior UX Designer at Airbnb",
      image: "/images/authors/user3.png",
    },
    date: "July 28, 2025",
    time: "8:00 PM EST",
    duration: "50 mins",
    registered: 2156,
    category: "Design",
    level: "Intermediate",
    relatedCourse: "Human-Computer Interaction Specialization",
    description:
      "James shares his journey through Coursera's HCI track and how it shaped his approach to user-centric design.",
    tags: ["UX Design", "HCI", "Product Design"],
    isLive: false,
    isFeatured: true,
    sortDate: new Date("2025-07-18T20:00:00"),
    eventUrl: "https://coursera.org/events/user-centric-design",
  },
  {
    id: 4,
    title: "Mastering AI One Layer at a Time: How Coursera's Deep Learning Specialization Transformed My Career",
    thumbnail: "/images/thumbnail-4.png",
    speaker: {
      name: "Dr. Michael Rodriguez",
      designation: "AI Research Lead at Microsoft",
      image: "/images/authors/user8.png",
    },
    date: "July 20, 2025",
    time: "7:30 PM EST",
    duration: "40 mins",
    registered: 1543,
    category: "Data Science",
    level: "Advanced",
    relatedCourse: "Deep Learning Specialization",
    description:
      "Dr. Rodriguez shares how Coursera's Deep Learning Specialization helped him transition into AI research and advance his career.",
    tags: ["Deep Learning", "AI Research", "Career Transformation"],
    isLive: false,
    isFeatured: false,
    sortDate: new Date("2025-07-20T19:30:00"),
    eventUrl: "https://coursera.org/events/deep-learning-career",
  },
  {
    id: 5,
    title: "Breaking Into Project Management: My Career Pivot After Coursera's Google Program",
    thumbnail: "/images/thumbnail-5.png",
    speaker: {
      name: "Emma Thompson",
      designation: "Senior Project Manager at Google",
      image: "/images/authors/user4.png",
    },
    date: "July 22, 2025",
    time: "6:00 PM EST",
    duration: "1 hour",
    registered: 3247,
    category: "Business",
    level: "Beginner",
    relatedCourse: "Google Project Management Professional Certificate",
    description:
      "Emma shares her successful career pivot into project management using skills from Coursera's Google Project Management program.",
    tags: ["Project Management", "Career Pivot", "Google Certificate"],
    isLive: false,
    isFeatured: true,
    sortDate: new Date("2025-07-22T18:00:00"),
    eventUrl: "https://coursera.org/events/project-management-pivot",
  },
  {
    id: 6,
    title: "Scaling My Marketing Career with Coursera's Meta Analytics Certificate",
    thumbnail: "/images/thumbnail-6.png",
    speaker: {
      name: "Alex Kumar",
      designation: "Marketing Analytics Manager at Meta",
      image: "/images/authors/user7.png",
    },
    date: "July 24, 2025",
    time: "7:00 PM EST",
    duration: "35 mins",
    registered: 967,
    category: "Business",
    level: "Intermediate",
    relatedCourse: "Meta Marketing Analytics Professional Certificate",
    description:
      "Alex shares how the Meta Analytics Certificate helped him scale his marketing career and land a role at Meta.",
    tags: ["Marketing Analytics", "Meta Certificate", "Career Growth"],
    isLive: false,
    isFeatured: false,
    sortDate: new Date("2025-07-24T19:00:00"),
    eventUrl: "https://coursera.org/events/meta-analytics-career",
  },
  {
    id: 7,
    title: "Business Strategy, the Ivy League Way: What I Learned from Wharton on Coursera",
    thumbnail: "/images/thumbnail-7.png",
    speaker: {
      name: "Marcus Johnson",
      designation: "Strategy Consultant at McKinsey & Company",
      image: "/images/authors/user2.png",
    },
    date: "July 25, 2025",
    time: "5:30 PM EST",
    duration: "55 mins",
    registered: 1876,
    category: "Business",
    level: "Advanced",
    relatedCourse: "Business Strategy Specialization by Wharton",
    description:
      "Marcus shares insights from Wharton's business strategy courses and how they shaped his consulting career.",
    tags: ["Business Strategy", "Wharton", "Consulting"],
    isLive: false,
    isFeatured: false,
    sortDate: new Date("2025-07-15T17:30:00"),
    eventUrl: "https://coursera.org/events/wharton-business-strategy",
  },
  {
    id: 8,
    title: "How I Landed My First IT Job After Completing Coursera's Google IT Support Program",
    thumbnail: "/images/thumbnail-8.png",
    speaker: {
      name: "David Kim",
      designation: "IT Support Specialist at TechStart",
      image: "/images/authors/user1.png",
    },
    date: "July 29, 2025",
    time: "6:45 PM EST",
    duration: "30 mins",
    registered: 1234,
    category: "Software Engineering",
    level: "Beginner",
    relatedCourse: "Google IT Support Professional Certificate",
    description:
      "David shares his journey from zero IT experience to landing his first IT job using Coursera's Google IT Support program.",
    tags: ["IT Support", "Google Certificate", "First Job"],
    isLive: false,
    isFeatured: false,
    sortDate: new Date("2025-07-19T18:45:00"),
    eventUrl: "https://coursera.org/events/first-it-job",
  },
  {
    id: 2,
    title: "My First ML App: Applying Coursera's TensorFlow Specialization in the Real World",
    thumbnail: "/images/thumbnail-2.png",
    speaker: {
      name: "Sarah Chen",
      designation: "Machine Learning Engineer at DataCorp",
      image: "/images/authors/user5.png",
    },
    date: "July 16, 2025",
    time: "6:30 PM EST",
    duration: "1 hour",
    registered: 892,
    category: "Data Science",
    level: "Intermediate",
    relatedCourse: "TensorFlow Developer Professional Certificate",
    description:
      "Sarah shares how she built her first machine learning application using skills from Coursera's TensorFlow specialization.",
    tags: ["Machine Learning", "TensorFlow", "Real-world Application"],
    isLive: false,
    isFeatured: false,
    sortDate: new Date("2025-07-16T18:30:00"),
    eventUrl: "https://coursera.org/events/first-ml-app",
  },
]

const categories = [
  { name: "All", count: events.length, liveCount: events.filter((e) => e.isLive).length },
  {
    name: "Software Engineering",
    count: events.filter((e) => e.category === "Software Engineering").length,
    liveCount: events.filter((e) => e.category === "Software Engineering" && e.isLive).length,
  },
  {
    name: "Data Science",
    count: events.filter((e) => e.category === "Data Science").length,
    liveCount: events.filter((e) => e.category === "Data Science" && e.isLive).length,
  },
  {
    name: "Business",
    count: events.filter((e) => e.category === "Business").length,
    liveCount: events.filter((e) => e.category === "Business" && e.isLive).length,
  },
  {
    name: "Design",
    count: events.filter((e) => e.category === "Design").length,
    liveCount: events.filter((e) => e.category === "Design" && e.isLive).length,
  },
]

// Import the StandardHeader component
import { StandardHeader } from "@/components/ui/header"

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [registeredEvents, setRegisteredEvents] = useState<number[]>([])
  const [selectedTab, setSelectedTab] = useState("Events")
  const [eventRegistrations, setEventRegistrations] = useState<{ [key: number]: number }>({})
  const [joiningEvents, setJoiningEvents] = useState<number[]>([])

  const isRegistered = (eventId: number) => registeredEvents.includes(eventId)
  const isJoining = (eventId: number) => joiningEvents.includes(eventId)

  const toggleRegister = (eventId: number) => {
    if (isRegistered(eventId)) {
      // Unregister
      setRegisteredEvents(registeredEvents.filter((id) => id !== eventId))
      setEventRegistrations((prev) => ({
        ...prev,
        [eventId]: Math.max(0, (prev[eventId] || 0) - 1),
      }))
    } else {
      // Register
      setRegisteredEvents([...registeredEvents, eventId])
      setEventRegistrations((prev) => ({
        ...prev,
        [eventId]: (prev[eventId] || 0) + 1,
      }))
    }
  }

  const handleJoinNow = (eventId: number) => {
    setJoiningEvents([...joiningEvents, eventId])

    // Simulate redirect after 2 seconds
    setTimeout(() => {
      // Redirect to our local live event page
      window.open("http://localhost:3004", "_blank")
      setJoiningEvents(joiningEvents.filter((id) => id !== eventId))
    }, 2000)
  }

  const handleEventClick = (eventUrl: string, e: React.MouseEvent, eventId: number = 0) => {
    // Prevent navigation if clicking on button
    if ((e.target as HTMLElement).closest("button")) {
      return
    }
    
    // For the first event (How Coursera Taught Me Python), redirect to the live page
    if (eventId === 1) {
      window.open("http://localhost:3004", "_blank")
    } else {
      window.open(eventUrl, "_blank")
    }
  }

  const getRegistrationCount = (eventId: number, originalCount: number) => {
    return originalCount + (eventRegistrations[eventId] || 0)
  }

  // Filter and sort events
  const filteredEvents = events
    .filter((event) => selectedCategory === "All" || event.category === selectedCategory)
    .sort((a, b) => {
      // Live events first
      if (a.isLive && !b.isLive) return -1
      if (!a.isLive && b.isLive) return 1
      // Then by earliest date
      return a.sortDate.getTime() - b.sortDate.getTime()
    })

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Using standardized header component */}
      <StandardHeader activeTab="Events" />

      {/* Blue Banner Strip */}
      <section className="bg-blue-900 py-8 px-4 flex items-center justify-center">
        <div className="max-w-7xl text-center">
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">Coursera Insights</h2>
            <p className="text-xl md:text-2xl text-white font-medium">Talent In Action</p>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Learn from Those Who've
            <span className="text-blue-600 block">Made It Happen</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join live events featuring Coursera alumni and industry leaders sharing real success stories, career
            transformation journeys, and actionable roadmaps to help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center space-x-2 text-gray-600">
              <Users className="w-5 h-5" />
              <span>12,000+ learners joined last month</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <TrendingUp className="w-5 h-5 text-green-500" />
              <span>85% Career Advancement</span>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-6 py-3 rounded-full border-2 transition-all duration-200 ${
                  selectedCategory === category.name
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-700 border-gray-200 hover:border-blue-300 hover:text-blue-600"
                }`}
              >
                <div className="flex items-center space-x-2">
                  <span className="font-medium">{category.name}</span>
                  <div className="flex items-center space-x-1">
                    <span className="text-sm">({category.count})</span>
                    {category.liveCount > 0 && (
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-semibold">{category.liveCount}</span>
                      </div>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Events List */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {selectedCategory === "All" ? "All Events" : `${selectedCategory} Events`}
            </h2>
            <p className="text-gray-600">
              {filteredEvents.filter((e) => e.isLive).length} live events • {filteredEvents.length} total events
            </p>
          </div>

          <div className="space-y-4">
            {filteredEvents.map((event) => (
              <Card
                key={event.id}
                className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={(e) => handleEventClick(event.eventUrl, e, event.id)}
              >
                <CardContent className="p-0">
                  <div className="flex">
                    {/* Event Thumbnail */}
                    <div className="relative flex-shrink-0 h-80 mx-0.5 my-1 w-[600px]">
                      <img
                        src={event.thumbnail || "/images/lp_banner.webp"}
                        alt={event.title}
                        className="w-full h-full object-contain"
                      />
                      {event.isLive && (
                        <div className="absolute top-3 left-3">
                          <Badge className="bg-red-500 text-white animate-pulse text-xs">LIVE</Badge>
                        </div>
                      )}
                    </div>

                    {/* Event Content */}
                    <div className="flex-1 p-6">
                      <div className="flex justify-between items-start h-full">
                        <div className="flex-1 pr-6">
                          {/* Event Title */}
                          <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">{event.title}</h3>

                          {/* Author Info */}
                          <div className="flex items-center space-x-3 mb-4">
                            <Avatar className="w-12 h-12 border-2 border-blue-100">
                              <AvatarImage src={event.speaker.image || "/placeholder.svg"} alt={event.speaker.name} />
                              <AvatarFallback className="bg-blue-100 text-blue-600 font-semibold">
                                {event.speaker.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-semibold text-gray-900">{event.speaker.name}</p>
                              <p className="text-sm text-gray-600">{event.speaker.designation}</p>
                            </div>
                          </div>

                          {/* Event Details */}
                          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span>{event.date}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{event.time}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{event.duration}</span>
                            </div>
                          </div>

                          {/* Registration Count */}
                          <div className="flex items-center space-x-2 mb-4">
                            <Users className="w-4 h-4 text-gray-600" />
                            <span className="text-sm text-gray-600">
                              {getRegistrationCount(event.id, event.registered).toLocaleString()} registered
                            </span>
                            <div className="flex items-center space-x-1">
                              <ArrowUp className="w-4 h-4 text-green-500" />
                              <div className="w-8 h-2 bg-gradient-to-r from-green-400 to-green-600 rounded-full"></div>
                            </div>
                          </div>
                        </div>

                        {/* Register Button */}
                        <div className="flex flex-col items-end justify-center h-full">
                          {event.isLive ? (
                            <Button
                              size="lg"
                              className="px-8 py-3 bg-red-600 hover:bg-red-700 animate-pulse"
                              onClick={(e) => {
                                e.stopPropagation()
                                handleJoinNow(event.id)
                              }}
                              disabled={isJoining(event.id)}
                            >
                              {isJoining(event.id) ? "Joining..." : isRegistered(event.id) ? "Join Now" : "Join Live"}
                            </Button>
                          ) : (
                            <Button
                              size="lg"
                              className="px-8 py-3 bg-blue-600 hover:bg-blue-700"
                              onClick={(e) => {
                                e.stopPropagation()
                                toggleRegister(event.id)
                              }}
                            >
                              {isRegistered(event.id) ? "Registered" : "Register Now"}
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Impact by the Numbers</h2>
            <p className="text-xl text-gray-600">See how our community is transforming careers worldwide</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">50K+</div>
              <div className="text-gray-600">Event Attendees</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">85%</div>
              <div className="text-gray-600">Career Advancement</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">200+</div>
              <div className="text-gray-600">Success Stories</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-lg">Coursera Insights</span>
              </div>
              <p className="text-gray-400">Connecting learners with success stories and industry insights.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Events</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Upcoming Events
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Past Events
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Host an Event
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Community</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Success Stories
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Alumni Network
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Mentorship
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
            <p>&copy; 2025 Coursera Insights: Talent In Action. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
