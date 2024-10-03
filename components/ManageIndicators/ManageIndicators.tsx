import DividendsIndicatorsCheckboxList from "@/components/ManageIndicators/CheckboxLists/DividendsIndicatorsCheckboxList";
import FinancialIndicatorsCheckboxList from "@/components/ManageIndicators/CheckboxLists/FinancialIndicatorsCheckboxList";
import GeneralIndicatorsCheckboxList from "@/components/ManageIndicators/CheckboxLists/GeneralIndicatorsCheckboxList";
import LiquidityIndicatorsCheckboxList from "@/components/ManageIndicators/CheckboxLists/LiquidityIndicatorsCheckboxList";
import ModalLayout from "../Modals/ModalLayout";
import PrinceIndicatorsCheckboxList from "@/components/ManageIndicators/CheckboxLists/PriceIndicatorsCheckboxList";
import ProfitabilityIndicatorsCheckboxList from "@/components/ManageIndicators/CheckboxLists/ProfitabilityIndicatorsCheckboxList";
import ReturnsIndicatorsCheckboxList from "@/components/ManageIndicators/CheckboxLists/ReturnsIndicatorsCheckboxList";
import TradingIndicatorsCheckboxList from "@/components/ManageIndicators/CheckboxLists/TradingIndicatorsCheckboxList";
import ValuationIndicatorsCheckboxList from "@/components/ManageIndicators/CheckboxLists/ValuationIndicatorsCheckboxList";
import VolatilityIndicatorsCheckboxList from "@/components/ManageIndicators/CheckboxLists/VolatilityIndicatorsCheckboxList";

export default function ManageIndicators() {
     return (
          <ModalLayout title="Manage Indicators">
               <div className="grid w-11/12 gap-10 pb-20 text-kiwicolor8">
                    <GeneralIndicatorsCheckboxList />
                    <PrinceIndicatorsCheckboxList />
                    <TradingIndicatorsCheckboxList />
                    <ValuationIndicatorsCheckboxList />
                    <ProfitabilityIndicatorsCheckboxList />
                    <DividendsIndicatorsCheckboxList />
                    <LiquidityIndicatorsCheckboxList />
                    <ReturnsIndicatorsCheckboxList />
                    <VolatilityIndicatorsCheckboxList />
                    <FinancialIndicatorsCheckboxList />
               </div>
          </ModalLayout>
     );
}
