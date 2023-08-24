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
        <div className={isDark ? "dark" : ""}>
          <p className="bg-red-500 dark:bg-yellow-500 dark:text-white">
            This is dashboard
          </p>
          <button onClick={() => setIsDark((prev) => !prev)}>
            {isDark ? "Light" : "Dark"}
          </button>

          <div className="bg-[#bada55] dark:bg-[yellow] text-[#fff] text-[42px] after:content-['Festivus']">
            Hello
          </div>
        </div>
      </div>
    );
  }
};

export default Dashboard;
