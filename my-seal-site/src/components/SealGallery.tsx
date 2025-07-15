import { useEffect, useState } from 'react';
import { SealImage } from './SealImage';
import './SealGallery.css';

interface Seal {
  id: number;
  src: string;
  alt: string;
  caption: string;
}

export const SealGallery = () => {
  const [seals, setSeals] = useState<Seal[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/images/seals.json')
      .then(response => response.json())
      .then(data => {
        setSeals(data.seals);
        setLoading(false);
      })
      .catch(error => {
        console.error('アザラシデータの読み込みに失敗しました:', error);
        setError('画像の読み込みに失敗しました。');
        setLoading(false);
      });
  }, []);

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
      {error && <p className="error-message">{error}</p>}
      <div className="gallery-grid">
        {seals.map(seal => (
          <SealImage
            key={seal.id}
            src={seal.src}
            alt={seal.alt}
            caption={seal.caption}
          />
        ))}
      </div>
    </div>
  );
}; 