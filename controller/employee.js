const Employee = require("../modal/masterModal/employeeSchema")

module.exports.add_employee = async function (req, res) {
    console.log("add employee data",req.body)
    const { id,name,employee_type,email,phone ,designation} = req.body;
    if ( !name) {
        return res.status(422).json({ Erorr: "Please fill the field properly" });
    }
     try {   
        const employee = new Employee({id,name,employee_type,email, phone, designation});
        await employee.save();

        res.status(201).json({ Message: "Add Employee Succefully" });

    } catch (err) {
        console.log(err);
    }
};


module.exports.get_employee = async function (req, res) {
    try {
        const employees = await Employee.find({}).sort( {"_id": -1 } )
        res.status(201).json({ message: " Get Employee success", Employee: employees });
    } catch (error) {
        res.status(400).json({ error: error });
    }
}
module.exports.get_employee_id = async function (req, res) {
    try {
        const _id = req.params.id;
        const employee = await Employee.findById({_id}) 
        res.send(employee)
    } catch (err) {
        res.status(500).send(err)
    }
};    

module.exports.update_employee = async function (req, res){
    try {
        const _id = req.params.id;
        const employee = await Employee.findByIdAndUpdate(_id, req.body, {
            new: true
        } )
        res.send(employee)
    } catch (e) {
        res.status(500).send(e)
    }
};

module.exports.delete_employee = async function (req, res){
    try {
        const employee = await Employee.findByIdAndDelete(req.params.id);
        if(!eq.params.id){
            return res.status(400).send();
        } 
        res.send(employee)  
    } catch (e) {
        res.status(500).send(e)
    }
};
