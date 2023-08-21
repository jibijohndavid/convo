const ImageBlock2 = () => {
  return (
    <div
      className="bg-no-repeat bg-cover bg-center p-5 rounded-[6px] relative"
      style={{
        backgroundImage: `url(/assets/images/all-img/widget-bg-3.png)`,
      }}
    >
      <div>
        <h4 className="text-xl font-medium text-white mb-2">
          <span className="block font-normal">Total</span>
          <span className="text-2xl block">$555,901,934</span>
        </h4>
        <p className="text-sm text-white font-normal">Active Wallets</p>
      </div>
    </div>
  );
};

export default ImageBlock2;
