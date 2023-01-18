import Rating from './Rating';

function DriverCard(props) {
  return (
    <div className="driver-card">
      <img src={props.img} width="100px" alt={props.name} />
      <h3>{props.name}</h3>
      <Rating value={props.rating} />
      <p>Car Model: {props.car.model}</p>
      <p>License Plate: {props.car.licensePlate}</p>
    </div>
  );
}

export default DriverCard;
