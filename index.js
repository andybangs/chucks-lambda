const Xray = require('x-ray');

exports.handler = function(event, context, callback) {
  const xray = new Xray();
  const url =
    event.location === 'cd'
      ? 'http://chucks-cd.jjshanks.net/draft'
      : 'http://chucks.jjshanks.net/draft';

  xray(url, 'tr', [
    {
      class: '@class',
      tap: '.draft_tap',
      brewery: '.draft_brewery',
      beer: '.draft_name',
      pint: '.draft_price',
      growler: '.draft_growler',
      origin: '.draft_origin',
      abv: '.draft_abv'
    }
  ])((err, data) => {
    if (err) callback(err);

    const response = { data };

    callback(null, response);
  });
};
