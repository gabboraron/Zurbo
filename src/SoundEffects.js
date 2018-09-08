//http://www.superflashbros.net/as3sfxr/
// then press control c to copy settings

var SoundEffects_play;

var SoundEffects_init = function() {
  var arcadeAudio = new ArcadeAudio();

  SoundEffects_play = function(key) {
    arcadeAudio.play(key);
  };

  arcadeAudio.add('laser', 5,
    [
      //[1,,0.2923,0.2756,0.0352,0.6778,0.2,-0.2526,,,,,,0.0766,0.1339,,,,1,,,0.2094,,0.38],
      [0,,0.15,0.5099,0.2743,0.9399,0.2726,-0.36,0.0599,0.27,0.1299,0.14,0.4499,0.4699,-0.3199,,-0.0399,-0.4199,1,,,0.0599,0.0199,0.5]
    ]
  );

  arcadeAudio.add('start', 1,
    [
      [2,0.4045,0.2127,0.6091,0.5411,0.552,,-0.7327,0.0561,0.0021,,-0.5946,,0.2111,-0.9549,0.8694,0.0593,-0.6822,0.9964,-0.3453,0.4295,0.4381,,0.97]
    ]
  );

  arcadeAudio.add('jump', 2,
    [
      [0,,0.1756,,0.1978,0.339,,0.2471,,,,,,0.1883,,,,,0.8865,,,,,0.5]
    ]
  );

  arcadeAudio.add('damage', 5,
    [
      [3,,0.1426,0.3949,0.4827,0.1746,,-0.0503,,,,,,,,,,,1,,,,,0.38],
      [3,,0.2189,0.7895,0.1358,0.1205,,-0.2385,,,,,,,,,0.2261,-0.144,1,,,,,0.38],
      [3,,0.1728,0.4996,0.2668,0.0808,,0.1381,,,,,,,,,0.4345,-0.0425,1,,,,,0.38],
      [3,,0.3191,0.5696,0.3516,0.775,,-0.3272,,,,0.6291,0.7188,,,0.6283,,,1,,,,,0.38]
    ]
  );

  arcadeAudio.add('hit', 5,
    [
      [3,,0.01,,0.2457,0.6007,,-0.3863,,,,,,,,,,,1,,,,,0.5],
      [3,,0.096,,0.1501,0.3326,,-0.3845,,,,,,,,,,,1,,,,,0.5]
    ]
  );

  // arcadeAudio.add('monster-hit', 5,
  //   [
  //     [3,,0.356,0.76,0.47,0.1,,0.24,,0.85,0.66,,,,,,0.0291,-0.1671,1,,,,,0.79]
  //   ]
  // );






  // arcadeAudio.add('monster-die', 2,
  //   [
  //     //[3,,0.363,0.2436,0.2058,0.079,,0.0624,,,,0.8,0.74,,,,,,1,,,,,0.72]
  //     [3,0.1,0.42,0.4274,0.2192,0.1281,,-0.18,0.04,,,-0.14,,,,,-0.04,-0.1999,1,-0.0999,,,-0.0999,0.72]
  //   ]
  // );

  // arcadeAudio.add('player-die', 1,
  //   [
  //     [3,,0.1099,0.3199,1,0.23,,0.4,-0.34,,,-0.4799,0.9499,,0.0281,0.2099,-0.1199,-0.1599,0.9952,0.1272,0.37,,0.0736,0.86]
  //   ]
  // );

  // arcadeAudio.add('player-win', 1,
  //   [
  //     [0,,0.01,,1,0.23,,0.1599,-0.0399,0.8,0.5,-0.0199,,0.3899,-0.0199,,,,0.91,-0.0599,0.18,0.1099,,0.5699]
  //   ]
  // );
};


// 3,0.0014,0.3053,0.0138,0.8213,0.5,,-0.0108,,-0.4769,-0.7141,0.3471,0.8566,,-0.0046,0.4097,-0.0855,-0.0772,0.9907,,0.2409,,0.0277,0.5
// 0,0.2002,0.1916,0.32,0.0958,0.3736,,0.057,0.741,0.2579,0.9638,-0.7385,0.9617,-0.4299,-0.0826,0.5361,-0.0919,-0.2177,0.5072,-0.0033,0.4279,0.4097,,0.5
// 3,0.0081,0.3982,0.0226,0.7526,0.0289,,0.1378,0.1896,,-0.8011,-0.4009,,0.0523,0.4106,0.203,-0.0282,0.297,0.8297,-0.7879,0.0017,,-0.0003,0.5
// 3,0.2392,0.6816,0.1221,0.131,0.5,,0.0018,-0.1291,,-0.6143,-0.5646,0.7436,0.4014,0.1236,,-0.0484,-0.4453,0.7214,0.0425,0.7585,,0.021,0.5
// 3,0.2392,0.6816,0.1221,0.131,0.5,,0.0018,-0.1291,,-0.6143,-0.5646,0.7436,0.4014,0.1236,,-0.0484,-0.4453,0.7214,0.0425,0.7585,,0.021,0.5
// 0,,0.1613,,0.134,0.3722,,0.2683,,,,,,0.039,,,,,1,,,,,0.5
// 0,,0.1756,,0.1978,0.339,,0.2471,,,,,,0.1883,,,,,0.8865,,,,,0.5
