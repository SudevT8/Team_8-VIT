import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class CharacterFrequencyHashMap {
  
    public static Map<Character, Integer> countCharacterFrequency(String str) {
        Map<Character, Integer> frequencyMap = new HashMap<>();
        if (str == null) {
            return frequencyMap;
        }
        for (char ch : str.toCharArray()) {
            frequencyMap.put(ch, frequencyMap.getOrDefault(ch, 0) + 1);
        }
        return frequencyMap;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a string: ");
        String input = scanner.nextLine();
        scanner.close();

        Map<Character, Integer> frequencies = countCharacterFrequency(input);
        System.out.println("Character Frequencies:");
        for (Map.Entry<Character, Integer> entry : frequencies.entrySet()) {
            System.out.println("'" + entry.getKey() + "': " + entry.getValue());
        }
    }
}