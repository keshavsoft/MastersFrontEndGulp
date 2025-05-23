import UrlJson from "../../../Config.json" with { type: "json" };

let StartFunc = async () => {

    let jVarLocalFetchUrl = `/Masters/MastersItemService/ShowAll`;
    let response = await fetch(jVarLocalFetchUrl);

    return await response;
};

export { StartFunc };

