import PlatformSelection from '@components/PlatformSelection';
import ContentDropdown from '@components/ContentDropdown';
import VoiceSelection from '@components/VoiceSelection';
import CreateButton from '@components/CreateButton';
import { VideoStatus } from '@constants/status';
import { VideoConfig } from '@models/config';

type ConfigurationPanelProps = {
  config: VideoConfig;
  setConfig: React.Dispatch<React.SetStateAction<VideoConfig>>;
  onCreate: () => void;
  status: string;
};

function ConfigurationPanel({
  config,
  setConfig,
  onCreate,
  status
}: ConfigurationPanelProps) {
  const isValid = Object.values(config).every(option => option !== '');
  const isDisabled =
    !isValid ||
    !(
      status === VideoStatus.DONE ||
      status === VideoStatus.FAILED ||
      status === ''
    );

  return (
    <div className="bg-background h-full p-5 border-r border-gray-300 overflow-y-auto">
      <PlatformSelection config={config} setConfig={setConfig} />
      <ContentDropdown config={config} setConfig={setConfig} />
      <VoiceSelection config={config} setConfig={setConfig} />
      <CreateButton onCreate={onCreate} disabled={isDisabled} />
    </div>
  );
}

export default ConfigurationPanel;
