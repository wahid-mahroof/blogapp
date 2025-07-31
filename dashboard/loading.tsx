import React from "react";

const DashboardLoadingScreen = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-purple-500">
      <div className="text-center flex flex-col items-center">
        {/* spinner*/}
        <div className="animate-spin rounded-full h-16 w-16 border-t--4 border-b-4 border-purple-500 dark:border-2"></div>
      </div>
    </div>
  );
};

export default DashboardLoadingScreen;
