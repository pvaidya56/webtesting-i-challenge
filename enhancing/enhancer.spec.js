const enhancer = require('./enhancer.js');
// test away!

const testObject = {
	name: "test",
	durability: 60,
	enhancement: 10
};

it("should run the tests", function(){
    expect(true).toBe(true);
})

//repair 
it("it should return a new item with the durablity restored to 100", function(){
    const newObj = enhancer.repair(testObject);
    expect(newObj.durability).toBe(100);
})

//on success
describe('success tests', function(){
    it('enhancement should remain unchanged if it is >=20', function(){
        testObject.enhancement = 20;
        const newObj = enhancer.succeed(testObject);
        expect(newObj.enhancement).toBe(testObject.enhancement);
    });

    it('enhancement is increased by 1 if it is < 20', function() {
        testObject.enhancement = 10;
        const newObj = enhancer.succeed(testObject);
        expect(newObj.enhancement).toBe(11);
    });
})

//on failure
describe('failure tests', function() {
    it('should decrease durability by 5 if enhancement is < 15', function(){
        testObject.enhancement = 10;
        const newObj = enhancer.fail(testObject);
        expect(newObj.durability).toBe(55);
    })
    it('should decrease durability by 10 if enhancement is >= 15', function(){
        testObject.enhancement = 16;
        testObject.durability = 60;
        const newObj = enhancer.fail(testObject);
        expect(newObj.durability).toBe(50);
    })
    it('should decrease enhancement level by 1 if enhancement is > 16', function(){
        testObject.enhancement = 17;
        testObject.durability = 60;

        const newObj = enhancer.fail(testObject);

        expect(newObj.enhancement).toBe(16);
        expect(newObj.durability).toBe(50);
    })
})



