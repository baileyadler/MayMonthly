document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('rosterGrid');

  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');
  const modalElement = document.getElementById('teamModal');  // matches HTML
  const modal = new bootstrap.Modal(modalElement);

  const render = (list) => {
    grid.innerHTML = '';

    list.forEach((p, index) => {
      const col = document.createElement('div');
      col.className = 'col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center';

      const card = document.createElement('div');
      card.className = 'card h-100 shadow-sm';

      const img = document.createElement('img');
      img.src = p.photo;
      img.alt = `${p.firstName} ${p.lastName}`;
      img.className = 'card-img-top';

      const cardBody = document.createElement('div');
      cardBody.className = 'card-body text-center';

      const title = document.createElement('h5');
      title.className = 'card-title mb-1';
      title.textContent = `${p.firstName} ${p.lastName}`;

      const badge = document.createElement('div');
      badge.className = 'badge badge-position';
      badge.textContent = p.position;

      const pos = p.position.toLowerCase();
      // conditional style
      if (pos === 'goalie' || pos === 'goalkeeper') {
        badge.style.backgroundColor = 'red';
        badge.style.color = 'white';
        badge.style.border = 'none';
      } else if (pos === 'mid' || pos === 'midfielder') {
        badge.style.backgroundColor = 'black';
        badge.style.color = 'white';
        badge.style.border = 'none';
      } else if (pos === 'forward' || pos === 'for') {
        badge.style.backgroundColor = 'white';
        badge.style.color = 'red';
        badge.style.border = '2px solid blue'
      } else {
        badge.style.backgroundColor = 'blue';
        badge.style.color = 'white';
        badge.style.border = 'none';
      }



      const age = document.createElement('p');
      age.className = 'small text-black mb-0';
      age.textContent = `Age: ${p.Age}`;

      const btn = document.createElement('button');
      btn.className = 'btn btn-info mt-2';
      btn.textContent = 'More Info';
      btn.setAttribute('data-index', index);

      btn.addEventListener('click', function() {
        const playerIndex = this.getAttribute('data-index');
        const player = list[playerIndex];
        modalTitle.textContent = `⚽${player.firstName} ${player.lastName}`;
        modalBody.textContent = `⚽ ${player.Fact}`;
        modal.show();
      });

      cardBody.appendChild(title);
      cardBody.appendChild(badge);
      cardBody.appendChild(age);
      cardBody.appendChild(btn);

      card.appendChild(img);
      card.appendChild(cardBody);
      col.appendChild(card);
      grid.appendChild(col);
    });
  };

  // Example players array — replace with your actual data
  const players = [ 
    {
        firstName: 'Mandy',
        lastName: 'Mcglynn',
        position: 'Goalie',
        Age: '26',
        Fact: 'Her hometown is Jacksonville, Fla.',
        photo: 'mandie.jpg'
    },
    {
        firstName: 'Phallon',
        lastName: 'Tullis-Joyce',
        position: 'Goalie',
        Age: '16',
        Fact: 'Her hometown is Shoreham, NY.',
        photo: 'phall.png'
    },
    {
        firstName: 'Crystal',
        lastName: 'Dunn',
        position: 'Forward',
        Age: '32',
        Fact: 'Her hometown is Rockville Centre, Ny.',
        photo: 'dunn.jpg'
    },
    {
        firstName: 'Emily',
        lastName: 'Fox',
        position: 'Defender',
        Age: '26',
        Fact: 'Her hometown is Ashburn, VA.',
        photo: 'fox.jpg'
    },
        {
        firstName: 'Naomi',
        lastName: 'Girma',
        position: 'Defender',
        Age: '24',
        Fact: 'Her hometown is San Jose, CA.',
        photo: 'girma.jpg'
    },
    {
        firstName: 'Tara',
        lastName: 'Mckeown',
        position: 'Defender',
        Age: '25',
        Fact: 'Her hometown is Newbury Park, Calif.',
        photo: 'tara.jpg'
    },
    {
        firstName: 'Avery',
        lastName: 'Patterson',
        position: 'Defender',
        Age: '22',
        Fact: 'Her hometown is Jacksonville, FLA.',
        photo: 'avery.jpg'
    },
    {
        firstName: 'Emily',
        lastName: 'Sams',
        position: 'Defender',
        Age: '25',
        Fact: 'Her hometown is Boise, ID.',
        photo: 'sams.jpg'
    },
    {
        firstName: 'Emily',
        lastName: 'Sonnett',
        position: 'Defender',
        Age: '31',
        Fact: 'Her hometown is Marietta, GA.',
        photo: 'sonnett.jpg'
    },
    {
        firstName: 'Sam',
        lastName: 'Coffey',
        position: 'Midfielder',
        Age: '26',
        Fact: 'Her hometown is Sleepy Hollow, NY.',
        photo: 'coffe.jpg'
    },
    {
        firstName: 'Lindsey',
        lastName: 'Heaps',
        position: 'Midfielder',
        Age: '30',
        Fact: 'Her hometown is Golden, CO.',
        photo: 'heaps.jpg'
    },
     {
        firstName: 'Claire',
        lastName: 'Hutton',
        position: 'Midfielder',
        Age: '19',
        Fact: 'Her hometown is Bethlehem, NY.',
        photo: 'claire.jpg'
    },
     {
        firstName: 'Olivia',
        lastName: 'Moultrie',
        position: 'Midfielder',
        Age: '19',
        Fact: 'Her hometown is Wilsonville, OR.',
        photo: 'liv.jpg'
    },
     {
        firstName: 'Lily',
        lastName: 'Yohannes',
        position: 'Midfielder',
        Age: '17',
        Fact: 'Her hometown is Springfield, Va.',
        photo: 'lils.jpg'
    },
     {
        firstName: 'Lynn',
        lastName: 'Biyendolo',
        position: 'Forward',
        Age: '31',
        Fact: 'Her hometown is Fresno, CA.',
        photo: 'lynn.png'
    },
     {
        firstName: 'Michelle',
        lastName: 'Cooper',
        position: 'Forward',
        Age: '22',
        Fact: 'Her hometown is Clarkston, MI.',
        photo: 'coop.jpg'
    },
     {
        firstName: 'Catarina',
        lastName: 'Macario',
        position: 'Midfielder',
        Age: '25',
        Fact: 'Her hometown is San Diego, CA.',
        photo: 'macar.jpg'
    },
     {
        firstName: 'Emma',
        lastName: 'Sears',
        position: 'Forward',
        Age: '24',
        Fact: 'Her hometown is Dublin, Ohio.',
        photo: 'em.jpg'
    },
    {
        firstName: 'Ally',
        lastName: 'Sentnor',
        position: 'Forward',
        Age: '21',
        Fact: 'Her hometown is Hanson, Mass.',
        photo: 'ally.jpg'
    },
     {
        firstName: 'Alyssa',
        lastName: 'Thompson',
        position: 'Forward',
        Age: '20',
        Fact: 'Her hometown is Studio City, CA.',
        photo: 'lys.jpg'
    },

   
]
  render(players);
});
