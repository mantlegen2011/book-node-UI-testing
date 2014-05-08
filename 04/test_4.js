describe('some feature', function() {
  function runBeforeEach(done) {
    console.log('running beforeEach function...');
    setTimeout(done, 1000);
  }

  beforeEach(runBeforeEach);

  it('should do A', function() {
    console.log('test A');
  });

  it('should do B', function() {
    console.log('test B');
  });
});