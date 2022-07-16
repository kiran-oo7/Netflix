import "./navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="items">

        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png' alt="" className="logo" />
      
        <span className="title">Home</span>
        <span className="title">Movies</span>
        <span className="title">Series</span>
        <div className="rightSide">
        <span className="title">KIDS</span>
        <span className="title">DVD</span>
        <img src='https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png' alt="" className="avatar" />
        </div>
        </div>
        
        
    
    </div>
  )
}

export default Navbar