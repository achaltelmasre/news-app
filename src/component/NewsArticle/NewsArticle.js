import React from 'react'
import "./NewsArticle.css"

function NewsArticle({author, title, description, url, urlToImage, publishedAt, content}) {
    return(
        <div className='news-article-card' >
             <img src={urlToImage} alt="" className="news-article-img" />
             <h1 className='article-title'>{title}</h1>

             <div className="article-info">
                <p  className='article-author'>{author}</p>
                <p className="article-publish">{publishedAt}</p>
             </div>

             <p className='article-description'>{description}</p>
         </div>
    )
}

export default NewsArticle