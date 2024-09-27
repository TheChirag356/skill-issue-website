import React from "react";

export default function Blog() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col lg:flex-row-reverse justify-center p-10 gap-10 items-center">
        <div className="flex w-1/2 flex-col gap-4">
          <div className="skeleton h-32 w-full"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
        <div className="w-1/2">
          <h1 className="text-5xl font-bold">Coming Soon!</h1>
          <p className="py-6">
            We are working on creating a blog to share our thoughts and ideas
            with you. Stay tuned for more updates!
          </p>
          <button className="btn btn-primary">Go To Homepage</button>
        </div>
      </div>
    </div>
  );
}
