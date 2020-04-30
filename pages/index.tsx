import { useBooksQuery } from "../generated/graphql";
import { withApollo } from "../lib/withApollo";

const Home = withApollo(() => {
  const { data, loading, error } = useBooksQuery();
  if (loading) return <div>loading...</div>;
  if (error) return <div>error...</div>;
  if (!data || !data.books) return <div>no data...</div>;
  return (
    <div>
      <h2>Book list</h2>
      <ul>
        {data.books.map((book) => {
          return <li key={book.title}>{book.title}</li>;
        })}
      </ul>
    </div>
  );
});

export default Home;
