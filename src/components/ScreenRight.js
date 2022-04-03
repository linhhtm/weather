import Button from "./atom/Button";

const ScreenRight = () => {
  return (
    <div className="md:p-10 bg-primary-darker min-h-full">
      <div className="flex justify-end btn-group mb-16">
        <Button isIcon active>
          <span className="font-bold text-lg">ºC</span>
        </Button>
        <Button isIcon>
          <span className="font-bold text-lg">ºF</span>
        </Button>
      </div>
      <div class="weather-week sm:flex mb-[72px]">
        <div class="bg-primary md:p-5 mr-6">
          <p>Tomorrow</p>
          <img className="m-auto w-14 h-14 mb-7" src={require('@img/LightRain.png')} alt=""/>
          <div className="flex justify-between">
            <span className="pr-4">16ºC</span>
            <span className="text-gray">11ºC</span>
          </div>
        </div>
        <div class="bg-primary md:p-5">
          <p>Sun, 7 Jun</p>
          <img className="m-auto w-14 h-14 mb-7" src={require('@img/LightRain.png')} alt=""/>
          <div className="flex justify-between">
            <span className="pr-4">16ºC</span>
            <span className="text-gray">11ºC</span>
          </div>
        </div>
      </div>
      <div class="weather-today mb-8">
        <div className="text-2xl font-bold text-title">
          Today's Highlights
        </div>
        <div className="grid grid-cols-2 bg-primary sm:p-5 text-center">
          <div class="col-span-1">
            <div>Wind status</div>
            <div className="text-4xl">
              <span className="text-6xl font-bold">7</span>
              <span> mph</span>
            </div>
            <div>
              <Button isIcon className="m-auto">
                dsa
              </Button>
              <span className="text-sm">wsw</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScreenRight;
