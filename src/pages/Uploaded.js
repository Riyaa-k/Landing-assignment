import UploadFrame from "../components/UploadFrame";
import Controls from "../components/Controls";

const Uploaded = () => {
  return (
    <div className="w-full relative bg-gray-200 overflow-hidden flex flex-row items-start justify-start pt-0 pb-[199px] pr-[30px] pl-0 box-border gap-[30px] tracking-[normal] mq750:gap-[15px] mq1050:pl-[30px] mq1050:box-border">
      <UploadFrame />
      <main className="flex-1 flex flex-col items-start justify-start pt-[49px] px-0 pb-0 box-border max-w-[calc(100%_-_248px)] shrink-0 lg:pt-8 lg:box-border mq750:pt-[21px] mq750:box-border mq1050:max-w-full">
        <section className="self-stretch flex flex-col items-center justify-start gap-[104px] max-w-full text-left text-5xl text-black font-paragraph-ui-type-text-2xl-s lg:gap-[52px] mq750:gap-[26px]">
          <div className="self-stretch flex flex-row flex-wrap items-end justify-start gap-[34px] min-h-[65px] max-w-full mq750:gap-[17px]">
            <div className="flex-1 flex flex-col items-start justify-center min-w-[684px] max-w-full mq750:min-w-full">
              <div className="self-stretch flex flex-row items-center justify-start">
                <div className="flex flex-col items-start justify-start">
                  <h2 className="m-0 relative text-inherit leading-[32px] font-semibold font-inherit mq450:text-lgi mq450:leading-[26px]">
                    Upload CSV
                  </h2>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[28px]">
              <img
                className="h-[23px] w-[18px] relative"
                loading="eager"
                alt=""
                src="/vector.svg"
              />
              <img
                className="h-[30px] w-[30px] relative object-cover"
                loading="eager"
                alt=""
                src="/mask-group@2x.png"
              />
            </div>
          </div>
          <Controls propOpacity="0.4" />
          <div className="w-[1076px] flex flex-row items-start justify-start py-0 pr-0 pl-[11px] box-border max-w-full">
            <div className="flex-1 flex flex-col items-start justify-start gap-[46px] min-h-[521px] max-w-full mq750:gap-[23px]">
              <h2 className="m-0 w-[133px] relative text-inherit leading-[32px] font-semibold font-inherit flex items-center mq450:text-lgi mq450:leading-[26px]">
                Uploads
              </h2>
              <form className="m-0 self-stretch h-[443px] rounded-lg bg-light-goku flex flex-col items-center justify-start pt-3.5 pb-0 pr-[15px] pl-4 box-border gap-[13px] max-w-full mq750:h-auto">
                <div className="h-[18px] rounded-md overflow-hidden shrink-0 hidden flex-row items-center justify-start py-[3px] pr-1.5 pl-[3px] box-border">
                  <img
                    className="h-[9px] w-[9px] relative"
                    alt=""
                    src="/icon-1.svg"
                  />
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-0 px-[15px] box-border max-w-full shrink-0">
                  <div className="w-[808px] flex flex-row items-start justify-between gap-[20px] max-w-full mq750:flex-wrap">
                    <div className="relative text-sm leading-[24px] font-semibold font-paragraph-ui-type-text-2xl-s text-light-bulma text-left">
                      Sl No.
                    </div>
                    <div className="w-[145px] flex flex-col items-start justify-start">
                      <div className="w-[43px] relative text-sm leading-[24px] font-semibold font-paragraph-ui-type-text-2xl-s text-light-bulma text-left flex items-center">
                        Links
                      </div>
                    </div>
                    <div className="w-[110px] flex flex-col items-start justify-start">
                      <div className="w-[47px] relative text-sm leading-[24px] font-semibold font-paragraph-ui-type-text-2xl-s text-light-bulma text-left flex items-center">
                        Prefix
                      </div>
                    </div>
                    <div className="w-[137px] flex flex-col items-start justify-start">
                      <div className="relative text-sm leading-[24px] font-semibold font-paragraph-ui-type-text-2xl-s text-light-bulma text-left">
                        Add Tags
                      </div>
                    </div>
                    <div className="relative text-sm leading-[24px] font-semibold font-paragraph-ui-type-text-2xl-s text-light-bulma text-left">
                      Selected Tags
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[3px] box-border min-h-[85px] max-w-full shrink-0">
                  <div className="flex-1 rounded-lg bg-light-gohan flex flex-row flex-wrap items-center justify-start py-[13px] pr-[29px] pl-4 box-border gap-[71px] max-w-full mq750:gap-[18px] mq1050:gap-[35px]">
                    <div className="h-6 w-6 relative hidden">
                      <div className="absolute h-[66.67%] w-[66.67%] top-[83.33%] right-[16.67%] bottom-[-50%] left-[16.67%] rounded-10xs box-border border-[0.8px] border-solid border-light-trunks" />
                    </div>
                    <div className="flex-1 flex flex-row items-center justify-between min-w-[421px] gap-[20px] max-w-full mq750:flex-wrap mq750:min-w-full">
                      <div className="w-6 relative text-sm leading-[24px] font-paragraph-ui-type-text-2xl-s text-light-bulma text-left flex items-center shrink-0">
                        01
                      </div>
                      <div className="flex flex-col items-start justify-start py-0 pr-[11px] pl-0">
                        <a
                          className="relative text-sm [text-decoration:underline] leading-[24px] font-paragraph-ui-type-text-2xl-s text-dodgerblue text-left"
                          href="https://www.google.com"
                          target="_blank"
                        >
                          www.google.com
                        </a>
                      </div>
                      <div className="flex flex-col items-start justify-start py-0 pr-2.5 pl-0">
                        <div className="relative text-sm leading-[24px] font-paragraph-ui-type-text-2xl-s text-light-bulma text-left">
                          prefixsample
                        </div>
                      </div>
                      <div className="rounded-lg bg-light-gohan overflow-hidden flex flex-row items-start justify-start py-1 pr-[23px] pl-[22px] gap-[5px] border-[1px] border-solid border-light-beerus-beerus">
                        <div className="relative text-sm leading-[24px] font-paragraph-ui-type-text-2xl-s text-light-bulma text-left">
                          Select Tags
                        </div>
                        <div className="rounded-lg overflow-hidden flex flex-row items-center justify-start p-1">
                          <img
                            className="h-4 w-4 relative"
                            alt=""
                            src="/controls.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row flex-wrap items-start justify-start gap-[8px]">
                      <button className="cursor-pointer [border:none] py-1 pr-1 pl-2 bg-mediumslateblue-200 rounded overflow-hidden flex flex-row items-start justify-start whitespace-nowrap hover:bg-mediumslateblue-100">
                        <div className="relative text-3xs tracking-[0.5px] leading-[16px] uppercase font-semibold font-paragraph-ui-type-text-2xl-s text-light-gohan text-center">
                          TAG 1
                        </div>
                        <img
                          className="h-4 w-4 relative min-h-[16px]"
                          alt=""
                          src="/icon-2.svg"
                        />
                      </button>
                      <button className="cursor-pointer [border:none] py-1 pr-1 pl-2 bg-mediumslateblue-200 rounded overflow-hidden flex flex-row items-start justify-start whitespace-nowrap hover:bg-mediumslateblue-100">
                        <div className="relative text-3xs tracking-[0.5px] leading-[16px] uppercase font-semibold font-paragraph-ui-type-text-2xl-s text-light-gohan text-center">
                          TAG 2
                        </div>
                        <img
                          className="h-4 w-4 relative min-h-[16px]"
                          alt=""
                          src="/icon-2.svg"
                        />
                      </button>
                      <button className="cursor-pointer [border:none] py-1 pr-1 pl-2 bg-mediumslateblue-200 rounded overflow-hidden flex flex-row items-start justify-start whitespace-nowrap hover:bg-mediumslateblue-100">
                        <div className="relative text-3xs tracking-[0.5px] leading-[16px] uppercase font-semibold font-paragraph-ui-type-text-2xl-s text-light-gohan text-center">
                          TAG 3
                        </div>
                        <img
                          className="h-4 w-4 relative min-h-[16px]"
                          alt=""
                          src="/icon-2.svg"
                        />
                      </button>
                      <button className="cursor-pointer [border:none] py-1 pr-1 pl-2 bg-mediumslateblue-200 rounded overflow-hidden flex flex-row items-start justify-start whitespace-nowrap hover:bg-mediumslateblue-100">
                        <div className="relative text-3xs tracking-[0.5px] leading-[16px] uppercase font-semibold font-paragraph-ui-type-text-2xl-s text-light-gohan text-center">
                          TAG 4
                        </div>
                        <img
                          className="h-4 w-4 relative min-h-[16px]"
                          alt=""
                          src="/icon-2.svg"
                        />
                      </button>
                      <div className="rounded bg-light-piccolo-piccolo overflow-hidden hidden flex-row items-center justify-start py-1 pr-[5px] pl-2 gap-[4px] whitespace-nowrap">
                        <div className="relative text-3xs tracking-[0.5px] leading-[16px] uppercase font-semibold font-paragraph-ui-type-text-2xl-s text-light-gohan text-center">
                          your label
                        </div>
                        <img
                          className="h-4 w-4 relative"
                          alt=""
                          src="/icon-2.svg"
                        />
                      </div>
                      <div className="rounded bg-light-piccolo-piccolo overflow-hidden hidden flex-row items-center justify-start py-1 pr-[5px] pl-2 gap-[4px] whitespace-nowrap">
                        <div className="relative text-3xs tracking-[0.5px] leading-[16px] uppercase font-semibold font-paragraph-ui-type-text-2xl-s text-light-gohan text-center">
                          your label
                        </div>
                        <img
                          className="h-4 w-4 relative"
                          alt=""
                          src="/icon-2.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[54px] box-border max-w-full shrink-0">
                  <div className="flex-1 rounded-lg bg-light-gohan flex flex-row flex-wrap items-center justify-start py-[13px] pr-[29px] pl-4 box-border gap-[71px] max-w-full mq750:gap-[18px] mq1050:gap-[35px]">
                    <div className="h-6 w-6 relative hidden">
                      <div className="absolute h-[66.67%] w-[66.67%] top-[16.67%] right-[16.67%] bottom-[16.67%] left-[16.67%] rounded-10xs box-border border-[0.8px] border-solid border-light-trunks" />
                    </div>
                    <div className="flex-1 flex flex-row items-center justify-between min-w-[421px] gap-[20px] max-w-full mq750:flex-wrap mq750:min-w-full">
                      <div className="w-6 relative text-sm leading-[24px] font-paragraph-ui-type-text-2xl-s text-light-bulma text-left flex items-center shrink-0">
                        02
                      </div>
                      <div className="flex flex-col items-start justify-start py-0 pr-[11px] pl-0">
                        <a
                          className="relative text-sm [text-decoration:underline] leading-[24px] font-paragraph-ui-type-text-2xl-s text-dodgerblue text-left"
                          href="https://www.google.com"
                          target="_blank"
                        >
                          www.google.com
                        </a>
                      </div>
                      <div className="flex flex-col items-start justify-start py-0 pr-2.5 pl-0">
                        <div className="relative text-sm leading-[24px] font-paragraph-ui-type-text-2xl-s text-light-bulma text-left">
                          prefixsample
                        </div>
                      </div>
                      <div className="rounded-lg bg-light-gohan overflow-hidden flex flex-row items-start justify-start py-1 pr-[23px] pl-[22px] gap-[5px] border-[1px] border-solid border-light-beerus-beerus">
                        <div className="relative text-sm leading-[24px] font-paragraph-ui-type-text-2xl-s text-light-bulma text-left">
                          Select Tags
                        </div>
                        <div className="rounded-lg overflow-hidden flex flex-row items-center justify-start p-1">
                          <img
                            className="h-4 w-4 relative"
                            alt=""
                            src="/controls.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="w-[270px] flex flex-row flex-wrap items-start justify-start gap-[8px]">
                      <button className="cursor-pointer [border:none] py-1 pr-1 pl-2 bg-mediumslateblue-200 rounded overflow-hidden flex flex-row items-start justify-start whitespace-nowrap hover:bg-mediumslateblue-100">
                        <div className="relative text-3xs tracking-[0.5px] leading-[16px] uppercase font-semibold font-paragraph-ui-type-text-2xl-s text-light-gohan text-center">
                          TAG 1
                        </div>
                        <img
                          className="h-4 w-4 relative min-h-[16px]"
                          alt=""
                          src="/icon-2.svg"
                        />
                      </button>
                      <button className="cursor-pointer [border:none] py-1 pr-1 pl-2 bg-mediumslateblue-200 rounded overflow-hidden flex flex-row items-start justify-start whitespace-nowrap hover:bg-mediumslateblue-100">
                        <div className="relative text-3xs tracking-[0.5px] leading-[16px] uppercase font-semibold font-paragraph-ui-type-text-2xl-s text-light-gohan text-center">
                          TAG 2
                        </div>
                        <img
                          className="h-4 w-4 relative min-h-[16px]"
                          alt=""
                          src="/icon-2.svg"
                        />
                      </button>
                      <div className="rounded bg-light-piccolo-piccolo overflow-hidden hidden flex-row items-center justify-start py-1 pr-[5px] pl-2 gap-[4px] whitespace-nowrap">
                        <div className="relative text-3xs tracking-[0.5px] leading-[16px] uppercase font-semibold font-paragraph-ui-type-text-2xl-s text-light-gohan text-center">
                          your label
                        </div>
                        <img
                          className="h-4 w-4 relative"
                          alt=""
                          src="/icon-2.svg"
                        />
                      </div>
                      <div className="rounded bg-light-piccolo-piccolo overflow-hidden hidden flex-row items-center justify-start py-1 pr-[5px] pl-2 gap-[4px] whitespace-nowrap">
                        <div className="relative text-3xs tracking-[0.5px] leading-[16px] uppercase font-semibold font-paragraph-ui-type-text-2xl-s text-light-gohan text-center">
                          your label
                        </div>
                        <img
                          className="h-4 w-4 relative"
                          alt=""
                          src="/icon-2.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[294px] flex flex-row items-start justify-end shrink-0">
                  <div className="w-[150px] flex flex-col items-center justify-center relative">
                    <div className="w-[1034px] my-0 mx-[!important] absolute top-[-51px] left-[-514px] rounded-lg bg-light-gohan flex flex-row items-center justify-start py-[13px] pr-[29px] pl-4 box-border gap-[71px]">
                      <div className="h-6 w-6 relative hidden">
                        <div className="absolute h-[66.67%] w-[66.67%] top-[16.67%] right-[16.67%] bottom-[16.67%] left-[16.67%] rounded-10xs box-border border-[0.8px] border-solid border-light-trunks" />
                      </div>
                      <div className="flex-1 flex flex-row items-center justify-between gap-[20px] max-w-full mq750:flex-wrap">
                        <div className="w-6 relative text-sm leading-[24px] font-paragraph-ui-type-text-2xl-s text-light-bulma text-left flex items-center shrink-0">
                          03
                        </div>
                        <div className="flex flex-col items-start justify-start py-0 pr-[11px] pl-0">
                          <a
                            className="relative text-sm [text-decoration:underline] leading-[24px] font-paragraph-ui-type-text-2xl-s text-dodgerblue text-left"
                            href="https://www.google.com"
                            target="_blank"
                          >
                            www.google.com
                          </a>
                        </div>
                        <div className="flex flex-col items-start justify-start py-0 pr-2.5 pl-0">
                          <div className="relative text-sm leading-[24px] font-paragraph-ui-type-text-2xl-s text-light-bulma text-left">
                            prefixsample
                          </div>
                        </div>
                        <div className="rounded-lg bg-light-gohan overflow-hidden flex flex-row items-start justify-start py-1 pr-[23px] pl-[22px] gap-[5px] border-[1px] border-solid border-light-beerus-beerus">
                          <div className="relative text-sm leading-[24px] font-paragraph-ui-type-text-2xl-s text-light-bulma text-left">
                            Select Tags
                          </div>
                          <div className="rounded-lg overflow-hidden flex flex-row items-center justify-start p-1">
                            <img
                              className="h-4 w-4 relative"
                              alt=""
                              src="/controls.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row flex-wrap items-start justify-start gap-[8px]">
                        <button className="cursor-pointer [border:none] py-1 pr-1 pl-2 bg-mediumslateblue-200 rounded overflow-hidden flex flex-row items-start justify-start whitespace-nowrap hover:bg-mediumslateblue-100">
                          <div className="relative text-3xs tracking-[0.5px] leading-[16px] uppercase font-semibold font-paragraph-ui-type-text-2xl-s text-light-gohan text-center">
                            TAG 1
                          </div>
                          <img
                            className="h-4 w-4 relative min-h-[16px]"
                            alt=""
                            src="/icon-2.svg"
                          />
                        </button>
                        <button className="cursor-pointer [border:none] py-1 pr-1 pl-2 bg-mediumslateblue-200 rounded overflow-hidden flex flex-row items-start justify-start whitespace-nowrap hover:bg-mediumslateblue-100">
                          <div className="relative text-3xs tracking-[0.5px] leading-[16px] uppercase font-semibold font-paragraph-ui-type-text-2xl-s text-light-gohan text-center">
                            TAG 2
                          </div>
                          <img
                            className="h-4 w-4 relative min-h-[16px]"
                            alt=""
                            src="/icon-2.svg"
                          />
                        </button>
                        <button className="cursor-pointer [border:none] py-1 pr-1 pl-2 bg-mediumslateblue-200 rounded overflow-hidden flex flex-row items-start justify-start whitespace-nowrap hover:bg-mediumslateblue-100">
                          <div className="relative text-3xs tracking-[0.5px] leading-[16px] uppercase font-semibold font-paragraph-ui-type-text-2xl-s text-light-gohan text-center">
                            TAG 3
                          </div>
                          <img
                            className="h-4 w-4 relative min-h-[16px]"
                            alt=""
                            src="/icon-2.svg"
                          />
                        </button>
                        <button className="cursor-pointer [border:none] py-1 pr-1 pl-2 bg-mediumslateblue-200 rounded overflow-hidden flex flex-row items-start justify-start whitespace-nowrap hover:bg-mediumslateblue-100">
                          <div className="relative text-3xs tracking-[0.5px] leading-[16px] uppercase font-semibold font-paragraph-ui-type-text-2xl-s text-light-gohan text-center">
                            TAG 4
                          </div>
                          <img
                            className="h-4 w-4 relative min-h-[16px]"
                            alt=""
                            src="/icon-2.svg"
                          />
                        </button>
                        <div className="rounded bg-light-piccolo-piccolo overflow-hidden hidden flex-row items-center justify-start py-1 pr-[5px] pl-2 gap-[4px] whitespace-nowrap">
                          <div className="relative text-3xs tracking-[0.5px] leading-[16px] uppercase font-semibold font-paragraph-ui-type-text-2xl-s text-light-gohan text-center">
                            your label
                          </div>
                          <img
                            className="h-4 w-4 relative"
                            alt=""
                            src="/icon-2.svg"
                          />
                        </div>
                        <div className="rounded bg-light-piccolo-piccolo overflow-hidden hidden flex-row items-center justify-start py-1 pr-[5px] pl-2 gap-[4px] whitespace-nowrap">
                          <div className="relative text-3xs tracking-[0.5px] leading-[16px] uppercase font-semibold font-paragraph-ui-type-text-2xl-s text-light-gohan text-center">
                            your label
                          </div>
                          <img
                            className="h-4 w-4 relative"
                            alt=""
                            src="/icon-2.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="w-[1034px] my-0 mx-[!important] absolute top-[23px] left-[-514px] rounded-lg bg-light-gohan flex flex-row items-center justify-start py-[13px] pr-[29px] pl-4 box-border gap-[71px]">
                      <div className="h-6 w-6 relative hidden">
                        <div className="absolute h-[66.67%] w-[66.67%] top-[16.67%] right-[16.67%] bottom-[16.67%] left-[16.67%] rounded-10xs box-border border-[0.8px] border-solid border-light-trunks" />
                      </div>
                      <div className="flex-1 flex flex-row items-center justify-between gap-[20px] max-w-full mq750:flex-wrap">
                        <div className="w-6 relative text-sm leading-[24px] font-paragraph-ui-type-text-2xl-s text-light-bulma text-left flex items-center shrink-0">
                          04
                        </div>
                        <div className="flex flex-col items-start justify-start py-0 pr-[11px] pl-0">
                          <a
                            className="relative text-sm [text-decoration:underline] leading-[24px] font-paragraph-ui-type-text-2xl-s text-dodgerblue text-left"
                            href="https://www.google.com"
                            target="_blank"
                          >
                            www.google.com
                          </a>
                        </div>
                        <div className="flex flex-col items-start justify-start py-0 pr-2.5 pl-0">
                          <div className="relative text-sm leading-[24px] font-paragraph-ui-type-text-2xl-s text-light-bulma text-left">
                            prefixsample
                          </div>
                        </div>
                        <div className="rounded-lg bg-light-gohan overflow-hidden flex flex-row items-start justify-start py-1 pr-[23px] pl-[22px] gap-[5px] border-[1px] border-solid border-light-beerus-beerus">
                          <div className="relative text-sm leading-[24px] font-paragraph-ui-type-text-2xl-s text-light-bulma text-left">
                            Select Tags
                          </div>
                          <input
                            className="m-0 h-6 w-6 rounded-lg overflow-hidden shrink-0"
                            type="checkbox"
                          />
                        </div>
                      </div>
                      <div className="w-[270px] flex flex-row flex-wrap items-center justify-start gap-[8px]">
                        <button className="cursor-pointer [border:none] py-1 pr-1 pl-2 bg-mediumslateblue-200 rounded overflow-hidden flex flex-row items-start justify-start whitespace-nowrap hover:bg-mediumslateblue-100">
                          <div className="relative text-3xs tracking-[0.5px] leading-[16px] uppercase font-semibold font-paragraph-ui-type-text-2xl-s text-light-gohan text-center">
                            TAG 1
                          </div>
                          <img
                            className="h-4 w-4 relative min-h-[16px]"
                            alt=""
                            src="/icon-2.svg"
                          />
                        </button>
                        <div className="rounded bg-light-piccolo-piccolo overflow-hidden hidden flex-row items-center justify-start py-1 pr-[5px] pl-2 gap-[4px] whitespace-nowrap">
                          <div className="relative text-3xs tracking-[0.5px] leading-[16px] uppercase font-semibold font-paragraph-ui-type-text-2xl-s text-light-gohan text-center">
                            your label
                          </div>
                          <img
                            className="h-4 w-4 relative"
                            alt=""
                            src="/icon-2.svg"
                          />
                        </div>
                        <div className="rounded bg-light-piccolo-piccolo overflow-hidden hidden flex-row items-center justify-start py-1 pr-[5px] pl-2 gap-[4px] whitespace-nowrap">
                          <div className="relative text-3xs tracking-[0.5px] leading-[16px] uppercase font-semibold font-paragraph-ui-type-text-2xl-s text-light-gohan text-center">
                            your label
                          </div>
                          <img
                            className="h-4 w-4 relative"
                            alt=""
                            src="/icon-2.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="w-[1034px] my-0 mx-[!important] absolute bottom-[50px] left-[-514px] rounded-lg bg-light-gohan flex flex-row items-center justify-start py-[13px] pr-[29px] pl-4 box-border gap-[71px]">
                      <div className="h-6 w-6 relative hidden">
                        <div className="absolute h-[66.67%] w-[66.67%] top-[16.67%] right-[16.67%] bottom-[16.67%] left-[16.67%] rounded-10xs box-border border-[0.8px] border-solid border-light-trunks" />
                      </div>
                      <div className="flex-1 flex flex-row items-center justify-between gap-[20px] max-w-full mq750:flex-wrap">
                        <div className="w-6 relative text-sm leading-[24px] font-paragraph-ui-type-text-2xl-s text-light-bulma text-left flex items-center shrink-0">
                          05
                        </div>
                        <div className="flex flex-col items-start justify-start py-0 pr-[11px] pl-0">
                          <a
                            className="relative text-sm [text-decoration:underline] leading-[24px] font-paragraph-ui-type-text-2xl-s text-dodgerblue text-left"
                            href="https://www.google.com"
                            target="_blank"
                          >
                            www.google.com
                          </a>
                        </div>
                        <div className="flex flex-col items-start justify-start py-0 pr-2.5 pl-0">
                          <div className="relative text-sm leading-[24px] font-paragraph-ui-type-text-2xl-s text-light-bulma text-left">
                            prefixsample
                          </div>
                        </div>
                        <div className="rounded-lg bg-light-gohan overflow-hidden flex flex-row items-start justify-start py-1 pr-[23px] pl-[22px] gap-[5px] border-[1px] border-solid border-light-beerus-beerus">
                          <div className="relative text-sm leading-[24px] font-paragraph-ui-type-text-2xl-s text-light-bulma text-left">
                            Select Tags
                          </div>
                          <div className="rounded-lg overflow-hidden flex flex-row items-center justify-start p-1">
                            <img
                              className="h-4 w-4 relative"
                              alt=""
                              src="/controls.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="w-[270px] flex flex-row flex-wrap items-start justify-start gap-[8px]">
                        <button className="cursor-pointer [border:none] py-1 pr-1 pl-2 bg-mediumslateblue-200 rounded overflow-hidden flex flex-row items-start justify-start whitespace-nowrap hover:bg-mediumslateblue-100">
                          <div className="relative text-3xs tracking-[0.5px] leading-[16px] uppercase font-semibold font-paragraph-ui-type-text-2xl-s text-light-gohan text-center">
                            TAG 1
                          </div>
                          <img
                            className="h-4 w-4 relative min-h-[16px]"
                            alt=""
                            src="/icon-2.svg"
                          />
                        </button>
                        <button className="cursor-pointer [border:none] py-1 pr-1 pl-2 bg-mediumslateblue-200 rounded overflow-hidden flex flex-row items-start justify-start whitespace-nowrap hover:bg-mediumslateblue-100">
                          <div className="relative text-3xs tracking-[0.5px] leading-[16px] uppercase font-semibold font-paragraph-ui-type-text-2xl-s text-light-gohan text-center">
                            TAG 2
                          </div>
                          <img
                            className="h-4 w-4 relative min-h-[16px]"
                            alt=""
                            src="/icon-2.svg"
                          />
                        </button>
                        <button className="cursor-pointer [border:none] py-1 pr-1 pl-2 bg-mediumslateblue-200 rounded overflow-hidden flex flex-row items-start justify-start whitespace-nowrap hover:bg-mediumslateblue-100">
                          <div className="relative text-3xs tracking-[0.5px] leading-[16px] uppercase font-semibold font-paragraph-ui-type-text-2xl-s text-light-gohan text-center">
                            TAG 3
                          </div>
                          <img
                            className="h-4 w-4 relative min-h-[16px]"
                            alt=""
                            src="/icon-2.svg"
                          />
                        </button>
                        <div className="rounded bg-light-piccolo-piccolo overflow-hidden hidden flex-row items-center justify-start py-1 pr-[5px] pl-2 gap-[4px] whitespace-nowrap">
                          <div className="relative text-3xs tracking-[0.5px] leading-[16px] uppercase font-semibold font-paragraph-ui-type-text-2xl-s text-light-gohan text-center">
                            your label
                          </div>
                          <img
                            className="h-4 w-4 relative"
                            alt=""
                            src="/icon-2.svg"
                          />
                        </div>
                        <div className="rounded bg-light-piccolo-piccolo overflow-hidden hidden flex-row items-center justify-start py-1 pr-[5px] pl-2 gap-[4px] whitespace-nowrap">
                          <div className="relative text-3xs tracking-[0.5px] leading-[16px] uppercase font-semibold font-paragraph-ui-type-text-2xl-s text-light-gohan text-center">
                            your label
                          </div>
                          <img
                            className="h-4 w-4 relative"
                            alt=""
                            src="/icon-2.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch h-[205px] rounded-xl bg-light-gohan shadow-[0px_8px_24px_-6px_rgba(0,_0,_0,_0.16),_0px_0px_1px_rgba(0,_0,_0,_0.4)] overflow-y-auto shrink-0 flex flex-col items-center justify-start pt-2 px-0 pb-0 box-border gap-[4px] z-[1]">
                      <div className="w-[134px] rounded-lg bg-light-goku overflow-hidden shrink-0 flex flex-row items-center justify-center p-2 box-border whitespace-nowrap">
                        <div className="flex-1 relative text-sm leading-[24px] font-paragraph-ui-type-text-2xl-s text-light-bulma text-left">
                          Tag 1
                        </div>
                      </div>
                      <div className="w-[134px] rounded-lg bg-light-gohan overflow-hidden shrink-0 flex flex-row items-center justify-start py-2 pr-10 pl-2 box-border gap-[8px]">
                        <div className="flex-1 relative text-sm leading-[24px] font-paragraph-ui-type-text-2xl-s text-light-bulma text-left">
                          Tag 2
                        </div>
                        <div className="h-6 w-6 relative hidden" />
                      </div>
                      <div className="w-[134px] rounded-lg bg-light-gohan overflow-hidden shrink-0 flex flex-row items-center justify-center p-2 box-border whitespace-nowrap">
                        <div className="flex-1 relative text-sm leading-[24px] font-paragraph-ui-type-text-2xl-s text-light-bulma text-left">
                          Tag 3
                        </div>
                      </div>
                      <div className="w-[134px] rounded-lg bg-light-gohan overflow-hidden shrink-0 flex flex-row items-center justify-center p-2 box-border whitespace-nowrap">
                        <div className="flex-1 relative text-sm leading-[24px] font-paragraph-ui-type-text-2xl-s text-light-bulma text-left">
                          Tag 4
                        </div>
                      </div>
                      <div className="w-[134px] rounded-lg bg-light-gohan overflow-hidden shrink-0 flex flex-row items-center justify-center p-2 box-border whitespace-nowrap">
                        <div className="flex-1 relative text-sm leading-[24px] font-paragraph-ui-type-text-2xl-s text-light-bulma text-left">
                          Tag 5
                        </div>
                      </div>
                      <button className="cursor-pointer [border:none] p-2 bg-light-gohan w-[134px] h-10 rounded-lg overflow-hidden shrink-0 flex flex-row items-center justify-center box-border whitespace-nowrap hover:bg-gainsboro">
                        <div className="self-stretch flex-1 relative text-sm leading-[24px] font-paragraph-ui-type-text-2xl-s text-light-bulma text-left flex items-center">
                          Tag 6
                        </div>
                      </button>
                      <button className="cursor-pointer [border:none] p-2 bg-light-gohan w-[134px] h-10 rounded-lg overflow-hidden shrink-0 flex flex-row items-center justify-center box-border whitespace-nowrap hover:bg-gainsboro">
                        <div className="self-stretch flex-1 relative text-sm leading-[24px] font-paragraph-ui-type-text-2xl-s text-light-bulma text-left flex items-center">
                          Tag 7
                        </div>
                      </button>
                      <div className="w-[134px] h-10 rounded-lg bg-light-gohan overflow-hidden shrink-0 flex flex-row items-center justify-center p-2 box-border whitespace-nowrap">
                        <div className="self-stretch flex-1 relative text-sm leading-[24px] font-paragraph-ui-type-text-2xl-s text-light-bulma text-left flex items-center">
                          Tag 8
                        </div>
                      </div>
                      <div className="w-[134px] h-10 rounded-lg bg-light-gohan overflow-hidden shrink-0 flex flex-row items-center justify-center p-2 box-border whitespace-nowrap">
                        <div className="self-stretch flex-1 relative text-sm leading-[24px] font-paragraph-ui-type-text-2xl-s text-light-bulma text-left flex items-center">
                          Tag 9
                        </div>
                      </div>
                      <div className="w-[134px] h-10 rounded-lg bg-light-gohan overflow-hidden shrink-0 flex flex-row items-center justify-center p-2 box-border whitespace-nowrap">
                        <div className="self-stretch flex-1 relative text-sm leading-[24px] font-paragraph-ui-type-text-2xl-s text-light-bulma text-left flex items-center">
                          Tag 10
                        </div>
                      </div>
                      <div className="w-[284px] rounded-lg bg-light-gohan h-10 overflow-hidden shrink-0 hidden flex-row items-center justify-start p-2 box-border gap-[8px]">
                        <div className="self-stretch flex-1 relative text-sm leading-[24px] font-avertastd-regular text-light-bulma text-left flex items-center">
                          Single line item
                        </div>
                        <div className="h-6 w-6 relative">
                          <div className="absolute h-[66.67%] w-[66.67%] top-[16.67%] right-[16.67%] bottom-[16.67%] left-[16.67%] rounded-[75px] box-border border-[0.8px] border-solid border-light-trunks" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Uploaded;
