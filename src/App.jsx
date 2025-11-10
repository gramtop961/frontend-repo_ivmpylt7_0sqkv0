import { useMemo, useState } from "react";
import Header from "./components/Header";
import AgeGate from "./components/AgeGate";
import VideoCard from "./components/VideoCard";
import Footer from "./components/Footer";
import VideoModal from "./components/VideoModal";

const videos = [
  {
    id: 1,
    title: "AI Landscapes – Dreamlike City Loop",
    duration: "3:24",
    category: "Art",
    thumbnail:
      "https://images.unsplash.com/photo-1496302662116-35cc4f36df92?q=80&w=1600&auto=format&fit=crop",
    src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
  },
  {
    id: 2,
    title: "Generative Neon – Abstract Particles",
    duration: "2:07",
    category: "Abstract",
    thumbnail:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1600&auto=format&fit=crop",
    src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm",
  },
  {
    id: 3,
    title: "Timelapse – Futuristic Skyline",
    duration: "4:12",
    category: "Cities",
    thumbnail:
      "https://images.unsplash.com/photo-1518306727298-4c17e1bf6948?q=80&w=1600&auto=format&fit=crop",
    src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
  },
  {
    id: 4,
    title: "AI Motion – Waves and Light",
    duration: "1:55",
    category: "Nature",
    thumbnail:
      "https://images.unsplash.com/photo-1519608425089-7f3bfa6f6bb8?q=80&w=1600&auto=format&fit=crop",
    src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
  },
  {
    id: 5,
    title: "AI Synth – Geometric Bloom",
    duration: "2:41",
    category: "Abstract",
    thumbnail:
      "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1600&auto=format&fit=crop",
    src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
  },
  {
    id: 6,
    title: "Aurora – Generative Fields",
    duration: "3:03",
    category: "Nature",
    thumbnail:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop",
    src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
  },
];

export default function App() {
  const [query, setQuery] = useState("");
  const [ageConfirmed, setAgeConfirmed] = useState(false);
  const [openId, setOpenId] = useState(null);

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return videos.filter(
      (v) => v.title.toLowerCase().includes(q) || v.category.toLowerCase().includes(q)
    );
  }, [query]);

  const active = openId ? videos.find((v) => v.id === openId) : null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900">
      {!ageConfirmed && <AgeGate onConfirm={() => setAgeConfirmed(true)} />}

      <Header query={query} setQuery={setQuery} />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <section className="mb-6">
          <h1 className="text-3xl font-semibold tracking-tight">Featured videos</h1>
          <p className="text-gray-600 mt-1">
            Curated, non-explicit AI visuals for demonstration purposes.
          </p>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((v) => (
            <VideoCard key={v.id} {...v} onPlay={() => setOpenId(v.id)} />)
          )}
          {filtered.length === 0 && (
            <div className="col-span-full text-center text-gray-600 py-16">
              No results. Try a different search.
            </div>
          )}
        </section>
      </main>

      <Footer />

      <VideoModal
        open={Boolean(active)}
        onClose={() => setOpenId(null)}
        title={active?.title}
        src={active?.src}
      />
    </div>
  );
}
