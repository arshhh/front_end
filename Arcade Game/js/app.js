var runs = 0;
var MAXIMUM = 370;
var MINIMUM = 70;
//Display enemies
var Enemy = function(i, j){
    this.sprite = 'images/enemy-bug.png';
    this.i = i;
    this.j = j;
    this.speed = this.get_speed_of();
};

Enemy.prototype.get_speed_of = function(){
    var spee = Math.floor(Math.random()*(MAXIMUM-MINIMUM+1)+MINIMUM);
    return spee;
}



Enemy.prototype.update = function(dt){
    if(this.i < 500)
         this.i = this.i + this.speed * dt;
    else {
         this.i = -100;
        this.speed = this.get_speed_of();
    }
};

Enemy.prototype.render = function(){
    ctx.drawImage(Resources.get(this.sprite), this.i, this.j);
};
//  Information about player.
var Player = function(i , j){
    this.sprite = 'images/char-boy.png';
    this.i = i;
    this.j = j;
};
document.addEventListener('keyup', function(e){
    var usedKeys ={
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
        65: 'left',
    };
    player.handleInput(usedKeys[e.keyCode]);
 }
);


Player.prototype.update = function(){
    var k;
    for(k = 0; k < allEnemies.length; k++){
             if((this.j == allEnemies[k].j) && (this.i < allEnemies[k].i + 101) && (this.i + 101 > allEnemies[k].i))
                this.reset();
         
            }
};

Player.prototype.render = function(){
    ctx.drawImage(Resources.get(this.sprite), this.i, this.j);
}

Player.prototype.reset = function(){
    this.i = 200;
    this.j = 400;
};

Player.prototype.handleInput = function(key){
	       // Key inputs, on detection of key this function moves the player according to the key pressed.
    if(key == 'left'){
        if(this.i > 0)
            this.i -= 100;
    }   
    
     else if(key == 'down'){
        if(this.j < 400){
            this.j = this.j + 90;
        }
    }
    else if(key == 'right'){
            if(this.i  < 400)
                
                this.i = this.i + 100;
        }
    
     
    
    else if(key == 'up'){
        if(this.j > 40){
            this.j = this.j - 90;
        }
         
        else {
            runs = runs + 1;
            $('#runs').text(runs);
            this.reset();
        }
    }
    
};

var allEnemies = [
new Enemy(0, 40),
new Enemy(0, 130),
new Enemy(0, 220),
];

var player = new Player(200, 400);
    