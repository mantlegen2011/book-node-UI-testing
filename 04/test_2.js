describe('some feature', function() {
  
  after(function runAfter() {
    console.log('running after function...');
  });

  it('should do A', function() {
    console.log('test A');
  });

  it('should do B', function() {
    console.log('test B');
  });
});