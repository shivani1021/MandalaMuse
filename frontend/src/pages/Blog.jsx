import React, { useState } from "react";
// Assuming these paths are correct for your assets
import mandala1 from "../assets/images/img1.jpg";
import mandala2 from "../assets/images/img7.jpg";
import mandala3 from "../assets/images/img3.jpg";
import mandala4 from "../assets/images/img4.jpg";
import mandala5 from "../assets/images/img5.jpg";
import mandala6 from "../assets/images/img6.jpg";
import mandalaVideo from "../assets/videos/mandalaTutorial.mp4";

const tutorials = [
  {
    id: 1,
    title: "Mandala Basics",
    type: "image",
    src: mandala1,
    description: "To begin drawing a basic mandala, you must first establish your foundation. Start by locating the exact center of your paper and marking a small dot, known as the Bindu, which is the core from which everything originates. Next, use a ruler to draw light crosshairs—one vertical and one horizontal line passing through the Bindu—to ensure perfect symmetry in all four cardinal directions. Using a compass centered on the Bindu, draw several concentric circles of increasing size. These circles act as distinct rings or lanes for your upcoming patterns. For precise design placement, you should optionally use a protractor to mark and draw faint lines radiating outwards from the center, dividing the circle evenly (e.g., every 30 or 45 degrees). The actual design phase involves filling these rings with repetitive, symmetrical shapes. Start close to the center with a small, core motif, such as tiny petals or a star. Then, move outwards, using your radial guidelines to ensure that every element you place in one segment of a ring is perfectly replicated in all the other segments. The fundamental rule is repetition and balance. Once you have completed the design using light pencil guidelines, the final steps are to refine and finish by tracing over your desired lines with a darker pencil or pen, then carefully erasing all the unnecessary construction lines. The mandala is complete once the geometry stands clear, ready for coloring and contemplation."
  },
  {
    id: 2,
    title: "Advanced Patterns",
    type: "image",
    src: mandala2,
    description:" Advanced Mandala patterns take the fundamental principles of radial symmetry and the central point and elevate them through complex geometry, intricate layering, and sophisticated artistic techniques. These designs are often characterized by their hypnotic detail and profound sense of depth."
  },
  {
    id: 3,
    title: "Mandala Art on Fabric",
    type: "image",
    src: mandala3,
    description:"Mandala art, traditionally a spiritual and ritual symbol in Hinduism and Buddhism representing the universe, has found a vibrant new canvas: clothing. Applying this intricate, geometric art form to fabric transforms a simple garment into a piece of wearable tranquility and a statement of mindful style."
  },
  {
    id: 4,
    title: "Creative Mandala Design",
    type: "image",
    src: mandala4,
    description:"Creative Mandala design involves moving past traditional, strictly geometric rules to infuse the art form with personal expression, modern aesthetics, and unexpected elements. While the core principles of radial symmetry and a central point remain, creative designs allow for greater freedom in shape, color, and subject matter."
  },
  {
    id: 5,
    title: "Mandala Video Tutorial",
    type: "video",
    src: mandalaVideo,
    description:
      "Step-by-step video tutorial for creating Mandala art from scratch.",
  },
  {
    id: 6,
    title: "Final Touches",
    type: "image",
    src: mandala5,
    description: "For the final touches on Mirror Mandala Art, the process focuses on protection and enhancing reflection. First, apply a clear acrylic varnish (matte or gloss) over all the painted and textured surfaces to seal the color and protect the material from moisture, taking great care to avoid coating the actual mirrors. Next, inspect the piece for any rough edges, perfecting the clay or dot work around the mirrors for a crisp look. Crucially, gently clean the surface of every mirror with a soft cloth and cleaner to remove any paint residue, adhesive, or fingerprints, which maximizes the reflective shine. Finally, ensure the back of the piece is finished and that appropriate hanging hardware is securely attached, readying your dimensional, sparkling mandala for display",
  },
];

const Gallery = () => {
  const [selected, setSelected] = useState(null);

  const closeModal = (e) => {
    if (e.target.id === "modalBackdrop") {
      setSelected(null);
    }
  };

  return (
    <div className="min-h-screen bg-[rgb(160_82_45_/_var(--tw-bg-opacity))] py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-700">
      <h1 className="text-4xl font-bold text-center mb-12 text-black-100 animate-fadeIn">
        Mandala Art Tutorials
      </h1>

      {/* Grid of Tutorial Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {tutorials.map((tutorial) => (
          <div
            key={tutorial.id}
            className="cursor-pointer group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 hover:scale-[1.03] bg-white"
            onClick={() => setSelected(tutorial)}
          >
            <img
              src={tutorial.src}
              alt={tutorial.title}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-0 left-0 w-full p-4 bg-white bg-opacity-80 backdrop-blur-md">
              <h2 className="text-lg font-semibold text-gray-800">{tutorial.title}</h2>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Selected Tutorial */}
      {selected && (
        <div
          id="modalBackdrop"
          onClick={closeModal}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4"
        >
          <div className="bg-white rounded-3xl max-w-lg w-full mx-auto overflow-hidden shadow-2xl relative animate-slideUp">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-white bg-gray-800 hover:bg-gray-900 rounded-full w-8 h-8 flex items-center justify-center text-xl font-bold z-10 transition"
            >
              &times;
            </button>

            <div className="p-6 max-h-[80vh] overflow-y-auto">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">{selected.title}</h2>

              {selected.type === "image" ? (
                <img
                  src={selected.src}
                  alt={selected.title}
                  className="w-full h-auto rounded-2xl mb-4 shadow-md object-contain max-h-96 mx-auto"
                />
              ) : (
                <video
                  src={selected.src}
                  controls
                  className="w-full h-auto rounded-2xl mb-4 shadow-md max-h-96"
                />
              )}

              <p className="text-gray-700 mt-2">{selected.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* Animations */}
      <style>
        {`
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-in-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slideUp {
          animation: slideUp 0.5s ease-in-out;
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}
      </style>
    </div>
  );
};

export default Gallery;
