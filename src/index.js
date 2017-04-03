const annyang = require('annyang');
const youtube = require('./youtube');

if (annyang) {
  var commands = {
    'youtube search *query': (query) => {
      youtube.search(query);
    },
    'youtube watch *number': (number) => {
      youtube.watch(number);
    }
  };

  annyang.debug();

  annyang.addCommands(commands);

  annyang.addCallback('error', function(err) {
    console.log('Annyang error', err);
  });

  annyang.start();
  console.log('Listening');
}

