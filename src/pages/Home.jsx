import { Link } from "react-router-dom";   // ⬅️ Moved here

export default function Home() {
  return (
    <div>
      <section
        className="relative h-screen w-screen left-[calc(-50vw+50%)] flex flex-col justify-center items-center text-center
        bg-[url('https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.1.0')]
        bg-cover bg-center bg-no-repeat text-white"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          One Space. Endless Creations
        </h1>
        <p className="max-w-xl mb-6">
          Whether you’re a filmmaker, musician, storyteller, or dreamer,
          we provide the tools and spaces to turn imagination into reality.
        </p>
        <button className="bg-white text-black px-6 py-2 rounded-full">
          Book a Studio
        </button>
      </section>

      <section className="py-12 px-6 md:px-16">
        <h2 className="text-black text-3xl font-bold mb-6">
          5+ Professional Studios & Creative Spaces
        </h2>

        <p className="text-gray-600 mb-6 max-w-2xl">
          Discover versatile creative spaces designed for artists, musicians, 
          podcasters, and photographers. Whether you’re recording, designing, 
          or producing, our studios provide the perfect environment to bring 
          your vision to life.
        </p>

        <div className="grid md:grid-cols-4 gap-6">
          {/* Podcast Studio */}
          <Link to="/podcast-studio">
            <div className="relative h-48 rounded-lg overflow-hidden cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1668536618600-754ef972b9b3?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Podcast Studio"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <p className="text-white font-semibold text-lg">Podcast Studio</p>
              </div>
            </div>
          </Link>

          {/* Photo Studio */}
          <Link to="/photo-studio">
            <div className="relative h-48 rounded-lg overflow-hidden cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1668536618600-754ef972b9b3?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Photo Studio"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <p className="text-white font-semibold text-lg">Photo Studio</p>
              </div>
            </div>
          </Link>

          {/* Art Studio */}
          <Link to="/art-studio">
            <div className="relative h-48 rounded-lg overflow-hidden cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1615458509633-f15b61bdacb8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Art Studio"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <p className="text-white font-semibold text-lg">Art Studio</p>
              </div>
            </div>
          </Link>

          {/* Music Studio */}
          <Link to="/music-studio">
            <div className="relative h-48 rounded-lg overflow-hidden cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1598653222000-6b7b7a552625?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Music Studio"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <p className="text-white font-semibold text-lg">Music Studio</p>
              </div>
            </div>
          </Link>
        </div>
      </section>

      
      <section className="py-12 bg-white px-6 md:px-16">
        <h2 className="text-black text-3xl font-bold mb-8">Why Us</h2>

        <div className="grid md:grid-cols-4 gap-8 text-center">
          {/* Satisfaction */}
          <div>
            <div className="flex justify-center mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-500" 
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.2} 
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </div>
            <h3 className="font-semibold mb-2 text-gray-800">Satisfaction</h3>
            <p className="text-gray-600">High quality studios with pro equipment.</p>
          </div>

          {/* Choose Idea */}
          <div>
            <div className="flex justify-center mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v18m9-9H3"
                />
              </svg>
            </div>
            <h3 className="font-semibold mb-2 text-gray-800">Choose Idea</h3>
            <p className="text-gray-600">
              Flexible creative spaces for any idea.
            </p>
          </div>

          {/* Quality */}
          <div>
            <div className="flex justify-center mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.25 3.75l.53 1.59a.75.75 0 00.71.51h1.67a.75.75 0 01.44 1.36l-1.35.98a.75.75 0 00-.27.84l.52 1.6a.75.75 0 01-1.15.84l-1.35-.98a.75.75 0 00-.88 0l-1.35.98a.75.75 0 01-1.15-.84l.52-1.6a.75.75 0 00-.27-.84l-1.35-.98a.75.75 0 01.44-1.36h1.67a.75.75 0 00.71-.51l.53-1.59a.75.75 0 011.42 0z"
                />
              </svg>
            </div>
            <h3 className="font-semibold mb-2 text-gray-800">Quality</h3>
            <p className="text-gray-600">
              Broadcast-level sound and lighting.
            </p>
          </div>

          {/* Creativity */}
          <div>
            <div className="flex justify-center mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 2a7 7 0 00-7 7c0 2.17 1.14 4.09 2.87 5.21.7.44 1.13 1.18 1.13 2v1.04c0 .46.37.83.83.83h5.34c.46 0 .83-.37.83-.83V16.2c0-.82.43-1.56 1.13-2A7 7 0 0019 9a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <h3 className="font-semibold mb-2 text-gray-800">Creativity</h3>
            <p className="text-gray-600">
              Designed to bring your vision to life.
            </p>
          </div>
        </div>
      </section>

  
      <section className="py-16 px-6 md:px-16 bg-black">
        <h2 className="text-3xl font-bold mb-12 text-left text-white">
          Testimonials
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-600 p-6 rounded-xl shadow text-white">
            <p className="mb-4">“This studio changed the way I create music.”</p>
            <span className="font-semibold text-gray-00">— Sarah, Musician</span>
          </div>
          <div className="bg-gray-600 p-6 rounded-xl shadow text-white">
            <p className="mb-4">“Professional equipment, supportive staff, great vibe!”</p>
            <span className="font-semibold text-gray-400">— John, Podcaster</span>
          </div>
          <div className="bg-gray-600 p-6 rounded-xl shadow text-white">
            <p className="mb-4">“Finally found a creative space where I belong.”</p>
            <span className="font-semibold text-gray-400">— Maya, Photographer</span>
          </div>
        </div>

        {/* Three dots at the bottom */}
        <div className="flex justify-center mt-8 space-x-2">
          <span className="w-3 h-3 bg-gray-500 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-100 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-500 rounded-full"></span>
        </div>
      </section>

     
      <section className="py-16 bg-gray-100 px-6 md:px-16">
        <h2 className="text-3xl font-bold mb-8 text-left text-black">Weekly Updates</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1634628767185-b6fcb890570f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dimages/music-gear.jpg"
              alt="New Music Gear"
              className="w-full h-40 object-cover"
            />
            <div className="p-6">
              <h3 className="font-semibold text-lg mb-2 text-black"> New Music Gear</h3>
              <p className="text-gray-700 mb-4">
                We’ve added new mixers and instruments for musicians.
              </p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>Aug 31, 2025</span>
                <a href="#" className="text-blue-500 font-medium hover:underline">
                  Read More
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1593697909683-bccb1b9e68a4?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Podcast Corner"
              className="w-full h-40 object-cover"
            />
            <div className="p-6">
              <h3 className="font-semibold text-lg mb-2 text-black">Podcast Corner</h3>
              <p className="text-gray-700 mb-4">
                Our podcast room now has acoustic upgrades.
              </p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>Aug 31, 2025</span>
                <a href="#" className="text-blue-500 font-medium hover:underline">
                  Read More
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow overflow-hidden">
            <img
              src="https://plus.unsplash.com/premium_photo-1726862980799-224ab7bf53fc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Artist Spotlight"
              className="w-full h-40 object-cover"
            />
            <div className="p-6">
              <h3 className="font-semibold text-lg mb-2 text-black">Artist Spotlight</h3>
              <p className="text-gray-700 mb-4">
                Featuring young creators every Friday at our studio.
              </p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>Aug 31, 2025</span>
                <a href="#" className="text-blue-500 font-medium hover:underline">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 flex justify-center">
        <div className="w-full max-w-xl bg-gray-900 p-12 rounded-xl text-center">
          <h2 className="text-2xl font-bold mb-6 text-white">
            Get more weekly info about our services
          </h2>
          <form className="flex flex-col sm:flex-row gap-4 mb-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-4 rounded-lg text-black bg-white focus:outline-none"
            />
            <button className="bg-white text-black px-6 py-4 rounded-lg font-semibold hover:bg-gray-100 transition">
              Submit
            </button>
          </form>
          <p className="text-xs text-gray-300">
            By clicking the Submit button, you agree to our terms, and you have read our data use policy.
          </p>
        </div>
      </section>
    </div>
  );
}
