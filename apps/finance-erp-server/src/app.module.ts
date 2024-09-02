import { Module } from "@nestjs/common";
import { ReportModule } from "./report/report.module";
import { FundRequestModule } from "./fundRequest/fundRequest.module";
import { TreasuryTransactionModule } from "./treasuryTransaction/treasuryTransaction.module";
import { ContractModule } from "./contract/contract.module";
import { BudgetModule } from "./budget/budget.module";
import { AssetModule } from "./asset/asset.module";
import { FinancialAccountModule } from "./financialAccount/financialAccount.module";
import { InvoiceModule } from "./invoice/invoice.module";
import { ProcurementOrderModule } from "./procurementOrder/procurementOrder.module";
import { EmployeeModule } from "./employee/employee.module";
import { AccountsModule } from "./accounts/accounts.module";
import { BillingModule } from "./billing/billing.module";
import { BudgetManagementModule } from "./budgetmanagement/budgetmanagement.module";
import { ContractsManagementModule } from "./contractsmanagement/contractsmanagement.module";
import { FundRequestModule } from "./fundrequest/fundrequest.module";
import { HumanResourcesModule } from "./humanresources/humanresources.module";
import { ImmobilizedModule } from "./immobilized/immobilized.module";
import { ProcurementModule } from "./procurement/procurement.module";
import { ReportsModule } from "./reports/reports.module";
import { TreasuryModule } from "./treasury/treasury.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    ReportModule,
    FundRequestModule,
    TreasuryTransactionModule,
    ContractModule,
    BudgetModule,
    AssetModule,
    FinancialAccountModule,
    InvoiceModule,
    ProcurementOrderModule,
    EmployeeModule,
    AccountsModule,
    BillingModule,
    BudgetManagementModule,
    ContractsManagementModule,
    FundRequestModule,
    HumanResourcesModule,
    ImmobilizedModule,
    ProcurementModule,
    ReportsModule,
    TreasuryModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
