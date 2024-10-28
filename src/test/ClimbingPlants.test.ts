import { ClimbingPlant }from '../ClimbingPlants';



test(' showld increase width by one when expand is claled',() =>{
const plant = new ClimbingPlant(4)
plant.expand();
expect(plant.width).toBe(5)
})



test(' showld increase beyond ten',() =>{
    const plant2 = new ClimbingPlant(10)
    plant2.expand();
    expect(plant2.width).toBe(10)
    });