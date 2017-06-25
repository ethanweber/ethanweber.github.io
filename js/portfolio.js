

var portfolio_grid = document.getElementById("portfolio_grid_id");

var portfolio_models = document.getElementById("portfolio_models_id");

var index = 0;

$( document ).ready(function() {
    // console.log( "ready!" );
    index = "1";
    title = "";
    description = "";
    image = "";
    date = "";
    creator = "";

add_item(
//title
"Innovation Insight",
//description
"I have a desire to develop improvements that impact people. One idea of mine was to develop technology that enables the blind to navigate through an unknown area using a combination of GPS, object recognition, and vibration feedback. I was accepted into the University of Michigan's 36-hour hackathon (MHacks 6). I used this opportunity to prove the concept of object recognition and vibration feedback. A Microsoft Kinect V2 sensor, worn by a visually impaired person, would recognize objects on a table. The person would hear a verbal list of items and then give a voice command choosing the specific item they want to reach. I created an intuitive armband to vibrate in corresponding sections to direct the user's hand toward the object. We had some difficulties but ultimately proved our concept. Microsoft awarded us with \"Best Overall Use of Microsoft Technology.\"\
<br><br>\
This picture represents my project to help the visually impaired using object recognition via a Microsoft Kinect V2 and vibration feedback. My teammates worked with vision processing and databases, but I worked mainly on hardware. I created the vibration sleeve using a 5V Arduino Pro Micro, 8 NPN transistor switches, and 8 mini vibration motors all held within a sewn, stretchy material. Transistor switches (powered externally from a 9V battery) were used because the Arduino could not provide\ the amperage needed from its DIO pins. I wrote an algorithm for the Arduino to select motors and vibrate according to direction, and I implemented a Myo to change vibration when the wrist twists. The values from the Myo were read in C++ and sent via serial to the Arduino to manipulate the data by parsing numbers and characters. After finishing this, I began working on object recognition by using HAAR classifiers in OpenCV. We also used VOCE, a voice library for speech to text and text to\ speech.",
//image
"img/innovation_insight.jpg",
//date
"September 2015",
//creator
"Ethan Weber"
);


add_item(
//title
"Hovercraft",
//description
"In eighth grade, I had the idea to build a hovercraft. My brother bet me ten dollars I couldn't do it, but I decided to prove him wrong. I began by harvesting material from my grandparents' farm, starting with an 8'x4' piece of plywood. I constructed a skirt with rip-stop nylon and my grandma's sewing guidance. I attached a squirrel cage fan to a 12HP engine with two pulleys and a belt to provide the lift. At this point, I tested it around my lawn, and it effortlessly floated above the ground! I then constructed a seat from wood scraps. To provide forward thrust, I found another engine (11HP) and equipped it to a fan I found in an old tractor. Behind this fan is a fin to direct the airflow and steer the craft. This project occupied my garage for about one month, and during this time, I made frequent trips to the hardware store (luckily it's a block from home). It was a very rewarding project . . . not to mention the fact that I also won ten bucks from my brother!",
//image
"img/hovercraft.jpg",
//date
"Spring 2012",
//creator
"Ethan Weber"
);

add_item(
//title
"Quadcopter",
//description
"This is a summer project that I constructed to learn more about programming in a fun way! I started by purchasing supplies including the framework and electronics. It is controlled by an Arduino Mega 2560 with a sensor shield attached to the top. I had to solder every component onto this shield, as well as the power harness, motor leads, and bullet connectors (to make it easy to swap ESCs with one another very quickly). The sensors featured on the quadcopter include: a barometer, ultrasonic sensor, magnetometer, gyroscope, accelerometer, and GPS. Everything is powered by a 12V LiPo battery, and it is controlled with a Turnigy 9x transmitter/receiver combination. I had to do a lot of debugging to add/fix flight software. I programmed a custom failsafe for my RC controller and fixed an auto-landing function. It will land itself if it gets out of range or if I flip a switch. I look forward to adding more features in the future.",
//image
"img/quadcopter.jpg",
//date
"Summer 2014",
//creator
"Ethan Weber"
);

add_item(
//title
"Hydraulic Crane",
//description
"In my freshman shop class, we had to make a simple crane using water hydraulics. I decided to make a simple one for class and this complex one on my own. I set up a workshop in my garage and began making trips to my grandparents' farm and the hardware store to find supplies. The base is a piece of plywood. The rotating platform for the crane consists of a swivel plate from a boat seat. I sandwiched a sprocket on top of it in order to hold a chain and ran it to a 12V motor. The motor is operated with a large 12V motorcycle battery using a 2-way switch. The crane is equipped with eight syringes, multiple joints, and a claw I formed by bending steel. I used two syringes at each rotating point to make it very stable and to reduce friction. Upon completion, my teacher encouraged me to bring in my complex crane to demonstrate for the class. I was happy to share!",
//image
"img/hydraulic_crane.jpg",
//date
"Fall 2012",
//creator
"Ethan Weber"
);

add_item(
//title
"Wireless Robot with Arm",
//description
"Over Christmas break last year I was bored, so I decided to make a robot! I started with metal and continuous servo motors from old robotics parts. I added a robotic arm, which I received from my uncle years ago. I controlled the electronics using an Arduino UNO, eight relays, and two battery packs. The battery packs provided power to the drive wheels and the robotic arm. To control this wirelessly, I used an XBee shield as a USB interface. I programmed the Arduino in Python using a Pygame library to read user input from a USB Playstation controller. It interpreted the data and sent serial commands via a pyFirmata library to control the Arduino. I routed the controller's axes for a tank drive setup to vary PWM motor commands. The joystick's buttons controlled movement of the robotic arm and toggled an LED. I had some difficulties with power consumption at first, but ultimately, I got it to work before Christmas break was over!\
<br><br>\
I added additional metal to the frame as a cell phone holder. Placing my phone in the stand and Skyping from my computer allowed me to drive the robot beyond my field of vision.",
//image
"img/wireless_robot_with_arm.jpg",
//date
"Christmas Break 2014-2015",
//creator
"Ethan Weber"
);

add_item(
//title
"Soccer Cart",
//description
"The task of carrying bags of soccer balls and two five-gallon water jugs to practice each day was a tiresome, tedious process. As a freshman, it was my grade's job to perform these duties. After the season, I went home and decided there must be a better way. I designed and constructed a cart with angle iron, large wheels, convenient shelving, and netting to hold the soccer balls. Two water jugs fit in the front. Various items can fit into the other shelving areas. The ball compartment is open on the top and the side, making it easy to place balls in and get balls out. During this project, my father taught me to weld. It was a lot of fun, and afterward, a local company painted it my school colors. The following season, I wheeled it to practice and saved the freshmen from the difficult task of carrying equipment. Currently, the cart is in great shape, saving both time and energy.",
//image
"img/soccer_cart.jpg",
//date
"Summer 2015",
//creator
"Ethan Weber"
);








});


function add_item(title, description, image, date, creator) {
  add_portfolio_grid(index, title, image);
  add_portfolio_model(index, title, image, description, creator, date);
  index += 1;
}

function add_portfolio_grid(index, title, img_source) {
  portfolio_grid.innerHTML += "\
    <div class=\"col-sm-4 portfolio-item\">\
          <a href=\"#portfolioModal" + index + "\" class=\"portfolio-link\" data-toggle=\"modal\">\
              <div class=\"caption\">\
                  <div class=\"caption-content\">\
                      <i class=\"fa fa-search-plus fa-3x\"></i>\
                      <h3>" + title + "</h3>\
                  </div>\
              </div>\
              <img src=\"" + img_source + "\" class=\"img-responsive resize\">\
          </a>\
      </div>";
}

function add_portfolio_model(index, title, img_source, content, creator, date) {
  portfolio_models.innerHTML += "\
  <div class=\"portfolio-modal modal fade\" id=\"portfolioModal" + index + "\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\
      <div class=\"modal-content\">\
          <div class=\"close-modal\" data-dismiss=\"modal\">\
              <div class=\"lr\">\
                  <div class=\"rl\">\
                  </div>\
              </div>\
          </div>\
          <div class=\"container\">\
              <div class=\"row\">\
                  <div class=\"col-lg-8 col-lg-offset-2\">\
                      <div class=\"modal-body\">\
                          <h2>" + title + "</h2>\
                          <hr class=\"star-primary\">\
                          <img src=\"" + img_source + "\" class=\"img-responsive img-centered resize\">\
                          <p>" + content + "</p>\
                          <ul class=\"list-inline item-details\">\
                            <li>Created By:\
                                <strong>" + creator + "</strong>\
                            </li>\
                            <li>Date:\
                                <strong>" + date + "</strong>\
                            </li>\
                          </ul>\
                          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\"><i class=\"fa fa-times\"></i> Close</button>\
                      </div>\
                  </div>\
              </div>\
          </div>\
      </div>\
  </div>";
}
