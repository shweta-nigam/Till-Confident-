import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import AvatarCard from "./components/AvatarCard";

const avatars = [
  {
    id: 1,
    name: "Nova",
    role: "Navigator",
    power: "Routing",
    initials: "NV",
  },
  {
    id: 2,
    name: "Flux",
    role: "State Keeper",
    power: "useState",
    initials: "FX",
  },
  {
    id: 3,
    name: "Memo",
    role: "Optimizer",
    power: "Memoization",
    initials: "MM",
  },
];

function Power({ title, name, children }) {
  return (
    <>
      <p>{title}</p>
      <p>{name}</p>
      {children}
      {/* <p>{children}</p>       wong structure */}
    </>
  );
}

// children --> It is a React element tree (JSX structure)

function App() {
  return (
    <>
      <Power title="hello" name="hello2" />
      {/*react covert the props behind the scene like this ---
       Power({ title: "hello" , name: "hello2", children: undefined}); */}

      <Power>
        <p>Hello - this will be part of children prop</p>
      </Power>

      {/*react covert the props behind the scene like this --- 
        Power({ title: undefined ,
        name: undefined,
        children: <p>Hello - this will be part of children prop</p>}); */}

      <section>
        {avatars.map((avatar) => (
          <AvatarCard
            key={avatar.id}
            level={avatar.id === 1 ? "Captain" : undefined}
            avatar={avatar}
          />
        ))}
      </section>
    </>
  );
}

export default App;
