import React from 'react';
import ProfilPhoto from "./profil/profilPhoto";
import FullName from "./profil/FullName";
import Adress from "./profil/adress";
import './main.css'




function Main() {
    return (
        <div className="Main">
            < ProfilPhoto />
            <FullName />
            <Adress />

        </div>
    );
}

export default Main;