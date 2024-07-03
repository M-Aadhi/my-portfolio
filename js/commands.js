const TWITTER = "https://medium.com/@2004.vimald";
const LINKEDIN = "https://www.linkedin.com/in/vimald2004/";
const INSTAGRAM = "https://www.instagram.com/vimal_2_0_0_4/";
const GITHUB = "https://github.com/Vimal007Vimal";
const EMAIL = '2004.vimald@gmail.com';
const USERNAME = "Vimal D";

//const ABOUT = [
//"As a B.Sc. Computer Science student deeply passionate about Cloud Technology and Information Security, I bring a blend of academic knowledge and practical experience to the table.",
//"With a robust foundation in programming languages and a track record of successfully completing projects and certifications, I am dedicated to embracing continuous learning and evolution in the ever-changing landscape of technology."
//];


const ABOUT = [
  "As a B.Sc. Computer Science student deeply passionate about Cloud Technology and Information ",
  "Security, I bring a blend of academic knowledge and practical experience to the table. With a robust ",
  "foundation in programming languages and a track record of successfully completing projects and",
  "certifications, I am dedicated to embracing continuous learning and evolution in the ever-changing",
  "landscape of technology.",
];




SOCIAL = [
  "<br>",
  'Medium       <a href="' + TWITTER + '" target="_blank">Medium/' + USERNAME + '</a>',
  'linkedin       <a href="' + LINKEDIN + '" target="_blank">linkedin/' + USERNAME + "</a>",
  'instagram      <a href="' + INSTAGRAM + '" target="_blank">instagram/' + USERNAME + '</a>',
  'github         <a href="' + GITHUB + '" target="_blank">github/' + USERNAME + "</a>",
  "<br>"
];


PROJECTS = [
  "<br>",
  "Here are some of my projects:",
  "<br>",
  "<strong> Malicious-URL-Detection <strong>",
  "Malicious-URL-Detection project employs machine learning to pinpoint phishing URLs with 97.4% accuracy, ",
  "leveraging HTTPS and website traffic as critical indicators",
  "- Flask",
  "- Numpy",
  "- Pandas",
  "<a href=https://github.com/Vimal007Vimal> GitHub link",
  "<br>",
  "<strong> - Deploying a Scalable Two-Tier Application on AWS <strong>",
  "Set up a scalable two-tier application on AWS. This involves creating a VPC, subnets, security groups, an RDS",
  "database, EC2 instances, an Auto Scaling group, and setting up monitoring and notifications with CloudWatch and",
  "SNS.",
  "- AWS",
  "- AWS - ASG",
  "- AWS - LB EC2",
  "- AWS - VPC",
  "<a href=https://github.com/Vimal007Vimal> GitHub link",
  "<br>",
  "<strong> - Ansible Configuration <strong>",
  "Deploy Apache Web-Server in Docker Container using Ansible-",
  "Playbook - for more deatils refer my blog.", 
  "Ansible",
  "Python",
  "Redhat Linux",
  "<a href=https://github.com/Vimal007Vimal> GitHub link",
  "<br>",
  "<strong>Check out some of my other projects",
  "<strong> in my </strong> <a class=\"command\" href=https://github.com/Vimal007Vimal> GitHub profile</a> <strong>",
  "<br>"

];

COMMAND_LIST = [
  "<br>",
  '<span class="command">about</span>          Learn more about me',
  '<span class="command">social</span>         Display social networks',
  '<span class="command">education</span>      Show my education',
  '<span class="command">gui</span>            Open my web GUI',
  '<span class="command">projects</span>       View some of my projects',
  '<span class="command">history</span>        Show command history',
  '<span class="command">email</span>          Feel free to reach out',
  '<span class="command">banner</span>         Display the header',
  '<span class="command">clear</span>          Clear terminal',
  '<span class="command">echo</span>           Print any give string',
  '<span class="command">ls</span>             List directory content',
  '<span class="command">cd &lt;directory&gt</span> Change directory',
  '<span class="command">help</span>           Display all commands',
  "<br>",
];

BANNER = [

  "⠀⠀⠀⠀⠀⢀⣤⠖⠒⠒⠒⢒⡒⠒⠒⠒⠒⠒⠲⠦⠤⢤⣤⣄⣀⠀⠀⠀⠀⠀",
  "⠀⠀⠀⠀⣠⠟⠀⢀⠠⣐⢭⡐⠂⠬⠭⡁⠐⠒⠀⠀⣀⣒⣒⠐⠈⠙⢦⣄⠀⠀",
  "⠀⠀⠀⣰⠏⠀⠐⠡⠪⠂⣁⣀⣀⣀⡀⠰⠀⠀⠀⢨⠂⠀⠀⠈⢢⠀⠀⢹⠀⠀",
  "⠀⣠⣾⠿⠤⣤⡀⠤⡢⡾⠿⠿⠿⣬⣉⣷⠀⠀⢀⣨⣶⣾⡿⠿⠆⠤⠤⠌⡳⣄",
  "⣰⢫⢁⡾⠋⢹⡙⠓⠦⠤⠴⠛⠀⠀⠈⠁⠀⠀⠀⢹⡀⠀⢠⣄⣤⢶⠲⠍⡎⣾",
  "⢿⠸⠸⡇⠶⢿⡙⠳⢦⣄⣀⠐⠒⠚⣞⢛⣀⡀⠀⠀⢹⣶⢄⡀⠀⣸⡄⠠⣃⣿",
  "⠈⢷⣕⠋⠀⠘⢿⡶⣤⣧⡉⠙⠓⣶⠿⣬⣀⣀⣐⡶⠋⣀⣀⣬⢾⢻⣿⠀⣼⠃",
  "⠀⠀⠙⣦⠀⠀⠈⠳⣄⡟⠛⠿⣶⣯⣤⣀⣀⣏⣉⣙⣏⣉⣸⣧⣼⣾⣿⠀⡇⠀",
  "⠀⠀⠀⠘⢧⡀⠀⠀⠈⠳⣄⡀⣸⠃⠉⠙⢻⠻⠿⢿⡿⢿⡿⢿⢿⣿⡟⠀⣧⠀",
  "⠀⠀⠀⠀⠀⠙⢦⣐⠤⣒⠄⣉⠓⠶⠤⣤⣼⣀⣀⣼⣀⣼⣥⠿⠾⠛⠁⠀⢿⠀",
  "⠀⠀⠀⠀⠀⠀⠀⠈⠙⠦⣭⣐⠉⠴⢂⡤⠀⠐⠀⠒⠒⢀⡀⠀⠄⠁⡠⠀⢸⠀",
  "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠲⢤⣀⣀⠉⠁⠀⠀⠀⠒⠒⠒⠉⠀⢀⡾⠀",
  "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠛⠲⠦⠤⠤⠤⠤⠴⠞⠋⠀⠀",
      
  ];
  

DIRECTORIES = [ 
"<br>",
"blog",
"music",
"videos",
"<br>"
]



EMAIL_INFO = [
  "                 ",
  "✉️ " + "<a href=mailto:" + EMAIL + ">" + EMAIL +"</a>",
  "                  "
]

SUDO = [
"                                                                ",
"Only Eric has <span class=\"command\">admin</span> privileges :(",
"                                                                "
]

EDUCATION_INFO = [
  "<br><strong>B.Sc. Computer Science with Cloud Technology and Information Security.</strong>",
  "Rathinam College Arts and Science  |  2022 - 2025",
  "                                                  ",
  "<strong>GHSC</strong>",
  "Big Bazaar school  |  2020 - 2022",
  "                                                  ",
  "<strong>SSLC</strong>",
  "Parli Higher Secondary School  |  2019 - 2020",
  "<br>"
]

MOBILE_EDUCATION_INFO = [
  "<br><strong>B.Sc. Computer Science with Cloud Technology and Information Security.</strong>",
  "Rathinam College Arts and Science  |  2022 - 2025",
  "<br>",
  "<strong>GHSC</strong>",
  "Big Bazaar school  |  2020 - 2022",
  "<br>",
  "<strong>SSLC</strong>",
  "Parli Higher Secondary School  |  2019 - 2020",
  "<br>"
]


TERMINAL_INFO = [
'Welcome to my interactive web terminal portafolio',
"For a list of available commands, type <span class=\"command\">'help'</span>."
]

TERMINAL_INFO_MOBILE = [
  'Welcome to my terminal web portafolio!',
  "                                 ",
  "For a list of available commands,", 
  "type <span class=\"command\">'help'</span>.",
  "                                          ",
  "Version (1.0)",
  "                                          "
  ]




MOBILE_BANNER = [

  "⠀⠀⠀⠀⠀⢀⣤⠖⠒⠒⠒⢒⡒⠒⠒⠒⠒⠒⠲⠦⠤⢤⣤⣄⣀⠀⠀⠀⠀⠀",
  "⠀⠀⠀⠀⣠⠟⠀⢀⠠⣐⢭⡐⠂⠬⠭⡁⠐⠒⠀⠀⣀⣒⣒⠐⠈⠙⢦⣄⠀⠀",
  "⠀⠀⠀⣰⠏⠀⠐⠡⠪⠂⣁⣀⣀⣀⡀⠰⠀⠀⠀⢨⠂⠀⠀⠈⢢⠀⠀⢹⠀⠀",
  "⠀⣠⣾⠿⠤⣤⡀⠤⡢⡾⠿⠿⠿⣬⣉⣷⠀⠀⢀⣨⣶⣾⡿⠿⠆⠤⠤⠌⡳⣄",
  "⣰⢫⢁⡾⠋⢹⡙⠓⠦⠤⠴⠛⠀⠀⠈⠁⠀⠀⠀⢹⡀⠀⢠⣄⣤⢶⠲⠍⡎⣾",
  "⢿⠸⠸⡇⠶⢿⡙⠳⢦⣄⣀⠐⠒⠚⣞⢛⣀⡀⠀⠀⢹⣶⢄⡀⠀⣸⡄⠠⣃⣿",
  "⠈⢷⣕⠋⠀⠘⢿⡶⣤⣧⡉⠙⠓⣶⠿⣬⣀⣀⣐⡶⠋⣀⣀⣬⢾⢻⣿⠀⣼⠃",
  "⠀⠀⠙⣦⠀⠀⠈⠳⣄⡟⠛⠿⣶⣯⣤⣀⣀⣏⣉⣙⣏⣉⣸⣧⣼⣾⣿⠀⡇⠀",
  "⠀⠀⠀⠘⢧⡀⠀⠀⠈⠳⣄⡀⣸⠃⠉⠙⢻⠻⠿⢿⡿⢿⡿⢿⢿⣿⡟⠀⣧⠀",
  "⠀⠀⠀⠀⠀⠙⢦⣐⠤⣒⠄⣉⠓⠶⠤⣤⣼⣀⣀⣼⣀⣼⣥⠿⠾⠛⠁⠀⢿⠀",
  "⠀⠀⠀⠀⠀⠀⠀⠈⠙⠦⣭⣐⠉⠴⢂⡤⠀⠐⠀⠒⠒⢀⡀⠀⠄⠁⡠⠀⢸⠀",
  "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠲⢤⣀⣀⠉⠁⠀⠀⠀⠒⠒⠒⠉⠀⢀⡾⠀",
  "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠛⠲⠦⠤⠤⠤⠤⠴⠞⠋⠀⠀",
      
  ];

