import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f2f8fc;
`;

const FormWrapper = styled.div`
  background: #fff;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  color: #333;
  text-align: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 15px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #56ccfc;
    box-shadow: 0 0 5px rgba(86, 204, 252, 0.5);
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  margin-top: 15px;
  background: #56ccfc;
  border: none;
  border-radius: 8px;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background: #4ab0d9;
  }
`;

const LinkText = styled.p`
  text-align: center;
  margin-top: 15px;
  font-size: 14px;

  a {
    color: #56ccfc;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const SignIn = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign In Data:", formData);
    // 👉 Here you can call API for authentication
  };

  return (
    <Container>
      <FormWrapper>
        <Title>Sign In</Title>
        <form onSubmit={handleSubmit}>
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <Button type="submit">Sign In</Button>
        </form>
        <LinkText>
          Don’t have an account? <a href="/signup">Sign Up</a>
        </LinkText>
      </FormWrapper>
    </Container>
  );
};

export default SignIn;
