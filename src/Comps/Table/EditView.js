import React, { useState, useEffect } from "react";
import "./Edit.scss";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EditView = (props) => {
  const [user, setUser] = useState(props && props.userDetail?.name);
  const [email, setEmail] = useState(props && props.userDetail?.email);
  toast.configure();
  const handleChange = (e) => {
    setUser(e.target.value);
  };
  const handleChange1 = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = props?.fetchId;
    if (user && user !== "" && email && email !== "") {
      const userData = {
        name: user,
        email: email,
      };
      fetch(`https://gorest.co.in/public-api/users/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          Authorization:
            "Bearer 0267546e52c13042d89d88cd52042860c06456aa005e2c30dcd6c4c9452c13eb",
        },
        body: JSON.stringify(userData),
      })
        .then((res) => res.json())
        .then((data) => {
          // window.location.reload();
          toast("🦄 Data Updating", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            progress: undefined,
          });
        });
    }
  };
  useEffect(() => {
    toast.dismiss();
    setUser(props.userDetail.name);
    setEmail(props.userDetail.email);
  }, [props.userDetail.name]);
  return (
    <div>
      <div className="container">
        <div className="form form--signup">
          <div className="closeEdit">
            <Link to="/">X</Link>
          </div>
          <div className="form--heading">Welcome To Update</div>
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <input
              type="text"
              placeholder="Name"
              value={user}
              name="name"
              onChange={(e) => {
                handleChange(e);
              }}
            />

            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => {
                handleChange1(e);
              }}
            />

            <button type="submit" className="button">
              Update User Data
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditView;
