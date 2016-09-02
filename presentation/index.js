import React, { Component } from "react";
import {
  Appear,
  CodePane,
  Code,
  Deck,
  Heading,
  Image,
  ListItem,
  List,
  Slide,
  Spectacle,
  Text
} from "spectacle";
import preloader from "spectacle/lib/utils/preloader";
import createTheme from "spectacle/lib/themes/default";
import CodeSlide from 'spectacle-code-slide';
import "normalize.css";
import "spectacle/lib/themes/default/index.css";

const images = {
    mindblown: require("../assets/mindblown.gif"),
    astexplorer: require("../assets/astexplorer.png"),
    wat: require("../assets/wat.gif"),
    foobar: require("../assets/foobarast.png"),
    questions: require("../assets/questions.gif")
};

preloader(images);

const theme = createTheme({
    primary: "#000",
    secondary: "#fff"
});

export default class Presentation extends Component {
  render() {
      return (
      <Spectacle theme={theme}>
        <Deck transition={["slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit lineHeight={1}>
              Transforming JavaScript...
            </Heading>

            <Heading size={2} fit caps textColor lineHeight={1}>
                with JavaScript
            </Heading>

            <Heading size={4} fit textColor="#2196f3">
              A gentle introduction to JSCodeShift
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
              <Heading size={1} fit lineHeight={1}>
                  What is JSCodeShift?
              </Heading>

              <Appear>
                    <Text textColor="secondary">
                        An open-source toolkit (created by Facebook) that allows any developer to programatically
                        transform JavaScript source files, using a jQuery-like API
                    </Text>
              </Appear>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary" notes="You can even put notes on your slide. How awesome is that?">
            <Image src={images.mindblown.replace("/", "")} margin="0px auto 40px" height="700px" width="700px" />
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
              <Heading size={1} fit textColor="secondary" caps>
                  Usage of Codemods @ Spredfast
              </Heading>

              <List>
                <Appear><ListItem>Migration from QUnit to Mocha/Chai</ListItem></Appear>
                <Appear><ListItem>Migration of runtime libs (Redux `connect` helper to pure `connect`)</ListItem></Appear>
                <Appear><ListItem>Reselect createSelector >> createStructuredSelector</ListItem></Appear>
                <Appear><ListItem>react-lib Button component updates</ListItem></Appear>
                <Appear><ListItem>Upcoming: Skin-Deep >> Enzyme</ListItem></Appear>
              </List>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
              <Heading size={1} fit textColor="secondary" caps>
                  Vocabulary
              </Heading>

              <List>
                <Appear><ListItem>Codemod</ListItem></Appear>
                <Appear><ListItem>AST (Abstract Syntax Tree)</ListItem></Appear>
                <Appear><ListItem>Node</ListItem></Appear>
                <Appear><ListItem>Path</ListItem></Appear>
                <Appear><ListItem>Collection</ListItem></Appear>
                <Appear><ListItem>Recast</ListItem></Appear>
                <Appear><ListItem>ast-types</ListItem></Appear>
              </List>
          </Slide>

          <Slide>
              <Heading size={1} textColor="secondary" fit>
                  What you need to get started
              </Heading>
              <List>
                  <Appear><ListItem>A Computer</ListItem></Appear>
                  <Appear><ListItem>www.astexplorer.net</ListItem></Appear>
              </List>
              <Appear>
                  <Heading textColor="#2196f3" size={2}>That's it!</Heading>
              </Appear>
          </Slide>

          <Slide bgImage={images.astexplorer}>
              <Appear><Image src={images.wat} /></Appear>
          </Slide>

          <Slide>
              <Heading size={1} textColor="secondary" lineHeight={1.5}>
                  A Sample AST
              </Heading>
              <CodePane
                lang="js"
                source="var foo = 'bar';"
                textSize={30}
                textAlign="center"
              />
          </Slide>

          <Slide>
              <Heading size={1} textColor="secondary" lineHeight={1.5} fit>
                  A Sample AST (continued)
              </Heading>
              <Image src={images.foobar} width={600} height={600} />
          </Slide>

          <CodeSlide
            lang="js"
            transition={[]}
            code={require("raw!../assets/base-codemod.example")}
            ranges={[
                { loc: [0, 0], title: "Anatomy of a codemod" },
                { loc: [0, 1], title: "Signature" },
                { loc: [1, 2], title: "The Magical `j`" },
                { loc: [3, 4], title: "Parsing" },
                { loc: [5, 6], title: "Mutate away" },
                { loc: [7, 8], title: "Serialize and return" }
            ]}
          />

          <Slide>
              <Heading size={1} textColor="secondary" lineHeight={1.5} fit>
                  Baby's First Codemod
              </Heading>
              <Appear>
                  <Heading size={4} textColor="secondary">
                    Objective: Rename all the <Code textColor="#ccc">Foo</Code> variables to <Code textColor="#ccc">Boo</Code>
                  </Heading>
              </Appear>
          </Slide>

          <Slide>
              <Heading size={1} textColor="secondary" lineHeight={1.5} fit>
                  Baby's First Codemod (continued)
              </Heading>
              <CodePane
                lang="js"
                source={require("raw!../assets/foo-input.example")}
                textSize={30}
              />
          </Slide>

          <CodeSlide
            lang="js"
            transition={[]}
            code={require("raw!../assets/foobar-codemod.example")}
            ranges={[
                { loc: [0, 1], title: "Signature" },
                { loc: [1, 2], title: "Our favorite `j`" },
                { loc: [3, 4], title: "Parse" },
                { loc: [4, 5], title: "Find Target Variables" },
                { loc: [5, 6], title: "Replacement + Builder" },
                { loc: [6, 7], title: "Serialize" }
            ]}
          />

          <Slide>
              <Heading size={1} textColor="secondary" lineHeight={1.5} fit>
                  Baby's First Codemod (continued)
              </Heading>
              <CodePane
                lang="js"
                source={require("raw!../assets/foo-output.example")}
                textSize={30}
              />
          </Slide>

          <Slide>
              <Heading size={1} textColor="secondary" lineHeight={1.5} fit>
                  Codemod #2
              </Heading>
              <List>
                  <Appear>
                    <ListItem>
                        Find all JSX elements named <Code textColor="#ccc">Element</Code>
                    </ListItem>
                  </Appear>
                  <Appear>
                    <ListItem>
                        Find prop on each <Code textColor="#ccc">Element</Code>
                        with a prop named <Code textColor="#ccc">fontSize</Code>
                    </ListItem>
                  </Appear>
                  <Appear>
                    <ListItem>
                        If <Code textColor="#ccc">fontSize</Code> is numeric,
                        append <Code textColor="#ccc">px</Code> to the value
                    </ListItem>
                  </Appear>
              </List>
          </Slide>

          <Slide>
              <Heading size={1} textColor="secondary" lineHeight={1.5} fit>
                  Codemod #2 (continued)
              </Heading>
              <CodePane
                lang="js"
                source={require("raw!../assets/jsx-font-input.example")}
                textSize={30}
              />
          </Slide>

          <CodeSlide
            lang="js"
            textSize="27px"
            transition={[]}
            code={require("raw!../assets/jsx-font-codemod.example")}
            ranges={[
                { loc: [3, 4], title: "Parse" },
                { loc: [4, 9], title: "Find JSX Element Parent" },
                { loc: [9, 13], title: "Find fontSize prop" },
                { loc: [13, 20], title: "Mutate the prop" },
                { loc: [20, 21], title: "Serialize" }
            ]}
          />

          <Slide>
              <Heading size={1} textColor="secondary" lineHeight={1.5} fit>
                  Codemod #2 (continued)
              </Heading>
              <CodePane
                lang="js"
                source={require("raw!../assets/jsx-font-output.example")}
                textSize={30}
              />
          </Slide>
          <Slide>
              <Heading size={1} textColor="secondary" lineHeight={1.5} fit>
                  Where to find examples?
              </Heading>
              <List>
                <Appear><ListItem>https://github.com/reactjs/react-codemod</ListItem></Appear>
                <Appear><ListItem>https://github.com/cpojer/js-codemod/</ListItem></Appear>
                <Appear><ListItem>https://github.com/DrewML/codemods</ListItem></Appear>
                <Appear><ListItem>https://github.com/5to6/5to6-codemod</ListItem></Appear>
                <Appear><ListItem>https://github.com/avajs/ava-codemods</ListItem></Appear>
              </List>
          </Slide>

          <Slide>
              <Heading size={1} textColor="secondary" lineHeight={1.5}>
                  Questions?
              </Heading>
              <Image src={images.questions} width="800px" height="500px" />
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
