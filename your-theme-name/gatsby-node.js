const fs = require("fs");

// Make sure the data directory exists
exports.onPreBootstrap = ({ reporter }) => {
  const contentPath = "data";

  if (!fs.existsSync(contentPath)) {
    reporter.info(`creating the ${contentPath} directory`);
    fs.mkdirSync(contentPath);
  }
};

exports.sourceNodes = ({ actions }) => {
  actions.createTypes(`
    type Test implements Node @dontInfer {
      id: ID!
      message: String!
    }
  `);
};

exports.createPages = ({ actions }) => {
  actions.createPage({
    path: "/",
    component: require.resolve("./src/components/home.js")
  });
};
