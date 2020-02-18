export class Chaussure {
    constructor(
        public id: number,
        public nom: string,
        public marque: string,
        public type: string,
        public taille: number,
        public dateEntreStock: Date,
    ){}
}
