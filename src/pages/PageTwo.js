import React from "react";
import TranslatedRichText from "../components/TranslatedRichText";

export default function PageTwo() {
  return (
    <div className="page">
      <TranslatedRichText wrappingTag="h1">page-two.heading</TranslatedRichText>
      <TranslatedRichText wrappingTag="div">
        page-two.content
      </TranslatedRichText>
    </div>
  );
}
