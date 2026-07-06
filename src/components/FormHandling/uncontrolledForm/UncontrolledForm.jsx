import { useRef } from "react";

const UncontrolledForm = () => {

    const name = useRef();
    const email = useRef();
    const password = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted"); 
        console.log("Name : " , name.current.value);
        console.log("Email : " , email.current.value);
        console.log("Password : " , password.current.value);
    }

  return(
    <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" ref={name} />
        <br />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" ref={email} />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" ref={password} />
        <br />
        <button type="submit">Submit</button>
    </form>
  );
};

export default UncontrolledForm;
