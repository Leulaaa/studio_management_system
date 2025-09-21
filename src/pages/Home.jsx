import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/ui/navbar";
import Footer from "../components/ui/Footer";
import Ca1Img from "../assets/Ca2.png";
import Ca3Img from "../assets/Ca3.png";
import Ca4Img from "../assets/Ca4.png";
const weeklyUpdates = [
  {
    id: 1,
    title: "New Music Gear: The Audio Revolution is Here",
    image: "https://images.unsplash.com/photo-1634628767185-b6fcb890570f?q=80&w=870&auto=format&fit=crop",
    date: "Aug 31, 2025",
    fullContent: "The studio is buzzing with new energy! We've just completed a major upgrade to our music studio with state-of-the-art gear. The new SSL analog mixer offers unparalleled warmth and depth, while our collection of vintage guitars and drum machines is sure to spark your next masterpiece. We've also installed a professional-grade vocal booth with an Austrian Audio OC818 microphone to capture every nuance of your performance. Book a session now and experience the difference!"
  },
  {
    id: 2,
    title: "Artist Spotlight: Featuring Jane Doe",
    image: "https://plus.unsplash.com/premium_photo-1726862980799-224ab7bf53fc?q=80&w=1170&auto=format&fit=crop",
    date: "Aug 31, 2025",
    fullContent: "Every Friday, we shine a light on the incredible talent within our creative community. This week, we're proud to feature Jane Doe, a brilliant visual artist who utilizes our Art Studio to create stunning mixed-media pieces. Her recent series, 'Urban Echoes,' explores the interplay of light and shadow, capturing the vibrant yet often unseen details of city life. We sat down with Jane to discuss her creative process, her biggest inspirations, and how our studio has helped her bring her vision to life. Read the full interview on our blog!"
  },
  {
    id: 3,
    title: "Podcast Corner: Acoustic Upgrades for Crisper Sound",
    image: "https://images.unsplash.com/photo-1593697909683-bccb1b9e68a4?q=80&w=1171&auto=format&fit=crop",
    date: "Aug 31, 2025",
    fullContent: "Podcasters, rejoice! We've completely revamped the acoustics in our podcast studio. The new custom-built sound panels drastically reduce echo and background noise, ensuring your recordings are clean and professional. We’ve also installed a RodeCaster Pro II, an all-in-one production studio for live-streaming and recording that gives you precise control over your sound. Whether you're recording interviews, a solo show, or a full-cast production, our upgraded studio provides the perfect environment for a high-quality production."
  },
  {
    id: 4,
    title: "Studio News: Exciting New Partnership",
    image: Ca1Img,
    date: "Aug 31, 2025",
    fullContent: "We're thrilled to announce a new collaboration that will provide a huge boost to the local arts community. In partnership with the 'Downtown Art Gallery,' we will now offer our studio members the opportunity to showcase their work in a professional setting. This initiative is designed to support emerging artists and give them a platform to share their creations with a wider audience. Our first joint exhibition will feature pieces from five of our most promising artists. Stay tuned for details on the opening night!"
  },
  {
    id: 5,
    title: "New Software Feature: Automated Booking Reminders",
    image: Ca3Img,
    date: "Sept 7, 2025",
    fullContent: "We've listened to your feedback! Our latest software update introduces **automated booking reminders**. Clients will now receive an email and a text message 24 hours before their scheduled session, significantly reducing no-shows and ensuring a smoother workflow for everyone. This is part of our ongoing commitment to providing an intuitive and seamless studio management experience."
  },
  {
    id: 6,
    title: "Tutorial Tuesday: Mastering Our New Camera Gear",
    image: Ca4Img,
    date: "Sept 7, 2025",
    fullContent: "Join us for our first 'Tutorial Tuesday' workshop! This week, we’ll be covering the ins and outs of our new high-end cinema camera and lighting kits in the photo studio. Learn how to set up the gear for a professional portrait shoot and get hands-on experience with our expert team. Spots are limited, so be sure to register on our app!"
  },
  {
    id: 7,
    title: "Client Success Story: From Hobbyist to Pro",
    image: "https://images.unsplash.com/photo-1506548174484-88db0507a21b?q=80&w=870&auto=format&fit=crop",
    date: "Sept 14, 2025",
    fullContent: "Meet Mark, a long-time member who started his journey with a simple acoustic guitar and a passion for storytelling. Using our music and podcast studios, he's grown his hobby into a full-time career, landing a major record deal and launching a top-10 podcast. We're incredibly proud to be a part of his success and can't wait to see what he creates next."
  },
  {
    id: 8,
    title: "New Members' Lounge: A Space for Collaboration",
    image: "https://images.unsplash.com/photo-1563986768711-cf068691500d?q=80&w=870&auto=format&fit=crop",
    date: "Sept 14, 2025",
    fullContent: "We are excited to announce the opening of our new Members' Lounge! This communal area is designed to foster creativity and collaboration. It’s the perfect spot to network with other artists, share ideas, or simply relax between sessions. We believe this new space will strengthen our community and help spark new, exciting projects. Come check it out on your next visit!"
  },
];

export default function Home() {
  const [expandedCard, setExpandedCard] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleReadMoreClick = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  const visibleCards = 4;
  const totalCards = weeklyUpdates.length;

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (totalCards - visibleCards + 1));
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + (totalCards - visibleCards + 1)) % (totalCards - visibleCards + 1));
  };

  return (
    <div className="bg-white">
      
      {/* Hero Section */}
      <section
        className="relative h-screen w-full flex flex-col justify-center items-center text-center
        bg-[url('https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.1.0')]
        bg-cover bg-center bg-no-repeat text-white px-4"
      >
        <div className="absolute top-0 left-0 w-full z-50">
          <Navbar />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          One Space. Endless Creations
        </h1>
        <p className="max-w-xl mb-6">
          Whether you’re a filmmaker, musician, storyteller, or dreamer,
          we provide the tools and spaces to turn imagination into reality.
        </p>
        <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition">
          Book a Studio
        </button>
      </section>

      ---

      {/* Studios Section */}
      <section className="py-12 px-6 md:px-16">
        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* Studio Image Grid (Restored) */}
          <div className="flex-1 flex flex-col sm:flex-row gap-4">
            {/* Column 1 */}
            <div className="flex flex-col flex-1 gap-4">
              {/* Podcast Studio */}
              <Link to="/podcaststudio" className="relative w-full h-[360px] rounded-lg overflow-hidden cursor-pointer">
                <img
                  src="https://images.unsplash.com/photo-1668536618600-754ef972b9b3?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0"
                  alt="Podcast Studio"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <p className="text-white font-semibold text-lg">Podcast Studio</p>
                </div>
              </Link>
              {/* Music Studio */}
              <Link to="/musicstudio" className="relative w-full h-[250px] rounded-lg overflow-hidden cursor-pointer">
                <img
                  src="https://images.unsplash.com/photo-1598653222000-6b7b7a552625?q=80&w=870&auto=format&fit=crop"
                  alt="Music Studio"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <p className="text-white font-semibold text-lg">Music Studio</p>
                </div>
              </Link>
            </div>
            {/* Column 2 */}
            <div className="flex flex-col flex-1 gap-4">
              {/* Art Studio */}
              <Link to="/artstudio" className="relative w-full h-[250px] rounded-lg overflow-hidden cursor-pointer">
                <img
                  src="https://images.unsplash.com/photo-1615458509633-f15b61bdacb8?q=80&w=870&auto=format&fit=crop"
                  alt="Art Studio"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <p className="text-white font-semibold text-lg">Art Studio</p>
                </div>
              </Link>
              {/* Photo Studio */}
              <Link to="/photostudio" className="relative w-full h-[360px] rounded-lg overflow-hidden cursor-pointer">
                <img
                  src="https://images.unsplash.com/photo-1668536618600-754ef972b9b3?q=80&w=1031&auto=format&fit=crop"
                  alt="Photo Studio"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <p className="text-white font-semibold text-lg">Photo Studio</p>
                </div>
              </Link>
            </div>
          </div>
          
          {/* Text Content */}
          <div className="flex-1 lg:mt-[120px]">
            <h2 className="text-black text-3xl font-bold mb-6">
              5+ Professional Studios & Creative Spaces
            </h2>
            <p className="text-gray-500 mb-6 max-w-2xl">
              Discover versatile and fully equipped creative spaces tailored for artists, musicians, podcasters, and photographers. Whether you're laying down tracks, designing visuals, capturing the perfect shot, or producing your next podcast episode, our studios are thoughtfully designed to support every stage of your creative process. With state-of-the-art equipment, acoustically treated rooms, flexible layouts, and a supportive atmosphere, you'll find the ideal environment to experiment, collaborate, and bring your vision to life with confidence and clarity. From solo projects to full-scale productions, our spaces adapt to your needs, helping you turn ideas into impactful, professional work.
            </p>
          </div>
        </div>
      </section>

      ---
      
      {/* Why Us Section */}
      <section className="py-12 bg-white px-6 md:px-16">
        <h2 className="text-black text-3xl font-bold mb-6">Why Us</h2>
        <p className="text-gray-500 mb-12">All-in-one studio management made simple. Streamline bookings, manage clients, track gear, and focus on creating.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Satisfaction */}
          <div>
            <div className="mb-3">
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
            <h3 className="font-semibold mb-2 text-gray-700">Satisfaction</h3>
            <p className="text-gray-500">High quality studios with pro equipment.</p>
          </div>
          {/* Choose Idea */}
          <div>
            <div className="mb-3">
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
            <h3 className="font-semibold mb-2 text-gray-700">Choose Idea</h3>
            <p className="text-gray-500">Flexible creative spaces for any idea.</p>
          </div>
          {/* Quality */}
          <div>
            <div className="mb-3">
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
            <h3 className="font-semibold mb-2 text-gray-700">Quality</h3>
            <p className="text-gray-500">Broadcast-level sound and lighting.</p>
          </div>
          {/* Creativity */}
          <div>
            <div className="mb-3">
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
            <h3 className="font-semibold mb-2 text-gray-700">Creativity</h3>
            <p className="text-gray-500">Designed to bring your vision to life.</p>
          </div>
        </div>
      </section>

      ---

      {/* Testimonials Section */}
      <section className="py-16 px-6 md:px-16 bg-black">
        <h2 className="text-3xl font-bold mb-12 text-white">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-amber-300/6 p-6 rounded-none shadow text-white">
            <div className="flex items-center pt-4 pb-4 border-b border-amber-300/30 mb-4">
              <img
                src="https://images.unsplash.com/photo-1634628767185-b6fcb890570f?q=80&w=870&auto=format&fit=crop"
                alt="Erica"
                className="w-12 h-12 object-cover rounded-full mr-4"
              />
              <p className="text-lg font-semibold">Erica</p>
            </div>
            <p className="mb-4">“This studio changed the way I create music.”</p>
            <span className="font-semibold text-gray-200">— Sarah, Musician</span>
          </div>
          <div className="bg-amber-300/6 p-6 rounded-none shadow text-white">
            <div className="flex items-center pt-4 pb-4 border-b border-amber-300/30 mb-4">
              <img
                src="https://plus.unsplash.com/premium_photo-1726862980799-224ab7bf53fc?q=80&w=1170&auto=format&fit=crop"
                alt="Aryam"
                className="w-12 h-12 object-cover rounded-full mr-4"
              />
              <p className="text-lg font-semibold">Aryam</p>
            </div>
            <p className="mb-4">“Professional equipment, supportive staff, great vibe!”</p>
            <span className="font-semibold text-gray-200">— John, Podcaster</span>
          </div>
          <div className="bg-amber-300/6 p-6 rounded-none shadow text-white">
            <div className="flex items-center pt-4 pb-4 border-b border-amber-300/30 mb-4">
              <img
                src="https://images.unsplash.com/photo-1593697909683-bccb1b9e68a4?q=80&w=1171&auto=format&fit=crop"
                alt="leee"
                className="w-12 h-12 object-cover rounded-full mr-4"
              />
              <p className="text-lg font-semibold">leee</p>
            </div>
            <p className="mb-4">“Finally found a creative space where I belong.”</p>
            <span className="font-semibold text-gray-200">— Maya, Photographer</span>
          </div>
        </div>
        <div className="flex justify-center mt-8 space-x-2">
          <span className="w-3 h-3 bg-white rounded-full"></span>
          <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
        </div>
      </section>

      ---

      {/* Weekly Updates Section */}
      <section className="py-16 px-6 md:px-16 relative">
        <h2 className="text-3xl font-bold mb-8 text-black">Weekly Updates</h2>
        
        {/* Carousel container for desktop */}
        <div className="flex items-center justify-center hidden lg:flex">
          <button
            onClick={handlePrevClick}
            disabled={currentIndex === 0}
            className="bg-gray-200 text-gray-700 p-4 rounded-full disabled:opacity-50 text-2xl z-10"
            aria-label="Previous"
          >
            &lt;
          </button>
          
          <div className="flex-1 mx-4">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 overflow-hidden">
              {weeklyUpdates.slice(currentIndex, currentIndex + visibleCards).map((update) => (
                <div
                  key={update.id}
                  className={`bg-white shadow rounded-xl overflow-hidden transition-all duration-300 ease-in-out ${expandedCard === update.id ? 'h-auto' : 'h-[400px]'}`}
                >
                  <img
                    src={update.image}
                    alt={update.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-6 flex flex-col justify-between h-[calc(100%-10rem)]">
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-black">{update.title}</h3>
                      <p
                        className={`text-gray-700 mb-4 ${expandedCard !== update.id ? 'line-clamp-3 overflow-hidden text-ellipsis' : ''}`}
                      >
                        {update.fullContent}
                      </p>
                    </div>
                    <div className="flex justify-between items-center text-sm text-gray-500 mt-auto">
                      <span>{update.date}</span>
                      <button
                        onClick={() => handleReadMoreClick(update.id)}
                        className="text-blue-500 font-medium hover:underline focus:outline-none"
                        aria-expanded={expandedCard === update.id}
                      >
                        {expandedCard === update.id ? 'Show Less' : 'Read More'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button
            onClick={handleNextClick}
            disabled={currentIndex >= totalCards - visibleCards}
            className="bg-gray-200 text-gray-700 p-4 rounded-full disabled:opacity-50 text-2xl z-10"
            aria-label="Next"
          >
            &gt;
          </button>
        </div>
        
        {/* Cards for mobile (always visible) */}
        <div className="grid lg:hidden grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 overflow-hidden">
          {weeklyUpdates.slice(currentIndex, currentIndex + 4).map((update) => (
            <div
              key={update.id}
              className={`bg-white shadow rounded-xl overflow-hidden transition-all duration-300 ease-in-out ${expandedCard === update.id ? 'h-auto' : 'h-[400px]'}`}
            >
              <img
                src={update.image}
                alt={update.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-6 flex flex-col justify-between h-[calc(100%-10rem)]">
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-black">{update.title}</h3>
                  <p
                    className={`text-gray-700 mb-4 ${expandedCard !== update.id ? 'line-clamp-3 overflow-hidden text-ellipsis' : ''}`}
                  >
                    {update.fullContent}
                  </p>
                </div>
                <div className="flex justify-between items-center text-sm text-gray-500 mt-auto">
                  <span>{update.date}</span>
                  <button
                    onClick={() => handleReadMoreClick(update.id)}
                    className="text-blue-500 font-medium hover:underline focus:outline-none"
                    aria-expanded={expandedCard === update.id}
                  >
                    {expandedCard === update.id ? 'Show Less' : 'Read More'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Mobile carousel controls */}
        <div className="flex lg:hidden justify-center mt-8 space-x-2">
          <button
            onClick={handlePrevClick}
            disabled={currentIndex === 0}
            className="p-2 rounded-full disabled:opacity-50"
            aria-label="Previous"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={handleNextClick}
            disabled={currentIndex >= totalCards - 4}
            className="p-2 rounded-full disabled:opacity-50"
            aria-label="Next"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </section>

      ---

      {/* Newsletter Section */}
      <section className="py-16 flex justify-center z-40">
        <div className="bg-amber-950/100 w-full max-w-4xl h-auto p-8 sm:p-12 mb-[-130px] text-center z-40 rounded-lg shadow-lg mx-4">
          <h2 className="text-3xl mb-6 text-white">
            Get more weekly info about our services
          </h2>
          <form className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-4 rounded-lg text-black bg-white focus:outline-none w-full sm:w-auto"
            />
            <button className="bg-white text-black px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition w-full sm:w-auto">
              Submit
            </button>
          </form>
          <p className="text-xs text-gray-300 mt-4">
            By clicking the Submit button, you agree to our terms, and you have read our data use policy.
          </p>
        </div>
      </section>

      <div className="mt-[130px] sm:mt-[130px]">
        <Footer/>
      </div>
      
    </div>
  );
}