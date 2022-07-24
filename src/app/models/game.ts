export class Game {
    public constructor(
        public id: number,
        public title: string,
        public subtitle: string,
        public description: string,
        public averageRating: number
    ) {}

    public get sliderCoverImage(): string {
        return `assets/images/games/${this.subtitle}/horizontal.webp`;
    }
}
