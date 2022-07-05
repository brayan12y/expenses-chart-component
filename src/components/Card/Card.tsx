import { DataChart } from "../../typings/expenses-chart";
import WeeklyBar from "../WeeklyBar";

interface Props {
  data: DataChart[];
}

const Card = ({ data }: Props) => {
  const today = new Date();
  const maxDataValue = Math.max(...data.map((maxData) => maxData.amount), 0);

  return (
    <div className="bg-[#fff] mt-3 p-5 rounded-lg">
      <span className="text-2xl font-bold text-dark-brown">
        Spending - Las {data.length} days
      </span>
      <div className="flex pt-11 mb-5">
        {data.map((item, index) => {
          return (
            <WeeklyBar
              key={`${item.day}-${index}`}
              day={item.day}
              amount={item.amount}
              maxDataValue={maxDataValue}
              index={index + 1}
              activeDay={today.getDay()}
            />
          );
        })}
      </div>
      <div className="flex justify-between pt-6 border-t-2 border-very-pale-orange">
        <div className="flex flex-col">
          <span className="text-medium-brown mb-1 text-xs">Total this month</span>
          <span className="text-dark-brown text-3xl font-bold">$478.33</span>
        </div>
        <div className="flex flex-col text-end justify-end">
          <span className="text-dark-brown font-bold">+2.4%</span>
          <span className="text-medium-brown text-xs">from Last month</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
