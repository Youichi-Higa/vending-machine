const config = {
  sliderCon: document.getElementById('slider'),
  btnCon: document.getElementById('btnContainer'),
  infoCon: document.getElementById('infoContainer'),
};

class Team {
  constructor(name, value, imgPath) {
    this.name = name;
    this.value = value;
    this.imgPath = imgPath;
  }
}

const teams = [
  new Team('GOLDEN STATE WARRIORS', 7, './img/3152_golden_state_warriors-primary-2020.png'),
  new Team('NEW YORK KNICKS', 6.1, './img/2nn48xofg0hms8k326cqdmuis.gif'),
  new Team('LOS ANGELES LAKERS', 5.9, './img/uig7aiht8jnpl1szbi57zzlsh.png'),
  new Team('CHICAGO BULLS', 4.1, './img/chicago_bulls_logo_primary_19672598.png'),
  new Team('BOSTON CELTICS', 4, './img/boston_celtics_logo_primary_19977628.png'),
  new Team(
    'LOS ANGELES CLIPPERS',
    3.9,
    './img/los_angeles_clippers_logo_primary_2019_sportslogosnet-3776.png'
  ),
  new Team('BROOKLYN NETS', 3.5, './img/brooklyn_nets_logo_primary_20135043.png'),
  new Team('DALLAS MAVERICKS', 3.3, './img/3463_dallas_mavericks-primary-2018.png'),
  new Team('HOUSTON ROCKETS', 3.2, './img/6830_houston_rockets-primary-2020.png'),
  new Team('PHILADELPHIA 76ERS', 3.15, './img/7034_philadelphia_76ers-primary-2016.png'),
  new Team('TORONTO RAPTORS', 3.1, './img/7024_toronto_raptors-primary-2021.png'),
  new Team('MIAMI HEAT', 3, './img/burm5gh2wvjti3xhei5h16k8e.gif'),
  new Team('PHOENIX SUNS', 2.7, './img/phoenix_suns_logo_primary_20143696.png'),
  new Team('WASHINGTON WIZARDS', 2.5, './img/5671_washington_wizards-primary-2016.png'),
  new Team('MILWAUKEE BUCKS', 2.3, './img/milwaukee_bucks_logo_primary_20165763.png'),
  new Team('PORTLAND TRAIL BLAZERS', 2.1, './img/9725_portland_trail_blazers-primary-2018.png'),
  new Team('CLEVELAND CAVALIERS', 2.05, './img/cleveland_cavaliers_logo_primary_20187997.png'),
  new Team('SACRAMENTO KINGS', 2.03, './img/4043_sacramento_kings-primary-2017.png'),
  new Team('UTAH JAZZ', 2.025, './img/6749_utah_jazz-primary-2017.png'),
  new Team('SAN ANTONIO SPURS', 2, './img/2547_san_antonio_spurs-primary-2018.png'),
  new Team('ATLANTA HAWKS', 1.975, './img/8190_atlanta_hawks-primary-2021.png'),
  new Team('DENVER NUGGETS', 1.93, './img/8926_denver_nuggets-primary-2019.png'),
  new Team('DETROIT PISTONS', 1.9, './img/detroit_pistons_logo_primary_20185710.png'),
  new Team('OKLAHOMA CITY THUNDER', 1.875, './img/khmovcnezy06c3nm05ccn0oj2.png'),
  new Team('ORLANDO MAGIC', 1.85, './img/orlando_magic_logo_primary_20117178.png'),
  new Team('INDIANA PACERS', 1.8, './img/4812_indiana_pacers-primary-2018.png'),
  new Team('CHARLOTTE HORNETS', 1.7, './img/1926_charlotte__hornets_-primary-2015.png'),
  new Team('MINNESOTA TIMBERWOLVES', 1.67, './img/9669_minnesota_timberwolves-primary-2018.png'),
  new Team('MEMPHIS GRIZZLIES', 1.65, './img/4373_memphis_grizzlies-primary-2019.png'),
  new Team('NEW ORLEANS PELICANS', 1.6, './img/2681_new_orleans_pelicans-primary-2014.png'),
];

class View {
  static createSlider() {
    document
      .getElementById('slider')
      .classList.add(
        'col-md-7',
        'col-12',
        'p-2',
        'd-flex',
        'justify-content-center',
        'align-items-center'
      );

    document.getElementById('slider').innerHTML = `
      <div id="slideShow" class="col-12 d-flex">
        <div id="main" class="main full-width" data-index="0"></div>
        <div id="extra" class="extra full-width"></div>
      </div>
    `;
  }

  static createInfoContainer(obj) {
    document.getElementById('infoContainer').innerHTML = `
      <div class="col-12 px-0 pl-2">
        <p class="m-0">Name : ${obj.name}</p>
        <p class="m-0">Value : ${obj.value} bil</p>
      </div>    
    `;
  }

  static createButtons() {
    let htmlString = '';

    for (let i = 1; i <= teams.length; i++) {
      htmlString += `
        <div class="col-3 py-2 px-2">
          <button class="btn btn-light col-12">${i}</button>
        </div>
      `;
    }

    document.getElementById('btnContainer').innerHTML = `
      <div class='col-12 px-0 d-flex flex-wrap py-2'>
        ${htmlString}
      </div>
    `;

    for (let i = 1; i <= teams.length; i++) {
      document
        .getElementById('btnContainer')
        .querySelectorAll('.btn')
        [i - 1].addEventListener('click', function () {
          Controller.slideJump(i);
        });
    }
  }
}

class Controller {
  static slideJump(input) {
    input--;
    let main = document.getElementById('main');
    let index = main.getAttribute('data-index');

    let currentElement = document.createElement('div');
    currentElement.classList.add('d-flex', 'justify-content-center');

    if (index === -1) {
      currentElement.innerHTML = `
      <img class='col-10' src="${teams[0].imgPath}" alt="${teams[0].name}">
      `;
    } else {
      currentElement.innerHTML = `
      <img class='col-10' src="${teams[index].imgPath}" alt="${teams[index].name}">
      `;
    }

    index = input;

    let extra = document.getElementById('extra');
    let nextElement = document.createElement('div');
    nextElement.innerHTML = `
      <img class='col-10' src="${teams[index].imgPath}" alt="${teams[index].name}">
    `;

    View.createInfoContainer(teams[index]);
    main.setAttribute('data-index', index.toString());

    main.innerHTML = '';
    main.append(nextElement);

    extra.innerHTML = '';
    extra.append(currentElement);

    main.classList.add('expand-animation');
    extra.classList.add('deplete-animation');

    let slideShow = document.getElementById('slideShow');

    slideShow.innerHTML = '';
    slideShow.append(extra);
    slideShow.append(main);
  }
}

const initializeApp = () => {
  const root = document.getElementById('root');
  root.innerHTML = `
    <div class="vh-100 d-flex justify-content-center align-items-center">
      <div class="col-12 col-md-11 col-lg-8 bg-tricolor d-flex flex-wrap">
        <div id="slider"></div>
        <div class="col-12 col-md-5 py-2">
          <div id="infoContainer"></div>
          <div id="btnContainer"></div>
        </div>
      </div>
    <div>    
  `;
};

initializeApp();
View.createSlider();
View.createButtons();
