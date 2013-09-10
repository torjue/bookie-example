var SomeModule = function(ko, logger){
	logger.log('SomeModule newed up');

	var self = this;

	self.noe = ko.observable("noe");
	self.isActive = ko.observable(true);


	var eh = require("./tester");

	setTimeout(function(){
		self.noe("noe annet " + eh);
	}, 2000);

	console.log(ko.noenoe);

};

SomeModule.$inject = ['knockout', 'logger'];
module.exports = SomeModule;