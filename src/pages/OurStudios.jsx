import Footer from "../components/ui/Footer";
import Navbar from "../components/ui/navbar";

export default function OurStudios() {
  return (
    <div className="bg-white">
     <Navbar/>
      <section className="py-16 px-6 md:px-16">
  <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
 
    <div className="flex-1">
      <h1 className="text-black text-4xl font-bold mb-4">
        Spaces and Creations
      </h1>
      <p className="text-gray-600 max-w-xl mb-6">
        Whether you’re a filmmaker, musician, storyteller, or dreamer,
        we provide the tools and spaces to turn imagination into reality.
      </p>
      <div className="flex gap-2 max-w-md">
        <input
          type="text"
          placeholder="Search Studios"
         className="flex-1 px-4 py-4 rounded-lg text-black bg-gray-100 focus:outline-none"
        />
        <button className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition">
          Search
        </button>
      </div>
    </div>

    
    <div className="flex-1 grid grid-cols-2 gap-4">
      <img
        src="https://images.unsplash.com/photo-1598653222000-6b7b7a552625?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D

"
        alt="Studio 1"
        className="w-full h-40 object-cover rounded-lg"
      />
      <img
        src="https://images.unsplash.com/photo-1668536618600-754ef972b9b3?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Studio 2"
        className="w-full h-40 object-cover rounded-lg"
      />
      <img
        src="https://images.unsplash.com/photo-1615458509633-f15b61bdacb8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Studio 3"
        className="w-full h-40 object-cover rounded-lg"
      />
      <img
        src="https://plus.unsplash.com/premium_photo-1681492747389-7d8cfed389b8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Studio 4"
        className="w-full h-40 object-cover rounded-lg"
      />
    </div>
  </div>
</section>



<section className="w-full bg-black py-20 flex justify-center items-center">
  <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition-transform transform hover:scale-105">
    Book Now
  </button>
</section>


{/* Studios Section */}
<section className="grid md:grid-cols-2 gap-12 px-6 md:px-16 py-16">

  <div>
    <img 
      src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
      alt="Music Studio" 
      className="rounded-xl shadow" 
    />
  </div>
  <div className="flex flex-col justify-center items-start gap-4">
    <h2 className="text-black text-2xl font-bold mb-2">Music Production Studio</h2>
    <p className="text-gray-600">
      Our music studios are designed for artists, bands, producers, and voice-over professionals who want to create world-class sound. Each space is fully soundproofed and equipped with state-of-the-art recording consoles, professional microphones, mixing boards, and instruments. Whether you’re recording your first demo or producing a full album, our engineers and sound technicians are available to support your creative process. From rehearsals and live sessions to mixing and mastering, our music studios provide everything you need in one place.
    </p>
    <button className="bg-black text-white text-sm px-3 py-1.5 rounded-full hover:bg-gray-800 transition w-fit">
      Read More
    </button>
  </div>

  <div>
    <img 
      src="https://images.unsplash.com/photo-1668536618600-754ef972b9b3?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
      alt="Podcast Studio" 
      className="rounded-xl shadow" 
    />
  </div>
  <div className="flex flex-col justify-center items-start gap-4">
    <h2 className="text-black text-2xl font-bold mb-2">Podcast Production Studio</h2>
    <p className="text-gray-600">
      Perfect for podcasters, radio hosts, and digital creators, our podcast studios make it simple to produce professional-quality content. Each studio comes with broadcast-grade microphones, soundproof walls, mixing equipment, and options for remote guest calls. We also provide tools for live streaming and multi-camera recording if you want to take your podcast to video platforms. Editing and post-production support can also be booked to ensure your final product is polished and ready to publish.
    </p>
    <button className="bg-black text-white text-sm px-3 py-1.5 rounded-full hover:bg-gray-800 transition w-fit">
      Read More
    </button>
  </div>

  <div>
    <img 
      src="https://images.unsplash.com/photo-1603425013520-e0b30e6e37dc?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
      alt="Photography Studio" 
      className="rounded-xl shadow" 
    />
  </div>
  <div className="flex flex-col justify-center items-start gap-4">
    <h2 className="text-black text-2xl font-bold mb-2">Photography Studio</h2>
    <p className="text-gray-600">
      Our photography studios provide flexible, customizable spaces for all types of shoots—fashion, portrait, product, editorial, and more. Each studio is equipped with professional lighting rigs, softboxes, and customizable backdrops to create the perfect scene. Whether you’re working on a solo project or a full creative campaign, our studios can adapt to your vision. Props and styling tools are available, and if needed, professional photographers or stylists can be booked as part of your session.
    </p>
    <button className="bg-black text-white text-sm px-3 py-1.5 rounded-full hover:bg-gray-800 transition w-fit">
      Read More
    </button>
  </div>

  <div>
    <img 
      src="https://plus.unsplash.com/premium_photo-1681492747389-7d8cfed389b8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
      alt="Art Studio" 
      className="rounded-xl shadow" 
    />
  </div>
  <div className="flex flex-col justify-center items-start gap-4">
    <h2 className="text-black text-2xl font-bold mb-2">Art/Creative Studio</h2>
    <p className="text-gray-600">
    For artists, designers, and makers, our creative studios provide an inspiring space to bring ideas to life. Equipped with easels, sculpting tools, large tables, and natural lighting, the studios are designed for both solo creators and collaborative workshops. You can use the space for painting, sculpting, digital design, or hosting art classes. Supplies and exhibition areas can also be arranged to help you showcase your work once it’s complete.</p>
    <button className="bg-black text-white text-sm px-3 py-1.5 rounded-full hover:bg-gray-800 transition w-fit">
      Read More
    </button>
  </div>

</section><br /><br />
<Footer/>


    </div>
  );
}
