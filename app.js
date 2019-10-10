document.addEventListener("DOMContentLoaded", function () {
    let button = document.getElementById("button");

    button.addEventListener("click", function () {


        let friends = ['Emily', 'Luke', 'Audrey', 'Julian', 'Oliver'];

        for (let i = 0; i < friends.length; i++) {
            
            let div = document.createElement("div");
            div.className = "friend";
            document.body.appendChild(div);

            let h3 = document.createElement("h3");
            let h3Text = document.createTextNode(friends[i]);
            div.appendChild(h3);
            h3.appendChild(h3Text);

            for (let j = 99; j > 0; j--) {
                let p = document.createElement("p");
    
                if (j === 1) {
                    pText = document.createTextNode(j + " line of code in the file, " + j + " line of code; " + friends[i] + " strikes one out, clears it all out, no more lines of code in the file!");
                } else {
                    pText = document.createTextNode(j + " lines of code in the file, " + j + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + (j - 1) + " lines of code in the file!");
                }
                div.appendChild(p);
                p.appendChild(pText);
            }
        };



    });
});