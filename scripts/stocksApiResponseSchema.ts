import * as z from "zod";

export const DetailsSchema = z.object({});
export type Details = z.infer<typeof DetailsSchema>;

export const ExDividendDateSchema = z.object({
     raw: z.number(),
     fmt: z.string(),
});
export type ExDividendDate = z.infer<typeof ExDividendDateSchema>;

export const EnterpriseValueSchema = z.object({
     raw: z.number(),
     fmt: z.union([z.null(), z.string()]),
     longFmt: z.string(),
});
export type EnterpriseValue = z.infer<typeof EnterpriseValueSchema>;

export const DefaultKeyStatisticsSchema = z.object({
     annualHoldingsTurnover: DetailsSchema,
     enterpriseToRevenue: ExDividendDateSchema,
     beta3Year: DetailsSchema,
     profitMargins: ExDividendDateSchema,
     enterpriseToEbitda: ExDividendDateSchema,
     "52WeekChange": ExDividendDateSchema,
     morningStarRiskRating: DetailsSchema,
     forwardEps: ExDividendDateSchema,
     revenueQuarterlyGrowth: DetailsSchema,
     sharesOutstanding: EnterpriseValueSchema,
     fundInceptionDate: DetailsSchema,
     annualReportExpenseRatio: DetailsSchema,
     totalAssets: DetailsSchema,
     bookValue: ExDividendDateSchema,
     sharesShort: DetailsSchema,
     sharesPercentSharesOut: DetailsSchema,
     fundFamily: z.null(),
     lastFiscalYearEnd: ExDividendDateSchema,
     heldPercentInstitutions: ExDividendDateSchema,
     netIncomeToCommon: EnterpriseValueSchema,
     trailingEps: ExDividendDateSchema,
     lastDividendValue: ExDividendDateSchema,
     SandP52WeekChange: ExDividendDateSchema,
     priceToBook: ExDividendDateSchema,
     heldPercentInsiders: ExDividendDateSchema,
     nextFiscalYearEnd: ExDividendDateSchema,
     yield: DetailsSchema,
     mostRecentQuarter: ExDividendDateSchema,
     shortRatio: DetailsSchema,
     sharesShortPreviousMonthDate: DetailsSchema,
     floatShares: EnterpriseValueSchema,
     beta: ExDividendDateSchema,
     enterpriseValue: EnterpriseValueSchema,
     priceHint: EnterpriseValueSchema,
     threeYearAverageReturn: DetailsSchema,
     lastSplitDate: ExDividendDateSchema,
     lastSplitFactor: z.string(),
     legalType: z.null(),
     lastDividendDate: ExDividendDateSchema,
     morningStarOverallRating: DetailsSchema,
     earningsQuarterlyGrowth: ExDividendDateSchema,
     priceToSalesTrailing12Months: DetailsSchema,
     dateShortInterest: DetailsSchema,
     pegRatio: ExDividendDateSchema,
     ytdReturn: DetailsSchema,
     forwardPE: ExDividendDateSchema,
     maxAge: z.number(),
     lastCapGain: DetailsSchema,
     shortPercentOfFloat: DetailsSchema,
     sharesShortPriorMonth: DetailsSchema,
     impliedSharesOutstanding: EnterpriseValueSchema,
     category: z.null(),
     fiveYearAverageReturn: DetailsSchema,
});
export type DefaultKeyStatistics = z.infer<typeof DefaultKeyStatisticsSchema>;

export const EarningsChartQuarterlySchema = z.object({
     date: z.string(),
     actual: ExDividendDateSchema,
     estimate: ExDividendDateSchema,
});
export type EarningsChartQuarterly = z.infer<
     typeof EarningsChartQuarterlySchema
>;

export const FinancialsChartQuarterlySchema = z.object({
     date: z.string(),
     revenue: EnterpriseValueSchema,
     earnings: EnterpriseValueSchema,
});
export type FinancialsChartQuarterly = z.infer<
     typeof FinancialsChartQuarterlySchema
>;

export const YearlySchema = z.object({
     date: z.number(),
     revenue: EnterpriseValueSchema,
     earnings: EnterpriseValueSchema,
});
export type Yearly = z.infer<typeof YearlySchema>;

export const FinancialDataSchema = z.object({
     ebitdaMargins: ExDividendDateSchema,
     profitMargins: ExDividendDateSchema,
     grossMargins: ExDividendDateSchema,
     operatingCashflow: EnterpriseValueSchema,
     revenueGrowth: ExDividendDateSchema,
     operatingMargins: ExDividendDateSchema,
     ebitda: EnterpriseValueSchema,
     targetLowPrice: ExDividendDateSchema,
     recommendationKey: z.string(),
     grossProfits: DetailsSchema,
     freeCashflow: EnterpriseValueSchema,
     targetMedianPrice: ExDividendDateSchema,
     currentPrice: ExDividendDateSchema,
     earningsGrowth: ExDividendDateSchema,
     currentRatio: ExDividendDateSchema,
     returnOnAssets: ExDividendDateSchema,
     numberOfAnalystOpinions: EnterpriseValueSchema,
     targetMeanPrice: ExDividendDateSchema,
     debtToEquity: ExDividendDateSchema,
     returnOnEquity: ExDividendDateSchema,
     targetHighPrice: ExDividendDateSchema,
     totalCash: EnterpriseValueSchema,
     totalDebt: EnterpriseValueSchema,
     totalRevenue: EnterpriseValueSchema,
     totalCashPerShare: ExDividendDateSchema,
     financialCurrency: z.string(),
     maxAge: z.number(),
     revenuePerShare: ExDividendDateSchema,
     quickRatio: ExDividendDateSchema,
     recommendationMean: ExDividendDateSchema,
});
export type FinancialData = z.infer<typeof FinancialDataSchema>;

export const FinancialsTemplateSchema = z.object({
     code: z.string(),
     maxAge: z.number(),
});
export type FinancialsTemplate = z.infer<typeof FinancialsTemplateSchema>;

export const OwnershipSchema = z.object({
     maxAge: z.number(),
     ownershipList: z.array(z.any()),
});
export type Ownership = z.infer<typeof OwnershipSchema>;

export const HoldersSchema = z.object({
     holders: z.array(z.any()),
     maxAge: z.number(),
});
export type Holders = z.infer<typeof HoldersSchema>;

export const MajorHoldersBreakdownSchema = z.object({
     maxAge: z.number(),
     insidersPercentHeld: ExDividendDateSchema,
     institutionsPercentHeld: ExDividendDateSchema,
     institutionsFloatPercentHeld: ExDividendDateSchema,
     institutionsCount: EnterpriseValueSchema,
});
export type MajorHoldersBreakdown = z.infer<typeof MajorHoldersBreakdownSchema>;

export const NetSharePurchaseActivitySchema = z.object({
     maxAge: z.number(),
     period: z.string(),
     buyInfoCount: EnterpriseValueSchema,
     buyInfoShares: EnterpriseValueSchema,
     sellInfoCount: EnterpriseValueSchema,
     netInfoCount: EnterpriseValueSchema,
     netInfoShares: EnterpriseValueSchema,
     totalInsiderShares: EnterpriseValueSchema,
});
export type NetSharePurchaseActivity = z.infer<
     typeof NetSharePurchaseActivitySchema
>;

export const PriceSchema = z.object({
     quoteSourceName: z.string(),
     regularMarketOpen: ExDividendDateSchema,
     averageDailyVolume3Month: EnterpriseValueSchema,
     exchange: z.string(),
     regularMarketTime: z.number(),
     volume24Hr: DetailsSchema,
     regularMarketDayHigh: ExDividendDateSchema,
     shortName: z.string(),
     averageDailyVolume10Day: EnterpriseValueSchema,
     longName: z.string(),
     regularMarketChange: ExDividendDateSchema,
     currencySymbol: z.string(),
     regularMarketPreviousClose: ExDividendDateSchema,
     preMarketPrice: DetailsSchema,
     exchangeDataDelayedBy: z.number(),
     toCurrency: z.null(),
     postMarketChange: DetailsSchema,
     postMarketPrice: DetailsSchema,
     exchangeName: z.string(),
     preMarketChange: DetailsSchema,
     circulatingSupply: DetailsSchema,
     regularMarketDayLow: ExDividendDateSchema,
     priceHint: EnterpriseValueSchema,
     currency: z.string(),
     regularMarketPrice: ExDividendDateSchema,
     regularMarketVolume: EnterpriseValueSchema,
     lastMarket: z.null(),
     regularMarketSource: z.string(),
     openInterest: DetailsSchema,
     marketState: z.string(),
     underlyingSymbol: z.null(),
     marketCap: EnterpriseValueSchema,
     quoteType: z.string(),
     volumeAllCurrencies: DetailsSchema,
     strikePrice: DetailsSchema,
     symbol: z.string(),
     maxAge: z.number(),
     fromCurrency: z.null(),
     regularMarketChangePercent: ExDividendDateSchema,
});
export type Price = z.infer<typeof PriceSchema>;

export const QuoteTypeSchema = z.object({
     exchange: z.string(),
     shortName: z.string(),
     longName: z.string(),
     exchangeTimezoneName: z.string(),
     hasSelerityEarnings: z.boolean(),
     exchangeTimezoneShortName: z.string(),
     isEsgPopulated: z.boolean(),
     gmtOffSetMilliseconds: z.string(),
     quoteType: z.string(),
     symbol: z.string(),
     messageBoardId: z.string(),
     market: z.string(),
});
export type QuoteType = z.infer<typeof QuoteTypeSchema>;

export const TrendSchema = z.object({
     period: z.string(),
     strongBuy: z.number(),
     buy: z.number(),
     hold: z.number(),
     sell: z.number(),
     strongSell: z.number(),
});
export type Trend = z.infer<typeof TrendSchema>;

export const SummaryDetailSchema = z.object({
     previousClose: ExDividendDateSchema,
     regularMarketOpen: ExDividendDateSchema,
     twoHundredDayAverage: ExDividendDateSchema,
     trailingAnnualDividendYield: ExDividendDateSchema,
     payoutRatio: ExDividendDateSchema,
     volume24Hr: DetailsSchema,
     regularMarketDayHigh: ExDividendDateSchema,
     navPrice: DetailsSchema,
     averageDailyVolume10Day: EnterpriseValueSchema,
     totalAssets: DetailsSchema,
     regularMarketPreviousClose: ExDividendDateSchema,
     fiftyDayAverage: ExDividendDateSchema,
     trailingAnnualDividendRate: ExDividendDateSchema,
     open: ExDividendDateSchema,
     toCurrency: z.null(),
     averageVolume10days: EnterpriseValueSchema,
     expireDate: DetailsSchema,
     yield: DetailsSchema,
     algorithm: z.null(),
     dividendRate: ExDividendDateSchema,
     exDividendDate: ExDividendDateSchema,
     beta: ExDividendDateSchema,
     circulatingSupply: DetailsSchema,
     startDate: DetailsSchema,
     regularMarketDayLow: ExDividendDateSchema,
     priceHint: EnterpriseValueSchema,
     currency: z.string(),
     trailingPE: ExDividendDateSchema,
     regularMarketVolume: EnterpriseValueSchema,
     lastMarket: z.null(),
     maxSupply: DetailsSchema,
     openInterest: DetailsSchema,
     marketCap: EnterpriseValueSchema,
     volumeAllCurrencies: DetailsSchema,
     strikePrice: DetailsSchema,
     averageVolume: EnterpriseValueSchema,
     priceToSalesTrailing12Months: ExDividendDateSchema,
     dayLow: ExDividendDateSchema,
     ask: ExDividendDateSchema,
     ytdReturn: DetailsSchema,
     askSize: EnterpriseValueSchema,
     volume: EnterpriseValueSchema,
     fiftyTwoWeekHigh: ExDividendDateSchema,
     forwardPE: ExDividendDateSchema,
     maxAge: z.number(),
     fromCurrency: z.null(),
     fiveYearAvgDividendYield: ExDividendDateSchema,
     fiftyTwoWeekLow: ExDividendDateSchema,
     bid: ExDividendDateSchema,
     tradeable: z.boolean(),
     dividendYield: ExDividendDateSchema,
     bidSize: EnterpriseValueSchema,
     dayHigh: ExDividendDateSchema,
     coinMarketCapLink: z.null(),
});
export type SummaryDetail = z.infer<typeof SummaryDetailSchema>;

export const SummaryProfileSchema = z.object({
     industryDisp: z.string(),
     zip: z.string(),
     industryKey: z.string(),
     sector: z.string(),
     sectorDisp: z.string(),
     fullTimeEmployees: z.number(),
     longBusinessSummary: z.string(),
     city: z.string(),
     phone: z.string(),
     state: z.string(),
     country: z.string(),
     sectorKey: z.string(),
     companyOfficers: z.array(z.any()),
     website: z.string(),
     maxAge: z.number(),
     address1: z.string(),
     fax: z.string(),
     industry: z.string(),
     address2: z.string(),
});
export type SummaryProfile = z.infer<typeof SummaryProfileSchema>;

export const CalendarEventsEarningsSchema = z.object({
     revenueAverage: EnterpriseValueSchema,
     isEarningsDateEstimate: z.boolean(),
     earningsLow: ExDividendDateSchema,
     earningsHigh: ExDividendDateSchema,
     earningsAverage: ExDividendDateSchema,
     earningsCallDate: z.array(ExDividendDateSchema),
     earningsDate: z.array(ExDividendDateSchema),
     revenueLow: EnterpriseValueSchema,
     revenueHigh: EnterpriseValueSchema,
});
export type CalendarEventsEarnings = z.infer<
     typeof CalendarEventsEarningsSchema
>;

export const EarningsChartSchema = z.object({
     quarterly: z.array(EarningsChartQuarterlySchema),
     currentQuarterEstimate: ExDividendDateSchema,
     currentQuarterEstimateDate: z.string(),
     currentQuarterEstimateYear: z.number(),
     earningsDate: z.array(ExDividendDateSchema),
     isEarningsDateEstimate: z.boolean(),
});
export type EarningsChart = z.infer<typeof EarningsChartSchema>;

export const FinancialsChartSchema = z.object({
     yearly: z.array(YearlySchema),
     quarterly: z.array(FinancialsChartQuarterlySchema),
});
export type FinancialsChart = z.infer<typeof FinancialsChartSchema>;

export const RecommendationTrendSchema = z.object({
     trend: z.array(TrendSchema),
     maxAge: z.number(),
});
export type RecommendationTrend = z.infer<typeof RecommendationTrendSchema>;

export const CalendarEventsSchema = z.object({
     maxAge: z.number(),
     earnings: CalendarEventsEarningsSchema,
     exDividendDate: ExDividendDateSchema,
     dividendDate: DetailsSchema,
});
export type CalendarEvents = z.infer<typeof CalendarEventsSchema>;

export const StocksApiResponseEarningsSchema = z.object({
     maxAge: z.number(),
     earningsChart: EarningsChartSchema,
     financialsChart: FinancialsChartSchema,
     financialCurrency: z.string(),
});
export type StocksApiResponseEarnings = z.infer<
     typeof StocksApiResponseEarningsSchema
>;

export const StocksApiResponseSchema = z.object({
     defaultKeyStatistics: DefaultKeyStatisticsSchema,
     details: DetailsSchema,
     summaryProfile: SummaryProfileSchema,
     recommendationTrend: RecommendationTrendSchema,
     financialsTemplate: FinancialsTemplateSchema,
     majorDirectHolders: HoldersSchema,
     earnings: StocksApiResponseEarningsSchema,
     price: PriceSchema,
     fundOwnership: OwnershipSchema,
     insiderTransactions: DetailsSchema,
     insiderHolders: HoldersSchema,
     netSharePurchaseActivity: NetSharePurchaseActivitySchema,
     majorHoldersBreakdown: MajorHoldersBreakdownSchema,
     financialData: FinancialDataSchema,
     quoteType: QuoteTypeSchema,
     institutionOwnership: OwnershipSchema,
     calendarEvents: CalendarEventsSchema,
     summaryDetail: SummaryDetailSchema,
     symbol: z.string(),
     esgScores: DetailsSchema,
     upgradeDowngradeHistory: DetailsSchema,
     pageViews: DetailsSchema,
});
export type StocksApiResponse = z.infer<typeof StocksApiResponseSchema>;
