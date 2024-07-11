import Navbar from "@/app/ui/navbar";
import Jumbotron from "@/app/ui/jumbotron";
import Footer from "@/app/ui/footer";
import Team from "../ui/team";
import Features from "../ui/features";
export default function Home() {
  return (
    <main>

      <Jumbotron />
      <Features/>
      <Team />
    </main>
  );
}
