'use client';

export default function Footer() {
  return (
    <footer className="bg-white/60 backdrop-blur-sm border-t border-gray-200 py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-600">
          © {new Date().getFullYear()} Nguyen Anh Tu. All rights reserved.
        </p>
      </div>
    </footer>
  );
} 