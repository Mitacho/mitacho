import Image from "next/image";

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  height: string | number;
  width: string | number;
  src: string;
  alt: string;
}

export function Avatar({
  src,
  alt,
  height,
  width,
  className,
  ...props
}: AvatarProps) {
  return (
    <div className={`overflow-hidden ${className}`} {...props}>
      <Image src={src} alt={alt} height={height} width={width} />
    </div>
  );
}
