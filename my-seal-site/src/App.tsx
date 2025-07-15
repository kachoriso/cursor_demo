import { useState } from 'react'
import { SealGallery } from './components/SealGallery'
import './App.css'

function App() {
  const [currentSection, setCurrentSection] = useState('home')

  const sealFacts = [
    "アザラシは海洋哺乳類です！",
    "アザラシは最大30分間潜水できます",
    "生まれたばかりの赤ちゃんは白い毛で覆われています",
    "アザラシの鳴き声は個体識別に使われます",
    "世界には33種類のアザラシが存在します"
  ]

  const sealTypes = [
    { name: "ゴマフアザラシ", description: "最も一般的なアザラシ。体に斑点模様があります。" },
    { name: "ゼニガタアザラシ", description: "北太平洋に生息する中型のアザラシです。" },
    { name: "クラカケアザラシ", description: "南極周辺に生息する美しい模様のアザラシ。" },
    { name: "ワモンアザラシ", description: "北極圏に生息する小型のアザラシです。" }
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
            className={`nav-btn ${currentSection === 'types' ? 'active' : ''}`}
            onClick={() => setCurrentSection('types')}
          >
            🔍 種類
          </button>
          <button 
            className={`nav-btn ${currentSection === 'gallery' ? 'active' : ''}`}
            onClick={() => setCurrentSection('gallery')}
          >
            🖼️ ギャラリー
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

        {currentSection === 'types' && (
          <div className="section">
            <h2>🔍 アザラシの種類</h2>
            <div className="types-container">
              {sealTypes.map((seal, index) => (
                <div key={index} className="type-box">
                  <h3>{seal.name}</h3>
                  <p>{seal.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {currentSection === 'gallery' && (
          <div className="section">
            <SealGallery />
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