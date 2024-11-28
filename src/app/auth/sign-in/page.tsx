import SignInForm from "@/features/auth/components/SignInForm";

const SignIn = () => {
  return (
    <div className="flex min-h-screen w-full">
      <div className="w-1/2 bg-teal-800"></div>
      <div className="w-1/2 bg-white h-full relative">
        <div className="h-screen flex flex-col items-center justify-center">
          <SignInForm
            defaultValues={{
              email: "",
              password: "",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
