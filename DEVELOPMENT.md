# Development

This project inherits all opinionation from next.js. This means that web pages are stored 
in `/pages`, public assets are stored in `/public`, and styles in `/styles`.

Added are the `/templates` directory, which stores page level template files and `/utils`, 
which store utility functions used throughout the website. There is a `/components` directory, 
but it is not added to unless a component is used in more than one component and that component 
is used in more than one page. This cuts down on the over-abstraction and brings products to 
market faster.