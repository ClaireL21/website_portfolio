import AboutSection from "../../components/AboutSection"
import FeaturedSection from "../../components/FeaturedSection"
import DemoReelSection from "../../components/DemoReelSection"

export const metadata = {
  title: "About | Claire Lu"
}

export default function AboutPage() {
    return (
        <main>
        <AboutSection/>
        <br/>
        <FeaturedSection/>
        <br/>
        <DemoReelSection/>
        </main>
      );
}