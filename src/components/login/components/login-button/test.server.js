const { expect } = require("chai");

test("rendering", async context => {
  const output = await context.renderAsync();
  expect(output.html).to.contain("login__submit");
});
