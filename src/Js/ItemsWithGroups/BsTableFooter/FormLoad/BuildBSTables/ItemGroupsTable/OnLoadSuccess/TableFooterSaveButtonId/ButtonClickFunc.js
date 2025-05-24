import { StartFunc as StartFuncCheckFunc } from "./CheckFunc.js";
import { StartFunc as StartFuncFetchFromFuncs } from "./FetchFromFuncs/Entry.js";

const StartFunc = (event) => {
    const jVarLocalCurrentTarget = event.currentTarget;
    const jVarLocalClosestTr = jVarLocalCurrentTarget.closest("tr");
    const jVarLocalInputs = jVarLocalClosestTr.querySelectorAll("input");

    let jVarLocalPostObject = jFLocalPreparePostBody({ inQuerySelectorAll: jVarLocalInputs });

    console.log("aaaaaaaaa", jVarLocalPostObject);

    // if (StartFuncCheckFunc()) {
    //     StartFuncFetchFromFuncs();
    // };
};

const jFLocalPreparePostBody = ({ inQuerySelectorAll }) => {
    let jVarLocalReturnObject = {};

    inQuerySelectorAll.forEach(LoopItem => {
        jVarLocalReturnObject[LoopItem.name] = LoopItem.value;
    });

    return jVarLocalReturnObject;
};

export { StartFunc }