import BalanceCard from "component/BalanceCard";
import ExpenseHistory from "component/ExpenseHistory";
import FasterCard from "component/FasterCard";
import MonthlyChart from "component/MonthlyChart";
import SideBarChart from "component/SideBarChart";

const HomePage = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="row">
          <h1 className="userName">Hello financier!</h1>
          <div className="filterDate">
            <p>Monthly</p>
            <p>Weekly</p>
            <p>Daily</p>
          </div>
        </div>
        <div className="row mt-32">
          <BalanceCard name={"Balance"} sum={"2 000 000 sum"} />
          <BalanceCard name={"Income"} sum={"7 092 030 sum"} />
          <BalanceCard name={"Expense"} sum={"3 406 280 sum"} />
        </div>
        <div className="cardScrollContainer">
          {[1, 2, 3, 4, 5, 6, 7].map((item) => (
            <FasterCard key={item} sum="2000 sum" name="Metro" />
          ))}
        </div>
        <div className="mt-32 row_align">
          <SideBarChart />
          <ExpenseHistory />
        </div>
        <div className="mt-32">
          <MonthlyChart />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
