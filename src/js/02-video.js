import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const getIframe = document.querySelector('iframe');
const player = new Player(getIframe);

const KEY_STORAGE = 'videoplayer-current-time';

player.on(
  'timeupdate',
  throttle(function (currentTime) {
    const seconds = currentTime.seconds;
    localStorage.setItem(KEY_STORAGE, JSON.stringify(seconds));
    console.log(localStorage);
  }),
  1000
);

const timeOn = JSON.parse(localStorage.getItem(KEY_STORAGE));

player
  .setCurrentTime(timeOn)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        break;
    }
  });
