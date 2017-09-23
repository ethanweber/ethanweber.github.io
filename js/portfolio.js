

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
This picture represents my project to help the visually impaired using object recognition via a Microsoft Kinect V2 and vibration feedback. \
My teammates worked with vision processing and databases, but I worked mainly on hardware. I created the vibration sleeve using a 5V Arduino Pro Micro, 8 NPN transistor switches, and 8 mini vibration motors all held within a sewn, stretchy material. \
Transistor switches (powered externally from a 9V battery) were used because the Arduino could not provide\ the amperage needed from its DIO pins. \
I wrote an algorithm for the Arduino to select motors and vibrate according to direction, and I implemented a Myo to change vibration when the wrist twists. \
The values from the Myo were read in C++ and sent via serial to the Arduino to manipulate the data by parsing numbers and characters. \
After finishing this, I began working on object recognition by using HAAR classifiers in OpenCV. \
We also used VOCE, a voice library for speech to text and text to\ speech. \
<br><br>\
Please check our MHacks submission <a href=\"https://devpost.com/software/innovation-insight\">here</a>.",

//image
"img/projects/innovation_insight.jpg",
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
"img/projects/hovercraft.jpg",
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
"img/projects/quadcopter.jpg",
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
"img/projects/hydraulic_crane.jpg",
//date
"Fall 2012",
//creator
"Ethan Weber"
);

add_item(
//title
"Jetslam Bot",
//description
"I've spent the summer in Detroit working with a company called Zenuity--a company creating the autonomous vehicle software for Volvo. While at the company, I found the perfect opportunity to use my NVIDIA Jetson. \
The interns at Zenuity were assigned to a project called \"Park at Home\"--a project to formulate a solution to autonomously parking a car at home. \
My summer roommate, Luke--also from MIT--and I decided that it would be best to make a replica of the autonomous car by creating a cart fitted with many sensors and hardware. \
I believe that creating a live replica of a self-driving vehicle is the best way to rapidly develop software. \
<br><br>\
We had limited resources because Zenuity is a startup, so Luke and I created most of the cart with the hardware we had lying around at our apartment. \
We bought a cart from Harbor Freight, and made it look this this! \
​The cart is built with an NVIDIA Jetson TX1, a Raspberry Pi, an Arduino Uno, a 32x32 RGB LED matrix (which happens to be same one that I used on my high school grad cap), 3 USB cameras, the camera on-board the Jetson, an IMU with an accelerometer, and a Scanse Sweep 2D LIDAR. We named the cart the Jetslam Bot. \
<br><br>\
The goal of the cart was to demonstrate the computer vision algorithms (camera stitching, bird's eye view, line detection, etc.), occupancy grid (LIDAR data processing code), SLAM (Simultaneous Localization and Mapping), and LCM (the communication protocol we used). \
We are using the Jetson as the computer to handle all the processes and facilitate the communication throughout the used devices. \
The goal was to use the cart to have it create and localize itself within a map and act just like an autonomous car on a smaller scale! \
It demonstrated the computer vision programs that I wrote over the summer summer! \
The Jetson was a perfect way to bring together all of the code that Luke and I wrote.",
//image
"img/projects/jetslam_bot.JPG",
//date
"Summer 2017",
//creator
"Ethan Weber"
);

add_item(
//title
"AREALYTICS",
//description
"For places that have a large flow of human traffic throughout the days and nights, such as \
universities and convention centers, it’s helpful for people running those institutions to have a good \
idea of where people travel most and how they move in certain times of the days. There was no \
efficient, simple way to accomplish this task until Arealytics came to life. Now we are able to \
passively track people’s devices throughout various buildings and spaces. We can display this \
information on a dashboard system tailored towards a customer’s needs: real-time data about \
customers, max flow rates of walkways, location hotspots, and we are currently leveraging the \
millions of data points available to create a predictive analytics solution. \
<br><br>\
How we accomplish this task is simple: we have reconfigured WiFi chips into a network of \
microcontrollers that detect DNS Probe Requests. DNS probe requests are essentially signals that \
WiFi devices broadcast out to the routers nearby with their MAC address saying, “Hey, I’m here! \
Allow me to build a connection with you.” We store all of these probe requests by logging MAC \
addresses, timestamps, signal strengths, and more. With this information, we can model the paths \
that people took throughout the day. We will also provide vital information to businesses and \
institutions about where to create new working spaces, where to perform construction, and where to \
relocate sites to optimal locations. \
<br><br>\
Check out <a href=\"documents/Arealytics_Final_Report.pdf\">our report</a> for more information.",
//image
"img/projects/arealytics_state_machine.png",
//date
"Spring 2017",
//creator
"Ethan Weber"
);

add_item(
//title
"TravelAR",
//description
"Traveling is exciting - planning, not so much. \
We thought about different ways to improve the vacation search process and found that visuals were key in selecting the perfect location. \
Because of this, we created TravelAR, an augmented reality app that allows you to physically step into scenes of different cities, then find flight information if you have found your ideal travel destination.\
<br><br>\
TravelAR is an iOS travel application built using Apple's ARKit. \
On opening the app, there is a camera view in the room. Upon tapping, there will be an augmented reality \"portal\" to another city, where you physically walk inside another \"room\" and view a gallery of AR scenes from the city. \
If interested in travel information to the city, there is a pull-up information section where a user can find relevant flight details and prices. \
<br><br>\
We built TravelAR with Apple's iOS ARKit, a Flask server hosted with Microsoft Azure, and many APIs including the Amadeus Travel APIs, the Microsoft Bing Image Search API, and the WolframAlpha Simple API. \
The iOS application submits a “GET” request to our Flask server hosted in the cloud with Microsoft Azure. \
This Flask server takes in a city/location name, and it processes that string with many APIs to extract information—starting with the Amadeus Travel APIs. \
We hit the Amadeus endpoints with our location to gather information on popular attractions nearby, flight statistics, and other general travel information. \
We then port the “popular attractions” into the Microsoft Bing Image Search API to get a list of image urls that will be displayed in the iOS application. \
Furthermore, we use the WolframAlpha API to get information on the population. \
We combine all of the information with the AR to create a comprehensive visual display with helpful information. \
<br><br>\
Please check out a video of our project <a href=\"https://www.youtube.com/watch?v=ACneUIVByaY\">here</a> and our HackMIT submission <a href=\"https://devpost.com/software/travelar-g4sq6y\">here</a>.",
//image
"img/projects/travelar_image.jpg",
//date
"Fall 2017",
//creator
"Ethan Weber"
);

add_item(
//title
"Wireless Robot with Arm",
//description
"Over Christmas break I was bored, so I decided to make a robot! I started with metal and continuous servo motors from old robotics parts. I added a robotic arm, which I received from my uncle years ago. I controlled the electronics using an Arduino UNO, eight relays, and two battery packs. The battery packs provided power to the drive wheels and the robotic arm. To control this wirelessly, I used an XBee shield as a USB interface. I programmed the Arduino in Python using a Pygame library to read user input from a USB Playstation controller. It interpreted the data and sent serial commands via a pyFirmata library to control the Arduino. I routed the controller's axes for a tank drive setup to vary PWM motor commands. The joystick's buttons controlled movement of the robotic arm and toggled an LED. I had some difficulties with power consumption at first, but ultimately, I got it to work before Christmas break was over!\
<br><br>\
I added additional metal to the frame as a cell phone holder. Placing my phone in the stand and Skyping from my computer allowed me to drive the robot beyond my field of vision.",
//image
"img/projects/wireless_robot_with_arm.jpg",
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
"img/projects/soccer_cart.jpg",
//date
"Summer 2015",
//creator
"Ethan Weber"
);

add_item(
//title
"Homemade Radio Controlled Boat",
//description
"This is a fun project I created my freshman year. I wanted to create a boat, but I didn't want it to just drift forward; I wanted to maneuver it remotely. At the time, I didn't know much about wireless communication, so I disassembled a broken radio controlled car to learn more. I ended up using the RC receiver to control the fin in the back via a motor that moved left or right depending on user input. This allowed for steering. The thrust, on the other hand, was supplied by using a fan blade on a dowel connected to the drill. This pushed the boat forward or backward, just like an actual propeller does. After completing the electronics, I fastened them onto the watertight, wooden boat that I made from scratch. For a boat made of parts found in my house, it worked very well.",
//image
"img/projects/rc_boat.jpg",
//date
"Spring 2013",
//creator
"Ethan Weber"
);

add_item(
//title
"Breathe-Through Pillow",
//description
"Why can't I sleep face down at night without suffocating? I can sleep on my side or back easily, but if I want to sleep on my stomach I must crank my head to one side and endure the pain. There must be a better way. In my never-ending quest to find ways to make life better, I set out to create a breathe-through pillow. I had just learned sewing in middle school, so my grandma and I sewed a pillow with a hole in the middle. I then inserted plastic from the neck of a juice bottle into the hole. After completion, I quickly found out that this prototype was not user friendly. It was extremely uncomfortable, and furthermore, it didn't even provide a passage for air. The hole pressed directly into the mattress! What was I thinking!? I then created a second version (this time with breathing tubes), but it needed many improvements as well. Without a doubt, this project goes down as one of my top \"failures.\" At least I can keep this project in mind when I'm thinking about what NOT to do.",
//image
"img/projects/breathe-through_pillow.jpg",
//date
"Summer 2012",
//creator
"Ethan Weber"
);

add_item(
//title
"Jet-Ski Fishing Pole Holder and Livewell",
//description
"I've been fishing many times with my father, and we would troll for fish, meaning we would put many lines in the water, move the boat forward slowly, and wait for fish to bite. This seemed like the ideal way to fish, but I wanted to try it by myself on a jet-ski. To do this, I needed something to hold the fishing poles and the catpured fish. My parents let me use an old cooler. I cut PVC pipes (to hold the fishing poles) and screwed them into the side of the cooler, making sure to keep it waterproof. I also added some eye hook bolts for attaching the cooler securely to the jet-ski with hook clips. The cooler was used as a livewell to hold the fish. This invention allowed me to put multiple fishing lines in the lake and troll for fish on my jet-ski. Unfortunately, the fish must not have liked the invention because I never actually caught any--but it was still fun to make!",
//image
"img/projects/jet-ski_pole_holder_livewell.jpg",
//date
"Summer 2012",
//creator
"Ethan Weber"
);

add_item(
//title
"Automatic Dog Feeder",
//description
"In my family of five people, it's hard to remember whose turn it is to feed the dog. To solve this problem, I created an automatic dog feeder. In the top of the wood-constructed device, there is a hopper that can be filled with dog food. The food is routed into a funnel that extends down into a cross-section with an auger bit extending through it. I attached the auger bit with a drill (powered by a 12V power supply) to turn the auger at certain times in order to drop food into a dish below. The structure was very large (not convenient for indoor use) and it was never completely automated because I didn't have an Arduino at the time. We didn't end up using it very much. However, I proved the idea and had a working prototype that dispensed food with the flip of a switch. I'd like to create a more efficient version in the future.",
//image
"img/projects/dog_feeder.jpg",
//date
"Summer 2011",
//creator
"Ethan Weber"
);

add_item(
//title
"Biology Timeline LED Display",
//description
"My biology teacher told my class to make a timeline of the Earth's history. He handed out long strips of paper, but I wanted a challenge, so I asked to do it with electronics. I was inspired to create a device similar to those at museums where you can touch a metal button, prompting a corresponding LED to light up and indicate the answer. I created a wooden, folding case with holes (for LEDs) spaced relative to Earth's history. I drilled more holes and inserted labelled tacks to create a conductive surface. Behind the scenes, I created a common ground for each LED. After lots of wiring, I got it to work in just one weekend. When the screwdriver (attached to the common ground as well) touched a labeled tack, the correct LED lit up indicating the year in the timeline. It was powered by one 9V battery. I added handles to the top of my creation, folded it up, and was ready to bring my suitcase-looking device to school. It was much more fun than doing it on paper!",
//image
"img/projects/biology_timeline.jpg",
//date
"2012-2013",
//creator
"Ethan Weber"
);

add_item(
//title
"Infrared Remote Controlled Robot",
//description
"Many years ago, my uncle gave me a hexapod robot that could move with the flip of a switch. It was pretty cool at the time, but that was back in sixth grade. When I got older, I realized that I could \"hack\" it to make it better. I stripped it of its previous electronics and equipped it with an Arduino Uno, IR sensor, RGB LED, piezo buzzer, and two 9V batteries. After programming my Arduino to decode infrared signals received by an IR remote, I could control the robot movement, the LED colors, and the sounds. This project taught me valuable skills in decoding and producing infrared messages. I look forward to applying these skills in future projects.",
//image
"img/projects/ir_robot.jpg",
//date
"2014",
//creator
"Ethan Weber"
);

add_item(
//title
"Blanket Stabilizer",
//description
"Because my family and I didn't enjoy sitting on cold leather chairs, we decided to cover our recliners with blankets. The blankets kept falling to the floor, so I decided to create a \"blanket stabilizer\" to hold them in place. The device was meant to hold the loose ends of the blanket that was wrapped around the chair. An adjustable cord ran underneath the chair's base to stabilize the device. I built it with two clamps, joining them together with metal strips to maximize grip area (as pictured). I then glued on a fabric cover to provide protection and to blend in with the blanket's color. My idea seemed good at the time, but upon completion, I realized it wasn't helpful; it actually made the problem worse! This project was not successful, but I still learned from it. I'm including it here to demonstrate my persistence in taking my ideas to the test without fear of \"failure.\"",
//image
"img/projects/blanket_stabilizer.jpg",
//date
"2012",
//creator
"Ethan Weber"
);

add_item(
//title
"ROS-MultiMaster-App",
//description
"While doing research in an MIT robotics lab focussing on using multiple robots to accomplish \
high-level tasks, there was need for an application that could easily synchronize ROS \
messages across computers. Welcome the ROS-MultiMaster-App! We created the \
ROS-MultiMaster-App as an easy-to-use web application to synchronize ROS topics and \
services throughout multiple computers--each running their own roscore--on the same \
network. Check it out at <a style=\"font-weight: bold\" href=\"https://github.com/ethanweber/ros-multimaster-app\">this repository</a> on my GitHub account.",
//image
"img/projects/ros-multimaster-app.png",
//date
"2017",
//creator
"Ethan Weber"
);

add_item(
//title
"LED Matrix High School Graduation Cap",
//description
"This is my New Holstein High School graduation cap using a 32 x 32 RGB LED matrix controlled by a Raspberry Pi 2. Check it out on YouTube <a style=\"font-weight: bold\" href=\"https://www.youtube.com/watch?v=dShCYXGweCg\">here</a>.",
//image
"img/projects/high_school_grad_cap.jpg",
//date
"2017",
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
