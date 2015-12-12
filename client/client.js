var LEFT_ARROW = 37,
    RIGHT_ARROW = 39;

if (Meteor.isClient) {
  HistoricalArticles = new Mongo.Collection('historical-articles');

  Meteor.subscribe('all-historical-articles');

  Template.historical.helpers({
    articles: function () {
      return HistoricalArticles.find().fetch();
    }
  });

  Template.historical.events({
    'click .headline': function () {
      console.log(this._id);
    }
  });

  Template.registerHelper('prettifyDate', function (format, timestamp) {
    return (timestamp ? moment(timestamp) : moment()).format(format ? format : 'YYYY/MM/DD');
  });

  Template.registerHelper('uppercase', function (text) {
    return text.toUpperCase();
  });

  Meteor.startup(function () {

    // Handle keypress events in the whole page
    $('body').on('keyup', function (event) {
      if (event.keyCode === LEFT_ARROW) {
        console.log('left arrow');
      } else if (event.keyCode === RIGHT_ARROW) {
        console.log('right arrow');
      }
    });
  });
}