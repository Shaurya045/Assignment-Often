import { PanelTop, ChevronsUpDown, Shuffle } from "lucide-react";
import { useContext, useRef } from "react";
import { Context } from "../context/Context";

function ThemeSelector() {
  const {
    showSelect,
    setShowSelect,
    selectedTheme,
    setSelectedTheme,
    // selectedThemeType,
    setSelectedThemeType,
  } = useContext(Context);

  const fileInputRef = useRef(null);

  const handleThemeUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const previewURL = URL.createObjectURL(file);
      setSelectedTheme(previewURL);
      setSelectedThemeType(file.type);
      setShowSelect(false);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="flex w-full items-stretch h-[50px] gap-1">
      <div className="flex w-[75%] sm:w-[87%] items-center bg-white/10 px-2 rounded-lg gap-2 h-full">
        <PanelTop size={28} className="sm:size-[36px]" color="grey" />

        <div className="flex justify-between items-center w-full">
          <div>
            <p className="text-[8px] sm:text-[10px] text-gray-400">Theme</p>
            <p className="text-[12px] sm:text-[14px] text-white capitalize truncate max-w-[100px] sm:max-w-[150px]">
              {selectedTheme}
            </p>
          </div>

          <div className="relative flex items-center">
            <button
              onClick={() => setShowSelect(!showSelect)}
              className="flex items-center space-x-1 cursor-pointer"
              type="button"
            >
              <ChevronsUpDown size={16} className="sm:size-[18px]" color="grey" />
            </button>

            {showSelect && (
              <div className="absolute top-8 right-0 bg-white text-black text-xs sm:text-sm border border-gray-300 rounded shadow-sm outline-none z-10 min-w-[150px] sm:min-w-[180px]">
                <div
                  className="px-3 sm:px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setSelectedTheme("/lighthouse.mp4");
                    setSelectedThemeType("video/mp4");
                    setShowSelect(false);
                  }}
                >
                  Lighthouse Video
                </div>
                <div
                  className="px-3 sm:px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setSelectedTheme("/waterfall.mp4");
                    setSelectedThemeType("video/mp4");
                    setShowSelect(false);
                  }}
                >
                  Waterfall Video
                </div>
                <div
                  className="px-3 sm:px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setSelectedTheme("/firewood.mp4");
                    setSelectedThemeType("video/mp4");
                    setShowSelect(false);
                  }}
                >
                  Firewood Video
                </div>
                <div
                  className="px-3 sm:px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setSelectedTheme("/mountain.mp4");
                    setSelectedThemeType("video/mp4");
                    setShowSelect(false);
                  }}
                >
                  Mountain Video
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div
        className="flex items-center justify-center w-[25%] sm:w-[13%] bg-white/10 rounded-lg h-full cursor-pointer"
        onClick={triggerFileInput}
      >
        <Shuffle size={16} className="sm:size-[18px]" color="grey" />
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleThemeUpload}
          accept="image/*,video/mp4"
          className="hidden"
        />
      </div>
    </div>
  );
}

export default ThemeSelector;
