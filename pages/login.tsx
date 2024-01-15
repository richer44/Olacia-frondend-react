"use client";
import { InputField } from "@/app/components/InputField/InputField";
import { Label } from "@/app/components/Label/Label";
import Image from "next/image";
import { ChangeEvent, FormEvent, useState } from "react";
import { LoginFormData } from "@/app/types/components/form";
import Button from "@/app/components/Button/Button";
import { Checkbox } from "@/app/components/Checkbox/Checkbox";
import Link from "next/link";
import { useRouter } from "next/router";

export default function LoginPage() {
  const router = useRouter();

  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
    rememberMe: "",
  });

  const handleGetStartedButton = () => {
    // Redirect to the pricing page
    window.open("https://olaciao.com/pricing/", "_blank");
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    // Always update the state, even if it's an auto-filled password field or an empty string
    const newValue =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));

    // Clear the corresponding error when the user starts typing
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const loginHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate the form
    const errors: any = {};
    Object.keys(formData).forEach((fieldName) => {
      const value = formData[fieldName];

      // Check if the field is a string and empty
      if (typeof value === "string" && value.trim() === "") {
        errors[fieldName] = "This field is required";
      }
    });

    // Dummy login credentials
    const dummyEmail = "admin@gmail.com";
    const dummyPassword = "12345678";

    // Check if the entered credentials match the dummy logins
    if (formData.email === dummyEmail && formData.password === dummyPassword) {
      // Redirect to the "/home" page if the credentials are correct
      router.push("/");
    } else {
      if (
        formData.email !== dummyEmail &&
        formData.password === dummyPassword
      ) {
        // Show specific error for incorrect email
        setFormErrors({
          email: "Invalid email",
          password: "",
          rememberMe: "",
        });
      } else if (
        formData.email === dummyEmail &&
        formData.password !== dummyPassword
      ) {
        // Show specific error for incorrect password
        setFormErrors({
          email: "",
          password: "Invalid password",
          rememberMe: "",
        });
      } else {
        // Show general error for incorrect credentials
        setFormErrors({
          email: "",
          password: "Invalid Credentials!",
          rememberMe: "",
        });
      }
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Section (Login Form) */}
      <div className="flex-1 flex flex-col xl:w-[500px] p-10 justify-center items-center bg-white">
        <form
          className="flex flex-col items-center w-full md:w-[500px] p-5"
          onSubmit={(e) => loginHandler(e)}
        >
          <h1 className="text-2xl font-bold mb-8">Sign In</h1>

          <div className="flex flex-col gap-2 w-full mb-5">
            <Label title="Email*" />
            <InputField
              type="email"
              name="email"
              placeholder="you@example.com"
              onChange={handleInputChange}
              value={formData.email}
            />
            {formErrors.email && (
              <span className="text-red-500 text-sm">{formErrors.email}</span>
            )}
          </div>
          <div className="flex flex-col gap-2 w-full mb-4">
            <Label title="Password*" />
            <InputField
              type="password"
              name="password"
              placeholder="Enter your password"
              onChange={handleInputChange}
              value={formData.password}
            />
            {formErrors.password && (
              <span className="text-red-500 text-sm">
                {formErrors.password}
              </span>
            )}
            <div className="grid grid-cols-1">
              <Checkbox
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleInputChange}
                label="Remember Me"
              />
            </div>
            <div className=" justify-end flex">
              <Link
                href={"/login#"}
                className="text-sm font-medium text-dull-blue opacity-8  hover:underline"
              >
                Forgot Password ?
              </Link>
            </div>
          </div>
          <div className="flex justify-center w-full">
            <Button
              text="Login"
              type="primary"
              className="py-2 px-2 my-0 w-full rounded-xl font-openSans"
            />
          </div>
          <div className="flex justify-center w-full mt-12 flex-col gap-4">
            <h2 className="font-semibold text-lg text-center">
              Don't Have Account?
            </h2>
            <Button
              text="Sign Up"
              type="green"
              className="py-2 px-2 w-full rounded-xl font-openSans my-0"
              onClick={handleGetStartedButton}
            />
          </div>
        </form>
        <div className="flex justify-center gap-10 mt-16">
          <Link
            href={"/login#"}
            className="text-sm font-medium text-dull-blue opacity-8  hover:underline"
          >
            Terms
          </Link>
          <Link
            href={"/login#"}
            className="text-sm font-medium text-dull-blue opacity-8  hover:underline"
          >
            Plans
          </Link>
          <Link
            href={"/login#"}
            className="text-sm font-medium text-dull-blue opacity-8  hover:underline"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Right Section (Image) */}
      <div className="flex-1 relative hidden xl:flex">
        <Image
          src="/images/login-background-image.png"
          alt="Login Background"
          className="object-cover 2xl:object-contain"
          layout="fill"
        />
      </div>
    </div>
  );
}
