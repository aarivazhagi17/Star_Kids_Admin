import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Admission.css";

function Admission() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const fetchData = () => {
    const token = localStorage.getItem("token");

    axios
      .get(`${import.meta.env.VITE_API_URL}/admin/contact`, {
        headers: {
          authorization: token,
        },
      })
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const deleteData = (id) => {
    const token = localStorage.getItem("token");

    axios
      .delete(`${import.meta.env.VITE_API_URL}/admin/contact/${id}`, {
        headers: {
          authorization: token,
        },
      })
      .then(() => fetchData());
  };

  return (
    <div className="admission-container">
      <h1 className="admission-title">Admission Data</h1>

      {data.length === 0 ? (
        <div className="no-data-box">
          <h3>No Data Found</h3>
        </div>
      ) : (
        <div className="table-wrapper">
          <table className="admission-table">
            <thead>
              <tr>
                <th>Parent Name</th>
                <th>Child Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Program</th>
                <th>City</th>
                <th>Message</th>
                <th>Applied Time</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {data.map((item) => (
                <tr key={item._id}>
                  <td>{item.parentName}</td>
                  <td>{item.childrenName}</td>
                  <td>{item.email}</td>
                  <td>{item.phoneNumber}</td>
                  <td>{item.program}</td>
                  <td>{item.centerCity}</td>
                  <td>{item.message}</td>
                  <td>
                    {new Date(item.createdAt).toLocaleString("en-IN", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: true,
                    })}
                  </td>
                  <td>
                    <button
                      style={{
                        backgroundColor: "red",
                        padding: "10px",
                        color: "white",
                        border: "none",
                        borderRadius: "10px",
                      }}
                      onClick={() => deleteData(item._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Admission;