import './style.scss';

(() => {
  const video = document.querySelector('.video');
  const videoEl = video.querySelector('video')

  const videoPlay = video.querySelector('.video__content');
  const videoBack = video.querySelector('.video__btn--back');
  const videoSkip = video.querySelector('.video__btn--skip');
  const videoReset = video.querySelector('.video__btn--reset');

  const videoProgress = video.querySelector('.progress');

  videoEl.removeAttribute('controls');

  videoEl.addEventListener('ended', stopVideo);
  videoEl.addEventListener('timeupdate', setProgress);
  videoPlay.addEventListener('click', playPause);
  videoReset.addEventListener('click', stopVideo);


  videoBack.addEventListener('click', () => bwdSeconds(10));
  videoSkip.addEventListener('click', () => fwdSeconds(10));


  function playPause() {
    videoEl.paused ? videoEl.play() : videoEl.pause();
    video.classList.toggle('is-playing', !videoEl.paused);
  };

  function stopVideo() {
    videoEl.pause();
    videoEl.currentTime = 0;
    video.classList.remove('is-playing');
  };

  function setProgress() {
    videoProgress.style.setProperty('--progress', `${videoEl.currentTime / videoEl.duration * 100}%`);
  };

  function fwdSeconds(s) {
    videoEl.currentTime += s;
  };

  function bwdSeconds(s) {
    videoEl.currentTime -= s;
  };


})();
