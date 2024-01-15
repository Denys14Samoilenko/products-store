"use client";
import { useForm } from "react-hook-form";
import { useAppSelector } from "@/hooks/hooks";
import { CartItem } from "../components/CartItem";
import Link from "next/link";
import { useEffect } from "react";
import emailjs from "@emailjs/browser";
import { errorMessage, successMessage } from "@/helpers/functions";
import { BackBtn } from "../components/BackBtn";

const Purchase = () => {
  const { products } = useAppSelector((state) => state.products);

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({ mode: "onTouched" });

  const onSubmit = handleSubmit((data, e) => {
    emailjs
      .sendForm(
        "service_24jvb0s",
        "template_5npjzp9",
        e?.target as HTMLFormElement,
        "hCmnQdn_gdy7eenkw"
      )
      .then((response) => {
        if (response.status === 200) {
          console.log({
            Name: data.name,
            Email: data.email,
            Phone: data.tel,
            Products: products,
          });
          successMessage("Your information confirmed! Thank you for shopping!");
          reset();
        }
      })
      .catch((err) => {
        console.log(err);
        errorMessage("Mail not send!");
      });
  });

  const handleBeforeUnload = (event: BeforeUnloadEvent) => {
    event.preventDefault();
    event.stopPropagation();
    event.returnValue = "";
  };

  useEffect(() => {
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <main className="main pt-[80px] pb-4 px-4 flex flex-col items-center min-h-[100vh]">
      <BackBtn path="/cart" message="cart" />

      <div className="flex flex-col-reverse md:flex-row justify-around items-center md:items-start gap-5 w-full">
        <div className="w-full md:w-3/4">
          {products.map((product) => (
            <Link key={product.id} href={`/${product.id}`} className="h-full">
              <CartItem product={product} />
            </Link>
          ))}
        </div>
        <form onSubmit={onSubmit} className="w-2/3 flex flex-col gap-3">
          <label className="flex flex-col gap-2" htmlFor="name">
            Name:
            <input
              id="name"
              {...register("name", { required: "Type name" })}
              type="text"
              className={`input ${
                !!errors.name ? "bg-[#f8d7da] border-[#dc3545]" : ""
              }`}
              placeholder="Name"
            />
          </label>

          <div>
            {errors?.name && (
              <p className="text-[red]">
                <span> &#9888;</span>
                {(errors?.name?.message as string) || "Error Name"}
              </p>
            )}
          </div>

          <label className="flex flex-col gap-2" htmlFor="email">
            Email:
            <input
              {...register("email", {
                required: "Type email",
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Enter valid Email",
                },
              })}
              type="email"
              className={`input ${
                !!errors.email ? "bg-[#f8d7da] border-[#dc3545]" : ""
              }`}
              id="email"
              placeholder="Example@gmail.com"
            />
          </label>

          <div>
            {errors?.email && (
              <p className="text-[red]">
                <span>&#9888;</span>
                {(errors?.email?.message as string) || "Error Email"}
              </p>
            )}
          </div>

          <label className="flex flex-col gap-2" htmlFor="tel">
            Phone:
            <input
              {...register("tel", {
                required: "Type phone",
                pattern: {
                  value: /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/,
                  message: "Try enter phone in this format: ***-***-****",
                },
              })}
              type="tel"
              className={`input ${
                !!errors.tel ? "bg-[#f8d7da] border-[#dc3545]" : ""
              }`}
              id="tel"
              placeholder="Phone format: (***)-***-****"
            />
          </label>

          <div>
            {errors?.tel && (
              <p className="text-[red]">
                <span> &#9888;</span>
                {(errors?.tel?.message as string) || "Error phone"}
              </p>
            )}
          </div>

          <input
            className={`rounded-[5px] border border-solid border-black p-[8px] w-full text-[#e5e5e5] bg-[#a142a6] hover:text-black hover:bg-[#e5e5e5] transition-colors duration-500 mt-3 ${
              !isValid
                ? "cursor-not-allowed opacity-50 bg-[#e5e5e5] text-black"
                : "cursor-pointer"
            }`}
            type="submit"
            value="Submit"
            disabled={!isValid}
          />
        </form>
      </div>
    </main>
  );
};
export default Purchase;
