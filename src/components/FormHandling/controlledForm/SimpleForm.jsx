import { useState } from "react";

const SimpleForm = () => {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted");
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Password:", password);
    }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <br />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SimpleForm;
