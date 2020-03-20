const { handler } = require("./bundle");

handler()
  .catch(console.error)
  .then(() => console.log("Success!"));
