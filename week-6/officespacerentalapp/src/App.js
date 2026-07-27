import office from "./Images/office.png";

function App() {

  const element = "Office Space";

  const officeList = [
    {
      Name: "DBS",
      Rent: 50000,
      Address: "Chennai"
    },
    {
      Name: "Regus",
      Rent: 70000,
      Address: "Hyderabad"
    },
    {
      Name: "SmartWorks",
      Rent: 45000,
      Address: "Bangalore"
    }
  ];

  return (

    <div style={{ marginLeft: "40px" }}>

      <h1>{element}, at Affordable Range</h1>

      <img
        src={office}
        width="25%"
        height="25%"
        alt="Office Space"
      />

      {
        officeList.map((item, index) => (

          <div key={index}>

            <h2>Name: {item.Name}</h2>

            <h3
              style={{
                color:
                  item.Rent <= 60000
                    ? "red"
                    : "green"
              }}
            >
              Rent: Rs. {item.Rent}
            </h3>

            <h3>
              Address: {item.Address}
            </h3>

            <hr />

          </div>

        ))
      }

    </div>

  );

}

export default App;