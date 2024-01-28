
const UploadFrame = ({ menuAlignSelf, menuHeight, bGAlignSelf, fRAMEAlignSelf }) => {
  return (
    <div
      className="flex flex-col items-start justify-end pt-0 px-0 pb-0 shrink-0 mq1050:hidden"
      style={{ height: menuHeight }}
    >
      <nav
        className={`m-0 bg-light-gohan flex flex-col items-start justify-start pt-[51px] px-0 pb-[479px] gap-[40px] text-left text-base text-text font-nunito mq750:pt-[21px] mq750:pb-[202px] mq750:box-border mq1050:pt-[33px] mq1050:pb-[311px] mq1050:box-border ${bGAlignSelf}`}

      >
        <div className="self-stretch relative bg-light-gohan h-[1047px] hidden" />
        {/* Logo */}
        <div className={`h-13 flex flex-row items-start justify-start py-0 pr-14 pl-14 box-border text-5xl ${fRAMEAlignSelf}`}>
          <div className="flex flex-row items-center justify-start gap-[15px]">
            <div className="h-[42px] w-[42px] relative">
              <img
                className="absolute top-[0px] left-[0px] w-full h-full hidden z-[1]"
                alt=""
                src="/subtract.svg"
              />
              <img
                className="absolute top-[0px] left-[0px] w-full h-full z-[2]"
                loading="eager"
                alt=""
                src="/subtract.svg"
              />
            </div>
            <h2 className="m-0 h-[33px] relative text-inherit font-semibold font-inherit inline-block z-[1] mq450:text-lgi">
              Base
            </h2>
          </div>
        </div>
        {/* sidebar components */}
        <div className="w-[146px] flex flex-col items-end justify-start gap-[24px] text-darkgray-100">
          <div className="flex items-center justify-start pl-5 gap-3.5">
            <img
              className="h-6 w-6 relative object-cover z-10"
              loading="eager"
              alt=""
              src="/iconlyboldcategory@2x.png"
            />
            <div className="relative font-semibold z-10">
              Dashboard
            </div>
          </div>

          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[27px] pl-0 text-mediumslateblue-200">
            <div className="flex-1 flex flex-row items-center justify-start gap-[16px]">
              <div className="h-12 flex-1 relative">
                <img
                  className="absolute top-[13px] left-[33px] w-5 h-[22px] object-cover z-[1]"
                  loading="eager"
                  alt=""
                  src="/chart@2x.png"
                />
                <div className="absolute top-[0px] left-[0px] rounded-tl-none rounded-tr-8xs rounded-br-8xs rounded-bl-none [background:linear-gradient(90deg,_#aca9ff,_rgba(172,_169,_255,_0))] w-full h-full opacity-[0.2] z-[2]" />
              </div>
              <div className="relative font-semibold z-[1]">Upload</div>
            </div>
          </div>
        </div>
        <div className="flex px-8">
          <div className="flex gap-3.5">
            <div className="flex flex-col pt-1.5">
              <img
                className="w-6 h-4 object-cover relative z-10"
                loading="eager"
                alt=""
                src="/iconlyboldticket@2x.png"
              />
            </div>
            <div className="relative font-semibold inline-block h-3.5 opacity-50 z-10">
              Invoice
            </div>
          </div>
        </div>

        <div className="flex px-8">
          <div className="flex items-center gap-3.5">
            <img
              className="h-7 w-6 object-cover relative z-10"
              loading="eager"
              alt=""
              src="/iconlybolddocument@2x.png"
            />
            <div className="relative font-semibold inline-block h-5.5 opacity-50 z-10">
              Schedule
            </div>
          </div>
        </div>

        <div className="flex px-8">
          <div className="flex items-center gap-3.5">
            <img
              className="h-7 w-6 object-cover relative z-10"
              loading="eager"
              alt=""
              src="/calendar@2x.png"
            />
            <div className="relative font-semibold inline-block h-5.5 opacity-50 z-10">
              Calendar
            </div>
          </div>
        </div>

        <div className="flex px-8">
          <div className="flex items-start gap-3.5">
            <img
              className="h-7 w-6 object-cover relative z-10"
              loading="eager"
              alt=""
              src="/iconlyboldnotification@2x.png"
            />
            <div className="relative font-semibold inline-block h-5.5 opacity-50 z-10">
              Notification
            </div>
          </div>
        </div>

        <div className="flex px-8">
          <div className="flex items-center gap-3.5">
            <img
              className="h-7 w-6 object-cover relative z-10"
              loading="eager"
              alt=""
              src="/iconlyboldsetting@2x.png"
            />
            <div className="relative font-semibold opacity-50 z-10">
              Settings
            </div>
          </div>
        </div>

      </nav>
    </div>
  );
};

export default UploadFrame;
