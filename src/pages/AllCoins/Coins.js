import CoinTable from "./CoinTable";
import React from "react";

const coins =
    [
        {
            "id": 1,
            "img_reverse": "/uploads/1936-vytautas-didysis-a.jpg",
            "title": "Vytautas Didysis, 10 litų, 1936, Lietuva, sidabras",
            "description": "Vytautas Didysis, 10 litų, 1936, Lietuva, sidabras\n" +
                "Stovis: VF/XF.\n" +
                "Tiražas: 720 000 vnt.\n" +
                "Metalas: Sidabras (Ag).\n" +
                "Praba: .750\n" +
                "Svoris: 18,0 g.\n" +
                "Skersmuo: 32,2 mm.\n" +
                "Storis: 2.5 mm.\n" +
                "Nukaldinimo metai: 1936 m.\n" +
                "Kalykla: „Spindulys“ Kaunas, Lietuva.\n" +
                "Valstybė: Lietuvos Respublika.\n" +
                "Monetų dizainą kūrė: Juozas Zikaras.\n" +
                "\n" +
                "Aversas: Lietuvos Didysis kunigaikštis Vytautas Didysis apink jį užrašas: * VYTAUTAS DIDYSIS * 10 DEŠIMTS LITŲ 10 *\n" +
                "Reversas: Valstybės herbas – Vytis, žemiau jo užrašas „LIETUVA“ po juo nukaldinimo metai 1936.\n" +
                "Briauna: „TAUTOS * JĖGA * VIENYBĖJE *“\n",
            "price": "35",
            "condition": "MS62"
        },
        {
            "id": 2,
            "img_reverse": "/uploads/1938-antanas-smetona-a.jpg",
            "title": "ANTANAS SMETONA, 10 LITŲ, 1938, LIETUVA, SIDABRAS",
            "description": "Antanas Smetona, 10 litų, 1938, Lietuva, sidabras\n" +
                "Monetos stovis: VF/XF.\n" +
                "Tiražas: 180 000 vnt.\n" +
                "Metalas: Sidabras (Ag)\n" +
                "Praba: .750\n" +
                "Svoris: 0,18 g.\n" +
                "Skersmuo: 32,2 mm.\n" +
                "Nukaldinimo metai: 1938 m.\n" +
                "Kalykla: „Spindulys“ Kaunas, Lietuva.\n" +
                "Valstybė: Lietuvos Respublika.\n" +
                "Monetų dizaino autorius: Juozas Zikaras.\n" +
                "\n" +
                "Aversas: Prezidento Antano Smetonos biustas, o aplink jį legenda: „VALSTYBĖS PREZIDENTAS A.SMETONA * 10 LITŲ 10 *“.\n" +
                "Reversas: Gediminaičių stulpai, žemiau jų iškaltas užrašas „LIETUVA“ po juo jubiliejiniai metai 1918 – 1938, aplink legenda: „DVIDEŠIMT METŲ NEPRIKLAUSOMYBĖS *XX*“.\n" +
                "Briauna: Iškaltas užrašas „TAUTOS * JĖGA * VIENYBĖJE *“.\n" +
                "\n" +
                "Apie monetą: Tai pirmoji proginė ir paskutinė tarpukario Lietuvos moneta skirta Lietuvos nepriklausomybės dvidešimtmečiui paminėti.\n" +
                "\n" +
                "*Monetos nuotrauka pateikiama, kaip pavyzdys, visos monetos yra VF/XF stovio, todėl moneta nuo paveiksliuko gali nežymiai skirtis.",
            "price": "200",
            "condition": "MS62"
        }
    ]


const Items = () => {

    return (
        <>
            {
                <CoinTable
                    coins={coins}
                />
            }
        </>
    )
}

export default Items