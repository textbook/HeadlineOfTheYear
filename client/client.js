if (Meteor.isClient) {
  Articles = new Mongo.Collection('articles');

  Meteor.subscribe('all-articles');

  Template.body.helpers({
    articles: function () {
      return Articles.find().fetch();
    }
  });

  Template.registerHelper('prettifyDate', function (format, timestamp) {
    return (timestamp ? moment(timestamp) : moment()).format(format ? format : 'YYYY/MM/DD');
  });

  Template.registerHelper('uppercase', function (text) {
    return text.toUpperCase();
  });
}