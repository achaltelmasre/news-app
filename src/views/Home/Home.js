import React, {useEffect, useState} from 'react'
import axios from "axios"
import NewsArticle from '../../component/NewsArticle/NewsArticle'
import "./Home.css"

function Home() {
    const [news, setNews] = useState([])

    const loadNews = async () =>{
       const response = await axios.get("https://newsapi.org/v2/everything?q=pune&from=2023-09-08&sortBy=popularity&apiKey=dd28cfa9cf73406dbe95670f718ca641");

       setNews(response.data.articles)
    }

    useEffect(() => {
      loadNews()
    }, [])

    return (
        <div>
            <h1>News App</h1>

            {
                news.map((newsArticle, index) =>{
                    const {author, title, description, url, urlToImage, publishedAt, content} = newsArticle;

                    return (
                       <NewsArticle 
                       urlToImage={urlToImage} 
                       title={title}
                       author={author}
                       />
                      
                    )
                })
            }

        </div>
    )
}

export default Home