const chai = require("chai");
const expect = chai.expect;

const Crowdrz = require('../../lib/crowdrz');

describe("Crowdrz Core", () => {
  it("should be init", () => {
    const node = new Crowdrz('facebook', '123');
    expect(node.scope).to.be.equal('facebook');
    expect(node.key).to.be.equal('123');
  });

  it("should get processList", () => {
    const node = new Crowdrz('facebook', '123');
    const processList = node.getProcessList();
    expect(processList.facebook.getComments).to.be.exist;
  })
});