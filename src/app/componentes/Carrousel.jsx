import Card from "./Card";
import CardImg from "./CardImg";

export default function Carrousel(props) {

    const img = props.img;
    const numCards = props.numCards;
    const title = props.title

    const cards = [];
    let pel;
    for (let i = 0; i < numCards; i++) {
        pel = i + 1
        if (img) {
            if (pel % 4 === 0) {
                cards.push({ id: i, title: "TITULO " + pel, content: "pfrozen2.jpg", foot: "Pie de tarjeta" })
            } else {
                if (pel % 3 === 0) {
                    cards.push({ id: i, title: "TITULO " + pel, content: "pinmortals.jpg", foot: "Pie de tarjeta" })
                } else {
                    if (pel % 2 === 0) {
                        cards.push({ id: i, title: "TITULO " + pel, content: "pjusticeleage.jpg", foot: "Pie de tarjeta" })
                    } else {
                        cards.push({ id: i, title: "TITULO " + pel, content: "pstarwars.webp", foot: "Pie de tarjeta" })
                    }
                }
            }
        } else {
            cards.push({ id: i, title: "TITULO T", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, earum assumenda? Natus incidunt modi ipsa est enim culpa sequi non! In doloribus assumenda qui asperiores inventore recusandae voluptatem, eveniet nemo.", foot: "Pie de tarjeta" })
        }
    }

    return (
        <div className="m-2">
            <h1 className="px-4">{title}</h1>
            <div id="body" className="flex flex-row flex-nowrap m-1 p-1 overflow-x-auto overflow-y-hidden">
                {cards.map((card) =>
                    // { img? return<Card /> : return < CardImg /> }
                    (img) && <CardImg key={card.id} card={card} />
                )}
                {cards.map((card) =>
                    // { img? return<Card /> : return < CardImg /> }
                    (!img) && <Card key={card.id} card={card} />
                )}
            </div>
        </div>
    )
}