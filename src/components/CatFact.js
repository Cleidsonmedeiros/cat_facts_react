import { useEffect, useState } from "react";
import loadingImg from "./loading.gif";

function CatFact() {

    const [catImage, setCatImage] = useState("");
    const [catText, setCatText] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(atualizar, []);

    function atualizar() {

        setLoading(true)

        fetch('https://api.thecatapi.com/v1/images/search')
            .then(response => response.json())

            .then(function(data){
                setCatImage(data[0].url);
            })

        fetch('https://catfact.ninja/fact')
            .then(response => response.json())

            .then(function(data){
                setCatText(data.fact)
            })

    }

    return (
        <div className="CatFact">
            {loading && (<img src={loadingImg} width="100" />) }

            <div style={loading ? {display: 'none'} : {}}>
                <h1>Cat Fact</h1>
                <img src={catImage} width="200" onLoad={() => setLoading(false)} />

                <p>
                    {catText}
                </p>

                <button onClick={atualizar}>Novo Fato</button>
            </div>


        </div>
    )
}

export default CatFact;