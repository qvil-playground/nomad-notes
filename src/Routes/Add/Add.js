import React from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Editor from "../../components/Editor";

const ADD_NOTE = gql`
  mutation createNote($title: String!, $content: String!) @client {
    createNote(title: $title, content: $content) {
      id
    }
  }
`;

export default class Add extends React.Component {
  render() {
    // return "hi";
    return (
      <Mutation mutation={ADD_NOTE}>
        {createNote => {
          this.createNote = createNote;
          return <Editor onSave={this._onSave} />;
        }}
      </Mutation>
    );
  }

  _onSave = (title, content) => {
    const {
      history: { push }
    } = this.props;

    if (title !== "" && content !== "") {
      this.createNote({ variables: { title, content } });
      push("/");
    }
    
    console.log(title, content);
  };
}
