class Data_Store<T> {
    private items: T[] = [];

    add_item(item: T): void{
        this.items.push(item);
    }
}

const data_1 = new Data_Store<number>()
const data_2 = new Data_Store<string>()