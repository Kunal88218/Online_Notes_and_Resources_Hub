import { useState } from "react";
import Layout from "@/components/Layout";
import { Download } from "lucide-react";

interface Note {
  id: string;
  title: string;
  description: string;
  subject: string;
}

const subjects = [
  {
    id: "math",
    name: "Mathematics",
    color: "bg-accent-blue/10 text-accent-blue",
  },
  {
    id: "physics",
    name: "Physics",
    color: "bg-accent-green/10 text-accent-green",
  },
  {
    id: "chemistry",
    name: "Chemistry",
    color: "bg-accent-blue/10 text-accent-blue",
  },
  {
    id: "cs",
    name: "Computer Science",
    color: "bg-accent-green/10 text-accent-green",
  },
];

const notesData: Record<string, Note[]> = {
  math: [
    {
      id: "m1",
      title: "Calculus Fundamentals",
      description: "Comprehensive guide to derivatives, integrals, and limits",
      subject: "Mathematics",
    },
    {
      id: "m2",
      title: "Linear Algebra Basics",
      description: "Vectors, matrices, and systems of linear equations",
      subject: "Mathematics",
    },
    {
      id: "m3",
      title: "Trigonometry Complete",
      description: "Trigonometric functions, identities, and applications",
      subject: "Mathematics",
    },
  ],
  physics: [
    {
      id: "p1",
      title: "Classical Mechanics",
      description: "Newton's laws, motion, forces, and energy concepts",
      subject: "Physics",
    },
    {
      id: "p2",
      title: "Thermodynamics & Heat",
      description:
        "Temperature, entropy, heat transfer, and laws of thermodynamics",
      subject: "Physics",
    },
    {
      id: "p3",
      title: "Electromagnetism",
      description:
        "Electric fields, magnetic fields, and electromagnetic waves",
      subject: "Physics",
    },
  ],
  chemistry: [
    {
      id: "c1",
      title: "Organic Chemistry",
      description: "Structures, reactions, and mechanisms in organic compounds",
      subject: "Chemistry",
    },
    {
      id: "c2",
      title: "Periodic Table & Elements",
      description: "Properties, trends, and periodic law of elements",
      subject: "Chemistry",
    },
    {
      id: "c3",
      title: "Chemical Bonding",
      description: "Ionic, covalent, and metallic bonds explained",
      subject: "Chemistry",
    },
  ],
  cs: [
    {
      id: "cs1",
      title: "Data Structures",
      description: "Arrays, linked lists, trees, graphs, and algorithms",
      subject: "Computer Science",
    },
    {
      id: "cs2",
      title: "Web Development",
      description: "HTML, CSS, JavaScript, and modern web frameworks",
      subject: "Computer Science",
    },
    {
      id: "cs3",
      title: "Database Systems",
      description: "SQL, NoSQL, normalization, and query optimization",
      subject: "Computer Science",
    },
  ],
};

export default function Index() {
  const [activeSubject, setActiveSubject] = useState("math");
  const currentNotes = notesData[activeSubject] || [];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-hero py-12 sm:py-16 md:py-24 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-accent-blue/5 rounded-full -mr-36 -mt-36 animate-pulse-light"></div>
        <div
          className="absolute bottom-0 left-0 w-96 h-96 bg-accent-green/5 rounded-full -ml-48 -mb-48 animate-pulse-light"
          style={{ animationDelay: "1s" }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto animate-fadeInUp">
            {/* Hero Icon */}
            <div className="flex justify-center mb-6 sm:mb-8">
              <div
                className="text-6xl sm:text-7xl md:text-8xl animate-bounce"
                style={{ animationDuration: "2s" }}
              >
                📖
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              All Your Study Notes,{" "}
              <span className="bg-gradient-to-r from-accent-blue to-accent-green bg-clip-text text-transparent">
                One Place
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-10 px-2 leading-relaxed">
              Discover organized, comprehensive notes and study resources across
              all subjects. Learn efficiently with our carefully curated
              academic materials designed for students.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col xs:flex-row justify-center gap-4 sm:gap-5 px-2">
              <button className="btn-primary">✨ Start Studying</button>
              <button className="btn-secondary">🚀 Explore Resources</button>
            </div>
          </div>
        </div>
      </section>

      {/* Subject Selection & Notes Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <div className="mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              Browse by Subject
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Choose a subject to explore curated study materials
            </p>
          </div>

          {/* Subject Tabs */}
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-10 sm:mb-12 border-b border-gray-200 pb-4 sm:pb-6 overflow-x-auto">
            {subjects.map((subject) => {
              const isActive = activeSubject === subject.id;
              const isBlue =
                subject.id === "math" || subject.id === "chemistry";
              return (
                <button
                  key={subject.id}
                  onClick={() => setActiveSubject(subject.id)}
                  className={`px-5 sm:px-6 py-2.5 rounded-xl font-semibold transition-all text-xs sm:text-base whitespace-nowrap ${
                    isActive
                      ? `bg-gradient-to-r ${
                          isBlue
                            ? "from-accent-blue/20 to-blue-200"
                            : "from-accent-green/20 to-green-200"
                        } ${
                          isBlue ? "text-accent-blue" : "text-accent-green"
                        } border-b-2 ${
                          isBlue
                            ? "border-accent-blue shadow-soft"
                            : "border-accent-green shadow-soft"
                        }`
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  {subject.name}
                </button>
              );
            })}
          </div>

          {/* Notes Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {currentNotes.map((note, index) => {
              const isBlue =
                activeSubject === "math" || activeSubject === "chemistry";
              return (
                <div
                  key={note.id}
                  className="card-modern animate-fadeInUp"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Card Header */}
                  <div className="mb-5">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-accent-blue">
                      {note.title}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                      {note.description}
                    </p>
                  </div>

                  {/* Subject Tag */}
                  <div className="mb-5 flex justify-between items-center">
                    <span
                      className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold ${
                        isBlue
                          ? "bg-gradient-to-r from-accent-blue/10 to-blue-100 text-accent-blue"
                          : "bg-gradient-to-r from-accent-green/10 to-green-100 text-accent-green"
                      }`}
                    >
                      {note.subject}
                    </span>
                  </div>

                  {/* Download Button */}
                  <button
                    className={`w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                      isBlue
                        ? "bg-gradient-to-r from-accent-blue/10 to-blue-100 text-accent-blue hover:from-accent-blue/20 hover:to-blue-200 hover:shadow-soft"
                        : "bg-gradient-to-r from-accent-green/10 to-green-100 text-accent-green hover:from-accent-green/20 hover:to-green-200 hover:shadow-soft"
                    }`}
                  >
                    <Download size={16} />
                    Download
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Search Feature Highlight */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent-blue/5 rounded-full -mr-48 -mt-48 animate-pulse-light"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto animate-fadeInUp">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              🔍 Find What You Need
            </h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-8 sm:mb-10 px-2 leading-relaxed">
              Use our powerful search feature to quickly find notes by subject,
              topic, or keyword. Discover exactly what you're looking for in
              seconds.
            </p>

            {/* Search Bar Preview */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-4 sm:p-5 flex items-center gap-3 sm:gap-4 max-w-lg mx-auto hover:border-accent-blue hover:shadow-medium transition-all duration-300 focus-within:border-accent-blue focus-within:shadow-medium">
              <svg
                className="w-5 sm:w-6 h-5 sm:h-6 text-gray-400 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search notes, subjects, or topics…"
                className="flex-1 outline-none text-gray-700 text-center text-sm sm:text-base font-medium placeholder-gray-400"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
