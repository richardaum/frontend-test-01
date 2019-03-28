const { expect } = require("chai");
const sinon = require('sinon');
const rewire = require('rewire');

const router = {};

test("rendering", context => {
  const output = context.render();
  expect(output.html).to.contain("login__submit");
});

test("click", context => {
  const output = context.render();
  output.component.els[0].click();
  expect(router.navigate.calledOnce).to.be.true;
});
