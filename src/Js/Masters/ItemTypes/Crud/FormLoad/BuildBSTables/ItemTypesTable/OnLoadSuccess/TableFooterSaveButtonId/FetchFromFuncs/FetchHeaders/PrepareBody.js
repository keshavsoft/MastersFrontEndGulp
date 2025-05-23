const StartFunc = () => {
    let jVarLocalItemTypes = jFLocalFooterItemTypes();

    let LocalObj = {};
    LocalObj.ItemType = jVarLocalItemTypes;

    return LocalObj;
};

let jFLocalFooterItemTypes = () => {
    let jVarLocalTableFooterItemTypes = 'FooterItemTypes'
    let jVarLocalHtmlId = document.getElementById(jVarLocalTableFooterItemTypes);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

export { StartFunc }