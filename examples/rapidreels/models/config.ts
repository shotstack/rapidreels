export type VideoConfig = {
  platform: string;
  content: string;
  voice: string;
};

export type ConfigProps = {
  config: VideoConfig;
  setConfig: React.Dispatch<React.SetStateAction<VideoConfig>>;
};
