import java.util.Scanner;

public class Temperature {
    public static double celsiusToFahrenheit(double c) {
        return (c * 9 / 5) + 32;
    }

    public static double fahrenheitToCelsius(double f) {
        return (f - 32) * 5 / 9;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Temperature Converter");
        System.out.println("1. Celsius to Fahrenheit");
        System.out.println("2. Fahrenheit to Celsius");
        System.out.print("Enter your choice: ");
        int choice = sc.nextInt();
        System.out.print("Enter the temperature: ");
        double temp = sc.nextDouble();

        switch (choice) {
            case 1:
                System.out.printf("Temperature in Fahrenheit: %.2f%n",
                        celsiusToFahrenheit(temp));
                break;
            case 2:
                System.out.printf("Temperature in Celsius: %.2f%n",
                        fahrenheitToCelsius(temp));
                break;
            default:
                System.out.println("Invalid choice.");
        }
        sc.close();
    }
}