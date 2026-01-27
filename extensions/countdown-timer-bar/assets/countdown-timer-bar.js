(() => {
  const bar = document.getElementById('s-wave-countdown-bar');
  if (!bar) return;

  const endTimeRaw = bar.dataset.endTime;
  const prefix = bar.dataset.prefix || 'Offer ends in';
  const textEl = bar.querySelector('.s-wave-countdown-bar__text');
  const timeEl = bar.querySelector('.s-wave-countdown-bar__time');

  if (!endTimeRaw || !textEl || !timeEl) return;

  const endTime = new Date(endTimeRaw).getTime();
  if (Number.isNaN(endTime)) return;

  const formatTime = (totalSeconds) => {
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    const dayLabel = days > 0 ? `${days}d ` : '';
    return `${dayLabel}${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  let intervalId;
  const tick = () => {
    const now = Date.now();
    const remaining = Math.max(0, Math.floor((endTime - now) / 1000));
    if (remaining <= 0) {
      bar.classList.remove('is-visible');
      if (intervalId) {
        clearInterval(intervalId);
      }
      return;
    }
    textEl.textContent = prefix;
    timeEl.textContent = formatTime(remaining);
    bar.classList.add('is-visible');
  };

  tick();
  intervalId = setInterval(tick, 1000);
})();
