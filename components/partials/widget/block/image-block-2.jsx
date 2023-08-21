const ImageBlock2 = () => {
  return (
    <div
      className="bg-no-repeat bg-cover bg-center p-5 rounded-[6px] relative"
      style={{
        backgroundImage: `url(/assets/images/all-img/widget-bg-3.png)`,
      }}
    >
      <div>
        <h4 className="text-xl font-medium text-white mb-3">
          <span className="block font-normal mb-4">Active Wallets</span>
          <span className="text-2xl block">$555,901,934</span>
        </h4>
        <p className="text-sm text-white font-normal mb-2">Total Amount</p>
      </div>
    </div>
  );
};

export default ImageBlock2;
