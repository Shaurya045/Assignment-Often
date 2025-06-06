import { useContext, useEffect } from "react";
import { Context } from "../context/Context";
import Image from "../components/Image";
import EventCreation from "../components/EventCreation";
import VideoPlayer from "../components/VideoPlayer";

function View() {
  const {
    selectedTheme,
    selectedThemeType,
    setStateFromResponse, 
  } = useContext(Context);

  useEffect(() => {
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
        setStateFromResponse(parsed); 
      } catch (error) {
        console.error("Failed to parse response.json:", error);
      }
    }
  }, []);

  return (
    <main className="relative min-h-screen w-full bg-[#2d1a42] flex flex-col items-center text-white overflow-hidden py-4 sm:py-6 md:py-10 px-4 sm:px-6 md:px-8">
      <div className="bg-[#2d1a42] w-full max-w-6xl flex flex-col md:flex-row gap-4 md:gap-8">
        <div className="w-full md:w-[30%] ">
          <Image />
        </div>

        <div className="w-full md:w-[70%] relative rounded-xl overflow-hidden px-2 sm:px-4 py-2 sm:py-4 flex flex-col gap-4 md:gap-6">
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

      <div className="mt-6 sm:mt-8 md:mt-10 w-full max-w-5xl">
        <VideoPlayer />
      </div>
    </main>
  );
}

export default View;
