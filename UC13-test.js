QUnit.test("Test the shake behavior.", function (assert) {
    var myPet = new Pet("test", "Dog");
    var result = myPet.shake();
    assert.deepEqual(result, "Nice to meet you! I love you!", "Success - a dog can shake!");
    result = myPet.shake();
    result = myPet.shake();
    result = myPet.shake();
    result = myPet.shake();
    assert.deepEqual(result, "I'm hungry! Let's eat first. I love you!", "Success - a dog won't shake if it's hungry");
    myPet.hunger = 0;
    myPet.sleepy = 5;
    result = myPet1.shake();
    assert.deepEqual(result, "Yawn. Let's play after a nap. I love you!", "Success - a dog won't shake if it's sleepy");
    myPet.hunger = 0;
    myPet.sleepy = 0;
    myPet.awake = false;
    result = myPet.shake();
    assert.deepEqual(result, "Zzzz...", "Success - a dog won't shake if it's sleeping" );
    var myPet = new Pet("test", "Cat");
    var result = myPet.shake();
    assert.deepEqual(result, "Ugh. I'm a cat. I never shake", "Success - cats don't shake!");
    result = myPet.shake();
    result = myPet.shake();
    result = myPet.shake();
    result = myPet.shake();
    assert.deepEqual(result, "Ugh. Feed me before I'll even think about it.", "Success - a cat won't shake if it's hungry");
    myPet.hunger = 0;
    myPet.sleepy = 5;
    result = myPet.shake();
    assert.deepEqual(result, "Ugh. I need a 12 hour nap first.", "Success - a cat won't shake if it's sleepy");
    myPet.hunger = 0;
    myPet.sleepy = 0;
    myPet.awake = false;
    result = myPet.shake();
    assert.deepEqual(result, "Zzzz...", "Success - a cat won't shake if it's sleeping" );
});

//QUnit.test("Test the roll over behavior.", function (assert) {
  //  var myPet = new Pet("test", "Dog");
    //var result = myPet.rollOver();
    //sassert.deepEqual(result, "Rolling! Now what? I love you!", "Success - a dog can
