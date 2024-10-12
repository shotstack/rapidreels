import React from 'react';
import { ConfigProps } from '@models/config';

const voices = ['Olivia', 'Amy', 'Brian', 'Ivy'];

function VoiceSelection({ config, setConfig }: ConfigProps) {
  return (
    <div className="mb-5">
      <h3 className="mb-2">Voice</h3>
      <select
        value={config.voice}
        onChange={e => setConfig({ ...config, voice: e.target.value })}
        className="w-full p-2 border border-gray-300 rounded"
      >
        <option value="">Select Voice</option>
        {voices.map(voice => (
          <option key={voice} value={voice}>
            {voice}
          </option>
        ))}
      </select>
    </div>
  );
}

export default VoiceSelection;
