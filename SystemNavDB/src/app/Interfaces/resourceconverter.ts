import IResource from './resourceinterface';
// Convert to wellness tip format
const convertToResourceSmartsheet = (cells:any[]) =>{
  const converted:IResource = {
    healthTheme:cells[0].value,
    subTopic:cells[1].value,
    tag:cells[2].value,
    category:cells[3].value,
    language:cells[4].value,
    name:cells[5].value,
    description:cells[6].value,
    webLink:cells[7].value




  };
  return converted;
};

export {
  convertToResourceSmartsheet,
};
