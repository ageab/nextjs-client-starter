import SignUpForm from "@/features/auth/components/SignUpForm";

const SignIn = () => {
  return (
    <div className="flex min-h-screen w-full">
      <div className="w-1/2 bg-teal-800"></div>
      <div className="w-1/2 bg-white h-full relative">
        <div className="h-screen flex flex-col items-center justify-center">
          <SignUpForm
            defaultValues={{
              name: "",
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
