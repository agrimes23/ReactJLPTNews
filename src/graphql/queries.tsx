import { gql } from '@apollo/client';

export const GET_KANJI = gql`
  query GetKanji($level: Int!) {
    getKanji(level: $level) {
      word
    }
  }
`;

export const GET_ARTICLES = gql`
  query GetArticles {
    getArticles {
      status
      totalResults
      articles {
        source {
          id
          name
        }
        author
        title
        description
        url
        urlToImage
        publishedAt
        content
      }
    }
  }
`;