### Tips for building Node.js web apps for your team project

- Do not put `node_modules/` in your Git repository. Look at [.gitignore](.gitignore)
  to see how I've ignored it from my repository.
- Since you're using JavaScript on both the frontend *and* backend, make
  sure you're aware of which code should go in the frontend and which
  should go in the backend. For instance, you should not use jQuery
  (e.g., `$.ajax()`) in your backend code.
- Try to make sure all of your teammates have the same versions of
  Node.js and npm installed (run `node -v` and `npm -v` to check your
  version numbers).
- [Glitch](https://glitch.com/) provides free web hosting and a
  web-based development environment for Node.js apps. It can also sync
  with your team's GitHub repository. Feel free to try it as one
  possible way of getting rid of incompatibilities between setups on
  your teammates' computers. (It's not mandatory, though.)
