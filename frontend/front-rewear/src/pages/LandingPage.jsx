import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  // Helper navigation functions
  const redirectToSignIn = () => navigate("/signin");
  const redirectToSignUp = () => navigate("/signup");
  const redirectToBrowse = () => navigate("/browse");
  const redirectToList = () => navigate("/list");

  return (
    <div className="min-h-screen font-inter text-gray-800 overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold flex items-center gap-2 before:content-['👕']">ReWear</div>
            <div className="flex-1 max-w-md mx-8">
              <input
                type="text"
                className="w-full px-4 py-2 rounded-full bg-white/20 text-white placeholder:text-white/70 focus:outline-none"
                placeholder="Search for clothes, brands, or users..."
              />
            </div>
            <div className="flex gap-4">
              <button 
                onClick={redirectToSignIn}
                className="px-4 py-2 rounded-full bg-white/20 text-white hover:-translate-y-0.5 transition-transform"
              >
                Sign In
              </button>
              <button 
                onClick={redirectToSignUp}
                className="px-4 py-2 rounded-full bg-white text-indigo-600 font-semibold hover:-translate-y-0.5 transition-transform"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 drop-shadow-lg">Give Your Clothes a Second Life</h1>
          <p className="text-xl mb-8 opacity-90">
            Join the sustainable fashion revolution. Trade, discover amazing pre-loved clothing.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button 
              onClick={redirectToBrowse} 
              className="px-8 py-3 rounded-full bg-white text-indigo-600 font-semibold hover:-translate-y-1 transition-all shadow-lg"
            >
              Browse Items
            </button>
            <button className="px-8 py-3 rounded-full bg-gradient-to-r from-pink-400 to-yellow-400 text-white font-semibold hover:-translate-y-1 transition-all shadow-lg">
              List an Item
            </button>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Collection Cards */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 transition-transform">
              <div className="h-48 bg-gradient-to-r from-purple-100 to-indigo-100 flex items-center justify-center text-4xl">
                👗
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Vintage Dresses</h3>
                <p className="text-gray-600">Discover timeless pieces</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 transition-transform">
              <div className="h-48 bg-gradient-to-r from-purple-100 to-indigo-100 flex items-center justify-center text-4xl">
                👔
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Professional Wear</h3>
                <p className="text-gray-600">Office-ready outfits</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 transition-transform">
              <div className="h-48 bg-gradient-to-r from-purple-100 to-indigo-100 flex items-center justify-center text-4xl">
                👟
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Casual Comfort</h3>
                <p className="text-gray-600">Everyday essentials</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 transition-transform">
              <div className="h-48 bg-gradient-to-r from-purple-100 to-indigo-100 flex items-center justify-center text-4xl">
                🧥
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Seasonal Styles</h3>
                <p className="text-gray-600">Weather-perfect pieces</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-2xl p-6 shadow-lg hover:-translate-y-2 transition-transform">
              <div className="text-4xl mb-4">👚</div>
              <h3 className="text-xl font-semibold mb-2">Women's Wear</h3>
              <p className="text-white/80">Dresses, tops, and more</p>
            </div>
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-2xl p-6 shadow-lg hover:-translate-y-2 transition-transform">
              <div className="text-4xl mb-4">👔</div>
              <h3 className="text-xl font-semibold mb-2">Men's Collection</h3>
              <p className="text-white/80">Shirts, pants, and accessories</p>
            </div>
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-2xl p-6 shadow-lg hover:-translate-y-2 transition-transform">
              <div className="text-4xl mb-4">👶</div>
              <h3 className="text-xl font-semibold mb-2">Kids' Corner</h3>
              <p className="text-white/80">Growing wardrobes made easy</p>
            </div>
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-2xl p-6 shadow-lg hover:-translate-y-2 transition-transform">
              <div className="text-4xl mb-4">👜</div>
              <h3 className="text-xl font-semibold mb-2">Accessories</h3>
              <p className="text-white/80">Bags, shoes, and jewelry</p>
            </div>
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-2xl p-6 shadow-lg hover:-translate-y-2 transition-transform">
              <div className="text-4xl mb-4">🏃</div>
              <h3 className="text-xl font-semibold mb-2">Sportswear</h3>
              <p className="text-white/80">Athletic and fitness gear</p>
            </div>
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-2xl p-6 shadow-lg hover:-translate-y-2 transition-transform">
              <div className="text-4xl mb-4">❄️</div>
              <h3 className="text-xl font-semibold mb-2">Seasonal</h3>
              <p className="text-white/80">Weather-specific clothing</p>
            </div>
          </div>
        </div>
      </section>

      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
            <div>
              <h4 className="text-xl font-semibold mb-4 text-purple-400">About ReWear</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">Our Mission</a></li>
                <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">How it Works</a></li>
                <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">Sustainability</a></li>
                <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">Community</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4 text-purple-400">Get Started</h4>
              <ul className="space-y-3">
                <li><button onClick={redirectToSignUp} className="text-gray-300 hover:text-purple-400 transition-colors">Sign Up</button></li>
                <li><button onClick={redirectToList} className="text-gray-300 hover:text-purple-400 transition-colors">List an Item</button></li>
                <li><button onClick={redirectToBrowse} className="text-gray-300 hover:text-purple-400 transition-colors">Browse Items</button></li>
                <li><a href="#" className="text-gray-300 hover:text-purple-400 transition-colors">How It Works</a></li>
              </ul>
            </div>
          </div>
          <div className="text-center text-gray-400 border-t border-gray-800 pt-8">
            &copy; 2025 ReWear. Making fashion sustainable, one trade at a time.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;