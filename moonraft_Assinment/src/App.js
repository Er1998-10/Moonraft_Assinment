import "./styles.css";
import React, { useEffect, useState } from "react";

export default function App() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch("https://jsonkeeper.com/b/07NH").then((resp) => {
      resp.json().then((result) => {
        // console.warn(result);
        setdata(result);
      });
    });
  }, []);

  return (
    <React.Fragment>
      <table className="Table" border="1">
        {data.map((curr) => (
          <tr>
            ID: {curr.id}
            Name: {curr.name}
            Email:{curr.emailId}
            Gender:{curr.gender}
            About :{curr.aboutMe}
            About :{curr.joiningDate}
            Location :{curr.location}
            Department :{curr.department}
          </tr>
        ))}
      </table>
    </React.Fragment>
  );
}
