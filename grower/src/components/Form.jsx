//jshint esversion:6

import React, { useState } from "react";

import {Button, TextField } from '@mui/material/';

export default function ContactForm() {
  const [title, setTitle] = useState("Send us an email!");
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    console.log(details);

    let response = await fetch("https://n1zx5v9163.execute-api.us-east-1.amazonaws.com/default/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details)
    });
    setStatus("Submit");
    setTitle("Thank you for your email!");

    let result = await response.json();
    console.log(result);
  };
  return (
    <>
    <h1 className="input">{title}</h1>
    <form onSubmit={handleSubmit}>
      <div className="text">
        <TextField className="onehundred" type="text" id="name" label="Name" variant="outlined" required />
      </div>
      <div className="text">
        <TextField className="onehundred" type="email" id="email" label="Return email address" variant="outlined" required />
      </div>
      <div className="text">
        <TextField multiline rows={5} className="onehundred" id="message" label="Please construct your message here!" variant="outlined" required />
      </div>
      <Button className="submit" type="submit" variant="outlined">{status}</Button>
    </form>
    </>
  );
};
