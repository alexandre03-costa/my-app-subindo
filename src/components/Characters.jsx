export default function Characters (props){
    const {characters, setCharacters} = props;

    const resetCharacters = () => {
        console.log('clicou');
        setCharacters(null);
    }
    
    return (
     <div className="characters">
        <h1>Personagens</h1>
        <span className="back-home" onClick={resetCharacters}>Voltar para a tela inicial</span>
        <div className="container-characters">
            {characters.map((character,index) => (
                <div className="character-container" key={index}>
                    <div>
                        <img src={character.image} alt={character.name} />
                    </div>
                    <div>
                        <h3>{character.name}</h3>
                        <h6>
                            {character.status === "Alive" ? (
                                <span className="alive"></span>
                            ) : (
                                <span className="dead"></span>
                            )}
                            {character.status}
                        </h6>
                        <p className="text-grey">
                            Episodios: <span>{character.episode.length}</span>
                        </p>
                        <p className="text-grey">
                            Especie: <span>{character.species}</span>
                        </p>
                    </div>
                </div>
            ))}
       </div>     
    
    </div>
    );
}
