import React, { useState } from "react";
import Input from "../../ui/form/Input";
import Form from "../../ui/form/Form";
import Submit from "../../ui/buttons/Submit";

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
    <section>
      <Form submissionHadler={submitForm}>
        <Input id="title" label="Title:" value={title} setValue={setTitle} />
        <Input
          id="content"
          label="Content:"
          value={content}
          setValue={setContent}
        />
        <Submit />
      </Form>
    </section>
  );
};

export default IdeaForm;
