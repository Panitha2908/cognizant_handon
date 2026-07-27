function ListofIndianPlayers({ IndianPlayers }) {

  return (
    <ul>
      {IndianPlayers.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default ListofIndianPlayers;