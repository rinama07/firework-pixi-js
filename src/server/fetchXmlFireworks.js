import { FIREWORK_TAG_NAME } from "../constants";
import { FIREWORKS_XML_PATH } from "../constants/files";

function getDocumentFromXml(xml) {
  const parser = new DOMParser();

  return parser.parseFromString(xml, "text/xml");
}

function getFireworkElements(text) {
  const xmlDocument = getDocumentFromXml(text);
  const xmlFireworks = xmlDocument.getElementsByTagName(FIREWORK_TAG_NAME);

  return Array.from(xmlFireworks);
}

export function fetchXmlFireworks(callback) {
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
