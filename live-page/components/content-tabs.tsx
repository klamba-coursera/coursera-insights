"use client"

import { useState } from "react"
import { Save, Plus } from "lucide-react"

interface ContentTabsProps {
  notes: Array<{ id: string; content: string; timestamp: string }>
  onNotesChange: (notes: Array<{ id: string; content: string; timestamp: string }>) => void
}

export function ContentTabs({ notes, onNotesChange }: ContentTabsProps) {
  const [activeTab, setActiveTab] = useState("transcript")
  const [newNote, setNewNote] = useState("")

  const tabs = [
    { id: "transcript", label: "Transcript" },
    { id: "notes", label: "Notes" },
    { id: "chat", label: "Chat" },
  ]

  const addNote = () => {
    if (newNote.trim()) {
      const currentTime = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      const newNoteObj = {
        id: `note-${Date.now()}`,
        content: newNote,
        timestamp: `${currentTime} - Live Event Notes`,
      }
      onNotesChange([...notes, newNoteObj])
      setNewNote("")
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-sm">
      {/* Title section */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-gray-900">How I mastered Deep Learning and landed my dream job</h1>
          <button className="flex items-center space-x-2 text-blue-600 text-sm hover:underline">
            <Save className="w-4 h-4" />
            <span>Save note</span>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8 px-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === tab.id
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab content */}
      <div className="p-6">
        {activeTab === "transcript" && (
          <div className="prose max-w-none">
            <p className="text-gray-700 leading-relaxed">
              Welcome to the Deep Learning Specialization. I'm Andrew Ng, and I'm excited to guide you through this
              comprehensive journey into the world of artificial intelligence and deep learning. This specialization
              will take you from the fundamentals of neural networks to advanced topics like convolutional networks and
              sequence models.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Throughout these five courses, you'll learn to build and train deep neural networks, implement vectorized
              neural networks, identify key architecture parameters, and apply deep learning to your own applications.
              We'll start with the mathematical foundations and gradually build up to state-of-the-art techniques used
              in industry today.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              By the end of this specialization, you'll have the knowledge and practical skills to pursue a career in
              AI, or to apply these powerful techniques to your current field of work. Let's begin this exciting journey
              together!
            </p>
          </div>
        )}

        {activeTab === "notes" && (
          <div className="space-y-4" id="notes-section">
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
              <h3 className="font-medium text-gray-900">Event Notes</h3>
              <p className="text-sm text-gray-600 mt-1">
                Take rough notes during the live event. These will sync with your sidebar notes.
              </p>
            </div>

            {/* Add new note */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-start space-x-3">
                <textarea
                  value={newNote}
                  onChange={(e) => setNewNote(e.target.value)}
                  placeholder="Jot down quick notes here... (e.g., key concepts, formulas, questions)"
                  className="flex-1 p-3 border border-gray-300 rounded-md resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-sm"
                  rows={3}
                />
                <button
                  onClick={addNote}
                  disabled={!newNote.trim()}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-1"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add</span>
                </button>
              </div>
            </div>

            {/* Display notes */}
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {notes.map((note) => (
                <div key={note.id} className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg shadow-sm">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <pre className="text-sm text-gray-800 font-mono leading-relaxed whitespace-pre-wrap">
                        {note.content}
                      </pre>
                      <p className="text-xs text-gray-500 mt-2 italic">{note.timestamp}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "chat" && (
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-lg p-4 h-64 overflow-y-auto">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
                    AL
                  </div>
                  <div>
                    <p className="text-sm text-gray-900">
                      This is exactly what I needed to transition into AI! Andrew Ng's explanations are so clear.
                    </p>
                    <p className="text-xs text-gray-500 mt-1">8 minutes ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
                    MK
                  </div>
                  <div>
                    <p className="text-sm text-gray-900">
                      The programming assignments are challenging but really help solidify the concepts. Love the
                      hands-on approach!
                    </p>
                    <p className="text-xs text-gray-500 mt-1">15 minutes ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
                    RJ
                  </div>
                  <div>
                    <p className="text-sm text-gray-900">
                      Question: Should I complete all the math prerequisites before starting, or can I learn as I go?
                    </p>
                    <p className="text-xs text-gray-500 mt-1">28 minutes ago</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Ask a question or share your thoughts..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                Send
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
