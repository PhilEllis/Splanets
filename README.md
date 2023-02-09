<h1 align="center">Splanets- Beta Test Site</h1>
<h1 align="center"><img src="assets/img/readmeimg/splanetslivepreview.png" /></h1>

<a href="https://philellis.github.io/Splanets/"><img src="assets/img/splanetslogo.png" width="30px" /></a> Live website

<a href="https://github.com/PhilEllis/Splanets"><img src="assets/img/readmeimg/GitHub.png" width="30px" /></a> GitHub Repository

## About

The brief for this website is to provide a company with a beta test site to gauage the interaction and effectiveness of their childrens educational app idea before they progress with the app build. The idea driving the app build is to utilise educational videos and fun videos on youtube that children may already be familiar with and test how much information the children actually retain. The team want to see if developing mini quizes with a reward at the end would enhance memory retention and improve their understanding of the subject and encourage further learning. 

The quiz to be built will be given the unique name of Splanets and will improve their understanding of the solar system when watching th following fun and educational video by KidsLearningTube; The Planet Song - 8 Planets of the Solar System Song for Kids 

<a href="https://www.youtube.com/embed/mQrlgH97v94"><img src="assets/img/readmeimg/youtubelogopng.png" width="30px"></a> The Planet Song - 8 Planets of the Solar System Song for Kids 

The target audience will be Children aged 6-12 years. The quiz format should refernce the video and should then present the user with multiple choice questions and answers based purely on the information provided within the video. The emphasis from the brief is to keep the learning and testing of knowledge fun whilst challenging. 

## Table of Contents

[User Experience (UX)](#UX)

[Features](#features)

[Technologies Used](#technologies)

[Testing](#testing)

[Deployment](#deployment)

[Known Bugs](#bugs)

[Credits](#credits)


<a name="UX"></a>
## User Experience (UX)

### User Stories - Children aged 6-12 years
- #### Children who find it hard to retain information delivered within written form.
    1. I want to be able to consume the information taught in a visual, fun and engaging manor.
    1. I want any quiz writting to be minimal.
    1. I want to be able to select the answers myself.
    1. I want a visual reward to work towards to keep me engaged. 
    
    
- #### Children who find it hard to hold their concentration in traditional educational environments.
    1. I am easily distracted, anything with too many words or instructions in it and i loose ineterest. 
    1. Anything that is hard to navigate will mean i loose interest, nevigating the quiz must be intuitive. 
    1. I like to learn alone and so i must be able to select the answers myself. 
    1. I need eduction to be fun and engaging to maintain my concentration. 
    1. I struggle to sit with a book so something interactive is better suited to my learning style. 
   

- #### Children who want to learn more about a specific subject and enjoy self directed learning.
    1. I am fascinated by the topic of the solar system and love learning new facts about it. 
    1. I am enjoy learning independently so would like a simple quiz i could navigate on my own.
    1. I love to be tested and want to achieve a high score so it is important that i know my score and am rewarded for my hard work. 
    
### User Stories - Business Owner
- #### I am a business owner currently wishing to test the concept of an app that intends to help children enhance their memory retention and improve their understanding of certain subjects like the solar system when watching educational videos by using fun and engaging multiple question quizes.
    1. I want to test the concept to see if it is well received by the target audience. 
    1. I need the product to be fun and engaging to encourage repeat plays and encourage users to want more i.e. progress to the next level of learning. 
    1. I need the product to be simple enough for children of age 6-12 to utilise it. 

### Design Choices


- #### Colour scheme
    - In order to fulfill the brief of making this quiz immersive, engaging and yet still accessible meant that the colours selected for use within the site had to work well against a darker solar system background. The colours chosen reflect those found within the planet vector images used for the buttons and galaxy image and are all colours that pop against the darker background. The colour for the background of the questions and instructions box reflects that of the sun and tie in to the score pages at the end. Keeping a consistent theme. The brighter elements of these colours were selected for the logo planet and then also used within the buttons at the start and the end of the quiz. White text colour has also been kept consistent across buttons, logo and answer images as this created the best contrast for readability. The initial larger colour spectrum was used to experiment with colours and narrowed down to the utilised second palette.


        <img src="assets/img/readmeimg/splanetslargepalette.png" height="50px" />



        <img src="assets/img/readmeimg/splanetssmallpalette.png" height="50px" />

- #### Typography
    - The main brand identifiable font used is a Play - a unique google font that provide a space look and feel whilst still being very accesible and easily read by children. It has a space like quirk whilst still being slightly rounded which i feel is more appealing for children. The secondary font for titles and headings and Source San Pro as the main text font. Sans-serif has been chosen as a fallback font. 
    I have chosen to mainly only style the headings as text is kept to a minimum. 
   

    - Play
       
        <img src="assets/img/readmeimg/playfont.png" height="30px" />


    - Source Sans Pro


        <img src="assets/img/readmeimg/sourcesansprofont.png" height="30px" />



- #### Imagery
    - I have ensured that the site contains imagery that is bright and creates an immersive solar system feeling for the player. The background is that of the solar system filled with twinkling stars. The logo has been created to be part of the space theme and the vector images have purposefully been chosen for the answer buttons to appear as if they are floating in outer space. The imagery is also very clear and allows the child to readily identify the planets in relation to the images within the video. Ensuring the colours and styles of the video are carried through to the quiz helps to make it feel like one user experience. The try again page and rocket luanch page have been kept consistent with each other and the background of this used for the question and instruction card linking all of the quiz elements together. 


- #### Wireframes
    - After roughly sketching an idea of the rough structure i inputed this into Balsamiq to create the following basic wireframes.


         <img src="assets/img/readmeimg/splanetssimplewireframe.png" />


- #### Mockups
    - After selecting the brand colours and potential imagery i created a mock up of just the basic desktop to see if the imagery and colours sat well together. The combination of wireframe and mockup really assisted in developing my decisions around navigation and functionailty with one page display. It also helped to ensure the fun and immersive element to the design and changed my thought process from displaying a score at the end that would tell the user what planet they were to instead enabling the child to launch a rocket if they achieved 10/10 which i feel makes it more rewarding for all age groups.

        <img src="assets/img/readmeimg/imagemockup.png" />

<a name="features"></a>
## Features

### Existing Features

#### Common Features Across All Pages
- **Favicon** - 
    - a favicon of the panet logo but in the brand colours is visible on the site tab so that all users can    easily navigate back to the site with ease when multiple tabs are open.
- **Header** - Provide instant impression on the user but simple structure so as not to distract.
    - I opted to use a transparent navigation bar with a central logo that links back to the index page which is the video and option to start the quiz. 
    - The navigation has been left as a simple toggle on all screen sizes as i felt this created a simpler less distracting visual.
    - The toggler provides two links one to the home page with the video and the other to the start of the quiz so that the user can start again and see the instructions and video or skip to start the quiz automatically. 
    - The toggler has been removed from the retry and rocket launch pages as these provide clear buttons to navigate back to the video and start of quiz.
    - 
- **Accessibility**
    - The video at the start has had autoplay taken off so that the user needs to start it. 
    - The rocket launch video has text to explain the animation is not supported in your browser if seen.
    - The hamburger menu has aria-label added to let users with screen readers know where the toggleable menu is.
- **Buttons**
    - The same hover transition and colours have been applied to the buttons across all pages in order to create a cohesive look and make the call to action clear and easy to find. The font is the same for all buttons. 
    - The answer image buttons are set to expand when hovered over and the cursor set to change to the hand pointer when able to select a button.
- **Responsiveness**
    - All Pages have been built around Bootstrap 5'S responsive grid layout and provide the same functionality regardless of the viewport size, Apart from the rocketlaunch page which does not show the same level of responsiveness in the smaller screen. This is a site designed mostly for use on a childrens tablet. However this is something the client would need to bear in mind when designing the app. 
- **Footer**
    - There is no footer as this was felt to be unnecesary considering the one page nature of the site design.
    


### Specific to Pages
-  **Index**
    - Welcome card with instructions text
    - The featured video to be watched
    - Start Game button
-  **Quiz**
    - This contains the question card with the answer images below. When answered a notification pops up within the question card to notify if correct or incorrect and dissapears.
    - at the end the text within the question card is replaced with the final score.
- **Try Again**
    - This page is automatically loaded after the a final score of 9 or less is shown. 
    - The page congratulates the child on their hard work and encourages them to retry or re watch and start again with the aim of launching a rocket when obtaining 10/10.
- **Rocket Launch page**
    -  This page automatically loads after a user achieves 10/10. The background animation shows a rocket blast off leaving the user in the clouds of its wake.
    - This card congratulates the child and then encourages them to go back rewatch and see what other facts they can find within the video, encouraging further learning.


### Features to be implemented to improve service
- A timed disable of the start button to ensure that users watch the full video before commencing the quiz. This would be coupled by a smaller link button underneath for those who have watched it and dont want to wait.
- A progress bar under the image answers to provide the player with a guide of how many questions left. I feel this would be an important addition especially for children who may loose attention if they feel something is hard.
- Change the incorrect and correct messaged and instead make it more visceral with an animated response of the planet shaking or a green tick or cross appearing over the chosen image. I feel this would provide a better learning experience for the child.
- A leader board to be implemented for those who score 10/10. This would be a leader board based on who completed the quiz the fastest and would only retain the top 5 speeds. I feel this would encourage children to keep trying the quiz once they had hit 10/10 and to keep coming back to revisit and reclaim their position on the leaderboard.


<a name="technologies"></a>

### Technologies Used

### Languages Used

- [HTML5](https://en.wikipedia.org/wiki/HTML5)
- [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
- [JavaScript](https://www.javascript.com/)

### Frameworks, Libraries, Programs, Online Resources Used

- [Git](https://git-scm.com/) 
- [GitPod](https://www.gitpod.io/) 
- [Github](https://github.com/) 
- [Bootstrap v5](https://getbootstrap.com/) - Responsive Elements Hero, navigation, buttons & cards.
- [jquery](https://jquery.com/) - Used for the toggle function in the navigation
- [Google Fonts](https://fonts.google.com/) - Play and Source Sans Pro fonts
- [Font Awesome](https://fontawesome.com/) - Button icons.
- [Photoshop](https://www.adobe.com/ie/products/photoshop.html - images have been resized and edited within photoshop.
- [Coloors](https://coolors.co/) - Used to create the colour palettes and identify complimentary and contrasting colours. This was also used to check the accessibilty of the text colour with each background colour during the planning stage. 
- [RGBA Color Picker](https://rgbacolorpicker.com/hex-to-rgba) - to match hex colours to an RGBA so that i could change the apacity accurately.
- [Istock](https://www.istockphoto.com/)- Istock used for all imagery within the site. image credit as follows
     - [Galaxy Background](https://www.istockphoto.com/vector/space-background-with-realistic-nebula-and-shining-stars-colorful-cosmos-with-gm1173451503-325938376) image by Egor Suvorov from Istock
     - [Planet Vectors](https://www.istockphoto.com/vector/glossy-planets-vector-set-gm453780213-30624312) Vector image by andegro4ka from Istock
     - [Rocket Animation](https://www.istockphoto.com/video/ship-rocket-launch-startup-new-business-project-new-business-project-concept-vehicle-gm1249549420-364189430) created by Zozulinskyi from Istock
- [youtube](https://www.youtube.com/watch?v=mQrlgH97v94) The Planet Song - 8 Planets of the Solar System Song for Kids | KidsLearningTube on Youtube 
- [Fiver](https://www.fiverr.com/gemmawilson?source=inbox) Logo png files and favicon created by Gemma Wilson
- [Figma](https://www.figma.com/file/ladBUkKqWA50bv0xDRaMUH/SPLANETS?node-id=0%3A1&t=rRbFBuY40vnsdoR4-1) used to create mock up designs
- [Balsamiq](https://balsamiq.com/wireframes/desktop/) Used to create the initial wireframes
- [amiresponsive](https://ui.dev/amiresponsive) Used to create the live image capture of site

<a name="#testing"></a>
## Testing

 ### Functionality Testing
- Navbar - visible on all viewports collapsing down into a toggle hamburger at the correct breakpoint. Navbar transparent remains and the backgroud colour appears to make the toggle menu readable. All links clickable and take you to the correct pages. Logo takes you to the home page. All hover transitions working.
- All cards resize correctly keeping the text and images clear and readable.
- All internal links coonected to the buttons tested. 
- All media functioning on site. Youtube not autoplaying and not skipping to next video. Background animation playing automatically on mute. 
- All questions and answers loading
- The right answers being recorded as correct and incorrect
- The incorrect and correct alerts displaying and clearing
- The end score displaying and directing to retry page for 9/10 or less and to the rocket launch for 10/10 scores.

### CSS3 validator - Pass

<img src="assets/img/readmeimg/cssvalid.png" />
http://jigsaw.w3.org/css-validator/validator$link

### HTML5 validator
- Index - Document checking completed. No errors or warnings to show.
- Game - Document checking completed. No errors or warnings to show. The image src="" had to be updated to 0 for the checker to accept.
- Tryagain - Document checking completed. No errors or warnings to show.
- Rocketlaunch - Document checking completed. No errors or warnings to show.

### Javascript validator

### External testing
- All testers confirmed that all buttons and navigation links performed the correct function. 
- The testers provided feedback on being able to click the buttons area not just on the circular planet. This is due to the images being square png files with a transparent background. 
- Testers on tablets and mobiles identified that the background image was not extending or stretching down responsively with the change in button layouts. This caused issues in the fact that the white writing under the planets disappeared against the white background. 
- During the testing process it was discovered that the animation was not fully visible to it maximum effect. 

### Compatibility Testing
- Browser Compatibility tested via [Browser Stack](https://live.browserstack.com/) 
- tested on the latest versions of the following
    | Safari    | Firefox   | Chrome  | Opera  | Edge  |
    | --------- |:---------:| -------:| ------:| -----:|
    | Pass      | Pass      | Pass    | Pass   | Pass  | 
    
- Chrome developer tools has been used to check the responsiveness of the site across different screen sizes and devices. 
- The site has mostly been built and tested on a Macbook Air operating on MacOs Catalina.

### Performance Testing
-  The performance of the site was tested on the following site with satisfactory results. [Web Page Test](hhttps://www.webpagetest.org/result/221027_BiDcTE_26K/)


### Testing User Stories 
### User Stories - Customer
- I feel that the user stories of all three avatars are mirror the same core principles. A simple design with imagery that is reflective of them. Clear snippets of information that are easy to digest. A simple layout with quicklinks to the purpose of the site sign up, meaning users can navigate with ease. The hero images and jumbotron content allow the user to instantly identify the page they are on and redirect themselves with ease from the top or bottom Nav. The about page provides enough additional information to make an informed choice on sign up without being overwhelming. The contact page allows the oportunity to connect further with the brand. The imagery, font and colours have acheived a clean warm design that feels welcoming to its users.


### User Stories - Business Owner
- The emphasis within the site is the email sign up, every button within the jumbotrons all link directly to this allowing a resistance free path for the user to sign up after landing on the pages.
- The sign up form accomdates for Name and with the addition of radio buttons for users to select their user avatar - informing the business and allowing them to target specific marketing messages to that individual.
- The Brand created is warm, clean, light and far away from gimmicky colours and other brands that they wanted to stay away from. 
- The content within the site is conversational and sets a supportive you are being heard and seen tone to the site.
- The contact page allows the customers direct access to the brand. This will also capture the avatar information and allow them to customise their response.
- Social links are provided within the footer to allow the brand to grow their social media. These links have been kept small and at the bottom as the current focus of the site is sign ups and larger social media links may distract the user away from the site before signing up.


<a name="deployment"></a>
## Deployment

### Publishing
This website was published using [GitHub Pages](https://pages.github.com/). The procedure is outlined below.
1. Go to the GitHub website and log in.
2. On the left-hand side, you'll see all your repositories, select the appropriate one. ([Repository](https://github.com/liigalized/MS1_boredom_guide) used for this project).
3. Under the name of your chosen Repository you will see a ribbon of selections, click on 'Settings' located on the right hand side.
4. Scroll down till you see 'Pages' option on the left hand side.
5. Under "Source" click “deploy from branch” change the "None" dropdown under branch to "main" keep selected folder to “root”
6. Click "Save"
7. The page will reload and you'll see the link of your published page displayed under 'GitHub' pages.
8. It takes a few minutes for the site to be published, wait until the background of your link changes to a green color before trying to open it.

### Forking
If you wish to contribute to this website you can Fork it without affecting the main branch by following the procedure outlined below.
1. Go to the GitHub website and log in.
2. Locate the [Repository](https://github.com/PhilEllis/Splanets) used for this project.
3. On the right-hand side of the Repository name, you'll see the 'Fork' button. It's located next to the 'Star' and 'Watch' buttons.
4. This will create a copy in your personal repository.
5. Once you're finished making changes you can locate the 'New Pull Request' button just above the file listing in the original repository.

### Cloning 
If you wish to clone or download this repository to your local device you can follow the procedure outlined below.
1. Go to the GitHub website and log in.
2. Locate the [Repository](https://github.com/PhilEllis/Splanets) used for this project.
3. Under the Repository name locate 'Clone or Download' button in green.
4. To clone the repository using HTTPS click the link under "Clone with HTTPS".
5. Open your Terminal and go to a directory where you want the cloned directory to be copied in.
6. Type `Git Clone` and paste the URL you copied from the GitHub.
7. To create your local clone press `Enter`


<a name="bugs"></a>
## Known Bugs

There are no identified bugs at present. I am not fully happy with the solution to the background image not stretching the background as i feel there must be a better was of adapting other than setting the vh to the current setting. I utilised every potential varient i could think of so this is something i would look to refine before passing this to a client. I would also potentially add a media query implimenting a cut down video for mobile views so that the rocket can be fully appreciated. I however do not posess the video editing skills to make this happen.

<a name="credits"></a>
## Credits

### Code 

- The majority of the code originated from the Bootstrap library and was styled with custom css.
- I reffered alot to W3School JavaScript tutorials https://www.w3schools.com/js/default.asp to help better understand and construct my JS.
- I watched a lot of quiz tutorials in order to better understand the process including the following;
https://www.youtube.com/watch?v=MxrGPP4F8Sc
https://www.youtube.com/watch?v=f4fB9Xg2JEY
- The only similar quiz i could find to the one i wanted to create was this which served as inspiration;
https://www.sanwebcorner.com/2021/04/picture-quiz-using-javascript.html
- I used stack overflow to search for similar problems and looked through the answers and possible solutions to help suggest where i was going wrong. 
- I posted in slack regarding the error in question not being defined and user Bob Bobton pointed out that i had only defined it for one function. Defining globally and outside of the function would help to solve the issue which it did.
- The following code was suggested by Slack user AR Riyad to assist with making the logo responsive on the rocket launch page
.fullscreen-video {
    z-index: -1;
}

.rocket-overlay {
    z-index: -2;
}

.logo .rocket-logo {
    z-index: 1;
}
- All of the rest of the code was written by the author - Philippa Ellis



### ReadMe Resources
- [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#code)
- Code Institute [SampleREADME](https://github.com/Code-Institute-Solutions/SampleREADME)
- Slacks numerous Markdown questions and answers
