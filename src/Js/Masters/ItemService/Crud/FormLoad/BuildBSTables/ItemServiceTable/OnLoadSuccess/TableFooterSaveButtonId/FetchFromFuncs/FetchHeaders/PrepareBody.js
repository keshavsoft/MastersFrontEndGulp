const StartFunc = () => {
    let jVarLocalItemService = jFLocalFooterItemService();

    let LocalObj = {};
    LocalObj.ItemService = jVarLocalItemService;

    return LocalObj;
};

let jFLocalFooterItemService = () => {
    let jVarLocalTableFooterItemService = 'FooterItemService'
    let jVarLocalHtmlId = document.getElementById(jVarLocalTableFooterItemService);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

export { StartFunc }