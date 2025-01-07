'use client'
import { useState, useEffect } from 'react';
import {
    AiOutlineClose,
    AiOutlineArrowLeft,
    AiOutlineArrowRight,
} from "react-icons/ai"
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
            <br/>
            <div className='custom-center'>
            <div className='max-w-xl px-4 pb-4 flex flex-col justify-center items-center text-center'>
                I love exploring emotions and desires through illustration, 
                especially by playing around with color, composition, and character interactions.
            </div>
            </div>
            
            <div className='max-w-7xl px-4 ml-auto mr-auto italic'>
                Click on an image to view the piece in full
            </div>
            <div className='custom-flex-center-span-height'>
                <div className="custom-art-grid lg:custom-art-grid md:custom-art-grid-2">
                    {art.map((piece, idx) => {
                        return (
                            <div key={idx}>
                                <div className="flex flex-col animate-slideUpCubiBezier animation-delay-1">
                                    <div className="relative w-[full] h-[550px] overflow-hidden group">
                                        <button
                                            className="absolute inset-0 w-full h-full"
                                            onClick={() => openModal(idx)}
                                        >
                                            <ExportedImage
                                                className="w-full h-full object-cover rounded-sm"
                                                src={piece.image}
                                                alt={piece.name}
                                            />
                                            {/* Overlay */}
                                            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 
                                                group-hover:opacity-100 transition-opacity duration-300 rounded-sm">
                                            </div>
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
                                <div className={art[currentImageIndex].vertical ? "lg:w-3/5 lg:max-h-screen py-4" : "lg:w-4/5"}>
                                    <ExportedImage
                                    className={art[currentImageIndex].vertical ? "h-full w-auto" : "w-full h-auto"}
                                    src={art[currentImageIndex].hrimage}
                                    alt={art[currentImageIndex].name}
                                    />
                                </div>
                                <div className={art[currentImageIndex].vertical ? "lg:w-2/5 lg:flex lg:flex-col lg:justify-center" : "lg:w-1/5"}>
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
                                    <br/>
                                    <div className="fixed bottom-5 right-5 text-dark_gray"> 
                                            {currentImageIndex + 1} / {art.length}
                                    </div>
                                </div>

                            </div>
                            
                        </div>
                    </div>

                    {/* Close button */}
                    <button
                        className="fixed top-5 right-5 text-4xl text-black z-60"
                        onClick={closeModal}
                    >
                        <AiOutlineClose/>
                    </button>

                    {/* Navigation Arrows */}
                    <button
                        className="fixed left-5 text-3xl text-black bg-white bg-opacity-70 p-2 rounded-full hover:bg-opacity-100"
                        onClick={prevImage}
                    >
                        <AiOutlineArrowLeft/>
                    </button>
                    <button
                        className="fixed right-5 text-3xl text-black bg-white bg-opacity-70 p-2 rounded-full hover:bg-opacity-100"
                        onClick={nextImage}
                    >
                        <AiOutlineArrowRight/>
                    </button>
                </div>
            )}
        </section>
    )
}
export default ArtSection