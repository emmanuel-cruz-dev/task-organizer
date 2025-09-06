function Login() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-8 pb-20 text-center">
      <h1 className="text-4xl font-bold">Login</h1>
      <form className="flex flex-col gap-4">
        <label className="flex flex-col gap-1">
          <span className="text-sm font-medium">Email</span>
          <input
            type="email"
            className="w-full rounded-md border border-gray-300 p-2 text-sm"
            placeholder="Enter your email"
          />
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-sm font-medium">Password</span>
          <input
            type="password"
            className="w-full rounded-md border border-gray-300 p-2 text-sm"
            placeholder="Enter your password"
          />
        </label>
        <button
          type="submit"
          className="w-full rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-800"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
