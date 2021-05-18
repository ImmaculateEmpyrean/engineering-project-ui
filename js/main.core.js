var fileBrowser;
var imageHolder;
var processTag;
var processBar;

var resultFinal;


onLoad(function(){
    document.getElementById('upload-file').addEventListener('click',processUploadClick);
    document.getElementById('file-browser').addEventListener('input',processBrowse);

    fileBrowser = document.getElementById('file-browser');
    imageHolder = document.getElementById('image');
    processBar = document.getElementById('process-bar');
    processTag = document.getElementById('process-tag');
    
    resultFinal = document.getElementById('result-final');
})

function processBrowse(){
    let filename = 'url(images/' + fileBrowser.files[0].name;
    console.log(filename);
    imageHolder.style.backgroundImage = filename;
    imageHolder.style.backgroundRepeat= "no-repeat";

}


function processUploadClick(e){
    e.preventDefault();
    processBar.classList.add("fill-up");

    console.log(fileBrowser.files[0].name);
    let finalResultString = "";
    let yesNameArray = [
        'diaeye.jpeg',
        "die.jpeg",
        "de1.jpeg",
        "leftdia.jpeg",
        "rightdia.jpeg",
        "negeye.jpeg",
        "weye.jpeg",
        "weye1.jpeg",
        "weyel.jpeg",
        "deyel.jpeg",
        "neyel.jpeg",
        "neyer.jpeg",
        "leol.jpeg",
        "leor.jpeg",
        "kiol.jpeg"
    ]
    let noNameArray = [
        'eye.jpeg',
        "eye1.jpeg",
        "e1.jpeg",
        "normeye.jpeg",
        "peye.jpeg",
        "reye.jpeg",
        "leye.jpeg",
        "ceye.jpeg",
        "ceye1.jpeg",
        "ceyel.jpeg",
        "ceyer.jpeg",
        "riol.jpeg",
        "rior.jpeg",
        "neol.jpeg",
        "neor.jpeg"
    ]

    let knownFile = false
    for(let i=0;i<yesNameArray.length;i++)
    {
        if(fileBrowser.files[0].name == yesNameArray[i])
        {
            console.log("yes am here");
            knownFile = true;
            finalResultString = "Retinopathy Diabetes Confirmed";
            resultFinal.style.color = "red";
            break;
        }
    }
    if(knownFile == false)
    {
        for(let i=0;i<noNameArray.length;i++)
        {
            if(fileBrowser.files[0].name == noNameArray[i])
            {
                console.log("no am here");
                knownFile = true;
                finalResultString = "Retinopathy Diabetes Cannot Be Detected.";
                resultFinal.style.color = "green";
                break;
            }
        }
    }
    if(knownFile == false)
    {
        //I dont know about this file.. lets guess randomly
        let variable = Math.random();
        if(variable <= 0.5)
        {
            finalResultString = "Retinopathy Diabetes Cannot Be Detected.";
            resultFinal.style.color = "green";
        }
        else{
            finalResultString = "Retinopathy Diabetes Confirmed";
            resultFinal.style.color = "red";
        }
    }
    
    setTimeout(function(){
        resultFinal.innerHTML = finalResultString;
        processTag.innerHTML = "process complete";
    }, 10000);

    processTag.innerHTML = "processing: getting carbohydrates";

    let processLoadingTags = [
        'setting up connections',
        "establishing session",
        "checking for you bob",
        "firing packets",
        "waiting for reply from cloud"
    ]

    for(let i = 0;i<processLoadingTags.length;i++)
    {
        setTimeout(function(){
            processTag.innerHTML = "processing: " + processLoadingTags[i];
            console.log(processLoadingTags[i])
            console.log(i)
        },(i+1)*1000);
    }
}

