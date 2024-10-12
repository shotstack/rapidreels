import React from 'react';
import Spinner from '@components/Spinner';

type PreviewPanelProps = {
  videoUrl: string | null;
  status: string;
};

function PreviewPanel({ videoUrl, status }: PreviewPanelProps) {
  if (status && status !== 'done' && status !== 'failed') {
    return (
      <div className="w-full h-full p-5 flex flex-col items-center justify-center">
        <Spinner />
        <p>{status}</p>
      </div>
    );
  }

  return (
    <div className="w-full h-full p-5 flex items-center justify-center">
      {videoUrl ? (
        <video
          src={videoUrl}
          controls
          autoPlay
          className="w-full h-auto max-h-[80vh]"
        />
      ) : (
        <div className="w-full h-64 bg-gray-200 flex items-center justify-center border-2 border-dashed border-gray-400">
          <p className="text-gray-600 text-center">
            This is where your video will show up.
          </p>
        </div>
      )}
    </div>
  );
}

export default PreviewPanel;
