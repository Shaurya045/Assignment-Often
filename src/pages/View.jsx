import { useContext, useEffect } from "react";
import { Context } from "../context/Context";
import { Globe, ChevronDown } from "lucide-react";
import Image from "../components/Image";
import EventCreation from "../components/EventCreation";
import VideoPlayer from "../components/VideoPlayer";

function View() {
  const {
    selectedTheme,
    selectedThemeType,
    setStateFromResponse, // ✅ make sure you have this action in zustand store
  } = useContext(Context);

  useEffect(() => {
    // Try to load from 'creating' first, fallback to 'response' for backward compatibility
    const creatingData =
      typeof window !== "undefined" ? localStorage.getItem("creating") : null;
    const responseData =
      typeof window !== "undefined" ? localStorage.getItem("response") : null;
    let parsed = null;
    if (creatingData) {
      try {
        parsed = JSON.parse(creatingData);
        setStateFromResponse(parsed);
      } catch (error) {
        console.error("Failed to parse creating.json:", error);
      }
    } else if (responseData) {
      try {
        parsed = JSON.parse(responseData);
        setStateFromResponse(parsed); // ✅ Load response.json into store
      } catch (error) {
        console.error("Failed to parse response.json:", error);
      }
    }
  }, []);

  return (
    <main className="relative min-h-screen w-full bg-[#2d1a42] flex flex-col items-center text-white  overflow-hidden py-10">
      <div className="bg-[#2d1a42] w-full max-w-6xl flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-[30%] h-[300px] md:h-[500px]">
          <Image />
        </div>

        <div className="w-full md:w-[70%] relative rounded-xl overflow-hidden px-4 py-4 flex flex-col gap-6">
          {selectedTheme && selectedThemeType?.startsWith("video") ? (
            <video
              src={selectedTheme}
              autoPlay
              loop
              muted
              className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-50"
            />
          ) : selectedTheme ? (
            <img
              src={selectedTheme}
              alt="Background"
              className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-50"
            />
          ) : null}
          <EventCreation />
        </div>
      </div>

      <div className="mt-10 w-full max-w-5xl">
        <VideoPlayer />
      </div>
    </main>
  );
}

export default View;
