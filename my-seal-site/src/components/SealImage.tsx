import React from 'react';
import './SealImage.css';

interface SealImageProps {
  src: string;
  alt: string;
  caption?: string;
}

export const SealImage: React.FC<SealImageProps> = ({ src, alt, caption }) => {
  return (
    <div className="seal-image-container">
      <div className="seal-image-frame">
        <img src={src} alt={alt} className="seal-image" />
      </div>
      {caption && <p className="seal-image-caption">{caption}</p>}
    </div>
  );
};