"use client"

import React, { useState, useEffect } from "react"

export default function NeutralNewsPage() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  // Con Universal Links, iOS maneja automáticamente la redirección
  // Si el usuario llega aquí, es porque no tiene la app instalada

  return (
    <main className={`min-h-screen font-mono relative transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-[#111111] text-[#EEEEEE]' 
        : 'bg-[#FAFAFA] text-[#333333]'
    }`}>
      {/* Theme Toggle Button */}
      <div 
        onClick={() => setIsDarkMode(!isDarkMode)}
        className={`fixed top-6 right-6 z-50 w-12 h-12 flex items-center justify-center rounded-xl transition-colors duration-300 backdrop-blur-sm cursor-pointer ${
          isDarkMode 
            ? 'bg-[#222222]/60 hover:bg-[#333333]/60 text-[#EEEEEE]' 
            : 'bg-gray-200/60 hover:bg-gray-300/60 text-[#333333]'
        }`}
        role="button"
        aria-label="Toggle theme"
      >
        <span className="text-xl select-none" style={{ userSelect: 'none', WebkitUserSelect: 'none' }}>{isDarkMode ? '☀️' : '🌙'}</span>
      </div>
      
      <div className="p-6 md:p-12">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <section className="text-center pb-16">
            <div className="flex justify-center mb-8">
              <img 
                src="/neutral-news-logo.png" 
                alt="Neutral News app icon"
                className="w-24 h-24 lg:w-32 lg:h-32 rounded-[22.37%] shadow-lg select-none"
                draggable={false}
                style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
              />
            </div>
            
            <h1 className={`text-4xl lg:text-6xl font-light uppercase tracking-wide mb-6 ${
              isDarkMode ? 'text-[#9DA3AE]' : 'text-gray-700'
            }`}>
              Neutral News
            </h1>
            
            <p className={`text-lg lg:text-xl mb-6 max-w-2xl mx-auto ${
              isDarkMode ? 'text-[#65727F]' : 'text-gray-600'
            }`}>
              Read unbiased news based on multiple sources
            </p>
            
            <div>
              <p className="text-orange-500 text-lg font-medium uppercase tracking-wide">
                · Soon in Beta ·
              </p>
            </div>
          </section>

          {/* App Screenshots */}
          <section className="pb-16">
            {/* Desktop: Side by side vertical screenshots */}
            <div className="hidden lg:flex justify-center items-start gap-8 max-w-7xl mx-auto px-4">
              <img 
                src="/neutral-news-screen-1.png" 
                alt="Neutral News main feed showing news articles"
                className="h-[600px] w-auto max-w-full object-contain drop-shadow-lg flex-shrink-0"
              />
              <img 
                src="/neutral-news-screen-2.png" 
                alt="Neutral News article analysis view"
                className="h-[600px] w-auto max-w-full object-contain drop-shadow-lg flex-shrink-0"
              />
              <img 
                src="/neutral-news-screen-3.png" 
                alt="Neutral News detailed article comparison"
                className="h-[600px] w-auto max-w-full object-contain drop-shadow-lg flex-shrink-0"
              />
            </div>

            {/* Tablet: 2 + 1 layout */}
            <div className="hidden md:block lg:hidden max-w-4xl mx-auto px-4">
              <div className="flex flex-wrap justify-center gap-6 mb-8">
                <img 
                  src="/neutral-news-screen-1.png" 
                  alt="Neutral News main feed"
                  className="h-[500px] w-auto max-w-full object-contain drop-shadow-lg flex-shrink-0"
                />
                <img 
                  src="/neutral-news-screen-2.png" 
                  alt="Neutral News article analysis"
                  className="h-[500px] w-auto max-w-full object-contain drop-shadow-lg flex-shrink-0"
                />
              </div>
              <div className="flex justify-center">
                <img 
                  src="/neutral-news-screen-3.png" 
                  alt="Neutral News comparison"
                  className="h-[500px] w-auto max-w-full object-contain drop-shadow-lg flex-shrink-0"
                />
              </div>
            </div>
            
            {/* Mobile: Single column */}
            <div className="md:hidden max-w-sm mx-auto px-4">
              <div className="space-y-8">
                <div className="text-center">
                  <img 
                    src="/neutral-news-screen-2.png" 
                    alt="Neutral News article analysis"
                    className="mx-auto h-[450px] w-auto max-w-full object-contain drop-shadow-lg"
                  />
                </div>
                <div className="flex flex-wrap justify-center gap-4">
                  <img 
                    src="/neutral-news-screen-1.png" 
                    alt="Neutral News main feed"
                    className="h-[350px] w-auto max-w-[45%] object-contain drop-shadow-lg flex-shrink-0"
                  />
                  <img 
                    src="/neutral-news-screen-3.png" 
                    alt="Neutral News comparison"
                    className="h-[350px] w-auto max-w-[45%] object-contain drop-shadow-lg flex-shrink-0"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className={`py-20 border-t ${
            isDarkMode ? 'border-[#333333]' : 'border-gray-200'
          }`}>
            <div className="text-center mb-16">
              <h2 className={`text-3xl lg:text-4xl font-light uppercase tracking-wide mb-4 ${
                isDarkMode ? 'text-[#9DA3AE]' : 'text-gray-700'
              }`}>
                Clear, Balanced, Insightful
              </h2>
              <p className={`max-w-2xl mx-auto ${
                isDarkMode ? 'text-[#65727F]' : 'text-gray-600'
              }`}>
                Our intelligent analysis engine processes news from multiple sources to give you a complete, unbiased perspective on current events.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
              <div className="text-center">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 ${
                  isDarkMode ? 'bg-[#222222]' : 'bg-gray-100'
                }`}>
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className={`text-xl font-light uppercase tracking-wide mb-4 ${
                  isDarkMode ? 'text-[#9DA3AE]' : 'text-gray-700'
                }`}>
                  Multi-Source Coverage
                </h3>
                <p className={`text-sm leading-relaxed ${
                  isDarkMode ? 'text-[#65727F]' : 'text-gray-600'
                }`}>
                  See how different media cover the same story — all in one place.
                </p>
              </div>

              <div className="text-center">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 ${
                  isDarkMode ? 'bg-[#222222]' : 'bg-gray-100'
                }`}>
                  <span className="text-2xl">⚖️</span>
                </div>
                <h3 className={`text-xl font-light uppercase tracking-wide mb-4 ${
                  isDarkMode ? 'text-[#9DA3AE]' : 'text-gray-700'
                }`}>
                  Spot the Bias
                </h3>
                <p className={`text-sm leading-relaxed ${
                  isDarkMode ? 'text-[#65727F]' : 'text-gray-600'
                }`}>
                  Discover potential bias with our clear, easy-to-understand neutral score.
                </p>
              </div>

              <div className="text-center">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 ${
                  isDarkMode ? 'bg-[#222222]' : 'bg-gray-100'
                }`}>
                  <span className="text-2xl">🧠</span>
                </div>
                <h3 className={`text-xl font-light uppercase tracking-wide mb-4 ${
                  isDarkMode ? 'text-[#9DA3AE]' : 'text-gray-700'
                }`}>
                  Understand more, faster
                </h3>
                <p className={`text-sm leading-relaxed ${
                  isDarkMode ? 'text-[#65727F]' : 'text-gray-600'
                }`}>
                  Get quick, neutral summaries that go straight to the point.
                </p>
              </div>
            </div>
          </section>

          {/* App Capabilities */}
          <section className={`py-20 border-t ${
            isDarkMode ? 'border-[#333333]' : 'border-gray-200'
          }`}>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className={`text-3xl lg:text-4xl font-light uppercase tracking-wide mb-6 ${
                  isDarkMode ? 'text-[#9DA3AE]' : 'text-gray-700'
                }`}>
                  Stay Informed,<br />Think Freely
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className={`w-8 h-8 rounded-[6px] flex items-center justify-center mt-1 ${
                      isDarkMode ? 'bg-[#222222]' : 'bg-gray-100'
                    }`}>
                      <span className="text-sm">🕒</span>
                    </div>
                    <div>
                      <h3 className={`font-light uppercase tracking-wide mb-2 ${
                        isDarkMode ? 'text-[#9DA3AE]' : 'text-gray-700'
                      }`}>Always up to date</h3>
                      <p className={`text-sm ${
                        isDarkMode ? 'text-[#65727F]' : 'text-gray-600'
                      }`}>Fresh news, every hour.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className={`w-8 h-8 rounded-[6px] flex items-center justify-center mt-1 ${
                      isDarkMode ? 'bg-[#222222]' : 'bg-gray-100'
                    }`}>
                      <span className="text-sm">🛡️</span>
                    </div>
                    <div>
                      <h3 className={`font-light uppercase tracking-wide mb-2 ${
                        isDarkMode ? 'text-[#9DA3AE]' : 'text-gray-700'
                      }`}>Privacy First</h3>
                      <p className={`text-sm ${
                        isDarkMode ? 'text-[#65727F]' : 'text-gray-600'
                      }`}>No tracking. No data collection.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className={`w-8 h-8 rounded-[6px] flex items-center justify-center mt-1 ${
                      isDarkMode ? 'bg-[#222222]' : 'bg-gray-100'
                    }`}>
                      <span className="text-sm">🌙</span>
                    </div>
                    <div>
                      <h3 className={`font-light uppercase tracking-wide mb-2 ${
                        isDarkMode ? 'text-[#9DA3AE]' : 'text-gray-700'
                      }`}>Dark Mode Ready</h3>
                      <p className={`text-sm ${
                        isDarkMode ? 'text-[#65727F]' : 'text-gray-600'
                      }`}>Comfortable reading, day or night.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <div className={`w-72 h-[480px] rounded-[3rem] border-4 flex items-center justify-center shadow-xl ${
                  isDarkMode 
                    ? 'bg-[#222222] border-[#333333]' 
                    : 'bg-gray-50 border-gray-200'
                }`}>
                  <div className={`text-center ${
                    isDarkMode ? 'text-[#65727F]' : 'text-gray-500'
                  }`}>
                    <div className="text-3xl mb-4">📱</div>
                    <p className="text-sm uppercase tracking-wide">Features Screenshot</p>
                    <p className="text-xs mt-2">Place app features<br />screenshot here</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Additional Features */}
          <section className={`py-20 border-t ${
            isDarkMode ? 'border-[#333333]' : 'border-gray-200'
          }`}>
            <div className="text-center mb-16">
              <h2 className={`text-3xl lg:text-4xl font-light uppercase tracking-wide mb-4 ${
                isDarkMode ? 'text-[#9DA3AE]' : 'text-gray-700'
              }`}>
                Future Features
              </h2>
            </div>

            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
                <div className={`text-center p-6 rounded-2xl border ${
                  isDarkMode 
                    ? 'bg-[#1A1A1A] border-[#333333]' 
                    : 'bg-gray-50 border-gray-200'
                }`}>
                  <div className="text-2xl mb-4">🖼️</div>
                  <h3 className={`font-light uppercase tracking-wide text-sm mb-2 ${
                    isDarkMode ? 'text-[#9DA3AE]' : 'text-gray-700'
                  }`}>
                    Widgets
                  </h3>
                  <p className={`text-xs ${
                    isDarkMode ? 'text-[#65727F]' : 'text-gray-600'
                  }`}>
                    Read the latest news right from your home screen
                  </p>
                </div>

                <div className={`text-center p-6 rounded-2xl border ${
                  isDarkMode 
                    ? 'bg-[#1A1A1A] border-[#333333]' 
                    : 'bg-gray-50 border-gray-200'
                }`}>
                  <div className="text-2xl mb-4">🌐</div>
                  <h3 className={`font-light uppercase tracking-wide text-sm mb-2 ${
                    isDarkMode ? 'text-[#9DA3AE]' : 'text-gray-700'
                  }`}>
                    Expanded Coverage
                  </h3>
                  <p className={`text-xs ${
                    isDarkMode ? 'text-[#65727F]' : 'text-gray-600'
                  }`}>
                    Get local news from relevant sources
                  </p>
                </div>

                <div className={`text-center p-6 rounded-2xl border ${
                  isDarkMode 
                    ? 'bg-[#1A1A1A] border-[#333333]' 
                    : 'bg-gray-50 border-gray-200'
                }`}>
                  <div className="text-2xl mb-4">🇺🇸</div>
                  <h3 className={`font-light uppercase tracking-wide text-sm mb-2 ${
                    isDarkMode ? 'text-[#9DA3AE]' : 'text-gray-700'
                  }`}>
                    Localization
                  </h3>
                  <p className={`text-xs ${
                    isDarkMode ? 'text-[#65727F]' : 'text-gray-600'
                  }`}>
                    Translations for different languages
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className={`py-20 text-center border-t ${
            isDarkMode ? 'border-[#333333]' : 'border-gray-200'
          }`}>
            <h2 className={`text-2xl lg:text-3xl font-light uppercase tracking-wide mb-6 ${
              isDarkMode ? 'text-[#9DA3AE]' : 'text-gray-700'
            }`}>
              Experience Neutral News
            </h2>
            <p className={`mb-8 max-w-xl mx-auto ${
              isDarkMode ? 'text-[#65727F]' : 'text-gray-600'
            }`}>
              Join the community of informed readers who choose balanced perspectives over biased narratives.
            </p>
            <div className={`inline-flex border rounded-2xl p-1 ${
              isDarkMode 
                ? 'bg-[#222222] border-[#333333]' 
                : 'bg-gray-50 border-gray-200'
            }`}>
              <button className={`px-8 py-4 rounded-xl text-sm uppercase tracking-wide transition-colors ${
                isDarkMode 
                  ? 'bg-[#111111] text-[#EEEEEE] hover:bg-[#333333]' 
                  : 'bg-[#F5F5F5] text-[#333333] hover:bg-gray-200'
              }`}>
                Get Early Access
              </button>
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className={`text-center py-6 text-xs uppercase border-t ${
        isDarkMode 
          ? 'text-[#65727F] border-[#333333]' 
          : 'text-gray-500 border-gray-200'
      }`}>
        neutral news · unbiased perspectives
      </footer>
    </main>
  )
}