import AnimatedSection from "../animation";
import { StatCard } from "../cards";

const Stats: React.FC = () => {
  return (
    <AnimatedSection className="py-20 bg-caption">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-foreground mb-12">
          Trusted by Developers Worldwide
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <StatCard value="10K+" label="Active Users" />
          <StatCard value="500+" label="Companies" />
          <StatCard value="99.9%" label="Uptime" />
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Stats;
