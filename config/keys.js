let user = "jake-dev";
let pass = "kbWEiMTrmPgvwNU7HhcjfrsE";

module.exports = {
  mongoURI: `mongodb+srv://${user}:${pass}@cluster0-1jbmp.mongodb.net/test?retryWrites=true&w=majority`,
  secretOrKey: "secret"
};
