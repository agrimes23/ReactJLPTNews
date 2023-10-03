import React, { useState, useEffect } from 'react';
import { getNews, search } from '../services/api';
import 'tailwindcss/tailwind.css';

interface Article {
  id: number;
  title: string;
  description: string;
}

interface Kanji {
  word: string;
}

//TODO: Make two functions??? One separating sentences into individual words and another comparing kanji???
// 1. bring in other vocab levels and do samething as n4 vocab in the backend
// 2. bring that information to the frontend
// 3. do the same loop through for each level and make them different colors based on level
// 4. style the home page
// 5. Can we get the full article?? research
// 6. make a "need to study vocab" page??? (full project, including backend)
// 7. build out flash cards so users can practice (full project, including backend)


const HomePage: React.FC = () => {
  const [kanjiList, setKanjiList] = useState<Kanji[]>([]);
  const [news, setNews] = useState<{ articles: Article[] }>({ articles: [] });

  const handleClickLevel = async (level: string) => {
  //   const searchKanji = await search(level);
  }

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

    
    // some are blank and will cause the site to crash, so this if statement is necessary to keep the site running
    if(wordsInDescription) {
      // loop through each word in description and compare
      wordsInDescription.forEach((word: any, index: number) => {
        // .some() will return a boolean, and compares if the conditions passes the test provided by the function (anonymous arrow function in this case)
        // this loops through the kanjiList array and checks if the kanji matches each word in the description
        // if it is true, it adds the text as bolded and red in the array
        if (kanjiList.some((kanji) => kanji === word)) {
          formattedDescription.push(
            <span key={index} className="text-green-500 font-bold" style={{ color: 'red' }}>
              {word}
            </span>
          );
      } else {
        // if it is false, it adds the text as it was (black text color) in the array
        formattedDescription.push(<React.Fragment key={index}>{word}</React.Fragment>);
      }
    });
  }
    // then it returns the array. Since they're all span or react fragments going into an jsx element array, they are all displayed inline
    return formattedDescription;
  };

  return (
    <div className="flex flex-col min-h-screen min-w-screen items-center my-10">
      
      {/* button container */}
      <div className="bg-blue-200 py-5 rounded">
        <button className="bg-blue-400 focus:bg-blue-300 focus:border-2 focus:border-black rounded px-5 py-2 mx-5 hover:scale-110">
          <h4>5 級</h4>
        </button>
        <button className="bg-green-400 focus:bg-green-300 focus:border-2 focus:border-black rounded px-5 py-2 mx-5 hover:scale-110">
          <h4>4 級</h4>
        </button>
        <button className="bg-yellow-400 focus:bg-yellow-300 focus:border-2 focus:border-black rounded px-5 py-2 mx-5 hover:scale-110">
          <h4>3 級</h4>
        </button>
        <button className="bg-orange-400 focus:bg-orange-300 focus:border-2 focus:border-black rounded px-5 py-2 mx-5 hover:scale-110">
          <h4>2 級</h4>
        </button>
        <button className="bg-red-400 focus:bg-red-300 focus:border-2 focus:border-black rounded px-5 py-2 mx-5 hover:scale-110">
          <h4>1 級</h4>
        </button>
      </div>

      {/* loop through each top headline title and description to display */}
      {news.articles.map((article, index) => (
        <div key={index} className="mt-20 w-3/4 max-w-3xl rounded px-16 py-10 bg-slate-200">
          <h4 className="text-xl font-bold">{article.title}</h4>
          {/* function to loop through kanjiList and each word in top headline description */}
          <p className="">{formatArticleDescription(article.description)}</p>
        </div>
      ))}
    </div>
  );
};

export default HomePage;