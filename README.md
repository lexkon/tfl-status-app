## The Brief
A site has been commissioned for a London based organisation.
They wish to make their staff aware of the latest underground delays. To facilitate this a widget has been proposed for their site that will display information about each of the lines.
The widget should obtain the data provided by the API, how you do this is down to your personal preference.

## API Details
* To sign up go to: https://api-portal.tfl.gov.uk/signup
* Once signed up you will need to obtain an App Key by subscribing to a Product: https://api-portal.tfl.gov.uk/products
* This App Key must be used in all requests per the TFL terms and conditions.
* API Documentation can be found here: https://api-portal.tfl.gov.uk/apis

## User stories
**Scenario: User viewing tube lines**
* Given I’m a user to the site
* Then I visit /travel
* Then I see a widget showing the last time it was updated
* Then I see a table with a list of all London Underground lines
* Then I see next to each line a status
* Then I see next to each line a View More link
* Finally I click one of the view more links and I’m taken to a full details page for the line.

**Scenario: User viewing line details with disruptions**
* Given I’m a user to the site viewing a line details page with disruptions
* Then I see a widget showing the last time it was updated
* Then I see the name of the line
* Then I see a message showing details of the disruption
* Finally I see a “Go Back” link which when clicked takes me back to the tube listing page

## Installation & Set up
1. Clone the repo and `cd` into the folder
2. `npm i` all dependencies
3. Follow API instruction above and create a `.env` file with `PRIMARY_KEY` and `SECONDARY_KEY`
4. `npm run dev` and visit `localhost:3000`