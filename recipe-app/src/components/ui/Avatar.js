// src/components/ui/Avatar.js

import React from 'react';

// Avatar Component that wraps the AvatarImage and AvatarFallback
export function Avatar({ children, className }) {
  return (
    <div className={`relative w-16 h-16 rounded-full overflow-hidden ${className}`}>
      {children}
    </div>
  );
}

// AvatarImage Component for showing the avatar image
export function AvatarImage({ src, alt }) {
  return <img src={src} alt={alt} className="w-full h-full object-cover" />;
}

// AvatarFallback Component for showing fallback text when no image is provided
export function AvatarFallback({ children }) {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gray-300 text-white text-xl font-bold">
      {children}
    </div>
  );
}
