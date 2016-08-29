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
import "normalize.css";
import "spectacle/lib/themes/default/index.css";

const images = {
    mindblown: require("../assets/mindblown.gif"),
    astexplorer: require("../assets/astexplorer.png"),
    wat: require("../assets/wat.gif"),
    foobar: require("../assets/foobarast.png")
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
            <Image src={images.mindblown.replace("/", "")} margin="0px auto 40px" height="293px"/>
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
        </Deck>
      </Spectacle>
    );
  }
}
