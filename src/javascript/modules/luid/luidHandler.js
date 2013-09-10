var LuidHandler = function(ko, logger){
	logger.log('LuidHandler newed up');
	var self = this;
	console.log(ko.noenoe);
};

LuidHandler.$inject = ['knockout', 'logger'];
module.exports = LuidHandler;