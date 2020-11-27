import colors from 'vuetify/es5/util/colors';

export default {
  router: {
    // uncomment for cordova release on android/ios
    mode: 'hash',
    middleware: 'auth.guard',

    extendRoutes(routes, resolve) {
      routes.push({
        path: '*',
        component: resolve(__dirname, 'pages/public/404.vue'),
      });

      routes.push({
        path: '/recuperar-senha/:token',
        component: resolve(__dirname, 'pages/public/reset_password.vue'),
      });

      routes.push({
        path: '/aluno',
        component: resolve(__dirname, 'pages/student/~student.module.vue'),
        children: [
          {
            path: '404',
            component: resolve(__dirname, 'pages/public/404.vue'),
          },
          {
            path: 'home',
            name: 'aluno-home',
            component: resolve(__dirname, 'pages/student/home.vue'),
          },
          {
            path: '/certificado-info/:idUser/:idCourse',
            name: 'certificado-info',
            component: resolve(__dirname, 'pages/public/certificate_info.vue'),
          },
          {
            path: '/cadastro/:inviteKey',
            name: 'cadastro',
            component: resolve(__dirname, 'pages/public/signup.vue'),
          },
          {
            path: 'perfil',
            name: 'meu-perfil',
            component: resolve(__dirname, 'pages/student/profile.vue'),
          },
          {
            path: 'certificados',
            name: 'meus-certificados',
            component: resolve(__dirname, 'pages/student/certificates.vue'),
          },
          {
            path: 'alterar-dados',
            name: 'alterar-dados',
            component: resolve(
              __dirname,
              'pages/student/change_personal_info.vue',
            ),
          },

          {
            path: 'meus-cursos',
            name: 'meus-cursos',
            component: resolve(__dirname, 'pages/student/my_courses.vue'),
          },
          {
            path: 'curso',
            component: resolve(
              __dirname,
              'pages/student/take_course/~take_course.module.vue',
            ),
            children: [
              {
                path: ':slug',
                name: 'aluno-curso',
                props: true,
                component: resolve(
                  __dirname,
                  'pages/student/take_course/course.vue',
                ),
              },
            ],
          },
          {
            path: 'curso/aulas/:id',
            component: resolve(
              __dirname,
              'pages/student/take_course/lesson_list.vue',
            ),
            props: true,
          },
          {
            path: '',
            redirect: 'home',
          },
        ],
      });

      routes.push({
        path: '/admin',
        component: resolve(__dirname, 'pages/student/~student.module.vue'),
        children: [
          {
            path: '404',
            component: resolve(__dirname, 'pages/public/404.vue'),
          },
          {
            path: 'home',
            name: 'admin-home',
            component: resolve(__dirname, 'pages/admin/home.vue'),
          },
          {
            path: 'dashboard',
            name: 'admin-dashboard',
            component: resolve(__dirname, 'pages/admin/dashboard.vue'),
          },
          {
            path: 'perfil',
            name: 'meu-perfil',
            component: resolve(__dirname, 'pages/admin/profile.vue'),
          },
          {
            path: 'curso',
            component: resolve(
              __dirname,
              'pages/student/take_course/~take_course.module.vue',
            ),
            children: [
              {
                path: ':slug',
                name: 'aluno-curso',
                props: true,
                component: resolve(
                  __dirname,
                  'pages/student/take_course/course.vue',
                ),
              },
            ],
          },
          {
            path: 'admin/aulas/:id',
            component: resolve(
              __dirname,
              'pages/student/take_course/lesson_list.vue',
            ),
            props: true,
          },
          {
            path: '',
            redirect: 'home',
          },
        ],
      });

      routes.push({
        path: '',
        redirect: '/login',
      });
    },
  },

  env: {
    domain: process.env.DOMAIN_URL || 'https://newschoolapp.com.br',
    baseUrl:
      process.env.VUE_APP_BASE_URL || // 'https://9460925e6fe4.ngrok.io',
      // 'http://newschool-api-dev2.eba-gxtzwa9m.us-east-2.elasticbeanstalk.com/',
      'https://9ddlz0bte4.execute-api.us-east-2.amazonaws.com/dev',
    // http://develop.dev-newschool.tk/
    credentials: {
      name: process.env.VUE_APP_CLIENT_CREDENTIAL_NAME || 'NEWSCHOOL@FRONT',
      secret:
        process.env.VUE_APP_CLIENT_CREDENTIAL_SECRET || 'NEWSCHOOL@FRONTSECRET',
      external: {
        name:
          process.env.VUE_APP_CLIENT_EXTERNAL_CREDENTIAL_NAME ||
          'NEWSCHOOL@EXTERNAL',
        secret:
          process.env.VUE_APP_CLIENT_EXTERNAL_CREDENTIAL_SECRET ||
          'NEWSCHOOL@EXTERNALSECRET',
      },
    },
    dateEnd: process.env.OPENING_DATE || '25/01/2020',

    endpoints: {
      CERTIFICATES_ME: 'api/v2/course-taken/certificates/user/',
      RANKING: '/api/v1/gamefication/ranking',
      EVENT: '/api/v1/gamefication/start-event',
      NOTIFICATIONS: 'api/v1/notification',
      USER_ME: 'api/v1/user/me',
      SCHOOL: 'api/v1/school',
      CITY: 'api/v1/city',
      STATE: 'api/v1/state',
      LOGIN: 'oauth/token',
      SIGN_UP: 'api/v1/user/student',
      FORGOT_PASSWORD: 'api/v1/user/forgot-password',
      COURSE: '/api/v2/course',
      LESSON: '/api/v2/lesson',
      PARTS_BY_LESSON: '/api/v2/part/lesson',
      PART_BY_ID: '/api/v2/part',
      COMMENT: '/api/v1/comment/part',
      COURSE_BY_SLUG: '/api/v2/course/slug/',
      INIT_COURSE: 'api/v2/course-taken/start-course',
      LESSONS_BY_COURSE: '/api/v2/lesson/course/',
      ADVANCE_COURSE: '/api/v2/course-taken/advance-on-course',

      STATE_COURSE: 'api/v2/course-taken',
      CURRENT_STEP: '/api/v2/course-taken/current-step',

      MY_COURSES: 'api/v2/course-taken/user/',
      FACEBOOK_LOGIN: 'oauth/facebook/token',
      GOOGLE_LOGIN: 'oauth/google/token',

      TOTAL_USERS: '/api/v1/user',
      ACTIVE_USERS: '/api/v1/dashboard/user/quantity',
      COURSE_VIEWS: '/api/v1/dashboard/course/views',
      NS_CERTIFICATED_QUANTITY: '/api/v1/dashboard/course-taken/user/quantity',
      CERTIFICATE_QUANTITY: '/api/v1/dashboard/certificate/quantity',
    },
    endpointCertificateCourseTaken: {
      CERTIFICATES_COURSE_TAKEN_ME: 'api/v1/course-taken/certificate/user/',
      LOGIN: 'oauth/token',
    },
    GATOKEN: process.env.GA_TOKEN,
  },
  // uncomment for cordova release on android/ios
  mode: 'spa',
  // mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: 'en',
      style: 'overflow-y: auto',
    },
    titleTemplate:
      '%s | ' + 'New School | Formando os protagonistas da quebrada',
    meta: [
      {
        charset: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'title',
        name: 'title',
        content: 'New School | Formando os protagonistas da quebrada',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'Levamos educação de qualidade na linguagem da quebrada para as periferias do Brasil, através da tecnologia e da curadoria de conteúdos baseados nas habilidades do futuro.',
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          'pública, startup, escola, cursos, cursos online, educação, estudo, periferia, comunidade, edtech, quebrada, ensino',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Montserrat:400,600,900&display=swap',
      },
    ],
    script: [
      {
        type: 'text/javascript',
        src: 'cordova.js',
      },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff',
  },
  /*
   ** Global CSS
   */
  css: ['~/css/main.scss', '~/css/animation.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/notifier.js',
    '~/plugins/pusher.js',
    '~/plugins/cordova.client.js',
    '~/plugins/admin-components.js',
    { src: '~/plugins/infinite-scroll.js', mode: 'client' },
    { src: '~/plugins/ga.js', mode: 'client' },
    { src: '~/plugins/redirect', mode: 'client' },
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
    '@nuxtjs/router-extras',

    [
      '@nuxtjs/router-extras',
      {
        /* module options */
      },
    ],
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/proxy',
    'nuxt-i18n',
    '@nuxtjs/auth',
  ],
  i18n: {
    locales: [
      {
        code: 'en',
        file: 'en-US.js',
      },
      {
        code: 'pt',
        file: 'pt-BR.js',
      },
    ],
    strategy: 'no_prefix',
    defaultLocale: 'pt',
    lazy: true,
    langDir: 'lang/',
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    proxy: true,
  },
  proxy: {
    '/api': 'http://localhost:3001',
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: '#6600cc',
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
        light: {
          primary: '#6600cc',
        },
      },
    },
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    publicPath: '/nuxtfiles/',
    extend(config, ctx) {},
  },

  auth: {
    strategies: {
      facebook: {
        client_id: process.env.FACEBOOK_ID || '384298599359690',
        userinfo_endpoint:
          'https://graph.facebook.com/v2.12/me?fields=about,name,picture{url},email,birthday',
        scope: ['public_profile', 'email'],
      },
      google: {
        client_id:
          process.env.GOOGLE_ID ||
          '603764452531-cbbqg8im5p4hr0et4vqurcs4lbce9jrk.apps.googleusercontent.com',
      },
    },
  },
};
