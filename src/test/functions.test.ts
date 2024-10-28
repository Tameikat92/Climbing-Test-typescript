import { Plant } from "../Plants";
import { ClimbingPlant } from "../ClimbingPlants";
import { describePlantHeight, growPlants } from "../functions";

test('describe height of plant', ()=> {
    const howTallPlant = new Plant();
    expect(describePlantHeight(howTallPlant)).toBe('THis plant is ')
})

test('should increase all plants in array by specified amounts',() => {
const plant4 = new Plant();
const climbingPlant = new ClimbingPlant(5);
const plant4Array = [plant4,climbingPlant]

growPlants(plant4Array,3)
expect(plant4.height).toBe(3)
expect(climbingPlant.height).toBe(3)

})