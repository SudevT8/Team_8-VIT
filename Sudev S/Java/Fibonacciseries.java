import java.util.Scanner;

public class Fibonacciseries {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the number of terms: ");
        int n = sc.nextInt();
        if (n <= 0) {
            System.out.println("Please enter a positive number.");
            sc.close();
            return;
        }
        long f = 0;
        long s = 1;
        System.out.println("Fibonacci series:");
        for (int i = 1; i <= n; i++) {
            System.out.print(f);
            if (i < n) {
                System.out.print(" ");
            }
            long next = f + s;
            f = s;
            s = next;
        }

        sc.close();
    }
}