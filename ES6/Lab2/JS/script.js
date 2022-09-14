function courseInfo(options = {}) {
    var defaultInfo = {
      courseName: "JS",
      courseDuration: 600,
      courseOwner: "Eng.Mostafa",
    };

     var result = Object.assign({}, defaultInfo, options);
     var opt = Object.keys(options);
     var defaultopt=Object.keys(defaultInfo);
     let msg;

      for(let i=0;i<opt.length;i++){
        if(opt[i]===defaultopt[i]){
          msg= `You registered in ${result.courseName} with ${result.courseDuration} time by ${result.courseOwner}`;
     
        }
        else{
           throw `Course Info doesn't contain this property '${opt[i]}' `;
        }
      }
      return msg;
      
  }
  
  console.log(
    courseInfo({ courseName: "CSS", courseDuration: 100,age:24 })
  );

  // console.log(
  //   courseInfo({ courseName: "CSS", courseDuration: 100})
  // );
