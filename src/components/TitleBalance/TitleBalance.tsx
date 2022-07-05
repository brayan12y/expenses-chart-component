const TitleBalance = () => {
  return (
    <div className="flex justify-between bg-soft-red p-4 rounded-lg text-very-pale-orange">
      <div className="flex justify-between flex-col">
        <span className="text-xs">My balance</span>
        <span>$921.48</span>
      </div>
      <div className="flex items-center content-center max-w-[40px]">
        <svg
          width="72"
          height="48"
          viewBox="0 0 72 48"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fillRule="evenodd">
            <circle fill="#382314" cx="48" cy="24" r="24" />
            <circle stroke="#FFF" strokeWidth="2" cx="24" cy="24" r="23" />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default TitleBalance;
