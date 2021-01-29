import { Section } from "@/model/Rules";
import { VuexModule, Module } from "vuex-module-decorators";

@Module({ namespaced: true })
export default class Rules extends VuexModule {
  copyright =
    "Všechna práva vyhrazena společností Welfare & PARTNERS s.r.o., advokátní kancelář";
  rules: Array<Section> = [
    {
      name: "ČÁST PRVNÍ -  Obecná část",
      paragraphs: [
        {
          name: "§ 1 - Nevhodný nick, skin a chování",
          points: [
            "Hráč nesmí svým nickem, skinem či chováním napadat nebo podněcovat k násilí či jinak urážet na základě rasy, etnické příslušnosti, země původu, náboženství, sexuální orientace či pohlaví nebo příslušnosti k určitému státu, skupině či menšině.",
            "Hráč nesmí svým nickem či skinem vyjadřovat známky náklonnosti k fašismu nebo nacismu.",
            "Hráč se porušením odstavce 1) a/nebo 2) tohoto paragrafu dopustí závažného provinění vůči pravidlům a bude mu neprodleně zakázán vstup na server po dobu existence tohoto serveru."
          ]
        },
        {
          name: "§ 2 - Zneužívání a nahlášení chyb a bugů",
          points: [
            "Hráč nesmí v žádném případě využívat bugu, glitche nebo exploitu",
            "Hráč je povinen v případě zjištění takového bugu, glitche či exploitu takovou skutečnost nahlásit adminům serveru a to buď neprodleně při jeho přítomnosti a nebo v nejbližší možný termín zastižení",
            "V případě zjištění, že hráč využil bug, glitch nebo exploit ve prospěch svůj či někoho jiného, může dojít až k zakázání vstupu na server po dobu existence serveru, dle uvážení adminů serveru.",
            "V případě zjištění, že hráč o bugu, glitchi nebo exploitu věděl a nenahlásil ho v nejbližší možný termín s ním bude zacházeno stejně, jako kdyby samotnou chybu využil."
          ]
        },
        {
          name: "§ 3 - Externí programy",
          points: [
            "Hráč nesmí využívat jakékoliv externí programy, které zvýhodňují hráče oproti ostatním, obecně známo pod názvem “hacky” a/nebo “cheaty”.",
            "Hráč je povinen po celou dobu své aktivity na MC serveru být připojen taktéž na TS3 serveru s funkčním nastavením CrossTalku za jakékoliv okolnosti.",
            "V případě, že hráč z jakéhokoliv důvodu nemůže být aktivní na TS3 serveru, ale musí být připojen na MC serveru za účelem RP, je možné požádat Admin tým o výjimku. Ta se ovšem vztahuje pouze na danou situaci a nelze se přenášet do dalšího období dne či dní.",
            "Hráč je povinen v případě upozornění z řad hráčů na nefunkční propojení CrossTalku se z místnosti okamžitě odpojit a svůj problém vyřešit v co nejkratší možnou dobu.",
            "Hráč má povoleno využívat externí programy za účelem zlepšení výkonu svého počítače a zvednutí FPS.",
            "V případě zjištění, že hráč využíval externí programy, které jsou zakázány dle odstavce 1) tohoto paragrafu, může dojít až k zakázání vstupu na server po dobu existence serveru, dle uvážení adminů serveru."
          ]
        },
        {
          name: "§ 4 - Nevhodné vyjadřování",
          points: [
            "Je přísně zakázáno urážet, zesměšňovat nebo slovně napadat jiné hráče, členy admin týmu a nebo jiné, nezapojené subjekty.",
            "Je přísně zakázáno spamovat chat stejnými či podobnými opakovaně odeslanými zprávami, či nadměrné psaní Caps Lockem a další.",
            "Je přísně zakázáno šířit osobní informace třetí osoby, rozesílání profilů na sociálních sítích, fotek či jiných dokumentů, bez písemného souhlasu dané osoby.",
            "Je zakázáno šířit dezinformace a to jakoukoliv podobou.",
            "V případě zjištění, že hráč porušil odstavec č. 1), 2), 3) a nebo 4) tohoto paragrafu, může dojít až k zakázání vstupu na server po dobu existence serveru, dle uvážení adminů serveru."
          ]
        },
        {
          name: "§ 5 - Reklama",
          points: [
            "Je přísně zakázáno využívat chat nebo voice na serveru k publikování jakékoliv reklamy.",
            "Za reklamu je považován odkaz nebo název YouTube kanálu, odkazu na video, název nebo IP adresa jiného Minecraft nebo TeamSpeak serveru, odkaz na Discord, Twitch, Facebook nebo jakoukoliv jinou platformu.",
            "Výjimku z odstavce 1) a 2) tohoto paragrafu může udělit admin serveru",
            "V případě, že se jedná o odkaz či reklamní sdělení, které je součástí RP na serveru, je taková reklama povolena."
          ]
        },
        {
          name: "§ 6 - Obecné nařízení a zákazy serveru",
          points: [
            "Úmyslné zabíjení jiných hráčů bez RP důvodu je zakázáno.",
            "Hráč, kterému se prokáže opakované úmyslné zabíjení jiných hráčů bez RP důvodu může dostat až několikadenní zákaz vstupu na server, dle uvážení admin týmu.",
            "Je zakázáno tvořit vlastní Nether portál, ten bude jen jeden pro všechny hráče města Tlupapolis.",
            "Je zakázáno bydlet mimo město Tlupapolis.",
            "Je zakázáno tvořit vlastní xp a mob farmy, ty budou jednotné pro všechny hráče města Tlupapolis.",
            "Je přísně zakázáno tvořit vlastní farmy (tzn. nelegální).",
            "Hráč, kterému se prokáže porušení odstavce 3), 4), 5) nebo/a 6) tohoto paragrafu, může dostat až doživotní zákaz vstupu na server, dle uvážení admin týmu."
          ]
        }
      ]
    },
    {
      name: "ČÁST DRUHÁ - Základní pojmy",
      paragraphs: [
        {
          name: "§ 7 - Role Play",
          points: [
            "Pojem role play (zkráceně RP) je v podstatě hraní role s vlastním příběhem, který musí reflektovat dění a příběhy ostatních hráčů se kterými přichází v MC světě do interakce.",
            "V tomto případě se jedná o hraní rolí zasazené do Minecraft města Tlupapolis, které je tvořeno komunitou kolem streamera a baviče DeeThane."
          ]
        },
        {
          name: "§ 8 - Whitelist",
          points: [
            "Tento server má aktivní tzv. whitelist (zkráceně WL), což znamená, že pro připojení na server je nutné, aby byl váš účet schválen a přidán na whitelist.",
            "Pro získání přístupu na server je nutné úspěšně zvládnout náborový pohovor, který je veden admin týmem na našem TS3 serveru (ts.deethane.cz).",
            "Nábor se skládá ze znalostí pravidel"
          ]
        },
        {
          name: "§ 9 - Event",
          points: [
            "Eventem se myslí událost, která je dopředu nahlášena na Tlupa Discordu či ingame v Minecraftu, při kterém se hráči shromáždí na jednom místě z určitého důvodu.",
            "Eventy řídí osoba tím pověřená, ve většině případech se bude jednat o “Kulturního organizátora” či osobu, která byla organizováním eventu pověřena Kulturním organizátorem nebo Starostou.",
            "Hráči, kteří se v době konání eventu nacházení na serveru mají povinnost se eventu účastnit.",
            "Hráči, kteří se účastní eventu, se aktivně zapojují do jeho podstaty v případě, že je to vyžadováno.",
            "Hráč svojí účastí na eventu souhlasí s tím, že bude respektovat pravidla a nařízení stanovená organizátorem eventu.",
            "V případě porušení těchto pravidel a nařízeních za jiným než RP účelem, může být hráči udělen trest v podobě zákazu vstupu na server po určitou dobu, dle uvážení adminů serveru.",
            "V případě, že hráč plánuje event narušit za účelem RP, je hráč povinen tuto skutečnost v dostatečném předstihu oznámit admin týmu serveru s vysvětlením a dostat od adminů povolení k takovému kroku."
          ]
        },
        {
          name: "§ 10 - Zaměstnání",
          points: [
            "Zaměstnání slouží k naplnění života města Tlupapolis tak, aby jednotlivé charaktery nutilo k interakci s jinými občany města a vytvářely se tak RP situace.",
            "Každý hráč si může vybrat své zaměstnání v případě, že již není plná kapacita dané pozice.",
            "Každý hráč může přijít se svým nápadem na zaměstnání a je na admin týmu, zda vám takové zaměstnání povolí či nikoliv.",
            "Je zakázáno přicházet s novými povoláními bez souhlasu admin týmu."
          ]
        },
        {
          name: "§ 11 - Pozemek",
          points: [
            "Pozemek je místo, které si hráč koupil od města či jiného hráče na serveru.",
            "Hráči je umožněno na svém pozemku stavět v případě, že pro svoji stavbu získá stavební povolení.",
            "Hráč má zakázáno stavět své stavby zbytečně vysoké, aby nenarušoval celkový vzhled města.",
            "Hráč má zakázáno pro svoji stavbu využívat nadměrné množství item framů a dalších itemů, které prokazatelně zatěžují server a/i client hráčů na serveru.",
            "V případě zjištění, že hráč porušil odstavec 3) a/nebo 4) tohoto paragrafu, mu může být udělen trest až několika denním zákazem vstupu na server."
          ]
        },
        {
          name: "§ 12 - Bytová jednotka",
          points: [
            "Bytová jednotka je byt v paneláku postaveném městem, ve kterém může bydlet.",
            "Bytová jednotka slouží pro účely především nových hráčů, kteří nemají dostatečné finance na koupi parcely."
          ]
        },
        {
          name: "§ 13 - Metagaming",
          points: [
            "Metagaming znamená situaci, kdy hráč využívá pro své hraní na serveru informace, které se dozvěděl mimo svoji vlastní roli (od kamaráda, z konverzace na jiné platformě, atd.).",
            "Hráč má zakázáno nabádat jiné k metagamingu, tzn. vypisovat informace, které se postavy nemají jak dozvědět.",
            "Metagaming je porušením pravidel a hráči může být udělen trest až několika denním zákazem vstupu na server."
          ]
        },
        {
          name: "§ 14 - Stream sniping",
          points: [
            "Stream sniping znamená situaci, při které hráč sleduje stream z daného serveru a informace z něj využívá na MC serveru za účelem prospěchu sebe či jiného.",
            "Za stream sniping se bere i situace, kdy hráč sleduje stream za účelem sledování streamera a vnucování se do jeho RP situace.",
            "Stream sniping je porušením pravidel a hráči může být udělen trest až několika denním zákazem vstupu na server."
          ]
        }
      ]
    },
    {
      name: "ČÁST TŘETÍ - Majetek",
      paragraphs: [
        {
          name: "§ 15 - Bytová jednotka",
          points: [
            "Bytová jednotka bude přiřazena každému novému hráči, co o ni požádá v případě, že je volná kapacita.",
            "Hráč má za povinnost udržovat stav dané bytové jednotky tak, aby bylo možné ji po vystěhování opět přidělit dalšímu hráči.",
            "Hráč má právo opustit bytovou jednotku a o této skutečnosti informovat správce paneláku."
          ]
        },
        {
          name: "§ 16 - Pozemek",
          points: [
            "Pozemek je hráči přiřazen starostou po tom, co si vybere svůj pozemek a zaplatí danou cenu za pozemek. 1 block v Minecraftu stojí 15 Kč, tudíž například pozemek 10x10 blocků stojí 1500 Kč.",
            "Hráč má za povinnost uchovávat veškeré dokumenty ke svému pozemku a stavbách na něm (Smlouva o koupě pozemku, Stavební povolení)",
            "Hráč má právo na odkoupení vícero pozemků od státu, ale i jiných hráčů a své pozemky spojovat v momentě, kdy dostane povolení od starosty.",
            "Hráč má za povinnost svoje stavby udržovat v takovém stavu, aby nebyly zbytečně vysoké a vzhled staveb alespoň vzdáleně připomínal svůj účel.",
            "Zánik majetku nastává v momentě, kdy hráč prodá svůj pozemek a nebo je mu zabaven soudním příkazem."
          ]
        }
      ]
    },
    {
      name: "ČÁST ČTVRTÁ - Ekonomika",
      paragraphs: [
        {
          name: "§ 17 - Plat",
          points: [
            "Po prvním připojení hráč na jeho účet získá 5 000 Kč jako vstupní bonus do města Tlupapolis.",
            "Každý týden (IRL) získají všichni hráči globální výplatu v hodnotě 5 000 Kč.",
            "Hráč si bude moci výplatu vyzvednout dle instrukcí na serveru."
          ]
        },
        {
          name: "§ 18 - Vzájemné obchody",
          points: [
            "Ekonomika serveru funguje na obchodech mezi lidmi a vzájemné nutnosti využívat ostatní hráče a jejich povolání. Je tedy třeba mít na mysli, že pro fungování ekonomiky je třeba, aby samotní hráči ekonomiku chtěli využívat a aktivně se do ní zapojovali.",
            "Pokud se hráči vzájemně domluví na obchodu či poskytnutí služby a následně nedojde k domluvené protislužbě či finančnímu plnění, vystavuje se daná osoba možné žalobě a soudnímu řízení."
          ]
        }
      ]
    },
    {
      name: "ČÁST PÁTÁ - Zaměstnání",
      paragraphs: [
        {
          name: "§ 19 -  Výpis pozic zaměstnání (orientační list)",
          points: [
            "Bankéř",
            "Policista",
            "Voják",
            "Starosta",
            "Soudce",
            "Farmář",
            "Hospodský",
            "Kněz",
            "Koželuh",
            "Novinář",
            "Rybář",
            "Elektrikář",
            "Bazar",
            "Obchodník",
            "Kovář",
            "Stavitel",
            "Zaměstnanec ZOO",
            "Knihovník",
            "Detektiv",
            "Kulturní organizátor",
            "Pekař",
            "Hrobař",
            "Psycholog",
            "Architekt",
            "Kameník",
            "Právník"
          ]
        },
        {
          name: "§ 20 -  Přiřazení",
          points: [
            "Hráč si při úvodním pohovoru s adminem probere zaměstnání, které by ho zajímalo a kde by se rád uplatnil",
            "Na serveru se hráč buď připojí k jiným hráčům v již existujícím zaměstnání a nebo začne pracovat sám, dle pozice.",
            "Hráč přiřazením zaměstnání souhlasí s vykonáváním dané pozice a uzpůsobí tomu svůj RP."
          ]
        },
        {
          name: "§ 21 -  Povinnosti",
          points: [
            "Hráč má za povinnost aktivně vykonávat dané zaměstnání a svoji činností vyvíjet snahu o budování společnosti, ve které je zaměstnán, případně ve své vlastní.",
            "Hráč má za povinnost dodržovat veškeré nařízení ve svém zaměstnání a dodržovat je.",
            "V případě, že hráč nedodržuje odstavec 2) tohoto paragrafu, se vystavuje hrozbě ukončení pracovního poměru.",
            "V případě, že hráč svým chováním způsobí zaměstnanci či státu škodu, vystavuje se hrozbě žaloby a soudního řízení."
          ]
        },
        {
          name: "§ 22 -  Práva",
          points: [
            "Hráč má právo na odměnu za práci, kterou vykonává. Takovou odměnu má buď dohodnutou se svým zaměstnavatelem a nebo v případě, že pracuje sám na sebe, ji získává ze zakázek od dalších hráčů.",
            "Hráč má právo ukončit pracovní poměr a přejít do jiného zaměstnání a to hned po dokončení již předobjednaných zakázek či podle domluvy.",
            "Hráč má právo žalovat svého zaměstnance v případě, kdy se domnívá, že proti němu bylo jednáno protiprávně."
          ]
        },
        {
          name: "§ 23 -  Zánik zaměstnání hráče",
          points: [
            "Zaměstnání hráče zaniká v moment, kdy sám odejde ze zaměstnání, je vyhozen či dojde k zániku společnosti, ve které pracoval.",
            "Hráč nemá právo na odškodnění v případě jeho odchodu či zániku pracovního poměru, pokud domluva se zaměstnavatelem takové odškodnění upravuje."
          ]
        }
      ]
    },
    {
      name: "ČÁST ŠESTÁ - Eventy",
      paragraphs: [
        {
          name: "§ 24 -  Pořádání eventů",
          points: [
            "Pořádání eventů je hlavní pracovní náplní pro zaměstnání “Kulturní organizátor”.",
            "Event však může pořádat i kdokoliv jiný, který bude mít nápad na takový event. Ať se jedná o divadlo, přednášku, promítání filmu, otevření podniku, a tak dále.",
            "Hráč se svým nápadem může přijít za kulturním organizátorem a probrat svůj nápad, ten následně event musí schválit a zapsat do oficiálního rozpisu eventů.",
            "Pro pořádání eventů hráč nemusí splňovat nic speciálního, je ovšem nutné, aby organizování eventu o větším počtu lidí zvládnul hlídat a byl dostatečně zajímavý. Špatné eventy budou jen důvodem, proč se do toho dalším lidem nebude chtít."
          ]
        },
        {
          name: "§ 25 -  Účast na eventech",
          points: [
            "Účast na eventech je povinná pro všechny hráče, kteří v čase eventu budou aktivní na serveru.",
            "Na začátku eventu budou všichni hráči portnutí na místo konání eventu.",
            "Hráč, který se nechce účastnit eventu, bude muset opustit server. Obecně ale platí, že tvorba a účast na eventech je jedna z věcí, k čemu město Tlupapolis slouží a tedy aktivní vyhýbání eventům může vést až k postihu ze strany admin týmu.",
            "Účastí na eventech nemůže vzniknout závislost. Ministerstvo zdravotnictví nevaruje."
          ]
        }
      ]
    },
    {
      name: "ČÁST SEDMÁ - Těžení",
      paragraphs: [
        {
          name: "§ 26 -  Těžení v normální světě",
          points: [
            "Je přísně zakázáno těžit v okolí města Tlupapolis.",
            "Je přísně zakázáno vytvářet pasti (např. 1x1 blocků), po kterých jiný hráč zemře.",
            "Je přísně zakázáno nedotěžit strom ve farmě na stromy nebo v místech dle odstavce 4) tohoto paragrafu.",
            "Je povoleno těžit v určité míře ve vzdálenosti 1 000 blocků od města Tlupapolis. Jedná se o takové těžení, které nenarušuje vzhled dané plochy (je povoleno např. kácení stromů, není povoleno například vytěžit polovinu hory).",
            "Pro těžení surovin jsou na serveru určené doly, ve kterých může hráč těžit v předem nastavených cestičkách.",
            "V případě pokládání Furnace nebo Chestek mimo vaše území při těžení vás prosíme, abyste je následně taktéž zničili vzhledem k tomu, že jsou na vás locknuté.",
            "Na server jsou přidány pluginy, díky kterým může admin serveru zjistit kdo způsobil dané škody a hráči může být zakázán přístup na server po dobu existence serveru."
          ]
        },
        {
          name: "§ 27 -  Těžení v netheru",
          points: [
            "Těžení v netheru není nijak výrazně omezeno. Vstup do netheru bude jednotný pro všechny hráče a vytváření vlastního portálu je zakázáno.",
            "Kolem spawnu v netheru je zakázáno těžit a vytvářet pasti, pro těžení by měl hráč ujít alespoň 50 blocků od spawnu.",
            "Nether se bude po určité době wipovat (obnoví se) tak, aby bylo dostatek materiálu, který je třeba ke stavění."
          ]
        },
        {
          name: "§ 25 -  Těžení v endu",
          points: [
            "End na začátek serveru není otevřen pro žádného z hráčů. Hon na draka bude jeden z prvních eventů a následně se end otevře pro všechny hráče.",
            "End bude mít omezené hranice, tudíž bude na serveru omezené množství elytry a dalších itemů a blocků, které se v endu dají natěžit.",
            "Další pokyny k možnosti těžení v endu získají hráči na serveru."
          ]
        }
      ]
    },
    {
      name: "ČÁST OSMÁ - Soudy",
      paragraphs: [
        {
          name: "§ 26 -  Žaloba",
          points: [
            "Žaloba je procesní úkon, při kterém se hráč skrze právního zástupce obrací na soud a žádá o ochranu svých práv, případně uplatňuje jiný návrh.",
            "Žalobu k soudu může podat pouze právní zástupce, který má k vykonávání činnosti povolení.",
            "Soudce má 3 dny na schválení žaloby a obeznámení druhé strany sporu o soudním řízení.",
            "Následně je pro obě strany soudního řízení stanovena doba minimálně 3 dní, kdy mají možnost předložit všechny důkazní materiály druhé straně, vyslechnout svědky a se závěry se připravit na soudní řízení.",
            "Pro podání žaloby, stejně tak jako pro soudní řízení, je třeba zaplatit správní poplatek, jehož výše bude stanovena."
          ]
        },
        {
          name: "§ 27 -  Soudní řízení",
          points: [
            "Soudní řízení probíhá u soudu a jeho účelem je především vydání rozhodnutí, ke kterému dojde po přednesení důkazních materiálů a vyslechnutí svědků jak stranou žalující tak stranou obhajující.",
            "Soudní řízení probíhá za přítomnosti obou stran, zapisovatelky, poroty, veřejnosti a případně médií.",
            "Soudní řízení může trvat až několik dní a porota ani soudce nejsou nuceni vydat rozhodnutí hned v 1. den soudního řízení."
          ]
        },
        {
          name: "§ 28 -  Porota",
          points: [
            "Porota je složena z 6 občanů Tlupapolis, kteří jsou náhodně vylosovaní při stanovení termínu soudního řízení.",
            "Členi poroty nesmí být ve střetu zájmu s případem, jinak může dojít až ke zmatečnému řízení.",
            "Porota přisedá celému soudnímu řízení.",
            "Porota se sejde po závěrečné řeči obhajoby a žalobce v místnosti společně se soudcem, s nímž prodiskutuje daný případ. Závěrečné slovo má ale soudce, nikoli porota."
          ]
        },
        {
          name: "§ 29 -  Rozsudek",
          points: [
            "Rozsudek je právoplatný hned po ukončení soudního řízení, pokud nedojde k žádosti o přezkoumání a nebo podání žaloby o zmatečném řízení.",
            "Obě strany se budou následně řídit pokyny soudce a svého právního zástupce."
          ]
        }
      ]
    },
    {
      name: "ČÁST DEVÁTÁ - Státní správa",
      paragraphs: [
        {
          name: "§ 30 -  Seznam dokumentů",
          points: [
            "Stavební povolení",
            "Potvrzení o koupi pozemku",
            "Povolení k prodeji alkoholu",
            "Občanský průkaz",
            "Koničák",
            "Letečák",
            "Soudní příkaz",
            "Žaloba",
            "Oddací list"
          ]
        },
        { name: "§ 31 -  Obecná část", points: [] },
        { name: "§ 32 -  Úkony státní správy", points: [] }
      ]
    },
    {
      name: "ČÁST DESÁTÁ - Pravidla města",
      paragraphs: [
        {
          name: "§ 33 -  Omezení ve městě",
          points: [
            "Je zakázáno ve městě chodit v brnění, pokud k tomu není pádný RP důvod.",
            "Je zakázáno ve městě využívat elytru a létat. Pro létání mimo město je třeba mít Letečák.",
            "Je zakázáno ve městě pobývat na pozemku jiného hráče bez jeho souhlasu.",
            "Je přísně zakázáno ve městě odkopávat a pokládat jakékoliv blocky bez souhlasu autorit města.",
            "Je přísně zakázáno se dostávat do budov hráčů pomocí páček a tomu podobných způsobů. Pokud jsou dveře zamčené, tak to má svůj důvod.",
            "Ve městě má voice mode vždy přednost před chatem, snažte se tedy komunikovat hlavně hlasem a až sekundárně chatem."
          ]
        }
      ]
    },
    {
      name: "ČÁST JEDENÁCTÁ - Tresty",
      paragraphs: [
        {
          name: "§ 34 -  Bany",
          points: [
            "Admin tým serveru TlupaPolis má právo o každém případu rozhodnout dle jejich nejlepšího uvážení a hráč toto rozhodnutí musí respektovat.",
            "A co soudy? To nejsou tresty? Nebo trest je účast na soudu?",
            "Hráči může být udělen trest zákazu vstupu na server po několik dní a nebo rovnou doživotním zákazem.",
            "Proti rozhodnutí adminů se nedá odvolat a je právoplatné."
          ]
        },
        {
          name: "§ 35 -  RP tresty",
          points: [
            "V rámci RP je možné hráči udělat trest, který bude buď v souladu s rozsudkem soudu a nebo v rámci pravomocí policie.",
            "Takový trest může znamenat vězení na určitou dobu, pokuta, větší finanční postih, nahrazení vzniklé škody, zabavení majetku a další.",
            "RP tresty se využívají v případě, že prohřešek hráče se buď týká samotného RP a nebo není tak vážný, aby ho řešil admin tým."
          ]
        }
      ]
    },
    {
      name: "ČÁST DVANÁCTÁ - Dodatečné zákony",
      paragraphs: [
        {
          name: "§ 36 -  Zákony ČR a SR",
          points: [
            "Zákony, které zde nejsou napsány, ale jsou proti zákonům České a Slovenské republiky platí také pro město Tlupapolis.",
            "Tresty pro zákony dle odstavce 1) tohoto paragrafu budou určeny soudem."
          ]
        }
      ]
    }
  ];
}
