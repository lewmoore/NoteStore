let chai = require('chai')
let chaiHttp = require('chai-http')
let server = require('../server')
let should = chai.should()
let expect = chai.expect

chai.use(chaiHttp)

describe('POST', function(){
  it('should post a note', function(){
    let note = {
    note: 'This is my first note'
    }
    chai.request(server)
    .post('/note')
    .send(note)
    .end(function(err, res) {
      res.should.have.status(200)
      expect(res.body.note).to.equal('This is my first note')
    })
  })
})
