import Header from "@/components/ui/header";
import Hero from "@/components/ui/hero";
import Features from "@/components/ui/features";
import Stats from "@/components/ui/stats";
import Contact from "@/components/ui/contact";
import Footer from "@/components/ui/footer";
import { Toaster } from "sonner";

const LandingPage: React.FC = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col gap-0 pt-20">
        {/* Hero Section */}
        <Hero />
        {/* Features Section */}
        <Features />
        {/* Stats Section */}
        <Stats />
        {/* Contact Section */}
        <Contact />
        {/* Footer */}
        <Footer />
        <Toaster expand={true} richColors />
      </main>
    </>
  );
};

export default LandingPage;
