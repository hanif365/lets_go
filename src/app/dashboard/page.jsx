"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Dashboard = () => {
  const session = useSession();
  console.log(session);
  const router = useRouter();
  const [isDark, setIsDark] = useState(false);

  if (session.status === "loading") {
    return <p>Loading...</p>;
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

        <div class="bg-[#bada55] dark:bg-[yellow] text-[#fff] text-[42px] after:content-['Festivus']">
          Hello
        </div>
      </div>
      </div>
    );
  }
};

export default Dashboard;
