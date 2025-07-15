import { useState } from 'react';
import './LuckySeal.css';

interface SealType {
  name: string;
  description: string;
}

interface LuckySealProps {
  sealTypes: SealType[];
}

export const LuckySeal = ({ sealTypes }: LuckySealProps) => {
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
  const [isSpinning, setIsSpinning] = useState(false);
  const [luckySeal, setLuckySeal] = useState<SealType | null>(null);
  const [displaySeal, setDisplaySeal] = useState<SealType | null>(null);

  const selectLuckySeal = () => {
    if (isSpinning) return;
    
    setIsSpinning(true);
    setLuckySeal(null);
    
    // スロットアニメーション
    let counter = 0;
    const maxSpins = 20;
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * sealTypes.length);
      setDisplaySeal(sealTypes[randomIndex]);
      counter++;
      
      if (counter >= maxSpins) {
        clearInterval(interval);
        // 最終的なラッキーアザラシを決定
        const finalIndex = Math.floor(Math.random() * sealTypes.length);
        const selected = sealTypes[finalIndex];
        setLuckySeal(selected);
        setDisplaySeal(selected);
        setIsSpinning(false);
      }
    }, 100);
  };

  return (
    <div className="lucky-seal-container">
      <h2>🍀 本日のラッキーアザラシ 🍀</h2>
      <p className="lucky-description">
        今日のあなたの運勢を占うアザラシを選びましょう！<br/>
        ボタンを押してラッキーアザラシをゲットしよう！
      </p>
      
      <div className="slot-machine">
        <div className={`seal-display ${isSpinning ? 'spinning' : ''}`}>
          {displaySeal ? (
            <div className="seal-card">
              <h3 className="seal-name">{displaySeal.name}</h3>
              {imageMapping[displaySeal.name] && !isSpinning ? (
                <img 
                  src={imageMapping[displaySeal.name]} 
                  alt={displaySeal.name}
                  className="lucky-seal-image"
                />
              ) : (
                <div className="seal-emoji">🦭</div>
              )}
              {!isSpinning && luckySeal && (
                <p className="seal-description">{displaySeal.description}</p>
              )}
            </div>
          ) : (
            <div className="seal-placeholder">
              <div className="placeholder-emoji">❓</div>
              <p>ボタンを押してスタート！</p>
            </div>
          )}
        </div>
        
        <button 
          className={`lucky-button ${isSpinning ? 'spinning' : ''}`}
          onClick={selectLuckySeal}
          disabled={isSpinning}
        >
          {isSpinning ? '🎰 スピン中...' : '🎰 ラッキーアザラシを選ぶ！'}
        </button>
      </div>

      {luckySeal && !isSpinning && (
        <div className="lucky-result">
          <div className="congratulations">
            <h3>🎉 おめでとうございます！ 🎉</h3>
            <p>本日のあなたのラッキーアザラシは<br/>
              <span className="lucky-name">「{luckySeal.name}」</span>です！
            </p>
            <div className="fortune-message">
              <p>今日は{luckySeal.name}のように素晴らしい一日になりそうです！</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}; 