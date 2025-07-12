import type { Route } from "./+types/home";
import MyButton from "~/components/MyButton";
import { Welcome } from "../welcome/welcome";
import Profile from "~/components/Person";
import type Person from "~/types/Person";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const person :Person = {
    name:"Lindo",
    imageUrl:
      "https://www.google.com/imgres?q=stitch%20wallpaper&imgurl=https%3A%2F%2Fwww.chromethemer.com%2Fdownload%2Fhd-wallpapers%2Fstitch-3840x2160.jpg&imgrefurl=https%3A%2F%2Fwww.chromethemer.com%2Fwallpapers%2F4k-wallpapers%2Fstitch-wallpaper-desktop-4k.html&docid=2_JBCdi20dWSmM&tbnid=LXXqoZ2ZVdIOnM&vet=12ahUKEwjcrefP97aOAxWQWUEAHS6oNmsQM3oECFAQAA..i&w=3840&h=2160&hcb=2&ved=2ahUKEwjcrefP97aOAxWQWUEAHS6oNmsQM3oECFAQAA",
    imageSize : 90,

  }
  return (
  <div>
    <h1>Welcome to Entelect</h1>
    <MyButton  />
    <Profile person={person}/>
  </div>
  );

}
