function Rating(props) {
  let value = props.children;
  let stars = '';

  for (let i = 0; i < 5; i++) {
    if (i < Math.round(value)) {
      stars += '★';
    } else {
      stars += '☆';
    }
  }
  return stars;
}

export default Rating;
