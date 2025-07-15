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
    'ズキンアザラシ': '/images/hooded-seal.jpg',
    'アゴヒゲアザラシ': '/images/bearded-seal.jpg',
    'ハイイロアザラシ': '/images/grey-seal.jpg',
    'クラカケアザラシ': '/images/ribbon-seal.jpg',
    'ヒョウアザラシ': '/images/leopard-seal.jpg',
    'ウェッデルアザラシ': '/images/weddell-seal.jpg',
    'カニクイアザラシ': '/images/crabeater-seal.jpg',
    'キタゾウアザラシ': '/images/northern-elephant-seal.jpg',
    'ミナミゾウアザラシ': '/images/southern-elephant-seal.jpg',
    'チチュウカイモンクアザラシ': '/images/mediterranean-monk-seal.jpg',
    'ハワイモンクアザラシ': '/images/hawaiian-monk-seal.jpg',
    'カリブモンクアザラシ': '/images/caribbean-monk-seal.jpg',
    'ロスアザラシ': '/images/ross-seal.jpg',
    'タテゴトアザラシ': '/images/harp-seal.jpg',
    'ゴマフアザラシ': '/images/harbor-seal.jpg',
    'ゼニガタアザラシ': '/images/spotted-seal.jpg',
    'カスピカイアザラシ': '/images/caspian-seal.jpg',
    'ワモンアザラシ': '/images/ringed-seal.jpg',
    'バイカルアザラシ': '/images/baikal-seal.jpg'
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
      <h2 className="gallery-section-title">🖼️ アザラシ図鑑</h2>
      <div className="types-container">
        {sealTypes.map((seal, index) => (
          <div key={index} className="type-box">
            <h3 className="type-name">{seal.name}</h3>
            {imageMapping[seal.name] && (
              <div className="seal-image-container">
                <img 
                  src={imageMapping[seal.name]} 
                  alt={seal.name}
                  className="seal-type-image"
                  onError={(e) => {
                    console.log(`Failed to load image for ${seal.name}`);
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            )}
            <p className="type-description">{seal.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}; 