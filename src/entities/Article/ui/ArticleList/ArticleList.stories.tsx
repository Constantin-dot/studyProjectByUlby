import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleListViewVariantEnum } from '../../model/types/article';
import { ArticleList } from './ArticleList';

export default {
  title: 'entities/Article/ArticleList',
  component: ArticleList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleList>;

const article = {
  id: '1',
  user: {
    id: '1',
    username: 'admin',
    avatar: 'https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg',
  },
  title: 'Javascript news sfasdf adfs asf as f asdfasdfa',
  subtitle: 'Что нового в JS за 2022 год?',
  img: 'data:image/jpeg;base64,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',
  views: 314,
  createdAt: '22.01.2023',
  type: [
    'IT', 'POLITICS', 'ECONOMICS', 'SINCE',
  ],
  blocks: [
    {
      id: '1',
      type: 'TEXT',
      title: 'Заголовок этого блока',
      paragraphs: [
        'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
        'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
        'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
      ],
    },
    {
      id: '4',
      type: 'CODE',
      code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
    },
    {
      id: '5',
      type: 'TEXT',
      title: 'Заголовок этого блока',
      paragraphs: [
        'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
        'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
      ],
    },
    {
      id: '2',
      type: 'IMAGE',
      src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
      title: 'Рисунок 1 - скриншот сайта',
    },
    {
      id: '3',
      type: 'CODE',
      code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);",
    },
    {
      id: '7',
      type: 'TEXT',
      title: 'Заголовок этого блока',
      paragraphs: [
        'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
        'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
      ],
    },
    {
      id: '8',
      type: 'IMAGE',
      src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
      title: 'Рисунок 1 - скриншот сайта',
    },
    {
      id: '9',
      type: 'TEXT',
      title: 'Заголовок этого блока',
      paragraphs: [
        'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
      ],
    },
  ],
} as any;

const Template: ComponentStory<typeof ArticleList> = (args) => <ArticleList {...args} />;

export const isLoadingCards = Template.bind({});
isLoadingCards.args = {
  isLoading: true,
  articles: [],
  view: ArticleListViewVariantEnum.CARDS,
};

export const isLoadingList = Template.bind({});
isLoadingList.args = {
  isLoading: true,
  articles: [],
  view: ArticleListViewVariantEnum.LIST,
};

export const Cards = Template.bind({});
Cards.args = {
  isLoading: false,
  articles: new Array(9)
    .fill(0)
    .map((_, index) => ({ ...article, id: String(index) })),
  view: ArticleListViewVariantEnum.CARDS,
};

export const List = Template.bind({});
List.args = {
  isLoading: false,
  articles: new Array(3)
    .fill(0)
    .map((_, index) => ({ ...article, id: String(index) })),
  view: ArticleListViewVariantEnum.LIST,
};
