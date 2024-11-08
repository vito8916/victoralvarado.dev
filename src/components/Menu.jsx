import React from 'react';

const Menu = (props) => {
    //get the current pathname
    const pathname = window.location.pathname;

    const menuItems = [
        {
            name: "About Me",
            link: "/about"
        },
        {
            name: "Work Experience",
            link: "/work"
        },
        {
            name: "Projects",
            link: "/projects"
        },
        {
            name: "Education",
            link: "/education"
        },
        {
            name: "Profiles",
            link: "/profiles"
        },
        {
            name: "Home",
            link: "/"
        }
    ];

    window.addEventListener("keydown", (event) => {
        console.log(event.code);

        //switch-case block to check if the key pressed is a number key
        switch (event.code) {
            case "Digit1":
                return window.location.href = "/about";
            case "Digit2":
                return window.location.href = "/work";
            case "Digit3":
                return window.location.href = "/projects";
            case "Digit4":
                return window.location.href = "/education";
            case "Digit5":
                return window.location.href = "/profiles";
            case "Digit6":
                return window.location.href = "/";
        }
    });

    return (
        <div>
            <div className={"menu-bar"}>
                <span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path
                            d="M16 18V20H5V18H16ZM21 11V13H3V11H21ZM19 4V6H8V4H19Z"></path></svg>
                    </span>
                <p>Menu</p>
            </div>
            <div className="menu">
                <p>
                    {props.description}
                </p>
                <ol>
                    {
                        menuItems.map((item, index) => {
                            return (
                                <li key={index}>
                                    <a href={item.link}
                                       className={pathname === item.link ? "disabled" : ""}>{item.name}</a>
                                </li>
                            )
                        })
                    }
                </ol>
            </div>
        </div>

    );
};

export default Menu;