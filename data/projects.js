export const projects = [
  {
    title: 'Under The Sea',
    kind: 'Course DT8007 - Design of Embedded and Intelligent Systems',
    active: '2025',
    text: 'Developed as part of the Design of Embedded and Intelligent Systems course, this work focused on building a distributed embedded intelligent system for gesture-driven robot interaction. The system controlled two robotic platforms: a helium-balloon fish and a car-like crab robot. Human input was captured through real-time hand gesture recognition using an overhead camera, where palm and fist gestures were translated into attraction and avoidance behaviors. The crab robot used a calibrated grid-based arena representation and A-star pathfinding to navigate toward or away from gesture-defined targets, while the fish robot responded through state-based motion behavior.',
    stack: ['Computer Vision', 'Embedded', 'Robotics'],
    image: './assets/robot.mp4',
    repo: 'https://github.com/UncleCam98/Under-the-sea'
  },
  {
    title: 'Grounding Text-Generated Human Motion into Executable Avatar Actions',
    kind: 'Master Thesis',
    active: '2026',
    text: 'This project focuses on the development of a Unity-based XR/AI pipeline that enables a virtual avatar to interpret objects in a 3D scene, select an appropriate interactable object, and generate executable motion. The system combines Largue Language Model-based intent reasoning, 3D affordance detection, text-to-motion generation, and avatar retargeting in Unity.\n\nThe pipeline was designed as a modular frontend-backend system, where Unity handled scene simulation, object data extraction, avatar state capture, and animation playback, while a backend server processed semantic reasoning, spatial affordance grounding, and motion generation.',
    stack: ['Largue Language Model', 'Machine Learning', 'Computer Vision', 'XR'],
    image: './assets/avatar.gif',
    actionLinks: [
      { label: 'View Paper' },
      { label: 'View Publication' }
    ]
  },
  {
    title: 'Smart Greenhouse',
    kind: 'Course DT4012 - Computer Systems Engineering I',
    active: '2022',
    text: 'This project focused on developing an embedded smart greenhouse system using C, IAR Embedded Workbench, and a SAM3X8E ARM-based platform. The system monitored temperature and light intensity, logged climate data over time, and presented recorded values on an LCD display.\n\nThe implementation combined several hardware components, including a temperature sensor, photoresistors, keypad, LCD display, LEDs, and an RC servo motor. The servo motor was used to simulate a motorized mirror that adjusts toward the detected light source, while LEDs represented both a sunlight compensation system and a temperature alarm.',
    stack: ['Embedded'],
    image: './assets/dst1.jpg',
    repo: 'https://github.com/UncleCam98/Green_House_Project'
  },
  {
    title: 'Improving audio intelligibility in intercom devices',
    kind: 'Bachelor Thesis',
    active: '2024',
    text: `Imagine trying to speak with someone through an intercom while wind, traffic, and background noise make the conversation difficult to understand. This project focused on improving speech intelligibility in intercom devices used in noisy and dynamic environments.

The work involved implementing an adaptive FIR filter based on the Normalized Least Mean Square algorithm in C, with the goal of developing a responsive and memory-efficient solution capable of reducing background noise while preserving speech clarity. A Raspberry Pi-based prototype was developed to simulate an intercom system.`,
    stack: ['DSP', 'Embedded'],
    image: './assets/intercom.png',
    repo: 'http://www.diva-portal.org/smash/record.jsf?pid=diva2:1870043',
    repoLabel: 'View Paper'
  }
];