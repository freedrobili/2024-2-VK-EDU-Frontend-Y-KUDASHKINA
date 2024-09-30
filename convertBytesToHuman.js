/*
 * В этом задании надо разработать функцию
 * `convertBytesToHuman`. Эта функция  должна принимать
 * аргумент `bytes` только числового типа.
 * На выходе функция должна отдать
 * человекопонятную строку, которая будет
 * отражать размер файла. Округление, максимум,
 * до 2 знаков после запятой, исключая нули.
 *  Примеры использования:
 * `convertBytesToHuman(1024) === '1 KB';`
 * `convertBytesToHuman(123123123) === '117.42 MB';`
 * `convertBytesToHuman(1610612736) === '1.5 GB';`
 * Необходимо предусмотреть защиту от
 * передачи аргументов неправильного типа
 * и класса (например, отрицательные числа).
 * В случае передачи неподходящего аргумента,
 * функция должна вернуть false.
 */

function convertBytesToHuman(bytes) {
    if (typeof bytes !== 'number' || bytes < 0 || isNaN(bytes)) {
        return false;
    }

    if (bytes === 0) return '0 B';

    const size = ['B', 'KB', 'MB', 'GB', 'TB', 'PB'];
    const i = Math.floor(Math.log(bytes)/Math.log(1024));

    const result = bytes / Math.pow(1024, i);

    return `${parseFloat(result.toFixed(2))} ${size[i]}`;
}


export default convertBytesToHuman;

// console.log(convertBytesToHuman(1024)); // '1 KB'
// console.log(convertBytesToHuman(123123123)); // '117.42 MB'
// console.log(convertBytesToHuman(1610612736)); // '1.5 GB'
// console.log(convertBytesToHuman(-123)); // false
// console.log(convertBytesToHuman('string')); // false
// console.log(convertBytesToHuman(0)); // '0 B'