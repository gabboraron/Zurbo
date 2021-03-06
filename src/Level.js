var Level_grid;
var Level_blocks;
var Level_renderBackground;
var Level_levels = [];

var Level_birds = [];
var Level_birdWingFreq = 15;

var Level_init = function() {
  Level_grid = Level1_grid;
  Level_blocks = Level1_blocks;
  Level_renderBackground = Level1_renderBackground;
  Level_renderBackground();
  Level_renderBlocks();
};

var Level_resetBirds = function() {
  var xs = [-200, -250, -275, 0];
  var ys = [300, 350, 310, 200];
  Level_birds = [];
  for (var n=0; n<4; n++) {
    Level_birds.push({
      x: xs[n] + Zurbo_startX,
      y: ys[n],
      yVelocity: Math.random() * 10,
      wingScaleOffset: Math.random(), // seconds
      wingScale: (Math.random()-0.5)*2, // between -1 and 1
      speed: (Math.random() * 20) + 40
    });
  }
};

var Level_getPositionFromRowCol = function(row, col) {
  return {
    x: col * 100 + 50,
    y: row * 100 + 100
  };
};

var Level_update = function(timeDiff) {
  Level_updateBirds(timeDiff);
};

var Level_getBlockType = function(x, y, gridRow) {
  var col = Math.round((x-50) / 100);
  var row = Math.round((y-50) / 100);
  var blockIndex = Level_grid[gridRow][row] && Level_grid[gridRow][row][col];
  return blockIndex;
};

var Level_isBlock = function(x, y) {
  var blockIndex = Level_getBlockType(x, y, 2);
  return blockIndex !== undefined && Level_blocks[blockIndex];
};

var Level_getBlockLeft = function(x) {
  return x - (x % 100) - 1;
};

var Level_getBlockRight = function(x) {
  return x + 100 - (x % 100);
};

var Level_render = function() {
  // render distant ground, middleground, and foreground
  //Canvas_sceneContext.drawImage(Canvas_backgroundCanvas, Math.floor(-0.25 * (Zurbo_x - Game_viewportWidth/2)), 0);
  //Canvas_sceneContext.drawImage(Canvas_middlegroundCanvas, Math.floor(-1 * (Zurbo_x - Game_viewportWidth/2)), 0);
  //Canvas_sceneContext.drawImage(Canvas_foregroundCanvas, Math.floor(-1 * (Zurbo_x - Game_viewportWidth/2)), 0);

  
  var x =  -1 * Zurbo_x/4 - Game_viewportWidth;
  Canvas_sceneContext.save();
  Canvas_sceneContext.translate(x, 0);

  var numStamps = Math.ceil(((Level_width)/Game_viewportWidth)/4) + 1;

  for (var n=0; n<numStamps; n++) {
    Canvas_sceneContext.translate(Game_viewportWidth, 0);
    Canvas_sceneContext.drawImage(Canvas_backgroundCanvas, 0, 0, Game_viewportWidth, Game_viewportHeight, 0, 0, Game_viewportWidth+2, Game_viewportHeight);
  }

  Canvas_sceneContext.restore();

  Level_renderBirds();

  Level_renderGrids(Zurbo_x);

  Level_renderEvilEffect();

};

var Level_renderBirds = function(timeDiff) {
  Canvas_clearTemp();

  
  Level_birds.forEach(function(bird) {
    Level_renderBird(bird);
  });


  Canvas_pixelate(Canvas_tempCanvas, Canvas_tempContext, 3);

  Canvas_sceneContext.drawImage(Canvas_tempCanvas, 0, 0, Game_viewportWidth, Game_viewportHeight, 0, 0, Game_viewportWidth, Game_viewportHeight);
};

var Level_renderBird = function(bird) {
  Canvas_tempContext.fillStyle = '#0f2b55';
  Canvas_tempContext.save();
  Canvas_tempContext.beginPath();
  Canvas_tempContext.translate(bird.x - Zurbo_x/4, bird.y);
  Canvas_tempContext.rotate(-1 * Math.PI*0.05);

  // body
  Canvas_tempContext.fillRect(0, -1, 13, 3);

  Canvas_tempContext.scale(1, bird.wingScale);
  Canvas_tempContext.moveTo(0, 0);
  Canvas_tempContext.lineTo(5, 10);
  Canvas_tempContext.lineTo(10, 0);
  Canvas_tempContext.fill();

  

  Canvas_tempContext.restore();
};

var Level_updateBirds = function(timeDiff) {
  var time = new Date().getTime()/1000; // seconds
  Level_birds.forEach(function(bird) {
    bird.x += timeDiff * bird.speed;
    bird.y += -1 * timeDiff * bird.yVelocity;
    bird.wingScale = Math.sin((time + bird.wingScaleOffset) * Level_birdWingFreq);
  });
};

var Level_renderEvilEffect = function() {
  if (Zurbo_inEvilArea) {
    Canvas_sceneContext.fillStyle = 'rgba(0, 0, 0, 0.7)';
    Canvas_sceneContext.fillRect(0, 0, Game_viewportWidth, Game_viewportHeight);
  }
};

var Level_getRandomColor = function(colors) {
  return colors[Math.round(Math.random()*(colors.length-1))];
};

var Level_renderStones = function() {
  Canvas_clearTemp();

  // background fill
  Canvas_blockSpriteContext.beginPath();
  Canvas_blockSpriteContext.fillStyle = '#64645c';
  Canvas_blockSpriteContext.fillRect(0, 0, 100, 100);

  // stones
  Level_renderStone(30, 30, 15);
  Level_renderStone(60, 60, 20);
  Level_renderStone(20, 50, 10);
  Level_renderStone(85, 35, 15);
  Level_renderStone(20, 80, 15);
  Level_renderStone(70, 15, 12);
  Level_renderStone(80, 80, 13);
  Level_renderStone(15, 15, 8);
  Level_renderStone(55, 90, 8);
  Level_renderStone(40, 10, 8);

  Canvas_pixelate(Canvas_tempCanvas, Canvas_tempContext, 3);

  Canvas_blockSpriteContext.drawImage(Canvas_tempCanvas, 0, 0, 100, 100, 0, 0, 100, 100);
};

var Level_renderOval = function(x, y, radius, color) {
  Canvas_tempContext.save();
  Canvas_tempContext.beginPath();
  Canvas_tempContext.translate(x, y);
  Canvas_tempContext.scale(1, 0.5);
  Canvas_tempContext.arc(0, 0, radius, 0, Math.PI*2, false);
  Canvas_tempContext.fillStyle = color; // dark gray
  Canvas_tempContext.fill();
  Canvas_tempContext.restore();
};

var Level_renderStone = function(x, y, radius) {
  Level_renderOval(x, y+2, radius, '#111');
  Level_renderOval(x, y-2, radius, '#bdbdb3');
  Level_renderOval(x, y, radius, '#828277');
};

var Level_renderParticleBlock = function(colors, pixelSize) {
  var color;
  for (var x=0; x<100/pixelSize; x++) {
    for (var y=0; y<100/pixelSize; y++) {
      color = Level_getRandomColor(colors);
      Canvas_blockSpriteContext.fillStyle = color;
      Canvas_blockSpriteContext.fillRect(x*pixelSize, y*pixelSize, pixelSize, pixelSize);
    }
  }
};

// var Level_renderSolidBlock = function(color) {
//   Canvas_blockSpriteContext.fillStyle = color;
//   Canvas_blockSpriteContext.fillRect(0, 0, 100, 100);
// };

var Level_renderBrickBlock = function(brickColor, cementColor, borderColor) {
  var brickSpacing = 5;
  var height = 20;
  var x, y, width;

  Canvas_blockSpriteContext.fillStyle = cementColor;
  Canvas_blockSpriteContext.fillRect(0, 0, 100, 100);

  for (var row = 0; row<4; row++) {
    y = row * (height + brickSpacing);

    if (row % 2 === 0) {
      x = 0;
      width = 45;
      Level_renderRect(borderColor, x, y, width, height);
      Level_renderRect(brickColor, x+2, y+2, width-2, height-2);

      x += 45 + brickSpacing;
      width = 45;
      Level_renderRect(borderColor, x, y, width, height);
      Level_renderRect(brickColor, x+2, y+2, width-2, height-2);
    }
    else {
      x = 0;
      width = 22;
      Level_renderRect(borderColor, x, y, width, height);
      Level_renderRect(brickColor, x, y+2, width, height-2);

      x += 22 + brickSpacing;
      width = 45;
      Level_renderRect(borderColor, x, y, width, height);
      Level_renderRect(brickColor, x+2, y+2, width-2, height-2);

      x += 45 + brickSpacing;
      width = 23;
      Level_renderRect(borderColor, x, y, width, height);
      Level_renderRect(brickColor, x+2, y+2, width-2, height-2);
    }


  }
  
};

var Level_renderRect = function(color, x, y, width, height) {
  Canvas_blockSpriteContext.fillStyle = color;
  Canvas_blockSpriteContext.fillRect(x, y, width, height);
};

var Level_renderBlocks = function() {
  var block;
  for (var key in Level_blocks) {
    block = Level_blocks[key];
    Canvas_blockSpriteContext.save();
    Canvas_blockSpriteContext.translate(block.index*100, 0);
    block.render();
    Canvas_blockSpriteContext.restore();
  }
};

var Level_renderTopHighlight = function() {
  // var grd = Canvas_blockSpriteContext.createLinearGradient(0, 0, 0, 20);
  // grd.addColorStop(0, 'rgba(255, 255, 255, 0.4)');
  // grd.addColorStop(1, 'rgba(255, 255, 255, 0)');

  Canvas_blockSpriteContext.fillStyle = 'rgba(255, 255, 255, 0.3)';
  Canvas_blockSpriteContext.fillRect(0, 0, 100, 20);
};

var Level_renderBottomShadow = function() {
  // var grd = Canvas_blockSpriteContext.createLinearGradient(0, 100, 0, 80);
  // grd.addColorStop(0, 'rgba(0, 0, 0, 0.7)');
  // grd.addColorStop(1, 'rgba(0, 0, 0, 0)');

  Canvas_blockSpriteContext.fillStyle = 'rgba(0, 0, 0, 0.4)';
  Canvas_blockSpriteContext.fillRect(0, 80, 100, 100);
};

var Level_renderGrids = function(x) {
  var col = Math.round((x) / 100);
  var diff = (col * 100) - x;

  //console.log(diff);

  Canvas_sceneContext.save();
  Canvas_sceneContext.translate(diff - 100, 0);
  Level_renderGrid(1, Canvas_sceneContext, col);
  Level_renderGrid(2, Canvas_sceneContext, col);

  Canvas_sceneContext.restore();
};

var Level_renderGrid = function(gridIndex, context, col) {
  var type;
  var block;
  var blockIndex;
  var x;

  //console.log(col);

  Level_grid[gridIndex].forEach(function(rowBlock, r) {
    x = 0;
    for (var c = col-8; c<=col+7; c++) {
      type = rowBlock[c];
      block = Level_blocks[type];

      if (block) {
        blockIndex = block.index;
        // width of 102 to cover spacing between blocks in Safari
        context.drawImage(Canvas_blockSpriteCanvas, blockIndex*100, 0, 100, 100, Math.floor(x), Math.floor(r*100), 102, 100);
      }

      x+= 100;
    }
  });
};