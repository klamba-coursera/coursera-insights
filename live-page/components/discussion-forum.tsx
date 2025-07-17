"use client"

import type React from "react"

import { useState } from "react"
import { MessageCircle, ThumbsUp, Reply, MoreHorizontal } from "lucide-react"

export function DiscussionForum() {
  const [newMessage, setNewMessage] = useState("")

  const discussions = [
    {
      id: 1,
      user: {
        name: "Sarah Chen",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "SC",
      },
      timestamp: "5 minutes ago",
      content:
        "Just finished the first week of Neural Networks and Deep Learning! The explanation of forward propagation was incredibly clear. Andrew Ng's teaching style really makes complex concepts accessible.",
      likes: 12,
      replies: 3,
      isLiked: false,
    },
    {
      id: 2,
      user: {
        name: "Michael Rodriguez",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "MR",
      },
      timestamp: "12 minutes ago",
      content:
        "Question about backpropagation: I'm having trouble understanding how the chain rule applies when we have multiple hidden layers. Can someone explain this with a simple example?",
      likes: 8,
      replies: 7,
      isLiked: true,
    },
    {
      id: 3,
      user: {
        name: "Emily Watson",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "EW",
      },
      timestamp: "23 minutes ago",
      content:
        "The programming assignments in this specialization are fantastic! Working with numpy to implement neural networks from scratch really solidifies the theoretical concepts.",
      likes: 15,
      replies: 2,
      isLiked: false,
    },
    {
      id: 4,
      user: {
        name: "David Kim",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "DK",
      },
      timestamp: "35 minutes ago",
      content:
        "For anyone struggling with the math, I highly recommend reviewing linear algebra basics first. Khan Academy has great resources that complement this course perfectly.",
      likes: 20,
      replies: 5,
      isLiked: true,
    },
    {
      id: 5,
      user: {
        name: "Lisa Thompson",
        avatar: "/placeholder.svg?height=40&width=40",
        initials: "LT",
      },
      timestamp: "47 minutes ago",
      content:
        "Just completed all 5 courses in the specialization! The journey from basic neural networks to advanced sequence models has been incredible. Highly recommend to anyone interested in AI/ML.",
      likes: 35,
      replies: 12,
      isLiked: false,
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (newMessage.trim()) {
      // Handle message submission
      setNewMessage("")
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-6" id="discussion-forum">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">Discussion Forum</h2>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <MessageCircle className="w-4 h-4" />
          <span>{discussions.length} discussions</span>
        </div>
      </div>

      {/* New Message Form */}
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="flex space-x-3">
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-medium">
            You
          </div>
          <div className="flex-1">
            <textarea
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Share your thoughts about the Deep Learning Specialization..."
              className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows={3}
            />
            <div className="flex justify-end mt-2">
              <button
                type="submit"
                disabled={!newMessage.trim()}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Post Message
              </button>
            </div>
          </div>
        </div>
      </form>

      {/* Discussion List */}
      <div className="space-y-6">
        {discussions.map((discussion) => (
          <div key={discussion.id} className="border-b border-gray-100 pb-6 last:border-b-0">
            <div className="flex space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-medium text-sm">
                {discussion.user.initials}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="font-medium text-gray-900">{discussion.user.name}</span>
                    <span className="text-sm text-gray-500">{discussion.timestamp}</span>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600">
                    <MoreHorizontal className="w-4 h-4" />
                  </button>
                </div>

                <p className="text-gray-700 mb-3 leading-relaxed">{discussion.content}</p>

                <div className="flex items-center space-x-4">
                  <button
                    className={`flex items-center space-x-1 text-sm transition-colors ${
                      discussion.isLiked ? "text-blue-600" : "text-gray-500 hover:text-blue-600"
                    }`}
                  >
                    <ThumbsUp className="w-4 h-4" />
                    <span>{discussion.likes}</span>
                  </button>

                  <button className="flex items-center space-x-1 text-sm text-gray-500 hover:text-blue-600 transition-colors">
                    <Reply className="w-4 h-4" />
                    <span>{discussion.replies} replies</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center mt-8">
        <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors">
          Load More Discussions
        </button>
      </div>
    </div>
  )
}
