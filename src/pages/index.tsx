import React, { useState, useEffect } from 'react';
import { getNews, search } from '../services/api';

interface Article {
  id: number;
  title: string;
  description: string;
}

interface Kanji {
  word: string;
}

const HomePage: React.FC = () => {
  const [kanjiList, setKanjiList] = useState<Kanji[]>([]);
  const [news, setNews] = useState<{ articles: Article[] }>({ articles: [] });

  const fetchNews = async () => {
    try {
      const topNews = await getNews();
      const searchKanji = await search();
      setNews(topNews);
      setKanjiList(searchKanji);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const formatArticleDescription = (description: string) => {
    // ✅ wordsInDescription works!
    // wordsInDescription is an array of words from that description
    const wordsInDescription = description?.split(/(\p{Script=Hiragana}+|\p{Script=Katakana}+|[一-龯々]+)/u).filter(Boolean); // Split based on Japanese characters
    const formattedDescription: JSX.Element[] = [];

    

    if(wordsInDescription) {
    wordsInDescription.forEach((word: any, index: number) => {
      if (kanjiList.some((kanji) => kanji === word)) {
        formattedDescription.push(
          <span key={index} className="text-red-500 font-bold" style={{ color: 'red' }}>
            ***{word}***
          </span>
        );
      } else {
        formattedDescription.push(<React.Fragment key={index}>{word}</React.Fragment>);
      }
    });
  }

    return formattedDescription;
  };

  return (
    <div className="bg-purple-500 flex min-h-screen min-w-screen items-center mt-10">
      {news.articles.map((article, index) => (
        <div key={index} className="mt-20 w-3/4">
          <h4 style={{ color: 'green' }}>{article.title}</h4>
          <p className="text-yellow-600">{formatArticleDescription(article.description)}</p>
        </div>
      ))}
    </div>
  );
};

export default HomePage;