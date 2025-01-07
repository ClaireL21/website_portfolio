'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link'
import ExportedImage from "next-image-export-optimizer";
import art from '../data/art_data';

const ArtSection = () => {
    // State for modal
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Open modal with specific image
    const openModal = (index: number) => {
        setCurrentImageIndex(index);
        setIsModalOpen(true);
    };

    // Close modal
    const closeModal = () => setIsModalOpen(false);

    // Navigate to previous image
    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? art.length - 1 : prevIndex - 1
        );
    };

    // Navigate to next image
    const nextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === art.length - 1 ? 0 : prevIndex + 1
        );
    };

    // Prevent background scroll when modal is open
    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto'; // Clean up when modal is closed
        };
    }, [isModalOpen]);

    return (
        <section id="art">
            <h1 className="text-center font-bold text-3xl">
                Art
            </h1>
            <div className='custom-flex-center-span-height'>
                <div className="custom-art-grid">
                    {art.map((piece, idx) => {
                        return (
                            <div key={idx}>
                                <div className="flex flex-col animate-slideUpCubiBezier animation-delay-1">
                                    <div className="relative w-full h-[550px] overflow-hidden">
                                        <button
                                            className="absolute inset-0 w-full h-full"
                                            onClick={() => openModal(idx)}
                                        >
                                            <ExportedImage
                                                className="w-full h-full object-cover rounded-sm"
                                                src={piece.image}
                                                alt={piece.name}
                                            />
                                        </button>
                                    </div>
                                    <div className="text-left">
                                        <h1 className="custom-text-clickable-proj-heading">
                                            {piece.name}
                                        </h1>
                                        <p className="mb-2 italic"> 
                                            {piece.description}
                                        </p>
                                    </div>
                                </div>
                        </div>
                        ) 
                    })}
                </div>
            </div>
            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center z-50 overflow-auto">
                    

                    {/* Image */}
                    <div className="relative">
                        <div className="max-w-7xl justify-center">
                            <div className="custom-twocol-body p-20 flex flex-col md:flex-col lg:flex-row">
                                <div className={art[currentImageIndex].vertical ? "lg:w-3/5 mt-10" : "lg:w-4/5 mt-0"}>
                                    <ExportedImage
                                    className="w-full h-auto" // w-full h-auto 
                                    src={art[currentImageIndex].hrimage}
                                    alt={art[currentImageIndex].name}
                                    />
                                </div>
                                <div className={art[currentImageIndex].vertical ? "lg:w-2/5" : "lg:w-1/5"}>
                                    <div className="custom-subheading-2">
                                        {art[currentImageIndex].name}
                                    </div>
                                    <div className="italic">
                                        {art[currentImageIndex].description}
                                    </div>
                                    <br/>
                                    <div className="mt-2" style={{ whiteSpace: "pre-line" }}>
                                        {art[currentImageIndex].comments}
                                    </div>
                                </div>

                            </div>
                            
                        </div>
                    </div>

                    {/* Close button */}
                    <button
                        className="absolute top-5 right-5 text-4xl text-black z-60"
                        onClick={closeModal}
                    >
                        &times;
                    </button>

                    {/* Navigation Arrows */}
                    <button
                        className="absolute left-5 text-3xl text-black bg-white bg-opacity-70 p-2 rounded-full hover:bg-opacity-100"
                        onClick={prevImage}
                    >
                        &#8592;
                    </button>
                    <button
                        className="absolute right-5 text-3xl text-black bg-white bg-opacity-70 p-2 rounded-full hover:bg-opacity-100"
                        onClick={nextImage}
                    >
                        &#8594;
                    </button>
                </div>
            )}
        </section>
    )
}
export default ArtSection