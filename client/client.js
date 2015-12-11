if (Meteor.isClient) {
  HistoricalArticles = new Mongo.Collection('historical-articles');

  Meteor.subscribe('all-historical-articles');

  Template.historical.helpers({
    articles: function () {
      return HistoricalArticles.find().fetch();
    }
  });

  Template.registerHelper('prettifyDate', function (format, timestamp) {
    return (timestamp ? moment(timestamp) : moment()).format(format ? format : 'YYYY/MM/DD');
  });

  Template.registerHelper('uppercase', function (text) {
    return text.toUpperCase();
  });
}