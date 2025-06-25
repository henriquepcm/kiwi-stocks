import React from "react";
import GeneralIndicatorsCheckboxList from "@/components/ManageIndicators/CheckboxLists/GeneralIndicatorsCheckboxList";
import ModalLayout from "../Modals/ModalLayout";

export default function ManageIndicators() {
     return (
          <ModalLayout title="Manage Indicators">
               <div className="grid w-11/12 gap-10 pb-20 text-kiwicolor8">
                    <GeneralIndicatorsCheckboxList />
               </div>
          </ModalLayout>
     );
}
