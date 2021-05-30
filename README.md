## Wookieepedia
### The Star Wars Film Database

Welcome to Wookieepedia!

Explore all the details for all your favourite Star Wars films.

![Wookieepedia Image | Home](public/readme-image-1.png)

## Features

- _Star_ your favourite Star Wars films!
- View film details including character information and general film specs!
- Choose your allegiance - are you on the dark or light side?
- Your allegiance and starred films are saved to localStorage so you don't have to start back where you started off each time you visit :)

![Wookieepedia Image | Home](public/readme-image-2.png)

### Coming

- Film search.
- Sort films by episode number or release date.

### Known issues

- Mixed Content is preventing data loading on the detail pages, this is I believe being caused by nested references within each parent directory on the SWAPI holding http references.
- Meta image references aren't loading I believe due to SSR needing to be utilised here.

Thank you to [SWAPI](https://swapi.dev/) for making this possible!
