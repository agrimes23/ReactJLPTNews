import { gql } from '@apollo/client';

export const GET_KANJI = gql`
  query GetKanji($level: String!) {
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

export const REGISTER_USER = gql`
  mutation RegisterUser($input: UserInput!) {
    registerUser(input: $input) {
      user {
        id
        name
        email
      }
      token
    }
  }
`;

export const LOGIN_USER = gql`
  mutation LoginUser($input: LoginInput!) {
    loginUser(input: $input) {
      user{
        id
        name
        email
      }
      token
    }
  }
`;