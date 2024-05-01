import Image from "next/image";
import {Button} from '@nextui-org/button'; 
import Header from "./components/header";


export default function Home() {
  return (
    <div>
    <Header/>
    <Button>Click me</Button>
    </div>
  );
}
