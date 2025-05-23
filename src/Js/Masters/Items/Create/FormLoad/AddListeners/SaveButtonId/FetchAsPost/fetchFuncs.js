import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/entryFile.js";
import { StartFunc as ItemNameGenerate } from "./ItemNameGenerate.js";
import ConfigJson from '../../../../Config.json' with {type: 'json'};

let StartFunc = async () => {
    ItemNameGenerate();
    const jVarLocalStartUrl = ConfigJson.Url;
    let jVarLocalFetchUrl = `${jVarLocalStartUrl}`;

    let jVarLocalFetchHeaders = StartFuncFetchHeaders();
    let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);

    return await response;
};

export { StartFunc };

