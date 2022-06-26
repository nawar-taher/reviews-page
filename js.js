let befor = document.getElementById('befor')
let after = document.getElementById('after');
let name = document.getElementById("name");
let job = document.getElementById('job');
let img =document.getElementById('img');
let pra = document.getElementById('pra');
let btn = document.getElementById('btn');


const data = [
    {
        name: 'Bill Anderson',
        job: 'THE BOSS',
        image: './images/person-4.jpg',
        review: `Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.`
    },
    {
        name: 'Susan Smith',
        job: 'WEB DEVELOPER',
        image: './images/person-1.jpg',
        review: `I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry`
    },
    {
        name: 'Peter Jones',
        job: 'INTERN',
        image: './images/person-3.jpg',
        review: `Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.`
    },
    {
        name: 'Anna Johnson',
        job: 'WEB DESIGNER',
        image: './images/person-2.jpg',
        review: `Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal`
    }
]

let personIndex = 0;

name.innerText = data[personIndex].name;
job.innerText = data[personIndex].job;
img.src = data[personIndex].image;
pra.innerText = data[personIndex].review;

after.addEventListener("click",()=>{
    personIndex++;
    if(personIndex > data.length - 1){
        personIndex = 0;
    }
    name.innerText = data[personIndex].name;
    job.innerText = data[personIndex].job;
    img.src = data[personIndex].image;
    pra.innerText = data[personIndex].review;
})

befor.addEventListener("click",()=>{
    personIndex--;
    if(personIndex < 0){
        personIndex = data.length -1;
    }
    name.innerText = data[personIndex].name;
    job.innerText = data[personIndex].job;
    img.src = data[personIndex].image;
    pra.innerText = data[personIndex].review;
})

btn.addEventListener("click",()=>{
    personIndex=Math.floor(Math.random()*data.length)
    name.innerText = data[personIndex].name;
    job.innerText = data[personIndex].job;
    img.src = data[personIndex].image;
    pra.innerText = data[personIndex].review;
})

