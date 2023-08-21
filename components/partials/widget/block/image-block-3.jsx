const ImageBlock3 = () => {
  return (
    <div
      className="bg-no-repeat bg-cover bg-center p-5 rounded-[6px] relative"
      style={{
        backgroundImage: `url(/assets/images/all-img/widget-bg-3.png)`,
      }}
    >
      <div>
        <h4 className="text-xl font-medium text-white mb-2">
          <span className="block font-normal mb-4">Values </span>
          <span className="text-2xl block">31,661,334</span>
        </h4>
        <p className="text-sm text-white font-normal">Total Values</p>
      </div>
    </div>
  );
};

export default ImageBlock3;
