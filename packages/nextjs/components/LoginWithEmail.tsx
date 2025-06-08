"use client";

import { useLogin, usePrivy } from "@privy-io/react-auth";

export default function LoginWithEmail() {
  const { ready, user, logout } = usePrivy();

  const { login } = useLogin();

  if (!ready) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <button onClick={() => login()} className="btn btn-primary">
        Login
      </button>
      <button
        onClick={logout}
        className="text-sm bg-violet-200 hover:text-violet-900 py-2 px-4 rounded-md text-violet-700"
      >
        Logout
      </button>
      <pre className="max-w-4xl bg-slate-700 text-slate-50 font-mono p-4 text-xs sm:text-sm rounded-md mt-2">
        {JSON.stringify(user, null, 2)}
      </pre>
    </div>
  );
}
