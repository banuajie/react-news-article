import { useEffect } from "react";

function NotFound() {
    useEffect(function () {
        document.title = "Not Found";
    });

    return (
        <section className="section">
            <h1 className="section-title">404 Not Found : Halaman Tidak Tersedia :(</h1>
        </section>
    );
}

export default NotFound;
