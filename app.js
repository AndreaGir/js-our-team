const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lope',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Develope',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
  ];

  let cartaMembro = document.querySelector('.team-container')

  

  for(let i = 1; i < team.length ; i++){

    

       const nome = team[i].name ;
       const immag = team[i].image; 
      const ruolo = team[i].role; 

    const tim = `<div class="card-image">
    <img
       src="${immag}"
      alt="${nome}"
     />
   </div>
   <div class="card-text">
     <h3>${nome}</h3>
     <p>${ruolo}</p>
   </div> 
   </div>`

      

  
   cartaMembro.innerHTML += tim
   
  }
  
  
  

  