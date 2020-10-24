import React, {useState} from 'react';
import Input from '../../ui/input/Input';

export interface Idea {
  title: string
  content: string
  id: number
}

const IdeaForm = (): JSX.Element => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const clearInputs = () => {
    setTitle('')
    setContent('')
  }

  const submitForm = (event:React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    const newIdea:Idea = {title, content, id: Date.now()}
    console.log(newIdea)
    // addIdea(newIdea)
    clearInputs()
  }

  return (
    <section>
      <form>
        <Input
          id="title"
          label="Title from Dyno Component:"
          value={title} setValue={setTitle}
        />
        <Input
          id='content'
          label='Content:'
          value={content} setValue={setContent}
        />
        <button type='submit' onClick={(event => submitForm(event))}>Submit</button>
      </form>
    </section>
  )
}

export default IdeaForm;
