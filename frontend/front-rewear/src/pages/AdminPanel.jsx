import React, { useState } from 'react';

const AdminPanel = () => {
  const [pendingItems, setPendingItems] = useState([
    {
      id: 1,
      title: "Vintage Floral Dress",
      user: "sarah_style",
      category: "Women's Wear",
      image: "👗",
      points: 15,
      date: "2024-12-10"
    },
    {
      id: 2,
      title: "Designer Sneakers",
      user: "mike_fresh",
      category: "Footwear",
      image: "👟",
      points: 20,
      date: "2024-12-10"
    },
    {
      id: 3,
      title: "Business Suit",
      user: "pro_wardrobe",
      category: "Men's Wear",
      image: "👔",
      points: 25,
      date: "2024-12-09"
    },
    {
      id: 4,
      title: "Winter Coat",
      user: "cozy_closet",
      category: "Outerwear",
      image: "🧥",
      points: 30,
      date: "2024-12-09"
    }
  ]);

  const [recentActivity] = useState([
    { type: "signup", user: "fashion_lover", time: "2 hours ago" },
    { type: "item_added", user: "vintage_vibes", item: "Retro Jacket", time: "3 hours ago" },
    { type: "swap_completed", user: "sustainable_sam", time: "5 hours ago" },
    { type: "signup", user: "eco_fashionista", time: "1 day ago" },
    { type: "item_added", user: "trendy_trader", item: "Summer Dress", time: "1 day ago" }
  ]);

  const handleApprove = (id) => {
    setPendingItems(pendingItems.filter(item => item.id !== id));
  };

  const handleReject = (id) => {
    setPendingItems(pendingItems.filter(item => item.id !== id));
  };

  const stats = {
    totalUsers: 1247,
    totalItems: 3892,
    pendingItems: pendingItems.length
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">👕</span>
              <h1 className="text-xl font-bold">ReWear Admin</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold">A</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-indigo-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Users</p>
                <p className="text-3xl font-bold text-indigo-600">{stats.totalUsers}</p>
              </div>
              <div className="text-3xl">👥</div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-green-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Items</p>
                <p className="text-3xl font-bold text-green-600">{stats.totalItems}</p>
              </div>
              <div className="text-3xl">👔</div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-orange-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pending Items</p>
                <p className="text-3xl font-bold text-orange-600">{stats.pendingItems}</p>
              </div>
              <div className="text-3xl">⏳</div>
            </div>
          </div>
        </div>

        {/* Pending Items - Full width */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100">
          <div className="px-6 py-4 border-b border-gray-100">
            <h2 className="text-xl font-bold text-gray-800 flex items-center">
              <span className="mr-2">📋</span>
              Pending Items ({pendingItems.length})
            </h2>
          </div>
          <div className="p-6">
            {pendingItems.length === 0 ? (
              <div className="text-center py-8">
                <div className="text-4xl mb-4">🎉</div>
                <p className="text-gray-600">No pending items to review!</p>
              </div>
            ) : (
              <div className="space-y-4">
                {pendingItems.map((item) => (
                  <div key={item.id} className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="text-3xl">{item.image}</div>
                        <div>
                          <h3 className="font-semibold text-gray-800">{item.title}</h3>
                          <p className="text-sm text-gray-600">by @{item.user}</p>
                          <div className="flex items-center space-x-4 mt-1">
                            <span className="text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full">
                              {item.category}
                            </span>
                            <span className="text-xs text-gray-500">{item.points} points</span>
                            <span className="text-xs text-gray-500">{item.date}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleApprove(item.id)}
                          className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-200 flex items-center space-x-1"
                        >
                          <span>✅</span>
                          <span className="text-sm font-medium">Approve</span>
                        </button>
                        <button
                          onClick={() => handleReject(item.id)}
                          className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-200 flex items-center space-x-1"
                        >
                          <span>❌</span>
                          <span className="text-sm font-medium">Reject</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;