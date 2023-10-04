import Image from "next/image";
import firstSlideImg from "../../images/slides/firstSlideImg.png"

export const SlideEl = () => {
    const qwe = () => {
        console.log('this is click')
}

  return (
    <div className="px-5 py-8 my-8 flex flex-col items-center justify-center pointer-events-none">
      <div className="flex items-center justify-center bg-pinkGradient w-[335px] h-[335px] rounded-3xl align-middle">
        <Image
          src={firstSlideImg}
          alt="first slide"
          width={278}
          height={149}
          priority
        />
      </div>
      <div>
        <div className="my-8">
          <h2 className="text-h leading-[1.1] font-semibold text-wightColor max-w-[335px] text-center">
            <span className="text-blueColor">Instant Auto Sales: </span>Boost
            conversion
          </h2>
          <p className="mt-6 text-p leading-[1.2] font-normal text-wightColor max-w-[335px] text-center">
            Immediately deliver digital products and services to your users.
          </p>
        </div>
        <button
          type="button"
          onClick={qwe}
          className="inline-flex justify-center items-center rounded-full w-full max-w-[335px] px-8 py-3 bg-blueColor hover:bg-hoverColor text-wightColor text-p leading-[1.2] font-medium cursor-pointer pointer-events-auto"
        >
          Open API Docs
        </button>
      </div>
    </div>
  );
};
