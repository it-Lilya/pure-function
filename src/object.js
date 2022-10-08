export function dataObject(_data) {
    let result =  0; 
    if(_data.health > 50) {
        result = "healthy";
    }
    if(_data.health >= 15 && _data.health <= 50) {
        result = "wounder";
    }
    if(_data.health < 15) {
        result = "critical";
    }
    return result;
}