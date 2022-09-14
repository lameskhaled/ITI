//a- Display all documents in instructors collection
db.instructors.find({});

//b- Display all instructors with salaries greater than 4000 (only show firstName and salary)
db.instructors.find({salary:{$gt:4000}},{_id:0,firstName:1,salary:1});

//c- Display all instructors with ages less than or equal 25
db.instructors.find({age:{$lte:25}},{_id:0,firstName:1,age:1});

//d- Display all instructors with city mansoura and sreet number 10 or 14 only display (firstname,address,salary).
db.instructors.find({$and:[{"fullAddress.city": "Ismailia"},{$or:[{"fullAddress.street": 10}, {"fullAddress.street": 14}]}]},{_id: 0, firstName: 1, fullAddress: 1, salary: 1});

//e- Display all instructors who have js and jquery in their courses (both of them not one of them).
db.instructors.find({courses:{$all:["js","jquery"]}});

//f- Display number of courses for each instructor and display first name with number of courses.
db.instructors.find({courses:{$exists:true}}).forEach(instructor=>{
print(`${instructor.firstName} , courses :${instructor.courses.length}`);})

//g- Write mongodb query to get all instructors that have firstName and 
//lastName properties , sort them by firstName ascending then by 
//lastName descending and finally display their data FullName and age 
let instdData2 = [];
db.instructors.find({firstName:{$exists:true},lastName:{$exists:true}}).sort({firstName:1,lastName:-1}).forEach(instructor=>{
instdData2.push({"full name":instructor.firstName+" "+instructor.lastName,"age":instructor.age});
print(`full name : ${instructor.firstName} ${instructor.lastName}, age :${instructor.age}`);})

//g- BONUS: create new collection with step g values data and name it instructorsData
db.instructorsData.insert(instdData2);
db.instructorsData.find({},{_id:0});

//h- Find all instructors that have fullName that contains “mohammed”.
db.instructors.find({$or:[{firstName:"mohammed"},{lastName:"mohammed"}]});

//i- Delete instructor with first name “ebtesam” and has only 5 courses in courses array
db.instructors.remove({firstName:"ebtesam",courses:{$size:5}});

//j- Add active property to all instructors and set its value to true.
db.instructors.updateMany({},{$set:{active:true}});
db.instructors.find();

//k- Change “EF” course to “jquery” for “mazen mohammed” instructor (without knowing EF Index)
db.instructors.updateOne({ firstName: "mazen", lastName: "mohammed", courses: "EF" },{$set: {"courses.$": "jquery"}});
db.instructors.find();

//l- Add jquery course for “noha hesham”.
db.instructors.updateOne({ firstName: "noha", lastName: "hesham"},{$addToSet: {"courses": "jquery"}});
db.instructors.find();

//m- Remove courses property for “ahmed mohammed ” instructor
db.instructors.updateOne({firstName: "ahmed", lastName: "mohammed"},{$unset:{courses:""}});
db.instructors.find();

//n - Decrease salary by 500 for all instructors that has only 3 courses in their list ($inc)
db.instructors.updateMany({courses:{$size:3}},{$inc:{salary:-500}});
db.instructors.find();

//o - Rename address field for all instructors to fullAddress.
db.instructors.updateMany({},{$rename:{address:"fullAddress"}});
db.instructors.find();

//p - Change street number for noha hesham to 20
db.instructors.update({firstName: "noha", lastName: "hesham"},{$set:{"fullAddress.street":20}});
db.instructors.find();