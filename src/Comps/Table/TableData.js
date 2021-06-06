import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAllUser } from "../../redux/actions/userAction";
import { toast } from "react-toastify";
import SingleView from "./SingleView/SingleView";
import "react-toastify/dist/ReactToastify.css";
import DeleteView from './DeleteView/DeleteView.js';

const TableData = () => {
  const usersDetails = useSelector((state) => state.allUsers.users);
  const dispatch = useDispatch();
  toast.configure();

  useEffect(() => {
    fetch("https://gorest.co.in/public-api/users")
      .then((res) => res.json())
      .then((users) => {
        dispatch(setAllUser(users.data));
      });
  }, []);

  const handleSingleView = (detail) => {
      toast.dismiss();
    toast(<SingleView userDetail={detail} />, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: false,
    });
  };

  const handleDeleteView = (detail) => {
    toast.dismiss();
    toast(<DeleteView userDetail={detail} />, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: false,
    });
  };

  const userRow =
    usersDetails &&
    usersDetails.map((detail) => {
      return (
        <tr key={detail.id}>
          <td>{detail.name}</td>
          <td>
            <Link
              onClick={() => {
                handleSingleView(detail);
              }}
            >
             View 👀
            </Link>
          </td>
          <td style={{ fontSize: "20px !important" }}>
            <Link to={`/table/${detail.id} edit`}>Edit ✏️</Link>
          </td>
          <td>
            <Link
              onClick={() => {
                handleDeleteView(detail);
              }}
            >
             Delete 🗑️
            </Link>
          </td>
        </tr>
      );
    });
  return <>{userRow}</>;
};

export default TableData;
