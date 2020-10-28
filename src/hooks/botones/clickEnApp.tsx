const clickEnApp: any = (nameApp: string) => {
  const registrarClick = (nameApp: string) => {
    console.log("Clickeo en" + nameApp);
  };

  return {
    click: { registrarClick },
    // handlers: { abrirLink }
  };
};
export default clickEnApp;
