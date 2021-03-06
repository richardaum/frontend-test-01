const sinon = require("sinon");
const router = require("../../../../services/router");

describe("click", () => {
  before(() => {
    sinon.spy(router, "navigate");
  });
  after(() => {
    router.navigate.restore();
  });
  test("click should call router.navigate", context => {
    const output = context.render();
    output.component.getEl("login-button").click();
    sinon.assert.calledWith(router.navigate, "/trailers");
  });
});
