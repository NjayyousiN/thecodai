import AnimatedSection from "../animation";
import Input from "../input";
import TextArea from "../textarea";

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
            and let's create amazing solutions together.
          </p>
        </div>

        <div className="bg-foreground bg-opacity-10 backdrop-blur-md rounded-2xl p-8 border border-foreground border-opacity-20">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Input type="text" placeholder="First Name" />
            </div>
            <div>
              <Input type="text" placeholder="Last Name" />
            </div>
            <div className="md:col-span-2">
              <Input type="email" placeholder="Email" />
            </div>
            <div className="md:col-span-2">
              <TextArea placeholder="Your Message" rows={4} />
            </div>
            <div className="md:col-span-2 text-center">
              <button className="px-8 py-4 bg-caption text-foreground rounded-lg font-semibold text-lg hover:bg-opacity-90 shadow-lg hover:cursor-pointer">
                Send Message 🚀
              </button>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Contact;
