import React from 'react';
import { ConfigProps } from '@models/config';

function ContentDropdown({ config, setConfig }: ConfigProps) {
  const contents = [
    { name: 'Scary Story', image: '/images/content/scary-story.png' },
    { name: 'Bedtime Story', image: '/images/content/bedtime-story.png' },
    { name: 'Adventure', image: '/images/content/adventure.png' }
  ];

  return (
    <div className="mb-5">
      <h3 className="mb-2">Content</h3>
      <div className="flex flex-wrap gap-4">
        {contents.map(content => (
          <button
            key={content.name}
            className={`relative flex-1 min-w-[150px] p-2 border rounded cursor-pointer transition-transform ${
              config.content === content.name
                ? 'border-blue-500 transform scale-105'
                : 'border-gray-300'
            }`}
            onClick={() => setConfig({ ...config, content: content.name })}
          >
            <img
              src={content.image}
              alt={content.name}
              className="w-full h-32 object-cover rounded"
            />
            <span className="absolute bottom-2 left-2 text-white bg-black bg-opacity-50 px-2 py-1 rounded">
              {content.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default ContentDropdown;
