export const projects = [
  {
    title: 'Under The Sea',
    kind: 'Course DT8007 - Design of Embedded and Intelligent Systems',
    active: '2025',
    text: 'Developed as part of the Design of Embedded and Intelligent Systems course, this work focused on building a distributed embedded intelligent system for gesture-driven robot interaction. The system controlled two robotic platforms: a helium-balloon fish and a car-like crab robot. Human input was captured through real-time hand gesture recognition using an overhead camera, where palm and fist gestures were translated into attraction and avoidance behaviors. The crab robot used a calibrated grid-based arena representation and A-star pathfinding to navigate toward or away from gesture-defined targets, while the fish robot responded through state-based motion behavior.',
    stack: ['Computer Vision', 'Embedded', 'Robotics', 'HTTP', 'TCP/IP'],
    image: './assets/robot.mp4',
    repo: 'https://github.com/UncleCam98/Under-the-sea'
  },
  {
    title: 'Grounding Text-Generated Human Motion into Executable Avatar Actions',
    kind: 'Master Thesis',
    active: '2026',
    text: 'This project focuses on the development of a Unity-based XR/AI pipeline that enables a virtual avatar to interpret objects in a 3D scene, select an appropriate interactable object, and generate executable motion. The system combines LLM-based intent reasoning, 3D affordance detection, text-to-motion generation, and avatar retargeting in Unity.',
    stack: ['LLM', 'Machine Learning', 'Computer Vision', 'XR', 'C#', 'Python', 'TCP/IP'],
    image: './assets/avatar.gif',
    actionLinks: [
      { label: 'View Paper' },
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
    text: `Imagine trying to speak with someone through an intercom while wind, traffic, and background noise make the conversation difficult to understand. This project focused on improving speech intelligibility in intercom devices used in noisy and dynamic environments.

The work involved implementing an adaptive FIR filter based on the Normalized Least Mean Square algorithm in C, with the goal of developing a responsive and memory-efficient solution capable of reducing background noise while preserving speech clarity. A Raspberry Pi-based prototype was developed to simulate an intercom system.`,
    stack: ['DSP', 'Matlab', 'C', 'Embedded'],
    image: './assets/intercom.png',
    repo: 'http://www.diva-portal.org/smash/record.jsf?pid=diva2:1870043',
    repoLabel: 'View Paper'
  }
];