import React, { useState, useEffect } from "react";
import Container from "../Container/index.js";
import Link from "../Link/index.js";
import Button from "../Button/index.js";
import { parseIni, fetchText, useStorage } from "../../utils/index.js";

const CreationTemplate = "CreationTemplate.ini";
const SettingsTemplate = "SettingsTemplate.ini";

const t = (c) => ![CreationTemplate, SettingsTemplate].includes(c);

const styles = {
  sectionStyle: {
    border: "1px solid #000",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  valueStyle: (active) => ({
    padding: "5px 0",
    color: active ? "#000" : "#888",
  }),
};

const Config = ({ configs }) => {
  const [templates, setTeamplates] = useState({});
  const [config, setConfig] = useStorage("config.config");
  const [rawData, setRawData] = useState("");
  const [data, setData] = useState(null);
  const [view, setView] = useStorage("config.view", "pretty");

  useEffect(() => {
    if (configs.includes(CreationTemplate)) {
    }

    if (configs.includes(SettingsTemplate)) {
    }
  }, []);

  useEffect(() => {
    config && fetchText(`data/config/${config}`).then(data => {
      setRawData(data);
      setData(parseIni(data));
    })
  }, [config]);

  return (
    <Container row>
      <Container
        style={{
          padding: 10,
          marginRight: 20,
          borderRight: "1px solid #f2f2f2",
        }}
      >
        <strong style={{ marginBottom: 10 }}>Configs</strong>
        {configs.filter(t).map((c) => (
          <Link
            active={c === config}
            onClick={() => setConfig(c)}
            key={"link-config-" + c}
            href="#"
          >
            {c.replace(/\.ini$/, "")}
          </Link>
        ))}
        <Container style={{ marginTop: 10 }}>
          <Button onClick={() => console.log("add")}>+</Button>
        </Container>
      </Container>
      <Container style={{ margin: 10 }}>
        <Container row>
          <Container style={{ marginRight: 10 }}>View:</Container>
          <Link active={view === "raw"} onClick={() => setView("raw")}>
            raw
          </Link>
          <Container style={{ margin: "0 5px" }}>|</Container>
          <Link active={view === "json"} onClick={() => setView("json")}>
            json
          </Link>
          <Container style={{ margin: "0 5px" }}>|</Container>
          <Link active={view === "pretty"} onClick={() => setView("pretty")}>
            pretty
          </Link>
        </Container>
        {data && (
          <Container
            style={{
              marginTop: 10,
            }}
          >
            {view === "raw" ? (
              <Container>
                <textarea value={rawData}></textarea>
              </Container>
            ) : view === "json" ? (
              <pre style={{ margin: 0, padding: 0 }}>
                {JSON.stringify(data, null, 2)}
              </pre>
            ) : (
              data.map(({ name, values }, sectionKey) => (
                <Container
                  key={["section", sectionKey].join("-")}
                  style={styles.sectionStyle}
                >
                  <Container row>
                    <strong>[{name}]</strong>
                    <Container
                      style={{
                        marginLeft: 10,
                        fontStyle: "italic",
                        color: "#888",
                      }}
                    >
                      parent
                    </Container>
                  </Container>
                  {values.map(({ key, value, active, comment }, valueKey) => (
                    <Container
                      key={["section", sectionKey, "value", valueKey].join("-")}
                      style={styles.valueStyle(active)}
                      row
                    >
                      <input type="checkbox" checked={active} />
                      <strong style={{ margin: "0 10px" }}>{key}</strong>
                      <Container style={{ textAlign: "right" }}>
                        {value}
                      </Container>
                    </Container>
                  ))}
                </Container>
              ))
            )}
          </Container>
        )}
      </Container>
    </Container>
  );
};

export default Config;
