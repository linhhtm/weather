import GpsFixedIcon from "@mui/icons-material/GpsFixed";
const ScreenLeft = () => {
  return (
    <div className="screen-left p-5 bg-weather bg-primary bg-no-repeat min-h-screen">
      <div className="text-default sm:flex sm:justify-between">
        <input
          className="placeholder-[color:var(--text-color)] bg-input px-4 py-2 focus:outline-none shadow-default"
          type="text"
          placeholder="Search for places"
        />
        <div className="shadow-default flex items-center justify-center h-12 w-12 rounded-full bg-input sm:mx-0 sm:h-10 sm:w-10">
          <GpsFixedIcon />
        </div>
      </div>
      <div>
        <img src=""></img>
      </div>
    </div>
  );
};

export default ScreenLeft;
