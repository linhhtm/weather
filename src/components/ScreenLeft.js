import Button from "./atom/Button";
import GpsFixedIcon from "@material-ui/icons/GpsFixed";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const ScreenLeft = () => {
  return (
    <div className="screen-left text-default p-5 bg-weather bg-primary bg-no-repeat min-h-full">
      <div className="sm:flex sm:justify-between">
        <input
          className="placeholder-[color:var(--text-color)] bg-input px-4 py-2 focus:outline-none shadow-default"
          type="text"
          placeholder="Search for places"
        />
        <Button isIcon>
          <GpsFixedIcon />
        </Button>
      </div>
      <div className="text-center pt-32 weather-detail">
        <img className="mx-auto" src={require("@img/Shower.png")} alt=""></img>
        <div className="pt-10">
          <span className="text-[144px]">15</span>
          <span>℃</span>
        </div>
        <div className="text-4xl pt-16 text-[color:#A09FB1]">Shower</div>
        <div className="mt-auto text-lg text-darker pt-16">
          <span>Today</span>
          <span className="px-5">&bull;</span>
          <span>Fri, 5 Jun</span>
          <div className="pt-8">
            <LocationOnIcon />
            <span>Helsinki</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScreenLeft;
