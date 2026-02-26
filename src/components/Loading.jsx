import React from 'react';

export default function Loading({ text="Loading...", size= "md" }) {
const sizeClasses = {
    sm:'font-small',
    md:'font-medium',
    lg:'font-large'
}

  return (
    <div className="text-center p-8">
      <div className="spinner w-10 h-10 border-4 border-gray-200 border-t-4 border-t-blue-500 rounded-full mx-auto"></div>
      <p className={`mt-4 text-gray-600 ${sizeClasses[size]}`} >{text}</p>
    </div>
  );
}

