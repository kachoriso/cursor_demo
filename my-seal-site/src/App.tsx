import { useState } from 'react'
import { SealGallery } from './components/SealGallery'
import { LuckySeal } from './components/LuckySeal'
import './App.css'

function App() {
  const [currentSection, setCurrentSection] = useState('home')

  const sealFacts = [
    "アザラシは海洋哺乳類です！",
    "アザラシは最大30分間潜水できます",
    "生まれたばかりの赤ちゃんは白い毛で覆われています",
    "アザラシの鳴き声は個体識別に使われます",
    "アザラシ科には19種類の真のアザラシが存在します"
  ]

  const sealTypes = [
    { name: "ズキンアザラシ", description: "北大西洋の深海に生息。オスは鼻の膨らみ（フード）が特徴的。" },
    { name: "アゴヒゲアザラシ", description: "北極海に生息する大型のアザラシ。長いヒゲが特徴。" },
    { name: "ハイイロアザラシ", description: "北大西洋に生息する大型のアザラシ。灰色の体色が特徴。" },
    { name: "クラカケアザラシ", description: "南極周辺に生息する美しい模様のアザラシ。独特な縞模様が特徴。" },
    { name: "ヒョウアザラシ", description: "南極海の頂点捕食者。ペンギンを主食とする大型のアザラシ。" },
    { name: "ウェッデルアザラシ", description: "南極大陸周辺に生息。氷の下で長時間潜水できます。" },
    { name: "カニクイアザラシ", description: "南極海に最も多く生息。実際にはオキアミを主食とします。" },
    { name: "キタゾウアザラシ", description: "北太平洋最大のアザラシ。深海まで潜ることができます。" },
    { name: "ミナミゾウアザラシ", description: "南半球最大のアザラシ。オスは巨大な鼻を持ちます。" },
    { name: "チチュウカイモンクアザラシ", description: "地中海と北西アフリカ沿岸に生息。絶滅危惧種。" },
    { name: "ハワイモンクアザラシ", description: "ハワイ諸島の固有種。現在約1,400頭しか残っていません。" },
    { name: "カリブモンクアザラシ", description: "カリブ海に生息していた種。1952年に絶滅が確認された。" },
    { name: "ロスアザラシ", description: "南極海の氷の中に生息。他のアザラシより目が大きい。" },
    { name: "タテゴトアザラシ", description: "北大西洋に生息。成体のオスは黒いハープ模様が特徴。" },
    { name: "ゴマフアザラシ", description: "最も一般的なアザラシ。体に斑点模様があります。北太平洋に広く分布。" },
    { name: "ゼニガタアザラシ", description: "北太平洋に生息する中型のアザラシ。日本近海でも見られます。" },
    { name: "カスピカイアザラシ", description: "カスピ海の固有種。世界で最も小さなアザラシの一つ。" },
    { name: "ワモンアザラシ", description: "北極圏に生息する小型のアザラシ。氷の穴で呼吸します。" },
    { name: "バイカルアザラシ", description: "バイカル湖の固有種。淡水に住む唯一のアザラシ。" }
  ]

  return (
    <div className="App">
      <header className="header">
        <div className="marquee-container">
          <div className="marquee-text">🦭 ようこそ！アザラシの世界へ！🦭</div>
        </div>
        <h1 className="title">
          ✨ アザラシ大百科 ✨
        </h1>
        <nav className="nav">
          <button 
            className={`nav-btn ${currentSection === 'home' ? 'active' : ''}`}
            onClick={() => setCurrentSection('home')}
          >
            🏠 ホーム
          </button>
          <button 
            className={`nav-btn ${currentSection === 'facts' ? 'active' : ''}`}
            onClick={() => setCurrentSection('facts')}
          >
            📚 豆知識
          </button>
          <button 
            className={`nav-btn ${currentSection === 'gallery' ? 'active' : ''}`}
            onClick={() => setCurrentSection('gallery')}
          >
            🖼️ 種類・ギャラリー
          </button>
          <button 
            className={`nav-btn ${currentSection === 'lucky' ? 'active' : ''}`}
            onClick={() => setCurrentSection('lucky')}
          >
            🍀 ラッキーアザラシ
          </button>
        </nav>
      </header>

      <main className="main">
        {currentSection === 'home' && (
          <div className="section">
            <div className="welcome-box">
              <h2>🦭 アザラシの世界へようこそ！ 🦭</h2>
              <p>
                このサイトでは、かわいいアザラシについてのあらゆる情報をお届けします！<br/>
                アザラシは海の天使とも呼ばれる愛らしい海洋哺乳類です。
              </p>
              <div className="seal-ascii">
                <pre>{`
    ∩___∩
   (  ・ ω ・ )
  o_)"∪∪"(o
    `}</pre>
              </div>
            </div>
          </div>
        )}

        {currentSection === 'facts' && (
          <div className="section">
            <h2>📚 アザラシの豆知識</h2>
            <div className="facts-container">
              {sealFacts.map((fact, index) => (
                <div key={index} className="fact-box">
                  <span className="fact-number">{index + 1}</span>
                  <p>{fact}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {currentSection === 'gallery' && (
          <div className="section">
            <SealGallery sealTypes={sealTypes} />
          </div>
        )}

        {currentSection === 'lucky' && (
          <div className="section">
            <LuckySeal sealTypes={sealTypes} />
          </div>
        )}
      </main>

      <footer className="footer">
        <p>
          💙 アザラシを愛する全ての人に捧げます 💙<br/>
          &copy; 2024 アザラシ大百科
        </p>
        <div className="visitor-counter">
          <span className="blink">🔥 訪問者数: 99999 人 🔥</span>
        </div>
      </footer>
    </div>
  )
}

export default App 