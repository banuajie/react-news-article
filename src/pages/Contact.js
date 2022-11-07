import { useEffect } from "react";

function Contact() {
    useEffect(function () {
        document.title = "Contact";
    }, []);

    return (
        <section className="section">
            <h1 className="section-title">Contact Page</h1>
            <p className="section-desc">Ini kontak ku yang bisa kamu hubungi :</p>
            <ul className="section-list">
                <li>WA : 0813xxxxxxxx</li>
                <li>Email : nugrahabanuajie@gmail.com</li>
            </ul>
            <p className="section-desc">Berikut adalah akun sosmed ku :</p>
            <ul className="section-list">
                <li>
                    <a href="https://www.facebook.com">Facebook</a>
                </li>
                <li>
                    <a href="https://www.instagram.com">Instagram</a>
                </li>
            </ul>
        </section>
    );
}

export default Contact;
