import { useCounterState } from "./customHook";


function Form(props) {
  
  function submit(e) {
    e.preventDefault();
    console.log(e);
  }

  return (
    <form onSubmit={submit}>
      <input type="text" placeholder="Title"/>
      <input type="text" placeholder="Description"/>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
