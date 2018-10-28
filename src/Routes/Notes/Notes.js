import React from "react";
import { Query } from "react-apollo";
import { GET_NOTES } from "../../queries";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as Plus } from "../../components/plus.svg";
import StyledLink from "../../components/StyledLink";

const Header = styled.div`
  padding: 16px;
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: 600;
  margin: 0;
  display: flex;
  align-items: center;
`;

const Button = styled.div`
  margin-left: 8px;
  transform: scale(0.8);
  background-color: #eee;
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
`;

const SubTitle = styled.h2`
  color: #a2a19e;
  font-weight: 400;
`;

const Note = styled.div`
  padding: 8px 4px;
  transition: background-color 0.1s linear;
  cursor: pointer;
  border-radius: 4px;
  margin-bottom: 8px;
  text-decoration: none;
  &:hover {
    background-color: #eee;
  }
`;

const NoteTitle = styled.span`
  padding-bottom: 4px;
  font-weight: 600;
  font-size: 20px;
`;

export default class Notes extends React.Component {
  render() {
    return (
      <>
        <Header>
          <Title>
            Nomad Notes
            <Link to={"/add"}>
              <Button>
                <Plus />
              </Button>
            </Link>
          </Title>
          <SubTitle>Taking notes while we learn.</SubTitle>
        </Header>
        <Query query={GET_NOTES}>
          {({ data }) =>
            data.notes
              ? data.notes.map(note => (
                  <StyledLink
                    to={`/edit/${note.id}`}
                    key={note.id}
                  >
                    <Note>
                      <NoteTitle>{note.title}</NoteTitle>
                    </Note>
                  </StyledLink>
                ))
              : "No data"
          }
        </Query>
      </>
    );
  }
}
