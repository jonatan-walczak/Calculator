window.onload = function () {
 console.log("App started");
 calc.init();
};

let calc = {
    tiles: undefined,
    input: undefined,

    init: function (){
        this.tiles = document.querySelectorAll(".normal_tile, .operation_tiles div");
        this.input = document.getElementById("input");
        for(let i=0;i<this.tiles.length;i++){
            let el = this.tiles[i];
            el.addEventListener('click',this.buttonClick);
        }
    },

    buttonClick: function (e){
        let tile_inner = e.target.innerHTML;
        console.log("Klik: " + tile_inner);
        switch (tile_inner){
            case"=":
                calc.evaluate();
            break;
            case"c":
            calc.clearInput();
            break;
            case"9":
            case"8":
            case"7":
            case"6":
            case"5":
            case"4":
            case"3":
            case"2":
            case"1":
            case"0":
            case"00":
            case".":
            case"/":
            case"-":
            case"+":
            case"*":
            calc.addToInput(tile_inner);
            break;
        }
    },

    addToInput: function (str){
        this.input.value += str;
    },

    evaluate: function(){
        let result = math.evaluate(calc.input.value);
        if (result != undefined) {
            calc.setInput(result);  
        }
        else{
            calc.clearInput();
        }
    },
    clearInput: function(){
        calc.setInput("");
    },
    setInput: function (str){
        calc.input.value = str;
    }
};