let StartFunc = ({ inDataToShow }) => {
    let jVarLocalData = inDataToShow;
    
    jFLocalToInputAddOnService({ inValue: jVarLocalData.AddOnService });
    jFLocalToInputAddOnRate({ AddRate: jVarLocalData.AddOnRate });
    
};

let jFLocalToInputAddOnService = ({inValue}) => {
    let jVarLocalHtmlId = 'AddOnService';
   let jVarLocalAddOnService = document.getElementById(jVarLocalHtmlId);
   
   if (jVarLocalAddOnService === null === false) {
      jVarLocalAddOnService.value = inValue;
   };
};

let jFLocalToInputAddOnRate = ({AddRate}) => {
    let jVarLocalHtmlId = 'AddOnRate';
   let jVarLocalAddOnRate = document.getElementById(jVarLocalHtmlId);
   
   if (jVarLocalAddOnRate === null === false) {
      jVarLocalAddOnRate.value = AddRate;
   };
};
export { StartFunc };