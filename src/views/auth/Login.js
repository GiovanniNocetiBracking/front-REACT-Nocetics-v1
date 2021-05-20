import React from "react";
import LoginForm from "../../components/Forms/LoginForm";

export default function Login() {
  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4">
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  );
}
