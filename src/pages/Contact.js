import "../pages/PagesCSS/Contact.css";
import contactPicture from "../images/P5127874.JPG";
import ContactStuff from "../components/ContactStuff";

const Contact = () => {
  return (
    <div>
      <div className="container">
        <div className="top-page">
          <div className="top-right">
            <img alt="" src={contactPicture} />
          </div>
          <div className="top-left">
            <h1>Jak mě můžete kontaktovat??</h1>
          </div>
        </div>

        <div className="contactStuff">
          <ContactStuff />
        </div>
      </div>
    </div>
  );
};

export default Contact;
