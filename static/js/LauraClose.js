var data = {"Mickey Mouse":  {
  noun: ["ears", "parade",  "castle", "park", "dog", "firework", "street"],
  verb: ["keep", "make", "love", "wonder", "watch", "catch", "hope"],
  Proper_noun: ["Pal", "Friend", "Minnie", "Pluto", "Folks", "Pal", "Minnie"],
  adjective: ["great", "good", "sunny", "exciting", "interesting", "happy", "sunny"]
},

"Storm (X-woman)":  {
  "noun": ["lightning", "blades", "thunder", "treasure", "gift", "storm", "hood"],
  "verb": ["praise", "unleash", "stand", "challenge", "unleash", "hope", "cleave"],
  "Proper-noun": ["Magneto", "Goddess", "Lady", "Kingpin", "Tempest", "Magento", "Goddess"],
  "adjective": ["odd", "dishonorable", "weary", "fury", "fiendish", "impressive", "weary"]
},

"Yoda":  {
  noun: ["mind", "destiny", "power", "shadow", "war", "villian", "beings"],
  verb: ["Judge", "train", "control", "try", "consume", "learn", "end"],
  Proper_noun: ["Jedi", "Padawan", "Master", "Apprentice", "Jedi", "Master", "Apprentice"],
  adjective: ["luminous", "dark", "difficult", "crude", "young", "luminous", "dark"]
},

"Princess Leia Organa":  {
  "noun": ["chute", "home",  "friends", "garbage", "jacket", "storm-trooper", "force"],
  "verb": ["fly", "going", "save", "fought", "sent", "like", "help"],
  "Proper-noun": ["Obi-Wan", "Tarkin", "Nerf-Herder", "Vader", "Brother", "You", "Nerf-Herder"],
  "adjective": ["beautiful", "jittery", "Half-witted", "dirty", "scruffy", "powerful", "foul"]
},

"Genie from Aladdin":  {
  "noun": ["trunk", "magic",  "lamp", "carpet", "monkey", "hairball", 'bath'],
  "verb": ["stop", "tell", "believe", "choose", "help", "show", "rub"],
  "Proper-noun": ["Laddie", "Aladdin", "Casanova", "Sparky", "Senor", "Rugman", "Jafar"],
  "adjective": ["fond", "little", "sinister", "right", "kinda", "ugly", "nice"]
},

"R2D2":  {
  "noun": ["Beep-boop",  "beep", "boop", "Boop-beep", "boop-beep-boop", "beep-deep", "bi-bi-bip"],
  "verb": ["Bip", "doooooop", "Beeep", "Boop-beeep", "ring", "dink-boop-beep", "biiip-booop"],
  "Proper-noun": ["beep", "bing", "Booop", "dring-beep", "ring-dink", "Boop-Boop", "Beep-Beeep"],
  "adjective": ["beepp", "BBBoooop", "Beep-Boop-Beeb", "Boop-dooo", "bip-booop-dooop", "boooop", "bip-ring-ding"]
}}

//console.log(data.Mickey_Mouse.adjective[0](data.Mickey_Mouse["Proper-noun"][Math.floor(Math.random() * data.Mickey_Mouse["Proper-noun"].length)])]);
// console.log(data.Mickey_Mouse.noun[(Math.floor(data.Mickey_Mouse.noun.length*Math.random()))]);
console.log(data.Yoda.noun[(Math.floor(Math.random()*6) )]);
var body = d3.select('body')

body.append('select')
  .on('change',getData)
  .selectAll('option')
    .data(d3.keys(data))
    .enter()
  .append('option')
    .attr('value',function (d) { return d; })
    .text(function (d) { return d; })

// body.selectAll('h6')
//     .data(data["Mickey Mouse" ][])
//     .enter()
//   .append('h6')
//     .text(function (d) { return d; })

function getData() {
  var selectValue = d3.select('select').property('value')
  var data2 = d3.values(data[selectValue]);
  console.log("This is :"+data2);
  console.log(data2[0]);
  console.log(data2[0][(Math.floor(Math.random()* data2.length))])

  body.selectAll(".PN1")
      .text(data2[2][(Math.floor(Math.random()* data2.length))])
      

  body.selectAll(".A1")
      .text(data2[3][(Math.floor(Math.random()* data2.length))])
      
    
   body.selectAll(".A2")
      .text(data2[3][(Math.floor(Math.random()* data2.length))])
      
    
    body.selectAll(".V1")
      .text(data2[1][(Math.floor(Math.random()* data2.length))])
    
    body.selectAll(".V2")
      .text(data2[1][(Math.floor(Math.random()* data2.length))])
    
    body.selectAll(".N1")
      .text(data2[0][(Math.floor(Math.random()* data2.length))])

    body.selectAll(".PN2")
      .text(data2[2][(Math.floor(Math.random()* data2.length))])
    
    body.selectAll(".N2")
      .text(data2[0][(Math.floor(Math.random()* data2.length))])
    
    body.selectAll(".V3")
      .text(data2[1][(Math.floor(Math.random()* data2.length))])
    
    body.selectAll(".N3")
      .text(data2[0][(Math.floor(Math.random()* data2.length))])
    
    body.selectAll(".A3")
      .text(data2[3][(Math.floor(Math.random()* data2.length))])
      
}