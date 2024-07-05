export interface alimento{
    idalimento: number;
    nombre: string;
    porcion: number;
    descripcion: string;
    imagen: string;
    idvalornutricional: number;
}

export interface detalle_alimento{
    idpersona: number;
    idalimento: number;
    fecha: Date;
}

export interface Post{
    userId: number;
    id: number;
    body: string;
    title: string;
}

export interface detalle_post{
    userId: number;
    id: number;
    body: string;
    title: string;
}