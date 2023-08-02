import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linkMap = links.map(link=> (
    //Remember href with the correct attribute {`#${}`}
    <a key={link} href={`#${link}`}>{link}</a>
  ))

  return <nav>{linkMap}</nav>;
}

export default NavBar;
