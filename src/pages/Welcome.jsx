import welcomeImage from "../assets/images/welcome-image.png"
// import backgroundImage from "../assets/images/backgroundImage.png"


export default function Welcome(){
    return(
        <div className=" bg-cover h-screen flex flex-col place-items-center place-content-center bg-[linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.5)),url('./assets/images/backgroundImage.png')] ">
            <h3 className="text-white text-center text-4xl ">Savory & <br />Sweet</h3>
            <img src={welcomeImage} alt="Welcome Image" />
        </div>
    )
}