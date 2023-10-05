export const SlideBtn = () => {
  const qwe = () => {
    console.log("this is click");
  };

  return (
    <button
      type="button"
      onClick={qwe}
      className="inline-flex justify-center items-center rounded-full w-full px-8 py-3 bg-blueColor hover:bg-hoverColor text-wightColor text-p leading-[1.2] font-medium cursor-pointer pointer-events-auto"
    >
      Open API Docs
    </button>
  );
};
