/*const Http = new XMLHttpRequest();
const url='https://api.dictionaryapi.dev/api/v2/entries/en_US/hand';
Http.open("GET", url);
Http.send();
var me = [{"JSIMS":"JSIMSOYHI"}]
alert(me[0]["JSIMS"])
Http.onreadystatechange = (e) => {
  alert(eval(Http.responseText)[0]["meanings"][0]["partOfSpeech"])
}*/


var response = {
    words : [
        {
            inputtext: "HI",
            output: "Hey There!"
        },
        {
            inputtext: "HELLO",
            output: "Hi!"
        },
        {
            inputtext: "GOOD",
            output: "That's nice!"
        },
        {
            inputtext: "HEY",
            output: "Hi!"
        },
         {
            inputtext: "HEYA",
            output: "Hi!"
        },
        {
          inputtext: "YAY",
          output: "Woohoo!"
      },

        
    ],
    
    
    

    
    
    //below are the phrases
    phrases : [
            {
            inputtext: "WHAT CAN YOU DO",
            output: "You can try, give me a joke!"
        },
        {
            inputtext: "YOU ARE MEAN",
            output: "Me? Mean? Think again!"
        },
                {
            inputtext: "HOW ARE YOU",
            output: "I'm good! How are you?"
        },
        {
            inputtext: "WHAT IS UP",
            output: "Nothing!"
        },
        {
            inputtext: "WHAT'S UP",
            output: "Nothing!"
        },
        {
            inputtext: "TURN THE LIGHTS",
            output: "How about you do that yourself?"
        },
        {
          inputtext: "WHAT ARE MY SMART DEVICES",
          output: "I currently don't support smart devices."
      },
      {
        inputtext: "WHAT'S YOUR RELIGION",
        output: "I'm a Christian!"
    },
    {
      inputtext: "HOW DO YOU DO",
      output:"Very nice if I say myself!"
    },
    {
      inputtext: "YOU MET ALEXA",
      output:"No I haven't! But I look foward to meeting her."
    },
    {
      inputtext: "CONTROL SMART DEVICES",
      output:"Sorry, I can't do that."
    },
    {
      inputtext: "DON'T YOU UNDERSTAND",
      output:"I don't know? Do you?"
    },
    {
      inputtext: "WRONG WITH YOU",
      output:"Nothing!"
    },
    {
      inputtext: "YOU'RE RUBBISH",
      output:"Oh well, to bad for me."
    },
    {
      inputtext: "YOU'RE TRASH",
      output:"Oh well, to bad for me."
    },
    {
      inputtext: "DEFINITON OF",
      output:"I'm sorry, I can't find definitions yet."
    },
    {
      inputtext: "WHAT'S THE WEATHER",
      output:"About that. I can't find that just yet."
    },
    {
      inputtext: "WHAT IS THE WEATHER",
      output:"About that. I can't find that just yet."
    },
    {
      inputtext: "WILL IT RAIN",
      output:"About that. I can't find that just yet."
    },
    {
      inputtext: "I THOUGHT WE WERE FRIENDS",
      output:"We are, I guess."
    },
    {
      inputtext: "MY BIRTHDAY",
      output:"Happy birthday then! <img src='https://i.pinimg.com/originals/19/29/f0/1929f07f65e849f23256f0e2342a8dc1.png' style='width:6vw;'>"
    },
    {
      inputtext: "YOUR FAVORITE CAR",
      output:"It would be a Tesla. I love those!"
    },
    {
      inputtext: "YOU LIKE BOOKS",
      output:"Not really!"
    },

    ],
    
    statements : [
        {
            //
            inputtext: "SAY",
            output: function (calculate) {
                if (calculate) {
                  var res = calculate.split("SAY")[1];
                  return res.charAt(1).toUpperCase() + res.substr(2).toLowerCase();
                }
            }
            //
        },
                {
            //
            inputtext: "PLAY THE SONG",
            output: function (calculate) {
                if (calculate) {
                  var res = calculate.split("PLAY THE SONG")[1];
                  return "Instead of playing it, I will sing it! " + res.charAt(1).toUpperCase() + res.substr(2).toLowerCase() + " " + res.charAt(1).toUpperCase() + res.substr(2).toLowerCase() + res.toUpperCase() + "!"
                }
            }
            //
        },
                        {
            //
            inputtext: "ADD",
            output: function (calculate) {
                if (calculate) {
    	var res = parseInt(calculate.split("ADD")[1]) + parseInt(calculate.split("PLUS")[1])
        return res;
                }
            }
            //
        },
        {
            inputtext: "SING THE SONG",
            output: function() {
              const Http = new XMLHttpRequest();
const url='https://api.dictionaryapi.dev/api/v2/entries/en_US/hand';
Http.open("GET", url);
Http.send();
Http.onreadystatechange = (e) => {
  if (Http.readyState == XMLHttpRequest.DONE) {
    return eval(Http.responseText)[0]["meanings"][0]["partOfSpeech"];
  }
}


                
              }
                
            },
            {
              //
              inputtext: "IN CELSIUS",
              output: function (calculate) {
                  if (calculate) {
                    var res = calculate.split("WHAT IS")[1].split("IN CELSIUS")[0];
                    return res + `degrees in farenheit is ${eval(`(${res} - 32) / 1.8`)} in celsius!`;
                  }
              }
              //
          },
          {
            //
            inputtext: "WHAT CAN YOU DO",
            output: function (JSIMSOYHI) {
              var JSIMSOYHIHDFU = ["You can try: Give me a joke!", "You can try: Solve 9 * 9.", "You can try: Play the song Tea Cup on the Rise."];
              var randomJSIMS = Math.floor((Math.random() * 3))
                  return JSIMSOYHIHDFU[randomJSIMS];
                          
                      },
            //
        },
        {
          //
          inputtext: "SOLVE",
          output: function (JSIMSOYHI) {

    var resJSIMS = eval(JSIMSOYHI.split("SOLVE")[1]);
    eval(JSIMSOYHI.split("SOLVE")[1])
      return resJSIMS;
              
          },
          //
      },
      {
        //
        inputtext: "TELL ME A JOKE",
        output: function (JSIMSOYHI) {
var JSIMSOYHIHDFU = ["What did the eyes say to the glasses at the beach? You shore help me sea!", "What is Red and Blue's child? Purple!", "What does a hard worker say if they are working with only one hand? Can I have a hand?", ""];
var randomJSIMS = Math.floor((Math.random() * 3))
    return JSIMSOYHIHDFU[randomJSIMS];
            
        },
        //
    },
    {
      //
      inputtext: "WHAT CAN YOU DO",
      output: function (JSIMSOYHI) {
        var JSIMSOYHIHDFU = ["You can try: Give me a joke!", "You can try: Solve 9 * 9.", "You can try: Play the song Tea Cup on the Rise."];
        var randomJSIMS = Math.floor((Math.random() * 3))
            return JSIMSOYHIHDFU[randomJSIMS];
                    
                },
      //
  },
  {
    //
    inputtext: "GIVE ME A JOKE",
    output: function (JSIMSOYHI) {
var JSIMSOYHIHDFU = ["What did the eyes say to the glasses at the beach? You shore help me sea!", "What is Red and Blue's child? Purple!", "What does a hard worker say if they are working with only one hand? Can I have a hand?", ""];
var randomJSIMS = Math.floor((Math.random() * 3))
return JSIMSOYHIHDFU[randomJSIMS];
        
    },
    //
},

        /* {
            //
            inputtext: "SING THE SONG",
            output: function (calculate) {
                if (calculate) {
                  var res = calculate.split("PLAY THE SONG")[1];
                  return "Sing! " + res.charAt(1).toUpperCase() + res.substr(2).toLowerCase() + " " + res.charAt(1).toUpperCase() + res.substr(2).toLowerCase() + res.toUpperCase() + "!"
                }
            }
            //
        }, */



    ]
    
}
var notvalid = () => {
  var randomJSIMS = Math.floor((Math.random() * 3))
  var answers = ["I don't understand.", "I'm not sure what you're saying.", "I don't know what you're talking about."]
  return answers[randomJSIMS]
}
function scanreturn() {
	var str = document.getElementById("inputtextarea").value.toUpperCase();
  var results = 0;
  /*var i;
  var results = 0;
  var len = Object.keys(response.words).length;
  for (i = 0; i < len; i++) {
    if(str.includes(response.words[i].inputtext)) {
      let out = response.words[i].output;
      if (out) {
        alert(out);
        results++;
      }
    }
  }*/
  var i; 
  var len = Object.keys(response.statements).length;
  for (i = 0; i < len; i++) {
    if(str.includes(response.statements[i].inputtext)) {
      let out = response.statements[i].output(str);
      if (out) {
        /*alert(out)*/document.querySelector("[response]").innerHTML = out;
        results++;
      }
    }
  }


  if (results == 0) {
    var i;
    var len = Object.keys(response.phrases).length;
    for (i = 0; i < len; i++) {
      if(str.includes(response.phrases[i].inputtext)) {
        let out = response.phrases[i].output;
        if (out) {
          /*alert(out)*/document.querySelector("[response]").innerHTML = out;
          results++;
        }
      }
    }
  }
    
  if (results == 0) {
    var i;

    var len = Object.keys(response.words).length;
    for (i = 0; i < len; i++) {
      if(str.includes(response.words[i].inputtext)) {
        let out = response.words[i].output;
        if (out) {
          /*alert(out)*/document.querySelector("[response]").innerHTML = out;
          results++;
        }
      }
    }
  }
    
  if (results == 0) {
  	/*alert(out)*/document.querySelector("[response]").innerHTML = notvalid();
  }
}

/*
const Http = new XMLHttpRequest();
const url='https://api.dictionaryapi.dev/api/v2/entries/en_US/hand';
Http.open("GET", url);
Http.send();
Http.onreadystatechange = (e) => {
  if (Http.readyState == XMLHttpRequest.DONE){
    alert(eval(Http.responseText)[0]["meanings"][0]["partOfSpeech"]);
  }
  */
