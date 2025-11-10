import { Play } from "lucide-react";

export default function VideoCard({ title, thumbnail, duration, category, onPlay }) {
  return (
    <div className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition">
      <button
        type="button"
        onClick={onPlay}
        className="relative aspect-video overflow-hidden w-full"
        aria-label={`Play ${title}`}
      >
        <img
          src={thumbnail}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <span className="absolute bottom-2 right-2 text-xs px-2 py-1 rounded bg-black/70 text-white">
          {duration}
        </span>
        <span className="absolute top-2 left-2 text-xs px-2 py-1 rounded bg-white/80 text-gray-800 border border-gray-200">
          {category}
        </span>
        <span className="absolute inset-0 grid place-items-center opacity-0 group-hover:opacity-100 transition">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-gray-900 shadow">
            <Play className="h-4 w-4" />
            Play
          </span>
        </span>
      </button>
      <div className="p-3">
        <h3 className="font-medium leading-snug line-clamp-2">{title}</h3>
      </div>
    </div>
  );
}
