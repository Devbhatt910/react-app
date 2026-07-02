import { useState } from "react";

const UseStateLoginForm = () => {
  
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  
  const [submittedData, setSubmittedData] = useState(null);

  const getValues = (e) => {
    
    e.preventDefault();

    setSubmittedData({
      name: name,
      password: password,
      email: email
    });
  };

  return (
    <div>
      <form>
        <input 
          type="text" 
          placeholder="enter Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="enter Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <input 
          type="email" 
          placeholder="enter email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <button onClick={getValues}>Get Values</button>
      </form>

      {submittedData && (
        <div style={{ marginTop: "20px" }}>
          <h3>Submitted Values:</h3>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Password:</strong> {submittedData.password}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
        </div>
      )}
    </div>
  );
};

export default UseStateLoginForm;