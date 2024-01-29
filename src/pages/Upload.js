import UploadFrame from "../components/UploadFrame";
import VectorFrame from "../components/VectorFrame";

const Upload = () => {
  return (
    <div className=" w-full relative bg-gray-200 overflow-hidden flex flex-row items-start justify-start py-0 pr-[30px] pl-0 box-border gap-[30px] tracking-[normal] mq750:gap-[15px] mq1050:pl-[30px] mq1050:box-border">
      <div className="h-[32.9px] w-[197.6px] relative hidden">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs bg-light-gohan hidden" />
      </div>
      <div className="w-[218px] flex flex-col items-start justify-end pt-0 px-0 pb-0 box-border ">
        <UploadFrame
          menuAlignSelf="stretch"
          menuHeight="1025px"
          bGAlignSelf="stretch"
          fRAMEAlignSelf="stretch"
        />
      </div>
      <VectorFrame />
    </div>
  );
};

export default Upload;
