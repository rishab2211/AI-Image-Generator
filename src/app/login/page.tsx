import Logo from "@/components/ui/logo";
import AuthImage from "../../../public/Auth-image.jpg";
import Image from "next/image";
import AuthForm from "@/components/authentication/AuthForm";

const AuthenticationPage = () => {
  return (
    <div className="h-screen grid grid-cols-2 relative ">
      <div className="relative hidden md:inline-block w-fullflex flex-col bg-muted  text-primary-foreground">
        <div className=" w-full h-[30%]  bg-gradient-to-t from-transparent to-black/50 absolute top-0 " />
        <div className=" w-full h-[30%]  bg-gradient-to-b from-transparent to-black/50 absolute bottom-0 " />
        <Image
          src={AuthImage}
          alt="login image"
          className="w-full h-full object-cover "
        ></Image>
        <div className="text absolute p-5  flex items-center">
          <Logo />
        </div>
      </div>
      <div className=" col-span-2 md:col-span-1 relative flex flex-col items-center justify-center p-8 h-full   ">
        <AuthForm />
      </div>
    </div>
  );
};

export default AuthenticationPage;
