// EVENT CLIPBOARD
document.querySelector('#toggle').addEventListener('change', function(){
    // console.log(this.checked);
    if(!this.checked){
        return document.querySelector('html').classList.remove('dark');
    }else{
        return document.querySelector('html').classList.add('dark');
    }
});
document.querySelector('#clipboard').addEventListener('click', ()=>{
    if(navigator.clipboard){
        navigator.clipboard.readText().then(text => {
            const targetElement = document.querySelector('#input-link');
            targetElement.value = text;
        });
    }else{
        alert('Kamu belum menyalin apapun brok!')
    }
});

// EVENT DOWNLOAD
document.querySelector('#download-btn').addEventListener('click', async()=>{
    const input_key = document.querySelector('#input-link');
    if (input_key.value === '') {
        return Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Input kosong wak!"
        });
    }else if(!input_key.value.includes('instagram.com')){
        return Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Link yang kamu tuliskan bukan dari instagram brok!"
        });
    }else{
        const apikey = 'https://api.nyxs.pw/dl/ig?url=';
        fetch(`${apikey}${input_key.value}`)
            .then((response) =>{
                if (!response.ok){
                    console.error(response.statusText);
                };
                return response.json();
            }).then((Response) =>{
                if(Response.status === 'false'){
                    return alert('link salah bro!');
                }else{
                    // console.log(Response.result);
                    const alldata = Response.result;
                    document.querySelector('#download-area').innerHTML = video_fragment(alldata[0]);
                }
            });
        document.querySelector('#download-area').innerHTML = await loading();
        input_key.value = '';
    }
})

// FRAGMENT
function video_fragment(a){
    return `<div class="card w-96 bg-base-100 shadow-xl image-full mx-auto mt-16">
            <figure><video src="${a.url}"><video/></figure>
            <div class="card-body">
                <h2 class="card-title">Download Di Bawah!</h2>
                <div class="card-actions">
                    <a href="${a.url}" class="btn btn-primary w-full">Download</a>
                </div>
            </div>
        </div>`;
}
function loading(){
    return `<center>
                <span class="loading loading-ball loading-lg"></span>
                <span class="loading loading-ball loading-lg"></span>
                <span class="loading loading-ball loading-lg"></span>
            </center>`;
}