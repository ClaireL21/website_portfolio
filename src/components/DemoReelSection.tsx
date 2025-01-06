'use client'
import Link from 'next/link'

const DemoReelSection = () => {
  return (
    <div>
        <section id="demoreel">
            <div className="custom-subheading">
                Demo Reel
            </div>
            <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center md:flex-row md:text-left"> 
                <div className="md:w-4/5 w-full">
                    <div className="md:h-[600px] h-[300px]">
                        <iframe className="relative inset-0 w-full h-full pl-4 pt-4 pr-6" src="https://www.youtube.com/embed/Ica-MqUs8B4" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        ></iframe>
                    </div>
                </div>
                <div className="md:w-1/5 pt-4">
                    Check out {" "} 
                    <Link
                    href="/"
                    className="underline italic font-semibold hover:-translate-y-1 hover:custom-highlighted-text"
                    >
                    projects
                    </Link>
                    {" "} for more info
                </div>
            </div>
        </section>
    </div>
  )
}
// max-w-7xl mx-auto px-4 mt-4
// relative h-[600px] max-w-[1000px] mx-auto
export default DemoReelSection
