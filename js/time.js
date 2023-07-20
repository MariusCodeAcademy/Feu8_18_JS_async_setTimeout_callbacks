const timeEl = document.getElementById('time');

setInterval(tick, 1000);
tick();

function tick() {
  const nowObj = new Date();
  // console.log('nowObj ===', nowObj);
  const formatedTime = nowObj.toLocaleString('lt', {
    // dateStyle: 'full',
    timeStyle: 'medium',
  });
  // console.log('formatedTime ===', formatedTime);
  timeEl.textContent = formatedTime;
}
