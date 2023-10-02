import { useDispatch } from "react-redux";
import { Button, ListGroup, ListGroupItem } from "reactstrap";
import { deleteUserRequest } from "../actions/users";

function UsersList({ users }) {
  const dispatch = useDispatch();
  const handleDelete = id => {
    dispatch(deleteUserRequest(id));
  };
  return (
    <ListGroup>
      {users
        .sort((a, b) => {
          if (a.firstName > b.firstName) {
            return 1;
          } else if (a.firstName < b.firstName) {
            return -1;
          } else if (a.lastName > b.lastName) {
            return 1;
          } else if (a.lastName < b.lastName) {
            return -1;
          } else {
            return 0;
          }
        })
        .map(user => {
          return (
            <ListGroupItem key={user.id}>
              <section style={{ display: "flex" }}>
                <div style={{ flexGrow: 1, margin: "0 auto" }}>
                  {user.firstName} {user.lastName}
                </div>
                <div>
                  <Button
                    outline
                    color="danger"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </Button>
                </div>
              </section>
            </ListGroupItem>
          );
        })}
    </ListGroup>
  );
}
export default UsersList;
