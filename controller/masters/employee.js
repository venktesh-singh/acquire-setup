
const Employee = require("../../modal/masterModal/employeeSchema")

module.exports.add_employee = async function (req, res) {

    const { name, email, phone, employee_type,designation} = req.body;
    try {
        const employee = new Employee({
            name,
            email,
            phone,
            employee_type,
            designation
        });
        await employee.save();
        res.status(201).send({ message: "Employee Added Successfully.", status: 201 });
    } catch (err) {
        console.log(err);

    }
};

module.exports.get_employees = async function (req, res) {
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
        const employee = await Employee.findById({ _id })
        res.send(employee)
    } catch (err) {
        res.status(500).send(err)
    }
};

module.exports.update_employee = async function (req, res) {
    try {
        const _id = req.params.id;
        const employee = await Employee.findByIdAndUpdate(_id, req.body, {
            new: true
        })
        res.send(employee)
    } catch (e) {
        res.status(500).send(e)
    }
};

module.exports.delete_employee = async function (req, res) {
    try {
        const employee = await Employee.findByIdAndDelete(req.params.id);
        if (!eq.params.id) {
            return res.status(400).send();
        }
        res.send({ message: "Employee Deleted Success.", employee });

    } catch (e) {
        res.status(500).send({ message: "error", e })
    }
};
