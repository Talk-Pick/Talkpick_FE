import LoginSection from "../widgets/login";

const Login = () => {
  return (
    <div className="bg-white flex flex-col justify-center min-h-screen mx-5">
      <div className="flex-4 flex justify-center items-center"><img src="/images/login.png" alt="logo" /></div>
      <LoginSection className="flex-1" />
    </div>
  );
};

export default Login;
