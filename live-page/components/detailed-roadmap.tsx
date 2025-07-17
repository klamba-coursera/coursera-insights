"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, Award, GraduationCap } from "lucide-react"

export function DetailedRoadmap() {
  const [expandedCourses, setExpandedCourses] = useState<string[]>([])

  const courses = [
    {
      id: "course-1",
      title: "Neural Networks and Deep Learning",
      subtitle: "Course 1 • 24 hours",
      description:
        "Learn the foundations of deep learning, understand how to build neural networks, and learn how to lead successful machine learning projects.",
      color: "from-red-400 to-blue-600",
    },
    {
      id: "course-2",
      title: "Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization",
      subtitle: "Course 2 • 23 hours",
      description:
        "Learn the best practices to train and develop test sets and analyze bias/variance for building deep learning applications.",
      color: "from-red-400 to-blue-600",
    },
    {
      id: "course-3",
      title: "Structuring Machine Learning Projects",
      subtitle: "Course 3 • 6 hours",
      description:
        "Learn how to build a successful machine learning project and get to practice decision-making as a machine learning project leader.",
      color: "from-red-400 to-blue-600",
    },
    {
      id: "course-4",
      title: "Convolutional Neural Networks",
      subtitle: "Course 4 • 35 hours",
      description: "Learn to implement efficient ConvNets and apply them to visual detection and recognition tasks.",
      color: "from-red-400 to-blue-600",
    },
    {
      id: "course-5",
      title: "Sequence Models",
      subtitle: "Course 5 • 37 hours",
      description:
        "Learn to build models for natural language, audio, and other sequence data using RNNs, GRUs, LSTMs, and Transformers.",
      color: "from-red-400 to-blue-600",
    },
  ]

  const instructors = [
    {
      name: "Andrew Ng",
      title: "Top Instructor",
      organization: "DeepLearning.AI",
      courses: "51 Courses",
      learners: "8,853,722 learners",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Younes Bensouda Mourri",
      title: "Top Instructor",
      organization: "DeepLearning.AI",
      courses: "23 Courses",
      learners: "1,635,785 learners",
      avatar: "/placeholder.svg?height=60&width=60",
    },
  ]

  const toggleCourse = (courseId: string) => {
    setExpandedCourses((prev) => (prev.includes(courseId) ? prev.filter((id) => id !== courseId) : [...prev, courseId]))
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Deep Learning RoadMap</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Courses Section */}
        <div className="lg:col-span-2 space-y-4">
          {courses.map((course) => (
            <div key={course.id} className="border border-gray-200 rounded-lg overflow-hidden">
              <div
                className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50"
                onClick={() => toggleCourse(course.id)}
              >
                <div className="flex items-center space-x-4">
                  <div
                    className={`w-16 h-12 rounded bg-gradient-to-r ${course.color} flex items-center justify-center text-white text-xs font-medium`}
                  >
                    {course.title
                      .split(" ")
                      .map((word) => word[0])
                      .join("")
                      .slice(0, 3)}
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 underline">{course.title}</h3>
                    <p className="text-sm text-gray-600">{course.subtitle}</p>
                  </div>
                </div>
                {expandedCourses.includes(course.id) ? (
                  <ChevronUp className="w-5 h-5 text-gray-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </div>

              {expandedCourses.includes(course.id) && (
                <div className="px-4 pb-4 border-t border-gray-100">
                  <p className="text-gray-700 mt-3">{course.description}</p>
                </div>
              )}
            </div>
          ))}

          {/* Career Certificate Section */}
          <div className="mt-8 p-6 bg-gray-50 rounded-lg">
            <div className="flex items-start space-x-4">
              <Award className="w-8 h-8 text-blue-600 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Earn a career certificate</h3>
                <p className="text-gray-700 mb-4">
                  Add this credential to your LinkedIn profile, resume, or CV. Share it on social media and in your
                  performance review.
                </p>
              </div>
            </div>
          </div>

          {/* Degree Section */}
          <div className="p-6 bg-gray-50 rounded-lg">
            <div className="flex items-start space-x-4">
              <GraduationCap className="w-8 h-8 text-blue-600 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Build toward a degree</h3>
                <p className="text-gray-700 mb-2">
                  When you complete this Specialization, you may be able to have your learning recognized for credit if
                  you are admitted and enroll in one of the following online degree programs.
                </p>
                <button className="text-blue-600 text-sm hover:underline">View eligible degrees</button>
              </div>
            </div>
          </div>
        </div>

        {/* Instructors & Offered By Section */}
        <div className="space-y-6">
          {/* Instructors */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Instructors</h3>
            <div className="space-y-4">
              {instructors.map((instructor, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <img
                    src={instructor.avatar || "/placeholder.svg"}
                    alt={instructor.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <p className="text-sm text-blue-600 font-medium">{instructor.title}</p>
                    <p className="font-medium text-gray-900 underline cursor-pointer">{instructor.name}</p>
                    <p className="text-sm text-gray-600">{instructor.organization}</p>
                    <p className="text-sm text-gray-500">
                      {instructor.courses} • {instructor.learners}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <button className="text-blue-600 text-sm hover:underline mt-4">View all 3 instructors</button>
          </div>

          {/* Offered By */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Offered by</h3>
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <div>
                <p className="font-medium text-gray-900 underline cursor-pointer">DeepLearning.AI</p>
                <button className="text-blue-600 text-sm hover:underline">Learn more</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
