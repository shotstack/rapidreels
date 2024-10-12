// FileUploader.tsx
import React, { useState, useEffect, useMemo } from 'react';

interface FileUploaderProps {
  label?: string;
  accept?: string;
  onFileUpload?: (file: File | null) => void;
  files?: File[];
  setFiles?: (newFiles: File[]) => void;
  file?: File | null;
  className?: string;
  maxFiles?: number;
  minFiles?: number;
  allowedFileTypes?: string[];
}

const FileUploader: React.FC<FileUploaderProps> = ({
  label,
  onFileUpload,
  files = [],
  setFiles,
  file,
  className = '',
  maxFiles = Infinity,
  minFiles = 0,
  allowedFileTypes = ['image/*']
}) => {
  const [error, setError] = useState<string>('');
  const [info, setInfo] = useState<string>('');

  // Memoize displayFiles to prevent unnecessary re-renders
  const displayFiles = useMemo(() => {
    return onFileUpload ? (file ? [file] : []) : files || [];
  }, [onFileUpload, file, files]);

  // Generate file previews using useMemo and log the images
  const filePreviews = useMemo(() => {
    return displayFiles.map(file => {
      const url = URL.createObjectURL(file);
      return {
        file,
        url
      };
    });
  }, [displayFiles]);

  // Clean up object URLs when filePreviews change or component unmounts
  useEffect(() => {
    // Cleanup function to revoke object URLs
    return () => {
      filePreviews.forEach(({ url }) => URL.revokeObjectURL(url));
    };
  }, [filePreviews]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);

      // Validate file types
      const validFiles = selectedFiles.filter(file =>
        allowedFileTypes.some(type => {
          if (type.endsWith('/*')) {
            const prefix = type.replace('/*', '');
            return file.type.startsWith(prefix);
          }
          return file.type === type;
        })
      );

      if (validFiles.length !== selectedFiles.length) {
        setError('Some files have invalid file types and were not added.');
      } else {
        setError('');
      }

      if (onFileUpload) {
        if (validFiles.length > 1) {
          setError('Only one file can be uploaded.');
          return;
        }
        if (validFiles.length === 0) {
          setError('Please select a valid file.');
          return;
        }
        onFileUpload(validFiles[0]);
      } else if (setFiles) {
        const totalFiles = (files?.length || 0) + validFiles.length;
        if (totalFiles > maxFiles) {
          setError(`You can only upload up to ${maxFiles} files.`);
          return;
        }
        if (setFiles) {
          const updatedFiles = [...(files || []), ...validFiles];
          setFiles(updatedFiles);
          setError('');
        }
      }
    }
  };

  // Update informational message based on minFiles
  useEffect(() => {
    if (displayFiles.length < minFiles) {
      setInfo(
        `Please upload at least ${minFiles} file${minFiles > 1 ? 's' : ''}.`
      );
    } else {
      setInfo('');
    }
  }, [displayFiles, minFiles]);

  return (
    <div className={`file-uploader ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <input
        type="file"
        onChange={handleFileChange}
        accept={allowedFileTypes.join(', ')}
        multiple={!onFileUpload && maxFiles > 1}
        className="block w-full text-sm text-gray-500
                     file:py-2 file:px-4
                     file:border file:border-gray-300
                     file:rounded-md file:text-sm file:font-semibold
                     file:bg-gray-50 file:text-gray-700
                     hover:file:bg-gray-100"
      />
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      {info && <p className="text-blue-500 text-sm mt-2">{info}</p>}
      {filePreviews.length > 0 && (
        <div className="flex flex-wrap gap-4 mt-4">
          {filePreviews.map(({ file, url }, index) => (
            <div key={index} className="relative w-24 h-24">
              <img
                src={url}
                alt={`upload-${index}`}
                className="w-full h-full object-cover rounded-md"
              />
              <button
                type="button"
                onClick={() => {
                  if (onFileUpload && file) {
                    onFileUpload(null);
                  } else if (setFiles && files) {
                    const updatedFiles = files.filter((_, i) => i !== index);
                    setFiles(updatedFiles);
                  }
                }}
                className="absolute top-0 right-0 bg-red-500 text-white rounded-bl w-6 h-6 flex items-center justify-center"
              >
                &times;
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FileUploader;
