var Twitter = require('twitter');

console.log('this is loaded');

var twitterKeys = new Twitter ({
  consumer_key: 'GXCgsMzFDCtL0dijJoZWLWHtJ',
  consumer_secret: 'DAqeK7k10ipgD9HHFLuPBqJ96rFPNIITgNuUlWvPuaqnP2E3Do',
  access_token_key: '938189076074782721-QxRau1Bwl66KXNzIy34PBanFCuRo9FG',
  access_token_secret: 'tgyCY1rR4oPJwCpMIBHeLuGNJDpklzJ2HBcOmIqYkFlSi',
});

module.exports = twitterKeys;