import React from "react";
import RegisterForm from "../../components/Forms/RegisterForm";

export default function Register() {
  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-6/12 px-4">
            <RegisterForm />
          </div>
        </div>
      </div>
    </>
  );
}
