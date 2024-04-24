import Footer from "./components/footer";
import InfoAktualDashboard from "./components/infoAktualDashboard";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <InfoAktualDashboard />
      <Footer />
    </main>
  );
}
