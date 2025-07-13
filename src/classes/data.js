class Data {
    static test = 'test';
    static storage = [];
    static add(quest) {
        Data.storage.push(quest);
        const newArray = [...Data.storage];  // Trzeba zwracać do useState/useContext nową referencję!!!
        return newArray;
    }
    static remove(idx) {
        Data.storage.splice(idx, 1);
        const newArray = [...Data.storage];
        return newArray;
    }
}

export default Data;