import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Blog() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(function () {
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
        <section className="section">
            <h1 className="section-title">Blog</h1>
            <p className="section-desc">Berikut adalah kumpulan artikel dari berbagai sumber :</p>

            {loading ? (
                <p>
                    <i>Loading Articles...</i>
                </p>
            ) : (
                <div>
                    {articles.map(function (article) {
                        return (
                            <div className="article-item">
                                <h1>
                                    <Link to={`/blog/${article.id}`} className="article-title">
                                        {article.title}
                                    </Link>
                                </h1>
                                <time className="section-time">
                                    <p>{new Date(article.publishedAt).toLocaleDateString()}</p>
                                </time>
                            </div>
                        );
                    })}
                </div>
            )}
        </section>
    );
}

export default Blog;
