import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/Contact.css";

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                setSubmitted(true);
                setTimeout(() => {
                    navigate("/");
                }, 3000);
            } else {
                console.error("Form submission failed");
            }
        };
        xhr.send(data);
    };

    return (
        <div className="contact-section">
            <div id="contact" className="section-title">Contactez-moi</div>
            {submitted ? (
                <div className="message-content">
                    <h1>Merci pour votre message!</h1>
                    <p>Je vous répondrai dans les meilleurs délais.</p>
                </div>
            ) : (
                <form
                    className="contact-form"
                    name="contact"
                    method="POST"
                    action="https://formspree.io/f/xvgzrkng"
                    onSubmit={handleSubmit}
                >
                    <p className="text-contact">
                        Besoin d'aide ou d'informations ? Contactez-moi facilement en utilisant le
                        formulaire ci-dessous. Je vous répondrai avec plaisir et dans les meilleurs
                        délais.
                    </p>

                    <p>
                        <label>
                            Nom : <input type="text" name="name" required />
                        </label>
                    </p>
                    <p>
                        <label>
                            Email : <input type="email" name="email" required />
                        </label>
                    </p>
                    <p>
                        <label>
                            Message : <textarea name="message" required></textarea>
                        </label>
                    </p>
                    <p>
                        <button type="submit">Envoyer</button>
                    </p>
                </form>
            )}
        </div>
    );
}
