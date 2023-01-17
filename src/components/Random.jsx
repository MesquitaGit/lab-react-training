function Random(props) {
  return Math.floor(Math.random() * (props.max - props.min + 1)) + props.min;
}

export default Random;
