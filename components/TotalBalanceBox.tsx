import React from "react";
import AnimatedCounter from "./AnimatedCounter";
import DoughnutChart from "./DoughnutChart";


const TotalBalanceBox = ({
  accounts = [],
  totalBanks,
  totalCurrentBalance,
}: TotalBalanceBoxProps) => {
  return (
    <div>
      <section className="total-balance">
        <div className="">
          <DoughnutChart accounts={accounts}/>
          </div>
        <div className="flex flex-col gap-6">
          <h2 className="header-2">Bank Accounts: {totalBanks}</h2>
          <div className="flex flex-col gap-2">
            <p className="total-balance-label">Total Curent balance</p>
            <div className="total-balance-amount flex-center gap-2">
             <AnimatedCounter
             amount={totalCurrentBalance}
             />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TotalBalanceBox;