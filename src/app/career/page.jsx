"use client";
import Image from "next/image";

const CareerSection = () => {
  return (
    <div className="bg-gray-100">

      {/* 🔥 HERO */}
      <div className="relative h-[450px] w-full">
        <Image
          src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=100&w=3000"
          alt="career"
          fill
          priority
          className="object-cover contrast-110 brightness-90"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent flex items-center">
          <div className="max-w-6xl mx-auto px-6 text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Careers at The Dragon News
            </h1>
            <p className="text-lg opacity-90 max-w-xl">
              Join a team that values creativity, innovation, and modern journalism.
            </p>
          </div>
        </div>
      </div>

      {/* 🔥 CONTENT */}
      <div className="max-w-6xl mx-auto px-4 py-16">

        {/* INTRO */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-3">Why Work With Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            At The Dragon News, we believe in building a strong, creative,
            and forward-thinking team. We provide an environment where
            ideas grow and talent shines.
          </p>
        </div>

        {/* 🔥 JOB INFO (NO BUTTON) */}
        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-white p-6 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-semibold mb-2">Senior Journalist</h3>
            <p className="text-gray-500 text-sm mb-3">
              Full-time • Remote
            </p>
            <p className="text-gray-600">
              Responsible for researching, writing, and publishing high-quality
              news content across multiple categories with accuracy and speed.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-semibold mb-2">Frontend Developer</h3>
            <p className="text-gray-500 text-sm mb-3">
              Full-time • Remote
            </p>
            <p className="text-gray-600">
              Build modern and responsive UI using React and Next.js while ensuring
              high performance and great user experience.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-semibold mb-2">UI/UX Designer</h3>
            <p className="text-gray-500 text-sm mb-3">
              Part-time • Remote
            </p>
            <p className="text-gray-600">
              Design intuitive and visually appealing user interfaces with a focus
              on usability and modern aesthetics.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-semibold mb-2">Content Writer</h3>
            <p className="text-gray-500 text-sm mb-3">
              Internship • Remote
            </p>
            <p className="text-gray-600">
              Create engaging and informative articles, blogs, and news stories
              for a wide audience.
            </p>
          </div>

        </div>

        {/* 🔥 BENEFITS */}
        <div className="mt-20">
          <h2 className="text-3xl font-semibold text-center mb-10">
            What You Get
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-6 rounded-2xl shadow-xl text-center">
              <h3 className="text-xl font-semibold mb-2">🌍 Remote Culture</h3>
              <p className="text-gray-500 text-sm">
                Work from anywhere with full flexibility and freedom.
              </p>
            </div>

            <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white p-6 rounded-2xl shadow-xl text-center">
              <h3 className="text-xl font-semibold mb-2">🚀 Growth</h3>
              <p className="text-sm">
                Continuous learning and career development opportunities.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-xl text-center">
              <h3 className="text-xl font-semibold mb-2">💡 Innovation</h3>
              <p className="text-gray-500 text-sm">
                Work on modern technologies and creative ideas.
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default CareerSection;