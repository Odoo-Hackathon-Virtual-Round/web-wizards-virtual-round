"use client"

import { useState, useEffect } from "react"
import { ArrowLeft, Heart, User, Calendar, Tag, Star, MessageCircle, Shield } from "lucide-react"
import { useNavigate, useParams } from "react-router-dom"

export default function ProductDetailPage() {
  const navigate = useNavigate()
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [relatedItems, setRelatedItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [liked, setLiked] = useState(false)

  // Static data for development
  const staticProduct = {
    id: 1,
    title: "Vintage Denim Jacket",
    description:
      "This classic blue denim jacket is in excellent condition and perfect for layering. It features a timeless design with button closure, chest pockets, and a comfortable fit. The jacket has been well-maintained and shows minimal signs of wear. Perfect for casual outings or adding a vintage touch to any outfit.",
    category: "Jackets",
    condition: "excellent",
    size: "M",
    points: 25,
    images: ["🧥", "👔", "🧥"], // In real app, these would be actual image URLs
    seller: {
      name: "fashionista_jane",
      rating: 4.8,
      totalSales: 23,
      joinDate: "March 2023",
    },
    datePosted: "2 days ago",
    exchangeType: "both",
    availability: "available",
    tags: ["vintage", "denim", "casual", "layering"],
    measurements: {
      chest: "42 inches",
      length: "24 inches",
      sleeves: "25 inches",
    },
  }

  const staticRelatedItems = [
    {
      id: 2,
      title: "Blue Denim Shirt",
      image: "👔",
      points: 20,
      condition: "good",
    },
    {
      id: 3,
      title: "Vintage Leather Jacket",
      image: "🧥",
      points: 35,
      condition: "excellent",
    },
    {
      id: 4,
      title: "Casual Blazer",
      image: "🧥",
      points: 30,
      condition: "good",
    },
    {
      id: 5,
      title: "Denim Vest",
      image: "👔",
      points: 18,
      condition: "fair",
    },
  ]

  useEffect(() => {
    // Simulate API call
    const loadProduct = () => {
      setTimeout(() => {
        setProduct(staticProduct)
        setRelatedItems(staticRelatedItems)
        setLoading(false)
      }, 1000)
    }
    loadProduct()
  }, [id])

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
          <p className="text-gray-600">Loading product details...</p>
        </div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">😕</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Product not found</h2>
          <button
            onClick={() => navigate("/browse")}
            className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Back to Browse
          </button>
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
              <a href="#" className="hover:opacity-80 transition-opacity">
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

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Section */}
          <div className="space-y-4">
            <div className="bg-white rounded-3xl shadow-xl p-8 h-96 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-indigo-50"></div>
              <div className="relative z-10 text-9xl">{product.images[0]}</div>
              <button
                onClick={() => setLiked(!liked)}
                className={`absolute top-6 right-6 p-3 rounded-full transition-all duration-300 ${
                  liked ? "bg-red-500 text-white" : "bg-white/80 text-gray-600 hover:bg-red-500 hover:text-white"
                }`}
              >
                <Heart className={`h-6 w-6 ${liked ? "fill-current" : ""}`} />
              </button>
            </div>

            {/* Additional Images */}
            <div className="grid grid-cols-3 gap-4">
              {product.images.slice(1).map((image, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg p-4 h-24 flex items-center justify-center cursor-pointer hover:shadow-xl transition-shadow"
                >
                  <div className="text-3xl">{image}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Product Info Section */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl shadow-xl p-8">
              {/* Title and Status */}
              <div className="flex justify-between items-start mb-4">
                <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getConditionColor(product.condition)}`}>
                  {product.condition}
                </span>
              </div>

              {/* Price and Exchange Type */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">{getExchangeTypeIcon(product.exchangeType)}</span>
                  {(product.exchangeType === "points" || product.exchangeType === "both") && (
                    <span className="text-2xl font-bold text-purple-600">{product.points} Points</span>
                  )}
                </div>
                <div className="flex items-center space-x-2">
                  <Tag className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-600">Size {product.size}</span>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Description</h3>
                <p className="text-gray-600 leading-relaxed">{product.description}</p>
              </div>

              {/* Tags */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Measurements */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Measurements</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {Object.entries(product.measurements).map(([key, value]) => (
                    <div key={key} className="bg-gray-50 rounded-lg p-3 text-center">
                      <div className="text-sm text-gray-600 capitalize">{key}</div>
                      <div className="font-semibold text-gray-800">{value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button className="flex-1 bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-4 px-6 rounded-2xl hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  {product.exchangeType === "swap"
                    ? "Request Swap"
                    : product.exchangeType === "points"
                      ? "Buy with Points"
                      : "Request Swap / Buy"}
                </button>
                <button className="bg-white border-2 border-purple-600 text-purple-600 py-4 px-6 rounded-2xl hover:bg-purple-50 transition-all duration-300 font-semibold flex items-center space-x-2">
                  <MessageCircle className="h-5 w-5" />
                  <span>Message</span>
                </button>
              </div>
            </div>

            {/* Seller Info */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Seller Information</h3>
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold">
                  {product.seller.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <div className="font-semibold text-gray-800">@{product.seller.name}</div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span>{product.seller.rating}</span>
                    <span>•</span>
                    <span>{product.seller.totalSales} sales</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>Joined {product.seller.joinDate}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Shield className="h-4 w-4" />
                  <span>Verified Seller</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Items */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Similar Items</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer overflow-hidden"
                onClick={() => navigate(`/product/${item.id}`)}
              >
                <div className="h-32 bg-gradient-to-br from-purple-100 to-indigo-100 flex items-center justify-center">
                  <div className="text-4xl">{item.image}</div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-purple-600">{item.points} pts</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getConditionColor(item.condition)}`}>
                      {item.condition}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
