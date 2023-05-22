import "./style.css";

import { gql, useQuery } from "@apollo/client";

const QUERY_CONTINENTS = gql`
  query Query {
    continents {
      code
      name
      countries {
        code
        name
        native
        phone
        capital
        currency
        languages {
          code
          name
          native
          rtl
        }
        emoji
        emojiU
        states {
          code
          name
        }
      }
    }
  }
`;

export default function Continent() {
  const { loading, error, data } = useQuery(QUERY_CONTINENTS);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching continents: {error.message}</div>;
  }
  const continents = data.continents;

  return (
    <div className="grid-container">
      {continents.map((continent: any, index: number) => (
        <div key={index} className="grid-item">
          <a href={`/continent/${continent.code}`}>{continent.name}</a>
        </div>
      ))}
    </div>
  );
}
