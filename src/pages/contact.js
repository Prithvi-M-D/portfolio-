import React from "react";
import "./contact.css";
import Header from "../components/header";
import emailjs from "emailjs-com";
import BottomNav from "../components/bottom-nav";
export default function Contact() {
  // const [issuccess, setissuccess] = React.useState(false);
  const [name, setName] = React.useState('');
  const [mail, setMail] = React.useState('');
  const [message, setMessage] = React.useState('');

  function sendEmail(e) {
    const handleClear = () => {
      setName('');
      setMail('');
      setMessage('');
    }
    e.preventDefault();
    emailjs
      .sendForm(
        "service_3ixx1wz",
        "template_spvwych",
        e.target,
        "user_3bq5IMp39Ek0SBlUeovK7"
      )
      .then((res) => {
        setTimeout(() => {
          
          handleClear();
        }, [1000])
        alert("Thankyou for your message, Hope you have a great day:)")
      })
      .catch((err) => {
        console.log(err);
      });
      
  }
  return (
    <div>
      <Header />

      <div className="contact-wrap">
        <p
          style={{
            fontStyle: "italic",
            fontSize: "2rem",
            color: "rgb(6, 46, 83)",
          }}
        >
          Say hi!
        </p>
        <form onSubmit={sendEmail} className="">
          <div className="contact-wrap">
            <input
              placeholder="Your name"
              name="name"
              className="input-textbox"
              value={name}
              onChange={(e)=>setName(e.target.value)}
            />

            <input
              placeholder="Your email address"
              name="email"
              className="input-textbox"
              value={mail}
              onChange={(e)=>setMail(e.target.value)}
            />

            <input
              placeholder="Enter your message"
              name="message"
              value={message}
              className="input-textbox-sep"
              onChange={(e)=>setMessage(e.target.value)}
            />

            <button type="submit" className="btn-submit">
              Submit
            </button>
            
          </div>
        </form>
      </div>
      <BottomNav/>
    </div>
  );
}
