import { createFileRoute } from "@tanstack/react-router";
import { Marquee } from "@/components/marquee";
import { CinematicHero } from "@/components/cinematic-hero";
import { TrailerScenes } from "@/components/trailer-scenes";
import { CinematicJourney } from "@/components/cinematic-journey";
import tencentLogo from "@/assets/logos/tencent.png";
import wyzmindzLogo from "@/assets/logos/wyzmindz.png";
import indianOilLogo from "@/assets/logos/indian-oil.png";
import techMahindraLogo from "@/assets/logos/tech-mahindra.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Abhishek Das — Operations Intelligence & Trust & Safety" },
      { name: "description", content: "Operations, fraud investigations, audit governance, and CX workflow systems by Abhishek Das." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <CinematicHero />
      <TrailerScenes />
      <CinematicJourney />
      <Marquee
        items={[
          { name: "Tencent", logo: tencentLogo },
          { name: "Wyzmindz", logo: wyzmindzLogo },
          { name: "Indian Oil", logo: indianOilLogo },
          { name: "Tech Mahindra", logo: techMahindraLogo },
        ]}
      />
    </>
  );
}
