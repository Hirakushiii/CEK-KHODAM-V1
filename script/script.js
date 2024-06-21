All_Khodam = ['Tidak Ada','Naga Beruk','Singa Black Dick','Buaya Gay','Tuyul Punk','Muktar Slibaw','Buaya Sapu Jagad','Ikan Rewel','Ular Rendang','Kadal Javanese','Ragil Mahardika','Antony Gasing','Hiu Tobrut','Cicak Sotagasur','Burung Pak Vincen','Megalodon Epep','Mejikom Overdosis','Macan Konbrut','Taehyung','Budiono Siregar','Siluman Chindo']

document.querySelector('#submit').addEventListener('click', () =>{
    let randomNumber = Math.floor(Math.random() * (All_Khodam.length - 1 + 1));
    // alert(All_Khodam[randomNumber]);
    let nama = document.querySelector('#input-nama');
    document.querySelector('#fragment').innerHTML = loading();
    setTimeout(()=>{
    document.querySelector('#header-fragment').innerHTML = `<p class="text-slate-400 pb-1 pt-3 text-sm">Khodam yang ada dalam diri ${nama.value} adalah :</p>`
    document.querySelector('#fragment').innerHTML = fragment(All_Khodam[randomNumber]);
    document.querySelector('#text-2').innerHTML = 'Jangan lupa share ke teman teman kamu<br>agar semua teman teman kamu tahu<br>kalau kamu mempunyai khodam!';
    document.querySelector('#text-3').innerHTML = '<button class="btn rounded-md bg-primary text-black" onclick="reload()">Ulang</button>';
    }, 3000)
})

function fragment(a){
    return `<h1 class="text-4xl font-bold text-green-300">${a}</h1>`;
}
function reload(){
    location.reload();
}
function loading(){
    return `<span class="loading loading-ring loading-lg text-center text-red-700"></span>`;
}