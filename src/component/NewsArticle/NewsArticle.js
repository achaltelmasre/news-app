import React from 'react'
import "./NewsArticle.css"

function NewsArticle({author, title, description, url, urlToImage, publishedAt, content}) {
    return(
        <div className='news-article-card' >
             <img src={urlToImage} alt="" className="news-article-img" />
             <h1 className='article-title'>{title}</h1>
             <div>
                <p  className='article-author'>{author}</p>
                <p >{publishedAt}</p>
             </div>
         </div>
    )
}

export default NewsArticle