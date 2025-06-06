import { useContext, useEffect } from "react";
import {
  Globe,
  MapPin,
  FileText,
  Ticket,
  UserCheck,
  Users,
  Pencil,
  ChevronDown,
} from "lucide-react";
import { Context } from "../context/Context";

export default function EventCreation() {
  const {
    eventName,
    setEventName,
    startDate,
    setStartDate,
    startTime,
    setStartTime,
    endDate,
    setEndDate,
    endTime,
    setEndTime,
    location,
    setLocation,
    description,
    setDescription,
    isEditing,
    setIsEditing,
    price,
    setPrice,
    isApproved,
    setIsApproved,
    isEditingCapacity,
    setIsEditingCapacity,
    capacity,
    setCapacity,
  } = useContext(Context);

  // Set current date and time as default
  const now = new Date();
  const currentDate = now.toISOString().split("T")[0];
  const currentTime = now.toTimeString().slice(0, 5);

  useEffect(() => {
    setStartDate(currentDate);
    setStartTime(currentTime);
    setEndDate(currentDate);
    setEndTime(currentTime);
  }, []);

  return (
    <div className=" flex flex-col gap-4 ">
      {/* Header */}
      <div className="flex justify-between items-center mb-1">
        <div className="bg-[#3d2a52] text-white px-3 py-1 rounded-full flex items-center gap-2 ">
          <div className="w-4 h-4 rounded-full bg-linear-to-br from-orange-500 to-white"></div>
          Personal Calendar
        </div>
        <div className="">
          <button className="bg-[#3d2a52] text-white px-3 py-1 rounded-full flex items-center gap-2 ">
            <Globe size={14} />
            <span>Public</span>
            <ChevronDown size={14} color="grey" />
          </button>
        </div>
      </div>

      {/* Event Name */}
      <div>
        <input
          type="text"
          className="bg-transparent border-none text-3xl text-white placeholder:text-white/60 focus:outline-none w-full"
          placeholder="Event Name"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
        />
      </div>

      {/* Date and Time */}
      <div className="flex gap-4 w-full">
        <div className="bg-[#3d2a52] relative w-full rounded-lg p-2 flex flex-col gap-2">
          <div className="absolute left-3 top-8 h-5 border-l-2 border-dotted border-gray-400 z-0 hidden sm:block"></div>
          {/* Start Date/Time */}
          <div className="flex items-center justify-between">
            <div className=" rounded-full bg-[#3d2a52] flex items-center gap-2 mr-2">
              <div className="w-2 h-2 rounded-full bg-white/30 border-white border-1 "></div>
              <p className="text-white mr-4">Start</p>
            </div>
            <div className=" flex gap-2">
              <div className="relative ">
                <input
                  type="date"
                  className="bg-white/20 text-white p-1 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-purple-400"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </div>
              <div className="relative ">
                <input
                  type="time"
                  className="bg-white/20 text-white p-1 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-purple-400"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* End Date/Time */}
          <div className="flex items-center justify-between">
            <div className=" rounded-full border-2 border-[#3d2a52] flex items-center gap-2 mr-2">
              <div className="w-2 h-2 rounded-full border-white/30 border-1"></div>
              <p className="text-white mr-4">End</p>
            </div>
            <div className=" flex gap-2">
              <div className="relative">
                <input
                  type="date"
                  className="bg-white/20 text-white p-1 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-purple-400"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </div>
              <div className="relative ">
                <input
                  type="time"
                  className="bg-white/20 text-white p-1 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-purple-400"
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Timezone */}
        <div className="bg-[#3d2a52] w-[30%] rounded-lg p-2 flex flex-col justify-center">
          <Globe className="text-white mr-2" size={16} />
          <div className="text-white">
            <div className="text-sm font-medium">GMT+05:30</div>
            <div className="text-sm opacity-70">Calcutta</div>
          </div>
        </div>
      </div>

      {/* Location */}
      <div className="bg-[#3d2a52] flex rounded-lg p-2">
        <div className="pt-1">
          <MapPin className="text-white mr-2" size={16} />
        </div>
        <div>
          <span className="text-white text-[16px] font-medium">
            Add Event Location
          </span>
          <input
            type="text"
            className="bg-transparent border-none text-white placeholder:text-white/60 focus:outline-none w-full"
            placeholder="Offline Event Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
      </div>

      {/* Description */}
      <div className="bg-[#3d2a52] rounded-lg p-2 flex items-start">
        <FileText className="text-white mr-2 mt-1" size={16} />
        <textarea
          className="bg-transparent border-none text-white placeholder:text-white/60 focus:outline-none w-full resize-none"
          placeholder="Add Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      {/* Event Options */}
      <div className="mt-2">
        <h3 className="text-white text-xl mb-4">Event Options</h3>

        {/* Tickets */}
        <div className="bg-[#3d2a52] rounded-lg p-2 flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Ticket className="text-white mr-2" size={16} />
            <span className="text-white">Tickets</span>
          </div>
          <div className="flex items-center">
            {isEditing ? (
              <input
                type="text"
                className="bg-[#4d3a62] text-white px-2 py-1 rounded w-20 mr-2 placeholder:text-white/60 focus:outline-none "
                placeholder="Free"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                onBlur={() => {
                  setIsEditing(false);
                  setPrice("Free");
                }}
                onKeyDown={(e) =>
                  e.key === "Enter" && setIsEditing(false) && setPrice("Free")
                }
                autoFocus
              />
            ) : (
              <span className="text-white mr-2">{price}</span>
            )}
            <button
              onClick={() => {
                setIsEditing(true);
                setPrice("");
              }}
              className="hover:opacity-70 transition-opacity"
            >
              <Pencil className="text-white" size={16} />
            </button>
          </div>
        </div>

        {/* Require Approval */}
        <div className="bg-[#3d2a52] rounded-lg p-2 flex items-center justify-between mb-4">
          <div className="flex items-center">
            <UserCheck className="text-white mr-2" size={16} />
            <span className="text-white">Require Approval</span>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only"
              checked={isApproved}
              onChange={(e) => setIsApproved(e.target.checked)}
            />
            <div
              className={`w-11 h-6 rounded-full transition-colors duration-200 ease-in-out ${
                isApproved ? "bg-green-500" : "bg-gray-400"
              }`}
            >
              <div
                className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-200 ease-in-out ${
                  isApproved ? "translate-x-5" : "translate-x-0"
                } mt-0.5 ml-0.5`}
              />
            </div>
          </label>
        </div>

        {/* Capacity */}
        <div className="bg-[#3d2a52] rounded-lg p-2 flex items-center justify-between">
          <div className="flex items-center">
            <Users className="text-white mr-2" size={16} />
            <span className="text-white">Capacity</span>
          </div>
          <div className="flex items-center">
            {isEditingCapacity ? (
              <input
                type="text"
                className="bg-[#4d3a62] text-white px-2 py-1 rounded w-24 mr-2 placeholder:text-white/60 focus:outline-none "
                placeholder="Unlimited"
                value={capacity}
                onChange={(e) => setCapacity(e.target.value)}
                onBlur={() => {
                  setIsEditingCapacity(false);
                  setCapacity("Unlimited");
                }}
                onKeyDown={(e) =>
                  e.key === "Enter" &&
                  setIsEditingCapacity(false) &&
                  setCapacity("Unlimited")
                }
                autoFocus
              />
            ) : (
              <span className="text-white mr-2">{capacity}</span>
            )}
            <button
              onClick={() => {
                setIsEditingCapacity(true);
                setCapacity("");
              }}
              className="hover:opacity-70 transition-opacity"
            >
              <Pencil className="text-white" size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
