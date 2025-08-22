import user from "../assets/icon_user.png"
import instagram from "../assets/icon_instagram.png"
import linkedin from "../assets/icon_linkedin.png"

export function CardEquipe({nome, link_instagram, link_linkedin}) {
    return (
        <div className="bg-green-user flex flex-col text-white p-4 w-40 h-40 md:w-60 md:h-60 items-center justify-between">
            <img src={user} alt="" className="h-20 md:h-30" />
            <p className="text-sm text-center">{nome}</p>
            <div className="flex justify-between w-16 md:w-full md:px-15">
                <a href={link_instagram} target="_blank" rel="noopener noreferrer"><img src={instagram} alt="" className="h-6 md:h-8 cursor-pointer" /></a>
                
                <a href={link_linkedin} target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="" className="h-6 md:h-8 cursor-pointer" /></a>
            </div>
        </div>
    )
}