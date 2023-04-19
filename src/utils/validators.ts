const inRange = (input: string, min: number, max: number) => {
  const length = input.length;

  if (length >= min && length <= max) {
    return true;
  }

  return false;
};

export { inRange };
