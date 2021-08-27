start();
function start(){
    document.getElementById('app').innerHTML = 
    html = /*html*/ `
    

<div class="wrapper">

<div class="main-div main-div1">
    <h1>Puzzle</h1>
</div>

<div class="main-div main-div2">
    <h1 onclick="show()">Game</h1>
</div>

<div class="main-div main-div3">
    <h1>!</h1>

</div>

</div>
    `;
    
}



function show() {
    document.getElementById('app').innerHTML = 
    html = /*html*/`
  <br>
    
  <div class="samleboks" ondrop="drop(event)" ondragover="allowDrop(event)">
    <div class="gridContainer">
        <div id="rute1" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
        <div id="rute2" ondrop="drop(event)" ondragover="allowDrop(event)"></div> 
        <div id="rute3" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
        <div id="rute4" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
        <div id="rute5" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
        <div id="rute6" ondrop="drop(event)" ondragover="allowDrop(event)"></div> 
        <div id="rute7" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
        <div id="rute8" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
        <div id="rute9" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
        <div id="rute10" ondrop="drop(event)" ondragover="allowDrop(event)"></div> 
        <div id="rute11" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
        <div id="rute12" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
        <div id="rute13" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
        <div id="rute14" ondrop="drop(event)" ondragover="allowDrop(event)"></div> 
        <div id="rute15" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
        <div id="rute16" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
    


    
        
        <div id="bilde13" draggable="true" ondragstart="dra(event)"></div>
        <div id="bilde2" draggable="true" ondragstart="dra(event)"></div>
        <div id="bilde3" draggable="true" ondragstart="dra(event)"></div>
        <div id="bilde16" draggable="true" ondragstart="dra(event)"></div>
        <div id="bilde6" draggable="true" ondragstart="dra(event)"></div>
        <div id="bilde4" draggable="true" ondragstart="dra(event)"></div>
        <div id="bilde12" draggable="true" ondragstart="dra(event)"></div>
        <div id="bilde1" draggable="true" ondragstart="dra(event)"></div>
        <div id="bilde14" draggable="true" ondragstart="dra(event)"></div>
        <div id="bilde5" draggable="true" ondragstart="dra(event)"></div>
        <div id="bilde10" draggable="true" ondragstart="dra(event)"></div>
        <div id="bilde7" draggable="true" ondragstart="dra(event)"></div>
        <div id="bilde11" draggable="true" ondragstart="dra(event)"></div>
        <div id="bilde8" draggable="true" ondragstart="dra(event)"></div>
        <div id="bilde15" draggable="true" ondragstart="dra(event)"></div>
        <div id="bilde9" draggable="true" ondragstart="dra(event)"></div>
        <div>
    </div>

    
     


    `;

    
   



}


