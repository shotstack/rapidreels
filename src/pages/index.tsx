import React, { useState } from 'react';
import ConfigurationPanel from '@components/ConfigurationPanel';
import PreviewPanel from '@components/PreviewPanel';
import useVideoGenerator from '@hooks/useVideoGenerator';

export default function HomePage() {
  const [config, setConfig] = useState({
    platform: '',
    content: '',
    voice: ''
  });

  const { videoUrl, status, handleCreate } = useVideoGenerator(config);

  return (
    <div className="flex h-screen">
      <div className="lg:w-1/5 md:w-1/2 sm:w-1/2">
        <ConfigurationPanel
          config={config}
          setConfig={setConfig}
          onCreate={handleCreate}
          status={status}
        />
      </div>
      <div className="lg:w-4/5 md:w-1/2 sm:w-1/2">
        <PreviewPanel videoUrl={videoUrl} status={status} />
      </div>
    </div>
  );
}
