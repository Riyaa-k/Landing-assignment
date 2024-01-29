import { useState } from "react";
import React from "react";
import UploadFrame from "../components/UploadFrame";
import * as XLSX from "xlsx";


const Uploaded = () => {
  const [tableData, setTableData] = useState([]);
  const [uploadedFileName, setUploadedFileName] = useState("");
  const [selectedTagsMap, setSelectedTagsMap] = useState({});
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFileName, setSelectedFileName] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setSelectedFileName(file.name); // Update the file name
    }

    // Reset the file input
    event.target.value = '';
  };



  const handleFileUpload = () => {
    if (selectedFile) {
      const reader = new FileReader();

      reader.onload = (event) => {
        const binaryString = event.target.result;

        try {
          const workbook = XLSX.read(binaryString, { type: "binary" });
          const sheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[sheetName];
          const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

          const formattedData = data.map((row, index) => ({
            slNo: index + 1,
            link: row[0], // Assuming the first column contains link data
            prefix: row[1], // Assuming the second column contains prefix data
            tags: row[2] ? row[2].split(", ") : [], // Split tags into an array
            selectedTags: row[3], // Assuming the fourth column contains selected tag data
          }));

          setTableData(formattedData);
          setUploadedFileName(selectedFile.name);
        } catch (error) {
          console.error('Error reading file:', error);
        }
      };

      reader.readAsBinaryString(selectedFile);
      alert("File uploaded successfully")
    } else {
      alert("No file selected.");
    }
  };

  const handleTagClick = (tag, rowIndex) => {
    const tags = selectedTagsMap[rowIndex] || [];
    const updatedTags = tags.includes(tag)
      ? tags.filter((t) => t !== tag)
      : [...tags, tag];

    setSelectedTagsMap({
      ...selectedTagsMap,
      [rowIndex]: updatedTags,
    });
  };

  const handleDeleteFile = () => {
    setTableData([]);
    setUploadedFileName("");
    setSelectedFile(null);
    setSelectedFileName(""); // Also clear the selected file name
  };


  return (
    <div className="uploading w-full relative bg-gray-200 overflow-hidden flex flex-row items-start justify-start pt-0 pb-[199px] pr-[30px] pl-0 box-border gap-[30px] tracking-[normal] mq750:gap-[15px] mq1050:pl-[30px] mq1050:box-border">
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


          <div className="w-full max-w-[622px] flex flex-row items-start py-0 pr-6 text-center text-base text-light-trunks">

            <div className="flex-1 rounded-lg bg-light-gohan flex flex-col items-center justify-start p-4 gap-5 border border-dashed border-light-beerus-hover">
              <div className="w-full pt-24 pb-20 pr-5 pl-5 gap-4">
                <img className="w-9 h-9" loading="eager" alt="" src="/frame-7682.svg" />

                <div className="leading-6">
                  {!selectedFile && (
                    <>
                      <span>Drop your excel sheet here or </span>
                      <label htmlFor="upload-button" className="cursor-pointer text-mediumslateblue-200">
                        browse
                      </label>
                    </>
                  )}
                  {selectedFile && <p> {selectedFileName}</p>}
                  <input
                    type="file"
                    accept=".xlsx, .xls"
                    id="upload-button"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </div>




                {selectedFileName && (
                  <div className="flex items-center justify-center">

                    <button onClick={handleDeleteFile} className="text-red-500 bg-transparent cursor-pointer ">
                      Remove
                    </button>


                  </div>
                )}

              </div>
              <button
                onClick={handleFileUpload}
                className="cursor-pointer border-none py-4 px-5 bg-mediumslateblue-200 self-stretch rounded-lg overflow-hidden flex items-center justify-center gap-2 hover:bg-mediumslateblue-100"
              >
                <img className="h-6 w-6" alt="" src="/icon.svg" />
                <div className="text-sm leading-6 font-semibold text-light-gohan">
                  Upload
                </div>
              </button>
            </div>

          </div>

          <div className="w-[1076px] flex flex-row items-start justify-start py-0 pr-0 pl-[11px] box-border max-w-full">
            <div className="flex-1 flex flex-col items-start justify-start gap-[46px] min-h-[521px] max-w-full mq750:gap-[23px]">
              <h2 className="m-0 w-[133px] relative text-inherit leading-[32px] font-semibold font-inherit flex items-center mq450:text-lgi mq450:leading-[26px]">
                Uploads
              </h2>
              {/* form */}
              <form className="form-table-container m-0 self-stretch h-[443px] rounded-lg bg-light-goku flex flex-col items-center justify-start pt-3.5 pb-0 pr-[15px] pl-4 box-border gap-[13px] max-w-full mq750:h-auto">
                <div className="h-[18px] rounded-md overflow-hidden shrink-0 hidden flex-row items-center justify-start py-[3px] pr-1.5 pl-[3px] box-border">
                  <img
                    className="h-[9px] w-[9px] relative"
                    alt=""
                    src="/icon-1.svg"
                  />
                </div>
                {/* headers */}
                <div className="form-table-header self-stretch flex flex-row items-start justify-start py-0 px-[15px] box-border max-w-full shrink-0">
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

                {/* Table Content */}
                {/* Table Content */}
                <div className="w-full overflow-y-auto max-h-[400px]">
                  {/* Table rows */}
                  {tableData.map((rowData, index) => (
                    <div
                      key={index}
                      className="form-table-row  self-stretch flex flex-row items-start justify-start pt-0 pb-[3px] box-border min-h-[85px] max-w-full shrink-0 bg-white py-2 px-4 rounded-lg shadow-md mb-2"
                    >
                      <div className="   flex-1 rounded-lg bg-light-gohan flex flex-row flex-wrap items-center justify-start py-[13px] pr-[29px] pl-4 box-border gap-[71px] max-w-full mq750:gap-[18px] mq1050:gap-[35px]">
                        <div className="h-6 w-6 relative hidden">
                          <div className="absolute h-[66.67%] w-[66.67%] top-[83.33%] right-[16.67%] bottom-[-50%] left-[16.67%] rounded-10xs box-border border-[0.8px] border-solid border-light-trunks" />
                        </div>
                        <div className="flex-1 flex flex-row items-center justify-between min-w-[421px] gap-[20px] max-w-full mq750:flex-wrap mq750:min-w-full">
                          <div className="w-6 relative text-sm leading-[24px] font-paragraph-ui-type-text-2xl-s text-light-bulma text-left flex items-center shrink-0">
                            {index + 1}
                          </div>
                          <div className="flex flex-col items-start justify-start py-0 pr-[11px] pl-0">
                            <a
                              className="relative text-sm text-dodgerblue text-left"
                              href={rowData.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {rowData.link}
                            </a>
                          </div>
                          <div className="flex flex-col items-start justify-start py-0 pr-2.5 pl-0">
                            <div className="relative text-sm leading-[24px] text-light-bulma text-left">
                              {rowData.prefix}
                            </div>
                          </div>


                          <div className="w-[137px] flex flex-col items-start justify-start">
                            <select
                              className="relative text-sm leading-[24px] text-light-bulma text-left bg-transparent outline-none border-none"
                              onChange={(e) => handleTagClick(e.target.value, index)}
                            >
                              {rowData.tags.map((tag, i) => (
                                <option key={i} value={tag}>
                                  {tag}
                                </option>
                              ))}
                            </select>
                          </div>

                          <div className="flex flex-row flex-wrap items-start justify-start gap-[8px]">
                            {Array.isArray(selectedTagsMap[index]) &&
                              selectedTagsMap[index].map((tag, i) => (
                                <button
                                  key={i}
                                  className="cursor-pointer py-1 pr-1 pl-2 bg-mediumslateblue-200 rounded overflow-hidden flex flex-row items-start justify-start whitespace-nowrap hover:bg-mediumslateblue-100"
                                  onClick={() => handleTagClick(tag, index)} // Update onClick event
                                >
                                  <div className="relative text-3xs tracking-[0.5px] leading-[16px] uppercase font-semibold text-light-gohan text-center">
                                    {tag}
                                  </div>
                                  <img
                                    className="h-4 w-4 relative min-h-[16px]"
                                    alt=""
                                    src="/icon-2.svg"
                                  />
                                </button>
                              ))}
                          </div>

                        </div>
                      </div>
                    </div>
                  ))}
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