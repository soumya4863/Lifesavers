function findTotal(){
var total=0;
var val;
document.getElementById("result").innerHTML = "";
            var ele = document.getElementsByTagName('input');
              
            for(i = 0; i < ele.length; i++) {
                  
                if(ele[i].type="radio") {
                  
                    if(ele[i].checked){
                        val=ele[i].value;
                        total+=parseInt(val);
                        
                    }
                                
                }
            }

            if(total>28 && total<=32)
                document.getElementById("result").innerHTML="YOUR PERSONALITY IS : Consul <br><p> Extraordinarily caring,social and popular people, always eager to help. </p>"
            if(total>24 && total<=28)
                document.getElementById("result").innerHTML="YOUR PERSONALITY IS : Executive  <br><p> Excellent administrator, unsuparsed at managing things -or people. </p>"
            if(total>20 && total<=24)
                document.getElementById("result").innerHTML="YOUR PERSONALITY IS : Protagonist <br><p> Charismatic and inspiring leaders,able to mesmerize their listeners. </p>"
            if(total>16 && total<=20)
                document.getElementById("result").innerHTML="YOUR PERSONALITY IS : Logistician <br><p> Practical and fact-minded individuals, whose reliability cannot be doubted. </p>"
            if(total>12 && total<=16)
                document.getElementById("result").innerHTML="YOUR PERSONALITY IS : Defender <br><p> Very dedicated and warm protectors, always ready to defend their loved ones. </p>"
            if(total>8 && total<=12)
                document.getElementById("result").innerHTML="YOUR PERSONALITY IS : Virtuous <br><p> Bold and practical experimenters, masters of all kinds of tools. </p>"
            if(total>4 && total<=8)
                document.getElementById("result").innerHTML="YOUR PERSONALITY IS : Adventurer <br><p> Flexible and charming artists always ready to explore and experience something new. </p>"
            if(total>0 && total<=4)
                document.getElementById("result").innerHTML="YOUR PERSONALITY IS : Entrepreneur <br><p> Smart, energetic and very perceptive people, who truly enjoy living on the edge. </p>"
            if(total>-4 && total<=0)
                document.getElementById("result").innerHTML="YOUR PERSONALITY IS : Entertainer <br><p> Spontaneous,energetic and enthusiatic people- life is never boring arround them . </p>"
            if(total>-8 && total<=-4)
                document.getElementById("result").innerHTML="YOUR PERSONALITY IS : Campaigner <br><p> Enthusiastic, creative and sociable free spirits, who can always find a reason to smile. </p>"
            if(total>-12 && total<=-8)
                document.getElementById("result").innerHTML="YOUR PERSONALITY IS : Mediator <br><p> Poetic, kind and altruistic people,always eager to help a good cause. </p>"
            if(total>-16 && total<=-12)
                document.getElementById("result").innerHTML="YOUR PERSONALITY IS : Advocate <br><p> Quiet and mystical, yet very inspiring and tireless idealists. </p>"
            if(total>-20 && total<=-16)
                document.getElementById("result").innerHTML="YOUR PERSONALITY IS : Debater <br><p> Smart and curious thinkers who cannot resist an intellectual challenge. </p>"
            if(total>-24 && total<=-20)
                document.getElementById("result").innerHTML="YOUR PERSONALITY IS : Commander <br><p> Bold,imaginative and strong willed leaders, always finding a way - or making one. </p>"
            if(total>-28 && total<=-24)
                document.getElementById("result").innerHTML="YOUR PERSONALITY IS : Architect <br><p> Imaginative and strategic thinkers, with a plan for everything. </p>"
            if(total>-32 && total<=-28)
                document.getElementById("result").innerHTML="YOUR PERSONALITY IS : Logician <br><p> Innovative Inventors and with an unquenchable thirst for knowledge. </p>"
                
}
function resetQuiz(){
    window.location="file:///C:/Users/SOUMYA/Desktop/vscodes/Data%20Warehousing%20project/personality-quiz.html";
}