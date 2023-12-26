import { useParams, Navigate } from "react-router-dom";
import ArtImageTile from "../ArtImageTile/ArtImageTile";

export default function GalleryView({ galleries }) {
  const galleryId = useParams().galleryId;
  const gallery = galleries.find(({ id }) => id === parseInt(galleryId));

  return (
    <>
      {gallery ? <h2>{`${gallery.name}`}</h2> : <Navigate to="/" />}
      {gallery.objects.map((artPiece, i) => (
        <ArtImageTile key={i} art={artPiece} gallery={gallery}/>
      ))}
    </>
  );
}
