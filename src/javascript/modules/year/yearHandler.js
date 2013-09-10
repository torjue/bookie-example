var YearHandler = function(ko, logger, router){
	logger.log('YearHandler newed up');
	console.log(ko.noenoe);
	var self = this;
	self.noe = ko.observable("noe");
};

YearHandler.$inject = ['knockout', 'logger', 'router'];
module.exports = YearHandler;