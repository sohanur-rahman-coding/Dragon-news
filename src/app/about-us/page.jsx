"use client";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="bg-gray-100">
      {/* 🔥 HERO */}
      <div className="relative h-[500px] w-full">
        <Image
          src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2400"
          alt="news"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            The Dragon News
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            Journalism Without Fear or Favour
          </p>
        </div>
      </div>

      {/* 🔥 CONTENT */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* ABOUT */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=2000"
              alt="about"
              fill
              className="object-cover hover:scale-110 transition duration-700"
            />
          </div>

          <div>
            <h2 className="text-3xl font-semibold mb-4">Who We Are</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              The Dragon News is a modern digital platform delivering real-time
              global updates with a clean, fast, and immersive experience.
            </p>
            <p className="text-gray-500">
              We focus on accuracy, speed, and trusted journalism to keep our
              readers informed every day.
            </p>

            <button className="mt-6 bg-red-500 text-white px-6 py-2 rounded-full shadow-lg hover:bg-red-600 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* 🔥 FEATURES */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-2xl bg-white shadow-xl hover:-translate-y-2 transition">
            <h3 className="text-xl font-semibold mb-2">📰 Breaking News</h3>
            <p className="text-gray-500 text-sm">
              Instant updates with high accuracy
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-xl hover:-translate-y-2 transition">
            <h3 className="text-xl font-semibold mb-2">⚡ Lightning Fast</h3>
            <p className="text-sm">Ultra smooth and responsive UI</p>
          </div>

          <div className="p-6 rounded-2xl bg-white shadow-xl hover:-translate-y-2 transition">
            <h3 className="text-xl font-semibold mb-2">🔒 Trusted Source</h3>
            <p className="text-gray-500 text-sm">
              Verified and reliable content
            </p>
          </div>
        </div>

        {/* 🔥 TEAM SECTION */}
        {/* 🔥 TEAM SECTION */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-10">
            Meet Our Team
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* CARD 1 */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden hover:scale-105 transition duration-500">
              <div className="relative h-80">
                <Image
                  src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=1200"
                  alt="team"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold">John Carter</h3>
                <p className="text-gray-500 text-sm">Chief Editor</p>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden hover:scale-105 transition duration-500">
              <div className="relative h-80">
                <Image
                  src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=1200"
                  alt="team"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold">Emily Watson</h3>
                <p className="text-gray-500 text-sm">Senior Journalist</p>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden hover:scale-105 transition duration-500">
              <div className="relative h-80">
                <Image
                  src="https://images.unsplash.com/photo-1621784563330-caee0b138a00?q=80&w=1200"
                  alt="team"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold">Michael Lee</h3>
                <p className="text-gray-500 text-sm">Tech Lead</p>
              </div>
            </div>
          </div>
        </div>  

        {/* 🔥 CTA */}
        <div className="text-center">
          <button className="bg-red-500 text-white px-10 py-3 rounded-full text-lg shadow-xl hover:bg-red-600 transition">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
