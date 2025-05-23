const StartFunc = () => {
    let jVarLocalCustomerName = jFLocalFooterCategoryId();
    let jVarLocalMobile = LocalFuncForjVarLocalFooterItemType();
    let jVarLocalDOB = jFLocalFooterItemService();
    let jVarLocalGSTNumber = jFLocalFooterItemName();
    let jVarLocalCity = jFLocalFooterPcs();
    let jVarLocalOccupation = jFLocalFooterRate();

    let LocalObj = {};
    LocalObj.Category = jVarLocalCustomerName;
    LocalObj.ItemType = jVarLocalMobile;
    LocalObj.Service = jVarLocalDOB;
    LocalObj.ItemName = jVarLocalGSTNumber;
    LocalObj.Pcs = jVarLocalCity;
    LocalObj.DryWashRate = jVarLocalOccupation;

    return LocalObj;
};

let jFLocalFooterCategoryId = () => {
    let jVarLocalTableFooterRateInputId = 'FooterCategoryId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalTableFooterRateInputId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

let LocalFuncForjVarLocalFooterItemType = () => {
    let jVarLocalFooterItemType = 'FooterItemType'
    let jVarLocalHtmlId = document.getElementById(jVarLocalFooterItemType);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

let jFLocalFooterItemService = () => {
    let jVarLocalFooterItemService = 'FooterItemService'
    let jVarLocalHtmlId = document.getElementById(jVarLocalFooterItemService);

    if (jVarLocalHtmlId === null === false) {
    return jVarLocalHtmlId.value.trim();
    };
};

let jFLocalFooterItemName = () => {
    let jVarLocalFooterItemName = 'FooterItemName'
    let jVarLocalHtmlId = document.getElementById(jVarLocalFooterItemName);

    if (jVarLocalHtmlId === null === false) {
    return jVarLocalHtmlId.value.trim();
    };
};

let jFLocalFooterPcs = () => {
    let jVarLocalFooterPcs = 'FooterPcs'
    let jVarLocalHtmlId = document.getElementById(jVarLocalFooterPcs);

    if (jVarLocalHtmlId === null === false) {
    return jVarLocalHtmlId.value.trim();
    };
};

let jFLocalFooterRate = () => {
    let jVarLocalFooterRate = 'FooterRate'
    let jVarLocalHtmlId = document.getElementById(jVarLocalFooterRate);

    if (jVarLocalHtmlId === null === false) {
    return jVarLocalHtmlId.value.trim();
    };
};

export { StartFunc }