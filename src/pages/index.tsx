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
          // TODO: // 1. loop through articles
                // 2. Make function that:
                  // - loops through each word in the article
                  // - compares each article word to the words in the kanjiList array
                // 3. if it does equal, then return that word in a span with the color red
                    // - if it doesn't equal, return that word as normal black color


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