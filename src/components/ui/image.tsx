import React from 'react';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallback?: string;
}

export const Image: React.FC<ImageProps> = ({ 
  src, 
  alt, 
  fallback = '/placeholder.svg',
  className,
  ...props 
}) => {
  const [imgSrc, setImgSrc] = React.useState(src);
  const [isLoading, setIsLoading] = React.useState(true);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setImgSrc(fallback);
    setIsLoading(false);
  };

  // Convert /src/assets/ paths to direct imports
  const getImageSrc = (imagePath: string) => {
    if (imagePath.startsWith('/src/assets/')) {
      const imageName = imagePath.replace('/src/assets/', '');
      return `/src/assets/${imageName}`;
    }
    return imagePath;
  };

  React.useEffect(() => {
    setImgSrc(getImageSrc(src));
  }, [src]);

  return (
    <div className={`relative ${className || ''}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-muted animate-pulse rounded" />
      )}
      <img
        {...props}
        src={imgSrc}
        alt={alt}
        onLoad={handleLoad}
        onError={handleError}
        className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'} ${className || ''}`}
      />
    </div>
  );
};