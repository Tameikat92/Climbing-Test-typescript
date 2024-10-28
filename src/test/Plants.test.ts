import { Plant } from "../Plants";

test('it should init height to 0', () =>{
    const plantTest = new Plant();
    expect(plantTest.height).toBe(0)
});

test('Should increase height by given amount', () =>{
    const plantHeightTest = new Plant();
    expect(plantHeightTest.grow).toBe(5)
});

test('Should increase height by given amount twice', () =>{
    const plantHeight2 = new Plant();
    plantHeight2.grow(5)
    plantHeight2.grow(3)
    expect(plantHeight2.height).toBe(8)
});