import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linksties = links.map((link, id) => {
    let ties = `#${link}`;
    return <a key={id} href={ties}>{link}</a>;
  });
  return <nav>{linksties}</nav>;
}

export default NavBar;

