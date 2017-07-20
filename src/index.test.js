var chai = require('chai');
var jsdom = require('jsdom');
var fs = require('fs');

describe('Our first test', function(){
    it('should pass', function(){
        chai.expect(true).to.equal(true);
    });
});



describe('index.html', function () {
    it('should say hello', function (done) {
        var index = fs.readFileSync('./src/index.html', "utf-8");
        jsdom.env(index, function (err, window) {
            var h1 = window.document.getElementsByTagName('h1')[0];
            chai.expect(h1.innerHTML).to.equal("Users");
            done();
            window.close();
        })
    })
})
