import java.util.Scanner;

public class Q1_JAVA {

    public static int findSecondLargest(int[] arr) {
        int largest = Integer.MIN_VALUE;
        int secondLargest = Integer.MIN_VALUE;

        for (int num : arr) {
            if (num > largest) {
                secondLargest = largest; // old largest becomes second
                largest = num;
            } else if (num > secondLargest && num != largest) {
                secondLargest = num;
            }
        }

        return secondLargest;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter the size of the array: ");
        int n = sc.nextInt();

        int[] arr = new int[n];
        System.out.println("Enter " + n + " numbers:");
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }

        if (n < 2) {
            System.out.println("Array must have at least 2 elements.");
        } else {
            int result = findSecondLargest(arr);
            if (result == Integer.MIN_VALUE) {
                System.out.println("No second largest found (all elements are equal).");
            } else {
                System.out.println("Second Largest: " + result);
            }
        }

        sc.close();
    }
}
