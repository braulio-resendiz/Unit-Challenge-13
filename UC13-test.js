QUnit.test("Test the shake behavior.", function (assert) {
    var myPet1 = new Pet1("test", "Dog");
    var result = myPet1.shake();
    assert.deepEqual(result, "Nice to meet you! I love you!", "Success - a dog can shake!");
    result = myPet1.shake();
    result = myPet1.shake();
    result = myPet1.shake();
    result = myPet1.shake();
    assert.deepEqual(result, "I'm hungry! Let's eat first. I love you!", "Success - a dog won't shake if it's hungry");
    myPet1.hunger = 0;
    myPet1.sleepy = 5;
    result = myPet1.shake();
    assert.deepEqual(result, "Yawn. Let's play after a nap. I love you!", "Success - a dog won't shake if it's sleepy");
    myPet1.hunger = 0;
    myPet1.sleepy = 0;
    myPet1.awake = false;
    result = myPet1.shake();
    assert.deepEqual(result, "Zzzz...", "Success - a dog won't shake if it's sleeping" );
    var myPet2 = new Pet2("test", "Cat");
    var result = myPet2.shake();
    assert.deepEqual(result, "Ugh. I'm a cat. I never shake", "Success - cats don't shake!");
    result = myPet2.shake();
    result = myPet2.shake();
    result = myPet2.shake();
    result = myPet2.shake();
    assert.deepEqual(result, "Ugh. Feed me before I'll even think about it.", "Success - a cat won't shake if it's hungry");
    myPet2.hunger = 0;
    myPet2.sleepy = 5;
    result = myPet2.shake();
    assert.deepEqual(result, "Ugh. I need a 12 hour nap first.", "Success - a cat won't shake if it's sleepy");
    myPet2.hunger = 0;
    myPet2.sleepy = 0;
    myPet2.awake = false;
    result = myPet2.shake();
    assert.deepEqual(result, "Zzzz...", "Success - a cat won't shake if it's sleeping" );
});

//QUnit.test("Test the roll over behavior.", function (assert) {
  //  var myPet = new Pet("test", "Dog");
    //var result = myPet.rollOver();
    //sassert.deepEqual(result, "Rolling! Now what? I love you!", "Success - a dog can
