import Footer from "./components/footer";
import InfoAktualDashboard from "./components/infoAktualDashboard";
import Navbar from "./components/navbar";
import Statistik from "./components/statistik";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Statistik />
      <InfoAktualDashboard />
      <Footer />
    </main>
  );
}
