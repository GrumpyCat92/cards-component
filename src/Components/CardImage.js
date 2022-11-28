export default function CardImage({ image, alt }) {
  return <img src={image} className="card-img-top" alt={alt} />;
}
