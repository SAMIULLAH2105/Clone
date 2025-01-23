import styles from "../styles/ContactUsTwo.module.css";


const handleClick = () => {
  const whatsappNumber = "923363653236"; // Your WhatsApp number
  const message = "Hello! I have a question."; // default message
  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
  window.open(url, "_blank");
};

function ContactUs({
  heading = { heading },
  description = { description },
  Email = { Email },

  Address = { Address },

  Phone = { Phone },
}) {
  return (
    <div className={styles.container}>
      <h2>{heading}</h2>
      <p>{description}</p>
      <div className={styles.contactInfo}>
        <div className={styles.contactItem}>
          <span className="material-icons">Email</span>
          <span>{Email}</span>
        </div>
        <div className={styles.contactItem}>
          <span className="material-icons">Address</span>
          <span>{Address}</span>
        </div>
        <div className={styles.contactItem} onClick={handleClick}>
          <span className="material-icons">Phone</span>
          <span>{Phone}</span>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
