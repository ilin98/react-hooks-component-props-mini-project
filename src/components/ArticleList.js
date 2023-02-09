import React from "react";
import Article from "./Article.js"

function ArticleList ({posts}) {
    const articleList = posts.map(post => <Article minutes={post.minutes} key={post.id} title={post.title} date={post.date} preview={post.preview}/>)
    return(
        <main>
            {articleList}
        </main>
    )
}

export default ArticleList;
