const StartFunc = () => {
    let jVarLocalCustomerName = jFLocalFooterCustomerName();
    let jVarLocalMobile = LocalFuncForjVarLocalFooterMobile();
    let jVarLocalDOB = jFLocalFooterDOB();
    let jVarLocalGSTNumber = jFLocalFooterGSTNumber();
    let jVarLocalCity = jFLocalFooterCity();
    let jVarLocalOccupation = jFLocalFooterOccupation();
    let jVarLocalComapanyName = jFLocalFooterComapanyName();

    let LocalObj = {};
    LocalObj.CustomerName = jVarLocalCustomerName;
    LocalObj.Mobile = jVarLocalMobile;
    LocalObj.DOB = jVarLocalDOB;
    LocalObj.GSTNumber = jVarLocalGSTNumber;
    LocalObj.City = jVarLocalCity;
    LocalObj.Occupation = jVarLocalOccupation;
    LocalObj.CompanyName = jVarLocalComapanyName;

    return LocalObj;
};

let jFLocalFooterCustomerName = () => {
    let jVarLocalTableFooterRateInputId = 'FooterCustomerName'
    let jVarLocalHtmlId = document.getElementById(jVarLocalTableFooterRateInputId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

let LocalFuncForjVarLocalFooterMobile = () => {
    let jVarLocalFooterMobile = 'FooterMobile'
    let jVarLocalHtmlId = document.getElementById(jVarLocalFooterMobile);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

let jFLocalFooterDOB = () => {
    let jVarLocalFooterDOB = 'FooterDOB'
    let jVarLocalHtmlId = document.getElementById(jVarLocalFooterDOB);

    if (jVarLocalHtmlId === null === false) {
    return jVarLocalHtmlId.value.trim();
    };
};

let jFLocalFooterGSTNumber = () => {
    let jVarLocalFooterGSTNumber = 'FooterGSTNumber'
    let jVarLocalHtmlId = document.getElementById(jVarLocalFooterGSTNumber);

    if (jVarLocalHtmlId === null === false) {
    return jVarLocalHtmlId.value.trim();
    };
};

let jFLocalFooterCity = () => {
    let jVarLocalFooterCity = 'FooterCity'
    let jVarLocalHtmlId = document.getElementById(jVarLocalFooterCity);

    if (jVarLocalHtmlId === null === false) {
    return jVarLocalHtmlId.value.trim();
    };
};

let jFLocalFooterOccupation = () => {
    let jVarLocalFooterOccupation = 'FooterOccupation'
    let jVarLocalHtmlId = document.getElementById(jVarLocalFooterOccupation);

    if (jVarLocalHtmlId === null === false) {
    return jVarLocalHtmlId.value.trim();
    };
};

let jFLocalFooterComapanyName = () => {
    let jVarLocalFooterComapanyName = 'FooterComapanyName'
    let jVarLocalHtmlId = document.getElementById(jVarLocalFooterComapanyName);

    if (jVarLocalHtmlId === null === false) {
    return jVarLocalHtmlId.value.trim();
    };
};
export { StartFunc }