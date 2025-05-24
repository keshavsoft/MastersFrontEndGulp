import { StartFunc as StartFuncOnLoadSuccess } from "./OnLoadSuccess/EntryFile.js";
import ConfigJson from './options.json' with {type: 'json'};

const StartFunc = () => {
    var $table = $('#table');
    const LocalConfigJson = ConfigJson;

    LocalConfigJson.data = [];
    LocalConfigJson.onPostBody = () => {
        StartFuncOnLoadSuccess();
        $("#TableFooterItemNameInputId").focus();
    };

    $table.bootstrapTable(LocalConfigJson);
};

export { StartFunc };
