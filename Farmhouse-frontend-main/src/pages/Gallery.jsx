import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  { src: 'src/assets/Gallery1.jpeg', label: 'Farm House View' },
  { src: 'src/assets/Gallery2.jpeg', label: 'Farm House View' },
  { src: 'src/assets/Gallery3.jpeg', label: 'Dining View' },
  { src: 'src/assets/Gallery4.jpeg', label: 'Farm House View' },
  { src: 'src/assets/Gallery5.jpeg', label: 'Room View' },
  { src: 'src/assets/Gallery6.jpeg', label: 'Kitchen View' },
  { src: 'src/assets/home3.jpg', label: 'Indoor Games View' },
  { src: 'src/assets/Gallery8.jpeg', label: 'Swimming Pool View' },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  };

  useEffect(() => {
    if (selectedImage) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage, currentIndex]);

  return (
    <div className="min-h-screen bg-white px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-center text-green-900 mb-10 mt-15">
          Nirmal Farm Image Gallery
        </h2>

        {/* Image Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-20"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {images.map((img, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-xl shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer group"
              onClick={() => openModal(img, index)}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={img.src}
                alt={img.label}
                className="w-full h-60 object-cover group-hover:brightness-110 transition-all duration-300"
              />
              <div className="absolute bottom-3 right-3 bg-black/60 text-white text-sm px-2 py-1 rounded">
                {img.label}
              </div>
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-sm font-medium bg-black/50 px-3 py-1 rounded">
                  Click to view
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={closeModal}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="relative z-20"
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70"
                >
                  <X size={24} />
                </button>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70"
                >
                  <ChevronLeft size={32} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70"
                >
                  <ChevronRight size={32} />
                </button>
                <div className="max-w-4xl max-h-full flex flex-col items-center">
                  <motion.img
                    key={selectedImage.src}
                    src={selectedImage.src}
                    alt={selectedImage.label}
                    className="max-w-full max-h-[80vh] object-contain rounded-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="mt-4 text-center">
                    <h3 className="text-white text-xl font-semibold mb-2">
                      {selectedImage.label}
                    </h3>
                    <div className="text-gray-300 text-sm">
                      Image {currentIndex + 1} of {images.length}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Video Section */}
        <motion.section
          className="bg-green-50 py-16 px-6 md:px-20 rounded-xl shadow-inner mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <motion.div>
              <h2 className="text-4xl font-bold text-green-800 mb-4">Watch Our Introduction</h2>
              <p className="text-green-700 text-lg mb-4">
                Discover the beauty and tranquility of our farm house. Surrounded by lush greenery,
                soothing waters, and scenic views — it's the perfect escape into the heart of nature.
              </p>
              <p className="text-green-600">
                Whether you're looking for a peaceful getaway or an adventure-filled retreat, Nirmal Farm has something for everyone.
              </p>
            </motion.div>

            <motion.div>
              <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-xl border-4 border-green-200">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/t6tnxymC838"
                  title="Nature Resort Introduction"
                  frameBorder="0"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Brochure Section */}
        <section className="bg-emerald-50 py-16 px-6 mt-10 rounded-xl text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-emerald-900 mb-4">
              Discover Nature’s Comfort
            </h2>
            <p className="text-emerald-800 text-lg mb-6">
              Dive into the serenity of nature with our farm house. Download our brochure to explore sustainable nature-inspired stays, organic dining, and wellness experiences that reconnect you with the Earth.
            </p>

            <a
              href="https://drive.google.com/uc?export=download&id=1M4W6brA9ugc-R6L_3msCAoFFPdeQTEQl"
              className="inline-flex items-center gap-2 bg-emerald-600 text-white font-semibold px-6 py-3 rounded-2xl shadow-md hover:bg-emerald-700 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12v6m0 0l-3-3m3 3l3-3m-3-9v6"
                />
              </svg>
              Download Brochure
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
