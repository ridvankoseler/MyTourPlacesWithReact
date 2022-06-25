
import cardStyle from "./card.module.scss";

const Card = ({data}) => {
  return (
    <main>
      {data.map((item) => {
        const { title, desc, image } = item;
        return (
          
            <div className={cardStyle.card}>
              <h2>{title}</h2>
              <img src={image} alt='img' />
              <p>{desc}</p>
            </div>
          
        );
      })}
    </main>
  );
};

export default Card;
