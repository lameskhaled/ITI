use inventory

//a
departments = db.department.find({},{department_description: 1}).toArray();
db.employee.find({},{full_name: 1}).forEach(employee=>{
    deps = departments.find(dep=>{
        dep._id == employee.department_id;
        print(`${employee.full_name} : ${dep.department_description}`)
        })
    });
    
//b
db.employee.find({position_title: "VP Country Manager"}, {full_name: 1, salary: 1});

//c
let regions = db.region.find().toArray();
db.customer.find({}, {fullname: 1, "address.customer_region_id": 1}).forEach(customer => {
    let region = regions.find(reg => {
        reg.region_id == customer.address.customer_region_id;
        print(`${customer.fullname} :${reg.sales_region} `);})
});

//d
db.product.find({brand_name: "Washington"}, {product_name:1});

//Aggregate
//a
db.product.aggregate([
{$project:{_id:0, brand_name:1}},
{$group: {"_id": "$brand_name", count: {$sum: 1}}}
])

//b
db.product.aggregate([
{$match: {brand_name: {$in: ["Blue Label","King","Washington"]}}},
{$sort: {brand_name: 1, product_name: 1}},
{$project: {_id: 0, Brand_Name: "$brand_name", Product_Name: "$product_name"}},
{$group: {_id: {Brand_Name: "$Brand_Name", Product_Name: "$Product_Name"}}}
]);

    
    