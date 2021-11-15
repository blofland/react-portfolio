import React from 'react'
import SimpleReactFooter from "simple-react-footer";

function Footer(props){
    const description = "Thanks for coming to my page! Down below you can find different ways to contact me! Working on removing youtube button and pinterest button.                             ";
    const title = "";
    const columns = [
        {
            title: "Resources",
            resources: [
                {
                    name: "About",
                    link: "/"
                },
                {
                    name: "Contact",
                    link: "/contact"
                },
            ]
        },
        

    ];
    return <SimpleReactFooter 
        description={description} 
        title={title}
        columns={columns}
        facebook="boedisl"
        linkedin="boedi-lofland-4b30b8213"
        twitter="boedil"  
        instagram="boedil"
        youtube="/"
        pinterest="/"
        iconColor="black"
        backgroundColor="blue"
        fontColor="black"
        copyrightColor="darkgrey"
    />;
    //  <footer>
    //     <ul className="footlist">
    //         <li><a href="https://github.com/blofland">Github</a></li>
    //         <li><a href="https://www.linkedin.com/in/boedi-lofland-4b30b8213/">LinkedIn</a></li>
    //         <li><a href="https://www.twitter.com">Twitter</a></li>
    //     </ul>
    // </footer>
}





export default Footer;