import { FIREWORK_TAG_NAME } from "../constants";
import { FIREWORKS_XML_PATH } from "../constants/files";

function getDocumentFromXml(xml: string): Document {
  const parser = new DOMParser();

  return parser.parseFromString(xml, "text/xml");
}

function getFireworkElements(text: string): Element[] {
  const xmlDocument = getDocumentFromXml(text);
  const xmlFireworks = xmlDocument.getElementsByTagName(FIREWORK_TAG_NAME);

  return Array.from(xmlFireworks);
}

type FetchCallback = (xmlFireworks: Element[]) => void;

export function fetchXmlFireworks(callback: FetchCallback): void {
  fetch(FIREWORKS_XML_PATH)
    .then((response) => response.text())
    .then((data) => {
      const fireworks = getFireworkElements(data);

      callback(fireworks);
    })
    .catch(() => {
      throw new Error("Fireworks could not be loaded.");
    });
}
