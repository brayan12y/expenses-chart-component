import ReactDOM from "react-dom/client";
import ExpensesChart from "./ExpensesChart";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<ExpensesChart />);
