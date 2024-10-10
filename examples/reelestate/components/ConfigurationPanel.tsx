import { useState, useEffect, useCallback } from 'react';
import CreateButton from '@components/CreateButton';
import FileUploader from '@components/FileUploader';
import { VideoStatus } from '@constants/status';
import { VideoRequest, ConfigProps } from '@models/config';

function ConfigurationPanel({
  config,
  setConfig,
  onCreate,
  status
}: ConfigProps) {
  const [uploadError, setUploadError] = useState<string>('');

  // Use useCallback to memoize setImages by updating config.imageFiles directly
  const handleSetImages = useCallback(
    (newImages: File[]) => {
      setConfig(prevConfig => ({
        ...prevConfig,
        imageFiles: newImages
      }));
    },
    [setConfig]
  );

  useEffect(() => {
    const imageCount = config.imageFiles.length;
    if (imageCount > 5) {
      setUploadError('You can only upload up to 5 property images.');
    } else {
      setUploadError('');
    }
  }, [config.imageFiles]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;
    const updatedValue = type === 'number' ? Number(value) : value;

    setConfig(prevConfig => ({
      ...prevConfig,
      [name]: updatedValue
    }));
  };

  const handleFileUpload = (field: keyof VideoRequest, file: File | null) => {
    setConfig(prevConfig => ({
      ...prevConfig,
      [field]: file
    }));
  };

  const isValid =
    config.address &&
    config.suburb &&
    config.state &&
    config.postcode &&
    config.propertyType &&
    config.price &&
    config.agentName &&
    config.agentEmail &&
    config.imageFiles.length === 5 &&
    config.agentPhotoFile &&
    config.agencyLogoFile &&
    config.style !== '' &&
    config.color !== '' &&
    config.primaryColor &&
    config.secondaryColor;

  const isDisabled =
    !isValid ||
    !(
      status === VideoStatus.DONE ||
      status === VideoStatus.FAILED ||
      status === ''
    );

  return (
    <div className="bg-background h-full p-6 border-r border-gray-300 overflow-y-auto">
      <form className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Property Images
          </h2>
          <FileUploader
            label="Upload Property Images"
            accept="image/*"
            className="mt-1"
            files={config.imageFiles}
            setFiles={handleSetImages}
            maxFiles={5}
            minFiles={5}
            allowedFileTypes={['image/*']}
          />
          {uploadError && (
            <p className="text-red-500 text-sm mt-2">{uploadError}</p>
          )}
        </div>

        {/* Property Details */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Property Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Address */}
            <div className="col-span-1 md:col-span-2">
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                htmlFor="address"
              >
                Address
              </label>
              <input
                type="text"
                name="address"
                id="address"
                value={config.address}
                onChange={handleChange}
                placeholder="123 Main St"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            {/* Suburb */}
            <div>
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                htmlFor="suburb"
              >
                Suburb
              </label>
              <input
                type="text"
                name="suburb"
                id="suburb"
                value={config.suburb}
                onChange={handleChange}
                placeholder="Suburb"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            {/* State */}
            <div>
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                htmlFor="state"
              >
                State
              </label>
              <input
                type="text"
                name="state"
                id="state"
                value={config.state}
                onChange={handleChange}
                placeholder="State"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            {/* Postcode */}
            <div>
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                htmlFor="postcode"
              >
                Postcode
              </label>
              <input
                type="text"
                name="postcode"
                id="postcode"
                value={config.postcode}
                onChange={handleChange}
                placeholder="Postcode"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Specifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Bedrooms */}
            <div>
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                htmlFor="bedrooms"
              >
                Bedrooms
              </label>
              <input
                type="number"
                name="bedrooms"
                id="bedrooms"
                value={config.bedrooms}
                onChange={handleChange}
                placeholder="Bedrooms"
                min="0"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            {/* Bathrooms */}
            <div>
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                htmlFor="bathrooms"
              >
                Bathrooms
              </label>
              <input
                type="number"
                name="bathrooms"
                id="bathrooms"
                value={config.bathrooms}
                onChange={handleChange}
                placeholder="Bathrooms"
                min="0"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            {/* Cars */}
            <div>
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                htmlFor="cars"
              >
                Cars
              </label>
              <input
                type="number"
                name="cars"
                id="cars"
                value={config.cars}
                onChange={handleChange}
                placeholder="Cars"
                min="0"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>
        </div>

        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Property Type */}
            <div>
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                htmlFor="propertyType"
              >
                Property Type
              </label>
              <select
                name="propertyType"
                id="propertyType"
                value={config.propertyType}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="">Select Type</option>
                <option value="House">House</option>
                <option value="Apartment">Apartment</option>
                <option value="Townhouse">Townhouse</option>
                <option value="Condo">Condo</option>
                <option value="Land">Land</option>
              </select>
            </div>
            {/* Price */}
            <div>
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                htmlFor="price"
              >
                Price
              </label>
              <input
                type="text"
                name="price"
                id="price"
                value={config.price}
                onChange={handleChange}
                placeholder="$1,000,000"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>
        </div>

        {/* Agent Information */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Agent Information
          </h2>
          <div className="grid grid-cols-1 gap-6 mt-5">
            {/* Agent Name */}
            <div>
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                htmlFor="agentName"
              >
                Agent Name
              </label>
              <input
                type="text"
                name="agentName"
                id="agentName"
                value={config.agentName}
                onChange={handleChange}
                placeholder="Agent Name"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
              {!config.agentName && (
                <p className="text-red-500 text-sm mt-1">
                  Agent name is required.
                </p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 mt-5">
            {/* Agent Email */}
            <div>
              <label
                className="block text-sm font-medium text-gray-700 mb-1"
                htmlFor="agentEmail"
              >
                Agent Email
              </label>
              <input
                type="email"
                name="agentEmail"
                id="agentEmail"
                value={config.agentEmail}
                onChange={handleChange}
                placeholder="agent@example.com"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
              {!config.agentEmail && (
                <p className="text-red-500 text-sm mt-1">
                  Agent email is required.
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Branding */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Branding</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Panel Style Selection */}
            <div>
              <label
                className="block text-sm font-medium text-gray-700 mb-2"
                htmlFor="style"
              >
                Panel Style
              </label>
              <select
                name="style"
                id="style"
                value={config.style}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="">Select Style</option>
                <option value="flat-panel">Flat Panel</option>
                <option value="arrow-sharp">Arrow Sharp</option>
                <option value="arrow-rounded">Arrow Rounded</option>
              </select>
              {!config.style && (
                <p className="text-red-500 text-sm mt-1">Style is required.</p>
              )}
            </div>

            {/* Panel Colour Selection */}
            <div>
              <label
                className="block text-sm font-medium text-gray-700 mb-2"
                htmlFor="color"
              >
                Panel Colour
              </label>
              <select
                name="color"
                id="color"
                value={config.color}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="">Select Colour</option>
                <option value="yellow">Yellow</option>
                <option value="white">White</option>
                <option value="red">Red</option>
                <option value="purple">Purple</option>
                <option value="pink">Pink</option>
                <option value="orange">Orange</option>
                <option value="green">Green</option>
                <option value="cyan">Cyan</option>
                <option value="brown">Brown</option>
                <option value="blue">Blue</option>
                <option value="black">Black</option>
              </select>
              {!config.color && (
                <p className="text-red-500 text-sm mt-1">Colour is required.</p>
              )}
            </div>

            {/* Primary Colour Picker */}
            <div>
              <label
                className="block text-sm font-medium text-gray-700 mb-2"
                htmlFor="primaryColor"
              >
                Primary Colour
              </label>
              <input
                type="color"
                name="primaryColor"
                id="primaryColor"
                value={config.primaryColor}
                onChange={handleChange}
                className="mt-1 block w-full h-10 p-0 border-none rounded-md shadow-sm focus:outline-none"
              />
              {!config.primaryColor && (
                <p className="text-red-500 text-sm mt-1">
                  Primary colour is required.
                </p>
              )}
            </div>

            {/* Secondary Colour Picker */}
            <div>
              <label
                className="block text-sm font-medium text-gray-700 mb-2"
                htmlFor="secondaryColor"
              >
                Secondary Colour
              </label>
              <input
                type="color"
                name="secondaryColor"
                id="secondaryColor"
                value={config.secondaryColor}
                onChange={handleChange}
                className="mt-1 block w-full h-10 p-0 border-none rounded-md shadow-sm focus:outline-none"
              />
              {!config.secondaryColor && (
                <p className="text-red-500 text-sm mt-1">
                  Secondary colour is required.
                </p>
              )}
            </div>

            {/* Agent Photo */}
            <div>
              <label
                className="block text-sm font-medium text-gray-700 mb-2"
                htmlFor="agentPhoto"
              >
                Agent Photo
              </label>
              <FileUploader
                label="Upload Agent Photo"
                onFileUpload={file => handleFileUpload('agentPhotoFile', file)}
                file={config.agentPhotoFile}
                accept="image/*"
                className="mt-1"
                maxFiles={1}
                minFiles={1}
                allowedFileTypes={['image/*']}
              />
              {!config.agentPhotoFile && (
                <p className="text-red-500 text-sm mt-1">
                  Agent photo is required.
                </p>
              )}
            </div>

            {/* Agency Logo */}
            <div>
              <label
                className="block text-sm font-medium text-gray-700 mb-2"
                htmlFor="agencyLogo"
              >
                Agency Logo
              </label>
              <FileUploader
                label="Upload Agency Logo"
                onFileUpload={file => handleFileUpload('agencyLogoFile', file)}
                file={config.agencyLogoFile}
                accept="image/*"
                className="mt-1"
                maxFiles={1}
                minFiles={1}
                allowedFileTypes={['image/*']}
              />
              {!config.agencyLogoFile && (
                <p className="text-red-500 text-sm mt-1">
                  Agency logo is required.
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <CreateButton
            onCreate={() => onCreate(config)}
            disabled={isDisabled}
          />
        </div>
      </form>
    </div>
  );
}

export default ConfigurationPanel;
