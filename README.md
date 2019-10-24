# Emerald Stay
React App using an API

This is a react application that shows properties from multiple pages of an API.
Using the add address URL, the app will load more properties as you scroll down until there are none left.
Once all data has been loaded, the footer is rendered.
Using the filter you can sort the properties by lowest or highest price. You can also filter by Top Picks or Reduced Rate.
Once the data is loaded it is stored in state and so does not have to make requests every time, so unlimited properties can be added.

## Quick Start

```bash
# Install server dependencies
npm install

# Run React
npm start
