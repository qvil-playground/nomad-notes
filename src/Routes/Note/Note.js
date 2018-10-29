import React from "react";
import { Query } from "react-apollo";
import { GET_NOTE } from "../../queries";

export default class Note extends React.Component {
  render() {
    const {
      match: {
        params: { id }
      }
    } = this.props;

    return (
      <Query query={GET_NOTE} variables={{ id }}>
        {({ data }) => {
          console.log(data);
          return null;
        }}
      </Query>
    );
  }
}
