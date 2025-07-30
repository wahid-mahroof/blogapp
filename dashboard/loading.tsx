import React from "react";

const DashboardLoadingScreen = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-purple-500">
      <div className="text-center flex flex-col">{/* spinner*/}</div>
    </div>
  );
};

export default DashboardLoadingScreen;
