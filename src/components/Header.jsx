import { Search, Shield } from "lucide-react";

export default function Header({ query, setQuery }) {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-rose-500" />
          <div className="leading-tight">
            <p className="text-xl font-semibold tracking-tight">AIVids</p>
            <p className="text-xs text-gray-500 flex items-center gap-1">
              <Shield className="h-3.5 w-3.5" />
              Safe, compliant showcase
            </p>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search videos"
              className="pl-10 pr-3 py-2 w-64 rounded-md border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
