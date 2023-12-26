import { Link, useParams } from "react-router-dom";

export default function ArtImageTile({art, gallery}) {
  const params = useParams()
  return (
    <>
      <h3>{art.title}</h3>
      <Link to={`galleries/${gallery.id}/art/${art.id}`}>
        <img src={art.primaryimageurl} alt="Big Phat Image" />
      </Link>
    </>
  );
}
