import { useEffect, useState } from "react";
import { useParams } from "react-router";

import HeaderNav from "./HeaderNav";

function BlogDetail() {
    const paramsId = useParams();
    const [article, setArticle] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(
        function () {
            async function getArticle() {
                setLoading(true);

                const requestData = await fetch(`https://api.spaceflightnewsapi.net/v3/articles/${paramsId.id}`);
                const responseData = await requestData.json();

                setArticle(responseData);
                setLoading(false);

                document.title = responseData.title;
            }
            getArticle();
        },
        [paramsId]
    );

    return (
        <>
            <HeaderNav />
            <section className="section">
                {loading ? (
                    <p>
                        <i>Loading Article...</i>
                    </p>
                ) : (
                    <div className="article-detail">
                        <h1 className="section-title">{article.title}</h1>
                        <time>
                            <p className="article-time">{new Date(article.publishedAt).toLocaleDateString()}</p>
                        </time>
                        <img className="article-image" src={article.imageUrl} alt={article.title} />
                        <p className="article-summary">{article.summary}</p>
                        <p className="article-source">
                            Source :{" "}
                            <a href={article.url} target="_blank" rel="noreferrer">
                                {article.newsSite}
                            </a>
                        </p>
                    </div>
                )}
            </section>
        </>
    );
}

export default BlogDetail;
