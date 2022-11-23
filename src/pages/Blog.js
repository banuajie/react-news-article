import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import HeaderNav from "./HeaderNav";

function Blog() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(function () {
        setLoading(true);

        async function getArticles() {
            const requestData = await fetch("https://api.spaceflightnewsapi.net/v3/articles");
            const responseData = await requestData.json();

            setArticles(responseData);
            setLoading(false);

            document.title = "Blog";
        }
        getArticles();
    }, []);

    return (
        <>
            <HeaderNav />
            <section className="section">
                <h1 className="section-title">Blog</h1>
                <p className="section-desc">Berikut adalah kumpulan artikel berita dari berbagai sumber :</p>
                {loading ? (
                    <p>
                        <i>Loading Article...</i>
                    </p>
                ) : (
                    <div>
                        {articles.map(function (article) {
                            return (
                                <div className="article">
                                    <h1 key={article.id}>
                                        <Link to={`/blog/${article.id}`} className="article-title">
                                            {article.title}
                                        </Link>
                                    </h1>
                                    <time>
                                        <p className="article-time">{new Date(article.publishedAt).toLocaleDateString()}</p>
                                    </time>
                                </div>
                            );
                        })}
                    </div>
                )}
            </section>
        </>
    );
}

export default Blog;
