import React, { useState } from 'react';

export type CreateButtonProps = {
  onCreate: () => void;
  disabled: boolean;
};

function CreateButton({ onCreate, disabled }: CreateButtonProps) {
  const [message, setMessage] = useState<string>('');

  const handleCreate = () => {
    onCreate();
  };

  return (
    <div className="w-full">
      <button
        className={`w-full p-2 bg-blue-500 text-white border-none rounded cursor-pointer text-center transition-colors duration-200 ${
          disabled ? 'bg-gray-400 cursor-not-allowed' : 'hover:bg-blue-700'
        }`}
        onClick={handleCreate}
        disabled={disabled}
      >
        Create Video
      </button>
      {message && <p className="mt-4 text-red-500">{message}</p>}
    </div>
  );
}

export default CreateButton;
