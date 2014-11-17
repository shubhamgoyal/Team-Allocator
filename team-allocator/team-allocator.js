Router.map( function () {
  this.route('create');
});
Router.map( function () {
  this.route('signup');
});
Router.map( function () {
  this.route('events');
});
Router.map( function () {
  this.route('dashboard');
});


Events = new Mongo.Collection("events");

if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault("counter", 0);

  Template.body.helpers({
    events: function() {
      return Events.find({});
    }
  });

  Template.something.helpers({
       events: function() {
	       return Events.find({});
       }
  })

  Template.hello.helpers({
    counter: function () {
      return Session.get("counter");
    },

	  events: function () {
		  return Events.find({});
	  }
  });

  Template.event.events({
	  'click #create-event': function (event) {
		  Events.insert({
			  'name': $('#event-name').val()
			  'attendees': []
		  });

		  return false;
	  }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set("counter", Session.get("counter") + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
