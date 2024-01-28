import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Controls from "./Controls";

const VectorFrame = () => {
  const navigate = useNavigate();

  const onSizemdIconLeftTypePrimaClick = useCallback(() => {
    navigate("/uploading");
  }, [navigate]);

  return (
  
      <section className="flex-1 flex flex-col items-start pt-12 px-0 pb-0 max-w-[calc(100%_-_248px)] text-5xl text-black mq750:pt-2 mq1050:max-w-full font-paragraph-ui-type-text-2xl-s">
  
      <div className="self-stretch flex flex-col items-center justify-start gap-[137px] max-w-full mq750:gap-[34px] mq450:gap-[17px] mq1125:gap-[68px]">
        <div className="self-stretch flex flex-row flex-wrap items-end justify-start gap-[34px] max-w-full mq750:gap-[17px]">
          <div className="flex-1 flex flex-col items-start justify-center min-w-[684px] max-w-full z-[1] mq750:min-w-full">
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
              src="/vector2.svg"
            />
            <img
              className="h-[30px] w-[30px] relative object-contain"
              loading="eager"
              alt=""
              src="/mask-group@2x.png"
            />
          </div>
        </div>
        <Controls
          propOpacity="unset"
          onSizemdIconLeftTypePrimaClick={onSizemdIconLeftTypePrimaClick}
        />
      </div>
    </section>
  );
};

export default VectorFrame;
