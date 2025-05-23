let StartFunc = ({ inDataToShow }) => {
   let jVarLocalData = inDataToShow;

   jFLocalToInputCustomerName({ inValue: jVarLocalData.CustomerName });
   jFLocalToInputMobileNumberId({ MobileNumber: jVarLocalData.Mobile });
   jFLocalToInputdob({ Dob: jVarLocalData.DOB });
   jFLocalToInputGst({ Gst: jVarLocalData.GSTNumber });
   jFLocalToInputLocation({ location: jVarLocalData.City });
   jFLocalToInputOccupation({ Occupation: jVarLocalData.Occupation });
   jFLocalToInputCompanyName({ CompanyName: jVarLocalData.CompanyName });
};

let jFLocalToInputCustomerName = ({ inValue }) => {
   let jVarLocalHtmlId = 'CustomerName';
   let jVarLocalCustomerName = document.getElementById(jVarLocalHtmlId);

   if (jVarLocalCustomerName === null === false) {
      jVarLocalCustomerName.value = inValue;
   };
};

let jFLocalToInputMobileNumberId = ({ MobileNumber }) => {
   let jVarLocalHtmlId = 'MobileNumberId';
   let jVarLocalMobileNumberId = document.getElementById(jVarLocalHtmlId);

   if (jVarLocalMobileNumberId === null === false) {
      jVarLocalMobileNumberId.value = MobileNumber;
   };
};

let jFLocalToInputdob = ({ Dob }) => {
   let jVarLocalHtmlId = 'dob';
   let jVarLocaldob = document.getElementById(jVarLocalHtmlId);

   if (jVarLocaldob === null === false) {
      jVarLocaldob.value = Dob;
   };
};

let jFLocalToInputGst = ({ Gst }) => {
   let jVarLocalHtmlId = 'Gst';
   let jVarLocalGst = document.getElementById(jVarLocalHtmlId);

   if (jVarLocalGst === null === false) {
      jVarLocalGst.value = Gst;
   };
};

let jFLocalToInputLocation = ({ location }) => {
   let jVarLocalHtmlId = 'Location';
   let jVarLocalLocation = document.getElementById(jVarLocalHtmlId);

   if (jVarLocalLocation === null === false) {
      jVarLocalLocation.value = location;
   };
};

let jFLocalToInputOccupation = ({ Occupation }) => {
   let jVarLocalHtmlId = 'Occupation';
   let jVarLocalOccupation = document.getElementById(jVarLocalHtmlId);

   if (jVarLocalOccupation === null === false) {
      jVarLocalOccupation.value = Occupation;
   };
};

let jFLocalToInputCompanyName = ({ CompanyName }) => {
   let jVarLocalHtmlId = 'CompanyName';
   let jVarLocalCompanyName = document.getElementById(jVarLocalHtmlId);

   if (jVarLocalCompanyName === null === false) {
      jVarLocalCompanyName.value = CompanyName;
   };
};
export { StartFunc };