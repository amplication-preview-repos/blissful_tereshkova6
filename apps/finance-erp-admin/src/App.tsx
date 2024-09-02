import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ReportList } from "./report/ReportList";
import { ReportCreate } from "./report/ReportCreate";
import { ReportEdit } from "./report/ReportEdit";
import { ReportShow } from "./report/ReportShow";
import { FundRequestList } from "./fundRequest/FundRequestList";
import { FundRequestCreate } from "./fundRequest/FundRequestCreate";
import { FundRequestEdit } from "./fundRequest/FundRequestEdit";
import { FundRequestShow } from "./fundRequest/FundRequestShow";
import { TreasuryTransactionList } from "./treasuryTransaction/TreasuryTransactionList";
import { TreasuryTransactionCreate } from "./treasuryTransaction/TreasuryTransactionCreate";
import { TreasuryTransactionEdit } from "./treasuryTransaction/TreasuryTransactionEdit";
import { TreasuryTransactionShow } from "./treasuryTransaction/TreasuryTransactionShow";
import { ContractList } from "./contract/ContractList";
import { ContractCreate } from "./contract/ContractCreate";
import { ContractEdit } from "./contract/ContractEdit";
import { ContractShow } from "./contract/ContractShow";
import { BudgetList } from "./budget/BudgetList";
import { BudgetCreate } from "./budget/BudgetCreate";
import { BudgetEdit } from "./budget/BudgetEdit";
import { BudgetShow } from "./budget/BudgetShow";
import { AssetList } from "./asset/AssetList";
import { AssetCreate } from "./asset/AssetCreate";
import { AssetEdit } from "./asset/AssetEdit";
import { AssetShow } from "./asset/AssetShow";
import { FinancialAccountList } from "./financialAccount/FinancialAccountList";
import { FinancialAccountCreate } from "./financialAccount/FinancialAccountCreate";
import { FinancialAccountEdit } from "./financialAccount/FinancialAccountEdit";
import { FinancialAccountShow } from "./financialAccount/FinancialAccountShow";
import { InvoiceList } from "./invoice/InvoiceList";
import { InvoiceCreate } from "./invoice/InvoiceCreate";
import { InvoiceEdit } from "./invoice/InvoiceEdit";
import { InvoiceShow } from "./invoice/InvoiceShow";
import { ProcurementOrderList } from "./procurementOrder/ProcurementOrderList";
import { ProcurementOrderCreate } from "./procurementOrder/ProcurementOrderCreate";
import { ProcurementOrderEdit } from "./procurementOrder/ProcurementOrderEdit";
import { ProcurementOrderShow } from "./procurementOrder/ProcurementOrderShow";
import { EmployeeList } from "./employee/EmployeeList";
import { EmployeeCreate } from "./employee/EmployeeCreate";
import { EmployeeEdit } from "./employee/EmployeeEdit";
import { EmployeeShow } from "./employee/EmployeeShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"FinanceERP"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Report"
          list={ReportList}
          edit={ReportEdit}
          create={ReportCreate}
          show={ReportShow}
        />
        <Resource
          name="FundRequest"
          list={FundRequestList}
          edit={FundRequestEdit}
          create={FundRequestCreate}
          show={FundRequestShow}
        />
        <Resource
          name="TreasuryTransaction"
          list={TreasuryTransactionList}
          edit={TreasuryTransactionEdit}
          create={TreasuryTransactionCreate}
          show={TreasuryTransactionShow}
        />
        <Resource
          name="Contract"
          list={ContractList}
          edit={ContractEdit}
          create={ContractCreate}
          show={ContractShow}
        />
        <Resource
          name="Budget"
          list={BudgetList}
          edit={BudgetEdit}
          create={BudgetCreate}
          show={BudgetShow}
        />
        <Resource
          name="Asset"
          list={AssetList}
          edit={AssetEdit}
          create={AssetCreate}
          show={AssetShow}
        />
        <Resource
          name="FinancialAccount"
          list={FinancialAccountList}
          edit={FinancialAccountEdit}
          create={FinancialAccountCreate}
          show={FinancialAccountShow}
        />
        <Resource
          name="Invoice"
          list={InvoiceList}
          edit={InvoiceEdit}
          create={InvoiceCreate}
          show={InvoiceShow}
        />
        <Resource
          name="ProcurementOrder"
          list={ProcurementOrderList}
          edit={ProcurementOrderEdit}
          create={ProcurementOrderCreate}
          show={ProcurementOrderShow}
        />
        <Resource
          name="Employee"
          list={EmployeeList}
          edit={EmployeeEdit}
          create={EmployeeCreate}
          show={EmployeeShow}
        />
      </Admin>
    </div>
  );
};

export default App;
