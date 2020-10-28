export default interface Notificacion{
    id: number;
    destinatario:destinatario;
    titulo:string;
    descripcion:string;
    urlAplicacion: string;
    imagen:string;
}

 const enum destinatario {jubilado,estudiantePrimaria,estudianteSecundaria}; 