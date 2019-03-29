const sinon = require("sinon");
const router = require("../../../../services/router");
const cache = require("../../../../services/cache");

describe("click", () => {
  before(() => {
    sinon.spy(router, "navigate");
    sinon.spy(cache, "reset");
  });
  after(() => {
    router.navigate.restore();
    cache.reset.restore();
  });
  test("click should call router.navigate", context => {
    const output = context.render();
    output.component.getEl("0").click();
    sinon.assert.calledWith(router.navigate, "/");
    sinon.assert.called(cache.reset);
  });
});
