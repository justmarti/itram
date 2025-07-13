"use client"

import React, { useState } from "react"

export default function NeutralNewsPage() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  return (
    <main className={`min-h-screen font-mono relative transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-[#111111] text-[#EEEEEE]' 
        : 'bg-[#FAFAFA] text-[#333333]'
    }`}>
      {/* Theme Toggle Button */}
      <button 
        onClick={() => setIsDarkMode(!isDarkMode)}
        className={`fixed top-6 right-6 z-50 w-12 h-12 flex items-center justify-center rounded-xl transition-colors duration-300 ${
          isDarkMode 
            ? 'bg-[#222222] hover:bg-[#333333] text-[#EEEEEE]' 
            : 'bg-gray-100 hover:bg-gray-200 text-[#333333]'
        }`}
        aria-label="Toggle theme"
      >
        <span className="text-xl">{isDarkMode ? '☀️' : '🌙'}</span>
      </button>
      
      <div className="p-6 md:p-12">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <section className="text-center py-20 lg:py-32">
            <div className="flex justify-center mb-8">
              <img 
                src="/neutral-news-logo.png" 
                alt="Neutral News app icon"
                className="w-24 h-24 lg:w-32 lg:h-32 rounded-[22.37%] shadow-lg"
              />
            </div>
            
            <h1 className={`text-4xl lg:text-6xl font-light uppercase tracking-wide mb-6 ${
              isDarkMode ? 'text-[#9DA3AE]' : 'text-gray-700'
            }`}>
              Neutral News
            </h1>
            
            <p className={`text-lg lg:text-xl mb-8 max-w-2xl mx-auto ${
              isDarkMode ? 'text-[#65727F]' : 'text-gray-600'
            }`}>
              Get unbiased news analysis based on multiple sources
            </p>
            
            <div className="mb-12">
              <p className="text-orange-500 text-lg font-medium uppercase tracking-wide">
                · Soon in Beta ·
              </p>
            </div>
          </section>

          {/* App Screenshots - Full Width */}
          <section className="relative w-screen left-1/2 transform -translate-x-1/2 h-[520px] -mt-40 mb-40">
            <img 
              src="/neutral-news-screen-1.png" 
              alt="Neutral News main feed showing news articles"
              className="absolute left-[10%] h-[650px] w-auto object-contain z-10"
              style={{ height: '650px !important', width: 'auto !important' }}
            />
            <img 
              src="/neutral-news-screen-2.png" 
              alt="Neutral News article analysis view"
              className="absolute left-1/2 transform -translate-x-1/2 h-[650px] w-auto object-contain z-20"
              style={{ height: '650px !important', width: 'auto !important' }}
            />
            <img 
              src="/neutral-news-screen-3.png" 
              alt="Neutral News detailed article comparison"
              className="absolute right-[10%] h-[650px] w-auto object-contain z-10"
              style={{ height: '650px !important', width: 'auto !important' }}
            />
          </section>

          <section className="py-0">
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
                  Multi-Source Analysis
                </h3>
                <p className={`text-sm leading-relaxed ${
                  isDarkMode ? 'text-[#65727F]' : 'text-gray-600'
                }`}>
                  Compare perspectives from different news sources to understand the complete story behind every headline.
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
                  Bias Detection
                </h3>
                <p className={`text-sm leading-relaxed ${
                  isDarkMode ? 'text-[#65727F]' : 'text-gray-600'
                }`}>
                  Advanced algorithms identify potential bias and present balanced viewpoints for informed decision-making.
                </p>
              </div>

              <div className="text-center">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 ${
                  isDarkMode ? 'bg-[#222222]' : 'bg-gray-100'
                }`}>
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className={`text-xl font-light uppercase tracking-wide mb-4 ${
                  isDarkMode ? 'text-[#9DA3AE]' : 'text-gray-700'
                }`}>
                  Smart Summaries
                </h3>
                <p className={`text-sm leading-relaxed ${
                  isDarkMode ? 'text-[#65727F]' : 'text-gray-600'
                }`}>
                  Get concise, fact-based summaries that highlight key information without editorial influence.
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
                  Stay Informed,<br />Stay Neutral
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center mt-1 ${
                      isDarkMode ? 'bg-[#222222]' : 'bg-gray-100'
                    }`}>
                      <span className="text-sm">🔍</span>
                    </div>
                    <div>
                      <h3 className={`font-light uppercase tracking-wide mb-2 ${
                        isDarkMode ? 'text-[#9DA3AE]' : 'text-gray-700'
                      }`}>Real-time Analysis</h3>
                      <p className={`text-sm ${
                        isDarkMode ? 'text-[#65727F]' : 'text-gray-600'
                      }`}>Instant processing of breaking news from trusted sources worldwide.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center mt-1 ${
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
                      }`}>Your reading habits stay private. No tracking, no data collection.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center mt-1 ${
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
                      }`}>Comfortable reading experience in any lighting condition.</p>
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
                Coming Soon
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