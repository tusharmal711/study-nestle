import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import SearchStudyMaterial from "./SearchStudyMaterial";

function DispStudyMaterial() {
  

  return (
    <>
      <Header />
    
      <SearchStudyMaterial/>
      <Footer />
    </>
  );
}

export default DispStudyMaterial;
