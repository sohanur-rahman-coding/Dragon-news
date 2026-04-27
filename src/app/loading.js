export default function Loading() {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">

      <div className="backdrop-blur-xl bg-white/70 p-10 rounded-2xl shadow-2xl flex flex-col items-center">

        {/* Animated dots */}
        <div className="flex gap-2 mb-4">
          <div className="w-3 h-3 bg-red-500 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-red-500 rounded-full animate-bounce delay-150"></div>
          <div className="w-3 h-3 bg-red-500 rounded-full animate-bounce delay-300"></div>
        </div>

        <p className="text-gray-700 font-medium">
          Loading content...
        </p>

      </div>

    </div>
  );
}