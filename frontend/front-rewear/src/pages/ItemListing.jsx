import React, { useState } from "react";
import { Upload, X, Camera, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ItemListingPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    size: "",
    category: "",
    condition: "",
    exchangeType: "",
    image: null,
  });

  const [imagePreview, setImagePreview] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        image: file,
      }));

      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setFormData((prev) => ({
      ...prev,
      image: null,
    }));
    setImagePreview(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const submissionData = {
      ...formData,
      pointValue: calculatedPoints,
    };
    console.log("Form submitted:", submissionData);
    // Handle form submission logic here
  };

  // Point calculation system - simplified for easy understanding
  const pointSystem = {
    category: {
      tops: 50,
      bottoms: 75,
      dresses: 100,
      accessories: 50,
    },
    condition: {
      excellent: 150, // 3x multiplier
      good: 100, // 2x multiplier
      fair: 50, // 1x multiplier
    },
  };

  // Calculate points automatically
  const calculatePoints = () => {
    if (!formData.category || !formData.condition) return 0;

    const basePoints = pointSystem.category[formData.category] || 0;
    const conditionMultiplier = pointSystem.condition[formData.condition] || 50;

    // Calculate: (base points * condition multiplier) / 50 to get clean values
    return Math.round((basePoints * conditionMultiplier) / 50);
  };

  const calculatedPoints = calculatePoints();
  const isPointsSelected =
    formData.exchangeType === "points" || formData.exchangeType === "both";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-500 via-purple-500 to-purple-600 text-white py-4 sticky top-0 z-50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 hover:bg-white/20 rounded-lg px-3 py-2 transition-colors"
              >
                <ArrowLeft className="h-5 w-5" />
                <span>Back</span>
              </button>
              <div className="flex items-center gap-2 text-2xl font-bold">
                <span>👕</span>
                <span>ReWear</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-300 to-orange-400 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                👤
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-500 via-purple-500 to-purple-600 text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-shadow-lg">
            List Your Item
          </h1>
          <p className="text-xl opacity-90 mb-8">
            Share your pre-loved clothing with the ReWear community
          </p>
        </div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-32 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-2000"></div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full -translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full translate-x-20 translate-y-20"></div>
          </div>

          <div className="relative z-10 space-y-8">
            {/* Image Upload */}
            <div className="space-y-3">
              <label className="block text-lg font-semibold text-gray-800 mb-3">
                Item Photo
              </label>
              <div className="mt-1">
                {!imagePreview ? (
                  <div className="group relative">
                    <div className="flex justify-center px-6 pt-8 pb-8 border-3 border-dashed border-gray-300 rounded-2xl hover:border-indigo-400 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-indigo-50 group-hover:to-purple-50">
                      <div className="space-y-2 text-center">
                        <div className="mx-auto h-16 w-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Camera className="h-8 w-8 text-white" />
                        </div>
                        <div className="flex text-lg text-gray-600">
                          <label className="relative cursor-pointer rounded-md font-semibold text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                            <span>Upload a photo</span>
                            <input
                              type="file"
                              accept="image/*"
                              onChange={handleImageUpload}
                              className="sr-only"
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-sm text-gray-500">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="relative group">
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="w-full h-80 object-cover rounded-2xl shadow-xl"
                    />
                    <button
                      type="button"
                      onClick={removeImage}
                      className="absolute top-4 right-4 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Form Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Item Title */}
              <div className="md:col-span-2">
                <label className="block text-lg font-semibold text-gray-800 mb-3">
                  Item Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="e.g., Vintage Denim Jacket"
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-lg"
                  required
                />
              </div>

              {/* Size */}
              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-3">
                  Size
                </label>
                <input
                  type="text"
                  name="size"
                  value={formData.size}
                  onChange={handleInputChange}
                  placeholder="e.g., M, L, XL, 32, 10"
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-lg"
                  required
                />
              </div>

              {/* Category */}
              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-3">
                  Category
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-lg appearance-none bg-white"
                  required
                >
                  <option value="">Select a category</option>
                  <option value="tops">👚 Tops</option>
                  <option value="bottoms">👖 Bottoms</option>
                  <option value="dresses">👗 Dresses</option>
                  <option value="accessories">👜 Accessories</option>
                </select>
              </div>

              {/* Condition */}
              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-3">
                  Condition
                </label>
                <select
                  name="condition"
                  value={formData.condition}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-lg appearance-none bg-white"
                  required
                >
                  <option value="">Select condition</option>
                  <option value="excellent">✨ Excellent</option>
                  <option value="good">👍 Good</option>
                  <option value="fair">👌 Fair</option>
                </select>
              </div>

              {/* Exchange Type */}
              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-3">
                  Exchange Type
                </label>
                <select
                  name="exchangeType"
                  value={formData.exchangeType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-lg appearance-none bg-white"
                  required
                >
                  <option value="">Select exchange type</option>
                  <option value="swap">🔄 Swap Only</option>
                  <option value="points">⭐ Points Only</option>
                  <option value="both">🔄⭐ Both Swap & Points</option>
                </select>
              </div>

              {/* Point Value Display */}
              {isPointsSelected && calculatedPoints > 0 && (
                <div className="md:col-span-2">
                  <label className="block text-lg font-semibold text-gray-800 mb-3">
                    Calculated Point Value
                  </label>
                  <div className="relative">
                    <div className="w-full px-4 py-4 border-2 border-green-200 bg-green-50 rounded-xl shadow-sm text-lg flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="text-2xl">⭐</div>
                        <div>
                          <div className="font-bold text-green-700 text-xl">
                            {calculatedPoints} Points
                          </div>
                          <div className="text-sm text-green-600">
                            Based on {formData.category} in {formData.condition}{" "}
                            condition
                          </div>
                        </div>
                      </div>
                      <div className="text-green-500 text-2xl">✨</div>
                    </div>
                  </div>
                  <div className="mt-2 text-sm text-gray-600">
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="font-semibold mb-1">
                        Point Calculation:
                      </div>
                      <div className="text-xs space-y-1">
                        <div>
                          • {formData.category}:{" "}
                          {pointSystem.category[formData.category]} base points
                        </div>
                        <div>
                          • {formData.condition} condition:{" "}
                          {pointSystem.condition[formData.condition]} quality
                          points
                        </div>
                        <div className="font-semibold">
                          • Total: ({pointSystem.category[formData.category]} ×{" "}
                          {pointSystem.condition[formData.condition]}) ÷ 50 ={" "}
                          {calculatedPoints} points
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-8">
              <button
                type="button"
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-purple-600 text-white py-4 px-6 rounded-2xl hover:from-indigo-600 hover:via-purple-600 hover:to-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-300 transition-all duration-300 font-semibold text-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 relative overflow-hidden group"
              >
                <span className="relative z-10">List Your Item</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
