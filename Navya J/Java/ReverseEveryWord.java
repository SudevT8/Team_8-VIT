import java.util.Scanner;

public class ReverseEveryWord {
    // Reverses every individual word in a given sentence dynamically
    public static String reverseWords(String sentence) {
        if (sentence == null || sentence.isEmpty()) {
            return sentence;
        }
        String[] words = sentence.split("\\s+");
        StringBuilder result = new StringBuilder();
        for (String word : words) {
            StringBuilder reversedWord = new StringBuilder(word).reverse();
            result.append(reversedWord).append(" ");
        }
        return result.toString().trim();
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a sentence: ");
        String input = scanner.nextLine();
        scanner.close();

        String output = reverseWords(input);
        System.out.println("Reversed words sentence: " + output);
    }
}