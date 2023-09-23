import React, {useState, useEffect} from 'react';
import { getNews, search } from '../services/api'
import { AxiosPromise } from 'axios';


const HomePage = () => {
  const [kanjiList, setKanjiList] = useState<any>()
  const [news, setNews] = useState<any>()

  const fetchNews = async () => {
    const topNews = await getNews();
    const searchKanji = await search();
    setNews(topNews)
    setKanjiList(searchKanji)
    console.log("oohhh Kanji: " + JSON.stringify(kanjiList))
  }

  useEffect(() => {
    fetchNews()
  }, [])


  return (
    <div className="bg-purple-500 flex min-h-screen min-w-screen items-center mt-10">
      {news?.articles.map((article: any) => {


        return(
          <div key={article.id} className="mt-20 w-3/4">
            <h4 style={{color: "red"}}>{article.title}</h4>
            <p>{article.description}</p>
          </div>
        )
      })}
      
    </div>
  );
};

export default HomePage;