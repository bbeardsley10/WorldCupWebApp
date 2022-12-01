
import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;



public class wcParticpantDictionary {
    
    public static void main(String[] args) {
        int user_choice;
        Scanner input = new Scanner(System.in);
        user_choice = input.nextInt();
        boolean quit = false;


        System.out.println("------------------------------------------");
        System.out.println("Welcome to the 2022 Qatar World Cup Stats!");
        System.out.println("------------------------------------------");
        System.out.println("Choose option: ");
        System.out.println("Option 1: View Current Standings");
        System.out.println("Option 2: View current match results");
        System.out.println("Option 3: Check the current playoff bracket");
        System.out.println("Option 4: View the current standings");

        Set<String> GroupA = new HashSet<String>();

            GroupA.add("Qatar");
            GroupA.add("Ecuador");
            GroupA.add("Senegal");
            GroupA.add("Netherlands");
            
            Set<String> GroupB = new HashSet<String>();

            GroupB.add("England");
            GroupB.add("IR Iran");
            GroupB.add("USA");
            GroupB.add("Wales");


            Set<String> GroupC = new HashSet<String>();

            GroupC.add("Argentina");
            GroupC.add("Saudi Arabia");
            GroupC.add("Mexico");
            GroupC.add("Poland");

            Set<String> GroupD = new HashSet<String>();

            GroupD.add("France");
            GroupD.add("Australia");
            GroupD.add("Denmark");
            GroupD.add("Tunisia");

            Set<String> GroupE = new HashSet<String>();

            GroupE.add("Spain");
            GroupE.add("Costa Rica");
            GroupE.add("Germany");
            GroupE.add("Japan");

            Set<String> GroupF = new HashSet<String>();

            GroupF.add("Belgium");
            GroupF.add("Canada");
            GroupF.add("Morocco");
            GroupF.add("Croatia");

            Set<String> GroupG = new HashSet<String>();

            GroupG.add("Brazil");
            GroupG.add("Serbia");
            GroupG.add("Switzerland");
            GroupG.add("Cameroon");

            Set<String> GroupH = new HashSet<String>();

            GroupH.add("Portugal");
            GroupH.add("Ghana");
            GroupH.add("Uruguay");
            GroupH.add("Korea Republic");

        while(quit = false) 
        {
            user_choice = input.nextInt();
            if(user_choice == 0){
                quit = true;
            }
            else if(user_choice == 1){
                System.out.println("yerr");
            } 

        }
            // System.out.println("Group A Teams: " + GroupA);
            // System.out.println("Group B Teams: " + GroupB);
            // System.out.println("Group C Teams: " + GroupC);
            // System.out.println("Group D Teams: " + GroupD);
            // System.out.println("Group E Teams: " + GroupE);
            // System.out.println("Group F Teams: " + GroupF);
            // System.out.println("Group G Teams: " + GroupG);
            // System.out.println("Group H Teams: " + GroupH);


        
    }
    
 
        
}
