import photoFond from "../public/images/mug-6966047_1280.jpg"

export default function BackgroundImage(): React.JSX.Element{
    return(
        <div className="background-image" aria-hidden="true">
            <img src={photoFond} alt="" />
        </div>
    )
}