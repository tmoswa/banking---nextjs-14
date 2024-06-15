import HeaderBox from "@/components/HeaderBox";
import RightSideBar from "@/components/RightSideBar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {
  const loggedIn = {
    $id: "1",
    email: "timothy@softpala.com",
    city: "",
    address: "",
    address1: "",
    state: "",
    postalCode: "",
    dateOfBirth: "",
    ssn: "",
    userId: "2",
    dwollaCustomerUrl: "",
    dwollaCustomerId: "",
    firstName: "Timothy",
    lastName: "Moswa",
  };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your acccount and transactions efficiently"
          />

          <TotalBalanceBox 
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={1250.35}

          />
        </header>

        RECENT TRANSACTIONS

      </div>
      <RightSideBar 
      user={loggedIn}
      transactions={[]}
      banks={[{currentBalance:124.50},
        {currentBalance:184.50}]}
      />
    </section>
  );
};

export default Home;
