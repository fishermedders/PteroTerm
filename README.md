# PteroTerm

PteroTerm is a script that I threw together very quickly to achieve some sort of cool factor with the new Windows Terminal. It allows you to stream your pterodactyl console's websocket to your very own terminal! wow! I wanted to create tabs for each of my pterodactyl servers that I could easily identify and not have to switch between servers in pterodactyl's UI.

## Usage

Usage is very simple. It is meant to be used in conjunction with `bashrc` aliases or through Windows Terminal. Although, you can use it on its own, it would be better to set an alias or something.

```
node . <panel url> <api key> <server uuid> [terminal title/display name]
```

Note that the terminal title is optional and simply names the terminal, and if your title contains spaces you can wrap it with double quotes (" ")

here is an example of how one would setup an alias

```
alias hub='node . <panel url> <api key> <server uuid> [terminal title/display name]'
```

## Screenshots

Here is a server starting up!

![a server starting up](https://raw.githubusercontent.com/fishermedders/PteroTerm/main/readme_assets/server_startup.gif)

And here, we have command history

![command history](https://raw.githubusercontent.com/fishermedders/PteroTerm/main/readme_assets/command_history.gif)

## License

[How could life be easier? You just DO WHAT THE FUCK YOU WANT TO.](https://github.com/fishermedders/PteroTerm/blob/main/LICENSE.md)