import TipoUsuario from "src/app/tipousuario/interface/TipoUsuario";
import { Pasajero } from "src/app/pasajero/interfaces/Pasajero";
export interface Usuario {
    iduser:       number;
    idpassenger:  number;
    user:         string;
    password:     string;
    usertpe:      number;
    active:       string;
    objuserType?:  TipoUsuario;
    objPassenger?: Pasajero;
}