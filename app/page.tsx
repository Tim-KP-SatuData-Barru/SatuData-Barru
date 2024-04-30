import Footer from "./components/footer";
import InfoAktualDashboard from "./components/infoAktualDashboard";
import Navbar from "./components/navbar";
import Statistik from "./components/statistik";
import Hero from "./components/hero"
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Statistik />
      <InfoAktualDashboard />
      <Footer />
    </main>
  );
}
