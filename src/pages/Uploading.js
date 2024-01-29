import { useCallback } from "react";
import UploadFrame from "../components/UploadFrame";
import { useNavigate } from "react-router-dom";

const Uploading = () => {
  const navigate = useNavigate();

  const onSizemdIconLeftTypePrimaClick = useCallback(() => {
    navigate("/uploaded");
  }, [navigate]);

  return (
    <div className="uploading w-full relative bg-gray-200 overflow-hidden flex flex-row items-start justify-start py-0 pr-[30px] pl-0 box-border gap-[30px] tracking-[normal] mq750:gap-[15px] mq1050:pl-[30px] mq1050:box-border">
      <UploadFrame
        menuAlignSelf="unset"
        menuHeight="unset"
        bGAlignSelf="unset"
        fRAMEAlignSelf="unset"
      />

     <section className="flex-1 flex flex-col items-start pt-12 px-0 pb-0 max-w-[calc(100%_-_248px)] text-5xl text-black mq750:pt-2 mq1050:max-w-full font-paragraph-ui-type-text-2xl-s">
  
        <div className="self-stretch flex flex-col items-center justify-start gap-[137px] max-w-full mq750:gap-[34px] mq450:gap-[17px] mq1125:gap-[68px]">
          <div className="self-stretch flex flex-row flex-wrap items-end justify-start gap-[34px] max-w-full mq750:gap-[17px]">
            <div className="flex-1 flex flex-col items-start justify-center min-w-[684px] max-w-full mq750:min-w-full">
              <div className="self-stretch flex flex-row items-center justify-start">
                <div className="flex flex-col items-start justify-start">
                  <h3 className="m-0 relative text-inherit leading-[32px] font-semibold font-inherit mq450:text-lgi mq450:leading-[26px]">
                    Upload CSV
                  </h3>
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
          <div className="w-[622px] flex flex-row items-start justify-start py-0 pr-[26px] pl-0 box-border max-w-full text-center text-base text-light-trunks">
            <div className="flex-1 rounded-lg bg-light-gohan flex flex-col items-center justify-start p-4 box-border gap-[21px] max-w-full">
              <div className="self-stretch rounded-lg box-border flex flex-col items-center justify-start pt-[123px] pb-[59px] pr-[98px] pl-0 relative gap-[12px] max-w-full z-[1] border-[1px] border-dashed border-light-beerus-hover mq750:pr-[49px] mq750:box-border mq450:pr-5 mq450:box-border">
                <img
                  className="w-9 h-9 absolute my-0 mx-[!important] top-[71px] left-[calc(50%_-_18px)]"
                  loading="eager"
                  alt=""
                  src="/frame-76821.svg"
                />
                <div className="w-[248px] flex flex-row items-start justify-end">
                  <div className="w-[169px] relative leading-[24px] flex items-center justify-center pl-5">
                    upload-template.xlsx
                  </div>
                </div>

                {/* <div className="w-[564px] h-[258px] relative rounded-lg box-border hidden max-w-full z-[2] border-[1px] border-dashed border-light-beerus-hover" /> */}
                <div className="self-stretch flex flex-row items-start justify-end pt-1 px-[158px] pb-3 z-[2] text-sm text-supportive-dodoria-100 mq450:gap-[30px] mq450:pl-5 mq450:pr-5 mq450:box-border">
                  <div className="relative leading-[24px]">Remove</div>
                </div>
              </div>
              <div
                className="self-stretch h-14 rounded-lg bg-mediumslateblue-200 overflow-hidden shrink-0 flex flex-row items-center justify-center py-2 pr-4 pl-2 box-border cursor-pointer"
                onClick={onSizemdIconLeftTypePrimaClick}
              >
                <div className="h-[19px] w-[19px] relative rounded-[100px] box-border border-[2px] border-solid border-light-gohan" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Uploading;
