const handleTimeout = (promise, time) =>
  Promise.race([
    promise,
    new Promise((_, reject) =>
      setTimeout(() => reject(`Promise exedeu o tempo limite`), time)
    ),
  ]);
