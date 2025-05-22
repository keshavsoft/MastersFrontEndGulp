let StartFunc = async () => {
    let jVarLocalFetchUrl = `/Masters/MastersCustomers/ShowAll`;
    let response = await fetch(jVarLocalFetchUrl);

    return await response;
};

export { StartFunc };

