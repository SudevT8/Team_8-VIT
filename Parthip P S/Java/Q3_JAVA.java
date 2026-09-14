import java.util.HashMap;
import java.util.Scanner;

public class Q3_JAVA {

    
    private static HashMap<String, String> urlMap = new HashMap<>();
    private static int counter = 1000; // base for generating short codes

    /
    public static String shorten(String originalUrl) {
        String shortCode = "short.ly/" + counter++;
        urlMap.put(shortCode, originalUrl);
        return shortCode;
    }

    
    public static String retrieve(String shortCode) {
        return urlMap.getOrDefault(shortCode, "URL not found.");
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int choice;

        System.out.println("=== Simple URL Shortener ===");

        do {
            System.out.println("\n1. Shorten a URL");
            System.out.println("2. Retrieve original URL");
            System.out.println("3. Exit");
            System.out.print("Choose an option: ");
            choice = sc.nextInt();
            sc.nextLine(); // consume newline

            switch (choice) {
                case 1:
                    System.out.print("Enter the original URL: ");
                    String original = sc.nextLine();
                    String shortened = shorten(original);
                    System.out.println("Shortened URL: " + shortened);
                    break;

                case 2:
                    System.out.print("Enter the short URL: ");
                    String shortCode = sc.nextLine();
                    String result = retrieve(shortCode);
                    System.out.println("Original URL: " + result);
                    break;

                case 3:
                    System.out.println("Exiting. Goodbye!");
                    break;

                default:
                    System.out.println("Invalid choice. Please try again.");
            }

        } while (choice != 3);

        sc.close();
    }
}
