"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Heart,
  MessageCircle,
  Share,
  Bookmark,
  Play,
  Volume2,
  VolumeX,
  ChevronUp,
  ChevronDown,
  Verified,
  TrendingUp,
  Briefcase,
  Code,
  DollarSign,
  Rocket,
} from "lucide-react"

const successShorts = [
  {
    id: 1,
    title: "From Barista to Google SWE in 8 Months! ☕➡️💻",
    description:
      "How I landed my dream job at Google using Coursera's CS courses. No CS degree needed! #TechCareer #GoogleSWE #CourseraSuccess",
    creator: {
      name: "Alex Chen",
      username: "@alexcodes",
      avatar: "/placeholder.svg?height=40&width=40",
      isVerified: true,
      title: "Software Engineer at Google",
    },
    videoUrl: "/placeholder.svg?height=800&width=450",
    thumbnailUrl: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=450&h=800&fit=crop&crop=center",
    duration: "0:58",
    likes: 12400,
    comments: 892,
    shares: 445,
    bookmarks: 1200,
    tags: ["#TechCareer", "#Google", "#SelfTaught", "#CourseraSuccess"],
    category: "Career Change",
    coursesUsed: ["Google IT Support", "Meta Front-End Developer"],
    timeAgo: "2 days ago",
    isLiked: false,
    isBookmarked: false,
  },
  {
    id: 2,
    title: "AI Mastery in 30 Days Challenge! 🤖✨",
    description:
      "Went from zero AI knowledge to building my own ChatGPT clone! Here's my exact roadmap 🚀 #AILearning #MachineLearning #30DayChallenge",
    creator: {
      name: "Sarah Rodriguez",
      username: "@sarahbuildsai",
      avatar: "/placeholder.svg?height=40&width=40",
      isVerified: true,
      title: "AI Engineer at OpenAI",
    },
    videoUrl: "/placeholder.svg?height=800&width=450",
    thumbnailUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=450&h=800&fit=crop&crop=center",
    duration: "1:00",
    likes: 18700,
    comments: 1340,
    shares: 890,
    bookmarks: 2100,
    tags: ["#AI", "#MachineLearning", "#OpenAI", "#TechSkills"],
    category: "Skill Building",
    coursesUsed: ["Machine Learning Specialization", "Deep Learning Specialization"],
    timeAgo: "5 days ago",
    isLiked: true,
    isBookmarked: false,
  },
  {
    id: 3,
    title: "Nurse ➡️ Cybersecurity Expert: My Journey! 🏥🔒",
    description:
      "Left nursing after 10 years to become a cybersecurity analyst. Best decision ever! Here's how I did it 💪 #CareerPivot #Cybersecurity",
    creator: {
      name: "Marcus Johnson",
      username: "@cybermarcus",
      avatar: "/placeholder.svg?height=40&width=40",
      isVerified: false,
      title: "Cybersecurity Analyst at IBM",
    },
    videoUrl: "/placeholder.svg?height=800&width=450",
    thumbnailUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=450&h=800&fit=crop&crop=center",
    duration: "0:45",
    likes: 9800,
    comments: 567,
    shares: 234,
    bookmarks: 890,
    tags: ["#Cybersecurity", "#CareerChange", "#Healthcare", "#IBM"],
    category: "Career Pivot",
    coursesUsed: ["IBM Cybersecurity Analyst", "Google Cybersecurity"],
    timeAgo: "1 week ago",
    isLiked: false,
    isBookmarked: true,
  },
  {
    id: 4,
    title: "From $30K to $120K Salary in 18 Months! 💰📈",
    description:
      "Data science changed my life! From struggling retail worker to senior data scientist. Here's my complete transformation story 🎯",
    creator: {
      name: "Priya Patel",
      username: "@datawithpriya",
      avatar: "/placeholder.svg?height=40&width=40",
      isVerified: true,
      title: "Senior Data Scientist at Netflix",
    },
    videoUrl: "/placeholder.svg?height=800&width=450",
    thumbnailUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=450&h=800&fit=crop&crop=center",
    duration: "0:52",
    likes: 25600,
    comments: 1890,
    shares: 1200,
    bookmarks: 3400,
    tags: ["#DataScience", "#SalaryIncrease", "#Netflix", "#CareerGrowth"],
    category: "Salary Growth",
    coursesUsed: ["IBM Data Science", "Google Data Analytics"],
    timeAgo: "3 days ago",
    isLiked: true,
    isBookmarked: true,
  },
  {
    id: 5,
    title: "Built a $1M Business with Digital Marketing! 🚀💼",
    description:
      "Started with $500 and Coursera courses. Now running a 7-figure marketing agency! Here's my blueprint 📊 #Entrepreneur #DigitalMarketing",
    creator: {
      name: "David Kim",
      username: "@davidgrows",
      avatar: "/placeholder.svg?height=40&width=40",
      isVerified: true,
      title: "CEO & Founder at GrowthLab",
    },
    videoUrl: "/placeholder.svg?height=800&width=450",
    thumbnailUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=450&h=800&fit=crop&crop=center",
    duration: "0:55",
    likes: 31200,
    comments: 2340,
    shares: 1560,
    bookmarks: 4200,
    tags: ["#Entrepreneur", "#DigitalMarketing", "#BusinessGrowth", "#Success"],
    category: "Entrepreneurship",
    coursesUsed: ["Google Digital Marketing", "Meta Social Media Marketing"],
    timeAgo: "6 days ago",
    isLiked: false,
    isBookmarked: false,
  },
]

export default function SuccessShorts() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(false)
  const [videos, setVideos] = useState(successShorts)
  const videoRefs = useRef<(HTMLDivElement | null)[]>([])
  const containerRef = useRef<HTMLDivElement>(null)

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault()
        nextVideo()
      } else if (e.key === "ArrowUp") {
        e.preventDefault()
        prevVideo()
      } else if (e.key === " ") {
        e.preventDefault()
        togglePlay()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [currentVideoIndex])

  const nextVideo = () => {
    if (currentVideoIndex < videos.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1)
      scrollToVideo(currentVideoIndex + 1)
    }
  }

  const prevVideo = () => {
    if (currentVideoIndex > 0) {
      setCurrentVideoIndex(currentVideoIndex - 1)
      scrollToVideo(currentVideoIndex - 1)
    }
  }

  const scrollToVideo = (index: number) => {
    videoRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  const handleLike = (videoId: number) => {
    setVideos(
      videos.map((video) =>
        video.id === videoId
          ? {
              ...video,
              isLiked: !video.isLiked,
              likes: video.isLiked ? video.likes - 1 : video.likes + 1,
            }
          : video,
      ),
    )
  }

  const handleBookmark = (videoId: number) => {
    setVideos(
      videos.map((video) =>
        video.id === videoId
          ? {
              ...video,
              isBookmarked: !video.isBookmarked,
              bookmarks: video.isBookmarked ? video.bookmarks - 1 : video.bookmarks + 1,
            }
          : video,
      ),
    )
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Career Change":
        return <Briefcase className="w-4 h-4" />
      case "Skill Building":
        return <Code className="w-4 h-4" />
      case "Career Pivot":
        return <TrendingUp className="w-4 h-4" />
      case "Salary Growth":
        return <DollarSign className="w-4 h-4" />
      case "Entrepreneurship":
        return <Rocket className="w-4 h-4" />
      default:
        return <TrendingUp className="w-4 h-4" />
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Career Change":
        return "bg-blue-500"
      case "Skill Building":
        return "bg-green-500"
      case "Career Pivot":
        return "bg-purple-500"
      case "Salary Growth":
        return "bg-yellow-500"
      case "Entrepreneurship":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div className="flex justify-center bg-gradient-to-br from-blue-50 to-indigo-50 py-8">
      {/* Centered Container with Limited Width */}
      <div className="w-full max-w-md mx-auto bg-black rounded-2xl overflow-hidden shadow-2xl relative">
        {/* Header */}
        <div className="absolute top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 to-transparent p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-white text-lg font-bold">Success Shorts</h1>
              <Badge className="bg-blue-600 text-white text-xs">
                <TrendingUp className="w-3 h-3 mr-1" />
                Trending
              </Badge>
            </div>
            <div className="text-white text-sm">
              {currentVideoIndex + 1} / {videos.length}
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-50 flex flex-col space-y-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={prevVideo}
            disabled={currentVideoIndex === 0}
            className="bg-black/50 text-white hover:bg-black/70 rounded-full p-2"
          >
            <ChevronUp className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={nextVideo}
            disabled={currentVideoIndex === videos.length - 1}
            className="bg-black/50 text-white hover:bg-black/70 rounded-full p-2"
          >
            <ChevronDown className="w-4 h-4" />
          </Button>
        </div>

        {/* Video Container */}
        <div
          ref={containerRef}
          className="h-[600px] overflow-y-auto snap-y snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {videos.map((video, index) => (
            <div
              key={video.id}
              ref={(el) => (videoRefs.current[index] = el)}
              className="h-[600px] w-full relative snap-start flex items-center justify-center"
            >
              {/* Video Background with Real Image */}
              <div className="absolute inset-0">
                <img
                  src={video.thumbnailUrl || "/placeholder.svg"}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
              </div>

              {/* Video Controls Overlay */}
              <div className="absolute inset-0 flex items-center justify-center cursor-pointer" onClick={togglePlay}>
                {!isPlaying && (
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Play className="w-6 h-6 text-white ml-1" />
                  </div>
                )}
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 flex">
                {/* Left side - Video info */}
                <div className="flex-1 flex flex-col justify-end p-4 pb-16">
                  {/* Category Badge */}
                  <div className="mb-3">
                    <Badge className={`${getCategoryColor(video.category)} text-white text-xs`}>
                      {getCategoryIcon(video.category)}
                      <span className="ml-1">{video.category}</span>
                    </Badge>
                  </div>

                  {/* Creator Info */}
                  <div className="flex items-center space-x-2 mb-3">
                    <Avatar className="w-8 h-8 border-2 border-white">
                      <AvatarImage src={video.creator.avatar || "/placeholder.svg"} alt={video.creator.name} />
                      <AvatarFallback className="bg-blue-600 text-white text-xs">
                        {video.creator.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center space-x-1">
                        <span className="text-white font-semibold text-sm">{video.creator.username}</span>
                        {video.creator.isVerified && <Verified className="w-3 h-3 text-blue-400 fill-current" />}
                      </div>
                      <p className="text-gray-300 text-xs">{video.creator.title}</p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-white/20 border-white/30 text-white hover:bg-white/30 text-xs px-2 py-1"
                    >
                      Follow
                    </Button>
                  </div>

                  {/* Video Title & Description */}
                  <div className="mb-3">
                    <h2 className="text-white text-sm font-bold mb-1 leading-tight">{video.title}</h2>
                    <p className="text-gray-200 text-xs leading-relaxed line-clamp-2">{video.description}</p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {video.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-blue-300 text-xs font-medium hover:text-blue-200 cursor-pointer"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Courses Used */}
                  <div className="mb-3">
                    <p className="text-gray-300 text-xs mb-1">Courses used:</p>
                    <div className="flex flex-wrap gap-1">
                      {video.coursesUsed.map((course, courseIndex) => (
                        <Badge
                          key={courseIndex}
                          variant="outline"
                          className="border-white/30 text-white hover:bg-white/20 cursor-pointer text-xs px-1 py-0"
                        >
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Time and Duration */}
                  <div className="flex items-center space-x-2 text-gray-300 text-xs">
                    <span>{video.timeAgo}</span>
                    <span>•</span>
                    <span>{video.duration}</span>
                  </div>
                </div>

                {/* Right side - Action buttons */}
                <div className="w-12 flex flex-col items-center justify-end pb-16 space-y-4">
                  {/* Like */}
                  <div className="flex flex-col items-center space-y-1">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleLike(video.id)}
                      className={`rounded-full p-2 ${
                        video.isLiked
                          ? "bg-red-500 text-white hover:bg-red-600"
                          : "bg-white/20 text-white hover:bg-white/30"
                      }`}
                    >
                      <Heart className={`w-5 h-5 ${video.isLiked ? "fill-current" : ""}`} />
                    </Button>
                    <span className="text-white text-xs font-medium">
                      {video.likes > 1000 ? `${(video.likes / 1000).toFixed(1)}K` : video.likes}
                    </span>
                  </div>

                  {/* Comment */}
                  <div className="flex flex-col items-center space-y-1">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="rounded-full p-2 bg-white/20 text-white hover:bg-white/30"
                    >
                      <MessageCircle className="w-5 h-5" />
                    </Button>
                    <span className="text-white text-xs font-medium">
                      {video.comments > 1000 ? `${(video.comments / 1000).toFixed(1)}K` : video.comments}
                    </span>
                  </div>

                  {/* Share */}
                  <div className="flex flex-col items-center space-y-1">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="rounded-full p-2 bg-white/20 text-white hover:bg-white/30"
                    >
                      <Share className="w-5 h-5" />
                    </Button>
                    <span className="text-white text-xs font-medium">
                      {video.shares > 1000 ? `${(video.shares / 1000).toFixed(1)}K` : video.shares}
                    </span>
                  </div>

                  {/* Bookmark */}
                  <div className="flex flex-col items-center space-y-1">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleBookmark(video.id)}
                      className={`rounded-full p-2 ${
                        video.isBookmarked
                          ? "bg-yellow-500 text-white hover:bg-yellow-600"
                          : "bg-white/20 text-white hover:bg-white/30"
                      }`}
                    >
                      <Bookmark className={`w-5 h-5 ${video.isBookmarked ? "fill-current" : ""}`} />
                    </Button>
                    <span className="text-white text-xs font-medium">
                      {video.bookmarks > 1000 ? `${(video.bookmarks / 1000).toFixed(1)}K` : video.bookmarks}
                    </span>
                  </div>

                  {/* Volume */}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={toggleMute}
                    className="rounded-full p-2 bg-white/20 text-white hover:bg-white/30"
                  >
                    {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                  </Button>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
                <div
                  className="h-full bg-white transition-all duration-1000"
                  style={{ width: index === currentVideoIndex ? "100%" : "0%" }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Instructions */}
        <div className="absolute bottom-2 left-4 text-white/70 text-xs">
          <p>Use ↑↓ arrows or scroll • Space to play/pause</p>
        </div>

        {/* Coursera Branding */}
        <div className="absolute top-4 right-4 z-50">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg px-2 py-1">
            <span className="text-white font-semibold text-xs">coursera</span>
          </div>
        </div>
      </div>
    </div>
  )
}
