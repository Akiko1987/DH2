'use strict';

/**@type {{[k: string]: {learnset: {[k: string]: MoveSource[]}}}} */
let BattleLearnsets = {
	arbosaur: {
		learnset: {
			amnesia: ["8M", "8V"],
			attract: ["8M", "7M", "7V", "6M", "5M", "4M", "3M"],
			bide: ["7V"],
			bind: ["7T", "6T", "5T"],
			block: ["7T", "6T", "5T", "4T"],
			bodyslam: ["8M", "7V", "3T"],
			bulldoze: ["8M", "7M", "6M", "5M"],
			bulletseed: ["8M", "4M", "3M"],
			captivate: ["4M"],
			charm: ["8M"],
			confide: ["7M", "6M"],
			curse: ["7V"],
			cut: ["7V", "6M", "5M", "4M", "3M"],
			defensecurl: ["7V", "3T"],
			doubleedge: ["8L51", "8V", "7L31", "7V", "6L31", "5L31", "4L31", "3T"],
			doubleteam: ["7M", "7V", "6M", "5M", "4M", "3M"],
			earthpower: ["8M"],
			earthquake: ["8M", "8V", "7M", "6M", "5M", "4M", "3M"],
			echoedvoice: ["7M", "6M", "5M"],
			endure: ["8M", "7V", "4M", "3T"],
			energyball: ["8M", "7M", "6M", "5M", "4M"],
			facade: ["8M", "8V", "7M", "6M", "5M", "4M", "3M"],
			falseswipe: ["8M"],
			flash: ["7V", "6M", "5M", "4M", "3M"],
			frenzyplant: ["8T", "7T", "6T", "6S0", "5T", "4T", "3T"],
			frustration: ["7M", "7V", "6M", "5M", "4M", "3M"],
			furycutter: ["7V", "4T", "3T"],
			gigadrain: ["8M", "7T", "7V", "6T", "5T", "4M", "3M"],
			gigaimpact: ["8M", "7M", "6M", "5M", "4M"],
			grassknot: ["8M", "7M", "6M", "5M", "4M"],
			grasspledge: ["8T", "7T", "6T", "6S0", "5T"],
			grassyglide: ["8T"],
			grassyterrain: ["8M"],
			growl: ["8L1", "8V", "7L1", "7V", "6L1", "5L1", "4L1", "3L1"],
			growth: ["8L1", "8V", "7L28", "7V", "6L28", "5L28", "4L28", "3L41"],
			headbutt: ["8V", "7V", "4T"],
			helpinghand: ["8M"],
			hiddenpower: ["7M", "7V", "6M", "5M", "4M", "3M"],
			hyperbeam: ["8M", "8V", "7M", "7V", "6M", "5M", "4M", "3M"],
			knockoff: ["7T", "6T", "5T", "4T"],
			leafstorm: ["8M"],
			leechseed: ["8L9", "8V", "7L1", "7V", "6L1", "5L1", "4L1", "3L1"],
			lightscreen: ["8M", "8V", "7M", "6M", "5M"],
			magicalleaf: ["8M"],
			megadrain: ["8V", "7V"],
			mimic: ["7V", "3T"],
			mudslap: ["7V", "4T", "3T"],
			naturalgift: ["4M"],
			naturepower: ["7M", "6M"],
			outrage: ["8M", "8V", "7T", "6T", "5T", "4T"],
			petalblizzard: ["8L0", "7L50", "6L50"],
			petaldance: ["8L1", "8V", "7L1", "6L32", "5L32", "4L32"],
			poisonpowder: ["8L15", "8V", "7L13", "7V", "6L13", "5L13", "4L13", "3L15"],
			powerwhip: ["8M", "8V"],
			protect: ["8M", "8V", "7M", "7V", "6M", "5M", "4M", "3M"],
			rage: ["7V"],
			razorleaf: ["8L12", "8V", "7L20", "7V", "6L20", "5L20", "4L20", "3L22"],
			reflect: ["8V", "7V"],
			rest: ["8M", "8V", "7M", "7V", "6M", "5M", "4M", "3M"],
			return: ["7M", "7V", "6M", "5M", "4M", "3M"],
			roar: ["7M", "7V", "6M", "5M", "4M", "3M"],
			rockclimb: ["4M"],
			rocksmash: ["6M", "5M", "4M", "3M"],
			round: ["8M", "7M", "6M", "5M"],
			safeguard: ["8M", "7M", "6M", "5M"],
			secretpower: ["6M", "4M", "3M"],
			seedbomb: ["8M", "8L20", "7T", "6T", "5T", "4T"],
			sleeppowder: ["8L15", "8V", "7L13", "7V", "6L13", "5L13", "4L13", "3L15"],
			sleeptalk: ["8M", "7M", "7V", "6M", "5T", "4M", "3T"],
			sludgebomb: ["8M", "8V", "7M", "6M", "5M", "4M", "3M"],
			snore: ["8M", "7T", "7V", "6T", "5T", "4T", "3T"],
			solarbeam: ["8M", "8L58", "8V", "7M", "7L53", "7V", "6M", "6L53", "6S0", "5M", "5L53", "4M", "4L53", "3M", "3L65"],
			stompingtantrum: ["8M", "7T"],
			strength: ["6M", "5M", "4M", "3M"],
			stringshot: ["4T"],
			substitute: ["8M", "8V", "7M", "7V", "6M", "5M", "4M", "3T"],
			sunnyday: ["8M", "7M", "7V", "6M", "5M", "4M", "3M"],
			swagger: ["7M", "7V", "6M", "5M", "4M", "3T"],
			sweetscent: ["8L30", "7L23", "7V", "6L23", "5L23", "4L23", "3L29"],
			swordsdance: ["8M", "7M", "7V", "6M", "5M", "4M", "3T"],
			synthesis: ["8L37", "7T", "7L45", "7V", "6T", "6L45", "6S0", "5T", "5L45", "4T", "4L45", "3L53"],
			tackle: ["8L1", "8V", "7L1", "7V", "6L1", "5L1", "4L1", "3L1"],
			takedown: ["8L25", "8V", "7L15", "7V", "6L15", "5L15", "4L15"],
			terrainpulse: ["8T"],
			toxic: ["8V", "7M", "7V", "6M", "5M", "4M", "3M"],
			venoshock: ["8M", "7M", "6M", "5M"],
			vinewhip: ["8L1", "8V", "7L1", "7V", "6L1", "5L1", "4L1", "3L1"],
			weatherball: ["8M"],
			workup: ["8M", "7M"],
			worryseed: ["8L44", "7T", "7L39", "6T", "6L39", "5T", "5L39", "4T", "4L39"],
      dracometeor: ["8L1"],
      flamethrower: ["8L1"],
      dragonhammer: ["8L1"],
      dragondance: ["8L1"],
		},
	},
	charbarian: {learnset: {
			acrobatics: ["8M"],
			aerialace: ["7M", "6M", "5M", "4M", "3M"],
			aircutter: ["4T"],
			airslash: ["8M", "8L0", "8V", "7L1", "6L1", "6S1", "6S2", "5L1", "4L1"],
			attract: ["8M", "7M", "7V", "6M", "5M", "4M", "3M"],
			beatup: ["8M"],
			bide: ["7V"],
			blastburn: ["8T", "7T", "6T", "6S4", "5T", "4T", "3T"],
			blazekick: ["8M"],
			bodyslam: ["8M", "7V", "3T"],
			breakingswipe: ["8M"],
			brickbreak: ["8M", "8V", "7M", "6M", "5M", "4M", "3M"],
			brutalswing: ["8M", "7M"],
			bulldoze: ["8M", "7M", "6M", "5M"],
			captivate: ["4M"],
			confide: ["7M", "6M"],
			counter: ["8V", "7V", "3T"],
			crunch: ["8M", "8V"],
			curse: ["7V"],
			cut: ["7V", "6M", "5M", "4M", "3M"],
			defensecurl: ["7V", "3T"],
			defog: ["7T", "4M"],
			dig: ["8M", "8V", "7V", "6M", "5M", "4M", "3M"],
			doubleedge: ["7V", "3T"],
			doubleteam: ["7M", "7V", "6M", "5M", "4M", "3M"],
			dragonbreath: ["8L12", "7V"],
			dragonclaw: ["8M", "8L1", "7M", "7L1", "7S6", "7S7", "6M", "6L1", "6S2", "5M", "5L1", "4M", "4L1", "3M"],
			dragondance: ["8M", "7S9"],
			dragonpulse: ["8M", "8V", "7T", "6T", "5T", "4M"],
			dragonrage: ["8V", "7L17", "7V", "7S6", "7S7", "7S8", "6L17", "6S2", "5L17", "4L17", "3L54", "3S0"],
			dragontail: ["8V", "8S10", "7M", "6M", "5M"],
			dualwingbeat: ["8T"],
			dynamicpunch: ["7V", "3T"],
			earthquake: ["8M", "8V", "7M", "7V", "7S9", "6M", "5M", "4M", "3M"],
			echoedvoice: ["7M", "6M", "5M"],
			ember: ["8L1", "8V", "7L1", "7V", "6L1", "6S5", "5L1", "4L1", "3L1"],
			endure: ["8M", "7V", "4M", "3T"],
			facade: ["8M", "8V", "7M", "6M", "5M", "4M", "3M"],
			falseswipe: ["8M"],
			fireblast: ["8M", "8V", "7M", "7V", "6M", "5M", "4M", "3M"],
			firefang: ["8M", "8L19", "7L28", "6L28", "6S1", "6S2", "5L28", "4L28"],
			firepledge: ["8T", "7T", "6T", "6S4", "5T"],
			firepunch: ["8M", "8V", "7T", "7V", "6T", "5T", "4T", "3T"],
			firespin: ["8M", "8L46", "8V", "7L56", "7V", "6L56", "6S5", "5L56", "4L49", "3L64", "3S0"],
			fissure: ["7V"],
			flameburst: ["7L32", "6L32", "6S1", "6S5", "5L32"],
			flamecharge: ["7M", "6M", "5M"],
			flamethrower: ["8M", "8L30", "8V", "8S10", "7M", "7L47", "7V", "7S8", "6M", "6L47", "6S5", "5M", "5L47", "4M", "4L42", "3M", "3L34"],
			flareblitz: ["8M", "8L62", "8V", "7L1", "7S6", "7S7", "7S9", "6L1", "6S4", "5L77", "4L66"],
			fling: ["8M", "7M", "6M", "5M", "4M"],
			fly: ["8M", "8V", "7M", "7V", "7S6", "7S7", "7S9", "6M", "5M", "4M", "3M"],
			focusblast: ["8M", "7M", "6M", "6S3", "5M", "4M"],
			focuspunch: ["7T", "6T", "4M", "3M"],
			frustration: ["7M", "7V", "6M", "5M", "4M", "3M"],
			furycutter: ["7V", "4T", "3T"],
			furyswipes: ["8V"],
			gigaimpact: ["8M", "7M", "6M", "5M", "4M"],
			growl: ["8L1", "8V", "7L1", "7V", "6L1", "5L1", "4L1", "3L1"],
			headbutt: ["8V", "7V", "4T"],
			heatcrash: ["8M"],
			heatwave: ["8M", "8L1", "8V", "7T", "7L1", "6T", "6L1", "5T", "5L71", "4T", "4L59", "3L1"],
			helpinghand: ["8M"],
			hiddenpower: ["7M", "7V", "6M", "5M", "4M", "3M"],
			holdhands: ["6S3"],
			honeclaws: ["6M", "5M"],
			hurricane: ["8M"],
			hyperbeam: ["8M", "8V", "7M", "7V", "6M", "5M", "4M", "3M"],
			incinerate: ["6M", "5M"],
			inferno: ["8L54", "7L62", "6L62", "6S1", "5L62"],
			irontail: ["8M", "8V", "7T", "7V", "6T", "5T", "4M", "3M"],
			leer: ["7V"],
			megakick: ["8M", "7V", "3T"],
			megapunch: ["8M", "7V", "3T"],
			metalclaw: ["3L1"],
			mimic: ["7V", "3T"],
			mudslap: ["7V", "4T", "3T"],
			mysticalfire: ["8M"],
			naturalgift: ["4M"],
			ominouswind: ["4T"],
			outrage: ["8M", "8V", "7T", "6T", "5T", "4T"],
			overheat: ["8M", "7M", "6M", "6S3", "5M", "4M", "3M"],
			poweruppunch: ["6M"],
			protect: ["8M", "8V", "7M", "7V", "6M", "5M", "4M", "3M"],
			rage: ["7V", "3L20"],
			reflect: ["8V", "7V"],
			rest: ["8M", "8V", "7M", "7V", "6M", "5M", "4M", "3M"],
			return: ["7M", "7V", "6M", "5M", "4M", "3M"],
			roar: ["7M", "7V", "6M", "5M", "4M", "3M"],
			rockslide: ["8M", "8V", "7M", "6M", "5M", "4M", "3T"],
			rocksmash: ["7V", "6M", "5M", "4M", "3M"],
			rocktomb: ["8M", "7M", "6M", "5M", "4M"],
			roost: ["8V", "7M", "6M", "5T", "4M"],
			round: ["8M", "7M", "6M", "5M"],
			sandstorm: ["7V"],
			scaleshot: ["8T"],
			scaryface: ["8M", "8L39", "7L21", "7V", "6L21", "6S4", "5L21", "4L21", "3L27"],
			scorchingsands: ["8T"],
			scratch: ["8L1", "8V", "7L1", "7V", "6L1", "5L1", "4L1", "3L1"],
			secretpower: ["6M", "4M", "3M"],
			seismictoss: ["8V", "8S10", "7V", "7S8", "3T"],
			shadowclaw: ["8M", "7M", "7L1", "6M", "6L1", "5M", "5L1", "4M", "4L1"],
			skullbash: ["7V"],
			skydrop: ["7M", "6M", "5M"],
			slash: ["8L24", "8V", "8S10", "7L41", "7V", "7S8", "6L41", "5L41", "4L32", "3L44", "3S0"],
			sleeptalk: ["8M", "7M", "7V", "6M", "5T", "4M", "3T"],
			smokescreen: ["8L1", "8V", "7L10", "7V", "6L1", "5L1", "4L1", "3L1"],
			snore: ["8M", "7T", "7V", "6T", "5T", "4T", "3T"],
			solarbeam: ["8M", "8V", "7M", "6M", "6S3", "5M", "4M"],
			steelwing: ["8M", "7M", "7V", "6M", "4M", "3M"],
			strength: ["7V", "6M", "5M", "4M", "3M"],
			submission: ["7V"],
			substitute: ["8M", "8V", "7M", "7V", "6M", "5M", "4M", "3T"],
			sunnyday: ["8M", "7M", "7V", "6M", "5M", "4M", "3M"],
			swagger: ["7M", "7V", "6M", "5M", "4M", "3T"],
			swift: ["8M", "7V", "4T", "3T"],
			swordsdance: ["8M", "7M", "7V", "6M", "5M", "4M", "3T"],
			tailwind: ["7T", "6T", "5T", "4T"],
			takedown: ["7V"],
			thunderpunch: ["8M", "8V", "7T", "6T", "5T", "4T"],
			toxic: ["8V", "7M", "7V", "6M", "5M", "4M", "3M"],
			twister: ["4T"],
			weatherball: ["8M"],
			willowisp: ["8M", "8V", "7M", "6M", "5M", "4M"],
			wingattack: ["8V", "7L1", "7V", "6L36", "5L36", "4L36", "3L36", "3S0"],
			workup: ["8M", "7M"],
      firelash: ["8L1"],
      dracometeor: ["8L1"],
      knockoff: ["8L1"],
      explosion: ["8L1"],
	}},	
  chargaryen: {learnset: {
			acrobatics: ["8M"],
			aerialace: ["7M", "6M", "5M", "4M", "3M"],
			aircutter: ["4T"],
			airslash: ["8M", "8L0", "8V", "7L1", "6L1", "6S1", "6S2", "5L1", "4L1"],
			attract: ["8M", "7M", "7V", "6M", "5M", "4M", "3M"],
			beatup: ["8M"],
			bide: ["7V"],
			blastburn: ["8T", "7T", "6T", "6S4", "5T", "4T", "3T"],
			blazekick: ["8M"],
			bodyslam: ["8M", "7V", "3T"],
			breakingswipe: ["8M"],
			brickbreak: ["8M", "8V", "7M", "6M", "5M", "4M", "3M"],
			brutalswing: ["8M", "7M"],
			bulldoze: ["8M", "7M", "6M", "5M"],
			captivate: ["4M"],
			confide: ["7M", "6M"],
			counter: ["8V", "7V", "3T"],
			crunch: ["8M", "8V"],
			curse: ["7V"],
			cut: ["7V", "6M", "5M", "4M", "3M"],
			defensecurl: ["7V", "3T"],
			defog: ["7T", "4M"],
			dig: ["8M", "8V", "7V", "6M", "5M", "4M", "3M"],
			doubleedge: ["7V", "3T"],
			doubleteam: ["7M", "7V", "6M", "5M", "4M", "3M"],
			dragonbreath: ["8L12", "7V"],
			dragonclaw: ["8M", "8L1", "7M", "7L1", "7S6", "7S7", "6M", "6L1", "6S2", "5M", "5L1", "4M", "4L1", "3M"],
			dragondance: ["8M", "7S9"],
			dragonpulse: ["8M", "8V", "7T", "6T", "5T", "4M"],
			dragonrage: ["8V", "7L17", "7V", "7S6", "7S7", "7S8", "6L17", "6S2", "5L17", "4L17", "3L54", "3S0"],
			dragontail: ["8V", "8S10", "7M", "6M", "5M"],
			dualwingbeat: ["8T"],
			dynamicpunch: ["7V", "3T"],
			earthquake: ["8M", "8V", "7M", "7V", "7S9", "6M", "5M", "4M", "3M"],
			echoedvoice: ["7M", "6M", "5M"],
			ember: ["8L1", "8V", "7L1", "7V", "6L1", "6S5", "5L1", "4L1", "3L1"],
			endure: ["8M", "7V", "4M", "3T"],
			facade: ["8M", "8V", "7M", "6M", "5M", "4M", "3M"],
			falseswipe: ["8M"],
			fireblast: ["8M", "8V", "7M", "7V", "6M", "5M", "4M", "3M"],
			firefang: ["8M", "8L19", "7L28", "6L28", "6S1", "6S2", "5L28", "4L28"],
			firepledge: ["8T", "7T", "6T", "6S4", "5T"],
			firepunch: ["8M", "8V", "7T", "7V", "6T", "5T", "4T", "3T"],
			firespin: ["8M", "8L46", "8V", "7L56", "7V", "6L56", "6S5", "5L56", "4L49", "3L64", "3S0"],
			fissure: ["7V"],
			flameburst: ["7L32", "6L32", "6S1", "6S5", "5L32"],
			flamecharge: ["7M", "6M", "5M"],
			flamethrower: ["8M", "8L30", "8V", "8S10", "7M", "7L47", "7V", "7S8", "6M", "6L47", "6S5", "5M", "5L47", "4M", "4L42", "3M", "3L34"],
			flareblitz: ["8M", "8L62", "8V", "7L1", "7S6", "7S7", "7S9", "6L1", "6S4", "5L77", "4L66"],
			fling: ["8M", "7M", "6M", "5M", "4M"],
			fly: ["8M", "8V", "7M", "7V", "7S6", "7S7", "7S9", "6M", "5M", "4M", "3M"],
			focusblast: ["8M", "7M", "6M", "6S3", "5M", "4M"],
			focuspunch: ["7T", "6T", "4M", "3M"],
			frustration: ["7M", "7V", "6M", "5M", "4M", "3M"],
			furycutter: ["7V", "4T", "3T"],
			furyswipes: ["8V"],
			gigaimpact: ["8M", "7M", "6M", "5M", "4M"],
			growl: ["8L1", "8V", "7L1", "7V", "6L1", "5L1", "4L1", "3L1"],
			headbutt: ["8V", "7V", "4T"],
			heatcrash: ["8M"],
			heatwave: ["8M", "8L1", "8V", "7T", "7L1", "6T", "6L1", "5T", "5L71", "4T", "4L59", "3L1"],
			helpinghand: ["8M"],
			hiddenpower: ["7M", "7V", "6M", "5M", "4M", "3M"],
			holdhands: ["6S3"],
			honeclaws: ["6M", "5M"],
			hurricane: ["8M"],
			hyperbeam: ["8M", "8V", "7M", "7V", "6M", "5M", "4M", "3M"],
			incinerate: ["6M", "5M"],
			inferno: ["8L54", "7L62", "6L62", "6S1", "5L62"],
			irontail: ["8M", "8V", "7T", "7V", "6T", "5T", "4M", "3M"],
			leer: ["7V"],
			megakick: ["8M", "7V", "3T"],
			megapunch: ["8M", "7V", "3T"],
			metalclaw: ["3L1"],
			mimic: ["7V", "3T"],
			mudslap: ["7V", "4T", "3T"],
			mysticalfire: ["8M"],
			naturalgift: ["4M"],
			ominouswind: ["4T"],
			outrage: ["8M", "8V", "7T", "6T", "5T", "4T"],
			overheat: ["8M", "7M", "6M", "6S3", "5M", "4M", "3M"],
			poweruppunch: ["6M"],
			protect: ["8M", "8V", "7M", "7V", "6M", "5M", "4M", "3M"],
			rage: ["7V", "3L20"],
			reflect: ["8V", "7V"],
			rest: ["8M", "8V", "7M", "7V", "6M", "5M", "4M", "3M"],
			return: ["7M", "7V", "6M", "5M", "4M", "3M"],
			roar: ["7M", "7V", "6M", "5M", "4M", "3M"],
			rockslide: ["8M", "8V", "7M", "6M", "5M", "4M", "3T"],
			rocksmash: ["7V", "6M", "5M", "4M", "3M"],
			rocktomb: ["8M", "7M", "6M", "5M", "4M"],
			roost: ["8V", "7M", "6M", "5T", "4M"],
			round: ["8M", "7M", "6M", "5M"],
			sandstorm: ["7V"],
			scaleshot: ["8T"],
			scaryface: ["8M", "8L39", "7L21", "7V", "6L21", "6S4", "5L21", "4L21", "3L27"],
			scorchingsands: ["8T"],
			scratch: ["8L1", "8V", "7L1", "7V", "6L1", "5L1", "4L1", "3L1"],
			secretpower: ["6M", "4M", "3M"],
			seismictoss: ["8V", "8S10", "7V", "7S8", "3T"],
			shadowclaw: ["8M", "7M", "7L1", "6M", "6L1", "5M", "5L1", "4M", "4L1"],
			skullbash: ["7V"],
			skydrop: ["7M", "6M", "5M"],
			slash: ["8L24", "8V", "8S10", "7L41", "7V", "7S8", "6L41", "5L41", "4L32", "3L44", "3S0"],
			sleeptalk: ["8M", "7M", "7V", "6M", "5T", "4M", "3T"],
			smokescreen: ["8L1", "8V", "7L10", "7V", "6L1", "5L1", "4L1", "3L1"],
			snore: ["8M", "7T", "7V", "6T", "5T", "4T", "3T"],
			solarbeam: ["8M", "8V", "7M", "6M", "6S3", "5M", "4M"],
			steelwing: ["8M", "7M", "7V", "6M", "4M", "3M"],
			strength: ["7V", "6M", "5M", "4M", "3M"],
			submission: ["7V"],
			substitute: ["8M", "8V", "7M", "7V", "6M", "5M", "4M", "3T"],
			sunnyday: ["8M", "7M", "7V", "6M", "5M", "4M", "3M"],
			swagger: ["7M", "7V", "6M", "5M", "4M", "3T"],
			swift: ["8M", "7V", "4T", "3T"],
			swordsdance: ["8M", "7M", "7V", "6M", "5M", "4M", "3T"],
			tailwind: ["7T", "6T", "5T", "4T"],
			takedown: ["7V"],
			thunderpunch: ["8M", "8V", "7T", "6T", "5T", "4T"],
			toxic: ["8V", "7M", "7V", "6M", "5M", "4M", "3M"],
			twister: ["4T"],
			weatherball: ["8M"],
			willowisp: ["8M", "8V", "7M", "6M", "5M", "4M"],
			wingattack: ["8V", "7L1", "7V", "6L36", "5L36", "4L36", "3L36", "3S0"],
			workup: ["8M", "7M"],
      oblivionwing: ["8L1"],
	}},
	galapagon: {
		learnset: {
			aquajet: ["8V"],
			aquatail: ["8L30", "7T", "7L33", "6T", "6L32", "5T", "5L32", "4T", "4L32"],
			attract: ["8M", "7M", "7V", "6M", "5M", "4M", "3M"],
			aurasphere: ["8M"],
			avalanche: ["8M", "4M"],
			bide: ["7V"],
			bite: ["8L12", "8V", "7L17", "7V", "6L16", "5L16", "4L16", "3L19"],
			blizzard: ["8M", "8V", "7M", "7V", "6M", "5M", "4M", "3M"],
			bodypress: ["8M"],
			bodyslam: ["8M", "7V", "3T"],
			brickbreak: ["8M", "8V", "7M", "6M", "5M", "4M", "3M"],
			brine: ["8M", "4M"],
			bubble: ["8V", "7L13", "7V", "6L13", "5L1", "4L1", "3L1"],
			bubblebeam: ["8V", "7V"],
			bulldoze: ["8M", "7M", "6M", "5M"],
			captivate: ["4M"],
			confide: ["7M", "6M"],
			counter: ["7V", "3T"],
			crunch: ["8M"],
			curse: ["7V"],
			darkpulse: ["8M", "8V", "7M", "6M"],
			defensecurl: ["7V", "3T"],
			dig: ["8M", "8V", "7V", "6M", "5M", "4M", "3M"],
			dive: ["8M", "6M", "5M", "4T", "3M"],
			doubleedge: ["7V", "3T"],
			doubleteam: ["7M", "7V", "6M", "5M", "4M", "3M"],
			dragonpulse: ["8M", "8V", "7T", "6T"],
			dragontail: ["8V", "7M", "6M", "5M"],
			dynamicpunch: ["7V", "3T"],
			earthquake: ["8M", "8V", "7M", "7V", "6M", "5M", "4M", "3M"],
			endure: ["8M", "7V", "4M", "3T"],
			facade: ["8M", "8V", "7M", "6M", "5M", "4M", "3M"],
			fakeout: ["8V"],
			falseswipe: ["8M"],
			fissure: ["7V"],
			flashcannon: ["8M", "8L0", "8V", "7M", "7L1", "6M", "6L1", "5M", "5L1", "4M", "4L1"],
			fling: ["8M", "7M", "6M", "5M", "4M"],
			flipturn: ["8T"],
			focusblast: ["8M", "7M", "6M", "5M", "4M"],
			focuspunch: ["7T", "6T", "4M", "3M"],
			frustration: ["7M", "7V", "6M", "5M", "4M", "3M"],
			gigaimpact: ["8M", "7M", "6M", "5M", "4M"],
			gyroball: ["8M", "7M", "6M", "5M", "4M"],
			hail: ["8M", "7M", "6M", "5M", "4M", "3M"],
			headbutt: ["8V", "7V", "4T"],
			helpinghand: ["8M"],
			hiddenpower: ["7M", "7V", "6M", "5M", "4M", "3M"],
			hydrocannon: ["8T", "7T", "6T", "6S1", "5T", "4T", "3T"],
			hydropump: ["8M", "8L49", "8V", "7L60", "7V", "6L60", "6S1", "5L60", "4L53", "3L68", "3S0"],
			hyperbeam: ["8M", "8V", "7M", "7V", "6M", "5M", "4M", "3M"],
			icebeam: ["8M", "8V", "7M", "7V", "6M", "5M", "4M", "3M"],
			icepunch: ["8M", "8V", "7T", "7V", "6T", "5T", "4T", "3T"],
			icywind: ["8M", "7T", "7V", "6T", "5T", "4T", "3T"],
			irondefense: ["8M", "8L42", "7T", "7L47", "6T", "6L46", "6S1", "5T", "5L46", "4T", "4L46"],
			irontail: ["8M", "8V", "7T", "7V", "6T", "5T", "4M", "3M"],
			liquidation: ["8M", "7T"],
			megakick: ["8M", "7V", "3T"],
			megapunch: ["8M", "7V", "3T"],
			mimic: ["7V", "3T"],
			muddywater: ["8M"],
			mudslap: ["7V", "4T", "3T"],
			naturalgift: ["4M"],
			outrage: ["8M", "8V", "7T", "6T", "5T", "4T"],
			poweruppunch: ["6M"],
			protect: ["8M", "8L20", "8V", "7M", "7L25", "7V", "6M", "6L24", "5M", "5L24", "4M", "4L24", "3M", "3L31", "3S0"],
			rage: ["7V"],
			raindance: ["8M", "8L25", "7M", "7L54", "7V", "6M", "6L53", "5M", "5L53", "4M", "4L46", "3M", "3L42", "3S0"],
			rapidspin: ["8L9", "7L21", "7V", "6L20", "5L20", "4L20", "3L25"],
			reflect: ["8V", "7V"],
			rest: ["8M", "8V", "7M", "7V", "6M", "5M", "4M", "3M"],
			return: ["7M", "7V", "6M", "5M", "4M", "3M"],
			roar: ["7M", "7V", "6M", "5M", "4M", "3M"],
			rockclimb: ["4M"],
			rockslide: ["8M", "8V", "7M", "6M", "5M", "4M"],
			rocksmash: ["7V", "6M", "5M", "4M", "3M"],
			rocktomb: ["8M", "7M", "6M", "5M", "4M"],
			rollout: ["7V", "4T", "3T"],
			round: ["8M", "7M", "6M", "5M"],
			scald: ["8M", "8V", "7M", "6M", "5M"],
			secretpower: ["6M", "4M", "3M"],
			seismictoss: ["8V", "7V", "3T"],
			shellsmash: ["8L35"],
			signalbeam: ["7T", "6T", "5T", "4T"],
			skullbash: ["8L56", "8V", "7L40", "7V", "6L39", "5L39", "4L39", "3L55", "3S0"],
			sleeptalk: ["8M", "7M", "7V", "6M", "5T", "4M", "3T"],
			smackdown: ["7M", "6M", "5M"],
			snore: ["8M", "7T", "7V", "6T", "5T", "4T", "3T"],
			strength: ["7V", "6M", "5M", "4M", "3M"],
			submission: ["7V"],
			substitute: ["8M", "8V", "7M", "7V", "6M", "5M", "4M", "3T"],
			surf: ["8M", "8V", "7M", "7V", "6M", "5M", "4M", "3M"],
			swagger: ["7M", "7V", "6M", "5M", "4M", "3T"],
			tackle: ["8L1", "8V", "7L1", "7V", "6L1", "5L1", "4L1", "3L1"],
			tailwhip: ["8L1", "8V", "7L1", "7V", "6L1", "5L1", "4L1", "3L1"],
			takedown: ["7V"],
			terrainpulse: ["8T"],
			toxic: ["8V", "7M", "7V", "6M", "5M", "4M", "3M"],
			waterfall: ["8M", "8V", "7M", "7V", "6M", "5M", "4M", "3M"],
			watergun: ["8L1", "8V", "7L1", "7V", "6L1", "5L13", "4L13", "3L13"],
			waterpledge: ["8T", "7T", "6T", "6S1", "5T"],
			waterpulse: ["8L15", "7T", "7L29", "6T", "6L28", "5L28", "4M", "4L28", "3M"],
			weatherball: ["8M"],
			whirlpool: ["8M", "7V", "4M"],
			withdraw: ["8L1", "8V", "7L1", "7V", "6L1", "5L1", "4L1", "3L1"],
			workup: ["8M", "7M"],
			zenheadbutt: ["8M", "7T", "6T", "5T", "4T"],
      stealthrock: ["8L1"],
      ancientpower: ["8L1"],
      rollout: ["8L1"],
      stoneedge: ["8L1"],
      mudshot: ["8L1"],
      meteorbeam: ["8L1"],
      sandstorm: ["8L1"],
		},
	},
 };
