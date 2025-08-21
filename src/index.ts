import { serialize, deserialize } from './serializer';

const list = [1, 22, 300, 40, 55, 50, 6];
// const list = [1, 2, 3, 4, 5];
const encoded = serialize(list);
const decoded = deserialize(encoded);

console.log(list.toString(), encoded, decoded.toString());