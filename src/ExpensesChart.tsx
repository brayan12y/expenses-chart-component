import Card from "./components/Card/Card";
import TitleBalance from "./components/TitleBalance";
import DATA_INFO from "./data/data";

const ExpensesChart = () => {
  return (
    <div className="bg-cream flex justify-center items-center w-full h-screen font-DM-Sans">
      <div className="block">
        <TitleBalance />
        <Card data={DATA_INFO} />
      </div>
    </div>
  );
};

export default ExpensesChart;
