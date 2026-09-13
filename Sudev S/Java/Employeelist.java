import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

class Employee {
    private String name;
    private int age;
    private double salary;

    public Employee(String name, int age, double salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }

    public double getSalary() {
        return salary;
    }

    @Override
    public String toString() {
        return name + " - Age: " + age + ", Salary: " + salary;
    }
}

public class Employeelist {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        List<Employee> emp = new ArrayList<>();
        System.out.print("Enter the number of employees: ");
        int n = sc.nextInt();
        sc.nextLine();
        for (int i = 0; i < n; i++) {
            System.out.println("\nEnter details for employee " + (i + 1));
            System.out.print("Name: ");
            String name = sc.nextLine();
            System.out.print("Age: ");
            int age = sc.nextInt();
            System.out.print("Salary: ");
            double salary = sc.nextDouble();
            sc.nextLine();
            emp.add(new Employee(name, age, salary));
        }
        System.out.print("\nEnter minimum age: ");
        int ageLimit = sc.nextInt();
        System.out.print("Enter minimum salary: ");
        double salaryLimit = sc.nextDouble();
        List<Employee> filtered = emp.stream()
                .filter(e -> e.getAge() >= ageLimit)
                .filter(e -> e.getSalary() >= salaryLimit)
                .collect(Collectors.toList());

        System.out.println("\nEmployees matching the criteria:");
        if (filtered.isEmpty()) {
            System.out.println("No employees found.");
        } else {
            filtered.forEach(System.out::println);
        }
        sc.close();
    }
}