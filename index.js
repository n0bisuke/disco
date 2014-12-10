var text = [''];
Comment = function() {

	this.width = [ 0 ];
	this.text = [ "" ];
	this.left = 0;

	while ( this.width[ 0 ] < 2400 ) {
		this.add();
	}

},
array = [],
ctx = [],
txr = [];

var mode = /full/.test( location.href );

Comment.prototype = {
	add: function() {

		var t = text[ Math.floor( Math.random() * text.length ) ] + "                    ",
			obj = { width: ctx[ 0 ].measureText( t ).width, text: t };

		this.width[ 0 ] += obj.width;
		this.width.push( obj.width );
		this.text[ 0 ] += obj.text;
		this.text.push( obj.text );

	},

	update: function() {

		if ( - this.left > this.width[ 1 ] ) {
			this.left += this.width[ 1 ];
			this.remove();
		}

		if ( this.width[ 0 ] - this.width[ 1 ] < 2400 ) {
			this.add();
		}

		var left = this.left,
			index = array.indexOf( this ),
			t = this.text[ 0 ];

		ctx.forEach( function( c, n ) {

			if ( mode ) {
				//c.fillStyle = "#ddd";
				//c.fillText( t, - n * 800 + left, 45 * index + 44 );
				c.fillStyle = "#000";
				c.fillText( t, - n * 800  + left - 1, 45 * index + 43 );
			} else {
				//c.fillStyle = "#000";
				//c.fillText( t, - n * 800 + left, 45 * index + 44 );
				c.fillStyle = "#fff";
				c.fillText( t, - n * 800  + left - 1, 45 * index + 43 );
			}

		} );

		this.left -= 1;

	},
	remove: function() {
		this.width[ 0 ] -= this.width.splice( 1, 1 )[ 0 ];

		this.text.splice( 1, 1 );
		this.text[ 0 ] = this.text.slice( 1 ).join( "" );
	}
};

function marquee( c, tag ) {

	var t = jThree.three( tag );
	c.font = "30px Arial bold";
	ctx.push( c );
	txr.push( t );

	if ( !array.length ) for ( var i = 10; i--; ) {
		array.push( new Comment );
	}

	setInterval( function() {

		ctx.forEach( function( c ) {
			c.clearRect(0, 0, 800, 450);
		} );

		for ( var i = 10; i--; ) {
			array[ i ].update();
		}

		txr.forEach( function( t ) {
			t.needsUpdate = true;
		} );

	}, 20 );

}

!function( j3 ) {
window.misc = {
	drawFloor: function( ctx, base, color ) {

		//ctx = canvas2D context
		ctx.fillStyle = base;
		ctx.fillRect(0, 0, 32, 32);
		ctx.fillStyle = color;
		ctx.fillRect(0, 0, 16, 16);
		ctx.fillStyle = base;
		ctx.fillRect(8, 8, 8, 8);
		ctx.fillStyle = color;
		ctx.fillRect(16, 16, 16, 16);
		ctx.fillStyle = base;
		ctx.fillRect(24, 24, 8, 8);

	}
};

var audio = new Audio;
var length = 0;

function start() {
	if ( !length++ ) return;
	j3( "#roll" ).animate( { rotateY: "-=1.57" }, 30000, "linear", arguments.callee )
	.next().animate( { rotate: "-=1.57 -=6.28 0" }, 30000, "linear" );

	audio.play();
	j3.MMD.play();
	$( "body" ).click( function() {
		var target = document.body;
		if (target.webkitRequestFullscreen) {
			target.webkitRequestFullscreen(); //Chrome15+, Safari5.1+, Opera15+
		} else if (target.mozRequestFullScreen) {
			target.mozRequestFullScreen(); //FF10+
		} else if (target.msRequestFullscreen) {
			target.msRequestFullscreen(); //IE11+
		} else if (target.requestFullscreen) {
			target.requestFullscreen(); // HTML5 Fullscreen API仕様
		} else {
			alert('ご利用のブラウザはフルスクリーン操作に対応していません');
			return;
		}
	} );

	setTimeout( function() {
		$( "#loading" ).remove();
	}, 1000 );
}

audio.oncanplaythrough = start;

audio.src = "audio/disco." + ( audio.canPlayType( "audio/mp3" ) ? "mp3" : "ogg" );
audio.ontimeupdate = function() {
	j3.MMD.seek( audio.currentTime + 2 );
};
audio.onended = function() {
	j3.MMD.pause();
};

j3( start );

}( jThree );