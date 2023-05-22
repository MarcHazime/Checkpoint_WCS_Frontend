import "./style.css";

import { gql, useQuery } from "@apollo/client";

import { useParams } from "react-router-dom";

const QUERY_DETAILS = gql`
  query Query($code: ID!) {
    country(code: $code) {
      code
      name
      currency
      capital
      emoji
    }
  }
`;

export default function Details() {
  const { code } = useParams<{ code: string }>();

  const { loading, error, data } = useQuery(QUERY_DETAILS, {
    variables: { code },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching continents: {error.message}</div>;
  }
  const details = data.country;

  return (
      <div>
        <h1>
          {details.name} {details.emoji}
        </h1>
        <h2>Capital : {details.capital}</h2>
        <h2>Monnaie : {details.currency}</h2>
    </div>
  );
}
