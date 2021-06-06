import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSingleUser } from "../../redux/actions/userAction";
import EditView from "./EditView";

const SingleTableData = () => {
  const dispatch = useDispatch();
  const urlData = useParams();
  const urlArray = urlData && urlData.tableId.split(" ");
  const userID = urlArray[0];
  const renderCheck = urlArray[1];
  const userDetail = useSelector((state) => state.singleUser);

  useEffect(() => {
    fetch(`https://gorest.co.in/public-api/users/${userID}`)
      .then((res) => res.json())
      .then((user) => {
        dispatch(setSingleUser(user.data));
      });
  }, []);

  return (
    <>
      {renderCheck === "edit" && userDetail && userDetail.name && (
        <EditView userDetail={userDetail} fetchId={userID} />
      )}
    </>
  );
};

export default SingleTableData;
