import { Button, ListGroup, ListGroupItem } from "reactstrap";

function UsersList({ users }) {
  return (
    <ListGroup>
      {users.map(user => {
        return (
          <ListGroupItem key={user.id}>
            <section style={{ display: "flex" }}>
              <div style={{ flexGrow: 1, margin: "0 auto" }}>
                {user.firstName} {user.lastName}
              </div>
              <div>
                <Button outline color="danger">
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
