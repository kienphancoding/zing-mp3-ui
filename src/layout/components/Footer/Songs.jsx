import OMG from "./assets/OMG.mp3";
import Attention from "./assets/Attention.mp3";
import Cookie from "./assets/Cookie.mp3";
import Ditto from "./assets/Ditto.mp3";
import HypeBoy from "./assets/HypeBoy.mp3";

const songs = [
  {
    name: "OMG",
    singer: "NewJeans",
    src: OMG,
    image:
      "https://i.pinimg.com/736x/ee/1a/82/ee1a822bba76e5630b48182680e1f9a1.jpg",
    lyrics: [
      { line: "i noraeneun it's about you baby", time: 7 },
      { line: "Only you", time: 9 },
      { line: "You you you You you you you", time: 14 },
      { line: "Naega himdeul ttae Ul geot gateul ttae", time: 18 },
      { line: "Giundo ijen Naji anheul ttae", time: 20 },
      { line: "It's you nal geokjeonghane It's you nal usgehane", time: 26 },
      { line: "Mal an haedo dwae Boy what do you say", time: 28 },
      { line: "Meollideun eonjedeunji dallyeowa", time: 35 },
      { line: "Bappeun cheokdo eopsi neon natana", time: 36 },
      { line: "Ige mari doeni nan mureobwa", time: 41 },
      {
        line: "Neoneun marya He's the one that's living in my system baby",
        time: 44,
      },
      { line: "Oh my oh my god Yesanghaesseo na", time: 47 },
      { line: "I was really hoping That he will come through", time: 51 },
      { line: "Oh my oh my god Dan neoppuniya", time: 54 },
      { line: "Asking all the time about what I should do", time: 58 },
      { line: "No I can never let him go Neoman saenggakna 24", time: 63 },
      { line: "Nan haengunaya jeongmallo I know, I know", time: 67 },
      {
        line: "Neol algi jeonkkajineun na Uimi eopseosseo jeonbu da",
        time: 70,
      },
      { line: "Nae mami kkeuti eopsneun geol I know, I know", time: 73 },
      { line: "I'm going crazy right?", time: 74 },
      {
        line: "Eodiseodeun Myeot beonideun There ain't nothing else that I would hold on to",
        time: 78,
      },
      {
        line: "I hear his voice Through all the noise Jamsirado nae son nohji ma no, no",
        time: 81,
      },
      {
        line: 'Geokjeong eopsjanha "Cause I got someone Honjarado gwaenchanha " Cause I love someone',
        time: 89,
      },
      { line: "Meollideun eonjedeunji dallyeowa", time: 93 },
      { line: "Bappeun cheokdo eopsi neon natana", time: 96 },
      { line: "Ige mari doeni nan mureobwa", time: 100 },
      {
        line: "Neoneun marya He's the one that's living in my system baby",
        time: 104,
      },
      {
        line: "Oh my oh my god Yesanghaesseo na I was really hoping That he will come through",
        time: 112,
      },
      {
        line: "Oh my oh my god Dan neoppuniya Asking all the time about what I should do",
        time: 119,
      },
      {
        line: "No I can never let him go Neoman saenggakna 24 Nan haengunaya jeongmallo I know, I know",
        time: 125,
      },
      {
        line: "Neol algi jeonkkajineun na Uimi eopseosseo jeonbu da Nae mami kkeuti eopsneun geol I know, I know",
        time: 133,
      },
      { line: "", time: 148 },
      { line: "My heart is glowing It's glowing up", time: 154 },
      { line: "Neorangman isseumyeon museoul ge eopseo", time: 157 },
      { line: "Gadeuk mewojin, da mewojin (bulkeojin)", time: 159 },
      { line: "My heart is glowing, it'd be glowing", time: 164 },
      { line: "Cause he", time: 165 },
      {
        line: "Oh my oh my god Yesanghaesseo na I was really hoping That he will come through",
        time: 172,
      },
      {
        line: "Oh my oh my god  Dan neoppuniya Asking all the time about what I should do",
        time: 179,
      },
      {
        line: "No I can never let him go He' s right there for me 24 Nan haengunaya jeongmallo I know, I know",
        time: 186,
      },
      {
        line: "Neol algi jeonkkajineun na Uimi eopseosseo jeonbu da Eotteokhae",
        time: 192,
      },
      {
        line: "My heart is glowing, it's glowing My heart is glowing up So I can't sleep at night",
        time: 198,
      },
      { line: "", time: 210 },
    ],
  },
  {
    name: "Attention",
    singer: "NewJeans",
    src: Attention,
    image:
      "https://i.pinimg.com/564x/0b/4c/83/0b4c8348f7e0e89fc9089d0d5b320d68.jpg",
    lyrics: [
      { line: "", time: 25 },
      {
        line: "You and me nae mami boiji Hanchameul chyeodabwa Gakkai dagaga You see",
        time: 32,
      },
      { line: "You see, ayy, ayy, ayy, ayy", time: 35 },
      {
        line: "One, two, three yonggiga saenggyeotji Imi aneun ne nunchi Gogaereul dollyeo cheoncheonhi Yeogi",
        time: 42,
      },
      { line: "You see yeogi boini", time: 44 },
      {
        line: "Looking for attention neoyagesseo Hwaksilhage naro mandeulgesseo",
        time: 49,
      },
      {
        line: "Stop, ayy Drop the question Drop the, drop the question",
        time: 52,
      },
      { line: "Want attention Wanna want attention", time: 55 },
      {
        line: "You give me butterflies you know Nae mameun ontong paradise",
        time: 59,
      },
      { line: "Kkumeseo kkaewojuji ma", time: 61 },
      {
        line: "You got me looking for attention",
        time: 66,
      },
      { line: "You got me looking for attention", time: 71 },
      { line: "Gakkeumeun jeongmal Hetgallijiman Bunmyeonghan geon", time: 75 },
      { line: "Got me looking for attention", time: 81 },
      { line: "Neol uyeonhi majuchin cheokallae", time: 84 },
      { line: "Mot bon cheok jinagallae", time: 85 },
      {
        line: "You're so fine Gotta gotta get to know ya Nawa nawa georeoga jwo",
        time: 90,
      },
      {
        line: "Jigeum doraseomyeon I need ya, need ya, need ya",
        time: 94,
      },
      {
        line: "To look at me back Hey, da deulkyeosseonna Neol bomyeon hateuga twieonawa",
        time: 100,
      },
      {
        line: "Nan satangeul channeun baby (Baby) Nae mameun seolleiji",
        time: 105,
      },
      {
        line: "Ayy, drop the question Drop the, drop the question",
        time: 107,
      },
      {
        line: "Want attention Wanna want attention",
        time: 109,
      },
      {
        line: "You give me butterflies you know Nae mameun ontong paradise",
        time: 114,
      },
      { line: "Meollideun eonjedeunji dallyeowa", time: 93 },
      { line: "Bappeun cheokdo eopsi neon natana", time: 96 },
      { line: "Ige mari doeni nan mureobwa", time: 100 },
      {
        line: "Kkumeseo kkaewojuji ma",
        time: 117,
      },
      {
        line: "You got me looking for attention You got me looking for attention",
        time: 127,
      },
      {
        line: "Gakkeumeun jeongmal Hetgallijiman Bunmyeonghan geon",
        time: 132,
      },
      {
        line: "Got me looking for attention",
        time: 134,
      },
      {
        line: "You got me looking for attention You got me looking for attention",
        time: 145,
      },
      {
        line: "Gakkeumeun jeongmal Hetgallijiman Bunmyeonghan geon",
        time: 148,
      },
      { line: "Got me looking for attention", time: 155 },
      { line: "A-T-T-E-N-T-I-ON Attention is what I want", time: 159 },
      { line: "A-T-T-E-N-T-I-ON Attention is what I want", time: 164 },
      { line: "A-T-T-E-N-T-I-ON Attention is what I want", time: 168 },
      { line: "A-T-T-E-N-T-I-ON You got me looking for attention", time: 176 },
    ],
  },
  {
    name: "Cookie",
    singer: "NewJeans",
    src: Cookie,
    image:
      "https://i.pinimg.com/564x/ea/a6/d8/eaa6d8144894b53bb87413dc33a0148d.jpg",
    lyrics: [
      { line: "", time: 12 },
      {
        line: "Naega mandeun kuki Neoreul wihae guwotji But you know that it ain't for free, yeah",
        time: 23,
      },
      {
        line: "Naega mandeun kuki Neomu budeureouni (Yeah) Jakkuman tteooreuni (Ayy)",
        time: 36,
      },
      {
        line: "Neol choco-chipeuro Sprinklero Immat beorige mandeulgo sipeo Sumgigo itjiman neol deo bogo sipeo",
        time: 43,
      },
      {
        line: "If you want it, you can get it, if you want it Ne moksorireul tto deullyeojwo boy",
        time: 48,
      },
      {
        line: "Siksaneun eopseo baegopado Eumnyoneun eopseo mongmallado",
        time: 54,
      },
      { line: "Dalkomhan manman dijeoteuman man", time: 58 },
      { line: "Wonhage doel geo aljana", time: 61 },
      {
        line: "Siksaneun eopseo baegopado Eumnyoneun eopseo mongmallado",
        time: 67,
      },
      { line: "dalkomhan manman dijeoteuman man", time: 70 },
      { line: "Wonhage doel geo aljana", time: 73 },
      {
        line: "Naega mandeun kuki Neoegeneun dogiji Ne maeumsogeul nogiji So good, yeah",
        time: 84,
      },
      {
        line: "Looking at my cookie Yeoksi hyanggibuteo dareuni (Taste it) Hanibeun mojarani",
        time: 96,
      },
      {
        line: "Neol choco-chipeuro Sprinklero Jeongsin mot charige mandeulgo sipeo Sumgigo itjiman neol deo bogo sipeo",
        time: 104,
      },
      {
        line: "If you want it, you can get it, if you want it Ne moksorireul tto deullyeojwo boy",
        time: 109,
      },
      {
        line: "Siksaneun eopseo baegopado Eumnyoneun eopseo mongmallado",
        time: 116,
      },
      { line: "Dalkomhan manman dijeoteuman man", time: 119 },
      {
        line: "Wonhage doel geo aljana",
        time: 122,
      },
      {
        line: "Siksaneun eopseo baegopado Eumnyoneun eopseo mongmallado",
        time: 128,
      },
      { line: "dalkomhan manman dijeoteuman man", time: 130 },
      { line: "Wonhage doel geo aljana", time: 134 },
      {
        line: "(Yeah, yo) Bet you know, bet you know, bet you know I Resipin eopseo ttan deseoneun mot chaja",
        time: 141,
      },
      {
        line: "Take it, don't break it, I wanna see you taste it Sugar, got sugar Nan jaeryo an akkiji",
        time: 146,
      },
      {
        line: "(Yeah, yo) Bet you know, bet you know, bet you know I Ne daieoteureul mangchigo sipeo na",
        time: 152,
      },
      {
        line: "Take it, don't break it, I wanna see you taste it Sugar, got sugar Bet you want some",
        time: 158,
      },
      {
        line: "Siksaneun eopseo baegopado Eumnyoneun eopseo mongmallado",
        time: 165,
      },
      {
        line: "Dalkomhan manman dijeoteuman man",
        time: 168,
      },
      {
        line: "Wonhage doel geo aljana (Yeah, yo)",
        time: 171,
      },
      {
        line: "Siksaneun eopseo baegopado (Yeah, yo) Eumnyoneun eopseo mongmallado",
        time: 177,
      },
      {
        line: "dalkomhan manman dijeoteuman man",
        time: 181,
      },
      {
        line: "Wonhage doel geo aljana (Yeah, yo)",
        time: 183,
      },
      {
        line: "Yeah, yo Yeah, yo Mm-mm, mm-mm Yeah, yo Yeah, yo Mm-mm, mm-mm",
        time: 206,
      },
      {
        line: "Naega mandeun kuki Come and take a lookie Uri jibeman itji nolleo wa",
        time: 213,
      },
      {
        line: "Eolmadeunji gupji Geureonde neo chungchi Saenggyeodo nan molla",
        time: 219,
      },
      {
        line: "Naega mandeun kuki Come and take a lookie Uri jibeman itji nolleo wa",
        time: 225,
      },
      {
        line: "Eolmadeunji gupji Geureonde neo chungchi Saenggyeodo nan molla",
        time: 232,
      },
    ],
  },
  {
    name: "Ditto",
    singer: "NewJeans",
    src: Ditto,
    image:
      "https://i.pinimg.com/736x/26/7a/96/267a96b46df2dfb7cf13203008103d94.jpg",
    lyrics: [
      { line: "Woo woo woo woo ooh Woo woo woo woo", time: 13 },
      {
        line: "Stay in the middle Like you a little Don't want no riddle",
        time: 18,
      },
      {
        line: "Malhaejweo say it back Oh say it ditto Achimeun neomu meoreo So say it ditto",
        time: 27,
      },
      { line: "Huljjeok keobeoryeosseo Hamkkehan gieokcheoreom", time: 31 },
      {
        line: "Neol boneun nae maeumeun Eoneusae yeoreum jina gaeul Gidaryeotji all this time ",
        time: 41,
      },
      { line: "Do you want somebody Like I want somebody", time: 45 },
      { line: "Nal bogo useotjiman Do you think about me now yeah", time: 50 },
      { line: "All the time yeah All the time", time: 54 },
      {
        line: "I got no time to lose Nae gireotteon haru Nan bogo shibeo",
        time: 64,
      },
      { line: "Ra-ta-ta-ta ullin shimjang (Ra-ta-ta-ta)", time: 69 },
      {
        line: "I got nothing to lose Neol joahandago wooah wooah wooah",
        time: 77,
      },
      { line: "Ra-ta-ta-ta ullin shimjang (Ra-ta-ta-ta)", time: 83 },
      { line: "But I don't want to", time: 85 },
      {
        line: "Stay in the middle Like you a little Don't want no riddle",
        time: 90,
      },
      {
        line: "Malhaejweo say it back Oh say it ditto Achimeun neomu meoreo So say it ditto",
        time: 98,
      },
      {
        line: "I don't want to Walk in this miro Da aneun geon anieodo Baradeon daero",
        time: 105,
      },
      {
        line: "Malhaejweo Say it back Oh say it ditto I want you so, want you So say it ditto",
        time: 113,
      },
      { line: "Not just anybody Neoreul sangsanghaetji", time: 118 },
      {
        line: "Hangsang dahaitteon Cheoeum neukkim geudaero nan Gidaryeotji all this time",
        time: 126,
      },
      {
        line: "I got nothing to lose Neol joahandago wooah wooah wooah",
        time: 135,
      },
      { line: "Ra-ta-ta-ta ullin shimjang (Ra-ta-ta-ta)", time: 141 },
      {
        line: "But I don't want to Stay in the middle Like you a little Don't want no riddle",
        time: 147,
      },
      {
        line: "Malhaejweo say it back Oh say it ditto achimeun neomu meoreo So say it ditto",
        time: 156,
      },
      {
        line: "I don't want to Walk in this miro Da aneun geon anieodo Baradeon daero",
        time: 161,
      },
      {
        line: "Malhaejweo Say it back Oh say it ditto I want you so, want you So say it ditto",
        time: 172,
      },
      { line: "Woo woo woo woo ooh Woo woo woo woo", time: 185 },
    ],
  },
  {
    name: "HypeBoy",
    singer: "NewJeans",
    src: HypeBoy,
    image:
      "https://i.pinimg.com/564x/a3/b7/21/a3b721323426a0d27c75d33e16c48788.jpg",
    lyrics: [
      { line: "", time: 17 },
      { line: "One, two, three, four", time: 18 },
      {
        line: "Baby, got me looking so crazy Ppajyeobeorineun daydream",
        time: 24,
      },
      { line: "Got me feeling you, neodo malhaejullae?", time: 28 },
      {
        line: "Nuga naege mworadeun Namdeulgwaneun dalla neon Maybe you could be the one",
        time: 32,
      },
      {
        line: "Nal mideobwa han beon I'm not looking for just fun Maybe I could be the one",
        time: 37,
      },
      { line: "Oh, baby, yeminhadae na lately", time: 41 },
      {
        line: "Neo eopsineun maeil maeiri, yeah-eh, eh Jaemieopseo eojjeoji",
        time: 47,
      },
      {
        line: "I just want you, call my phone right now . I just wanna hear you're mine",
        time: 52,
      },
      {
        line: "Cause I know what you like boy (Uh-uh) You're my chemical hype boy (Uh-uh)",
        time: 61,
      },
      {
        line: "Nae jinan naldeureun, nun tteumyeon ijneun kkum Hype boy, neoman wonhae Hype boy, naega jeonhae",
        time: 70,
      },
      {
        line: "And we can go hi-i-i-i-i-igh Malhaebwa, yeah, neukkyeobwa, mm-mm",
        time: 75,
      },
      {
        line: "Take him to the sky-y-y-y-y-y You know, I hype you, boy",
        time: 80,
      },
      {
        line: "Nuneul gama, ah-ah-ah, ah-ah Malhaebwa, yeah, neukkyeobwa, mm-mm",
        time: 86,
      },
      {
        line: "Take him to the sky-y-y-y-y-y You know, I hype you, boy",
        time: 92,
      },
      {
        line: "Jame deullyeogo jame deullyeo haedo Ne saenggage tto saebyeok se si, uh-oh",
        time: 98,
      },
      { line: "Allyeojul geoya, they can't have you no more", time: 100 },
      { line: "Bwabwa yeogi, nae ireum sseoissdago, y-yeah, eh-eh", time: 104 },
      {
        line: "Nuga naege mworadeun Namdeulgwaneun dalla neon Maybe you could be the one",
        time: 109,
      },
      {
        line: "Nal mideobwa han beon I'm not looking for just fun Maybe I could be the one",
        time: 114,
      },
      { line: "Oh, baby, yeminhadae na lately", time: 118 },
      {
        line: "Neo eopsineun maeil maeiri, yeah-eh, eh Jaemieopseo eojjeoji",
        time: 124,
      },
      {
        line: "I just want you, call my phone right now I just wanna hear you're mine",
        time: 128,
      },
      {
        line: "Cause I know what you like boy (Uh-uh) You're my chemical hype boy (Uh-uh)",
        time: 137,
      },
      {
        line: "Nae jinan naldeureun, nun tteumyeon ijneun kkum Hype boy, neoman wonhae Hype boy, naega jeonhae",
        time: 147,
      },
      {
        line: "And we can go hi-i-i-i-i-igh Malhaebwa, yeah, neukkyeobwa, mm-mm",
        time: 152,
      },
      {
        line: "Take him to the sky-y-y-y-y-y You know, I hype you, boy",
        time: 157,
      },
      {
        line: "Nuneul gama, ah-ah-ah, ah-ah Malhaebwa, yeah, neukkyeobwa, mm-mm",
        time: 162,
      },
      {
        line: "Take him to the sky-y-y-y-y-y You know, I hype you, boy",
        time: 168,
      },
      { line: "", time: 177 },
    ],
  },
];

export { songs };
