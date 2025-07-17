"use client"

import { useState, useRef, useEffect } from "react"
import { Play, Pause, Volume2, Settings, Maximize, RotateCcw, Flag } from "lucide-react"

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(true)
  const [volume, setVolume] = useState(1)
  const [playbackRate, setPlaybackRate] = useState(1)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Auto play the video when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Auto-play was prevented:", error)
        setIsPlaying(false)
      })
    }
  }, [])

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-sm mb-6">
      <div className="relative">
        <video ref={videoRef} className="w-full aspect-video bg-black rounded-t-lg" autoPlay muted>
          <source src="https://youtu.be/U6FvJ6jMGHU?feature=shared" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Live indicator */}
        <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <span>LIVE</span>
        </div>

        {/* Video overlay with speaker info */}
        <div className="absolute bottom-16 left-6 text-white">
          <h3 className="text-2xl font-semibold">Andrew Ng</h3>
          <p className="text-lg opacity-90">Co-founder, DeepLearning.AI</p>
        </div>

        {/* Video controls */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
          <div className="flex items-center space-x-4">
            <button onClick={togglePlay} className="text-white hover:text-gray-300 transition-colors">
              {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
            </button>

            <div className="flex items-center space-x-2">
              <Volume2 className="w-5 h-5 text-white" />
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={volume}
                onChange={(e) => setVolume(Number.parseFloat(e.target.value))}
                className="w-16"
              />
            </div>

            <button className="text-white hover:text-gray-300">
              <RotateCcw className="w-5 h-5" />
            </button>

            <div className="text-white text-sm">
              <span>Live Stream</span>
            </div>

            <button className="text-white hover:text-gray-300">
              <RotateCcw className="w-5 h-5 transform scale-x-[-1]" />
            </button>

            <div className="flex-1"></div>

            <div className="flex items-center space-x-2">
              <span className="text-white text-sm">{playbackRate}x</span>
              <button className="text-white hover:text-gray-300">
                <Settings className="w-5 h-5" />
              </button>
              <button className="text-white hover:text-gray-300">
                <Maximize className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Report issue */}
      <div className="p-4 border-t border-gray-200">
        <button className="flex items-center space-x-2 text-blue-600 text-sm hover:underline">
          <Flag className="w-4 h-4" />
          <span>Report an issue</span>
        </button>
      </div>
    </div>
  )
}
