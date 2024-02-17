import Mitteilungen from "@/komponenten/Mitteilungen"
import Stundenplan from "@/komponenten/Stundenplan"

export default function Startseite() {

    return (
        <div className="container-fluid">
            <div className='row mt-4'>
                <div className="col-9">
                    <Stundenplan/>
                </div>
                <div className="col-3">
                    <Mitteilungen/>
                </div>
            </div>
        </div>
    );
}
