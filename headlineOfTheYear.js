if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.article.helpers({
    content: function () {
      return {
        'headline': 'George Harrison Memorial Tree Destroyed by Beetles',
        'byline': 'LAURA STAMPLER',
        'sourceUrl': 'http://time.com/3018265/george-harrison-memorial-tree-beetles/',
        'source': 'Time.com',
        'paragraphs': [
          {'text': 'In a terrible case of irony, a tree planted in memory of Beatles guitarist George Harrison in Los Angeles has been destroyed by literal beetles.'},
          {'text': 'The pine tree was planted in Griffith Park in 2004 in honor of the musician and avid gardener, who resided in LA at the end of his life.'}
        ]
      }
    }
  });

  Template.registerHelper("prettifyDate", function (format, timestamp) {
    format = format ? format : 'dddd, MMMM D, YYYY';
    return (timestamp ? moment(timestamp) : moment()).format(format);
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
