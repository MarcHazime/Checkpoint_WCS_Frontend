import "./style.css";

import { gql, useQuery } from "@apollo/client";

import { useParams } from "react-router-dom";

const QUERY_PAYS = gql`
  query Query($code: ID!) {
      continent(code: $code) {
        code
        name
        countries {
          code
          name
          emoji
        }
      }
    }
`;

export default function Pays() {
  const { code } = useParams<{ code: string }>();

  const { loading, error, data } = useQuery(QUERY_PAYS, {
    variables: { code },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching continents: {error.message}</div>;
  }
  const pays = data.continent.countries;

  return (
    <div className="grid-container">
      {pays.map((country: any, index: number) => (
        <div key={index} className="grid-item">
          <a href={`/pays/${country.code}`}>{country.name}  {country.emoji}</a>
        </div>
      ))}
    </div>
  );
}
