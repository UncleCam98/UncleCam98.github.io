export const projects = [
  {
    title: 'Under The Sea',
    kind: 'Course DT8007 - Design of Embedded and Intelligent Systems',
    active: '2025',
    text: 'A concept for a conversion-focused landing page where copy, hierarchy, and call-to-actions guide the visitor toward contact.',
    stack: ['Computer Vision', 'Embedded', 'Robotics', 'HTTP', 'TCP/IP'],
    image: './assets/robot.gif',
    repo: 'https://github.com/UncleCam98/Under-the-sea'
  },
  {
    title: 'Grounding Text-Generated Human Motion into Executable Avatar Actions',
    kind: 'Master Thesis',
    active: '2026',
    text: 'A project focused on translating text-generated human motion into executable actions for an avatar-based system.',
    stack: ['LLM', 'Machine Learning', 'Computer Vision', 'XR', 'C#', 'Python', 'TCP/IP'],
    image: './assets/avatar.gif',
    actionLinks: [
      { label: 'DiVA' },
      { label: 'XRSalento' }
    ]
  },
  {
    title: 'Smart Greenhouse',
    kind: 'Course DT4012 - Computer Systems Engineering I',
    active: '2022',
    text: 'Built an embedded greenhouse control system to monitor climate conditions, log temperature data, and manage light exposure for plant growth.',
    bullets: [
      'Controlled temperature and light intensity using an Arduino Due with a temperature sensor, photosensor, RC servo motor, LEDs, keypad, display, and switch interrupts.',
      'Implemented calendar and timestamp support together with minute-based temperature logging over 7 days using a Linked List with overwrite handling when memory was full.',
      'Tracked sunlight and regulated mirrors, shades, and LED lighting to maintain a 16-hour light and 8-hour darkness cycle for healthy plant growth.'
    ],
    stack: ['Embedded'],
    repo: 'https://github.com/UncleCam98/Green_House_Project'
  },
  {
    title: 'Improving audio intelligibility in intercom devices',
    kind: 'Bachelor Thesis',
    active: '2024',
    text: 'A case study structure with a clear problem statement, process, and outcome so your work is easier to understand.',
    stack: ['DSP', 'Matlab', 'C', 'Embedded'],
    image: './assets/intercom.png',
    repo: 'http://www.diva-portal.org/smash/record.jsf?pid=diva2:1870043',
    repoLabel: 'DiVA'
  }
];