export class LocalStorageMock {
    private storage: {[key: string]: string} = {};

    public getItem(key: string): string | null {
        return this.storage[key] || null;
    }

    public setItem(key: string, value: string): void {
        this.storage[key] = value;
    }

    public removeItem(key: string): void {
        delete this.storage[key];
    }

    public clear(): void {
        this.storage = {};
    }
}
