import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const BASE_QUERY = graphql`
  {
    allTest {
      nodes {
        message
      }
    }
  }
`;

const Home = () => {
  const data = useStaticQuery(BASE_QUERY);
  console.log(data.allTest.edges);
  return (
    <div
      style={{
        display: "flex",
        background: "rebeccapurple",
        color: "white",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        height: "500px",
        width: "500px"
      }}
    >
      {data && data.allTest.nodes.map(node => <h1>{node.message}</h1>)}
      <p>WE'RE DOING IT</p>
    </div>
  );
};

export default Home;
