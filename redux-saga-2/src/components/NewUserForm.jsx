import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { createUserRequest } from "../actions/users";
export class NewUserForm extends Component {
  handleSubmit = e => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    console.log(data);
    this.props.createUserRequest(data);
  };
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label>First Name</Label>
          <Input name="firstName" placeholder="First Name" />
        </FormGroup>
        <FormGroup>
          <Label>Last Name</Label>
          <Input name="lastName" placeholder="First Name" />
        </FormGroup>
        <FormGroup>
          <Button block outline color="primary" type="submit">
            Submit
          </Button>
        </FormGroup>
      </Form>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  createUserRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewUserForm);
