import ContactForm from "../components/ContactForm";
import FooterTop from "../components/FooterTop";
import ContactUs from "../components/ContactUsTwo";

function Contact() {
  return (
    <div className="contact">
      <ContactUs
        heading="Get in Touch with Storm Machinery"
        description="Discover tailored engineering solutions for your needs."
        Email="stormmachinery@163.com"
        Address="Mingsheng Building, Jinan City, Shandong Province"
        Phone="+86 150 6612 2602"
      />
      <ContactForm heading={"PLEASE CONTACT US"} />
      <FooterTop />
    </div>
  );
}

export default Contact;
