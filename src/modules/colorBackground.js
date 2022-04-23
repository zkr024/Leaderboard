const colorBackground = counter => {
  let change;
  if (counter % 2 !== 0) {
    change = 'newColor';
    return change;
  }
  change = 'old';
  return change;
};

export default colorBackground;
