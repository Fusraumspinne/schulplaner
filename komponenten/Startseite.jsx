import Mitteilungen from "@/komponenten/Mitteilungen"
import Stundenplan from "@/komponenten/Stundenplan"
import Wetter from "@/komponenten/Wetter"
import Info from "@/komponenten/Info"

export default function Startseite() {

    return (
        <div className="container-fluid">
            <div className='row mt-4'>
                <div className="col-9 container_start">
                    <Stundenplan/>
                    <Stundenplan/>
                </div>
                <div className="col-3 container_start">
                    <Mitteilungen/>
                    <Wetter/>
                    <Info/>
                </div>
            </div>
        </div>
    );
}  
