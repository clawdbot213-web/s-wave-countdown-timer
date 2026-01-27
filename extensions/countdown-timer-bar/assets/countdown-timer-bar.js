(() => {
  const bar = document.getElementById('s-wave-countdown-bar');
  if (!bar) return;

  const endTimeRaw = bar.dataset.endTime;
  const startTimeRaw = bar.dataset.startTime;
  const prefix = bar.dataset.prefix || 'Offer ends in';
  const expiredMessage = bar.dataset.expiredMessage || 'Offer expired';
  const expiredBehavior = bar.dataset.expiredBehavior || 'hide';
  const showDays = bar.dataset.showDays !== 'false';
  const showProgress = bar.dataset.showProgress !== 'false';
  const textEl = bar.querySelector('.s-wave-countdown-bar__text');
  const timeEl = bar.querySelector('.s-wave-countdown-bar__time');
  const progressFill = bar.querySelector('.s-wave-countdown-bar__progress-fill');
  const progressTrack = bar.querySelector('.s-wave-countdown-bar__progress');

  if (!endTimeRaw || !textEl || !timeEl) return;

  const endTime = new Date(endTimeRaw).getTime();
  const startTime = startTimeRaw ? new Date(startTimeRaw).getTime() : null;
  if (Number.isNaN(endTime)) return;

  const formatTime = (totalSeconds) => {
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    const dayLabel = showDays && days > 0 ? `${days}d ` : '';
    return `${dayLabel}${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  let intervalId;
  const tick = () => {
    const now = Date.now();
    const remaining = Math.max(0, Math.floor((endTime - now) / 1000));

    if (remaining <= 0) {
      if (expiredBehavior === 'message') {
        textEl.textContent = expiredMessage;
        timeEl.textContent = '';
        bar.classList.add('is-visible');
      } else {
        bar.classList.remove('is-visible');
      }
      if (intervalId) {
        clearInterval(intervalId);
      }
      return;
    }

    textEl.textContent = prefix;
    timeEl.textContent = formatTime(remaining);
    bar.classList.add('is-visible');

    if (showProgress && progressFill && startTime && startTime < endTime) {
      const total = endTime - startTime;
      const elapsed = Math.min(Math.max(now - startTime, 0), total);
      const percent = Math.round((elapsed / total) * 100);
      progressFill.style.width = `${percent}%`;
      if (progressTrack) {
        progressTrack.style.display = 'block';
      }
    } else if (progressTrack) {
      progressTrack.style.display = 'none';
    }
  };

  tick();
  intervalId = setInterval(tick, 1000);
})();
