export class User {
    public constructor(public username: string, public password: string) {}
    public purchasedGames: Array<number> = [];
    public watchlist: Array<number> = [];
    public cart: Array<number> = [];
}
