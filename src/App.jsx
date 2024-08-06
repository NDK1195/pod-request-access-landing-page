import imageHostMobile from "./assets/mobile/image-host.jpg";
import imageHostTablet from "./assets/tablet/image-host.jpg";
import imageHostDesktop from "./assets/desktop/image-host.jpg";
import bgPatternDots from "./assets/desktop/bg-pattern-dots.svg";
import Content from "./Content";

function App() {
  return (
    <div className="relative min-h-dvh overflow-x-hidden">
      <div className="relative ml-auto min-h-screen bg-mobile bg-cover bg-center bg-no-repeat md:min-h-[868px] md:max-w-[460px] md:bg-tablet md:opacity-80 lg:-right-16 lg:top-[153px] lg:min-h-[654px] lg:max-w-[960px] lg:bg-desktop">
        <img
          src={bgPatternDots}
          alt="background pattern dots"
          className="absolute -bottom-[52px] -right-[128px] hidden md:block lg:right-16"
        />
      </div>
      {/* background image */}
      <div className="absolute left-0 top-0 min-h-screen w-full bg-blue-950 opacity-[0.7993] md:hidden"></div>
      {/* mobile overlay */}

      <div className="absolute left-1/2 top-1/2 min-w-[303px] max-w-[480px] -translate-x-1/2 -translate-y-1/2 md:left-[44px] md:top-[156px] md:m-0 md:max-w-[592px] md:-translate-x-0 md:-translate-y-0 lg:max-w-[736px] xl:left-[160px] xl:top-[153px]">
        <Content />
      </div>
    </div>
  );
}
export default App;
