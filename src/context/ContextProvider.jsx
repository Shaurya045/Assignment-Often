import { Context } from "./Context";
import { useState } from "react";

const ContextProvider = (props) => {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [nights, setNights] = useState(1);
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [coverImage, setCoverImage] = useState("/CoverImage.png");
  const [theme, setTheme] = useState("minimal");
  const [backgroundMedia, setBackgroundMedia] = useState(null);

  const [startDate, setStartDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endDate, setEndDate] = useState("");
  const [endTime, setEndTime] = useState("");
  const [image, setImage] = useState("/CoverImage.png");
  const [showSelect, setShowSelect] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState("Select");
  const [selectedThemeType, setSelectedThemeType] = useState("");
  const [price, setPrice] = useState("Free");
  const [isEditing, setIsEditing] = useState(false);
  const [isApproved, setIsApproved] = useState(false);
  const [isEditingCapacity, setIsEditingCapacity] = useState(false);
  const [capacity, setCapacity] = useState("Unlimited");

  const setStateFromResponse = (data) => {
    if (data.eventName !== undefined) setEventName(data.eventName);
    if (data.eventDate !== undefined) setEventDate(data.eventDate);
    if (data.nights !== undefined) setNights(data.nights);
    if (data.location !== undefined) setLocation(data.location);
    if (data.description !== undefined) setDescription(data.description);
    if (data.coverImage !== undefined) setCoverImage(data.coverImage);
    if (data.theme !== undefined) setTheme(data.theme);
    if (data.backgroundMedia !== undefined)
      setBackgroundMedia(data.backgroundMedia);
    if (data.startDate !== undefined) setStartDate(data.startDate);
    if (data.startTime !== undefined) setStartTime(data.startTime);
    if (data.endDate !== undefined) setEndDate(data.endDate);
    if (data.endTime !== undefined) setEndTime(data.endTime);
    if (data.image !== undefined) setImage(data.image);
    if (data.showSelect !== undefined) setShowSelect(data.showSelect);
    if (data.selectedTheme !== undefined) setSelectedTheme(data.selectedTheme);
    if (data.selectedThemeType !== undefined)
      setSelectedThemeType(data.selectedThemeType);
    if (data.price !== undefined) setPrice(data.price);
    if (data.isEditing !== undefined) setIsEditing(data.isEditing);
    if (data.isApproved !== undefined) setIsApproved(data.isApproved);
    if (data.isEditingCapacity !== undefined)
      setIsEditingCapacity(data.isEditingCapacity);
    if (data.capacity !== undefined) setCapacity(data.capacity);
  };

  const contextValue = {
    eventName,
    setEventName,
    eventDate,
    setEventDate,
    nights,
    setNights,
    location,
    setLocation,
    description,
    setDescription,
    coverImage,
    setCoverImage,
    theme,
    setTheme,
    backgroundMedia,
    setBackgroundMedia,
    startDate,
    setStartDate,
    startTime,
    setStartTime,
    endDate,
    setEndDate,
    endTime,
    setEndTime,
    image,
    setImage,
    showSelect,
    setShowSelect,
    selectedTheme,
    setSelectedTheme,
    selectedThemeType,
    setSelectedThemeType,
    price,
    setPrice,
    isEditing,
    setIsEditing,
    isApproved,
    setIsApproved,
    isEditingCapacity,
    setIsEditingCapacity,
    capacity,
    setCapacity,
    setStateFromResponse,
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
