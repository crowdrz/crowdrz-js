'use strict'

const chai = require('chai')
const expect = chai.expect

const {Crowdrz} = require('../../lib/crowdrz')

describe('Crowdrz Core', () => {
  it('should be init', () => {
    const node = new Crowdrz('facebook', '123', '4.3')
    expect(node).to.be.exist
    expect(node.apiToken).to.eql('123')
    expect(node.apiVersion).to.eql('4.3')
    expect(node.provider).to.eql('facebook')
  })
})
