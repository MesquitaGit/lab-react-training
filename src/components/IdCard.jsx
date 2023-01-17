function IdCard(props) {
  return (
    <div className="information">
      <div className="picture">
        <img src={props.picture} alt="profile pic" />
      </div>
      <p>First Name: {props.firstName}</p>
      <p>Last name: {props.lastName}</p>
      <p>Gender: {props.gender}</p>
      <p>Height: {props.height}</p>
      <p>Birth: {props.birth}</p>
    </div>
  );
}

export default IdCard;
