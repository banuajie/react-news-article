import { useEffect } from "react";

import HeaderNav from "./HeaderNav";

function Profile() {
    useEffect(function () {
        document.title = "Profile";
    }, []);

    return (
        <>
            <HeaderNav />
            <section className="section">
                <h1 className="section-title">Profile Page</h1>
                <p className="section-desc">Halo Semua, nama Saya Nugraha Banuajie, Saya lulusan 2015 Universitas Komputer Indonesia jurusan Sistem Informasi, saya pernah bekerja sebagai :</p>
                <ol>
                    <li>QA</li>
                    <li>QA Automation</li>
                </ol>
                <p>Dan sekarang saya bekerja sebagai front-end web developer</p>
            </section>
        </>
    );
}

export default Profile;
