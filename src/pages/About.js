import "./PagesCSS/About.css";
import aboutPicture from "../images/P5127846.JPG";
import PhotoSlider from "../components/PhotoSlider";

const About = () => {
  return (
    <div>
      <div className="container">
        <div className="top-page">
          <div className="top-right">
            <img alt="" src={aboutPicture} />
          </div>
          <div className="top-left">
            <h3>
              Můj pracovní život provázejí vzrušující události a cestování,
              zahrnující USA, Kanadu a Spojené království. Pracoval jsem s
              nasazením v různých oblastech, od práce v barech, kde jsem se
              rozvíjel svojí pracovitost a týmovou spolupráci.Po zodpovědnou
              práci au-pair, kde jsem se staral o děti a zdokonaloval svou
              zodpovědnost a péči. Momentálně se věnuji své vášni pro
              programování. Což je pro mě zatím moje největší profesní výzva. S
              cílevědomostí se učím a zdokonaluji své dovednosti. Neustále se
              rozvíjím a překonávám překážky, abych se stal lepším developerem.
              Jsem hrdý na svou pracovitost, zodpovědnost a cílevědomost, které
              jsem prokázal během své kariéry. S vášní a nadšením se těším na
              nové výzvy a příležitosti, které mi přinese budoucnost.
            </h3>
          </div>
        </div>

        <div className="text-bottom">
          <div className="text-bottom-right">
            <h4>
              Mým velkým koníčkem je tvorba videí. Díky tomu jsem také začal
              přemýšlet o práci developera a programování celkově. Miluji ten
              pocit kdy přemýšlím jak video bude vypadat a co do něj
              zakomponuji. A ten pocit kdy člověk zakládá nový projekt je
              absolutně skvělý. Tvorba videí mi přináší radost, inspiraci a
              nekonečné možnosti projevu.
            </h4>
          </div>
          <div className="text-bottom-center">
            <h4>
              Práce v IT přináší mnoho výhod, takové teré se mi v mých
              předešlích zaměstnání nedostávali a které jsou pro mě hnacím
              motorem. Konstantní růst a rozvoj dovedností, možnost tvořit a
              uskutečňovat svojí vizi. Samozřejmě také atraktivní platové
              podmínky a široká škála pracovních příležitostí. Flexibilní
              pracovní doba, možnost home office a spolupráce s týmem
              talentovaných profesionálů. IT je oblast, kde můžete ovlivňovat
              svět a přinášet inovace do každodenního života lidí.
            </h4>
          </div>
          <div className="text-bottom-left">
            <h4>
              Poznám příklady mnoha přátel, kteří se úspěšně rekvalifikovali do
              IT oblasti. S odvahou a vytrvalostí získali nové dovednosti a
              přenesli své talenty do technologického světa. Jejich příklady
              ukazují, že s přiměřenou motivací a nasazením je možné dosáhnout
              úspěchu a najít naplnění ve fascinujícím a dynamickém IT odvětví.
            </h4>
          </div>
          <div className="mySlider">
            <PhotoSlider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
