import React, { useContext } from "react";
import { Context } from "../context/Context";
import ThemeSelector from "./ThemeSelector";
import { ImageUp } from "lucide-react";

function Image() {
  const { image, setImage } = useContext(Context);

  const handleImageUpload = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target?.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className=" relative  aspect-square rounded-xl ">
        <img
          src={image}
          alt="Selected event image"
          className="w-full h-full object-cover rounded-xl"
        />
        <div className="absolute bottom-2 right-2 bg-gray-100 rounded-full p-3 cursor-pointer flex items-center justify-center">
          <label
            htmlFor="image-upload"
            className=" cursor-pointer rounded-full "
          >
            <ImageUp size={18} color="grey" />
          </label>
          <input
            id="image-upload"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
        </div>
      </div>
      <ThemeSelector />
    </div>
  );
}

export default Image;
