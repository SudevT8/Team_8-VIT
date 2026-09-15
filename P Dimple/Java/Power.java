import java.util.*;
public class Power {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the base: ");
        int b = sc.nextInt();
        System.out.print("Enter the exponent: ");
        int e = sc.nextInt();
        int r = 1;
        for (int i = 1; i <= e; i++) {
            r = r * b;
        }
        System.out.println(b + " ^ " + e + " = " + r);
        sc.close();
    }
}