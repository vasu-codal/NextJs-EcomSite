"use client";
import React from "react";
import Container from "../../../components/Container";
import Input from "../../../components/Input";
import Link from "next/link";
import Button from "../../../components/Button";

const RegisterForm = () => {
  return (
    <Container>
      <div className="text-4xl text-slate-700 font-semibold md:w-[400px] min-w-72 text-center">
        Sign Up
      </div>
      <hr className="w-full mt-3 mb-3" />
      <div className="flex flex-col gap-4">
        <div>
          <Input
            name="name"
            lableName="Name"
            inputType="text"
            onChange={() => {}}
            placeholder="Enter Name"
            id="name-input"
          />
        </div>
        <div>
          <Input
            name="name"
            lableName="Email"
            inputType="email"
            onChange={() => {}}
            placeholder="Enter Email"
            id="email-input"
          />
        </div>
        <div>
          <Input
            name="name"
            lableName="Password"
            inputType="password"
            onChange={() => {}}
            placeholder="Enter Password"
            id="password-input"
          />
          <div className="my-5">
            <Button name="Sign Up" onClick={() => {}} />
          </div>
        </div>
        <div className="text-sm text-center">
          Do not have an account?{" "}
          <span className="underline">
            <Link href={"/login"}>Log In</Link>
          </span>
        </div>
      </div>
    </Container>
  );
};

export default RegisterForm;
