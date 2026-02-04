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
  { id: "math", name: "Mathematics", color: "bg-accent-blue/10 text-accent-blue" },
  { id: "physics", name: "Physics", color: "bg-accent-green/10 text-accent-green" },
  { id: "chemistry", name: "Chemistry", color: "bg-accent-blue/10 text-accent-blue" },
  { id: "cs", name: "Computer Science", color: "bg-accent-green/10 text-accent-green" },
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
      description: "Temperature, entropy, heat transfer, and laws of thermodynamics",
      subject: "Physics",
    },
    {
      id: "p3",
      title: "Electromagnetism",
      description: "Electric fields, magnetic fields, and electromagnetic waves",
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
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-8 sm:py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            {/* Hero Icon */}
            <div className="flex justify-center mb-4 sm:mb-6">
              <div className="text-5xl sm:text-6xl">📖</div>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
              All Your Study Notes, One Place
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 px-2">
              Discover organized, comprehensive notes and study resources across all subjects.
              Learn efficiently with our carefully curated academic materials designed for students.
            </p>

            {/* CTA Button */}
            <div className="flex flex-col xs:flex-row justify-center gap-3 sm:gap-4 px-2">
              <button className="px-6 sm:px-8 py-2.5 sm:py-3 bg-accent-blue text-white rounded-lg font-semibold hover:bg-opacity-90 transition-all text-sm sm:text-base">
                Start Studying
              </button>
              <button className="px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-accent-green text-accent-green rounded-lg font-semibold hover:bg-accent-green hover:text-white transition-all text-sm sm:text-base">
                Explore Resources
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Subject Selection & Notes Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Browse by Subject
          </h2>

          {/* Subject Tabs */}
          <div className="flex flex-wrap gap-3 mb-8 border-b border-gray-200 pb-6">
            {subjects.map((subject) => (
              <button
                key={subject.id}
                onClick={() => setActiveSubject(subject.id)}
                className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                  activeSubject === subject.id
                    ? `bg-gradient-to-r ${
                        subject.id === "math" || subject.id === "chemistry"
                          ? "from-accent-blue/20 to-accent-blue/10"
                          : "from-accent-green/20 to-accent-green/10"
                      } ${
                        subject.id === "math" || subject.id === "chemistry"
                          ? "text-accent-blue"
                          : "text-accent-green"
                      } border-b-2 ${
                        subject.id === "math" || subject.id === "chemistry"
                          ? "border-accent-blue"
                          : "border-accent-green"
                      }`
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {subject.name}
              </button>
            ))}
          </div>

          {/* Notes Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentNotes.map((note) => {
              const isBlue = activeSubject === "math" || activeSubject === "chemistry";
              return (
                <div
                  key={note.id}
                  className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md hover:border-gray-300 transition-all"
                >
                  {/* Card Header */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {note.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {note.description}
                    </p>
                  </div>

                  {/* Subject Tag */}
                  <div className="mb-4 flex justify-between items-center">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                        isBlue
                          ? "bg-accent-blue/10 text-accent-blue"
                          : "bg-accent-green/10 text-accent-green"
                      }`}
                    >
                      {note.subject}
                    </span>
                  </div>

                  {/* Download Button */}
                  <button className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all">
                    <Download size={18} />
                    Download
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Search Feature Highlight */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Find What You Need
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Use our search feature to quickly find notes by subject, topic, or keyword.
              Discover exactly what you're looking for in seconds.
            </p>

            {/* Search Bar Preview */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-4 flex items-center gap-3 max-w-lg mx-auto hover:border-accent-blue transition-colors">
              <svg
                className="w-5 h-5 text-gray-400"
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
                className="flex-1 outline-none text-gray-700 text-center"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
