import { useEffect } from "react";

import HeaderNav from "./HeaderNav";

function Contact() {
    useEffect(function () {
        document.title = "Contact";
    }, []);

    return (
        <>
            <HeaderNav />
            <section className="section">
                <h1 className="section-title">Contact Page</h1>
                <p className="section-desc">Ini kontak ku yang bisa kamu hubungi :</p>

                <ul className="list-contact">
                    <li className="contact-item">WA : 0813xxxxxxxx</li>
                    <li className="contact-item">Email : nugrahabanuajie@gmail.com</li>
                </ul>

                <p className="section-desc">Berikut adalah akun sosmed ku :</p>
                <ul className="list-sosmed">
                    <li className="sosmed-item">
                        <a href="https://www.facebook.com">Facebook</a>
                    </li>
                    <li className="sosmed-item">
                        <a href="https://www.instagram.com">Instagram</a>
                    </li>
                </ul>
            </section>
        </>
    );
}

export default Contact;
