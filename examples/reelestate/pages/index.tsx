import React, { useState } from 'react';
import ConfigurationPanel from '@components/ConfigurationPanel';
import PreviewPanel from '@components/PreviewPanel';
import useVideoGenerator from '@hooks/useVideoGenerator';
import { VideoRequest } from '@models/config';

export default function HomePage() {
  const [config, setConfig] = useState<VideoRequest>({
    imageFiles: [],
    agentPhotoFile: null,
    agencyLogoFile: null,
    address: '',
    bedrooms: 0,
    bathrooms: 0,
    cars: 0,
    suburb: '',
    state: '',
    postcode: '',
    propertyType: '',
    price: '',
    agentName: '',
    agentEmail: '',
    style: '',
    color: '',
    primaryColor: '#f0c20c',
    secondaryColor: '#ffffff'
  });

  const { videoUrl, status, handleCreate } = useVideoGenerator();

  return (
    <div className="flex flex-col sm:flex-row h-screen">
      <div className="flex-none w-full sm:w-1/2 lg:w-1/3 h-full">
        <ConfigurationPanel
          config={config}
          setConfig={setConfig}
          onCreate={handleCreate}
          status={status}
        />
      </div>
      <div className="flex-1 w-full sm:w-1/2 lg:w-2/3 h-full">
        <PreviewPanel videoUrl={videoUrl} status={status} />
      </div>
    </div>
  );
}
