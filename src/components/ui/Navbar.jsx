import React, { useState } from "react";
import Logo from "../../assets/Logo.png";
import { useNavigate } from "react-router-dom";
import { ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Categories = [
  { value: "music studio", label: "Music Studio", href: "/musicstudio" },
  { value: "podcast studio", label: "Podcast Studio", href: "/podcaststudio" },
  { value: "art studio", label: "Art Studio", href: "/artstudio" },
  { value: "photography studio", label: "Photography Studio", href: "/photostudio" },
];

const Navbar = () => {
  const [hoveredButton, setHoveredButton] = useState(null);
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="bg-black text-white py-2 px-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center mr-6">
          <img
            src={Logo}
            alt="Logo"
            className="h-12 w-auto cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>

        <ul className="hidden md:flex space-x-8 text-sm font-semibold">
          <li>
            <button onClick={() => navigate("/")} className="hover:text-blue-400 transition-colors">
              HOME
            </button>
          </li>
          <li>
            <button onClick={() => navigate("/our-studio")} className="hover:text-blue-400 transition-colors">
              OUR STUDIOS
            </button>
          </li>
          <li>
            <button onClick={() => navigate("/blog")} className="hover:text-blue-400 transition-colors">
              BLOG
            </button>
          </li>
          <li>
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  role="combobox"
                  aria-expanded={open}
                  className="w-[130px] ml-[-15px] mt-[-13px]"
                >
                  CATEGORIES
                  <ChevronsUpDown className="opacity-90 h-1 w-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[200px] p-0 ml-[340px] bg-white mt-[-40px] border-none">
                <Command>
                  <CommandInput placeholder="Search Categories..." className="h-9" />
                  <CommandList>
                    <CommandEmpty>No Category found.</CommandEmpty>
                    <CommandGroup>
                      {Categories.map((Category) => (
                        <CommandItem
                          key={Category.value}
                          value={Category.label}
                          onSelect={() => {
                            setOpen(false);
                            navigate(Category.href);
                          }}
                          className="p-0"
                        >
                          <span className="w-full px-4 py-2 block text-sm hover:bg-accent hover:text-accent-foreground">
                            {Category.label}
                          </span>
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </li>
        </ul>

        <div className="flex items-center space-x-4">
          <button
            onMouseEnter={() => setHoveredButton("login")}
            onMouseLeave={() => setHoveredButton(null)}
            className={`px-5 py-1.5 border border-white rounded-full text-sm font-semibold transition-all duration-300 ${
              hoveredButton === "login"
                ? "bg-white text-black"
                : hoveredButton === "signup"
                ? "bg-black text-white"
                : "bg-white text-black"
            }`}
          >
            LOGIN
          </button>

          <button
            onMouseEnter={() => setHoveredButton("signup")}
            onMouseLeave={() => setHoveredButton(null)}
            className={`px-5 py-1.5 border border-white rounded-full text-sm font-semibold transition-all duration-300 ${
              hoveredButton === "signup"
                ? "bg-white text-black"
                : "bg-black text-white"
            }`}
          >
            SIGN UP
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden focus:outline-none"
          >
            <svg
              className="w-7 h-7"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden mt-3 bg-white rounded-lg shadow-lg py-2">
          <button
            onClick={() => { navigate("/"); setMenuOpen(false); }}
            className="block w-full text-left px-4 py-2 text-black hover:bg-black hover:text-white transition"
          >
            HOME
          </button>
          <button
            onClick={() => { navigate("/our-studio"); setMenuOpen(false); }}
            className="block w-full text-left px-4 py-2 text-black hover:bg-black hover:text-white transition"
          >
            OUR STUDIOS
          </button>
          <button
            onClick={() => { navigate("/blog"); setMenuOpen(false); }}
            className="block w-full text-left px-4 py-2 text-black hover:bg-black hover:text-white transition"
          >
            BLOG
          </button>
          {Categories.map((c) => (
            <button
              key={c.value}
              onClick={() => { navigate(c.href); setMenuOpen(false); }}
              className="block w-full text-left px-4 py-2 text-black hover:bg-black hover:text-white transition"
            >
              {c.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
