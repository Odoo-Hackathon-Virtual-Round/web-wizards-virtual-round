import React, { useState, useEffect } from "react";
import {
  User,
  Package,
  ShoppingBag,
  TrendingUp,
  Plus,
  Edit,
  Trash2,
  Star,
  Calendar,
  Tag,
} from "lucide-react";

const UserDashboard = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    points: 0,
    joinDate: "",
  });

  const [userListings, setUserListings] = useState([]);
  const [purchases, setPurchases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // API Base URL (commented for future use)
  // const API_BASE_URL = 'http://localhost:3080/public/api';

  // Static data for development
  const staticUserData = {
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    points: 145,
    joinDate: "March 2024",
  };

  const staticListings = [
    {
      id: 1,
      title: "Vintage Denim Jacket",
      category: "Jackets",
      price: 25,
      status: "active",
      image: "🧥",
      datePosted: "2 days ago",
    },
    {
      id: 2,
      title: "Designer Sneakers",
      category: "Footwear",
      price: 35,
      status: "active",
      image: "👟",
      datePosted: "5 days ago",
    },
    {
      id: 3,
      title: "Silk Scarf",
      category: "Accessories",
      price: 15,
      status: "sold",
      image: "🧣",
      datePosted: "1 week ago",
    },
    {
      id: 4,
      title: "Leather Handbag",
      category: "Bags",
      price: 40,
      status: "active",
      image: "👜",
      datePosted: "3 days ago",
    },
    {
      id: 5,
      title: "Wool Sweater",
      category: "Clothing",
      price: 20,
      status: "shipped",
      image: "🧶",
      datePosted: "1 week ago",
    },
  ];

  const staticPurchases = [
    {
      id: 1,
      title: "Casual Sneakers",
      seller: "Emma Davis",
      price: 20,
      status: "delivered",
      image: "👟",
      purchaseDate: "Dec 15, 2024",
    },
    {
      id: 2,
      title: "Winter Coat",
      seller: "Michael Chen",
      price: 45,
      status: "shipped",
      image: "🧥",
      purchaseDate: "Dec 10, 2024",
    },
    {
      id: 3,
      title: "Vintage Watch",
      seller: "Sarah Wilson",
      price: 60,
      status: "delivered",
      image: "⌚",
      purchaseDate: "Dec 5, 2024",
    },
    {
      id: 4,
      title: "Summer Dress",
      seller: "Lisa Park",
      price: 18,
      status: "delivered",
      image: "👗",
      purchaseDate: "Nov 28, 2024",
    },
  ];

  // Commented API functions for future backend integration
  /*
  // Fetch user data
  const fetchUserData = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/user/profile`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json'
        }
      });
      if (!response.ok) throw new Error('Failed to fetch user data');
      const userData = await response.json();
      setUser(userData);
    } catch (err) {
      setError(err.message);
    }
  };

  // Fetch user listings
  const fetchUserListings = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/user/listings`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json'
        }
      });
      if (!response.ok) throw new Error('Failed to fetch listings');
      const listingsData = await response.json();
      setUserListings(listingsData);
    } catch (err) {
      setError(err.message);
    }
  };

  // Fetch user purchases
  const fetchUserPurchases = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/user/purchases`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json'
        }
      });
      if (!response.ok) throw new Error('Failed to fetch purchases');
      const purchasesData = await response.json();
      setPurchases(purchasesData);
    } catch (err) {
      setError(err.message);
    }
  };
  */

  // Static data loading functions (replace with API calls when backend is ready)
  const loadStaticUserData = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        setUser(staticUserData);
        resolve();
      }, 500);
    });
  };

  const loadStaticListings = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        setUserListings(staticListings);
        resolve();
      }, 600);
    });
  };

  const loadStaticPurchases = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        setPurchases(staticPurchases);
        resolve();
      }, 700);
    });
  };

  // Load all data on component mount
  useEffect(() => {
    const loadDashboardData = async () => {
      setLoading(true);
      try {
        // Replace these with actual API calls when backend is ready
        await Promise.all([
          loadStaticUserData(),
          loadStaticListings(),
          loadStaticPurchases(),
        ]);

        /* 
        // Uncomment when backend is ready:
        await Promise.all([
          fetchUserData(),
          fetchUserListings(),
          fetchUserPurchases()
        ]);
        */
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadDashboardData();
  }, []);

  // Delete listing (static version)
  const deleteListing = async (listingId) => {
    try {
      // Static implementation - just remove from local state
      setUserListings(
        userListings.filter((listing) => listing.id !== listingId)
      );

      /* 
      // Uncomment when backend is ready:
      const response = await fetch(`${API_BASE_URL}/listings/${listingId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json'
        }
      });
      if (!response.ok) throw new Error('Failed to delete listing');
      
      // Remove from local state
      setUserListings(userListings.filter(listing => listing.id !== listingId));
      */
    } catch (err) {
      setError(err.message);
    }
  };

  const stats = [
    {
      icon: "💰",
      value: user.points || 0,
      label: "Current Points",
      color: "text-purple-600",
    },
    {
      icon: "📦",
      value: userListings.length,
      label: "Active Listings",
      color: "text-blue-600",
    },
    {
      icon: "🛍️",
      value: purchases.length,
      label: "Total Purchases",
      color: "text-green-600",
    },
    {
      icon: "📈",
      value: userListings.filter((item) => item.status === "sold").length,
      label: "Items Sold",
      color: "text-orange-600",
    },
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Something went wrong
          </h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800";
      case "sold":
        return "bg-gray-100 text-gray-800";
      case "shipped":
        return "bg-blue-100 text-blue-800";
      case "delivered":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white sticky top-0 z-50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">👕</span>
              <span className="text-xl font-bold">ReWear</span>
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

      {/* Dashboard Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">
                Welcome back, {user.name}!
              </h1>
            </div>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center space-x-2">
              <Plus className="w-5 h-5" />
              <span>Add New Item</span>
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-pink-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="text-3xl mb-4">{stat.icon}</div>
                  <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {/* My Listings */}
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center space-x-2">
                <Package className="w-6 h-6 text-purple-600" />
                <span>My Listings</span>
              </h2>
              <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                View All
              </button>
            </div>

            <div className="space-y-4">
              {userListings.map((item) => (
                <div
                  key={item.id}
                  className="border-2 border-gray-100 rounded-2xl p-4 hover:border-purple-300 transition-all duration-300 hover:shadow-md"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center text-2xl">
                      {item.image}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600">{item.category}</p>
                      <div className="flex items-center space-x-4 mt-2">
                        <span className="text-purple-600 font-bold">
                          {item.price} Points
                        </span>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                            item.status
                          )}`}
                        >
                          {item.status}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500 mb-2">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{item.datePosted || "Recently"}</span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => deleteListing(item.id)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* My Purchases */}
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center space-x-2">
                <ShoppingBag className="w-6 h-6 text-green-600" />
                <span>My Purchases</span>
              </h2>
              <button className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                View All
              </button>
            </div>

            <div className="space-y-4">
              {purchases.map((purchase) => (
                <div
                  key={purchase.id}
                  className="border-2 border-gray-100 rounded-2xl p-4 hover:border-green-300 transition-all duration-300 hover:shadow-md"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-teal-100 rounded-2xl flex items-center justify-center text-2xl">
                      {purchase.image}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800">
                        {purchase.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        Seller: {purchase.seller}
                      </p>
                      <div className="flex items-center space-x-4 mt-2">
                        <span className="text-green-600 font-bold">
                          {purchase.price} Points
                        </span>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                            purchase.status
                          )}`}
                        >
                          {purchase.status}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-1 text-sm text-gray-500 mb-2">
                        <Calendar className="w-4 h-4" />
                        <span>{purchase.purchaseDate}</span>
                      </div>
                      <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
