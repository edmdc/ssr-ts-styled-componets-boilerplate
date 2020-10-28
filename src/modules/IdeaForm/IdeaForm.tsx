import React, { useState } from "react";
import Input from "../../ui/form/Input";
import Form from "../../ui/form/Form";
import Submit from "../../ui/buttons/Submit";
import { BaseDiv } from "../../ui/borders/StripedBorder";

export interface Idea {
  title: string;
  content: string;
  id: number;
}

const IdeaForm = (): JSX.Element => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const clearInputs = () => {
    setTitle("");
    setContent("");
  };

  const submitForm = (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    const newIdea: Idea = { title, content, id: Date.now() };
    console.log(newIdea);
    // addIdea(newIdea)
    clearInputs();
  };

  return (
    <BaseDiv borderStyle="striped">
      <Form onSubmit={(e) => submitForm(e)}>
        <Input
          id="title"
          label="Title"
          value={title}
          changeHandler={setTitle}
        />
        <Input
          id="content"
          label="Content"
          value={content}
          changeHandler={setContent}
          noLabelDisplay
        />
        <Submit>Submit</Submit>
      </Form>
    </BaseDiv>
  );
};

export default IdeaForm;
