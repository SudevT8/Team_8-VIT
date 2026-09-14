import java.util.Scanner;

public class LargestOfThreeNumbers {

    public static int findLargest(int a, int b, int c) {
        if (a >= b && a >= c) {
            return a;
        } else if (b >= a && b >= c) {
            return b;
        } else {
            return c;
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Enter three numbers:");

        System.out.print("First: ");
        int a = sc.nextInt();

        System.out.print("Second: ");
        int b = sc.nextInt();

        System.out.print("Third: ");
        int c = sc.nextInt();

        int largest = findLargest(a, b, c);
        System.out.println("Largest: " + largest);

        sc.close();
    }
}
