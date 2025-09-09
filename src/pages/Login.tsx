import Logo from "@/assets/icons/Logo";
import LoginForm from "@/components/modules/Authentication/LoginForm";
import { Link } from "react-router";
// import backgroundImage from "../assets/images/digital-wallet.jpg"

export default function Login() {

  // const backgroundStyle ={
  //       backgroundImage: `url(${backgroundImage})`,
  //       backgroundRepeat: "no-repeat",
  //       backgroundSize: "cover",
  //       filter: 'blur()',
  //     }

  return (
    <div className="grid min-h-svh">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link to="/" className="flex items-center gap-2 font-medium">
            <Logo />
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
}