// pages/OurStudios.jsx
import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Footer from "../components/ui/Footer";
import Navbar from "../components/ui/navbar";

export default function OurStudios() {
  const [studios, setStudios] = useState([]);
  const [studios1, setStudios1] = useState([]);
  const [studios2, setStudios2] = useState([]);
  const [studios3, setStudios3] = useState([]);

  const [loading1, setLoading1] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const navigate = useNavigate();

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;

    setLoading(true);
    setError(null);
    setHasSearched(true);

    try {
      const response = await axios.get('http://localhost:9000/api/studios/search', {
        params: { name: searchQuery }
      });

      setStudios(response.data.data);
    } catch (err) {
      console.error(err);
      setError('Failed to fetch studios');
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleResultClick = (studioName) => {
    const formatted = studioName.toLowerCase().replace(/\s+/g, '');
    navigate(`/${formatted}`);
  };

  useEffect(() => {
    const fetchStudios = async () => {
      try {
        const response = await axios.get("http://localhost:9000/api/studios");
        const data = response.data.data;
        setStudios([data[0]]);
        setStudios1([data[2]]);
        setStudios2([data[3]]);
        setStudios3([data[1]]);
      } catch (err) {
        console.error("Failed to fetch studios:", err);
        setError("Failed to load studios.");
      } finally {
        setLoading(false);
      }
    };

    fetchStudios();
  }, []);

  return (
    <div className="bg-white">
      <Navbar /><br /><br /><br />
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

            <div className="flex flex-col gap-4 max-w-md mx-auto">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Search Studios"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 px-4 py-4 rounded-lg text-black bg-gray-100 focus:outline-none"
                />
                <button
                  onClick={handleSearch}
                  className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition"
                >
                  Search
                </button>
              </div>

              {loading && <p>Loading...</p>}
              {error && <p className="text-red-500">{error}</p>}

              {hasSearched && (
                <div
                  className={`mt-2 overflow-y-auto ${studios.length > 3 ? 'max-h-96' : ''} bg-white shadow-md p-4 space-y-4`}
                >
                  {studios.length === 0 ? (
                    <p className="text-gray-500">No studios found.</p>
                  ) : (
                    studios.map((studio) => (
                      <div
                        key={studio.id}
                        onClick={() => handleResultClick(studio.name)}
                        className="p-3 bg-gray-50 rounded hover:bg-gray-100 cursor-pointer"
                      >
                        <h2 className="text-lg font-semibold">{studio.name}</h2>
                        <p className="text-sm text-gray-600">{studio.location}</p>
                        <p className="text-sm mt-1">{studio.description}</p>
                        <p className="text-xs text-gray-500 mt-1">Status: {studio.status}</p>
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="flex-1 grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1598653222000-6b7b7a552625?q=80"
              alt="Studio 1"
              className="w-full h-40 object-cover rounded-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1668536618600-754ef972b9b3?q=80"
              alt="Studio 2"
              className="w-full h-40 object-cover rounded-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1615458509633-f15b61bdacb8?q=80"
              alt="Studio 3"
              className="w-full h-40 object-cover rounded-lg"
            />
            <img
              src="https://plus.unsplash.com/premium_photo-1681492747389-7d8cfed389b8?q=80"
              alt="Studio 4"
              className="w-full h-40 object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      <section className="w-full bg-black py-10 flex justify-center items-center">
        <h1 className="text-white text-3xl rounded-full font-semibold">
          Our Studios
        </h1>
      </section>

      {/* Studio Details */}
      <section className="grid md:grid-cols-2 gap-12 px-6 md:px-16 py-16">

        {/* MUSIC STUDIO */}
        <div>
          <img src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80" alt="Music Studio" className="rounded-xl shadow" />
        </div>
        <div className="flex flex-col justify-center items-start gap-4">
          {studios.length > 0 && <h1 className="text-3xl font-bold mb-6">{studios[0].name}</h1>}
          {studios.length > 0 && <p className="text-gray-600">{studios[0].description}</p>}
          <Link to='/musicstudio'>
            <button className="bg-black text-white text-sm px-12 py-1.5 rounded-full hover:bg-gray-800 transition w-fit">See More</button>
          </Link>
        </div>

        {/* PODCAST STUDIO */}
        <div>
          <img src="https://images.unsplash.com/photo-1668536618600-754ef972b9b3?q=80" alt="Podcast Studio" className="rounded-xl shadow" />
        </div>
        <div className="flex flex-col justify-center items-start gap-4">
          {studios1.length > 0 && <h1 className="text-3xl font-bold mb-6">{studios1[0].name}</h1>}
          {studios1.length > 0 && <p className="text-gray-600">{studios1[0].description}</p>}
          <Link to='/podcaststudio'>
            <button className="bg-black text-white text-sm px-12 py-1.5 rounded-full hover:bg-gray-800 transition w-fit">See More</button>
          </Link>
        </div>

        {/* PHOTOGRAPHY STUDIO */}
        <div>
          <img src="https://images.unsplash.com/photo-1603425013520-e0b30e6e37dc?q=80" alt="Photography Studio" className="rounded-xl shadow" />
        </div>
        <div className="flex flex-col justify-center items-start gap-4">
          {studios2.length > 0 && <h1 className="text-3xl font-bold mb-6">{studios2[0].name}</h1>}
          {studios2.length > 0 && <p className="text-gray-600">{studios2[0].description}</p>}
          <Link to='/photographystudio'>
            <button className="bg-black text-white text-sm px-12 py-1.5 rounded-full hover:bg-gray-800 transition w-fit">See More</button>
          </Link>
        </div>

        {/* ART STUDIO */}
        <div>
          <img src="https://plus.unsplash.com/premium_photo-1681492747389-7d8cfed389b8?q=80" alt="Art Studio" className="rounded-xl shadow" />
        </div>
        <div className="flex flex-col justify-center items-start gap-4">
          {studios3.length > 0 && <h1 className="text-3xl font-bold mb-6">{studios3[0].name}</h1>}
          {studios3.length > 0 && <p className="text-gray-600">{studios3[0].description}</p>}
          <Link to='/artstudio'>
            <button className="bg-black text-white text-sm px-12 py-1.5 rounded-full hover:bg-gray-800 transition w-fit">See More</button>
          </Link>
        </div>
      </section>

      <br /><br />
      <Footer />
    </div>
  );
}
