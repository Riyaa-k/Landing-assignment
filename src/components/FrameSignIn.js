const FrameSignIn = () => {
  return (
    <div className="FrameSignIn  w-[720px] flex flex-col items-center justify-start pt-[463px] pb-[68px] pr-[161px] pl-5 box-border relative gap-[357px] min-w-[720px] max-w-full text-left text-53xl text-light-gohan font-montserrat lg:flex-1 mq1050:pt-[301px] mq1050:pb-11 mq1050:box-border mq1050:min-w-full mq450:pt-[196px] mq450:pb-[29px] mq450:box-border mq750:gap-[178px] mq750:pr-20 mq750:box-border">
      <div className="flex flex-row items-start justify-start py-0 pr-0 pl-[19px] sm:h-[2px]">
        <h1 className="h1 m-0 h-[88px] relative text-inherit font-bold font-inherit inline-block z-[2] mq1050:text-39xl mq450:text-24xl ">
          BASE
        </h1>
      </div>
      <div className=" social w-[299px] flex flex-row items-center justify-between py-0 pr-px pl-0 box-border gap-[20px] z-[2]">
        <img
          className="h-11 w-11 relative object-cover"
          loading="eager"
          alt=""
          src="/vector1@2x.png"
        />
        <img
          className="h-[41px] w-[42px] relative object-cover"
          loading="eager"
          alt=""
          src="/vector-1@2x.png"
        />
        <div className="h-12 w-12 relative overflow-hidden shrink-0">
          <img
            className="absolute h-[74.58%] w-9/12 top-[12.5%] right-[12.5%] bottom-[12.92%] left-[12.5%] max-w-full overflow-hidden max-h-full"
            loading="eager"
            alt=""
            src="/vector-2.svg"
          />
        </div>
        <div className="h-12 w-[50px] relative overflow-hidden shrink-0">
          <img
            className="absolute h-[8.96%] w-[23.8%] top-[46.67%] right-[38.4%] bottom-[44.37%] left-[37.8%] max-w-full overflow-hidden max-h-full"
            loading="eager"
            alt=""
            src="/vector-3.svg"
          />
          <img
            className="absolute h-[81.25%] w-[71%] top-[12.5%] right-[14.6%] bottom-[6.25%] left-[14.4%] max-w-full overflow-hidden max-h-full z-[1]"
            alt=""
            src="/vector-4.svg"
          />
        </div>
      </div>
      <div className="left w-full h-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] ">
        <img
          className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover z-[1]"
          alt=""
          src="/left-side@2x.png"
        />
        <div className="logo absolute top-[54.3px] left-[61px] rounded-[50%] bg-gray-100 w-[80.2px] h-[80.2px] z-[2]" />
        <img
          className=" logo-img absolute top-[83.7px] left-[59px] w-[82.8px] h-[22px] z-[3]"
          loading="eager"
          alt=""
          src="/vector-7.svg"
        />
      </div>
    </div>
  );
};

export default FrameSignIn;


