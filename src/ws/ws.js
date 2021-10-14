
async function getRequest(req = "https://nhentai.net/"){
    let rr = (await fetch(req)).text();

    console.log(rr)


}




let NHentai = {
    getRequest,


};


export default NHentai;