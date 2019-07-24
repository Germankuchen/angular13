export class Video {
    public imagenURL: string;
    public id: string;
    public titulo: string;

    constructor(imagenURL: string, id: string, titulo: string) {
        this.imagenURL = imagenURL;
        this.id = id;
        this.titulo = titulo;
    }

}