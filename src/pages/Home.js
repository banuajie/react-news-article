import { useEffect } from "react";

import HeaderNav from "./HeaderNav";

function Home() {
    useEffect(function () {
        document.title = "Home";
    }, []);

    return (
        <>
            <HeaderNav />
            <section className="section">
                <h1 className="section-title">Selamat Datang Di Websiteku</h1>
                <p className="section-desc">Halo Semua ini adalah website artikel berita yang saya buat menggunakan React JS.</p>
            </section>
        </>
    );
}

export default Home;
