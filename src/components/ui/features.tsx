import AnimatedSection from "../animation";
import { FeatureCard } from "../cards";

const Features: React.FC = () => {
  return (
    <AnimatedSection id="features" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-title mb-6">
            Powerful Features
          </h2>
          <p className="text-xl text-subtitle max-w-3xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon="🚀"
            title="Lightning Fast"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            delay={0.1}
          />
          <FeatureCard
            icon="🧠"
            title="AI-Powered"
            description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            delay={0.2}
          />
          <FeatureCard
            icon="⚡"
            title="Real-time Analysis"
            description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            delay={0.3}
          />
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Features;
