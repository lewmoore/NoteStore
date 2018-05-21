let chai = require('chai')
let chaiHttp = require('chai-http')
let server = require('../server')
let should = chai.should()
let expect = chai.expect
let Note = require('../app/model/note')

chai.use(chaiHttp)

describe('note/POST', function(){
  it('should post a note', function(done){
    let note = {
    text: 'This is my first note'
    }
    chai.request(server)
    .post('/notes')
    .send(note)
    .end(function(err, res) {
      res.should.have.status(200)
      expect(res.body.note.text).to.equal('This is my first note')
      done()
    })
  })
})

describe('note/GET', function(){
  it('should get all notes', function(done){
    chai.request(server)
    .get('/notes')
    .end(function(err, res) {
      expect(res.status).to.equal(200)
      res.body.should.be.a('array')
      done()
    })
  })

  it('should get a single note', function(){
    let note = new Note({
      text: 'Yet another note..'
    })
    chai.request(server)
    .get('/notes/' + note.id)
    .send(note)
    .end(function(err, res) {
      res.should.have.status(200)
      expect(res.body._id).to.equal(note.id)
    })
  })
})
