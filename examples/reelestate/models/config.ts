type baseParameters = {
  address: string;
  bedrooms: number;
  bathrooms: number;
  cars: number;
  suburb: string;
  state: string;
  postcode: string;
  propertyType: string;
  price: string;
  agentName: string;
  agentEmail: string;
  style: string;
  color: string;
  primaryColor: string;
  secondaryColor: string;
};

export type VideoParameters = baseParameters & {
  imageUrls: string[];
  agentPhotoUrl: string;
  agencyLogoUrl: string;
};

export type VideoRequest = baseParameters & {
  imageFiles: File[];
  agentPhotoFile: File | null;
  agencyLogoFile: File | null;
};

export type ConfigProps = {
  config: VideoRequest;
  setConfig: React.Dispatch<React.SetStateAction<VideoRequest>>;
  onCreate: (config: VideoRequest) => void;
  status: string;
};
