
import React, { useState, useEffect, useMemo } from 'react';
import { CATEGORIES, MOCK_PRODUCTS } from './constants';
import ProductCard from './components/ProductCard';

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredProducts = useMemo(() => {
    return MOCK_PRODUCTS.filter(p => {
      const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-sunshine-main rounded-lg flex items-center justify-center text-white font-bold">陽</div>
            <span className={`text-xl font-bold ${isScrolled ? 'text-gray-800' : 'text-gray-900'}`}>陽光精選好物</span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 font-medium">
            <a href="#" className="text-sunshine-main transition-colors">首頁</a>
            <a href="#recommendations" className="text-gray-600 hover:text-sunshine-main transition-colors">今日推薦</a>
            <a href="#about" className="text-gray-600 hover:text-sunshine-main transition-colors">關於我們</a>
          </div>

          <button 
            className="md:hidden p-2 text-gray-600"
            onClick={toggleMenu}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t p-4 absolute top-full left-0 right-0 shadow-lg animate-fade-in-down">
            <div className="flex flex-col gap-4 text-center font-medium py-4">
              <a href="#" className="text-sunshine-main" onClick={toggleMenu}>首頁</a>
              <a href="#recommendations" className="text-gray-600" onClick={toggleMenu}>今日推薦</a>
              <a href="#about" className="text-gray-600" onClick={toggleMenu}>關於我們</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Banner */}
      <header className="relative h-[600px] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/sunshine/1920/1080" 
            className="w-full h-full object-cover filter brightness-75 scale-105"
            alt="Hero Background"
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl animate-fade-in">
          <span className="bg-sunshine-secondary text-amber-900 px-4 py-1 rounded-full text-sm font-bold mb-4 inline-block">DAILY RECOMMENDATION</span>
          <h1 className="text-4xl md:text-6xl font-black mb-6 drop-shadow-lg tracking-tight">
            陽光精選，照亮您的質感生活
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-2xl mx-auto drop-shadow-md">
            每日為您從全網嚴選最高性價比、最具質感的日常好物，讓購物不僅是滿足需求，更是一場美好的發現。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#recommendations" className="bg-sunshine-main hover:bg-amber-600 text-white px-8 py-3 rounded-full font-bold transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
              立即探索
            </a>
            <a href="#about" className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white border border-white/40 px-8 py-3 rounded-full font-bold transition-all">
              了解我們
            </a>
          </div>
        </div>
      </header>

      {/* Categories Grid */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">商品分類</h2>
          <div className="w-16 h-1 bg-sunshine-main mx-auto"></div>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-9 gap-4 md:gap-6">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`flex flex-col items-center justify-center p-4 rounded-2xl transition-all ${
                selectedCategory === cat.id 
                ? 'bg-sunshine-main text-white shadow-lg scale-105' 
                : 'bg-white text-gray-600 hover:bg-amber-50 hover:text-sunshine-main shadow-sm'
              }`}
            >
              <span className="text-3xl mb-2">{cat.icon}</span>
              <span className="text-sm font-bold">{cat.name}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Featured Recommendations */}
      <section id="recommendations" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">今日推薦</h2>
              <p className="text-gray-500">編輯精選 9 款今日最值得入手的熱門商品</p>
            </div>
            
            {/* Search Box */}
            <div className="w-full md:w-96 relative">
              <input 
                type="text" 
                placeholder="搜尋感興趣的好物..." 
                className="w-full pl-10 pr-4 py-3 bg-amber-50 border-none rounded-xl focus:ring-2 focus:ring-sunshine-main transition-all outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <svg className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-gray-400">
              <div className="text-5xl mb-4">🔍</div>
              <p>找不到相關商品，換個關鍵字試試看吧！</p>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-amber-50 py-20 border-y border-amber-100">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center p-6">
            <div className="text-4xl mb-4">✨</div>
            <h3 className="font-bold text-xl mb-2">嚴格篩選</h3>
            <p className="text-gray-500 text-sm">每一件商品都經過編輯部親自測試與好評篩選。</p>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="font-bold text-xl mb-2">價格優勢</h3>
            <p className="text-gray-500 text-sm">即時監控各平台價格，為您鎖定歷史最低價區間。</p>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl mb-4">📅</div>
            <h3 className="font-bold text-xl mb-2">每日更新</h3>
            <p className="text-gray-500 text-sm">同步全網最新優惠資訊，不錯過任何一場限時特賣。</p>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="font-bold text-xl mb-2">多元來源</h3>
            <p className="text-gray-500 text-sm">整合各大知名電商平台，提供最完整的購物選擇。</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">關於陽光精選</h2>
          <div className="prose prose-lg text-gray-600 mx-auto">
            <p className="mb-6 leading-relaxed">
              「陽光精選好物推薦」是一個專注於提升生活品質的導購平台。我們相信，好的產品不一定昂貴，而是在正確的時機出現在正確的人面前。
            </p>
            <p className="mb-6 leading-relaxed">
              我們的團隊每日穿梭於各大購物平台，為您過濾掉多餘的雜訊，僅保留最真實的評價與最具價值的推薦。無論是 3C 家電、居家生活，還是流行穿搭，我們都秉持著「推薦給好友」的心態在經營每一份清單。
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-sunshine-main rounded-lg flex items-center justify-center text-white font-bold">陽</div>
              <span className="text-2xl font-bold">陽光精選好物推薦</span>
            </div>
            <p className="text-gray-400 max-w-md leading-relaxed">
              您的質感生活導航，致力於提供最透明、最準確的購物指南。
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold mb-6 text-sunshine-main">快速連結</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">平台首頁</a></li>
                <li><a href="#recommendations" className="hover:text-white transition-colors">今日熱門</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">服務宗旨</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-sunshine-main">平台資訊</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li>服務條款</li>
                <li>隱私政策</li>
                <li>© 2024 Sunshine Selection</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-gray-800 text-center text-gray-500 text-xs">
          本平台僅提供資訊導購服務，商品售後與物流服務由各合作電商平台提供。
        </div>
      </footer>
    </div>
  );
};

export default App;
