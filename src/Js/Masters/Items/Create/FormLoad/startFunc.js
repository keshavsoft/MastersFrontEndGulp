import { StartFunc as StartFuncAddListeners } from "./AddListeners/StartFunc.js";
import { StartFunc as ToDataList } from "./ToDataList/StartFunc.js";

const StartFunc = async () => {
    StartFuncAddListeners();
    ToDataList();
};

export { StartFunc };
