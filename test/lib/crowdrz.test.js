'use strict';

const chai = require('chai');
const expect = chai.expect;

const Crowdrz = require('../../lib/crowdrz');

describe('Crowdrz Core', () => {
  it('should be init', () => {
    const node = new Crowdrz();
    expect(node).to.be.exist;
  });

  it('should add scope', () => {
    const node = new Crowdrz();
    expect(() => node.facebook).to.throw();
    node.addScope('facebook', '123');
    expect(node.facebook).to.be.exist;
  })
});