# Weedmaps Frontend Code Challenge

###### Table of Contents
* [Prerequisites](#prerequisites)
* [Installation](#installation)
* [Challenge Requirements](#challenge-requirements)
  1. [UI Styling](#part-1-ui-styling)
  2. [Debugging](#part-2-debugging)
  3. [Logic](#part-3-logic)
  4. [Testing](#part-4-testing)
* [Architecture](#architecture)
* [Delivering Your Challenge](#delivering-your-completed-challenge)
* [API Documentation](#weedmaps-listing-api-documentation)


## Prerequisites
* **You'll need Node `>= 10` installed.** We recommend leveraging
  [nvm](https://github.com/creationix/nvm) to switch Node versions between projects.
* Install [yarn](https://yarnpkg.com/en/docs/install) if you don't already have it.

## Installation
* Ensure you're running a modern version of NodeJS as mentioned above
* From this project root, run `$ yarn install`
* To start the development server, run `$ yarn start`
* Your browser should automatically open at `http://localhost:3000` and will reload on subsequent file changes

#### Available Scripts
| Command       | Description                   |
| ------------- | ----------------------------- |
| `yarn start`  | Starts the development server |
| `yarn test`   | Starts the test runner        |
| `yarn eslint` | Runs ESLint                   |

## Challenge Requirements
There are four parts that should be completed for this code challenge: [UI Styling](#part-1-ui-styling), [Debugging](#part-2-debugging), [Logic](#part-3-logic), and [Testing](#part-4-testing). Each of the areas are documented in more detail below. They are of equal importance and should be completed to the best of your ability. For example, building a beautiful UI is appreciated but it should also be supported by a solid test suite.

### Part 1: UI Styling
Attention to detail and an aesthetic sensibility are appreciated just as much clean and performant code. The user-interface should be responsive and free of visual artifacts e.g. text wrapping, UI alignment, etc.

* UI components in this project are setup to use [Styled Components](https://www.styled-components.com/), a popular CSS-in-JS library we use in Production. It's encouraged that all new styles follow this pattern rather than adding another CSS pre-processor such as SCSS.
* Any existing UI should be styled to match the mockups referenced below. We're looking to see how you approach the CSS architecture and the techniques used to style the components.
* There are some basic styles included. The list of Storefronts, Deliveries, and Doctors rendered after clicking on the Locate Me button needs to be styled to match the mockups.
* The rating for each Listing should be rendered as a Star Rating component instead of a raw numerical value. This should be a custom solution of your own without installing a third-party library. Your implementation should account for non-whole values and take client-side performance into consideration.
* The UI should be responsive across viewports and match the mockups below for both mobile and desktop.

#### Design Mockups
<table>
   <thead>
      <tr>
         <th>Mobile</th>
         <th>Desktop</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td valign="top">
            <img src="styled-mobile.png" width="100%" />
         </td>
         <td valign="top">
            <img src="styled-desktop.png" width="100%" />
         </td>
      </tr>
   </tbody>
</table>


### Part 2: Debugging
There is an existing bug in this code base when clicking on the `Locate Me` button which prevents the Listings data from being rendered. The objective is to find the bug, fix it, and write a test to cover the edge case where appropriate.


### Part 3: Logic
When clicking on one of the Listing cards a detail page needs to be rendered to the User. There are no design mockups for this step, so feel free to reuse any existing styles or design language. You can choose to either implement this as either a "popover" style UI component or as an entirely new page. The documentation for the requisite API can be found [here](#weedmaps-listing-api-documentation) and the requirements for this feature are as follows:

1. The URL must change and support the ability to refresh the page and maintain the proper state.
2. The Listing `avatar_image`, `name`, `rating`, `phone_number`, `address`, and `business_hours` fields should be rendered on the page.

**Note:** Feel free to add any libraries that you feel would enchance the codebase or help satisfy the requirements around routing, etc.


### Part 4: Testing
This section of the challenge is to display your ability to adequately test your application. Implement thorough testing with [Jest](https://facebook.github.io/jest/) and [Enzyme](http://airbnb.io/enzyme/). **Strive for high quality test coverage of all critical paths rather than 100% test coverage.**


## Architecture
The state of the application should be managed using [Redux](http://redux.js.org). Components should utilize data from a Redux store and the general structure of the application has been provided and should look similar to the following:

```
src
├── __test__
│   └── mocks
│       ├── coord-mock.json
│       └── location-mock.json
├── actions
│   ├── actions.test.js
│   └── index.js
├── assets
│   └── logo.png
├── components
│   ├── App.js
│   ├── App.test.js
│   ├── avatar
│   │   └── index.js
│   ├── listing_card
│   │   └── index.js
│   ├── listing_cards
│   │   └── index.js
│   └── styles.js
├── constants
│   ├── ActionTypes.js
│   └── config.js
├── icons
│   ├── delivery.js
│   ├── dispensary.js
│   ├── doctor.js
│   ├── locate.js
│   └── map-pin.js
├── index.js
├── reducers
│   ├── index.js
│   ├── location.js
│   └── location.test.js
├── setupTests.js
└── store
    └── configureStore.js
```


## Delivering Your Completed Challenge
* Please do NOT include any `.git` history or `/node_modules` directories
* Zip your completed work and submit it through the URL provided near the bottom of the original code challenge email


## Weedmaps Listing API Documentation
Given a request, this API will return the listings info based on the listing `wmid` parameter used from the location response. `https://api-g.weedmaps.com/wm/v2/listings/{wmid}`

#### Example Request:
```shell
$curl -X GET
"https://api-g.weedmaps.com/wm/v2/listings/338253056 -H "accept: application/json"
```

#### Example Response:
```
"data":{
   "listing":{
      "id":3864,
      "name":"QUIKBUDS Premium Delivery - Irvine",
      "slug":"quikbuds-premium-delivery-irvine",
      "state":"CA",
      "city":"Irvine",
      "type":"delivery",
      "wmid":338253056,
      "latitude":33.68201,
      "longitude":-117.787211,
      "web_url":"https://weedmaps.com/deliveries/quikbuds-premium-delivery-irvine",
      "package_level":"listing_plus",
      "feature_order":20,
      "ranking":2.9365390298238,
      "rating":5,
      "reviews_count":3,
      "avatar_image":{
         "small_url":"https://images.weedmaps.com/deliveries/000/003/864/avatar/square_fill/1510580774-Smaller_Quikbuds.jpg"
      },
      "license_type":"medical",
      "address":"",
      "distance":null,
      "zip_code":"92604",
      "timezone":"America/Los_Angeles",
      "intro_body":"<p>TRY AND SEE THE DIFFERENCE WITH OUR PRIVATE RESERVE HIGH QUALITY STRAINS! ALL OUR VOLUNTEERS ARE HELPFUL AND COMPASSIONATE AND WILL ANSWER ANY QUESTIONS YOU MAY HAVE. ALL DELIVERIES NORMALLY WITHIN ONE HOUR. 100% CA COMPLIANT AND REQUIRE ALL OUR MEMBERS TO BE AS WELL. THANKYOU......QUIKBUDS</p>",
      "static_map_url":"https://staticmap.weedmaps.com/static_map/13/33.68201/-117.787211/402/147/map.png",
      "open_now":true,
      "closes_in":516,
      "todays_hours_str":" 8:00am - 12:00am",
      "min_age":18,
      "menu_items_count":106,
      "verified_menu_items_count":30,
      "endorsement_badge_count":15,
      "is_published":true,
      "online_ordering":{
         "enabled_for_pickup":false,
         "enabled_for_delivery":false
      },
      "retailer_services":[
         "delivery"
      ],
      "description":"<p>SE REVIEWS @ quikbuds.com FIRST TIME MEMBERS GET A 4.5 GRAM 1/8TH OR $5 OFF YOUR CONCENTRATES WAX WENESDAY $5 OFF ALL YOUR CONCENTRATES ALL DAY! CALL NOW! 714-697-7003 FREE GRAM FOR BIRTHDAY'S! 10% OFF FOR VETERANS, SENIORS, DISABILITY AND TERMINAL ILLNESS!</p>",
      "first_time_announcement":"",
      "announcement":"<p>SEE REVIEWS@ quikbuds.com FIRST TIME MEMBERS GET A FREE GRAM ON A 1/8TH OR MORE ORDER OR $5 OFF YOUR CONCENTRATES CALL NOW! 714-697-7003 FREE GRAM FOR BIRTHDAY'S! 10% OFF FOR VETERANS, SENIORS, DISABILITY AND TERMINAL ILLNESS!</p>",
      "country":"USA",
      "phone_number":"714-697-7003",
      "email":"quikbuds@gmail.com",
      "website":"http://quikbuds.com",
      "has_handicap_access":false,
      "has_photos":true,
      "has_videos":false,
      "accepts_credit_cards":false,
      "has_testing":false,
      "is_recreational":false,
      "has_atm":false,
      "has_security_guard":false,
      "is_verified_seller":true,
      "has_endorsement_badges":true,
      "has_age_gate":false,
      "license_number":"",
      "licenses":[

      ],
      "business_hours":{
         "sunday":{
            "open":"8:00am",
            "close":"12:00am"
         },
         "monday":{
            "open":"8:00am",
            "close":"12:00am"
         },
         "tuesday":{
            "open":"8:00am",
            "close":"12:00am"
         },
         "wednesday":{
            "open":"8:00am",
            "close":"12:00am"
         },
         "thursday":{
            "open":"8:00am",
            "close":"12:00am"
         },
         "friday":{
            "open":"8:00am",
            "close":"12:00am"
         },
         "saturday":{
            "open":"8:00am",
            "close":"12:00am"
         }
      },
      "social":{
         "facebook_id":"Quikbuds-Medical-Marijuana-Delivery/493805570753259",
         "instagram_id":"http://instagram.com/quikbuds",
         "twitter_id":"https://twitter.com/QuikBuds",
         "youtube_ids":[

         ]
      },
      "region":{
         "id":166,
         "name":"Irvine",
         "slug":"lake-forest",
         "region_path":"united-states/california/lake-forest"
      },
      "member_since":"2013",
      "price_aggregations":{
         "unit":{
            "units":"1",
            "min":2,
            "max":80
         },
         "gram":[
            {
               "units":"1/2",
               "min":15,
               "max":40
            },
            {
               "units":"1",
               "min":12,
               "max":70
            },
            {
               "units":"2",
               "min":50,
               "max":120
            }
         ],
         "ounce":[
            {
               "units":"1/8",
               "min":40,
               "max":110
            },
            {
               "units":"1/4",
               "min":70,
               "max":250
            },
            {
               "units":"1/2",
               "min":120,
               "max":170
            },
            {
               "units":"1",
               "min":200,
               "max":325
            }
         ]
      }
   }
}
```
