const generateColor = () => {
  return (
    "#" +
    Math.random()
      .toString(16)
      .substr(-6)
  );
};

export default generateColor;
