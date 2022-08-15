export class ChecklistItem {
    public constructor(public id: number, public name: string, public isSelected: boolean) {}

    public toggle(): void {
        this.isSelected = !this.isSelected;
    }
}
