"use client";
import React from "react";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import Container from "../../../components/Container";
import Link from "next/link";

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center py-5">
      <Container>
        <div className="text-4xl text-slate-700 font-semibold md:w-[400px] min-w-72 text-center">
          Sign in
        </div>
        <hr className="w-full mt-3 mb-3" />
        <div className="flex flex-col gap-4">
          <div>
            <Input
              name="email"
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
          </div>
          <div className="my-1">
            <Button name="Sign Up" onClick={() => {}} />
          </div>
          <div className="text-sm text-center">
            Do not have an account?{" "}
            <span className="underline">
              <Link href={"/register"}>Sign Up</Link>
            </span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default page;
