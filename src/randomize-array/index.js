export default (data, acumulator = 1000, debug = false) => {
  const isArray = Array.isArray(data);

  if (isArray) {
    return data
      .map(entry => ({
        entry,
        order: Math.floor(Math.random() * data.length * acumulator),
      }))
      .sort((a, b) => a.order - b.order)
      .map(({ entry }) => entry);
  }

  if (!isArray && debug) {
    console.warn(`Come on! I expected Array, but was provided with ${typeof data}`);
  }

  return [];
};
