import { ChangeEvent, FormEvent, useState } from 'react';

export default function Form() {
  const [formData, setFormData] = useState({ title: '', body: '' });
  const { title, body } = formData;

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    // setFormData((prevState) => ({
    //   ...prevState,
    //   title: e.target.id === 'title' ? e.target.value : title,
    //   body: e.target.id === 'body' ? e.target.value : body,
    // }));
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  console.log('formData', formData);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('test');
  };

  return (
    <>
      <h1>Form</h1>
      <p>Create a post</p>

      <form onSubmit={onSubmit}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" value={title} onChange={onChange} />
        <br />
        <label htmlFor="title">Body</label>
        <input type="text" id="body" value={body} onChange={onChange} />
        <button type="submit">upload post</button>
      </form>
    </>
  );
}
