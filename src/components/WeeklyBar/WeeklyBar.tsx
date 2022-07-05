import cn from "classnames";
import { useEffect, useState } from "react";
import Tooltip from "../Tooltip/Tooltip";

interface Props {
  day: string;
  amount: number;
  maxDataValue: number;
  activeDay: number;
  index: number;
}

const WeeklyBar = ({ day, amount, maxDataValue, activeDay, index }: Props) => {
  const [amountValue, setAmountValue] = useState<number>();
  const [activeTooltip, setActiveTooltip] = useState(false);
  useEffect(() => {
    if (maxDataValue) {
      const porcentage = (amount * 100) / maxDataValue;
      setAmountValue(porcentage);
    }
  }, [amount, maxDataValue]);

  return (
    <div className="ml-1.5 mr-1.5 md:min-w-[40px] min-w-[32px]">
      <div className="block relative md:min-h-[100px] min-h-[150px]">
        <div
          onMouseEnter={() => setActiveTooltip(true)}
          onMouseLeave={() => setActiveTooltip(false)}
          className={cn(
            "block cursor-pointer duration-300 ease-in-out w-full rounded-md absolute bottom-0",
            {
              "bg-cyan hover:bg-cyan-hover": activeDay === index,
              "bg-soft-red hover:bg-soft-red-hover": activeDay !== index,
            }
          )}
          style={{ height: `${amountValue}%` }}
        >
          <Tooltip amount={amount} activeTooltip={activeTooltip} />
        </div>
      </div>
      <span className="flex items-center mt-2 justify-center text-sm text-medium-brown">
        {day}
      </span>
    </div>
  );
};

export default WeeklyBar;
