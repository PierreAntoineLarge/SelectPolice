import './personnalizer.scss';

const Personnalisez = () => 
(
    <div className="bigcontainer">
        <div className="subcontainer">
            <section className="container pt-5" >
                <h5>Aperçu :</h5>
                <div className="result">
                    <p id="monTexte1" className="monTexte">Texte à modifier</p>
                    <p id="monTexte2" className="monTexte">Texte à modifier</p>
                </div>
            </section>
        </div>
        <div className="subcontainer">
            <section className="container pt-5" >
                <h2 className="h2"> 1- Choisissez votre texte</h2>
                <form className="d-flex pb-4" id="champ1">

                    <input required="" className="form-control" id="montexte1" type="text" placeholder="Donald Trump" name="title" ></input>
                    <div id="submit-btn" className="btn btn-primary">Valider</div>
                </form>
                <form className="d-flex pb-4" id="champ2">
                    <input required="" className="form-control" id="montexte2" type="text" placeholder="Président" name="title" ></input>
                    <div id="submit-btn" className="btn btn-primary">Valider</div>
                </form>
                    <ul className="list-group">
                    </ul>
            </section>
            
            <section className="container pt-5" >
                <h2 className="h2"> 2- Choisissez votre police</h2>
            </section>
            <section className="containerflex">
                    <div className="col" id="col-1">
                        <label className="label1">Texte du haut :</label>
                        <select id="monMenuDeroulant1" className="btn btn-primary">
                            <option value="police1">Police 1</option>
                            <option value="police2">Police 2</option>
                            <option value="police3">Police 3</option>
                        </select>
                    </div>
                    <div className="col" id="col-2">
                        <label className="label2">Texte du bas :</label>
                        <select id="monMenuDeroulant2" className="btn btn-primary">
                            <option value="police1">Police 1</option>
                            <option value="police2">Police 2</option>
                            <option value="police3">Police 3</option>
                        </select>
                    </div>
            </section>
        </div>
    </div>
);

export default Personnalisez;

