import { useEffect, useState } from 'react';
import { SealImage } from './SealImage';
import './SealGallery.css';

interface SealType {
  name: string;
  description: string;
}

interface SealWithImage {
  id: number;
  src: string;
  alt: string;
  caption: string;
}

interface SealGalleryProps {
  sealTypes: SealType[];
}

export const SealGallery = ({ sealTypes }: SealGalleryProps) => {
  const [sealsWithImages, setSealsWithImages] = useState<SealWithImage[]>([]);
  const [loading, setLoading] = useState(true);

  // 画像が存在するアザラシのマッピング
  const imageMapping: { [key: string]: string } = {
    'ゴマフアザラシ': '/images/harbor-seal.jpg',
    'ワモンアザラシ': '/images/ringed-seal.jpg',
    'クラカケアザラシ': '/images/ribbon-seal.jpg',
    'ゼニガタアザラシ': '/images/spotted-seal.jpg'
  };

  useEffect(() => {
    // 画像の存在を確認
    const checkImages = async () => {
      const imageData: SealWithImage[] = [];
      
      for (const [name, src] of Object.entries(imageMapping)) {
        try {
          const response = await fetch(src, { method: 'HEAD' });
          if (response.ok) {
            const sealType = sealTypes.find(seal => seal.name === name);
            if (sealType) {
              imageData.push({
                id: imageData.length + 1,
                src: src,
                alt: name,
                caption: sealType.description
              });
            }
          }
        } catch (error) {
          console.log(`Image not found for ${name}:`, error);
        }
      }
      
      setSealsWithImages(imageData);
      setLoading(false);
    };

    checkImages();
  }, [sealTypes]);

  if (loading) {
    return (
      <div className="seal-gallery">
        <div className="loading-message">
          <div className="loading-spinner"></div>
          <p>アザラシさん達を呼んでいます...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="seal-gallery">
      <h2 className="gallery-section-title">🖼️ 画像ギャラリー</h2>
      {sealsWithImages.length > 0 ? (
        <div className="gallery-grid">
          {sealsWithImages.map(seal => (
            <SealImage
              key={seal.id}
              src={seal.src}
              alt={seal.alt}
              caption={seal.caption}
            />
          ))}
        </div>
      ) : (
        <p className="no-images-message">現在表示できる画像がありません。</p>
      )}
      
      <h2 className="gallery-section-title">📚 全アザラシ種類一覧</h2>
      <div className="types-container">
        {sealTypes.map((seal, index) => (
          <div key={index} className="type-box">
            <h3 className="type-name">{seal.name}</h3>
            <p className="type-description">{seal.description}</p>
            {imageMapping[seal.name] && (
              <span className="has-image-badge">📸 画像あり</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}; 