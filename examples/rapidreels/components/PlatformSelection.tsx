import React from 'react';
import { ConfigProps } from '@models/config';

const platforms = [
  { name: 'TikTok', image: '/images/platform/tiktok.png' },
  { name: 'YouTube Shorts', image: '/images/platform/shorts.png' }
];

function PlatformSelection({ config, setConfig }: ConfigProps) {
  return (
    <div className="mb-5">
      <h3 className="mb-2">Platform</h3>
      <div className="flex flex-wrap gap-4">
        {platforms.map(platform => (
          <button
            key={platform.name}
            className={`relative flex-1 min-w-[150px] p-2 border rounded cursor-pointer transition-transform ${
              config.platform === platform.name
                ? 'border-blue-500 transform scale-105'
                : 'border-gray-300'
            }`}
            onClick={() => setConfig({ ...config, platform: platform.name })}
          >
            <img
              src={platform.image}
              alt={platform.name}
              className="w-full h-32 object-contain rounded"
            />
            <span className="absolute bottom-2 left-2 text-white bg-black bg-opacity-50 px-2 py-1 rounded">
              {platform.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default PlatformSelection;
