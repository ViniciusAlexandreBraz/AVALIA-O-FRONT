@function random-stars() {
    $result: '';
    @for $i from 1 through 100 {
      $result: $result + 
        (random(200) - 100) + 'vw ' + 
        (random(200) - 100) + 'vh ' +
        '1px 0.75px ' +
        rgba(
          (random(15) + 240),
          (random(15) + 240),
          (random(15) + 240),
          (random() + 0.5)
        );
      @if $i < 100 {
        $result: $result + ', ';
      }
    }
    
    @return unquote($result);
  }
  
  @function random-range($min, $max, $unit: '') {
    @return unquote($max - random($max - $min) + $unit);
  }
  
  $randomX: random-range(-40, 40, 'vw');
  $randomY: random-range(-40, 40, 'vh');
  
  @mixin star-field {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 3px;
    height: 3px;
    border-radius: 100%;
    transform-origin: $randomX $randomY;
    box-shadow: random-stars();
  }
  

div.starfield
  div.static
  div.moving-1
  div.moving-2
  div.moving-3

- 
  var words = [
    { pos: 23.755, text: 'Space:' },
    { pos: 25.267, text: 'the final' },
    { pos: 26.112, text: 'frontier.' },
    { pos: 28.433, text: 'These are' },
    { pos: 29.024, text: 'the voyages of' },
    { pos: 29.887, text: 'the starship' },
    { pos: 30.549, text: 'Enterprise.' },
    { pos: 32.386, text: 'Its continuing mission:'},
    { pos: 33.997, text: 'to explore' },
    { pos: 34.690, text: 'strange new' },
    { pos: 35.547, text: 'worlds,' },
    { pos: 37.628, text: 'to seek out' },
    { pos: 38.228, text: 'new life' },
    { pos: 38.954, text: 'and new civilizations,' },
    { pos: 42.001, text: 'to boldly go' },
    { pos: 43.251, text: 'where no one' },
    { pos: 44.072, text: 'has gone before.' }
  ]
each word, index in words
  div.word(style={top: (word.pos * 4 - 92) + 'vh', 'animation-delay': (word.pos - 23) + 's'})= word.text