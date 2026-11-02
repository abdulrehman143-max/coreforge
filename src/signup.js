import { useForm } from "react-hook-form";

function SignUpForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const password = watch("password");

  const onSubmit = (data) => {
    console.log(data);
  };

  const inputClass = (hasError) =>
    `w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition focus:ring-2 ${
      hasError
        ? "border-red-500 focus:ring-red-200"
        : "border-gray-300 focus:border-indigo-500 focus:ring-indigo-200"
    }`;

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md space-y-5 rounded-2xl bg-white p-8 shadow-lg"
      >
        <h2 className="text-center text-2xl font-bold text-gray-800">
          Sign Up Form
        </h2>

        {/* Email */}
        <div>
          <input
            type="email"
            placeholder="Enter email"
            className={inputClass(errors.email)}
            {...register("email", {
              required: "Email is required"
            })}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <input
            type="password"
            placeholder="Enter password"
            className={inputClass(errors.password)}
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Minimum 8 characters required"
              }
            })}
          />
          {errors.password && (
            <p className="mt-1 text-sm text-red-500">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Confirm Password */}
        <div>
          <input
            type="password"
            placeholder="Confirm password"
            className={inputClass(errors.confirm)}
            {...register("confirm", {
              required: "Please confirm your password",
              validate: (value) =>
                value === password || "Passwords do not match"
            })}
          />
          {errors.confirm && (
            <p className="mt-1 text-sm text-red-500">
              {errors.confirm.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-indigo-600 py-2.5 font-semibold text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-300"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUpForm;