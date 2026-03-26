import { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface VideoPlayerProps {
  src: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  controls?: boolean;
  hasMuteButton?: boolean;
  className?: string;
  ariaLabel?: string;
}

const VideoPlayer = ({
  src,
  autoPlay = false,
  loop = false,
  muted = true,
  playsInline = true,
  controls = false,
  hasMuteButton = false,
  className = '',
  ariaLabel,
}: VideoPlayerProps) => {
  const [isMuted, setIsMuted] = useState(muted);

  return (
    <div className="relative">
      <video
        src={src}
        autoPlay={autoPlay}
        loop={loop}
        muted={hasMuteButton ? isMuted : muted}
        playsInline={playsInline}
        controls={controls}
        className={className}
        aria-label={ariaLabel}
      >
        Your browser does not support the video tag.
      </video>
      {hasMuteButton && (
        <button
          type="button"
          onClick={() => setIsMuted((m) => !m)}
          className="absolute top-3 right-3 p-2 rounded-lg bg-black/60 hover:bg-black/80 text-white transition-colors"
          aria-label={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
        </button>
      )}
    </div>
  );
};

export default VideoPlayer;
