import React, { useRef } from "react";
import axios from "axios";

const PlayerForm = () => {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const phoneRef = useRef(null);
  const emailRef = useRef(null);
  const strengthRef = useRef(null);
  const enduranceRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/players", {
        firstName: firstNameRef.current.value,
        lastName: lastNameRef.current.value,
        email: emailRef.current.value,
        phone: phoneRef.current.value,
        strength: strengthRef.current.value,
        endurance: enduranceRef.current.value,
      })
      .then((Response) => console.log(Response.data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <h1 className="center">Add a new player</h1>
      <form className="col s12" onSubmit={handleSubmit}>
        <div className="row">
          <div className="input-field col s6">
            <input id="firstName" type="text" ref={firstNameRef} />
            <label htmlFor="firstName">First Name</label>
          </div>
          <div className="input-field col s6">
            <input id="lastName" type="text" ref={lastNameRef} />
            <label htmlFor="lastName">Last Name</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input id="email" type="email" ref={emailRef} />
            <label htmlFor="email">Email</label>
          </div>
          <div className="input-field col s6">
            <input id="phone" type="tel" ref={phoneRef} />
            <label htmlFor="phone">Phone</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input id="strength" type="number" ref={strengthRef} />
            <label htmlFor="strength">Strength</label>
          </div>
          <div className="input-field col s6">
            <input id="endurance" type="number" ref={enduranceRef} />
            <label htmlFor="endurance">Endurance</label>
          </div>
        </div>
        <button className="waves-effect waves-light btn">Add Player</button>
      </form>
    </div>
  );
};

export default PlayerForm;
