function BoxColor(props) {
  const { r, g, b } = props;
  const color = `rgb(${r}, ${g}, ${b})`;
  const style = {
    width: '100px',
    height: '100px',
    backgroundColor: color,
  };

  return <div style={style}></div>;
}

export default BoxColor;
