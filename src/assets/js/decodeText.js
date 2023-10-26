export const decodeHTMLEntities = (text) => {
  const entities = {
    '&amp;': '&',
    '&#38;': '&',
    '&#x26;': '&',
    '&lt;': '<',
    '&#60;': '<',
    '&#x3C;': '<',
    '&gt;': '>',
    '&#62;': '>',
    '&#x3E;': '>',
    '&quot;': '"',
    '&#34;': '"',
    '&#x22;': '"',
    '&#x27;': "'",
    '&#39;': "'",
    '&#x2019;': "'", // Added entity for apostrophe (’)
    '&#x201C;': '"', // Added entity for left double quotation mark (“)
    '&#x201D;': '"' // Added entity for right double quotation mark (”)
  };

  return text.replace(/&(amp|lt|gt|quot|#34|#x22|#x27|#39|#x2019|#x201C|#x201D);/g, (match) => entities[match]);
}