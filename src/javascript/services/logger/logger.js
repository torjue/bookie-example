var Logger = function(){
	console.log('logger newed up');
	return {
		log: function(){
			console.log.apply(console, arguments);
		}
	};
};

Logger.$inject = [];
module.exports = Logger;