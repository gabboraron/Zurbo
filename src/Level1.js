var A = 'A'; // axe guy
var M = 'M'; // monster
var B = 'B'; // boss

var Level1_grid = [
  // background
  [
  ],
  // middleground
  [
    [ ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 1, 1, 1, 1, 1, 1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,  ,  ,  ,  ,  ,  ,  ],
    [ ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 1, 1, 1, 1, 1, 1, 1, 1,  , 1, 1, 1, 1, 1, 1,  ,  , 5, 5, 5, 5,  , 5,  ,  , 5, 5,  ,  ,  ,  ,  , 5, 5,  ,  , 1, 5, 5, 5, 5, 5,  , 1, 1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,  ,  ,  ,  ,  ,  ,  ],
    [ ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 1, 1, 1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 1, 1, 1,  ,  ,  ,  ,  , 1,  , 1, 1,  , 1, 1, 1, 1, 1, 5, 5, 5, 5, 5, 5,  ,  , 5, 5,  , 5, 1, 1, 5, 5, 5, 5,  , 1, 5, 5, 5, 5, 5, 5, 1, 1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,  ,  ,  ,  ,  ,  ,  ],
    [ ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 1, 1, 1, 1, 1, 1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 1, 1,  ,  ,  ,  ,  ,  ,  ,  , 1, 1,  ,  ,  ,  , 1, 1, 1, 1, 1,  ,  , 1, 1, 1, 1, 1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1, 1, 5, 5, 5, 5, 5,  , 5, 5, 5, 5, 5, 5, 1, 1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 7, 7, 7, 7, 7, 7, 5, 5, 5, 5, 5, 5, 5, 5,  ,  , 5, 5, 5, 5, 5, 5, 7, 5, 5, 5, 5, 5, 5,  ,  ,  ,  ,  ,  ,  ],
    [ ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 1, 1,  ,  ,  , 1, 1, 1, 1, 1, 1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 1, 1,  ,  ,  ,  ,  ,  ,  ,  , 1, 1,  ,  ,  ,  , 1, 1, 1, 1, 1,  ,  ,  , 1, 1, 1, 1,  , 5, 5, 5,  ,  , 5, 5, 5, 5, 5, 5,  ,  , 5, 5, 5, 5, 5, 5, 5,  , 5, 5, 5, 5, 1, 1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 7, 7, 7, 7, 7, 7, 5, 5, 5, 5, 5, 5, 5,  ,  ,  , 5, 5, 5, 5, 5, 5, 7, 5, 5, 5, 5, 5, 5,  ,  ,  ,  ,  ,  ,  ],
    [ ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 1, 1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 1, 1,  ,  ,  ,  , 1, 1,  ,  ,  ,  ,  ,  ,  ,  , 1,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 5, 5,  ,  , 5,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ]
  ],                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
  // foreground                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
  [                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
    [0, 0, 0, 0, 0, 0, 0, 0, 0,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 4, 4, 4, 4, 4, 9, 9,10,10,10,10, 9, 9, 9, 9,10,10, 9, 9, 9, 9, 9,10,10, 9, 9,10,10,10,10,10, 9, 9,10,10,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 6,  , 6,  , 6,  , 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 6, 6, 6, 6, 6, 6, 6],
    [0, 0, 0, 0, 0, 0, 0, 0, 0,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 2, 3, 3, 3,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 4, 4,  ,  ,  ,  ,  ,  ,  ,  , 0, 4,  ,  ,  ,  ,  ,10,10,  ,  ,  ,  ,10,10, 9, 9,  ,  , 9,10,10,10,10,  ,  ,10, 9,  ,  ,  ,  ,  ,10,10,  ,  ,  ,  ,  ,  ,  ,  ,  , M,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , M,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 6, 6, 6, 6, 6, 6, 6],
    [0, 0, 0, 0, 0, 0, 0, 0, 0,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , A,  ,  ,  , 3, 3, 4,  ,  ,  ,  ,  ,  ,  , 2,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 3, 3,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 2, 2, 2, 2, 3,  , 4,  ,  , 2,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,10,10,  ,  ,10,  ,  ,  ,  ,  ,  ,  ,10,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 8,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 8,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6,  ,  ,  ,  ,  ,  ,  , 6, 6, 6,  ,  ,  , 6, 6, 6,  ,  , 6, 6, 6, 6, 6, 6, 6],
    [0, 0, 0, 0, 0, 0, 0, 0, 0,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 3, 3,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 2, 0, 2,  ,  ,  ,  , A,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 2, 0, 0, 0, 4,  ,  ,  ,  , 2, 0,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , M,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,10,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , M,  ,  ,  , 9,  ,  ,  ,  ,  ,  ,  ,  , M,  ,  ,  , 9,  ,  ,  , M,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 6, 6,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 6, 6, 6, 6, 6, 6, 6],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 2,  ,  ,  ,  ,  ,  ,  , 2, 2,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , A,  ,  ,  ,  , 0, 0, 0,  ,  ,  , 3, 3,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , A,  ,  ,  ,  , 0, 0, 0, 0,  ,  , A,  , 2, 0, 0, 2,  , A,  ,  , 8,  ,  ,  , 8, 8,  ,  ,  ,  ,  ,  , 8, 8,  ,  ,  ,  ,  ,  , M, 8,  ,  ,  ,  , M, 8,  ,  ,  , 8,  ,  ,  , 9,  ,  ,  , M,  ,  ,  ,  , 8,  ,  ,  , 9,  ,  ,  , 8,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 6, 6, 6,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , B,  ,  , 6, 6, 6, 6, 6, 6, 6],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 0, 0,  ,  ,  ,  ,  , 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  ,  , 2, 2,  ,  , 2, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 9, 8, 8, 8, 9, 9, 8, 8, 8, 8, 8, 8, 9, 9, 8, 8, 8,  , 8, 8, 8, 9, 8, 8, 8, 8, 8, 9,  ,  ,  , 9,  ,  ,  , 9,  ,  ,  , 8,  ,  ,  ,  , 9,  ,  ,  , 9,  ,  ,  , 9,  ,  ,  , 8, 8, 8, 8, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6]
  ]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
];                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        

var Level_width = Level1_grid[2][0].length * 100;

//console.log(Level_width);

//console.log('level width = ' + Level_width + 'px');

var Level1_renderBackground = function(x) {
  var starX;
  var starY;
  var radius;
  var opacity;
  var n;

  Canvas_clearTemp();
  // sky
  Canvas_tempContext.fillStyle = '#1f4379';
  Canvas_tempContext.fillRect(0, 0, Game_viewportWidth, Game_viewportHeight);

  // stars
  for (n=0; n<40; n++) {
    starX = Math.random() * Game_viewportWidth;
    starY = Math.random() * Game_viewportHeight;
    radius = Math.random() * 3;
    opacity = Math.random();
    Canvas_tempContext.save();
    Canvas_tempContext.beginPath();
    Canvas_tempContext.arc(starX, starY, radius, 0, Math.PI*2, false);
    Canvas_tempContext.fillStyle = 'white';
    Canvas_tempContext.globalAlpha = opacity;
    Canvas_tempContext.fill();
    Canvas_tempContext.restore();
  }

  // darker mountains
  var points = [91,494, 142,544, 199,513, 240,545, 338,453, 400, 460, 488,430, 577, 500, 696,490,  823,531, 872,490, 924,500, 1014,413, 1068,454, 1205,340, 1335,468, Game_viewportWidth-5,600];

  Canvas_tempContext.beginPath();
  Canvas_tempContext.moveTo(0, 550);

  for (n=0; n<points.length; n+=2) {
    Canvas_tempContext.lineTo(points[n], points[n+1] - 50);
  }

  Canvas_tempContext.lineTo(Game_viewportWidth, 550);
  Canvas_tempContext.lineTo(Game_viewportWidth, Game_viewportHeight);
  Canvas_tempContext.lineTo(0, Game_viewportHeight);
  Canvas_tempContext.closePath();
  Canvas_tempContext.fillStyle = '#0f2b55';
  Canvas_tempContext.fill();


  Canvas_pixelate(Canvas_tempCanvas, Canvas_tempContext, 3);

  

  Canvas_backgroundContext.drawImage(Canvas_tempCanvas, 0, 0, Game_viewportWidth, Game_viewportHeight, 0, 0, Game_viewportWidth, Game_viewportHeight);

};

var Level1_blocks = {
  // grass
  0: {
    index: 0,
    render: function() {
      // '#37660c'
      Level_renderParticleBlock(['#749f29', '#84a33b', '#718612', '#9fc236', '#2b4400', '#94a729', '#acd440'], 2);
    }
  },
  // dirt
  1: {
    index: 1,
    render: function() {
      Level_renderParticleBlock(['#593f28', '#3d220d', '#573b25', '#6b4f39', '#553923', '#3d210b'], 2);
    }
  },
  // grass with top
  2: {
    index: 2,
    render: function() {
      // '#47660c'
      Level_renderParticleBlock(['#749f29', '#84a33b', '#718612', '#9fc236', '#2b4400', '#94a729', '#acd440'], 2);
      Level_renderTopHighlight();
    }
  },
  // grass with top and bottom
  3: {
    index: 3,
    render: function() {
      // '#47660c'
      Level_renderParticleBlock(['#749f29', '#84a33b', '#718612', '#9fc236', '#2b4400', '#94a729', '#acd440'], 2);
      Level_renderTopHighlight();
      Level_renderBottomShadow();
    }
  },
  // grass with bottom
  4: {
    index: 4,
    render: function() {
      // '#47660c'
      Level_renderParticleBlock(['#749f29', '#84a33b', '#718612', '#9fc236', '#2b4400', '#94a729', '#acd440'], 2);
      Level_renderBottomShadow();
    }
  },
  // evil zone
  5: {
    index: 5,
    render: function() {
      Level_renderBrickBlock('#302d36', '#19171c', '#45414f');
    }
  },
  // mirror
  6: {
    index: 6,
    render: function() {
      // highlight border
      Canvas_blockSpriteContext.beginPath();
      Canvas_blockSpriteContext.fillStyle = '#e9f0f0';
      Canvas_blockSpriteContext.fillRect(0, 0, 100, 100);

      // dark border
      Canvas_blockSpriteContext.beginPath();
      Canvas_blockSpriteContext.moveTo(0, 100);
      Canvas_blockSpriteContext.lineTo(100, 0);
      Canvas_blockSpriteContext.lineTo(100, 100);
      Canvas_blockSpriteContext.fillStyle = '#8dc7d1';
      Canvas_blockSpriteContext.fill();

      var grd = Canvas_blockSpriteContext.createLinearGradient(20, 20, 60, 60);
      grd.addColorStop(0, '#cee1e0');
      grd.addColorStop(0.5, '#b2d4d7');
      grd.addColorStop(1, '#cae0df');

      Canvas_blockSpriteContext.fillStyle = grd;
      Canvas_blockSpriteContext.fillRect(20, 20, 60, 60);    
    },

  },
  // mirror bricks
  7: {
    index: 7,
    render: function() {
      Level_renderBrickBlock('#cee1e0', '#8dc7d1', '#e9f0f0');
    }
  },
  // stone top
  8: {
    index: 8,
    render: function() {
      Level_renderStones();
      Level_renderTopHighlight();
    }
  },
  // stone
  9: {
    index: 9,
    render: function() {
      Level_renderStones();
    }
  },
  // stone bottom
  10: {
    index: 10,
    render: function() {
      Level_renderStones();
      Level_renderBottomShadow();
    }
  }



  
};



