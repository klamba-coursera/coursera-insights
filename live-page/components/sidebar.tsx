"use client"

import { useState } from "react"
import { ChevronDown, ChevronRight, Play, StickyNote } from "lucide-react"

interface SidebarProps {
  selectedCourse: string
  onCourseSelect: (courseId: string) => void
  notes: Array<{ id: string; content: string; timestamp: string }>
  onNotesChange: (notes: Array<{ id: string; content: string; timestamp: string }>) => void
}

export function Sidebar({ selectedCourse, onCourseSelect, notes, onNotesChange }: SidebarProps) {
  const [isRoadmapExpanded, setIsRoadmapExpanded] = useState(true)
  const [isNotesExpanded, setIsNotesExpanded] = useState(false)
  const [isSpeakerInfoExpanded, setIsSpeakerInfoExpanded] = useState(false)
  const [isMenuHidden, setIsMenuHidden] = useState(false)

  const courses = [
    {
      id: "course-1",
      title: "Neural Networks and Deep Learning",
      duration: "24 hours",
      type: "video",
    },
    {
      id: "course-2",
      title: "Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization",
      duration: "23 hours",
      type: "video",
    },
    {
      id: "course-3",
      title: "Structuring Machine Learning Projects",
      duration: "6 hours",
      type: "video",
    },
    {
      id: "course-4",
      title: "Convolutional Neural Networks",
      duration: "35 hours",
      type: "video",
    },
    {
      id: "course-5",
      title: "Sequence Models",
      duration: "37 hours",
      type: "video",
    },
  ]

  const speakers = [
    {
      name: "Andrew Ng",
      designation: "Co-founder, DeepLearning.AI",
      role: "Lead Instructor",
      photo: "/placeholder.svg?height=60&width=60",
      bio: "Andrew is a globally recognized leader in AI and co-founder of DeepLearning.AI. He was formerly Chief Scientist at Baidu and co-founder of Coursera.",
    },
    {
      name: "Younes Bensouda Mourri",
      designation: "Senior AI Engineer, DeepLearning.AI",
      role: "Course Instructor",
      photo: "/placeholder.svg?height=60&width=60",
      bio: "Younes is a Senior AI Engineer at DeepLearning.AI with expertise in deep learning and computer vision.",
    },
  ]

  const scrollToDiscussionForum = () => {
    const element = document.getElementById("discussion-forum")
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  if (isMenuHidden) {
    return (
      <div className="w-8 bg-white border-r border-gray-200">
        <button onClick={() => setIsMenuHidden(false)} className="p-2 text-blue-600 hover:bg-gray-50">
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    )
  }

  return (
    <aside className="w-80 bg-white border-r border-gray-200 h-[calc(100vh-80px)] overflow-y-auto">
      <div className="p-4">
        <button
          onClick={() => setIsMenuHidden(true)}
          className="flex items-center text-blue-600 text-sm mb-6 hover:underline"
        >
          <span className="mr-2">≡</span>
          Hide menu
        </button>

        <nav className="space-y-4">
          {/* Roadmap */}
          <div>
            <button
              onClick={() => setIsRoadmapExpanded(!isRoadmapExpanded)}
              className="flex items-center justify-between w-full py-2 text-gray-900 font-medium"
            >
              <span>Roadmap</span>
              {isRoadmapExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            </button>

            {isRoadmapExpanded && (
              <div className="mt-2 space-y-2">
                {courses.map((course, index) => (
                  <div
                    key={course.id}
                    className={`flex items-start space-x-3 p-2 rounded cursor-pointer hover:bg-gray-50 ${
                      selectedCourse === course.id ? "bg-blue-50 border-l-2 border-blue-600" : ""
                    }`}
                    onClick={() => onCourseSelect(course.id)}
                  >
                    <div className="mt-1">
                      <Play className="w-4 h-4 text-gray-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-900 leading-tight">{course.title}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        Course-{index + 1} • {course.duration}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Notes */}
          <div>
            <button
              onClick={() => setIsNotesExpanded(!isNotesExpanded)}
              className="flex items-center justify-between w-full py-2 text-gray-900 font-medium hover:bg-gray-50 rounded"
            >
              <span>Notes</span>
              {isNotesExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            </button>

            {isNotesExpanded && (
              <div className="mt-2 space-y-3 pl-4 max-h-64 overflow-y-auto">
                {notes.map((note) => (
                  <div key={note.id} className="p-3 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg shadow-sm">
                    <div className="flex items-start space-x-2">
                      <StickyNote className="w-4 h-4 text-yellow-600 mt-1 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-800 font-mono leading-relaxed whitespace-pre-wrap">
                          {note.content}
                        </p>
                        <p className="text-xs text-gray-500 mt-2 italic">{note.timestamp}</p>
                      </div>
                    </div>
                  </div>
                ))}
                {notes.length === 0 && (
                  <p className="text-sm text-gray-500 italic">No notes yet. Start taking notes during the event!</p>
                )}
              </div>
            )}
          </div>

          {/* Discussion Forum */}
          <div className="py-2">
            <button
              onClick={scrollToDiscussionForum}
              className="text-gray-900 font-medium hover:text-blue-600 hover:underline transition-colors"
            >
              Discussion Forum
            </button>
          </div>

          {/* Speaker Info */}
          <div>
            <button
              onClick={() => setIsSpeakerInfoExpanded(!isSpeakerInfoExpanded)}
              className="flex items-center justify-between w-full py-2 text-gray-900 font-medium hover:bg-gray-50 rounded"
            >
              <span>Speaker Info</span>
              {isSpeakerInfoExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            </button>

            {isSpeakerInfoExpanded && (
              <div className="mt-2 space-y-4 pl-4">
                {speakers.map((speaker, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                    <img
                      src={speaker.photo || "/placeholder.svg"}
                      alt={speaker.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold text-gray-900">{speaker.name}</h4>
                      <p className="text-xs text-blue-600 font-medium">{speaker.role}</p>
                      <p className="text-xs text-gray-600 mt-1">{speaker.designation}</p>
                      <p className="text-xs text-gray-500 mt-2 leading-relaxed">{speaker.bio}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </nav>
      </div>
    </aside>
  )
}
