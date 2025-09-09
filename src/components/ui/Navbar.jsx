import React, { useState } from 'react';
import Logo from '../../assets/Logo.png';
import { Link } from 'react-router-dom';
import { ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const Categories = [
  
  {
    value: "music studio",
    label: "Music Studio",
    href: "/musicstudio",
  },
  {
    value: "podcast studio",
    label: "Podcast Studio",
    href: "/podcaststudio",
  },
  {
    value: "art studio",
    label: "Art Studio",
    href: "/artstudio",
  },
  {
    value: "photography studio",
    label: "Photography Studio",
    href: "/photostudio",
  },
  
]
const Navbar = () => {
  const [hoveredButton, setHoveredButton] = useState(null); 
  const [open, setOpen] = React.useState(false)
  return (
    <>
    
    <nav className="bg-black text-white py-2 px-4"> 
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center mr-6"> 
          <img src={Logo} alt="Logo" className="h-12 w-auto" /> 
        </div>

        {/* Navigation Links */}
       <ul className="hidden md:flex space-x-8 text-sm font-semibold"> 
                 <li>
                   <Link to='/' className="hover:text-blue-400 transition-colors">
                     HOME
                   </Link>
                 </li>
                 <li>
                   <Link to='/our-studio' className="hover:text-blue-400 transition-colors">
                     OUR STUDIOS
                   </Link>
                 </li>
                 <li>
                   <Link to='/blog' className="hover:text-blue-400 transition-colors">
                    BLOG
                   </Link>
                 </li>
                 <li>
                   <Popover open={open} onOpenChange={setOpen} className="hover:text-blue-400 transition-colors">
      <PopoverTrigger asChild className="hover:text-blue-400 transition-colors">
        <Button 
          
          
          role="combobox"
          aria-expanded={open}
          className="w-[130px] ml-[-15px] mt-[-13px]"
        >
          CATEGORIES
          <ChevronsUpDown className="opacity-90 h-1 w-4 " />
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
                  onSelect={() => setOpen(false)}
                  className="p-0"
                >
                  <Link
                    to={Category.href}
                    className="w-full px-4 py-2 block text-sm hover:bg-accent hover:text-accent-foreground"
                  >
                    {Category.label}
                  </Link>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>

                 </li>
               </ul>

        {/* Buttons */}
        <div className="flex items-center space-x-4">
          {/* LOGIN Button */}
          <button
            onMouseEnter={() => setHoveredButton('login')}
            onMouseLeave={() => setHoveredButton(null)}
            className={`px-5 py-1.5 border border-white rounded-full text-sm font-semibold transition-all duration-300 ${
              hoveredButton === 'login'
                ? 'bg-white text-black'
                : hoveredButton === 'signup'
                ? 'bg-black text-white'
                : 'bg-white text-black'
            }`}
          >
            LOGIN
          </button>

          {/* SIGN UP Button */}
          <button
            onMouseEnter={() => setHoveredButton('signup')}
            onMouseLeave={() => setHoveredButton(null)}
            className={`px-5 py-1.5 border border-white rounded-full text-sm font-semibold transition-all duration-300 ${
              hoveredButton === 'signup' ? 'bg-white text-black' : 'bg-black text-white'
            }`}
          >
            SIGN UP
          </button>
        </div>
      </div>
    </nav>
    </>
  );

};

export default Navbar;
