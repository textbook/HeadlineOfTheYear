if (Meteor.isClient) {
  Template.body.helpers({
    articles: [{
      'headline': 'George Harrison Memorial Tree Destroyed by Beetles',
      'byline': 'Laura Stampler',
      'sourceUrl': 'http://time.com/3018265/george-harrison-memorial-tree-beetles/',
      'source': 'Time.com',
      'paragraphs': [
        {'text': 'In a terrible case of irony, a tree planted in memory of Beatles guitarist George Harrison in Los Angeles has been destroyed by literal beetles.'},
        {'text': 'The pine tree was planted in Griffith Park in 2004 in honor of the musician and avid gardener, who resided in LA at the end of his life.'}
      ]
    }]
  });

  Template.registerHelper('prettifyDate', function (format, timestamp) {
    return (timestamp ? moment(timestamp) : moment()).format(format ? format : 'YYYY/MM/DD');
  });

  Template.registerHelper('uppercase', function (text) {
    return text.toUpperCase();
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
