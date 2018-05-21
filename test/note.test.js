let chai = require('chai')
let chaiHttp = require('chai-http')
let server = require('../server')
let should = chai.should()
let expect = chai.expect

chai.use(chaiHttp)

describe('note/POST', function(){
  it('should post a note', function(){
    let note = {
    text: 'This is my first note'
    }
    chai.request(server)
    .post('/note')
    .send(note)
    .end(function(err, res) {
      res.should.have.status(200)
      expect(res.body.note.text).to.equal('This is my first note')
    })
  })
})

describe('note/GET', function(){
  it('should get all notes', function(){
    chai.request(server)
    .get('/note')
    .end(function(err, res) {
      expect(res.status).to.equal(200)
      res.body.should.be.a('array')
    })
  })
})
