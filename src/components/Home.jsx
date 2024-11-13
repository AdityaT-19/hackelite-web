import Hero from "./Hero";
import Navbar from "./Navbar";
import { Vortex } from "./Vortex";

function Home() {
  return (
    <Vortex rangeY={800} particleCount={800} baseHue={120}>
      <Navbar />
      <Hero />
    </Vortex>
  );
}

export default Home;
