import java.util.Scanner;

public class LongestWordInSentence {
    // Finds the longest word dynamically from user input
    public static String findLongestWord(String sentence) {
        if (sentence == null || sentence.trim().isEmpty()) {
            return "";
        }
        String[] words = sentence.trim().split("\\s+");
        String longest = words[0];
        for (int i = 1; i < words.length; i++) {
            if (words[i].length() > longest.length()) {
                longest = words[i];
            }
        }
        return longest;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a sentence: ");
        String input = scanner.nextLine();
        scanner.close();

        String longestWord = findLongestWord(input);
        System.out.println("The longest word is: " + longestWord);
    }
}