"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { VideoSection } from "@/components/video-section"
import { ContentTabs } from "@/components/content-tabs"
import { DetailedRoadmap } from "@/components/detailed-roadmap"
import { DiscussionForum } from "@/components/discussion-forum"

export default function EventsPage() {
  const [selectedCourse, setSelectedCourse] = useState("course-1")
  const [notes, setNotes] = useState([
    {
      id: "note-1",
      content:
        "Neural networks = layers of interconnected nodes\n- Input layer → Hidden layers → Output layer\n- Each connection has a weight",
      timestamp: "12:34 - Introduction to Neural Networks",
    },
    {
      id: "note-2",
      content:
        "Forward propagation:\n1. Multiply inputs by weights\n2. Add bias\n3. Apply activation function\n4. Pass to next layer",
      timestamp: "18:45 - Forward Propagation",
    },
    {
      id: "note-3",
      content: "Key activation functions:\n- ReLU: max(0, x)\n- Sigmoid: 1/(1+e^-x)\n- Tanh: (e^x - e^-x)/(e^x + e^-x)",
      timestamp: "25:12 - Activation Functions",
    },
    {
      id: "note-4",
      content:
        "Backpropagation = chain rule in action\n- Calculate gradients backwards\n- Update weights to minimize loss\n- Learning rate controls step size",
      timestamp: "32:18 - Backpropagation",
    },
  ])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="text-blue-600 font-bold text-xl">coursera</div>
              <div className="text-gray-400">|</div>
              <div className="text-gray-600">DeepLearning.AI</div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">
              Viewing: Deep Learning Specialization Live Event - January 15, 2024
            </span>
          </div>
        </div>
      </header>

      <div className="flex">
        <Sidebar
          selectedCourse={selectedCourse}
          onCourseSelect={setSelectedCourse}
          notes={notes}
          onNotesChange={setNotes}
        />
        <main className="flex-1 p-6">
          <div className="max-w-4xl mx-auto space-y-6">
            <VideoSection />
            <ContentTabs notes={notes} onNotesChange={setNotes} />
            <DetailedRoadmap />
            <DiscussionForum />
          </div>
        </main>
      </div>
    </div>
  )
}
