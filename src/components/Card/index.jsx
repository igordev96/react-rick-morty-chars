import { StyledCard, Image, Info } from "./styles";

export default function Card({ image, location, name, status, species }) {
  return (
    <StyledCard>
      <Image>
        <img src={image} alt={name} />
      </Image>
      <Info>
        <h2>{name}</h2>
        <p>
          {status} - {species}
        </p>
        <p>Last seen on</p>
        <p>{location}</p>
      </Info>
    </StyledCard>
  );
}
