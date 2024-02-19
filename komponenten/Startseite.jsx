import Mitteilungen from "@/komponenten/Mitteilungen"
import Stundenplan from "@/komponenten/Stundenplan"
import Wetter from "@/komponenten/Wetter"
import Info from "@/komponenten/Info"
import Taschenrechner from "@/komponenten/Taschenrechner"
import { useState, useEffect } from 'react';

export default function Startseite() {
    // Zustandsvariablen für die Anzeige der Komponenten
    const [showStundenplan, setShowStundenplan] = useState(true);
    const [showTaschenrechner, setShowTaschenrechner] = useState(true);
    const [showMitteilungen, setShowMitteilungen] = useState(true);
    const [showWetter, setShowWetter] = useState(true);
    const [showInfo, setShowInfo] = useState(true);

    useEffect(() => {
        // Zustände aus dem localStorage abrufen und setzen
        const savedSettings = JSON.parse(localStorage.getItem('settings'));
        if (savedSettings) {
            setShowStundenplan(savedSettings.stundenplan);
            setShowTaschenrechner(savedSettings.rechner);
            setShowMitteilungen(savedSettings.mitteilungen);
            setShowWetter(savedSettings.wetter);
            setShowInfo(savedSettings.informationen);
        }
    }, []);

    return (
        <div className="container-fluid">
            <div className='row'>
                <div className="col-9 container_start pb-5">
                    {showStundenplan && <Stundenplan/>}
                    <div className="row">
                        <div className="col-6">
                            {showTaschenrechner && <Taschenrechner/>}
                        </div>
                        <div className="col-6">
                        </div>
                    </div>
                </div>
                <div className="col-3 container_start pb-5">
                    {showMitteilungen && <Mitteilungen/>}
                    {showWetter && <Wetter/>}
                    {showInfo && <Info/>}
                </div>
            </div>
        </div>
    );
}
