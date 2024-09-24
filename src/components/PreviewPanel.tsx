import React from 'react';
import Spinner from '@components/Spinner';

type PreviewPanelProps = {
  videoUrl: string | null;
  status: string;
};

function PreviewPanel({ videoUrl, status }: PreviewPanelProps) {
  if (status && status !== 'done' && status !== 'failed') {
    return (
      <div className="w-4/5 p-5 flex flex-col items-center">
        <Spinner />
        <p>{status}</p>
      </div>
    );
  }

  return videoUrl ? (
    <div className="w-4/5 p-5">
      <video
        src={videoUrl}
        controls
        autoPlay
        className="w-full h-auto max-h-[80vh]"
      />
    </div>
  ) : (
    <div className="w-4/5 p-5">
      <p>This is where your video will show up.</p>
    </div>
  );
}

export default PreviewPanel;
