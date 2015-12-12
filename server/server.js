var ARTICLES = [
  {
    year: 2014,
    headline: 'George Harrison Memorial Tree Destroyed by Beetles',
    byline: 'Laura Stampler',
    sourceUrl: 'http://time.com/3018265/george-harrison-memorial-tree-beetles/',
    source: 'Time.com',
    paragraphs: [
      'In a terrible case of irony, a tree planted in memory of Beatles guitarist George Harrison in Los Angeles has been destroyed by literal beetles.',
      'The pine tree was planted in Griffith Park in 2004 in honor of the musician and avid gardener, who resided in LA at the end of his life.'
    ]
  },
  {
    year: 1983,
    headline: 'Headless Body in Topless Bar',
    byline: 'Vincent A. Musetto',
    sourceUrl: 'http://nypost.com/',
    source: 'New York Post',
    paragraphs: [
      'Gunman forces woman to decapitate tavern owner.'
    ]
  }
];

if (Meteor.isServer) {

  HistoricalArticles = new Mongo.Collection('historical-articles');

  Meteor.startup(function () {
    // code to run on server at startup
    ARTICLES.forEach(function (article) {
      if (HistoricalArticles.find(article).count() == 0) {
        HistoricalArticles.insert(article);
      }
    });
  });

  Meteor.publish('all-historical-articles', function () {
    return HistoricalArticles.find();
  });

}