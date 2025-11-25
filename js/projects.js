const projects = [
  {
    title: "Apple",
    image: "assets/apple.png",
    type: "work",
    links: [
      // No links!
    ],
    description: [
      "As part of the Plaftorm Architecture group, I work on high performance SoC and GPU simulation models. Can't say any more than that!",
    ]
  },
  {
    title: "Pytorch TorchElastic",
    image: "assets/torchelastic.png",
    type: "work",
    links: [
      { text: "Pytorch Docs", url: "https://pytorch.org/docs/stable/distributed.elastic.html" }
    ],
    description: [
      "During the summer of 2021, I interned at Facebook in the Pytorch R2P (Research to Production) team, introducing improvements to the Torch Distributed Elastic (TorchElastic) framework. It involved contributing to both open-source and internal code bases in Python and C++.",
      "Specifically, I implemented a primary address selection protocol that can be used to automatically select a master endpoint from a set of distributed nodes, which in turn performs synchronization during distributed machine learning jobs. This enabled direct replacement of a previous higher-overhead system that was used in thousands of ML jobs a day. I also added support for a file-based backend for distributed node synchronization and built internal logging dashboards for the new sycnhronization mechanisms."
    ]
  },
  {
    title: "Cloudberry",
    image: "assets/cloudberry_re.png",
    type: "work",
    links: [
      { text: "Git Repo", url: "https://github.com/googleinterns/step62-2020" }
    ],
    description: [
      "In summer 2020, I interned at Google in the Google Shopping Team and developed Cloudberry. Cloudberry is a cataloging platform that connects customers to local businesses impacted by Covid-19.",
      "Powered by Google Vision AI, it aims to simplify the cataloging process of products. A business owner simply uploads a picture of their product and Cloudberry automatically tags and classifies it.",
      "The computer vision techniques used include OCR, label and object detection, color recognition, and product image search. The project included full stack development with a Java Servlet backend, HTML/CSS/JS for the front end, and utilized several Google APIs for user authentication, data storage, maps, and more."
    ]
  },
  {
    title: "OS Kernel",
    image: "assets/os.png",
    type: "project",
    links: [
      { text: "15-410 Website", url: "https://www.cs.cmu.edu/~410/" }
    ],
    description: [
      "For my operating systems class (15-410), I designed and implemented a Unix-like operating system kernel, thread library, device drivers, and hypervisor. Core features include scheduling, virtual memory, preemptive multitasking, thread/process management, program loading, and paravirtualization. This was definitely my most difficult and tedious class taken at CMU, but I definitely learned a lot."
    ]
  },
  {
    title: "Scotty3D",
    image: "assets/scotty.png",
    type: "project",
    links: [
      { text: "Project Website", url: "ray_tracer.html" }
    ],
    description: [
      "For my computer graphics class, I implemented core components of a graphics software package called <a href=\"https://cmu-graphics.github.io/Scotty3D/\">Scotty3D</a>. These components include rasterization, interactive mesh editing, realistic path tracing, and dynamic animation. It was written in C++. This thumbnail image was generated via the software package with ray tracing!",
      "As part of the final project for my parallel computer architecture class, I accelerated the path/ray tracing with both GPU and CPU multithreading. The GPU accelerated ray tracer achieved up to 600x speedup in some scenarios over the sequential code."
    ]
  },
  {
    title: "Brain Computer Interface",
    image: "assets/bci_re.png",
    type: "work",
    links: [
      { text: "Lab website", url: "https://www.cmu.edu/bme/helab/" }
    ],
    description: [
      "I pursued undergraduate research at the Biomedical Functional Imaging and Neuroengineering Laboratory at Carnegie Mellon University, working on a team that deals with brain computer interfaces (BCIs), specifically using EEG data to detect and utilize motor-related brain signals to move robotic arms.",
      "My main project at the lab was developing a custom MATLAB software package to stream and process EEG data taken from EEG hardware (amplifiers, caps) to perform BCI tasks."
    ]
  },
  {
    title: "Tartan AUV",
    image: "assets/sub_re.png",
    type: "project",
    links: [
      { text: "TAUV website", url: "https://tartanauv.com/team/" }
    ],
    description: [
      "I'm part of the Tartan Autonomous Underwater Vehicle team at the robotics club at CMU. We particpate in the annual RoboSub competition, where teams build autonmous submarines that perform a variety of tasks such as passing through gates, hitting target buoys, and dropping markers.",
      "I've had several roles on the team, including being the testing lead to get the sub ready electronically for testing (building/soldering) and collecting training data for our deep learning object detection model to detect buoys and gates. This past year I also worked a bit on software for trajectory/path planning as well as mission planning with Python and Robot Operating System."
    ]
  },
  {
    title: "Hide.me",
    image: "assets/hideme_re.png",
    type: "project",
    links: [
      { text: "Git Repo", url: "https://github.com/SirLegolot/hide.me" }
    ],
    description: [
      "For my final project for an introductory CS course, I created a messaging application that allows users to secretly encode information such as texts and images within other images without visibly altering the host image, using a process called steganography.",
      "Created with Python sockets and image processing libraries, Hide.me allows a user to send an image that has secret information encoded within and encrypt it with a password. On the other end, the recepient can enter a password to decrypt and extract the secret contents within the image."
    ]
  },
  {
    title: "We Have A Car",
    image: "assets/whac_re.jpg",
    type: "project",
    links: [
      { text: "Build18 website", url: "https://www.build18.org/garage/project/548/" }
    ],
    description: [
      "For the 2020 Build18 competition at CMU, I was part of a team of 5 that built a mini autonomous car that used simultaneous localization and mapping (SLAM) to map and travel through unknown environements.",
      "The car was built with standard VEX robotics parts, and it used a Zed mini stereo camera, Rplidar 360 degree lidar, and a Jetson Xavier for compute power. I primarily worked on construction of the vehicle and lidar, working with Hector SLAM, a ROS package that performs SLAM with lidar."
    ]
  },
  {
    title: "Post-Malautomated",
    image: "assets/cmupsbb_re.png",
    type: "project",
    links: [
      { text: "Git repo", url: "https://github.com/SirLegolot/CMUPSbb" }
    ],
    description: [
      "For the 2019 Build18 competition at CMU, I worked on a system to improve the package sorting and delivery process here at CMU.",
      "It uses a combination of computer vision with OpenCV, SQL, and LED indicators so that employees can scan a barcode, have it automatically entered in database, and light up an LED to the given postal bin to put in. When students come to pick up a package, they add themselves to a queue, and the bins will light up so the emplyee can go and pick it up for them."
    ]
  },
  {
    title: "Lab.me",
    image: "assets/labme_re.jpg",
    type: "hackathon",
    links: [
      { text: "Devpost", url: "https://devpost.com/software/lab-me-xghsku" }
    ],
    description: [
      "For TartanHacks 2019, I worked on an augmented reality chemistry lab with Unity and the Vuforia Engine, aimed towards providing science lab education to the underprivileged.",
      "The app uses a smartphone camera to transform normal every day objects into scientific equipment, including bunsen burners and beakers, allowing students to perform bunsen burner flame tests in AR. This project was a finalist for the hackathon and it won the Facebook Social Impact Award."
    ]
  },
  {
    title: "Connect.us",
    image: "assets/connect_us.jpg",
    type: "hackathon",
    links: [
      { text: "Devpost", url: "https://devpost.com/software/connect-us" }
    ],
    description: [
      "For MHacks 2020, I worked on a web application that allows users to walk and talk in a virtual environment, just like they would in real life if it weren't for quarantine. The main feature was proximity-based video calling, where you can walk up to other people in the virtual world and start chatting and video calling them on the same page. This project won the Facebook award for \"Best Hack that Brings the World Closer Together\" and was a Wolfram Top 30 Hack.",
      "The app uses WebRTC for video/audio calling and three.js for to render the 3D world and characters on the webpage. We created the character models and environments using voxel editors called Goxel and MagicaVoxel. To run the platform and its various aspects, there are 4 servers which ran on AWS: A flask web server served the app itself, a game server that handled all 3D environment and character interaction, a signal server that handled connections of user for video calling, and a TURN server that served the video/audio to all the users."
    ]
  },
  {
    title: "Mula.",
    image: "assets/mula_re.jpg",
    type: "hackathon",
    links: [
      { text: "Devpost", url: "https://devpost.com/software/mula" }
    ],
    description: [
      "Mula is an app that uses sentiment analysis of news articles to predict future stock prices with a score given by the app. The stack includes Flutter for the front end and Python Flask for the back end.",
      "Various stock and trading APIs were used to get stock price information and article summaries. This won Goldman Sachs Financial Hack award for PennApps 2019."
    ]
  },
  {
    title: "Build.me",
    image: "assets/buildme_re.jpg",
    type: "hackathon",
    links: [
      { text: "Devpost", url: "https://devpost.com/software/build-me" }
    ],
    description: [
      "As part of SteelHacks 2019, I developed Build.me, a mixed reality system that allows engineers and designers to build and create 3D models using the power of your own two hands.",
      "Built with Unity, Vuforia, and Leap Motion, Build.me is an artificial environment where users can effortlessly create, rotate, scale objects, and more with hand motions and voice commands. They can save and view their designs in augmented reality with the Vuforia engine as well. Our team won 4th place overall with this project."
    ]
  },
  {
    title: "Noah's Ark",
    image: "assets/noah_small.png",
    type: "hackathon",
    links: [
      { text: "Devpost", url: "https://devpost.com/software/noah-s-ark-od186x" }
    ],
    description: [
      "As part of Penn Apps 2021, my team and I developed Noah's Ark. It is a tool for homeowners and insurance folks that uses Deep Convolutional Autoencoders on hurricane flood image data to determine flooding risks of areas."
    ]
  },
  {
    title: "Monifi",
    image: "assets/monifi.jpg",
    type: "hackathon",
    links: [
      { text: "Devpost", url: "https://devpost.com/software/monet-jprtqk" }
    ],
    description: [
      "Developed during TreeHacks 2021, Monifi is a browser extension and background service that allows users to mine crypto currency (specifically Monero) in the background to support their favorite Youtubers. This way, users can support creators without having to watch pesky advertisements."
    ]
  },
  {
    title: "Med.me",
    image: "assets/medme_re.jpg",
    type: "hackathon",
    links: [
      { text: "Devpost", url: "https://devpost.com/software/med-me" }
    ],
    description: [
      "For Hack This. Help Kids. 2018, Med.me sought to simplify the patient medical history process by directly connecting pediatric patients to doctors through a simple app that works on a QR code system. This aims to solve the problems of having to fill out form after form every time you visit the doctor's office.",
      "Patients can enter their medical history in the application which would be securely stored in a medical database, and doctors can simply scan the QR code in the patients app to automatically enter that into that respective clinic or hospitals system. The app was developed Python Flask, Google cloud, and React Native, and was a finalist for the hackathon."
    ]
  },
  {
    title: "TrailTrak",
    image: "assets/trailtrak_re.jpg",
    type: "hackathon",
    links: [
      { text: "Devpost", url: "https://devpost.com/software/trailtrak" }
    ],
    description: [
      "This was my first hackathon! It was my first time with android app development. Trail Trak is an app where hikers and runners can alert each other about trail conditions and hazards.",
      "Built with Android Studio and the Google Maps API, Trail Trak allows users to pin locations on a map with a the condition of a trail, which can then be accessed later on for use by other people. This project was second place for the Bloomberg Social Good award."
    ]
  },
  {
    title: "Twitter Mood Analyzer",
    image: "assets/twitter_re.jpg",
    type: "hackathon",
    links: [
      { text: "Git Repo", url: "https://github.com/SirLegolot/Twitter-Mood-Analyzer" }
    ],
    description: [
      "For Hack 112, a hackathon for my intro to CS class, I developed an app that uses the IBM Watson sentiment analysis API and the Twitter API to determine the moods of users. It was created all with Python and provides a simple visualization of the moods of the user."
    ]
  },
  {
    title: "LegoLight",
    image: "assets/legolight_re.jpg",
    type: "project",
    links: [
      { text: "Presentation", url: "https://docs.google.com/presentation/d/1PucvgpA-fuE0kvHsErG5UWR27jBdCbjhKru-MmvsyFc" }
    ],
    description: [
      "Legolight is a cheap, easy-to-build, and mass-produceable lantern that aims to solve the need of cheap and efficient lighting in low income areas and refugee camps.",
      "It consists of a set of simple lasercut acrylic pieces and minimal electronics (LEDS and circuitboard) that can easily snap together. It can be constructed within 5 minutes and when mass produced can cost around $2 in parts. It functions as both a flashlight and as a lantern with a sliding mechanism."
    ]
  },
  {
    title: "Asteroid Orbits",
    image: "assets/asteroid.jpg",
    type: "project",
    links: [
      { text: "SSP Website", url: "https://summerscience.org/" },
      { text: "Git Repo", url: "https://github.com/SirLegolot/SSP" }
    ],
    description: [
      "In the summer of 2017, I attended the Summer Science Program, where I learned the theoretical and experimental methods in astrophysics to determine the orbit of the near-earth Asteroid called Jason (1984 KB).",
      "With a group of 3, I performed regular observations of the night sky and took pictures with a CCD telescope. Python was used to reduce the data and precisely measure the position of the asteroid with respect to the background stars, and its movement over time was transformed into orbital elements. We also performed differential corrections to further refine the properties of the asteroid's orbit. Finally, we predicted its orbit millions of years into the future with an N-body integrator. Thankfully it looks like it won't ever hit Earth!"
    ]
  },
  {
    title: "196 Algorithm Visualizer",
    image: "assets/wolfram.png",
    type: "project",
    links: [
      { text: "Wolfram Demo", url: "https://demonstrations.wolfram.com/The196AlgorithmReorderAndAddAlgorithmAndRATSSequenceInDiffer/" },
      { text: "Git Repo", url: "https://github.com/SirLegolot/WolframCamp" }
    ],
    description: [
      "As part of the Wolfram Mathematica Summer Camp in 2016, I made a visualizer of a couple of algorithms: 196 algorithm, Reorder-and-Add algorithm and the RATS sequence. The visualizer works by displaying each number in the sequences as shaded blocks of various colors, depending on which base the numbers are represented in. When each line of shaded blocks are placed on top of each other, sometimes you can observe cellular automata-like behavior."
    ]
  }
];