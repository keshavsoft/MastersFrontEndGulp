const StartFunc = () => {
    let jVarLocalAddOnService = jFLocalTableFooterAddOnServiceInputId();
    let jVarLocalAddOnRate = LocalFuncForjVarLocalTableFooterAddOnRateInputId();

    let LocalObj = {};
    LocalObj.AddOnService = jVarLocalAddOnService;
    LocalObj.AddOnRate = jVarLocalAddOnRate;

    return LocalObj;
};

let jFLocalTableFooterAddOnServiceInputId = () => {
    let jVarLocalTableFooterRateInputId = 'TableFooterAddOnServiceInputId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalTableFooterRateInputId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

let LocalFuncForjVarLocalTableFooterAddOnRateInputId = () => {
    let jVarLocalTableFooterAddOnRateInputId = 'TableFooterAddOnRateInputId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalTableFooterAddOnRateInputId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

export { StartFunc }