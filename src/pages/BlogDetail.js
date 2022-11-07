import { useState, useEffect } from "react";
import { useParams } from "react-router";

function BlogDetail() {
    const paramsId = useParams();
    const [article, setArticle] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(
        function () {
            async function getArticle() {
                const requestData = await fetch(`https://api.spaceflightnewsapi.net/v3/articles/${paramsId.id}`);
                const responseData = await requestData.json();

                document.title = responseData.title;
                setArticle(responseData);
                setLoading(false);
            }
            getArticle();
        },
        [paramsId]
    );

    return (
        <section>
            <section className="section">
                {loading ? (
                    <p>
                        <i>Loading Article...</i>
                    </p>
                ) : (
                    <div>
                        <h1 className="section-title">{article.title}</h1>
                        <time>
                            <p className="section-time">{new Date(article.publishedAt).toLocaleDateString()}</p>
                        </time>
                        <img className="section-image" src={article.imageUrl} alt={article.title} />
                        <p className="section-summary">{article.summary}</p>
                        <p className="section-source">
                            Source :{" "}
                            <a href={article.url} target="_blank" rel="noreferrer">
                                {article.newsSite}
                            </a>
                        </p>
                    </div>
                )}
            </section>
        </section>
    );
}

export default BlogDetail;
