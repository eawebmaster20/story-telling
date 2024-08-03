
const story1={  
  "Journey To Amalitech": {
    "initialScene": "roundtableScene",
    "description": "After defeating the dragon, Sir PK enters the tower’s depths and discovers Princess Harriet bound in heavy chains. Her eyes light up with hope as she sees her rescuer. With a swift, determined effort, PK begins to free her, ready to bring her back to safety",
    "coverImage": "assets/image/green-knight.png",
    "introVideo": "assets/image/green-knight.png",
    "stats": {
      "readBy": 5,
      "rating": 8.3
    },
    "scenes": {
      "roundtableScene": {
        "id": "roundtableScene",
        "title": "The round table chooses you sir Pk",
        "image": "../assets/TheGreenNight/roundtable.jpg",
        "description": "You are tasked with rescuing Princess Harriet from the evil sorcerer Malachi. As a known brave knight, all eyes are on you. Would you accept the deadly task or will you Hesitate?",
        "decisions": [
          {
            "choice": "A",
            "text": "Accept the quest",
            "nextScene": "dressingScene"
          },
          {
            "choice": "B",
            "text": "Hesitate",
            "nextScene": "angrykingScene"
          }
        ]
      },
      "roundtableScene2": {
        "id": "roundtableScene2",
        "title": " Restoring Honor",
        "image": "../assets/TheGreenNight/roundtable2.jpg",
        "description": "Sir PK, eager to restore his honor, speaks to the king with fervor. “I seek to amend my mistake,” he says earnestly, pledging to take on the quest. His heartfelt words and renewed commitment aim to mend the rift and regain the king’s trust and respect",
        "decisions": [
          {
            "choice": "A",
            "text": "Accept the quest",
            "nextScene": "dressingScene"
          },
          {
            "choice": "B",
            "text": "Hesitate",
            "nextScene": "angrykingScene"
          }
        ]
      },
      "dressingScene": {
        "id": "dressingScene",
        "image": "../assets/TheGreenNight/dressing.jpg",
        "title": "Preparing for the deadly task that lays ahead of Your path",
        "description": "As the sun sets, Sir PK dons his gleaming armor and mounts his steed. With supplies packed and a final glance at the castle, he rides off, determined to rescue Princess Harriet from the evil sorcerer Malachi. The kingdom's hopes rest on his shoulders",
        "decisions": [],
        "nextScene": "gateScene"
      },
      "dressingScene2": {
        "id": "dressingScene2",
        "image": "../assets/TheGreenNight/dressing.jpg",
        "title": "Preparing for the deadly task that lays ahead of Your path",
        "description": "In attempt to restore honor, Sir PK dons his gleaming armor and mounts his steed. With supplies packed and a final glance at the castle, he rides off, determined to rescue Princess Harriet from the evil sorcerer Malachi. The kingdom's hopes rest on his shoulders",
        "decisions": [],
        "nextScene": "gateScene"
      },
      "angrykingScene": {
        "id": "angrykingScene",
        "title": "The King's Fury",
        "image": "../assets/TheGreenNight/angryking.jpg",
        "description": "Sir PK refuses the quest, his decision echoing in the grand hall. The king's face flushes with rage, eyes blazing. 'How dare you defy me?' he thunders. Courtiers hold their breath as tension mounts, the king's wrath threatening to erupt. The kingdom's hopes hang in the balance.",
        "decisions": [
          {
            "choice": "A",
            "text": "Accept the quest",
            "nextScene": "dressingScene"
          },
          {
            "choice": "B",
            "text": "Defend Choice",
            "nextScene": "demotedScene"
          }
        ]
      },
      "demotedScene": {
        "id": "demotedScene",
        "title": "The King's Disdain",
        "image": "../assets/TheGreenNight/angryking.jpg",
        "description": "The king, eyes filled with disappointment and anger announces Sir PK’s demotion after the declined quest. 'You have lost my trust,' he declares, his voice cold. Stripped of rank, PK faces the harsh reality of his choice, the weight of his decision heavy as he departs with diminished honor.",
        "decisions": [],
        "nextScene": "cryingScene"
      },
      "cryingScene": {
        "id": "cryingScene",
        "title": "Tears of Disappointment",
        "image": "../assets/TheGreenNight/tearsofDissapointment.jpg",
        "description": "Sir PK, now demoted, stands alone in his chamber, tears streaming down his face. The weight of his decision and the king's harsh judgment have left him heartbroken. His dreams of heroism feel shattered as he mourns his lost honor and diminished standing.",
        "decisions": [
          {
            "choice": "A",
            "text": "leave kingdom",
            "nextScene": "queenScene"
          },
          {
            "choice": "B",
            "text": "Take Quest Secretly",
            "nextScene": "dressingScene2"
          }
        ]
      },
      "queenScene": {
        "id": "queenScene",
        "title": "The Queen's Plea",
        "image": "../assets/TheGreenNight/queenplead.jpg",
        "description": "The queen, her eyes filled with urgency and hope, summons Sir PK. 'Please, accept the quest,' she begs, her voice trembling. She implores him to reconsider, emphasizing the kingdom’s dire need. Her heartfelt plea stirs PK’s resolve, reigniting his sense of duty and honor.",
        "decisions": [
          {
            "choice": "A",
            "text": "Accept the quest",
            "nextScene": "dressingScene"
          },
          {
            "choice": "B",
            "text": "Speak to Knights",
            "nextScene": "roundtableScene2"
          }
        ]
      },

      "gateScene": {
        "id": "gateScene",
        "title": "Ready to Take Off",
        "image": "../assets/TheGreenNight/departure.jpg",
        "description": "Sir PK stands at the kingdom gate, his armor gleaming and his steed pawing the ground. With a deep breath and a final look at the castle, he readies himself for the journey ahead, determined to rescue Princess Harriet. The adventure begins now.",
        "decisions": [
          {
            "choice": "A",
            "text": "Seek Hermit's Wisdom",
            "nextScene": "wisdomScene"
          },
          {
            "choice": "B",
            "text": "Continue Path",
            "nextScene": "pathScene"
          }
        ]
      },
      "wisdomScene": {
        "id": "wisdomScene",
        "title": "Arrival at the Hermit's Cottage",
        "image": "../assets/TheGreenNight/wisdomhouse.jpg",
        "description": "Sir PK arrives at the hermit's rustic cottage, nestled deep in the forest. The quaint, ivy-covered home exudes an aura of tranquility. As PK approaches, he feels a sense of hope, ready to seek the sage’s guidance for the daunting quest that lies ahead.",
        "decisions": [],
        "nextScene": "hermitScene"
      },
      "hermitScene": {
        "id": "hermitScene",
        "title": "Seeking the Hermit's Wisdom",
        "image": "../assets/TheGreenNight/hermit.jpg",
        "description": "Sir PK travels deep into the forest to consult the wise hermit. In a secluded grove, he stands before the sage, seeking guidance for the perilous journey ahead. The hermit’s ancient wisdom and advice become crucial for PK’s quest to rescue Princess Harriet.",
        "decisions": [],
        "nextScene": "leavehermitScene"
      },
      "leavehermitScene": {
        "id": "leavehermitScene",
        "title": "Seeking the Hermit's Wisdom",
        "image": "../assets/TheGreenNight/leavehermit.jpg",
        "description": "Sir PK travels deep into the forest to consult the wise hermit. In a secluded grove, he stands before the sage, seeking guidance for the perilous journey ahead. The hermit’s ancient wisdom and advice become crucial for PK’s quest to rescue Princess Harriet.",
        "decisions": [],
        "nextScene": "pathScene"
      },

      "pathScene": {
        "id": "pathScene",
        "title": "The Fork in the Forest Path",
        "image": "../assets/TheGreenNight/foresFork.jpg",
        "description": "Sir PK arrives at a fork in the forest, facing two diverging paths: one narrow and winding, the other wide and open. He must choose carefully, as each path holds its own challenges and opportunities. The choice ahead will shape the course of his journey.",
        "decisions": [
          {
            "choice": "A",
            "text": "Narrow Path",
            "nextScene": "narrowpathScene"
          },
          {
            "choice": "B",
            "text": "Wide Path",
            "nextScene": "widepathScene"
          }
        ]
      },
      "narrowpathScene": {
        "id": "narrowpathScene",
        "title": "Taking the Narrow Path",
        "image": "../assets/TheGreenNight/narrowpath.jpg",
        "description": "Sir PK chooses the narrow path, winding deeper into the forest. The trail is tight and shadowed, demanding careful navigation. As he presses forward, the dense foliage and whispering winds hint at the challenges that await on this treacherous route",
        "decisions": [],
        "nextScene": "thievesScene"
      },
      "widepathScene": {
        "id": "widepathScene",
        "title": "Taking the Wide Path",
        "image": "../assets/TheGreenNight/widepath.jpg",
        "description": "Sir PK opts for the wide path, which stretches open and clear through the forest. The broader trail offers a sense of ease and visibility, but its openness might hide unexpected dangers. As he advances, the path reveals both the promise of straightforward travel and the possibility of hidden threats.",
        "decisions": [],
        "nextScene": "wolvespackScene"
      },
      "wolvespackScene": {
        "id": "wolvespackScene",
        "title": "Ambushed by Angry Wolves",
        "image": "../assets/TheGreenNight/wolvespack.jpg",
        "description": "As Sir PK navigates the forest path, a pack of angry wolves suddenly emerges from the underbrush, surrounding him. Their snarls and bared teeth signal imminent danger. PK must quickly decide how to defend himself and fend off the fierce attack to survive this perilous encounter.",
        "decisions": [
          {
            "choice": "A",
            "text": "Fight Wolves",
            "nextScene": "wolvesfight1Scene"
          },
          {
            "choice": "B",
            "text": "Flee",
            "nextScene": "thievesScene"
          }
        ]
      },
      "thievesScene": {
        "id": "thievesScene",
        "title": "Ambushed by Outlaws",
        "image": "../assets/TheGreenNight/thieves1scene.jpg",
        "description": "Surrounded by a band of outlaws in the forest, Sir PK faces a crucial choice: surrender to their demands and risk capture or fight valiantly to break free. His hand tightens on his sword, weighing the risks and the fate of his quest in this tense, pivotal moment.",
        "decisions": [
          {
            "choice": "A",
            "text": "Defend Yourself",
            "nextScene": "bear1Scene"
          },
          {
            "choice": "B",
            "text": "Attack Outlaws",
            "nextScene": "bear1Scene"
          }
        ]
      },
      "bear1Scene": {
        "id": "bear1Scene",
        "title": "Prepared to Engage",
        "image": "../assets/TheGreenNight/thieves2scene.jpg",
        "description": "As the outlaws approach, recognizing Sir PK as a formidable knight, he draws his sword with a steely gaze. The tension thickens as they close in slowly, testing his resolve. PK stands ready, prepared to defend himself and continue his quest against this new challenge.",
        "decisions": [
          {
            "choice": "A",
            "text": "Defend Yourself",
            "nextScene": "bear2Scene"
          },
          {
            "choice": "B",
            "text": "Surrender",
            "nextScene": "bear2Scene"
          }
        ]
      },
      "bear2Scene": {
        "id": "bear2Scene",
        "title": " An Unexpected Entrance",
        "image": "../assets/TheGreenNight/thieves3scene.jpg",
        "description": "Suddenly, a bear emerges from the forest behind Sir PK. The outlaws hesitate, eyes widening in fear. Seizing the moment of confusion, PK prepares to use this unexpected distraction to his advantage, whether by fighting alongside the bear or making a strategic retreat.",
        "decisions": [],
        "nextScene": "bear3Scene"
      },
      "bear3Scene": {
        "id": "bear3Scene",
        "title": "The Bear's Intervention",
        "image": "../assets/TheGreenNight/thieves4scene.jpg",
        "description": "Out of nowhere, the bear charges from the your side, roaring fiercely. The outlaws scatter in panic, abandoning their ambush to escape the bear’s wrath. Sir PK seizes the opportunity, watching as the bear chases the fleeing bandits, clearing his path forward in an unexpected turn of fortune.",
        "decisions": [],
        "nextScene": "bear4Scene"
      },
      "bear4Scene": {
        "id": "bear4Scene",
        "title": " A Restful Day",
        "image": "../assets/TheGreenNight/bearfinal.jpg",
        "description": "After the bear’s intervention, Sir PK takes a well-deserved rest, finding a safe spot in the forest. The bear, now a guardian, stands watch nearby, ensuring no further threats approach. PK sleeps peacefully, gathering strength to continue his journey at dawn, grateful for the unexpected ally.",
        "decisions": [],
        "nextScene": "tocastleScene"
      },
      "wolvesfight1Scene": {
        "id": "wolvesfight1Scene",
        "title": " Drawing Sword Against the Wolves",
        "image": "../assets/TheGreenNight/wovlesfightprep.jpg",
        "description": "Sir PK draws his sword with a determined grip, ready to face the pack of snarling wolves. The blade gleams in the dim forest light as he prepares for a fierce battle. With unwavering courage, he braces himself for the fight to protect his life and complete his quest",
        "decisions": [],
        "nextScene": "wolvesfight2Scene"
      },
      "wolvesfight2Scene": {
        "id": "wolvesfight2Scene",
        "title": " Wolves Attack",
        "image": "../assets/TheGreenNight/fightwolves1.jpg",
        "description": "The pack of wolves lunges at Sir PK with fierce growls and snapping jaws. He faces the sudden assault, his sword raised to defend against their savage onslaught. The chaotic clash of steel and claws fills the forest as he fights to fend off the relentless attackers.",
        "decisions": [],
        "nextScene": "wolvesfight3Scene"
      },
      "wolvesfight3Scene": {
        "id": "wolvesfight3Scene",
        "title": "The Battle Rages On",
        "image": "../assets/TheGreenNight/fightwolves2.jpg",
        "description": "The battle between Sir PK and the pack of wolves intensifies. Claws clash against steel as PK fights with all his strength, fending off the relentless attackers. The forest echoes with the sounds of struggle as the knight’s resolve is tested by the ongoing, brutal confrontation.",
        "decisions": [],
        "nextScene": "wolvesfight4Scene"
      },
      "wolvesfight4Scene": {
        "id": "wolvesfight4Scene",
        "title": "Battle Escalates",
        "image": "../assets/TheGreenNight/fightwolves3.jpg",
        "description": "The battle grows more intense as Sir PK struggles against the increasingly aggressive wolves. The fierce combat escalates with every swipe of his sword and the wolves' relentless attacks. Exhaustion and determination mark the fierce struggle, with PK fighting desperately to turn the tide in his favor.",
        "decisions": [],
        "nextScene": "wolvesdefeatScene"
      },
      "wolvesdefeatScene": {
        "id": "wolvesdefeatScene",
        "title": "Victorious Over the Wolves",
        "image": "../assets/TheGreenNight/wolvesdefeat.jpg",
        "description": "Sir PK emerges from the fierce battle with the wolves, breathing heavily but victorious. His armor is scratched, and his sword is stained, but he stands resolute amidst the fallen foes. The forest quiets as he surveys the aftermath, his bravery proving once again the strength of his resolve.",
        "decisions": [],
        "nextScene": "tocastleScene"
      },
      "tocastleScene": {
        "id": "tocastleScene",
        "title": "Continuing the Journey",
        "image": "../assets/TheGreenNight/tocastle.jpg",
        "description": "After vanquishing the threats, Sir PK resumes his journey with a weary but determined stride. The forest path stretches ahead, now quiet and still. Despite the battle's toll, he presses on with renewed focus, ready to face the next challenges on his quest to rescue Princess Harriet",
        "decisions": [],
        "nextScene": "castleScene"
      },
      "castleScene": {
        "id": "castleScene",
        "title": "Castle journey contineus",
        "image": "../assets/TheGreenNight/castlearrival.jpg",
        "description": "Sir PK continues hoping to reach the imposing castle where Princess Harriet is held captive. The fortress looms with towering walls and guarded gates. With steely resolve, PK approaches, prepared for the final confrontation to rescue the princess and complete his perilous quest",
        "decisions": [],
        "nextScene": "castle2Scene"
      },
      "castle2Scene": {
        "id": "castle2Scene",
        "title": "Approaching the Castle",
        "image": "../assets/TheGreenNight/spotscastle.jpg",
        "description": "As Sir PK spots the castle in the distance, he dismounts from his horse. His eyes fixed on the imposing structure, he prepares for the final leg of his journey. With steely determination, he approaches on foot, ready to confront whatever dangers lie ahead to rescue Princess Elara.",
        "decisions": [],
        "nextScene": "castleenterScene"
      },
      "castleenterScene": {
        "id": "castleenterScene",
        "title": " At the Castle Door",
        "image": "../assets/TheGreenNight/castledoor.jpg",
        "description": "Sir PK stands resolutely before the castle door, his sword ready and resolve firm. The heavy, ancient wood looms before him, its iron-bound strength a barrier to his quest. As he prepares to breach the entrance, the weight of his mission and the anticipation of the final challenge press heavily upon him.",
        "decisions": [
          {
            "choice": "A",
            "text": "Open Door",
            "nextScene": "opendoorScene"
          },
          {
            "choice": "B",
            "text": "Find a Way",
            "nextScene": "findwayScene"
          }
        ]
      },
      "findwayScene": {
        "id": "findwayScene",
        "title": " Discovering the Broken Entrance",
        "image": "../assets/TheGreenNight/castlefoundway.jpg",
        "description": "Sir PK discovers the castle door is broken, splintered and ajar. The damage suggests recent activity or an unexpected breach. With caution, he steps through the entrance, ready to confront whatever dangers lie within and rescue Princess Harriet from her captivity.",
        "decisions": [],
        "nextScene": "fightdragonScene1"
      },
      "opendoorScene": {
        "id": "opendoorScene",
        "title": "Forcing Open the Castle Door",
        "image": "../assets/TheGreenNight/opencastlegate.jpg",
        "description": "With a determined heave, Sir PK forces open the heavy castle door. His strength and resolve are evident as the door groans and creaks, finally giving way. Stepping through the threshold, he braces himself as the Dragon impedes his progress.",
        "decisions": [],
        "nextScene": "fightdragonScene1"
      },

      "fightdragonScene1": {
        "id": "fightdragonScene1",
        "title": "Confronting the Dragon",
        "image": "../assets/TheGreenNight/dragonfightscene1.jpg",
        "description": "With a determined heave, Sir PK forces open the heavy castle door. His strength and resolve are evident as the door groans and creaks, finally giving way. Stepping through the threshold, he braces himself for the challenges that await inside as he advances toward his goal.",
        "decisions": [],
        "nextScene": "fightdragonScene2"
      },
      "fightdragonScene2": {
        "id": "fightdragonScene2",
        "title": "Choosing the Battleground",
        "image": "../assets/TheGreenNight/dragongrounddecide.jpg",
        "description": "Sir PK surveys the area for a vantage point to confront the dragon and He spots a DANGEROUS higher ground. From this elevated position, he can gain a strategic advantage, allowing him to better maneuver but a fall will cause his DEATH.",
        "decisions": [
          {
            "choice": "A",
            "text": "Use High Ground",
            "nextScene": "highfightScene"
          },
          {
            "choice": "B",
            "text": "Use Low Ground",
            "nextScene": "lowfight1Scene"
          }
        ]
      },
      "highfightScene": {
        "id": "highfightScene",
        "title": "Defeating the Dragon from Above",
        "image": "../assets/TheGreenNight/highfight.jpg",
        "description": "From his elevated position, Sir PK jumps and delivers a swift blow over the dragon with skillful strikes. The high ground offers a decisive advantage, allowing him to outmaneuver the dragon,his strategic choice proving pivotal in the epic battle.",
        "decisions": [],
        "nextScene": "deaddragonScene"
      },
      "lowfight1Scene": {
        "id": "lowfight1Scene",
        "title": "Charging the Dragon from Below",
        "image": "../assets/TheGreenNight/lowfight1.jpg",
        "description": "Sir PK charges the dragon from lower ground, braving the beast’s fiery breath and fierce claws. Despite the disadvantage of the terrain, he fights with determination and agility, pressing forward to engage the dragon in a high-stakes, challenging battle",
        "decisions": [],
        "nextScene": "lowfight2Scene"
      },
      "lowfight2Scene": {
        "id": "lowfight2Scene",
        "title": " Standing Firm Despite Injury",
        "image": "../assets/TheGreenNight/lowfight2.jpg",
        "description": "The dragon’s fierce attack injures Sir PK, but he remains steadfast on the battlefield. Despite the pain and the blood staining his armor, he stands his ground, determined to see the fight through to the end and vanquish the beast.",
        "decisions": [],
        "nextScene": "lowfight3Scene"
      },
      "lowfight3Scene": {
        "id": "lowfight3Scene",
        "title": " Standing Firm Despite Injury",
        "image": "../assets/TheGreenNight/lowfight2.jpg",
        "description": "The dragon’s fierce attack injures Sir PK, but he remains steadfast on the battlefield. Despite the pain and the blood staining his armor, he stands his ground, determined to see the fight through to the end and vanquish the beast.",
        "decisions": [],
        "nextScene": "deaddragonScene"
      },
      "deaddragonScene": {
        "id": "deaddragonScene",
        "title": "Delivering the Final Blow",
        "image": "../assets/TheGreenNight/deaddragon.jpg",
        "description": "With a final surge of strength, Sir PK delivers a decisive, deadly blow to the dragon. The beast collapses, defeated, as the knight stands over his fallen foe. Victory is achieved, and the path to rescuing Princess Harriet is now clear",
        "decisions": [],
        "nextScene": "rescueprincess1Scene"
      },
      "rescueprincess1Scene": {
        "id": "rescueprincess1Scene",
        "title": " Finding the Princess in Chains",
        "image": "../assets/TheGreenNight/princessinchain.jpg",
        "description": "After defeating the dragon, Sir PK enters the tower’s depths and discovers Princess Harriet bound in heavy chains. Her eyes light up with hope as she sees her rescuer. With a swift, determined effort, PK begins to free her, ready to bring her back to safety",
        "decisions": [],
        "nextScene": "rescueprincess2Scene"
      },
      "rescueprincess2Scene": {
        "id": "rescueprincess2Scene",
        "title": " Finding the Princess in Chains",
        "image": "../assets/TheGreenNight/princessinchain.jpg",
        "description": "After defeating the dragon, Sir PK enters the tower’s depths and discovers Princess Harriet bound in heavy chains. Her eyes light up with hope as she sees her rescuer. With a swift, determined effort, PK begins to free her, ready to bring her back to safety",
        "decisions": [],
        "nextScene": "rescueprincess3Scene"
      },
      "rescueprincess3Scene": {
        "id": "rescueprincess3Scene",
        "title": "Rescuing the Princess",
        "image": "../assets/TheGreenNight/rescueprincess.jpg",
        "description": "Sir PK unchains Princess Harriet, lifting her gently into his arms. With unwavering resolve, he carries her to his waiting horse. Together, they prepare to leave the castle, the knight’s determination and bravery leading them toward freedom and safety.",
        "decisions": [],
        "nextScene": "kingofferScene"
      },
      "kingofferScene": {
        "id": "kingofferScene",
        "title": "The King's Offer",
        "image": "../assets/TheGreenNight/kingsoffer.jpg",
        "description": "Upon their return, the grateful king offers his daughter, Princess Elara, to Sir PK as a bride. The knight faces a profound decision: to accept the princess's hand in marriage, securing a place in the royal family, or to continue his adventures as a free knight.",
        "decisions": [
          {
            "choice": "A",
            "text": "Accept Offer",
            "nextScene": "end1Scene"
          },
          {
            "choice": "B",
            "text": "Kindly Reject",
            "nextScene": "end2Scene"
          }
        ]
      },

      "end1Scene": {
        "id": "end1Scene",
        "title": "The Royal Union",
        "image": "../assets/TheGreenNight/end1.jpg",
        "description": "Sir PK graciously accepts the king’s offer, pledging his love and loyalty to Princess Harriet. The kingdom rejoices as they celebrate the union of the brave knight and the rescued princess. With honor restored and a bright future ahead, PK and Harriet begin their new life together in harmony.",
        "decisions": [],
        "nextScene": "end"
      },
      "end2Scene": {
        "id": "end2Scene",
        "title": "The Noble Refusal",
        "image": "../assets/TheGreenNight/end2.jpg",
        "description": "Sir PK respectfully declines the king’s offer, expressing his gratitude but choosing to continue his knightly adventures. Princess Harriet, though saddened, understands his noble spirit. The kingdom honors PK’s decision, celebrating his bravery and integrity. The kingdom lives in Harmony and freedom.",
        "decisions": [],
        "nextScene": "end"
      },
      "end": {
        "id": "end",
        "title": "Peace Restored",
        "image": "../assets/TheGreenNight/end.jpg",
        "description": "After overcoming numerous trials and fierce battles, Sir PK successfully restores peace to the kingdom. His valor and determination bring an end to the chaos, and the land flourishes once more. With Princess Elara safe and the kingdom secure, PK's heroic journey stands as a testament to his unwavering courage and noble spirit.",
        "decisions": [
          {
            "choice": "A",
            "text": "Main Menu",
            "nextScene": "end1Scene"
          },
          {
            "choice": "B",
            "text": "Replay",
            "nextScene": "roundtableScene"
          }
        ]
      }
    }
  }
}

module.exports = {story1}