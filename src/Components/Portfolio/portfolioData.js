import React from 'react';
import styled from 'styled-components';
import memory from '../../assets/image/portfolio/MemoryGame.jpg';
import nasti from '../../assets/image/portfolio/nasti.jpg';
import parolGen from '../../assets/image/portfolio/parolGen.jpg';
import { A } from '../MainPage/content';

const P = styled.p`
  margin-bottom: 5px;
`;

const nastiDesc = {
  ru: (
    <>
      <P>
        Сайт-визитка для художника-аквагримера. Создание этого сайта стало хорошей практикой после изучения основ
        JavaScript, прямой работы с DOM.
      </P>
      <P>Технологии: Javascript, HTML, SCSS, PHP, MySQL.</P>
      <P>Адаптирован под различные разрешения и мобильные устройства.</P>
      <P>
        Сайт:{' '}
        <A target='_blank' href='http://nastiprazdnik.ru'>
          nastiprazdnik.ru
        </A>
        <br />
        Исходный код:{' '}
        <A target='_blank' href='https://github.com/extohell/Nastiprazdnik'>
          github
        </A>
      </P>
    </>
  ),
  en: (
    <>
      <P>
        Website for face painter. Making this site became a good practice after studying JavaScript basics and direct
        work with the DOM.
      </P>
      <P>Technologies: Javascript, HTML, SCSS, PHP, MySQL.</P>
      <P>The site is adapted for various resolutions and mobile devices.</P>
      <P>
        Site:{' '}
        <A target='_blank' href='http://nastiprazdnik.ru'>
          nastiprazdnik.ru
        </A>
        <br />
        Source code:{' '}
        <A target='_blank' href='https://github.com/extohell/Nastiprazdnik'>
          github
        </A>
      </P>
    </>
  ),
  es: (
    <>
      <P>
        Sitio web de artista de maquillaje. Hacer este sitio se convirtió en una buena práctica después de estudiar
        conceptos básicos de JavaScript y trabajo directo con el DOM.
      </P>
      <P>Tecnologías: Javascript, HTML, SCSS, PHP, MySQL.</P>
      <P>El sitio está adaptado para varias resoluciones y dispositivos móviles.</P>
      <P>
        Sitio:{' '}
        <A target='_blank' href='http://nastiprazdnik.ru'>
          nastiprazdnik.ru
        </A>
        <br />
        Código fuente:{' '}
        <A target='_blank' href='https://github.com/extohell/Nastiprazdnik'>
          github
        </A>
      </P>
    </>
  )
};

const catDesc = {
  ru: (
    <>
      <P>
        Учебный макет для верстки с сайта html-academy. Начало обучения, практика верстки, HTML, CSS и CSS
        препроцессоров.
      </P>
      <P>Технологии: HTML, SCSS, Javascript, сборщик Gulp.</P>
      <P>Макет адаптирован под различные разрешения и мобильные устройства.</P>
      <P>
        Демо:{' '}
        <A target='_blank' href={process.env.PUBLIC_URL + '/demo/cat-energy/index.html'}>
          index
        </A>
        <A target='_blank' href={process.env.PUBLIC_URL + '/demo/cat-energy/catalog.html'}>
          catalog
        </A>
        <A target='_blank' href={process.env.PUBLIC_URL + '/demo/cat-energy/form.html'}>
          form
        </A>
        <br />
        Исходный код:{' '}
        <A target='_blank' href='https://github.com/extohell/cat-energy/tree/master/app'>
          github
        </A>
      </P>
    </>
  ),
  en: (
    <>
      <P>
        Tutorial layout from html-academy website. Beginning of studying, practice of HTML, CSS and CSS preprocessors.
      </P>
      <P>Technologies: HTML, SCSS, Javascript, Gulp.</P>
      <P>The layout is adapted for different resolutions and mobile devices.</P>
      <P>
        Demo:{' '}
        <A target='_blank' href={process.env.PUBLIC_URL + '/demo/cat-energy/index.html'}>
          index
        </A>
        <A target='_blank' href={process.env.PUBLIC_URL + '/demo/cat-energy/catalog.html'}>
          catalog
        </A>
        <A target='_blank' href={process.env.PUBLIC_URL + '/demo/cat-energy/form.html'}>
          form
        </A>
        <br />
        Source code:{' '}
        <A target='_blank' href='https://github.com/extohell/cat-energy/tree/master/app'>
          github
        </A>
      </P>
    </>
  ),
  es: (
    <>
      <P>
        Diseño tutorial del sitio web html-academy. El comienzo del entrenamiento, la práctica de HTML, CSS y CSS
        preprocesadores.
      </P>
      <P>Tecnologías: HTML, SCSS, Javascript, Gulp.</P>
      <P>El diseño está adaptado para diferentes resoluciones y dispositivos móviles.</P>
      <P>
        Demo:{' '}
        <A target='_blank' href={process.env.PUBLIC_URL + '/demo/cat-energy/index.html'}>
          index
        </A>
        <A target='_blank' href={process.env.PUBLIC_URL + '/demo/cat-energy/catalog.html'}>
          catalog
        </A>
        <A target='_blank' href={process.env.PUBLIC_URL + '/demo/cat-energy/form.html'}>
          form
        </A>
        <br />
        Código fuente:{' '}
        <A target='_blank' href='https://github.com/extohell/cat-energy/tree/master/app'>
          github
        </A>
      </P>
    </>
  )
};

const deviceDesc = {
  ru: (
    <>
      <P>Учебный макет для верстки с сайта html-academy. Начало обучения, практика фиксорованной верстки, HTML, CSS.</P>
      <P>Технологии: HTML, SCSS, Javascript.</P>
      <P>
        Демо:{' '}
        <A target='_blank' href={process.env.PUBLIC_URL + '/demo/device/index.html'}>
          index
        </A>
        <A target='_blank' href={process.env.PUBLIC_URL + '/demo/device/catalog.html'}>
          catalog
        </A>
        <br />
        Исходный код:{' '}
        <A target='_blank' href='https://github.com/extohell/device'>
          github
        </A>
      </P>
    </>
  ),
  en: (
    <>
      <P>
        Tutorial layout from html-academy website. Beginning of studying, practice of HTML, CSS and CSS preprocessors.
      </P>
      <P>Technologies: HTML, SCSS, Javascript.</P>
      <P>
        Demo:{' '}
        <A target='_blank' href={process.env.PUBLIC_URL + '/demo/device/index.html'}>
          index
        </A>
        <A target='_blank' href={process.env.PUBLIC_URL + '/demo/device/catalog.html'}>
          catalog
        </A>
        <br />
        Source code:{' '}
        <A target='_blank' href='https://github.com/extohell/device'>
          github
        </A>
      </P>
    </>
  ),
  es: (
    <>
      <P>Diseño tutorial del sitio web html-academy. El omienzo del entrenamiento, la práctica de HTML, CSS.</P>
      <P>Tecnologías: HTML, SCSS, Javascript.</P>
      <P>
        Demo:{' '}
        <A target='_blank' href={process.env.PUBLIC_URL + '/demo/device/index.html'}>
          index
        </A>
        <A target='_blank' href={process.env.PUBLIC_URL + '/demo/device/catalog.html'}>
          catalog
        </A>
        <br />
        Código fuente:{' '}
        <A target='_blank' href='https://github.com/extohell/device'>
          github
        </A>
      </P>
    </>
  )
};

const parolDesc = {
  ru: (
    <>
      <P>Простой генератор паролей. Практика Javascript.</P>
      <P>Технологии: HTML, SCSS, Javascript.</P>
      <P>
        Демо:{' '}
        <A target='_blank' href={process.env.PUBLIC_URL + '/demo/ParolGenerator/index.html'}>
          index
        </A>
        <br />
        Исходный код:{' '}
        <A target='_blank' href='https://github.com/extohell/ParolGenerator'>
          github
        </A>
      </P>
    </>
  ),
  en: (
    <>
      <P>Simple password generator. JavaScript practice.</P>
      <P>Technologies: HTML, SCSS, Javascript.</P>
      <P>
        Demo:{' '}
        <A target='_blank' href={process.env.PUBLIC_URL + '/demo/ParolGenerator/index.html'}>
          index
        </A>
        <br />
        Source code:{' '}
        <A target='_blank' href='https://github.com/extohell/ParolGenerator'>
          github
        </A>
      </P>
    </>
  ),
  es: (
    <>
      <P>El generador de contraseñas simple. Una práctica de JavaScript.</P>
      <P>Tecnologías: HTML, SCSS, Javascript.</P>
      <P>
        Demo:{' '}
        <A target='_blank' href={process.env.PUBLIC_URL + '/demo/ParolGenerator/index.html'}>
          index
        </A>
        <br />
        Código fuente:{' '}
        <A target='_blank' href='https://github.com/extohell/ParolGenerator'>
          github
        </A>
      </P>
    </>
  )
};

const memoryDesc = {
  ru: (
    <>
      <P>Игра на запоминание. Практика React.</P>
      <P>Технологии: React, CSS Modules.</P>
      <P>
        Демо:{' '}
        <A target='_blank' href='https://extohell.github.io/memory_game/'>
          index
        </A>
        <br />
        Исходный код:{' '}
        <A target='_blank' href='https://github.com/extohell/memory_game'>
          github
        </A>
      </P>
    </>
  ),
  en: (
    <>
      <P>Memory game. React practice.</P>
      <P>Technologies: React, CSS Modules.</P>
      <P>
        Demo:{' '}
        <A target='_blank' href='https://extohell.github.io/memory_game/'>
          index
        </A>
        <br />
        Source code:{' '}
        <A target='_blank' href='https://github.com/extohell/memory_game'>
          github
        </A>
      </P>
    </>
  ),
  es: (
    <>
      <P>El juego de memoria. Una práctica de React.</P>
      <P>Tecnologías: React, CSS Modules.</P>
      <P>
        Demo:{' '}
        <A target='_blank' href='https://extohell.github.io/memory_game/'>
          index
        </A>
        <br />
        Código fuente:{' '}
        <A target='_blank' href='https://github.com/extohell/memory_game'>
          github
        </A>
      </P>
    </>
  )
};

const portfolioItems = [
  {
    title: 'Nastiprazdnik',
    description: {
      ru: ['Сайт - визитка для художника-аквагримера'],
      en: ['A business card for the face painter'],
      es: ['El sitio de presentación para la artista de maquillaje']
    },
    fullDescription: nastiDesc,
    img: [nasti]
  },
  {
    title: 'ParolGenerator',
    description: {
      ru: ['Простой генератор паролей'],
      en: ['Simple password generator'],
      es: ['El generador de contraseñas simple']
    },
    fullDescription: parolDesc,
    img: [parolGen]
  },
  {
    title: 'MemoryGame',
    description: {
      ru: ['Игра на запоминание'],
      en: ['Memory Game'],
      es: ['El juego de memoria']
    },
    fullDescription: memoryDesc,
    img: [memory]
  }
  // {
  //   title: 'Cat-Energy',
  //   description: {
  //     ru: ['Учебный макет для верстки с сайта html-academy'],
  //     en: ['Practice layout from the site html-academy'],
  //     es: ['El diseño tutorial del sitio web html-academy']
  //   },
  //   fullDescription: catDesc,
  //   img: [cat]
  // },
  // {
  //   title: 'Device',
  //   description: {
  //     ru: ['Учебный макет для верстки с сайта html-academy'],
  //     en: ['Practice layout from the site html-academy'],
  //     es: ['El diseño tutorial del sitio web html-academy']
  //   },
  //   fullDescription: deviceDesc,
  //   img: [device]
  // }
];

export default portfolioItems;
