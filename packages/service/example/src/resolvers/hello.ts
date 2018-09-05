export default {
  Query: {
    hello: (_, { name }) => `Hello, ${name || "world"}!`
  }
};
