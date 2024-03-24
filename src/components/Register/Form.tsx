"use client";
import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { fields } from "./FormFields";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { signup } from "@/redux/auth/slice";
import useRegister from "@/hooks/useRegister";

// Register Form Schema
const formSchema = z.object({
  username: z
    .string()
    .min(2, "Username must contain at least 2 character(s)")
    .max(50, "Username must contain at most 50 character(s)"),
  email: z.string().email(),
  password: z
    .string()
    .min(6, "Password must contain at least 6 character(s)")
    .max(20, "Password must contain at most 50 character(s)"),
  linkedIn: z.string(),
});

const FormComp = () => {
  const {} = useRegister();
  const dispatch = useDispatch<AppDispatch>();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      linkedIn: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    dispatch(signup(values));
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {fields.map((f, ind) => (
          <FormField
            key={ind}
            control={form.control}
            name={f.name}
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  {f.label} {f.required ? "*" : ""}
                </FormLabel>
                <FormControl>
                  <Input
                    type={(f.type as string) || "text"}
                    className="bg-white"
                    placeholder={(f.placeholder as string) || ""}
                    {...field}
                  />
                </FormControl>
                {f.description && (
                  <FormDescription>{f.description}</FormDescription>
                )}
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default FormComp;
