import { useState } from "react";

const MultipleInputFeildForm = () => {

    const [formData , setFormData] = useState({
        name: "",
        email: "",
        password: "",
        gender: "",
        terms: false,
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }

  return(
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
            <br />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
            <br />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})} />
            <br />
            <label htmlFor="gender">Gender:</label>
            <input type="radio" name="gender" value="male" checked={formData.gender === "male"} onChange={(e) => setFormData({...formData, gender: e.target.value})} />
            <label htmlFor="male">Male</label>
            <input type="radio" name="gender" value="female" checked={formData.gender === "female"} onChange={(e) => setFormData({...formData, gender: e.target.value})} />
            <label htmlFor="female">Female</label>  
            <br />
            <input type="checkbox" name="terms" id="terms" checked={formData.terms} onChange={(e) => setFormData({...formData, terms: e.target.checked})} />
            <label htmlFor="terms">I agree to the terms and conditions</label>
            <br />
            <button type="submit">Submit</button>
        </form>
    </div>
  );
};

export default MultipleInputFeildForm;
