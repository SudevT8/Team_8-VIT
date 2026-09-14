import * as readline from "readline";

interface Employee {
    id: number;
    name: string;
    department: string;
    salary: number;
}

class EmployeeService {
    private store: Map<number, Employee> = new Map();
    private nextId: number = 1;

    create(name: string, department: string, salary: number): Employee {
        const emp: Employee = {
            id: this.nextId++,
            name,
            department,
            salary
        };

        this.store.set(emp.id, emp);
        return emp;
    }

    readAll(): Employee[] {
        return Array.from(this.store.values());
    }

    readById(id: number): Employee | undefined {
        return this.store.get(id);
    }

    update(id: number, name: string, department: string, salary: number): boolean {
        if (!this.store.has(id)) {
            return false;
        }

        this.store.set(id, { id, name, department, salary });
        return true;
    }

    delete(id: number): boolean {
        return this.store.delete(id);
    }
}

const service = new EmployeeService();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ask(question: string): Promise<string> {
    return new Promise((resolve) => rl.question(question, resolve));
}

async function menu() {
    while (true) {
        console.log(`
Employee CRUD Menu
1. Add Employee
2. View All Employees
3. View Employee by ID
4. Update Employee
5. Delete Employee
6. Exit`);

        const choice = (await ask("Choose an option: ")).trim();

        if (choice === "1") {
            const name = await ask("Name: ");
            const dept = await ask("Department: ");
            const salary = parseFloat(await ask("Salary: "));

            const emp = service.create(name.trim(), dept.trim(), salary);
            console.log(`Created: [ID=${emp.id}] ${emp.name}`);

        } else if (choice === "2") {
            const list = service.readAll();

            if (list.length === 0) {
                console.log("No employees found.");
            } else {
                console.log("\nAll Employees");

                list.forEach((e) =>
                    console.log(
                        `ID: ${e.id} | Name: ${e.name} | Dept: ${e.department} | Salary: ${e.salary}`
                    )
                );
            }

        } else if (choice === "3") {
            const id = parseInt(await ask("Enter Employee ID: "));
            const emp = service.readById(id);

            if (emp) {
                console.log(
                    `ID: ${emp.id} | Name: ${emp.name} | Dept: ${emp.department} | Salary: ${emp.salary}`
                );
            } else {
                console.log("Employee not found.");
            }

        } else if (choice === "4") {
            const id = parseInt(await ask("Enter Employee ID to update: "));
            const name = await ask("New Name: ");
            const dept = await ask("New Department: ");
            const salary = parseFloat(await ask("New Salary: "));

            const updated = service.update(
                id,
                name.trim(),
                dept.trim(),
                salary
            );

            console.log(
                updated ? "Employee updated." : "Employee not found."
            );

        } else if (choice === "5") {
            const id = parseInt(await ask("Enter Employee ID to delete: "));
            const deleted = service.delete(id);

            console.log(
                deleted ? "Employee deleted." : "Employee not found."
            );

        } else if (choice === "6") {
            console.log("Goodbye!");
            rl.close();
            break;

        } else {
            console.log("Invalid option. Try again.");
        }
    }
}

menu();
