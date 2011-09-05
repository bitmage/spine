describe("Model.Local", function(){
  var User;
  
  beforeEach(function(){
    User = Spine.Model.setup("User", ["first", "last"]);
  });
  
  it("should persist attributes", function(){
    User.extend(Spine.Model.Local);
    
    User.create({first: "Bob", last: "McCreedy"});
    
    User.records = {};
    
    User.loadLocal();
    var bob = User.first();
    expect(bob).toBeTruthy();
    expect(bob.first).toEqual("Bob");
    expect(bob.last).toEqual("McCreedy");
  });
});
