import React, { useContext } from "react";
import EventCreation from "../components/EventCreation";
import Image from "../components/Image";
import { useNavigate } from "react-router-dom";
import { Context } from "../context/Context";

function Create() {
  const navigate = useNavigate();

  const {
    image,
    eventName,
    startDate,
    startTime,
    endDate,
    endTime,
    location,
    isEditing,
    price,
    isApproved,
    isEditingCapacity,
    capacity,
    nights,
    coverImage,
    theme,
    backgroundMedia,
    showSelect,
    selectedTheme,
    eventDate,
  } = useContext(Context);

  const handleSaveEvent = () => {
    const creatingJson = {
      event_name: eventName,
      event_date: eventDate,
      nights,
      location,
      cover_image_url: coverImage,
      theme,
      background_media: backgroundMedia,
      start_date: startDate,
      start_time: startTime,
      end_date: endDate,
      end_time: endTime,
      image_url: image,
      show_select: showSelect,
      selected_theme: selectedTheme,
      price,
      is_editing: isEditing,
      is_approved: isApproved,
      is_editing_capacity: isEditingCapacity,
      capacity,
    };

    localStorage.setItem("creating", JSON.stringify(creatingJson));
  };

  return (
    <div className="min-h-screen w-full bg-[#2d1a42] flex items-center justify-center ">
      <div className="bg-[#2d1a42] w-full max-w-6xl flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-[30%] h-[300px] md:h-[500px]">
          <Image />
        </div>

        <div className="w-full md:w-[70%] px-4 flex flex-col gap-6">
          <EventCreation />
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={handleSaveEvent}
              className="bg-white text-[#2d1a42] cursor-pointer hover:bg-gray-100 transition-colors px-6 py-3 rounded-lg text-lg font-bold"
            >
              Save Invite
            </button>
            <button
              onClick={() => {
                handleSaveEvent();
                navigate("/view");
              }}
              className="bg-white text-[#2d1a42] cursor-pointer hover:bg-gray-100 transition-colors px-6 py-3 rounded-lg text-lg font-bold"
            >
              Preview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Create;
