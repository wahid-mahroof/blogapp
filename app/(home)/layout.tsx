import { currentUser } from "@clerk/nextjs/server";
import React from "react";

const layout = async ({ children }: { children: React.ReactNode }) => {
  const user = await currentUser();

  if (!user) return null;

  return <div>{children}</div>;
};

export default layout;
