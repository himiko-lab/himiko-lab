export default {
  common: {
    skip: 'Skip to content',
    newTab: '(opens in a new tab)',
    morvynLogoAlt: 'Morvyn logo',
    himikoLogoTitle: 'Himiko Lab logo',
  },

  nav: {
    label: 'Main navigation',
    home: 'Home',
    morvyn: 'Morvyn',
    about: 'About',
    contact: 'Contact',
    morvynSite: 'Morvyn site',
    download: 'Download',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    breadcrumb: 'Breadcrumb',
  },

  lang: {
    current: 'EN',
    other: 'ID',
    switchLabel: 'Read in Indonesian',
  },

  // Titles and descriptions for <head>. Used by src/seo.js.
  meta: {
    home: {
      title: 'Himiko Lab - Digital App Studio, Makers of Morvyn',
      description:
        'Himiko Lab is the digital app studio behind Morvyn, an Android app that brings notes, finances, agenda, and other everyday needs into one place.',
    },
    morvyn: {
      title: 'Morvyn - An Everyday App by Himiko Lab',
      description:
        'An overview of Morvyn, the Android app made by Himiko Lab: eight everyday menus, how your data is handled, and a link to its official site.',
    },
    about: {
      title: 'About Himiko Lab - The Studio Behind Morvyn',
      description:
        'Get to know Himiko Lab: a digital app studio building software for everyday life, how it thinks, and the meaning behind its logo.',
    },
    notFound: {
      title: 'Page not found - Himiko Lab',
      description: 'The address you opened does not exist on the Himiko Lab site.',
    },
    organization: 'A digital app studio building everyday apps, and the developer of Morvyn.',
    app: 'An Android app by Himiko Lab that brings together notes, finances, agenda, habits, weather, calendar, news, and earthquake information.',
    ogImageAlt: 'Himiko Lab logo and name',
  },

  hero: {
    eyebrow: 'Digital App Studio',
    title: 'Everyday apps that make life feel lighter',
    subtitle:
      'Himiko Lab is the digital app studio behind Morvyn, an Android app that brings notes, finances, agenda, and other everyday needs into one place.',
    ctaPrimary: 'See Morvyn',
    ctaSecondary: 'About Himiko Lab',
  },

  // Product data shared by the home page and /en/morvyn/.
  // Source: morvyn.himikolab.my.id and its privacy policy (checked 2026-10-14).
  morvyn: {
    name: 'Morvyn',
    eyebrow: 'Our Product',
    tagline: 'An everyday app by Himiko Lab',
    description:
      'Morvyn brings eight everyday needs, usually scattered across many apps, into one calm place. A single note can link straight to your agenda, finances, and habits.',
    tags: ['Android', 'Indonesian and English', 'No ads'],
    featuresLabel: 'Eight menus inside',
    features: [
      {
        title: 'Notes',
        short: 'Text, checklists, images, handwritten sketches, and PDF attachments in one note.',
        long: 'Write plain notes, bullet lists, or checklists. A note can hold images, handwritten sketches, maths formulas, and PDF attachments, and documents can be scanned into PDFs.',
      },
      {
        title: 'Finance',
        short: 'Record income and expenses across multiple wallets, then see the pattern in charts.',
        long: 'Record income and expenses across multiple wallets, move balances between them, see the pattern in charts, and check currency exchange rates.',
      },
      {
        title: 'Agenda',
        short: 'Alarms, event schedules, and a task list in one place.',
        long: 'Alarms with repeat patterns, event schedules with reminders, and tasks with due dates, all managed from one place.',
      },
      {
        title: 'News',
        short: 'Headlines from 29 local and international outlets, sorted into categories.',
        long: 'Twenty-nine local and international outlets pulled into one feed and sorted into categories such as business, sports, and tech.',
      },
      {
        title: 'Habits',
        short: 'Set a target, then follow your streak with reminders.',
        long: 'Set a daily target, or one for chosen days only. Morvyn reminds you and counts the streak.',
      },
      {
        title: 'Weather',
        short: 'Hourly and multi-day forecasts based on your device location.',
        long: 'Hourly and multi-day forecasts based on your device location, shown alongside the agenda for that day.',
      },
      {
        title: 'Calendar',
        short: 'A full month at a glance, with tasks and events on their dates.',
        long: 'A month view that already carries your tasks and events on their dates, wired directly into Agenda.',
      },
      {
        title: 'Earthquake',
        short: 'The latest earthquake information from BMKG or USGS. Not an early warning.',
        long: 'The latest earthquake information, from BMKG if you are in Indonesia and from the U.S. Geological Survey elsewhere. It is information, not an early warning.',
      },
    ],
    ctaDetails: 'More about Morvyn',
    ctaWebsite: 'Official Morvyn site',
    ctaPrivacy: 'Read the Morvyn Privacy Policy',
    // Only one is shown, depending on PLAY_STORE_LIVE in src/data/links.js.
    status: {
      soon: 'Coming soon to Google Play',
      live: 'Get it on Google Play',
    },
  },

  principles: {
    eyebrow: 'Principles',
    title: 'What we hold to while building',
    items: [
      {
        title: 'Simple first',
        body: 'Every feature has to earn the space it takes up. If it does not, we leave it out.',
      },
      {
        title: 'Light and fast',
        body: 'A slow app goes unused. We treat speed as a core feature, not a finishing touch.',
      },
      {
        title: 'Your content stays on your device',
        body: 'Notes, finances, agenda, and habits in Morvyn are stored on your device, not on our servers. We explain usage statistics and crash reports openly.',
        linkLabel: 'See the details',
      },
      {
        title: 'Considered down to the detail',
        body: 'Spacing, motion, and wording are tuned so the app stays calm even after hours of use.',
      },
    ],
  },

  // Summary on the home page. The full version lives in aboutPage.
  about: {
    eyebrow: 'About Us',
    title: 'We build apps for everyday life',
    paragraphs: [
      'Himiko Lab is a digital app studio. We make software for daily matters: taking notes, managing time, handling money, and keeping good habits.',
      'We believe technology should bring calm, not complication. Morvyn is the app we built on that belief.',
    ],
    logoNote:
      'Our logo draws on </>, the symbol familiar to anyone who writes code: two identical shapes form the angle brackets, and the gap between them becomes the slash.',
    cta: 'More about us',
  },

  aboutPage: {
    eyebrow: 'About',
    title: 'About Himiko Lab',
    lead: 'Himiko Lab is a digital app studio and the developer of Morvyn. We make software for everyday life.',
    story: {
      eyebrow: 'How We Think',
      title: 'Technology should bring calm',
      sloganLabel: 'Our Slogan',
      paragraphs: [
        'We make software that helps with daily matters: taking notes, managing time, handling money, and keeping good habits.',
        'We believe technology should bring calm, not complication. So every product starts from a simple question: what do people actually need, and what can be taken away?',
        'The result is software that stays compact, reads clearly, and works quietly in the background, so you have more time for what genuinely matters.',
      ],
    },
    product: {
      eyebrow: 'What We Make',
      title: 'Morvyn',
      body: 'Morvyn is an Android app by Himiko Lab. It brings notes, finances, agenda, habits, weather, calendar, news, and earthquake information into one place.',
    },
  },

  logoMeaning: {
    eyebrow: 'Identity',
    title: 'The meaning behind the logo',
    intro:
      'The Himiko Lab logo draws on </>, the symbol every person who writes code knows.',
    steps: [
      {
        symbol: '<',
        title: 'Left half',
        body: 'The first shape opens the angle bracket, the start of a line of code.',
      },
      {
        symbol: '/',
        title: 'The gap between',
        body: 'The diagonal negative space between the two shapes forms the slash.',
      },
      {
        symbol: '>',
        title: 'Right half',
        body: 'The same shape, mirrored, closes the bracket and completes the symbol.',
      },
    ],
    conclusion:
      'Together they form </>, a reminder that everything we make begins as lines of code.',
  },

  morvynPage: {
    eyebrow: 'A Himiko Lab Product',
    title: 'Morvyn, one app for your everyday needs',
    lead: 'Morvyn is an Android app made by Himiko Lab that brings together notes, finances, agenda, habits, weather, calendar, news, and earthquake information.',
    factsLabel: 'At a glance',
    facts: [
      { value: '8', label: 'menus in a single app' },
      { value: '29', label: 'local and international news outlets' },
      { value: '2', label: 'languages: Indonesian and English' },
      { value: 'Android', label: 'not yet available for iPhone' },
    ],
    features: {
      eyebrow: 'Inside the App',
      title: 'Eight menus that connect to each other',
      subtitle: 'Each menu works on its own. You do not have to use them all.',
    },
    connected: {
      eyebrow: 'The Difference',
      title: 'Notes that know what your day looks like',
      body: 'One note can link a task in Agenda, an expense in Finance, and a target in Habits. Open the note and its context opens with it.',
      widgets: 'Home screen widgets are available for Notes, Finance, Agenda, and Habits.',
    },
    privacy: {
      eyebrow: 'Data and Privacy',
      title: 'What is stored, and what is sent',
      subtitle:
        'A summary of the Morvyn Privacy Policy. We split it into four parts so it is clear what stays on your device and what does not.',
      items: [
        {
          title: 'App content',
          body: 'Notes, finances, agenda, and habits are stored on your device. Morvyn has no server of its own, so Himiko Lab cannot see that content.',
        },
        {
          title: 'Account and backup, optional',
          body: 'Signing in with Google, backing up to Google Drive, and syncing with Google Calendar are all optional. If you sign in, a sign-in record that includes your email address, display name, and profile photo URL is kept in Firebase Authentication, and you can delete it yourself from inside the app.',
        },
        {
          title: 'Usage statistics',
          body: 'Morvyn uses Firebase Analytics to learn which menus are opened. These statistics are always on and cannot be turned off inside the app. What Morvyn deliberately sends is only the menu name, never the content of your notes, finances, agenda, habits, or your location. The Google SDK also collects technical data automatically.',
        },
        {
          title: 'Crash reports',
          body: 'Firebase Crashlytics sends a report when the app fails, containing the error trace and technical device data. These reports are also always on.',
        },
      ],
      note: 'Morvyn carries no ads, and no data is sold. This summary does not replace the full privacy policy.',
    },
    availability: {
      eyebrow: 'Availability',
      title: 'For Android, through Google Play',
      soon: 'Morvyn is being prepared for release on Google Play and cannot be downloaded yet. It is Android only and not yet available for iPhone.',
      live: 'Morvyn is free on Google Play. It is Android only and not yet available for iPhone.',
      websiteNote: 'Details on each menu, the FAQ, and the terms of service are on the official Morvyn site.',
    },
  },

  tech: {
    eyebrow: 'How We Work',
    title: 'How we build',
    subtitle: 'Three stages we keep cycling through.',
    steps: [
      {
        title: 'Design',
        body: 'We start from a real problem, not a feature list. Every screen is tested on paper before it becomes code.',
      },
      {
        title: 'Build',
        body: 'The first version is kept small and quick, so it can be genuinely tried as early as possible.',
      },
      {
        title: 'Refine',
        body: 'We use it ourselves daily, listen to feedback, then cut whatever turns out to go unused.',
      },
    ],
  },

  footer: {
    title: 'Let us connect',
    subtitle: 'Have a question, a suggestion, or just want to say hello? We would love to hear it.',
    socialLabel: 'Email and social media',
    linksLabel: 'Site links',
    groups: {
      studio: 'Himiko Lab',
      product: 'Morvyn',
    },
    morvynSummary: 'Morvyn overview',
    morvynPrivacy: 'Morvyn Privacy Policy',
    analyticsNote: 'This site uses Google Analytics for visit statistics.',
    copyright: '© 2026 Himiko Lab. All rights reserved.',
  },

  notFound: {
    eyebrow: 'Error 404',
    title: 'Page not found',
    body: 'The address you opened does not exist or has been moved.',
    cta: 'Back to home',
    otherLang: 'Halaman tidak ditemukan.',
    otherLangCta: 'Buka beranda bahasa Indonesia',
  },
};
