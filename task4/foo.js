var text = "ABCD";
var i = 0;

for (let j = 1; j <= 4; j++) 
{
    if (i <= 3)
        {

        for (let r = 1; r <= 4; r++) 
            {
            let pattern = "";
            for (let c = 1; c <= 4; c++) {
                pattern = pattern + text[i];
                i++;
            }

            console.log(pattern);
        }
    } else {
        i = 0;
    }
}
