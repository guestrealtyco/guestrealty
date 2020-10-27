const settings = {
  "name": "guestrealtyco",
  "state": {
    "frontity": {
      "url": "https://guestrealty.co",
      "title": "Guest Realty",
      "description": "Guest Realty is a Vacation and Residential Short-Term Long-Term Property Management Sydney Bondi Beach Australia"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "About",
              "/sub/about/"
            ],
            [
              "For Property Owners",
              "/sub/property-owners/"
            ],
            [
              "For Renters",
              "/sub/for-renters/"
            ],
            [
              "Blog",
              "/blog/"
            ]
          ],
          "featured": {
            "showOnList": true,
            "showOnPost": false
          },
          "postInfo": {
            "showOnList": true,
            "showOnPost": true
          },
          "postMeta": {
            "showOnList": true,
            "showOnPost": true
          },
          autoPrefetch: "all",
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://guestrealty.co/wp-json",
          "homepage": "/home",
          "postsPage": "/blog",
          "postTypes": [
            {
              type: "sub",
              endpoint: "sub"
            },
            {
              type: "property",
              endpoint: "property",
              archive: "/property-list"
            }
          ],
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "@frontity/wp-comments",
    "frontity-contact-form-7"
  ]
};

export default settings;
