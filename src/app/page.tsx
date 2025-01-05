import AboutSection from "../components/AboutSection"
import FeaturedSection from "../components/FeaturedSection"

export const metadata = {
  title: "About | Claire Lu"
}
export default function About() {
  return (
    <main className='py-0 mt-0'>
    <AboutSection/>
    <br/>
    <FeaturedSection/>
    </main>
  );
}