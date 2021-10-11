import Video from './Video';

export default function Host({ src = 'videos/video1.mp4' }) {
  return (
    <div className="relative z-10 host-video-wrapper">
      <Video></Video>
    </div>
  );
}
