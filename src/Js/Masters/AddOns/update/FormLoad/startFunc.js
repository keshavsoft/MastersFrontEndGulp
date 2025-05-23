import { StartFunc as StartFuncAddListeners } from "./AddListeners/startFunc.js";
import { StartFunc as ToDataList } from "./ToDataList/startFunc.js";
import { StartFunc as UserDetails } from "./UserDetails/Entry.js";

const StartFunc = async () => {
    StartFuncAddListeners();
    ToDataList();
    UserDetails();
};

export { StartFunc };
