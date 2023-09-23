import React, {useState, useEffect} from 'react';
import { getNews } from '../services/api'
import { AxiosPromise } from 'axios';


const HomePage = () => {

  const [news, setNews] = useState<any>()

  const fetchNews = async () => {
    const topNews = await getNews();
    setNews(topNews)
    console.log("ooo this is news: " + JSON.stringify(topNews))

  }

  useEffect(() => {
    fetchNews()
  }, [])


  return (
    <div className="bg-purple-500 flex min-h-screen min-w-screen items-center mt-10">
      {news?.articles.map((article: any) => {

        return(
          <div key={article.id} className="mt-20 w-3/4">
            <h4 className="text-red-500">{article.title}</h4>
            <p>{article.description ? article.description : article.url}</p>
          </div>
        )
      })}
      
    </div>
  );
};

export default HomePage;