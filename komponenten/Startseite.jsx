import Mitteilungen from "@/komponenten/Mitteilungen"
import Stundenplan from "@/komponenten/Stundenplan"
import Wetter from "@/komponenten/Wetter"
import Info from "@/komponenten/Info"
import Taschenrechner from "@/komponenten/Taschenrechner"

export default function Startseite() {

    return (
        <div className="container-fluid">
            <div className='row'>
                <div className="col-9 container_start pb-5">
                    <Stundenplan/>
                    <div className="row">
                        <div className="col-6">
                            <Taschenrechner/>
                        </div>
                        <div className="col-6">
                            
                        </div>
                    </div>
                </div>
                <div className="col-3 container_start pb-5">
                    <Mitteilungen/>
                    <Wetter/>
                    <Info/>
                </div>
            </div>
        </div>
    );
}  
