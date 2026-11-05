import BookCard from "@/components/bookCard/bookCard";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import PersonCard from "@/components/personCard/personCard";
import Section from "@/components/section/section";
import StaffPick from "@/components/staffPick/staffPick";
import Grid from "@/components/grid/grid";
import EventCard from "@/components/eventCard/eventCard";
import Button from "@/components/button/button";
const books = [
  {
    id: 1,
    title: "Bakeskolen",
    author: "Wenche Andersen",
    image:
      "https://www.norli.no/cdn/1791378057/Produktbilder/Bokbasen/9788202943646.jpg?auto=webp&format=pjpg&width=960&height=1200&fit=cover",
    price: 399,
    tags: ["Kokebok", "Baking", "Matlaging"],
  },
  {
    id: 2,
    title: "A Court of Splintered Harmony",
    author: "Sarah J. Maas",
    image:
      "https://www.norli.no/cdn/1787116804/Produktbilder/SDB/Book/SD%20Books/9781037200083.jpg?auto=webp&format=pjpg&width=480&height=600&fit=cover",
    price: 499,
    tags: ["Engelsk", "Pocket", "Roman"],
  },
  {
    id: 3,
    title: "Dragsug",
    author: "Vetle Lid Larsen",
    image:
      "https://www.norli.no/cdn/1790161808/Produktbilder/Bokbasen/9788234726194.jpg?auto=webp&format=pjpg&width=480&height=600&fit=cover",
    price: 329,
    tags: ["Historie", "Roman"],
  },
  {
    id: 4,
    title: "Kodenavn Jakob",
    author: "Hege Duckert",
    image:
      "https://www.norli.no/cdn/1793361704/Produktbilder/Bokbasen/9788272018985.jpg?auto=webp&format=pjpg&width=480&height=600&fit=cover",
    price: 459,
    tags: ["Historie", "Dokumentar", "Andre verdenskrig"],
  },
  {
    id: 5,
    title: "Ukraina: en vinterreise",
    author: "Erika Fatland",
    image:
      "https://www.norli.no/cdn/1792609302/Produktbilder/Bokbasen/9788248943853.jpg?auto=webp&format=pjpg&width=480&height=600&fit=cover",
    price: 489,
    tags: ["Reiseskildringer", "Ukraina"],
  },
  {
    id: 6,
    title:
      "Norge i rødt, hvitt og statistikk, signert eksemplar for å lage en lang tittel",
    author: "Ulf Andersen",
    image:
      "https://www.norli.no/cdn/1781708472/Produktbilder/Bokbasen/9788248942672.jpg?auto=webp&format=pjpg&width=480&height=600&fit=cover",
    price: 379,
    tags: ["Dokumentar", "Samfunn", "Statistikk"],
  },
];
const staffPick = [
  {
    id: 1,
    heading: "Wenche har nettopp lest Wallace the Brave!",
    title: "Snug Harbor Stories",
    author: "Will Henry",
    image:
      "https://publishingassets.andrewsmcmeel.com/productimages/9781524851774_feature.jpg",
    price: 399,
    tags: ["Humor", "Tegneserier", "Barndom"],
  },
  {
    id: 2,
    heading: "Månedens lydbok for Christian",
    title: "Dette kommer til å gjøre vondt",
    author: "Adam Kay",
    image:
      "https://www.norli.no/cdn/1762431004/Produktbilder/FS/Book/Bonnier%20Norsk%20Forlag%20AS/9788284192369.jpg?auto=webp&format=pjpg&width=960&height=1200&fit=cover",
    price: 299,
    tags: ["Humor", "Helsevesenet", "Drama", "Dagbok", "Lydbok"],
  },
];
export default async function IndexPage() {
  return (
    <>
      {/* <header className="site-header">
        <a href="#" className="logo">BookDragons</a>
        <nav>
          <a href="#">Om oss</a>
          <a href="#">Salg!</a>
          <a href="#">Logg inn</a>
        </nav>
      </header> */}
      <Header />

      <main>
        <Section className="section-yellow">
          <div className="container grid one-plus-two-columns large-gap">
            <div>
              <img
                src="https://images.unsplash.com/photo-1774070231417-4bf4d2025878?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
                alt=""
              />
            </div>
            <div className="stack">
              <h1 className="section-heading">Velkommen til BookDragons!</h1>
              <p>
                Vår lille bokhandel holder til i Lillestrøm, og vi spesialiserer
                oss på bøker innen mange forskjellige science fiction-sjangre!
                Kom innom oss for gode tilbud, arrangementer og foredrag med
                forfattere, eller bare for å ta en kopp kaffe som vår hyggelige
                barista lager til deg.
              </p>

              <Button className="button m-bs-xl" href="#">
                Se våre kommende arrangementer
              </Button>
            </div>
          </div>
        </Section>

        {/* <Section className="m-b-xl stack stack-large">
          <h2 className="section-heading">Nyheter i butikken</h2>
          <div className="reel">
            <article className="box box-light-gray book-card">
              <img
                className="book-card-cover"
                src="https://www.norli.no/cdn/1791378057/Produktbilder/Bokbasen/9788202943646.jpg?auto=webp&format=pjpg&width=960&height=1200&fit=cover"
                alt=""
                width="160"
                height="200"
              />

              <div className="stack">
                <h3 className="eyebrow-heading book-card-title">
                  <a href="#">Bakeskolen</a>
                </h3>

                <p className="book-card-author">Skrevet av Wenche Andersen</p>

                <p className="book-card-tags cluster">
                  <span className="tag">Kokebok</span>
                  <span className="tag">Baking</span>
                  <span className="tag">Matlaging</span>
                </p>
              </div>

              <a className="button block-button" href="#">
                Kjøp (399,-)
              </a>
            </article>
            <article className="box box-light-gray book-card">
              <img
                className="book-card-cover"
                src="https://www.norli.no/cdn/1787116804/Produktbilder/SDB/Book/SD%20Books/9781037200083.jpg?auto=webp&format=pjpg&width=480&height=600&fit=cover"
                alt=""
                width="160"
                height="200"
              />

              <div className="stack">
                <h3 className="eyebrow-heading book-card-title">
                  <a href="#">A Court of Splintered Harmony</a>
                </h3>

                <p className="book-card-author">Skrevet av Sarah J. Maas</p>

                <p className="book-card-tags cluster">
                  <span className="tag">Engelsk</span>
                  <span className="tag">Pocket</span>
                  <span className="tag">Roman</span>
                </p>
              </div>

              <a className="button block-button" href="#">
                Kjøp (499,-)
              </a>
            </article>
            <article className="box box-light-gray book-card">
              <img
                className="book-card-cover"
                src="https://www.norli.no/cdn/1790161808/Produktbilder/Bokbasen/9788234726194.jpg?auto=webp&format=pjpg&width=480&height=600&fit=cover"
                alt=""
                width="160"
                height="200"
              />

              <div className="stack">
                <h3 className="eyebrow-heading book-card-title">
                  <a href="#">Dragsug</a>
                </h3>

                <p className="book-card-author">Skrevet av Vetle Lid Larsen</p>

                <p className="book-card-tags cluster">
                  <span className="tag">Historie</span>
                  <span className="tag">Roman</span>
                </p>
              </div>

              <a className="button block-button" href="#">
                Kjøp (329,-)
              </a>
            </article>
            <article className="box box-light-gray book-card">
              <img
                className="book-card-cover"
                src="https://www.norli.no/cdn/1793361704/Produktbilder/Bokbasen/9788272018985.jpg?auto=webp&format=pjpg&width=480&height=600&fit=cover"
                alt=""
                width="160"
                height="200"
              />

              <div className="stack">
                <h3 className="eyebrow-heading book-card-title">
                  <a href="#">Kodenavn Jakob</a>
                </h3>

                <p className="book-card-author">Skrevet av Hege Duckert</p>

                <p className="book-card-tags cluster">
                  <span className="tag">Historie</span>
                  <span className="tag">Dokumentar</span>
                  <span className="tag">Andre verdenskrig</span>
                </p>
              </div>

              <a className="button block-button" href="#">
                Kjøp (459,-)
              </a>
            </article>
            <article className="box box-light-gray book-card">
              <img
                className="book-card-cover"
                src="https://www.norli.no/cdn/1792609302/Produktbilder/Bokbasen/9788248943853.jpg?auto=webp&format=pjpg&width=480&height=600&fit=cover"
                alt=""
                width="160"
                height="200"
              />

              <div className="stack">
                <h3 className="eyebrow-heading book-card-title">
                  <a href="#">Ukraina: en vinterreise</a>
                </h3>

                <p className="book-card-author">Skrevet av Erika Fatland</p>

                <p className="book-card-tags cluster">
                  <span className="tag">Reiseskildringer</span>
                  <span className="tag">Ukraina</span>
                </p>
              </div>

              <a className="button block-button" href="#">
                Kjøp (489,-)
              </a>
            </article>
            <article className="box box-light-gray book-card">
              <img
                className="book-card-cover"
                src="https://www.norli.no/cdn/1781708472/Produktbilder/Bokbasen/9788248942672.jpg?auto=webp&format=pjpg&width=480&height=600&fit=cover"
                alt=""
                width="160"
                height="200"
              />

              <div className="stack">
                <h3 className="eyebrow-heading book-card-title">
                  <a href="#">
                    Norge i rødt, hvitt og statistikk, signert eksemplar for å
                    lage en lang tittel
                  </a>
                </h3>

                <p className="book-card-author">Skrevet av Ulf Andersen</p>

                <p className="book-card-tags cluster">
                  <span className="tag">Dokumentar</span>
                  <span className="tag">Samfunn</span>
                  <span className="tag">Statistikk</span>
                </p>
              </div>

              <a className="button block-button" href="#">
                Kjøp (379,-)
              </a>
            </article>
          </div>
        </Section> */}
        <Section className="m-b-xl stack stack-large">
          <h2 className="section-heading"> Nyheter i Butikk</h2>
          <div className="reel">
            {books.map((book) => (
              <BookCard
                key={book.id}
                title={book.title}
                author={book.author}
                image={book.image}
                price={book.price}
                tags={book.tags}
              />
            ))}
          </div>
        </Section>
        {/* <Section className="m-b-xl stack stack-large">
          <h2 className="section-heading">Hva de ansatte leser akkurat nå</h2>
          <article className="section section-yellow">
            <div className="container grid large-gap two-plus-one-columns recommendation-section product-on-right">
              <div className="recommendation-section-text stack">
                <h3 className="section-subheading">
                  Wenche har nettopp lest Wallace the Brave for første gang!
                </h3>

                <p>
                  Jeg plukket med meg denne boka på vei hjem fra jobb en dag, da
                  den virket som en bok sønnen min kunne fatte interesse for.
                  Lite visste jeg at det var <em>jeg</em> som kom til å sitte og
                  gapskratte til sent på kveld!
                </p>

                <blockquote className="big-quote">
                  Jeg har aldri ledd så godt som av denne boka, en virkelig
                  perle av moderne tegneserier!
                </blockquote>

                <p>
                  Wallace the Brave er en fantastisk tegneserie, midt i blinken
                  om du liker Tommy og Tigern og setter pris på varm, lun humor
                  og en artig strek. Jeg tror aldri jeg har ledd så godt som av
                  denne boka. En virkelig perle av moderne tegneserier, og vel
                  verdt tiden for alle som er glade i stripeserier!
                </p>
              </div>
              <div className="recommendation-section-product box box-white book-card">
                <img
                  className="book-card-cover"
                  src="https://publishingassets.andrewsmcmeel.com/productimages/9781524851774_feature.jpg"
                  alt=""
                  width="160"
                  height="200"
                />

                <div className="stack">
                  <h3 className="eyebrow-heading book-card-title">
                    <a href="#">
                      Snug Harbor Stories: a Wallace the Brave Collection!
                    </a>
                  </h3>

                  <p className="book-card-author">Skrevet av Will Henry</p>

                  <p className="book-card-tags cluster">
                    <span className="tag">Humor</span>
                    <span className="tag">Tegneserier</span>
                    <span className="tag">Barndom</span>
                  </p>
                </div>

                <a className="button block-button" href="#">
                  Kjøp (399,-)
                </a>
              </div>
            </div>

            <div className="container grid one-plus-two-columns large-gap recommendation-section product-on-left">
              <div className="recommendation-section-text stack">
                <h3 className="section-subheading">
                  Månedens lydbok for Christian er skrevet av Adam Kay
                </h3>

                <p>
                  Jeg har alltid vært glad i dagbokformatet i bøker helt siden
                  jeg leste Berts Dagbok som gutt, og denne boken skuffer
                  absolutt ikke, selv som lydbok! Jeg har lyttet til den i noen
                  uker når jeg har funnet en ledig stund, og det er en slik bok
                  som er lett å plukke opp når jeg har ti minutter ledig her og
                  der.
                </p>

                <blockquote className="big-quote">
                  Du kommer til å le, gråte, og le så du gråter i en salig røre.
                  Anbefales varmt!
                </blockquote>

                <p>
                  Boken er ikke for pyser — scener, lyder, lukter og syn er ofte
                  overdrevent beskrevet, og du kommer til å ha en helt annen
                  respekt for helsevesenet når du er ferdig med Adam Kays
                  fortelling. Stor kudos for en fortelling med stort spenn i
                  innhold, du kommer til å le, gråte, og le så du gråter om
                  hverandre!
                </p>
              </div>
              <div className="recommendation-section-product box box-white book-card">
                <img
                  className="book-card-cover"
                  src="https://www.norli.no/cdn/1762431004/Produktbilder/FS/Book/Bonnier%20Norsk%20Forlag%20AS/9788284192369.jpg?auto=webp&format=pjpg&width=960&height=1200&fit=cover"
                  alt=""
                  width="160"
                  height="200"
                />

                <div className="stack">
                  <h3 className="eyebrow-heading book-card-title">
                    <a href="#">Dette kommer til å gjøre vondt</a>
                  </h3>

                  <p className="book-card-author">Skrevet av Adam Kay</p>

                  <p className="book-card-tags cluster">
                    <span className="tag">Humor</span>
                    <span className="tag">Helsevesenet</span>
                    <span className="tag">Drama</span>
                    <span className="tag">Dagbok</span>
                    <span className="tag">Lydbok</span>
                  </p>
                </div>

                <a className="button block-button" href="#">
                  Kjøp (299,-)
                </a>
              </div>
            </div>
          </article>
        </Section> */}
        <Section className="m-b-xl stack stack-large">
          <h2 className="section-heading">Hva de ansatte leser akkurat nå</h2>

          <StaffPick
            title="Snug Harbor Stories"
            author="Will Henry"
            image="https://publishingassets.andrewsmcmeel.com/productimages/9781524851774_feature.jpg"
            price={399}
            tags={["Humor", "Tegneserier", "Barndom"]}
            heading="Wenche har nettopp lest Wallace the Brave for første gang!"
            description="Jeg plukket med meg denne boka på vei hjem fra jobb en dag, da den virket som en bok sønnen min kunne fatte interesse for."
            quote="Jeg har aldri ledd så godt som av denne boka, en virkelig perle av moderne tegneserier!"
            description2="Wallace the Brave er en fantastisk tegneserie, midt i blinken om du liker Tommy og Tigern."
            layout="right"
          />
          <StaffPick
            title="Dette kommer til å gjøre vondt"
            author="Adam Kay"
            image="https://www.norli.no/cdn/1762431004/Produktbilder/FS/Book/Bonnier%20Norsk%20Forlag%20AS/9788284192369.jpg?auto=webp&format=pjpg&width=960&height=1200&fit=cover"
            price={299}
            tags={["Humor", "Helsevesenet", "Drama", "Dagbok", "Lydbok"]}
            heading="Månedens lydbok for Christian er skrevet av Adam Kay"
            description="Jeg har alltid vært glad i dagbokformatet i bøker helt siden jeg leste Berts Dagbok som gutt."
            quote="Du kommer til å le, gråte, og le så du gråter i en salig røre. Anbefales varmt!"
            description2="Boken er ikke for pyser — scener, lyder, lukter og syn er ofte overdrevent beskrevet."
            layout="left"
          />
        </Section>
        {/* <Section className="m-b-xl stack stack-large">
          <h2 className="section-heading">#BookTok</h2>
          <div className="reel">
            <article className="box box-light-gray book-card">
              <img
                className="book-card-cover"
                src="https://www.norli.no/cdn/1784200720/Produktbilder/SDBooks/9781335534637.jpg?auto=webp&format=pjpg&width=960&height=1200&fit=cover"
                alt=""
                width="160"
                height="200"
              />

              <div className="stack">
                <h3 className="eyebrow-heading book-card-title">
                  <a href="#">Heated Rivalry</a>
                </h3>

                <p className="book-card-author">Skrevet av Rachel Reid</p>

                <p className="book-card-tags cluster">
                  <span className="tag">#BookTok</span>
                  <span className="tag">Pocket</span>
                  <span className="tag">Engelsk</span>
                  <span className="tag">Roman</span>
                </p>
              </div>

              <a className="button block-button" href="#">
                Kjøp (199,-)
              </a>
            </article>
            <article className="box box-light-gray book-card">
              <img
                className="book-card-cover"
                src="https://www.norli.no/cdn/1759697111/Produktbilder/SDB/Book/SD%20Books/9781398535763.jpg?auto=webp&format=pjpg&width=960&height=1200&fit=cover"
                alt=""
                width="160"
                height="200"
              />

              <div className="stack">
                <h3 className="eyebrow-heading book-card-title">
                  <a href="#">Fearful</a>
                </h3>

                <p className="book-card-author">Skrevet av Lauren Roberts</p>

                <p className="book-card-tags cluster">
                  <span className="tag">#BookTok</span>
                  <span className="tag">Pocket</span>
                  <span className="tag">Engelsk</span>
                  <span className="tag">Ungdom</span>
                </p>
              </div>

              <a className="button block-button" href="#">
                Kjøp (199,-)
              </a>
            </article>
            <article className="box box-light-gray book-card">
              <img
                className="book-card-cover"
                src="https://www.norli.no/cdn/1782104419/Produktbilder/SDBooks/9781035435913.jpg?auto=webp&format=pjpg&width=960&height=1200&fit=cover"
                alt=""
                width="160"
                height="200"
              />

              <div className="stack">
                <h3 className="eyebrow-heading book-card-title">
                  <a href="#">Rook & Rebel</a>
                </h3>

                <p className="book-card-author">Skrevet av Kate Crew</p>

                <p className="book-card-tags cluster">
                  <span className="tag">#BookTok</span>
                  <span className="tag">Pocket</span>
                  <span className="tag">Engelsk</span>
                  <span className="tag">Krim</span>
                </p>
              </div>

              <a className="button block-button" href="#">
                Kjøp (229,-)
              </a>
            </article>
          </div>
        </Section> */}
        <Section className="m-b-xl stack stack-large">
          <h2 className="section-heading">#BookTok</h2>
          <div className="reel">
            <BookCard
              title="Heated Rivalry"
              author="Rachel Reid"
              image="https://www.norli.no/cdn/1784200720/Produktbilder/SDBooks/9781335534637.jpg?auto=webp&format=pjpg&width=960&height=1200&fit=cover"
              price={199}
              tags={["#BookTok", "Pocket", "Engelsk", "Roman"]}
            />
            <BookCard
              title="Fearful"
              author="Lauren Roberts"
              image="https://www.norli.no/cdn/1759697111/Produktbilder/SDB/Book/SD%20Books/9781398535763.jpg?auto=webp&format=pjpg&width=960&height=1200&fit=cover"
              price={199}
              tags={["#BookTok", "Pocket", "Engelsk", "Ungdom"]}
            />
            <BookCard
              title="Rook & Rebel"
              author="Kate Crew"
              image="https://shorturl.at/RCIzp"
              price={229}
              tags={["#BookTok", "Pocket", "Engelsk", "Krim"]}
            />
          </div>
        </Section>

        {/* <section className="m-b-xl stack stack-large">
          <h2 className="section-heading">Lagertømming!</h2>
          <div className="reel">
            <article className="box box-light-gray book-card">
              <img
                className="book-card-cover"
                src="https://www.norli.no/cdn/1790262056/Produktbilder/Bokbasen/9788269341546.jpg?auto=webp&format=pjpg&width=960&height=1200&fit=cover"
                alt=""
                width="160"
                height="200"
              />

              <div className="stack">
                <h3 className="eyebrow-heading book-card-title">
                  <a href="#">Lysløypa — Oslo 2027</a>
                </h3>

                <p className="book-card-author">
                  Skrevet av Christina Skreiberg, Ida Frisch, og Nora K. Sæter
                </p>

                <p className="book-card-tags cluster">
                  <span className="tag">Reise</span>
                  <span className="tag">Kulturguide</span>
                  <span className="tag">Mat og drikke</span>
                </p>
              </div>

              <a className="button block-button" href="#">
                Kjøp (299,-)
              </a>
            </article>
            <article className="box box-light-gray book-card">
              <img
                className="book-card-cover"
                src="https://www.norli.no/cdn/1776243655/Produktbilder/Bokbasen/9788205624948.jpg?auto=webp&format=pjpg&width=960&height=1200&fit=cover"
                alt=""
                width="160"
                height="200"
              />

              <div className="stack">
                <h3 className="eyebrow-heading book-card-title">
                  <a href="#">Oppstandelsen</a>
                </h3>

                <p className="book-card-author">Skrevet av Alfred Fidjestøl</p>

                <p className="book-card-tags cluster">
                  <span className="tag">Fotball</span>
                  <span className="tag">Landslaget</span>
                  <span className="tag">Dokumentar</span>
                </p>
              </div>

              <a className="button block-button" href="#">
                Kjøp (449,-)
              </a>
            </article>
            <article className="box box-light-gray book-card">
              <img
                className="book-card-cover"
                src="https://www.norli.no/cdn/1789376450/Produktbilder/Bokbasen/9788202909819.jpg?auto=webp&format=pjpg&width=960&height=1200&fit=cover"
                alt=""
                width="160"
                height="200"
              />

              <div className="stack">
                <h3 className="eyebrow-heading book-card-title">
                  <a href="#">Strikk stort</a>
                </h3>

                <p className="book-card-author">Skrevet av Nina Birkeland</p>

                <p className="book-card-tags cluster">
                  <span className="tag">Strikking</span>
                  <span className="tag">Hobby</span>
                  <span className="tag">Håndarbeid</span>
                </p>
              </div>

              <a className="button block-button" href="#">
                Kjøp (329,-)
              </a>
            </article>
          </div>
        </section> */}
        <Section className="m-b-xl stack stack-large">
          <h2 className="section-heading">Lagertømming!</h2>
          <div className="reel">
            <BookCard
              title="Lysløypa — Oslo 2027"
              author="Skreiberg, Ida Frisch, og Nora K. Sæter"
              image="https://www.norli.no/cdn/1790262056/Produktbilder/Bokbasen/9788269341546.jpg?auto=webp&format=pjpg&width=960&height=1200&fit=cover"
              price={199}
              tags={["#Lagertømming", "Reise", "Kulturguide", "Mat og drikke"]}
            />
            <BookCard
              title="Oppstandelsen"
              author="Alfred Fidjestøl"
              image="https://www.norli.no/cdn/1776243655/Produktbilder/Bokbasen/9788205624948.jpg?auto=webp&format=pjpg&width=960&height=1200&fit=cover"
              price={449}
              tags={[
                "#Lagertømming",
                "Fotball",
                "Landslag",
                "Dokumentar",
                " Landslag-captain (Mathin ødegaard)",
              ]}
            />
            <BookCard
              title="Strikk Stort"
              author="Nina Birkeland"
              image="https://www.norli.no/cdn/1789376450/Produktbilder/Bokbasen/9788202909819.jpg?auto=webp&format=pjpg&width=960&height=1200&fit=cover"
              price={329}
              tags={["#Strikking", "Hobby", "Håndarbaeid"]}
            />
          </div>
        </Section>

        {/* <section className="m-b-xl stack stack-large">
          <h2 className="section-heading">Våre ansatte</h2>
          <article className="section section-green">
            <div className="container grid three-columns">
              <div className="stack employee-card">
                <img
                  className="employee-card-photo"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
                  alt=""
                  height="959"
                  width="640"
                />
                <h3 className="section-subheading">Christian Navnesen</h3>
                <p>
                  Hei! Jeg er daglig leder og eier av BookDragons. Jeg har lest
                  bøker helt siden jeg var liten og greide å oppfylle drømmen om
                  å starte en bokhandel her i Lillestrøm. Jeg elsker science
                  fiction, fantasy og humor.
                </p>
              </div>

              <div className="stack employee-card">
                <img
                  className="employee-card-photo"
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1361&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
                  alt=""
                  height="805"
                  width="640"
                />
                <h3 className="section-subheading">Wenche Book-Jensen</h3>
                <p>
                  Jeg er butikkens ryddehjelp, nettbutikk-medarbeider og ekspert
                  på sosiale medier! Jeg elsker å følge med på hva andre leser
                  på #BookTok, og hjelper deg gjerne med å finne flere bøker i
                  samme sjanger når du har funnet en du liker godt! Stikk gjerne
                  innom og slå av en prat!
                </p>
              </div>

              <div className="stack employee-card">
                <img
                  className="employee-card-photo"
                  src="https://images.unsplash.com/photo-1522556189639-b150ed9c4330?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
                  alt=""
                  height="960"
                  width="640"
                />
                <h3 className="section-subheading">Petter Ristesen</h3>
                <p>
                  Jeg er BookDragons' eminente barista, og jeg lager gjerne en
                  god kopp kaffe eller nytrukket te til deg mens du sitter og
                  fortaper deg i bøkene våre. Jeg slår gjerne av en prat om gode
                  krimromaner, og har mange gode tips om klassikere du bør lese!
                </p>
              </div>
            </div>
          </article>
        </section> */}

        <Section className="m-b-xl stack stack-large">
          <h2 className="section-heading">Våre ansatte</h2>
          <article className="section section-green">
            {/* <div className="container grid three-columns"> */}
            <Grid className="three-columns">
              <PersonCard
                name="Christian Navnesen"
                image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
                decription="Hei! Jeg er daglig leder og eier av BookDragons. Jeg har lest
                  bøker helt siden jeg var liten og greide å oppfylle drømmen om
                  å starte en bokhandel her i Lillestrøm. Jeg elsker science
                  fiction, fantasy og humor."
              />
              <PersonCard
                name="Wenche Book-Jensen"
                image="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1361&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
                decription="Jeg er butikkens ryddehjelp, 
                nettbutikk-medarbeider og ekspert på sosiale medier! 
                Jeg elsker å følge med på hva andre leser på #BookTok, 
                og hjelper deg gjerne med å finne flere bøker i samme sjanger 
                når du har funnet en du liker godt! Stikk gjerne innom og slå av en prat!"
              />
              <PersonCard
                name="Petter Ristesen"
                image="https://images.unsplash.com/photo-1522556189639-b150ed9c4330?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
                decription="Hei! Jeg er daglig leder og eier av BookDragons. Jeg har lest
                  bøker helt siden jeg var liten og greide å oppfylle drømmen om
                  å starte en bokhandel her i Lillestrøm. Jeg elsker science
                  fiction, fantasy og humor."
              />
              {/* </div> */}
            </Grid>
          </article>
        </Section>

        {/* <section className="m-b-xl stack stack-large">
          <div className="container grid two-plus-one-columns">
            <article className="stack">
              <h2 className="section-heading">
                Hva skjer på BookDragons i høst?
              </h2>
              <img
                src="https://images.unsplash.com/photo-1543393470-b2c833b98dce?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
                alt=""
                width="1920"
                height="1440"
              />
              <p>
                Høsten er her, og hva passer da bedre enn å krype sammen under
                pleddet med en god bok? Jo, å være med på et arrangement hos
                BookDragons sammen med mange andre som liker å gjøre det samme!
                Vi garanterer koselig stemning, fyr i peisen, varme drikker og
                mange spennende foredragsholdere!
              </p>
              <p>
                Ønsker din bedrift å holde et arrangement hos oss? Vi tilbyr
                utleie av lokaler tilpasset dine behov, og kan bistå med
                servering, rigging og rydding til en fornuftig pris. Ta kontakt
                med oss i dag for en hyggelig og uforpliktende prat!
              </p>
              <a href="#" className="button">
                Send oss en mail
              </a>
            </article>
            <aside className="stack">
              <h2 className="section-subheading">Kommende arrangementer</h2>
              <ul className="future-events-list">
                <li>
                  <div className="calendar-icon" aria-label="29. november">
                    <span className="calendar-icon-month">Nov</span>
                    <span className="calendar-icon-day">29</span>
                  </div>
                  <div className="stack stack-small">
                    <h3 className="eyebrow-heading">
                      Foredrag av Frode Øverli
                    </h3>
                    <p>
                      Kongen av norske tegneserier kommer for å snakke om
                      Pondus, karrieren som tegner og naturligvis fotball!
                    </p>
                    <p className="future-events-list-info">
                      1800 — 2000. Inngang: 200,-
                    </p>
                  </div>
                </li>
                <li>
                  <div className="calendar-icon" aria-label="7. desember">
                    <span className="calendar-icon-month">Des</span>
                    <span className="calendar-icon-day">07</span>
                  </div>
                  <div className="stack stack-small">
                    <h3 className="eyebrow-heading">
                      Lesesirkel med Øystein Sunde
                    </h3>
                    <p>
                      Kan man fremdeles lese bøker når man har rundet 80?
                      Selvfølgelig kan man det!
                    </p>
                    <p className="future-events-list-info">
                      1600 — 1730. Inngang: 100,-
                    </p>
                  </div>
                </li>
                <li>
                  <div className="calendar-icon" aria-label="20. desember">
                    <span className="calendar-icon-month">Des</span>
                    <span className="calendar-icon-day">20</span>
                  </div>
                  <div className="stack stack-small">
                    <h3 className="eyebrow-heading">
                      Førjulskos med Wenche Myhre
                    </h3>
                    <p>
                      Selveste Wenche kommer for å lese sin
                      favoritt-julefortelling, og selvfølgelig for å drikke
                      gløgg og spise pepperkaker med oss!
                    </p>
                    <p className="future-events-list-info">
                      1800 — 2000. Inngang: 200,-
                    </p>
                  </div>
                </li>
              </ul>
            </aside>
          </div>
        </section> */}
        <Section className="m-b-xl stack stack-large">
          <Grid className="two-plus-one-columns">
            <article className="stack">
              <h2 className="section-heading">
                Hva skjer på BookDragons i høst?
              </h2>

              <img
                src="https://images.unsplash.com/photo-1543393470-b2c833b98dce?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
                alt=""
                width="1920"
                height="1440"
              />
              <p>
                Høsten er her, og hva passer da bedre enn å krype sammen under
                pleddet med en god bok? Jo, å være med på et arrangement hos
                BookDragons sammen med mange andre som liker å gjøre det samme!
                Vi garanterer koselig stemning, fyr i peisen, varme drikker og
                mange spennende foredragsholdere!
              </p>
              <p>
                Ønsker din bedrift å holde et arrangement hos oss? Vi tilbyr
                utleie av lokaler tilpasset dine behov, og kan bistå med
                servering, rigging og rydding til en fornuftig pris. Ta kontakt
                med oss i dag for en hyggelig og uforpliktende prat!
              </p>
              <Button href="#" className="button">
                Send oss en mail
              </Button>
            </article>

            <aside className="stack">
              <h2 className="section-subheading">Kommende arrangementer</h2>

              <ul className="future-events-list">
                <EventCard
                  title="Foredrag av Frode Øverli"
                  description="Kongen av norske tegneserier kommer for å snakke om Pondus, karrieren som tegner og naturligvis fotball!"
                  month="Nov"
                  day="29"
                  time="1800 — 2000"
                  price={200}
                />
                <EventCard
                  title="Lesesirkel med Øystein Sunde"
                  description="Kan man fremdeles lese bøker når man har rundet 80? Selvfølgelig kan man det!
                  "
                  month="Des"
                  day="07"
                  time="1600 — 1730"
                  price={100}
                />
                <EventCard
                  title="Førjulskos med Wenche Myhre"
                  description="Selveste Wenche kommer for å lese sin favoritt-julefortelling, og selvfølgelig for å drikke gløgg og spise pepperkaker med oss!"
                  month="Des"
                  day="20"
                  time="1800 — 2000"
                  price={200}
                />
              </ul>
            </aside>
          </Grid>
        </Section>
      </main>

      {/* <footer className="site-footer">
        <p>&copy; BookDragons, 2026.</p>
        <p>Dette prosjektet er et eksempelprosjekt for frontendutvikling ved Gokstad Akademiet. Dette er ikke en ekte nettbutikk eller bokhandel. Beklager dette.</p>
      </footer> */}
      <Footer />
    </>
  );
}
