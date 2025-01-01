import React from "react";
import BaseLayouts from "../../Layouts/BaseLayouts";
import { Button, Label, TextInput } from "flowbite-react";

const Signup = () => {
  return (
    <BaseLayouts>
      <div className="container min-h-[92vh] flex justify-center items-center">
        <div className="px-5 py-8 border rounded-md w-full md:w-2/3 lg:w-2/5">
          <h1 className="font-semibold text-2xl lg:text-3xl mb-8 text-center">
            Sign Up
          </h1>
          <form className="flex max-w-md flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name" value="Your Name" />
              </div>
              <TextInput
                id="name"
                type="text"
                placeholder="Jhone doe"
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email1" value="Your email" />
              </div>
              <TextInput
                id="email1"
                type="email"
                placeholder="name@example.com"
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password1" value="Your password" />
              </div>
              <TextInput id="password1" type="password" required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="confirmPassword" value="Confirm password" />
              </div>
              <TextInput id="confirmPassword" type="password" required />
            </div>
            <div className="flex items-center gap-2">
              <a href="/signin" className="text-sm underline">
                Already have an account?
              </a>
            </div>
            <Button type="submit" color="dark">
              Sign Up
            </Button>
          </form>
        </div>
      </div>
    </BaseLayouts>
  );
};

export default Signup;
