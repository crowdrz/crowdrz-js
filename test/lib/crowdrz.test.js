'use strict';

const chai = require('chai');
const expect = chai.expect;

const Crowdrz = require('../../lib/crowdrz');

describe('Crowdrz Core', () => {
  it('should be init', () => {
    const node = new Crowdrz();
    expect(node).to.be.exist;
  });
});