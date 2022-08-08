const lower = 2;
const higher = 50;

  for (let i = lower; i <= higher; i++) {
    let num = 0;

    for (let k = 2; k < i; k++) {
      if (i % k == 0) {
        num = 1;
        break;
      }
    }

    if (i > 1 && num == 0) {
      console.log(i);
    }
  }