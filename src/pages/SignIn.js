import FrameSignIn from "../components/FrameSignIn";
import FrameRegistration from "../components/FrameRegistration";

const SignIn = () => {
  return (
    <div className="SignIn w-full relative bg-ghostwhite overflow-hidden flex flex-row items-center justify-start gap-[94px] tracking-[normal] lg:flex-wrap mq450:gap-[23px] mq750:gap-[47px]">
      <div className="h-[1024px] w-[1440px] relative bg-ghostwhite hidden max-w-full" />
      <FrameSignIn />
      <img className="h-0 w-0 relative hidden" alt="" />
      <FrameRegistration />
    </div>
  );
};

export default SignIn;
