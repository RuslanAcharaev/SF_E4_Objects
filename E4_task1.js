function getKeys(object){
    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            console.log(`${key}: ${object[key]}`);
        }
    }
}

const protoObject = {
    property1: 'a',
    property2: 'b',
}

const testObject = Object.create(protoObject);

testObject.property3 = 'c';
testObject.property4 = 'd';

getKeys(testObject);
