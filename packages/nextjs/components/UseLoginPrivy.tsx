"use client";

import { useLogin, usePrivy } from "@privy-io/react-auth";

export default function UseLoginPrivy() {
  const { ready, user, logout } = usePrivy();

  const { login } = useLogin();

  if (!ready) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center gap-2 bg-base-100 p-4 m-8 rounded-lg min-w-96">
      <h2 className="text-lg font-bold">Privy</h2>
      <div className="flex flex-col md:flex-row gap-4">
        <button onClick={() => login()} className="btn btn-xs btn-primary">
          Login
        </button>
        <button onClick={logout} className="btn btn-xs btn-primary">
          Logout
        </button>
      </div>
      {user && (
        <pre className="max-w-4xl bg-slate-700 text-slate-50 font-mono p-4 text-xs sm:text-sm rounded-md mt-2">
          {JSON.stringify(user, null, 2)}
        </pre>
      )}
    </div>
  );
}
