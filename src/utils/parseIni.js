const ftrim = (s) => s.trim();

const parseIni = (content) => {
  const data = [];
  let currentSection = null;

  if (!content) return data;

  content.split(/[\n\r]+/g).forEach((line) => {
    line = line.trim();

    if (line.startsWith("[") && line.endsWith("]")) {
      currentSection = {
        name: line.substr(1, line.length - 2),
        parent: null,
        oneAt: false,
        twoAt: false,
        values: [],
      };
      data.push(currentSection);
    }

    if (line.includes("=")) {
      let [keyX, valueX] = line.split(/ *= */, 2).map(ftrim);
      let [active, key] = keyX.split(";").map(ftrim);
      const [value, comment] = valueX.split(";").map(ftrim);

      if (!key) {
        key = active;
        active = true;
      } else {
        active = false;
      }

      currentSection.values.push({
        key,
        value,
        active: !line.startsWith(";"),
        comment,
      });
    }
  });

  return data;
};

export default parseIni;
