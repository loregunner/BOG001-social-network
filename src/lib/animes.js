export const lista = () => {
    const recomendados = ` <div class="recomendaciones">
    <b class="lista">LISTA DE ANIMES</b><br>
    <img class="ojo" src="./imagenes/ver.svg" alt="icono-ojo">
    <a class="recom ">Recomendaciones</a>
</div>`  
const vistaRecom = document.createElement("div")
vistaRecom.innerHTML = recomendados
return vistaRecom
}

export const listaAnimes = () => {
    const animes =`<div class="animes">
    <div class="Ao">
        <img src="./imagenes/Ao haru rider.jpg" alt="haru" class="haru"><br>
        <c>Ao haru rider</c>
    </div>
    <div class="itazura">
        <img src="./imagenes/Itazura na kiss.jpg" alt="kiss" class="kiss"><br>
        <c>Itazura na kiss</c>
    </div>
    <div class="kimi">
        <img src="./imagenes/kimi ni todoke.jpg" alt="ni" class="ni"><br>
        <c>Kimi ni todoke</c>
    </div>
    <div class="mashi">
        <img src="./imagenes/Kamisama Hajimemashi.jpg" alt="kami" class="kami"><br>
        <c class="c1">Kamisama Hajimemashi</c>
    </div>
    <div class="kuro">
        <img src="./imagenes/Ookami Shoujo to Kuro.jpg" alt="to" class="to"><br>
        <c class="c2">Ookami Shoujo to Kuro</c>
    </div>
    <div class="nayo">
        <img src="./imagenes/Suki-tte ii na yo.jpg" alt="yo" class="yo"><br>
        <c class="c3">Suki-tte ii na yo</c>
    </div>
    <div class="tonari">
        <img src="./imagenes/Tonari no Kaibutsu-kun.jpg" alt="kun" class="kun"><br>
        <c class="c4">Tonari no Kaibutsu-kun</c>
    </div>
    <div class="maid">
        <img src="./imagenes/Kaichō wa Maid-sam.jpg" alt="Maid-sam" class="sam"><br>
        <c class="c5">Kaichō wa Maid-sam</c>
    </div>
    <div class="yona">
        <img src="./imagenes/akatsuki-no-yona.png" alt="yona" class="yono"><br>
        <c class="c6">Akatsuki no yona</c>
    </div>
    <div class="ita">
        <img src="./imagenes/bokura ga ita.png" alt="ga" class="ga"><br>
        <c class="c7">Bokura ga ita</c>
    </div>
    <div class="furu">
        <img src="./imagenes/Chihayafuru.jpg" alt="furu" class="fura"><br>
        <c class="c7a">Chihayafuru</c>
    </div>
    <div class="lovers">
        <img src="./imagenes/diabolik lovers.jpg" alt="diabolik" class="lik"><br>
        <c class="c7b">Diabolik Lovers</c>
    </div>
    <div class="fruit">
        <img src="./imagenes/fruitbasket.jpg" alt="ket" class="ket"><br>
        <c class="c8">Fruitbasket</c>
    </div>
    <div class="nozaki">
        <img src="./imagenes/Gekkan Shoujo Nozaki kun.png" alt="zaki" class="zaki"><br>
        <c class="c9">Gekkan Shoujo Nozaki kun</c>
    </div>
    <div class="complex">
        <img src="./imagenes/lovely complex.jpg" alt="plex" class="plex"><br>
        <c class="c10">Lovely Complex</c>
    </div>
    <div class="oro">
        <img src="./imagenes/oro-monogetari.jpeg" alt="tari" class="tari"><br>
        <c class="c10a">Oro monogetari</c>
    </div>
    <div class="host">
        <img src="./imagenes/OURAN HIGHSCHOOL HOST CLUB.jpg" alt="CLUB" class="club"><br>
        <c class="c11">Ouran highschool Host club</c>
    </div>
    <div class="cial">
        <img src="./imagenes/special a.jpg" alt="a" class="spe"><br>
        <c class="c12">Special A</c>
    </div>
    <div class="dora">
        <img src="./imagenes/toradora.jpg" alt="dora" class="tora"><br>
        <c class="c13">Toradora</c>
    </div>
    <div class="pire">
        <img src="./imagenes/vampire-knight.jpeg" alt="pire" class="vam"><br>
        <c class="c14">Vampire Knight</c>
    </div>
</div>`
const vistaAni = document.createElement("div")
vistaAni.innerHTML = animes
return vistaAni
}