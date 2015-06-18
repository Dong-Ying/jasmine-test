describe("Player", function() {
  var player;
  var song;

  beforeEach(function() {
    player = new Player();
    song = new Song();
  });

  it("should be able to play a Song", function() {
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'http://jasmine.github.io/2.3/src/introduction.js';
    script.onreadystatechange = function () {
      console.log("state change");
    };
    script.onload = function () {
      console.log("on load");
    };
    head.appendChild(script);



    player.play(song);
    expect(player.currentlyPlayingSong).toEqual(song);

    //demonstrates use of custom matcher
    expect(player).toBePlaying(song);
  });
});
