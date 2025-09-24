import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from "./ContactStyles.module.css";
import { motion } from "motion/react";


function Contact() {
  const [formData, setFormData] = useState({ 
    name: "", 
    email: "", 
    message: "" 
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const onSubmit = async(event) => {
         event.preventDefault();
    try {
        const formData = new FormData(event.target);
    
        formData.append("access_key", "d86839b4-c1ed-41fb-860f-7636b11afff8");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          toast.success('Thank you for your submission!')
          event.target.reset();
        } else {
          console.log("Error", data);
         toast.error(data.message)
        }
    } catch (error) {
        toast.error(error.message)
    }
    }

    // Client-side validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error("All fields are required");
      setIsLoading(false);
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      toast.error("Please enter a valid email address");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch("https://portfoliobackend-woad.vercel.app", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim()
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      if (data.success) {
        toast.success(data.message || "Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error(data.message || "Failed to send message");
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error(error.message || "Network error. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.section 
    
    initial={{opacity:0.2, y:50}}
    transition={{duration:1.5}}
    whileInView={{opacity:1, y:0}}
    viewport={{once:true}}

    id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form onSubmit={handleSubmit}>
        <div className="formGroup">
          <label htmlFor="name" hidden>Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            disabled={isLoading}
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            disabled={isLoading}
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>Message</label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            disabled={isLoading}
            required
          />
        </div>
        <button 
          type="submit" 
          className={`${styles.btn} ${isLoading ? styles.disabled : ""}`}
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <span className={styles.spinner} /> Sending...
            </>
          ) : (
            "Submit"
          )}
        </button>
      </form>
      
      {/* Toast container - should be rendered once in your app (usually in App.js) */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </motion.section>
  );
}

export default Contact;