import React, { useState } from 'react';

const main = () => {
  // interface MyEvent {
  //   username: string;
  //   email: string;
  //   discription: string;
  //   errors: any;
  // }

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    discription: '',
    errors: {}
  });

  //check the handle changed or not
  const handleChange = (event) => {
    const { username, email } = event.target;
    setFormData((prevState) => ({ ...prevState, [username]: value }));
  };

  //check the form fields are empty or not
  const validateForm = () => {
    const errors = {};

    // Check if username is empty
    if (!formData.username) {
      formData.username = 'Username is required ';
    }
    // Check if email is empty
    if (!formData.email) {
      formData.email = "email can' be required";
    }

    setFormData((prevState) => ({ ...prevState, errors }));
    // Return true if there are no errors
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateForm) {
      console.log(formData);
      //Summit data
    } else {
      //Nothing
    }
  };

  return (
    <div>
      <div>Home</div>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Discription:
          <input
            type="text"
            name="discription"
            value={formData.discription}
            onChange={handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default main;
