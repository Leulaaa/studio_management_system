import { Link } from "react-router-dom";
import Navbar from "../components/ui/navbar";
import Footer from "../components/ui/Footer";

export default function Home() {
  return (
    <div className="bg-white">
      <section
        className="relative h-screen w-full flex flex-col justify-center items-center text-center
        bg-[url('https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.1.0')]
        bg-cover bg-center bg-no-repeat text-white px-4"
      >
        <div className="absolute top-0 left-0 w-full">
          <Navbar />
        </div>
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          One Space. Endless Creations
        </h1>
        <p className="max-w-xl mb-6 text-sm md:text-base">
          Whether you’re a filmmaker, musician, storyteller, or dreamer, we
          provide the tools and spaces to turn imagination into reality.
        </p>
        <button className="bg-white text-black px-6 py-2 rounded-full text-sm md:text-base">
          Book a Studio
        </button>
      </section>

      <section className="py-12 px-6 md:px-16">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="grid grid-cols-2 gap-6 flex-1">
            <Link to="/podcaststudio">
              <div className="relative h-56 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1668536618600-754ef972b9b3?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0"
                  alt="Podcast Studio"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <p className="text-white font-semibold text-lg">
                    Podcast Studio
                  </p>
                </div>
              </div>
            </Link>
            <Link to="/musicstudio">
              <div className="relative h-56 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1598653222000-6b7b7a552625?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0"
                  alt="Music Studio"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <p className="text-white font-semibold text-lg">
                    Music Studio
                  </p>
                </div>
              </div>
            </Link>
            <Link to="/artstudio">
              <div className="relative h-56 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1615458509633-f15b61bdacb8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0"
                  alt="Art Studio"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <p className="text-white font-semibold text-lg">Art Studio</p>
                </div>
              </div>
            </Link>
            <Link to="/photostudio">
              <div className="relative h-56 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1668536618600-754ef972b9b3?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0"
                  alt="Photo Studio"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <p className="text-white font-semibold text-lg">
                    Photo Studio
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="flex-1">
            <h2 className="text-black text-2xl md:text-3xl font-bold mb-6">
              5+ Professional Studios & Creative Spaces
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Discover versatile and fully equipped creative spaces tailored for
              artists, musicians, podcasters, and photographers. Whether you're
              laying down tracks, designing visuals, capturing the perfect shot,
              or producing your next podcast episode, our studios are
              thoughtfully designed to support every stage of your creative
              process. With state-of-the-art equipment, acoustically treated
              rooms, flexible layouts, and a supportive atmosphere, you'll find
              the ideal environment to experiment, collaborate, and bring your
              vision to life with confidence and clarity. From solo projects to
              full-scale productions, our spaces adapt to your needs, helping
              you turn ideas into impactful, professional work.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white px-6 md:px-16">
        <h2 className="text-black text-2xl md:text-3xl font-bold mb-6">Why Us</h2>
        <p className="text-gray-600 mb-12 text-sm md:text-base">
          All-in-one studio management made simple. Streamline bookings, manage
          clients, track gear, and focus on creating.
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-semibold mb-2 text-gray-700">Satisfaction</h3>
            <p className="text-gray-500 text-sm">
              High quality studios with pro equipment.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-gray-700">Choose Idea</h3>
            <p className="text-gray-500 text-sm">
              Flexible creative spaces for any idea.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-gray-700">Quality</h3>
            <p className="text-gray-500 text-sm">
              Broadcast-level sound and lighting.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-gray-700">Creativity</h3>
            <p className="text-gray-500 text-sm">
              Designed to bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 md:px-16 bg-black text-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-12">Testimonials</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="p-6 border border-gray-700 rounded-lg">
            <p className="mb-4">“This studio changed the way I create music.”</p>
            <span className="font-semibold">— Sarah, Musician</span>
          </div>
          <div className="p-6 border border-gray-700 rounded-lg">
            <p className="mb-4">
              “Professional equipment, supportive staff, great vibe!”
            </p>
            <span className="font-semibold">— John, Podcaster</span>
          </div>
          <div className="p-6 border border-gray-700 rounded-lg">
            <p className="mb-4">
              “Finally found a creative space where I belong.”
            </p>
            <span className="font-semibold">— Maya, Photographer</span>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 md:px-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Weekly Updates</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1634628767185-b6fcb890570f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0"
              alt="New Music Gear"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 mb-2">New Music Gear</h3>
              <p className="text-gray-600 text-sm">
                We’ve added new mixers and instruments for musicians.
              </p>
            </div>
          </div>
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <img
              src="https://plus.unsplash.com/premium_photo-1726862980799-224ab7bf53fc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0"
              alt="Artist Spotlight"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 mb-2">
                Artist Spotlight
              </h3>
              <p className="text-gray-600 text-sm">
                Featuring young creators every Friday at our studio.
              </p>
            </div>
          </div>
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1593697909683-bccb1b9e68a4?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0"
              alt="Podcast Corner"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Podcast Corner</h3>
              <p className="text-gray-600 text-sm">
                Our podcast room now has acoustic upgrades.
              </p>
            </div>
          </div>
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <img
              src="https://plus.unsplash.com/premium_photo-1726862980799-224ab7bf53fc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0"
              alt="Artist Spotlight"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 mb-2">
                Artist Spotlight
              </h3>
              <p className="text-gray-600 text-sm">
                Featuring young creators every Friday at our studio.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-amber-950 flex justify-center">
        <div className="w-full max-w-3xl text-center px-6">
          <h2 className="text-2xl md:text-3xl text-white font-semibold mb-6">
            Get more weekly info about our services
          </h2>
          <form className="flex flex-col sm:flex-row gap-4">
            <input
  type="email"
  placeholder="Enter your email address"
  className="flex-1 px-4 py-3 rounded-lg text-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
/>

            <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold">
              Submit
            </button>
          </form>
          <p className="text-xs text-gray-300 mt-4">
            By clicking the Submit button, you agree to our terms, and you have
            read our data use policy.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
