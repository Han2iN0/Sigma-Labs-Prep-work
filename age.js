const birthDate = () => {
  const userBirthday = prompt('What is your birthday (mm/dd/yyyy)')
  const dob = new Date(userBirthday)
  
  const month_diff = Date.now() - dob.getTime()
  const age_dt = new Date(month_diff); 
 var year = age_dt.getUTCFullYear();
    var age = Math.abs(year - 1970);
     //display the calculated age
    console.log("Age of the date entered: " + age + " years");
}

birthDate()

