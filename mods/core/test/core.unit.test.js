const StoragePB = require('../src/server/protos/storage_pb')
const { mapToObj } = require('../src/common/utils')
const assert = require('assert')

describe('Core', () => {
  it('Convert grpc map to json obj', () => {
    const uor = new StoragePB.UploadObjectRequest()
    const t = mapToObj(uor.getMetadataMap())
    assert.equal(t.var, undefined)

    uor.getMetadataMap().set('var', 'foo')
    uor.getMetadataMap().set('var2', 'foo2')

    const c = mapToObj(uor.getMetadataMap())
    assert.equal(c.var, 'foo')
  })
})
