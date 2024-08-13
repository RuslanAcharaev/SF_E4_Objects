function checkProperty(propertyKey, object) {
    return propertyKey in object;
}


const testObject = {
    property1: 'a',
    property2: 'b',
    property3: 'c'
}

const testString = 'property3'

checkProperty(testString, testObject);
