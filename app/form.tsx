"use client";

import { FormEvent } from "react";

export default function Form() {
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await fetch("/api/hello");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" />
      <button>submit</button>
    </form>
  );
}
