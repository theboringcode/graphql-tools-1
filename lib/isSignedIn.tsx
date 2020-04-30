import gql from "graphql-tag";

export default apolloClient =>
  apolloClient
    .query({
      query: gql`
        query me {
          me {
            id
          }
        }
      `
    })
    .then(({ data }: any) => {
      if (!data) return { me: {} };
      return { me: data.me };
    })
    .catch((e: any) => {
      return { me: {} };
    });
