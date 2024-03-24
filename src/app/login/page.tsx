import Container from "@/components/Common/Container";
import Logo from "@/components/Common/Logo";
import Form from "@/components/Login/Form";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <main className="py-12">
      <Container>
        <section className="flex justify-center mb-6">
          <Logo />
        </section>
        <section className="mx-auto max-w-[500px] p-4 rounded-md bg-secondary">
          <h2 className="font-semibold text-xl mb-6">Login</h2>
          <Form />
          <Link
            href={"/register"}
            className="text-sm text-blue-600 hover:underline w-fit mt-6 block"
          >
            I don&apos;t have account!
          </Link>
        </section>
      </Container>
    </main>
  );
};

export default page;
