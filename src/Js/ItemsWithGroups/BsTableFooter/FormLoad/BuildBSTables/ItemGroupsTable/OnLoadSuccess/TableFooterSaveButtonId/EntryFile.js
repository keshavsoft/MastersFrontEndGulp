import { StartFunc as StartFuncButtonClickFunc } from "./ButtonClickFunc.js";

let StartFunc = () => {
    let jVarLocalRefreshBSTableId = document.getElementById("TableFooterSaveButtonId");

    if (jVarLocalRefreshBSTableId) {
        jVarLocalRefreshBSTableId.addEventListener("click", StartFuncButtonClickFunc);
    }
};

export { StartFunc };
