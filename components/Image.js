import Image from 'next/image';

export default function Img({
  src,
  alt = 'Image',
  width = 100,
  height = 100,
  quality = 75,
  layout = 'intrinsic',
  className,
  unoptimized = false
}) {
  const loader = () => {
    return `${src}?w=${width}&q=${quality}`;
  };

  return (
    <div className="relative">
      <Image
        className={className}
        loader={loader}
        src={src}
        alt={alt}
        width={width}
        height={height}
        layout={layout}
        unoptimized={unoptimized}
      />
    </div>
  );
}
