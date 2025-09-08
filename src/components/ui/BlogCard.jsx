import React from 'react';

const BlogCard = ({ title, date, excerpt, imageUrl, dark = false, layout = 'horizontal', size = 'normal' }) => {
  const bgColor = dark ? 'bg-black' : 'bg-white';
  const titleColor = dark ? 'text-white' : 'text-gray-900';
  const textColor = dark ? 'text-gray-300' : 'text-gray-600';
  const hoverEffect = dark ? 'hover:bg-gray-900' : 'hover:bg-gray-50';

  // Size variations
  const sizeClasses = {
    small: 'max-w-sm',
    normal: 'max-w-md',
    large: 'max-w-lg'
  };

  if (layout === 'vertical') {
    return (
      <div className={`${bgColor} rounded-lg overflow-hidden shadow-lg ${hoverEffect} transition-all duration-300 transform hover:scale-105 ${sizeClasses[size]} w-full`}>
        <div className="h-48 overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            onError={(e) => { e.target.src = "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600"; }}
          />
        </div>
        <div className="p-6">
          <h3 className={`text-lg font-bold mb-2 ${titleColor} line-clamp-2`}>{title}</h3>
          <p className={`text-sm mb-4 ${textColor} line-clamp-3`}>{excerpt}</p>
          <div className="flex justify-between items-center text-xs font-semibold">
            <span className={textColor}>{date}</span>
            <a href="#" className="text-blue-500 hover:text-blue-600 hover:underline transition-colors">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex flex-col md:flex-row rounded-lg overflow-hidden shadow-lg ${bgColor} ${hoverEffect} transition-all duration-300 ${sizeClasses[size]} w-full`}>
      <div className="md:w-1/2 p-8 flex flex-col justify-center">
        <h2 className={`text-2xl font-bold mb-3 ${titleColor}`}>{title}</h2>
        <p className={`text-sm mb-6 ${textColor} leading-relaxed`}>{excerpt}</p>
        <div className="flex justify-between items-center text-xs font-semibold">
          <span className={textColor}>{date}</span>
          <a href="#" className="text-blue-500 hover:text-blue-600 hover:underline transition-colors">
            Read more
          </a>
        </div>
      </div>
      <div className="md:w-1/2">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          onError={(e) => { e.target.src = "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600"; }}
        />
      </div>
    </div>
  );
};

export default BlogCard;