import './personnalizer.scss';

const Personnalisez = () => 
(
    <div class="bigcontainer">
        <div class="subcontainer">
            <section class="container pt-5" >
                <h5>Aperçu :</h5>
                <div class="result">
                    <p id="monTexte1" class="monTexte">Texte à modifier</p>
                    <p id="monTexte2" class="monTexte">Texte à modifier</p>
                </div>
            </section>
        </div>
        <div class="subcontainer">
            <section class="container pt-5" >
                <h2 class="h2"> 1- Choisissez votre texte</h2>
                <form class="d-flex pb-4" id="champ1">

                    <input required="" class="form-control" id="montexte1" type="text" placeholder="Donald Trump" name="title" ></input>
                    <div id="submit-btn" class="btn btn-primary">Valider</div>
                </form>
                <form class="d-flex pb-4" id="champ2">
                    <input required="" class="form-control" id="montexte2" type="text" placeholder="Président" name="title" ></input>
                    <div id="submit-btn" class="btn btn-primary">Valider</div>
                </form>
                    <ul class="list-group">
                    </ul>
            </section>
            
            <section class="container pt-5" >
                <h2 class="h2"> 2- Choisissez votre police</h2>
            </section>
            <section class="containerflex">
                    <div class="col" id="col-1">
                        <label class="label">Texte du haut :</label>
                        <select id="monMenuDeroulant1" class="btn btn-primary">
                            <option value="police1">Police 1</option>
                            <option value="police2">Police 2</option>
                            <option value="police3">Police 3</option>
                        </select>
                    </div>
                    <div class="col" id="col-2">
                        <label class="label2">Texte du bas :</label>
                        <select id="monMenuDeroulant2" class="btn btn-primary">
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

