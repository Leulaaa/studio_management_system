import React from 'react';

const ProfileAvatar = ({ src, alt, size = 'large' }) => {
  const sizeClasses = {
    small: 'w-16 h-16',      
    medium: 'w-20 h-20',     
    large: 'w-32 h-32',     
    xlarge: 'w-40 h-40',     
  };

  return (
    <div className={`${sizeClasses[size]} rounded-full overflow-hidden bg-gray-200 flex-shrink-0`}>
      <img
        src={src || 'https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=400'}
        alt={alt || 'Profile'}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default ProfileAvatar;
