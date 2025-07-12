"use client"

import { useState, useEffect } from "react"
import { Search, Heart, User, ArrowLeft } from "lucide-react"
import { useNavigate } from "react-router-dom"

export default function BrowsePage() {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedCondition, setSelectedCondition] = useState("all")
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  // Static data for development
  const staticItems = [
    {
      id: 1,
      title: "Vintage Denim Jacket",
      description: "Classic blue denim jacket in excellent condition. Perfect for layering.",
      category: "Jackets",
      condition: "excellent",
      size: "M",
      points: 25,
      image: "🧥",
      seller: "fashionista_jane",
      datePosted: "2 days ago",
      exchangeType: "both",
      liked: false,
    },
    {
      id: 2,
      title: "Designer Sneakers",
      description: "Barely worn designer sneakers, authentic and comfortable.",
      category: "Footwear",
      condition: "excellent",
      size: "9",
      points: 35,
      image: "👟",
      seller: "sneaker_head",
      datePosted: "1 day ago",
      exchangeType: "points",
      liked: true,
    },
    {
      id: 3,
      title: "Silk Evening Dress",
      description: "Elegant silk dress perfect for special occasions.",
      category: "Dresses",
      condition: "good",
      size: "S",
      points: 40,
      image: "👗",
      seller: "elegant_emma",
      datePosted: "3 days ago",
      exchangeType: "swap",
      liked: false,
    },
    {
      id: 4,
      title: "Leather Handbag",
      description: "Genuine leather handbag with multiple compartments.",
      category: "Accessories",
      condition: "good",
      size: "One Size",
      points: 30,
      image: "👜",
      seller: "bag_collector",
      datePosted: "1 week ago",
      exchangeType: "both",
      liked: false,
    },
    {
      id: 5,
      title: "Wool Winter Coat",
      description: "Warm wool coat perfect for cold weather.",
      category: "Outerwear",
      condition: "excellent",
      size: "L",
      points: 45,
      image: "🧥",
      seller: "winter_ready",
      datePosted: "5 days ago",
      exchangeType: "points",
      liked: true,
    },
    {
      id: 6,
      title: "Casual T-Shirt",
      description: "Comfortable cotton t-shirt in great condition.",
      category: "Tops",
      condition: "good",
      size: "M",
      points: 15,
      image: "👕",
      seller: "casual_chris",
      datePosted: "4 days ago",
      exchangeType: "swap",
      liked: false,
    },
  ]

  useEffect(() => {
    // Simulate API call
    const loadItems = () => {
      setTimeout(() => {
        setItems(staticItems)
        setLoading(false)
      }, 1000)
    }
    loadItems()
  }, [])

  const filteredItems = items.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || item.category.toLowerCase() === selectedCategory
    const matchesCondition = selectedCondition === "all" || item.condition === selectedCondition

    return matchesSearch && matchesCategory && matchesCondition
  })

  const toggleLike = (itemId) => {
    setItems(items.map((item) => (item.id === itemId ? { ...item, liked: !item.liked } : item)))
  }

  const getConditionColor = (condition) => {
    switch (condition) {
      case "excellent":
        return "bg-green-100 text-green-800"
      case "good":
        return "bg-blue-100 text-blue-800"
      case "fair":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getExchangeTypeIcon = (type) => {
    switch (type) {
      case "swap":
        return "🔄"
      case "points":
        return "⭐"
      case "both":
        return "🔄⭐"
      default:
        return "🔄"
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading items...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white sticky top-0 z-50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 hover:bg-white/20 rounded-lg px-3 py-2 transition-colors"
              >
                <ArrowLeft className="h-5 w-5" />
                <span>Back</span>
              </button>
              <div className="flex items-center space-x-2">
                <span className="text-2xl">👕</span>
                <span className="text-xl font-bold">ReWear</span>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="hover:opacity-80 transition-opacity">
                Dashboard
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity font-semibold">
                Browse
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                Sell
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                Messages
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Search and Filters */}
      <div className="bg-white shadow-lg border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search for clothes, brands, or styles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              />
            </div>

            {/* Filters */}
            <div className="flex gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all bg-white"
              >
                <option value="all">All Categories</option>
                <option value="tops">Tops</option>
                <option value="bottoms">Bottoms</option>
                <option value="dresses">Dresses</option>
                <option value="jackets">Jackets</option>
                <option value="footwear">Footwear</option>
                <option value="accessories">Accessories</option>
                <option value="outerwear">Outerwear</option>
              </select>

              <select
                value={selectedCondition}
                onChange={(e) => setSelectedCondition(e.target.value)}
                className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all bg-white"
              >
                <option value="all">All Conditions</option>
                <option value="excellent">Excellent</option>
                <option value="good">Good</option>
                <option value="fair">Fair</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Results Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Browse Items ({filteredItems.length} found)</h1>
        </div>
      </div>

      {/* Items Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        {filteredItems.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No items found</h3>
            <p className="text-gray-600">Try adjusting your search or filters</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer overflow-hidden group"
                onClick={() => navigate(`/product/${item.id}`)} // This line ensures navigation to product detail
              >
                {/* Image Section */}
                <div className="relative h-48 bg-gradient-to-br from-purple-100 to-indigo-100 flex items-center justify-center">
                  <div className="text-6xl group-hover:scale-110 transition-transform duration-300">{item.image}</div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleLike(item.id)
                    }}
                    className={`absolute top-4 right-4 p-2 rounded-full transition-all duration-300 ${
                      item.liked
                        ? "bg-red-500 text-white"
                        : "bg-white/80 text-gray-600 hover:bg-red-500 hover:text-white"
                    }`}
                  >
                    <Heart className={`h-4 w-4 ${item.liked ? "fill-current" : ""}`} />
                  </button>
                  <div className="absolute top-4 left-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getConditionColor(item.condition)}`}>
                      {item.condition}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-800 text-lg group-hover:text-purple-600 transition-colors">
                      {item.title}
                    </h3>
                    <span className="text-sm text-gray-500">Size {item.size}</span>
                  </div>

                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.description}</p>

                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">@{item.seller}</span>
                    </div>
                    <span className="text-xs text-gray-500">{item.datePosted}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg">{getExchangeTypeIcon(item.exchangeType)}</span>
                      {(item.exchangeType === "points" || item.exchangeType === "both") && (
                        <span className="font-bold text-purple-600">{item.points} pts</span>
                      )}
                    </div>
                    <button className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:from-purple-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
