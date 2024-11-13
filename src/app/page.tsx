import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: "About | Claire Lu"
}
export default function Home() {
  return (
    <main>
    <AboutSection/>
    </main>
  );
}

const AboutSection = () => {
  return (
    <div>
      <section id="about">
        <h1 className="text-center font-bold text-3xl">
            About
        </h1>
        <div className="flex flex-col text-center items-center justify-center mt-10 my-0 px:10 lg:px-40 sm:py-10 md:flex-row md:space-x-10 md:text-left md:py-0">
          <div className="md:w-2/5">
            <Image className="" src="/headshot_rect_small.jpg" alt="" width={400} height={400}/>
          </div>
          <div className="md:w-1/2 md:mt-2">
            <h1 className="font-bold text-3xl mt-6">Hi, I'm Claire!</h1>
            <div className='mt-4 mb-6 mb-6 text-base'>
              <p>
                I'm a senior studying{" "}
                <a href="http://cg.cis.upenn.edu/dmd.html" className="font-semibold text-yellow-500 hover:text-yellow-600">
                    Digital Media Design (DMD)
                </a>
                , an interdisciplinary program between computer 
                science and visual arts, at the University of Pennsylvania. I'm passionate about 
                software engineering and computer graphics. {" "}
              </p>
              <br/>
              <p>
                Within computer graphics, I'm interested in {" "}
                <span className="font-bold">{"proceduralism"}</span>{" "}
                and{" "} 
                <span className="font-bold">{"non photorealistic rendering"}</span>
                {" "}techniques. Feel free to check out some of my projects where I explore these topics!
              </p>
              <br/>
              <p>
                I've previously interned as an iOS Software Engineer at {" "}
                <a href="https://www.linkedin.com/company/queenly/" className="font-semibold text-yellow-500 hover:text-yellow-600">
                  Queenly
                </a>
                , a marketplace startup for pageant and formalwear.
                I've also interned at {" "}
                <a href="https://www.linkedin.com/company/adobe/" className="font-semibold text-yellow-500 hover:text-yellow-600">
                  Adobe
                </a>
                {" "} as a software engineer, 
                developing internal tools on their Lightroom iOS Quality Engineering team.
              </p>
            </div>
          </div>
        </div>
      </section>
        {/* <Link
            href="/projects"
            className="font-semibold px-3 py-3 hover:-translate-y-2 hover:text-yellow-600"
            >
              Resume
            <hr className="w-8 h-1 mx-auto my-2 bg-yellow-500 border-0 rounded"></hr>
        </Link> */}
    </div>
  )
}
