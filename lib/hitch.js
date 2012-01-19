var Hitch = function(){};

Hitch.prototype = {

	stack: [],

	chain: function(fn){
		this.stack.append(Array.flatten(arguments));
		return this;
	},

	next: function(){
		return (this.stack.length) ? this.stack.shift().apply(this, arguments) : false;
	},

	empty: function(){
		this.stack = [];
		return this;
	}

};

module.exports = Hitch;