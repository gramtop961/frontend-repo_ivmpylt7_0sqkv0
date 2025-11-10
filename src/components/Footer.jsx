export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white/90">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 text-sm text-gray-600 grid gap-3 sm:flex sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} AIVids. All rights reserved.</p>
        <nav className="flex flex-wrap gap-4">
          <a href="#" className="hover:text-gray-900">Terms</a>
          <a href="#" className="hover:text-gray-900">Privacy</a>
          <a href="#" className="hover:text-gray-900">Content Policy</a>
          <a href="#" className="hover:text-gray-900">Contact</a>
        </nav>
      </div>
    </footer>
  );
}
