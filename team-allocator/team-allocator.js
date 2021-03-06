Router.map( function () {
  this.route('eventListing', {
    path: '/'
  });
});
Router.map( function () {
  this.route('event');
});
Router.map( function () {
  this.route('user');
});
Router.map( function () {
  this.route('events');
});
Router.map( function () {
  this.route('dashboard');
});

//Order for routes - create, events, signup and dashboard
Events = new Mongo.Collection("events");

if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault("counter", 0);

  Template.eventListing.helpers({
	  events: function () {
		  return Events.find({});
	  }
  });

  Template.body.helpers({
    events: function() {
      return Events.find({});
    }
  });

  Template.something.helpers({
       events: function() {
	       return Events.find({});
       }
  });

  /*Template.hello.helpers({
    counter: function () {
      return Session.get("counter");
    },

	  events: function () {
		  return Events.find({});
	  }
  });*/

  Template.event.events({
	  'click #create-event': function (event) {
		  Events.insert({
			  'name': $('#event-name').val(),
			  'attendees': []
		  });

	  }
  });
  
  /*Template.hello.events({
  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set("counter", Session.get("counter") + 1);
    }
  });*/

  Template.eventListing.events({
    'click li': function(e, t) {
      console.log('This should take me to Signup for Template: ' + t.data.text);
    }
  })
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
