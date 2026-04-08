import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { ReassuranceSection } from "@/components/reassurance-section";
import { ServicesSection } from "@/components/services-section";

export default function Home() {
  return (
    <div className="bg-white text-zinc-900">
      <Header />
      <main>
        <Hero />
        <ServicesSection />
        <AboutSection />
        <ReassuranceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
