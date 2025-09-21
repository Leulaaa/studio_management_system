import React, { useState } from 'react';
import Navbar from '../components/ui/navbar';
import Footer from '../components/ui/Footer';
import BlogCard from '../components/ui/BlogCard';
import BImg1 from '../assets/BImg1.png';
import BImg2 from '../assets/BImg2.png';
import BImg3 from '../assets/BImg3.png';
import BImg4 from '../assets/BImg4.png';
import BImg5 from '../assets/BImg5.png';
import BImg6 from '../assets/BImg6.png';
import BImg7 from '../assets/BImg7.png';

const blogPosts = [
  {
    id: 1,
    title: "Studio Lighting 101: Why It Changes Everything",
    date: "May 20th 2023",
    excerpt: "Discover the fundamental principles of studio lighting and how proper illumination can transform your creative projects. From key lighting techniques to advanced setups, learn how professionals create stunning visual narratives through strategic light placement.",
    fullContent: "Lighting is the single most important element in visual production. It’s not just about making a subject visible; it’s about shaping mood, directing focus, and telling a story. By mastering techniques like three-point lighting—key, fill, and backlighting—you can add depth and dimension to your work. Our blog post dives into these basics and explores how different light modifiers like softboxes and reflectors can help you achieve professional-grade results, whether you're shooting portraits, products, or a film scene.",
    imageUrl: BImg2,
    size: "full",
  },
  {
    id: 2,
    title: "Art/Creative Studio",
    date: "May 18th 2023",
    excerpt: "Explore the design, workflow, and inspiration behind running an art and creative studio efficiently.",
    fullContent: "An art studio is more than just a room; it’s a sanctuary for innovation. Our guide offers practical tips on organizing your space to maximize creativity, from selecting the right furniture to setting up a dedicated zone for each medium. We also share insights on how to manage your artistic workflow, from ideation and sketching to final production and presentation. Learn how a well-structured environment can reduce creative blocks and help your ideas flow seamlessly.",
    imageUrl: BImg3,
    layout: "vertical",
    size: "normal",
  },
  {
    id: 3,
    title: "Photography Studio Setup",
    date: "May 15th 2023",
    excerpt: "Learn the essentials for setting up a photography studio for professional shoots and creative projects.",
    fullContent: "Setting up a home photography studio doesn’t have to be complicated or expensive. We break down the essential gear you need to get started, including backdrops, light stands, and diffusers. This article walks you through different studio layouts for various types of photography, such as headshots, product photography, and fashion shoots. With our step-by-step instructions, you'll be able to create a versatile and professional-looking setup that’s ready for any project.",
    imageUrl: BImg4,
    layout: "vertical",
    size: "normal",
  },
  {
    id: 4,
    title: "Podcast Production Studio",
    date: "May 12th 2023",
    excerpt: "Tips and best practices for building and running a professional podcast production studio.",
    fullContent: "Podcasting has become a powerful medium for storytelling. Our guide helps you build a studio that captures crystal-clear audio, from choosing the right microphone to acoustically treating your space. We cover everything from software recommendations for editing to best practices for recording interviews, ensuring that your podcast sounds polished and professional. Whether you're a solo host or recording with multiple guests, a high-quality studio setup is key to a successful show.",
    imageUrl: BImg5,
    layout: "vertical",
    size: "normal",
  },
  {
    id: 5,
    title: "Shooting Your First Short Film",
    date: "May 10th 2023",
    excerpt: "A comprehensive guide to planning, shooting, and post-production for your debut short film. Learn from industry professionals about common pitfalls to avoid and essential techniques that will elevate your storytelling.",
    fullContent: "Making your first short film is an exciting journey. We provide a step-by-step guide that covers everything from pre-production planning and scriptwriting to on-set logistics and post-production editing. Our article features advice from seasoned filmmakers on how to work with a small crew, manage your budget, and use visual storytelling to create a powerful narrative. Get ready to turn your cinematic vision into a tangible reality with our expert tips.",
    imageUrl: BImg6,
    size: "full",
  },
  {
    id: 6,
    title: "Behind the Scenes: A Day in Our Music Studio",
    date: "May 8th 2023",
    excerpt: "Take an exclusive look inside our state-of-the-art music production facility. From acoustic design to cutting-edge equipment, discover what makes our studio the perfect environment for creating exceptional audio experiences.",
    fullContent: "Step into our world of sound! This exclusive look behind the scenes reveals the meticulous process of a professional recording session. We'll show you how our acoustic panels are designed to eliminate unwanted reverb, how our vintage microphones capture unique tonal warmth, and how our mixing console brings it all together. From the initial soundcheck to the final master, every step is a blend of technical precision and artistic passion. See how our dedicated team helps artists achieve their unique sonic signature.",
    imageUrl: BImg7,
    size: "full", // Changed to match the full-width layout
  },
];

const BlogPage = () => {
  const [expandedCardId, setExpandedCardId] = useState(null);

  const handleReadMoreClick = (id) => {
    setExpandedCardId(expandedCardId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="container mx-auto p-4 md:p-8 pt-24">
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

        <section className="mb-12">
          <BlogCard
            {...blogPosts[0]}
            onReadMore={() => handleReadMoreClick(blogPosts[0].id)}
            isExpanded={expandedCardId === blogPosts[0].id}
          />
        </section>

        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
            {blogPosts.slice(1, 4).map(post => (
              <BlogCard
                key={post.id}
                {...post}
                onReadMore={() => handleReadMoreClick(post.id)}
                isExpanded={expandedCardId === post.id}
              />
            ))}
          </div>
        </section>

        <section className="mb-12">
          <BlogCard
            {...blogPosts[4]}
            onReadMore={() => handleReadMoreClick(blogPosts[4].id)}
            isExpanded={expandedCardId === blogPosts[4].id}
          />
        </section>

        <section className="mb-12">
          <BlogCard
            {...blogPosts[5]}
            onReadMore={() => handleReadMoreClick(blogPosts[5].id)}
            isExpanded={expandedCardId === blogPosts[5].id}
          />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPage;