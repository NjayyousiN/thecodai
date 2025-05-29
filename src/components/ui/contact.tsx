import AnimatedSection from "../animation";
import ContactUsForm from "../contact-us-form";

const Contact: React.FC = () => {
  return (
    <AnimatedSection id="contact-us" className="py-20 ">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-title mb-4">
            Ready to Transform Your Code?
          </h2>
          <p className="text-xl text-subtitle opacity-90">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Reach out
            and let{"'"}s create amazing solutions together.
          </p>
        </div>
        <div className="bg-foreground bg-opacity-10 backdrop-blur-md rounded-2xl p-8 border border-foreground border-opacity-20">
          <ContactUsForm />
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Contact;
