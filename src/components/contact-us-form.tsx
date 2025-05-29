"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";

const requestSchema = z.object({
  firstName: z.string().min(3, {
    message: "Name must contain at least 3 characters.",
  }),
  lastName: z.string().min(3, {
    message: "Name must contain at least 3 characters.",
  }),
  email: z.string().email({
    message: "Enter a valid email address.",
  }),
  message: z.string().optional(),
});

type request = z.infer<typeof requestSchema>;

const ContactUsForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<request>({
    resolver: zodResolver(requestSchema),
  });

  const onSubmit = async (formData: request) => {
    try {
      console.log("FormData", formData);
      const response = await fetch("/api/contact-us", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const responseJSON = await response.json();
      if (responseJSON.status === 200) {
        toast.success("Form Submitted!");
        reset();
      } else {
        toast.error(
          "An error has occured while submitting the request. Please try again later."
        );
      }
    } catch (error) {
      console.log("Error parsing form values");
      toast.warning("Please fill all required form fields.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid md:grid-cols-2 gap-6"
    >
      <div className="relative">
        <input
          {...register("firstName")}
          disabled={isSubmitting}
          type="text"
          placeholder="First Name"
          className={`w-full p-4 rounded-lg bg-foreground bg-opacity-20 border ${
            errors.firstName ? "border-red-500" : "border-caption"
          } text-title placeholder-subtitle focus:outline-none focus:border-caption transition-all duration-300 disabled:opacity-60`}
        />
        {errors.firstName && (
          <div className="absolute -top-6 left-0 flex items-center gap-1">
            <span className="text-red-500">*</span>
            <span className="text-red-500 text-sm">
              {errors.firstName.message}
            </span>
          </div>
        )}
      </div>

      <div className="relative">
        <input
          {...register("lastName")}
          disabled={isSubmitting}
          type="text"
          placeholder="Last Name"
          className={`w-full p-4 rounded-lg bg-foreground bg-opacity-20 border ${
            errors.lastName ? "border-red-500" : "border-caption"
          } text-title placeholder-subtitle focus:outline-none focus:border-caption transition-all duration-300 disabled:opacity-60`}
        />
        {errors.lastName && (
          <div className="absolute -top-6 left-0 flex items-center gap-1">
            <span className="text-red-500">*</span>
            <span className="text-red-500 text-sm">
              {errors.lastName.message}
            </span>
          </div>
        )}
      </div>

      <div className="md:col-span-2 relative">
        <input
          {...register("email")}
          disabled={isSubmitting}
          type="email"
          placeholder="Email"
          className={`w-full p-4 rounded-lg bg-foreground bg-opacity-20 border ${
            errors.email ? "border-red-500" : "border-caption"
          } text-title placeholder-subtitle focus:outline-none focus:border-caption transition-all duration-300 disabled:opacity-60`}
        />
        {errors.email && (
          <div className="absolute -top-6 left-0 flex items-center gap-1">
            <span className="text-red-500">*</span>
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          </div>
        )}
      </div>

      <div className="md:col-span-2 relative">
        <textarea
          {...register("message")}
          disabled={isSubmitting}
          placeholder="Your Message"
          rows={4}
          className={`w-full p-4 rounded-lg bg-foreground bg-opacity-20 border ${
            errors.message ? "border-red-500" : "border-caption"
          } text-title placeholder-subtitle focus:outline-none focus:border-caption transition-all duration-300 resize-none disabled:opacity-60`}
        />
        {errors.message && (
          <div className="absolute -top-6 left-0 flex items-center gap-1">
            <span className="text-red-500">*</span>
            <span className="text-red-500 text-sm">
              {errors.message.message}
            </span>
          </div>
        )}
      </div>

      <div className="md:col-span-2 text-center">
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-8 py-4 bg-caption text-foreground rounded-lg font-semibold text-lg hover:bg-opacity-90 shadow-lg hover:cursor-pointer disabled:opacity-60"
        >
          {isSubmitting ? "Sending..." : "Send Message 🚀"}
        </button>
      </div>
    </form>
  );
};

export default ContactUsForm;
