let StartFunc = async () => {
    let jVarLocalFetchUrl = `/Masters/MastersItemTypes/ShowAll`;
    let response = await fetch(jVarLocalFetchUrl);

    return await response;
};

export { StartFunc };