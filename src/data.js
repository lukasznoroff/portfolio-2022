import image1 from "./images/project-exam-2.jpg";
import image2 from "./images/javaScript-frameworks-ca.png";
import image3 from "./images/semester-project-2.jpeg";


export const projects = [
    {
        id: 1,
        img: image1,
        title: "Holidaze",
        description: "Hotel Booking Website, project requires the creation the visitor side of the website where users can search accommodation and make enquiries, as well as the administration side where properties can be added and enquiries managed.",
        github: "https://github.com/Noroff-FEU-Assignments/project-exam-2-lukasznoroff",
        website: "https://the-holidaze-bergen.netlify.app/",
        login: "kfaute",
        password: "^pTIMi1gt(^6"

    },
    {
        id: 2,
        img: image2,
        title: "API",
        description: "The application has the following paths: Home- results are returned from the api query, Detail - Retrieve the parameter from the URL and use it in an API call to fetch one item Contact - contact form with the inputs and validation, Login - form with username/email and password fields. The form makes a login request to the wordpress API with the JWT plugin installed. If the login is successful, the user is redirected to the admin path.",
        github: "https://github.com/Noroff-FEU-Assignments/js-frameworks-course-assignment-lukasznoroff",
        website: "https://api-wordpress.netlify.app/",
        login: "kfaute",
        password: "^pTIMi1gt(^6"
    },
    {
        id: 3,
        img: image3,
        title: "Interior",
        description: "This is a home furnishings e-commerce site that has both customer and admin sections. For my backend I chose WordPress whit Custom Post Type UI plugin, this allowed me to create the necessary fields for the products. Products can be searched via the search text box and then added to and removed from the basket. In the admin panel you can create and add new products.",
        github: "https://github.com/lukasznoroff/decor",
        website: "https://decor-interior.netlify.app/",
        login: "dnmbwl",
        password: ",hZdZKBW7ql4"
    }
]