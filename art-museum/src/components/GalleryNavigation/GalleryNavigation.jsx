import { NavLink } from "react-router-dom"
import './GalleryNavigation.css'

export default function GalleryNavigation( {galleries} ) {
    console.log(galleries)
    return (
      <nav>
        <NavLink to="/">Home</NavLink>
        <h1>Galleries</h1>
        {galleries.map(gallery => <NavLink key={gallery.id} to={`galleries/${gallery.id}`}>{gallery.name}</NavLink>)}
      </nav>
    );
}