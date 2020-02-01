var config = {
    type: Phaser.AUTO,
    width: 640,
    heigth: 360,
    scene: {
	preload: preload,
	create: create,
	update: update
    }
};

var game = new Phaser.Game(config);

function preload() {
    this.load.image('background', '/assets/images/background.png');
}

function create() {
    this.add.image = (640, 360, 'background');

}

function update() {
    
}
