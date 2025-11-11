export default function Footer() {
  return (
    <footer className="bg-gray-800 p-4 text-white mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Unfiltered Ventures. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          {/* Placeholder for social media links */}
          <a href="#" className="hover:text-gray-300">LinkedIn</a>
          <a href="#" className="hover:text-gray-300">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
