import { Market } from "@ionic-native/market";

const FuncionDePrueba: any = (appId: string) => {
  const prueba = () => {
    Market.open(appId);
    console.log(appId);
  };
  return {
    handlers: { prueba },
  };
};
 
export default FuncionDePrueba;
