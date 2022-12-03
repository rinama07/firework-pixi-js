import { FIREWORK_TAG_NAME } from "../constants";
import { FIREWORKS_XML_PATH } from "../constants/path";

function formatXmlToFireworks(xml: string): Element[] {
  const xmlText = new DOMParser().parseFromString(xml, "text/xml");
  const xmlFireworks = xmlText.getElementsByTagName(FIREWORK_TAG_NAME);

  return Array.from(xmlFireworks);
}

type FetchCallback = (xmlFireworks: Element[]) => void;

export function getFireworksXmlText(callback: FetchCallback): void {
  fetch(FIREWORKS_XML_PATH)
    .then((response) => response.text())
    .then((data) => {
      const xmlFireworks = formatXmlToFireworks(data);

      callback(xmlFireworks);
    })
    .catch(() => {
      throw new Error("Fireworks could not be loaded.");
    });
}
