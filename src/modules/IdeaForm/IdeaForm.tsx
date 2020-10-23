import React, {useState} from 'react';

export interface Idea {
  title: string
  content: string
  id: number
}

const IdeaForm = () => {
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
        <label htmlFor='title'>Title:</label>
        <input id='title' value={title} onChange={ event => setTitle(event.target.value) } />
        <label htmlFor='content'>Content:</label>
        <input id='content' value={content} onChange={ event => setContent(event.target.value) } />
        <button type='submit' onClick={(event => submitForm(event))}>Submit</button>
      </form>
    </section>
  )
}

export default IdeaForm;
