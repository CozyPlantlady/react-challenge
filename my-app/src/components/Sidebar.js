import css from "./css/Sidebar.module.css"

function Sidebar() {
    return <div className = {css.sidebar} >
                <a>MyPhotos</a>
                <a>My Illustrations</a>
                <a>MyPaintings</a>
            </div>
}

export default Sidebar

