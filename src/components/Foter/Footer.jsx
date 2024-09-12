import "./Footer.css"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
      <div className="footer">
        <Link to={"/MainPage"}>ir al inicio</Link>
        <h2>Footer graphic desing is my passion</h2>
      </div>
    </>
  )
}

export default Footer
