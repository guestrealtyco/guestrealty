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
          "api": "https://guestrealty-71f30a.ingress-comporellon.easywp.com/wp-json",
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
    "frontity-contact-form-7",
    "@frontity/head-tags",
    "@frontity/yoast"
  ]
};

export default settings;
