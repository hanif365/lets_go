"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Dashboard = () => {
  const session = useSession();
  // console.log(session);
  const router = useRouter();
  const [isDark, setIsDark] = useState(false);

  if (session.status === "loading") {
    return (
      <div className="mt-40">
        <Image
          src="/loading.gif"
          alt="Loading Image"
          width={30}
          height={30}
          className="mx-auto"
        />
      </div>
    );
  }

  if (session.status === "unauthenticated") {
    router?.push("/login");
  }

  if (session.status === "authenticated") {
    return (
      <div className="m-40">
        <p className="text-red-500">Dashboard: Comming soon</p>
      </div>
    );
  }
};

export default Dashboard;
