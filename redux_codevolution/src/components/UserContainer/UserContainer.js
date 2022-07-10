import React, { useLayoutEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../../redux/features/user/actions";

function UserContainer({ fetchUsers, userData }) {
  useLayoutEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div>
      {userData.loading ? (
        <h2>Loading...</h2>
      ) : userData.error ? (
        <h2>{userData.error}</h2>
      ) : (
        <div>
            <h2>Users List</h2>
          {userData?.users?.map((user) => (
            <p key={user.id}>{user.name}</p>
          ))}
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return { fetchUsers: () => dispatch(fetchUsers()) };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
