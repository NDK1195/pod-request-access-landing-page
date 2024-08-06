import logo from "./assets/desktop/logo.svg";
import spotify from "./assets/desktop/spotify.svg";
import applePodcast from "./assets/desktop/apple-podcast.svg";
import googlePodcast from "./assets/desktop/google-podcasts.svg";
import pocketPodcast from "./assets/desktop/pocket-casts.svg";
import { useState } from "react";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
function Content() {
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isEmailEmpty, setIsEmailEmpty] = useState(false);
  const [email, setEmail] = useState("");

  function handleRequestAccess(e) {
    e.preventDefault();

    if (email === "") {
      setIsEmailEmpty(true);
    }

    if (email !== "" && !emailRegex.test(email)) {
      setIsEmailValid(false);
    }

    return;
  }

  return (
    <div className="flex flex-col items-center gap-14 py-[110.5px] md:items-start md:gap-[104px] md:py-0">
      <img src={logo} alt="logo" />
      {/* logo */}
      <div className="flex flex-col text-center md:bg-blue-950 md:pt-[88px] md:text-left">
        <h1 className="mb-4 text-[32px] uppercase leading-[38.4px] text-green md:mb-6 md:pr-36 md:text-5xl md:leading-[57.6px] lg:pr-28">
          Publish your podcasts
          <span className="text-white"> everywhere.</span>
        </h1>

        <p className="mb-10 text-sm leading-[21px] text-blue-300 md:pr-36 md:text-lg md:leading-[27px] lg:pr-72">
          Upload your audio to Pod with a single click. We’ll then distribute
          your podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket Casts
          and more!
        </p>

        <div className="flex flex-col gap-10 md:flex-col-reverse md:gap-[65px]">
          <div className="flex max-w-[548px] items-center justify-between">
            <img
              src={spotify}
              alt="spotify logo"
              className="max-w-[55.943px] md:max-w-full"
            />
            <img
              src={applePodcast}
              alt="apple podcast logo"
              className="max-w-[45px] md:max-w-full"
            />
            <img
              src={googlePodcast}
              alt="google podcast logo"
              className="max-w-[72.969px] md:max-w-full"
            />
            <img
              src={pocketPodcast}
              alt="pocket podcast logo"
              className="max-w-[75.88px] md:max-w-full"
            />
          </div>

          <form
            className="relative flex flex-col gap-2 md:max-w-[448px]"
            onSubmit={handleRequestAccess}
          >
            <div className="flex flex-col gap-2">
              <input
                type="text"
                className={`h-11 rounded-[28px] bg-blue-900 py-2 pl-7 text-sm leading-7 text-white outline-none placeholder:text-white placeholder:opacity-50 md:h-[52px] md:pl-6 ${!isEmailValid || isEmailEmpty ? "border-2 border-red pl-[26px]" : ""}`}
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => {
                  setIsEmailEmpty(false);
                  setIsEmailValid(true);
                }}
              />
              <button
                type="submit"
                className="shadow-button rounded-[28px] bg-green py-2 text-sm leading-7 text-blue-950 transition-colors hover:bg-[#aaf2d7] md:absolute md:right-1 md:top-1 md:px-8"
              >
                Request access
              </button>
            </div>
            {!isEmailValid && (
              <p className="text-xs leading-none text-red md:pl-8">
                Oops! Please check your email
              </p>
            )}
            {isEmailEmpty && (
              <p className="text-xs leading-none text-red md:pl-8">
                Oops! Please add your email
              </p>
            )}
          </form>
        </div>
      </div>
      {/* content */}
    </div>
  );
}
export default Content;
