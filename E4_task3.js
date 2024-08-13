function createEmptyObject() {
    return Object.create(null);
}

const testObject = createEmptyObject();

console.log(Object.getPrototypeOf(testObject));
