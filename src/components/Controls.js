

const Controls = ({ propOpacity, onSizemdIconLeftTypePrimaClick }) => {
  return (

<div class="w-full max-w-[622px] flex flex-row items-start py-0 pr-6 text-center text-base text-light-trunks">
  
  <div class="flex-1 rounded-lg bg-light-gohan flex flex-col items-center justify-start p-4 gap-5 border border-dashed border-light-beerus-hover">

    <div class="w-full pt-24 pb-20 pr-5 pl-5 gap-4">
      <img class="w-9 h-9" loading="eager" alt="" src="/frame-7682.svg" />
      <div class="leading-6">
        <span>Drop your excel sheet here or </span>
        <span class="text-mediumslateblue-200">browse</span>
      </div>
      <div class="w-full h-[258px] rounded-lg border border-dashed border-light-beerus-hover hidden"></div>
    </div>
    <button
      className="cursor-pointer border-none py-4 px-5 bg-mediumslateblue-200 self-stretch rounded-lg overflow-hidden flex items-center justify-center gap-2 hover:bg-mediumslateblue-100"
      style={{ opacity: propOpacity }}
      onClick={onSizemdIconLeftTypePrimaClick}
    >
      <img class="h-6 w-6" alt="" src="/icon.svg" />
      <div class="text-sm leading-6 font-semibold text-light-gohan">
        Upload
      </div>
    </button>
  </div>
</div>
  );
};

export default Controls;