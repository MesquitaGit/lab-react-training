function CreditCard(props) {
  const {
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color,
  } = props;

  const lastFourDigits = number.slice(-4);

  return (
    <div
      style={{
        backgroundColor: bgColor,
        color: color,
        padding: '50px',
        width: '250px',
        height: '150px',
      }}
    >
      <h3>{type}</h3>
      <p>Card Number: **** **** **** {lastFourDigits}</p>
      <p>
        Expiration: {expirationMonth}/{expirationYear}
      </p>
      <p>Bank: {bank}</p>
      <p>Owner: {owner}</p>
    </div>
  );
}

export default CreditCard;
