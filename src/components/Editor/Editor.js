import React from "react";
import styled from "styled-components";
import MarkdownRenderer from "react-markdown-renderer";
import TextareaAutosize from "react-textarea-autosize";

const TitleInput = styled(TextareaAutosize)`
  font-size: 48px;
  font-weight: 600;
  width: 100%;
  &::placeholder {
    font-weight: 600;
  }
`;

const ContentPreview = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 48px;
`;

const ContentInput = styled(TextareaAutosize)`
  font-size: 18px;
  margin-top: 15px;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 48px;
`;

const Button = styled.button``;

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title || "",
      content: props.content || "",
      id: props.id || null
    };
  }

  render() {
    const { _onInputChange, _onSave } = this;
    const { title, content } = this.state;

    return (
      <>
        <TitleContainer>
          <TitleInput
            value={title}
            onChange={_onInputChange}
            placeholder="Untitled"
            name="title"
          />
          <Button onClick={_onSave}>Save</Button>
        </TitleContainer>
        <ContentPreview>
          <ContentInput
            value={content}
            onChange={_onInputChange}
            placeholder="# This supports markdown!"
            name="content"
          />
          <MarkdownRenderer markdown={content} className={"markdown"} />
        </ContentPreview>
      </>
    );
  }

  _onInputChange = event => {
    const {
      target: { value, name }
    } = event;

    this.setState({
      [name]: value
    });
  };

  _onSave = () => {
    const { onSave } = this.props;
    const { title, content, id } = this.state;
    onSave(title, content, id);
  };
}

export default Editor;