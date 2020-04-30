import gql from "graphql-tag";

export const BOOKS_QUERY = gql`
  query books {
    books {
      title
      author
    }
  }
`;
