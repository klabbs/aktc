import React from "react"

const AuthLoader = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="flex flex-col items-center gap-4">
        
        {/* Spinner */}
        <div className="w-14 h-14 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin" />

        {/* Brand */}
        <h1 className="text-2xl font-bold text-blue-600">
          AKTC PORTAL
        </h1>

        {/* Loading Text */}
        <p className="text-gray-500 text-sm">
          Initializing session...
        </p>
      </div>
    </div>
  )
}

export default AuthLoader