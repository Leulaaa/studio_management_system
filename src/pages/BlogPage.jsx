import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/ui/Navbar';
import Footer from '../components/ui/Footer';
import BlogCard from '../components/ui/BlogCard';
import BImg1 from '../assets/BImg1.png';
import BImg2 from '../assets/BImg2.png';
import BImg3 from '../assets/BImg3.png';
import BImg4 from '../assets/BImg4.png';
import BImg5 from '../assets/BImg5.png';
import BImg6 from '../assets/BImg6.png';
import BImg7 from '../assets/BImg7.png';

const BlogPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="container mx-auto p-4 md:p-8">
        {/* Hero Section */}
        <section className="relative flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
              The Studio Journal
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-2">
              Insights from the creative world
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src={BImg1}
              alt="Creative workspace"
              className="w-3/4 md:w-2/3 rounded-2xl shadow-2xl transform -translate-y-4 rotate-2 mb-6 hover:rotate-0 transition-transform duration-500"
            />
          </div>
        </section>

        {/* Featured Blog Post - Full Width */}
        <section className="mb-12">
          <BlogCard
            title="Studio Lighting 101: Why It Changes Everything"
            date="May 20th 2023"
            excerpt="Discover the fundamental principles of studio lighting and how proper illumination can transform your creative projects. From key lighting techniques to advanced setups, learn how professionals create stunning visual narratives through strategic light placement."
            imageUrl={BImg2}
            size="full"
            onReadMore={() => navigate('/photography-studio')}
          />
        </section>

        {/* Three Column Grid */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
            <BlogCard
              title="Art/Creative Studio"
              date="May 18th 2023"
              excerpt="Explore the design, workflow, and inspiration behind running an art and creative studio efficiently."
              imageUrl={BImg3}
              layout="vertical"
              size="normal"
              onReadMore={() => navigate('/art-creative-studio')}
            />
            <BlogCard
              title="Photography Studio Setup"
              date="May 15th 2023"
              excerpt="Learn the essentials for setting up a photography studio for professional shoots and creative projects."
              imageUrl={BImg4}
              layout="vertical"
              size="normal"
              onReadMore={() => navigate('/photography-studio')}
            />
            <BlogCard
              title="Podcast Production Studio"
              date="May 12th 2023"
              excerpt="Tips and best practices for building and running a professional podcast production studio."
              imageUrl={BImg5}
              layout="vertical"
              size="normal"
              onReadMore={() => navigate('/podcast-studio')}
            />
          </div>
        </section>

        {/* Second Featured Post - Full Width */}
        <section className="mb-12">
          <BlogCard
            title="Shooting Your First Short Film"
            date="May 10th 2023"
            excerpt="A comprehensive guide to planning, shooting, and post-production for your debut short film. Learn from industry professionals about common pitfalls to avoid and essential techniques that will elevate your storytelling."
            imageUrl={BImg6}
            size="full"
            onReadMore={() => navigate('/photography-studio')}
          />
        </section>

        {/* Final Card with Custom Background - Full Width */}
        <section className="mb-12">
          <div style={{ backgroundColor: '#f7fafc' }} className="rounded-lg overflow-hidden shadow-lg w-full">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-8 flex flex-col justify-center">
                <h2 className="text-2xl font-bold mb-3 text-gray-900">
                  Behind the Scenes: A Day in Our Music Studio
                </h2>
                <p className="text-sm mb-6 text-gray-600 leading-relaxed">
                  Take an exclusive look inside our state-of-the-art music production facility. From acoustic design to cutting-edge equipment, discover what makes our studio the perfect environment for creating exceptional audio experiences.
                </p>
                <div className="flex justify-between items-center text-xs font-semibold">
                  <span className="text-gray-600">May 8th 2023</span>
                  <button
                    className="text-blue-500 hover:text-blue-600 hover:underline transition-colors"
                    onClick={() => navigate('/music-studio')}
                  >
                    Read more
                  </button>
                </div>
              </div>
              <div className="md:w-1/2">
                <img
                  src={BImg7}
                  alt="Music studio behind the scenes"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPage;
