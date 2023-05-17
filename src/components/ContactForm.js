import "../components/ContactForm.css";

const ContactForm = () => {
  return (
    <div>
      <div className="text">
        <h1>Napište mi</h1>{" "}
      </div>
      <form action="https://formsubmit.co/pan.j.bonk@gmail.com" method="POST">
        <label for="name">Jméno a Příjmení</label>
        <input type="text" name="name" required />
        <label for="emailAdd">email</label>
        <input type="email" name="emailAdd" required />
        <label type="telph">Telefon</label>
        <input type="tel" name="telph" required />
        <label type="message">Zpráva</label>
        <textarea type="text" name="message"></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactForm;
