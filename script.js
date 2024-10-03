let stone, value;
        let compute=0;
        let ounce = 224;
        function computeValue(){

            stone = parseInt(document.getElementById("stones").value);
            
                
            compute = stone * ounce;
            document.getElementById("output").value = compute;
            
        }
        document.getElementById("bntcompute").addEventListener("click", computeValue);
