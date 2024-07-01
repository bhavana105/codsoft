import React from "react";
import { Header } from "./header";
import { Banner } from "./banner";
import { Collections } from "./Collections";
import { Footer } from "./footer";
export function Home() {
  return(
    <div>
        <Header/>
        <Banner/>
        <Collections/>
        <Footer/>
</div>

  )
}


